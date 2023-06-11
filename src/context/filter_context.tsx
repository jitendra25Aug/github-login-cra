import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingRepos } from "../features/user/user-actions";
import filter_reducer from "../reducers/filter_reducer";

const FilterContext = createContext<any>({});

export const useFilterContext = () => {
    return useContext(FilterContext);
}

const initialState = {
    all_repository: [], filtered_repository: [],
    filters: { language: 'Any', dateRange: 'Today' },
};

type Props = { children: ReactNode }

export const FilterProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(filter_reducer, initialState);
    const { repos } = useSelector((store: any) => store.userSlice);
    const dispatchUserActions = useDispatch();

    useEffect(() => {
        dispatch({ type: "LOAD_REPOSITORY", payload: { repos } })
    }, [repos]);

    useEffect(() => {
        dispatch({ type: "FILTER_REPOSITORY" });
    }, [state.filters]);

    const handleDateRange = (value: string) => {
        const date = new Date();
        let day: string | number = date.getDate();
        let month: string | number = Number(date.getMonth()) + 1;
        const year = date.getFullYear();
        if (value === 'This month') {
            month = month - 1;
            if (day < 10) { day = `0${day}`; }
            if (month < 10) { month = `0${month}`; }
            dispatchUserActions(fetchTrendingRepos(`${year}-${month}-${day}`) as any);
        }
        if (value === 'This week') {
            day = Number(day) - 7;
            if (day < 10) { day = `0${day}`; };
            if (Number(day) < 1) { day = 30 + Number(day); }
            if (month < 10) { month = `0${month}`; }
            dispatchUserActions(fetchTrendingRepos(`${year}-${month}-${day}`) as any);
        }
        if (value === 'Today') {
            if (day < 10) { day = `0${day}`; }
            if (month < 10) { month = `0${month}`; }
            dispatchUserActions(fetchTrendingRepos(`${year}-${month}-${day}`) as any);
        }
    }

    const updateFilters = (e: any) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === 'dateRange') {
            handleDateRange(value);
        }
        dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
    }
    return (
        <FilterContext.Provider value={{ ...state, updateFilters}}>
            {children}
        </FilterContext.Provider>
    );
}