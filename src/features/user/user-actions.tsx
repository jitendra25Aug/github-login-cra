import { fetchData } from "../../utils/api";
import { rootUrl } from "../../utils/data";
import { userSliceActions } from "./user-slice";

export const fetchTrendingRepos = (date: string = new Date().toJSON().slice(0, 10)) => {
    return async (dispatch: (arg: any) => void) => {
        dispatch(userSliceActions.getRepoBegin(true));
        dispatch(userSliceActions.setError(false));
        const fetchRequest = async () => {
            try {
                const response = await fetchData(`${rootUrl}/search/repositories?q=created:${date}&&per_page=30&&sort=stars`);
                dispatch(userSliceActions.setRepos({ repos: response.data.items }));
                dispatch(userSliceActions.getRepoBegin(false));
            } catch (error: any) {
                dispatch(userSliceActions.setError(true));
                dispatch(userSliceActions.getRepoBegin(false));
            }
        }
        fetchRequest();
    }
}