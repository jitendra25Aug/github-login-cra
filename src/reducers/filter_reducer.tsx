const filter_reducer = (state:any, action:any) => {
    if (action.type === "LOAD_REPOSITORY") {
        return {
            ...state, all_repository: [...action.payload.repos], filtered_repository: [...action.payload.repos],
            filters: { ...state.filters }
        };
    }

    // Filters
    if (action.type === "UPDATE_FILTERS") {
        const { name, value } = action.payload;
        return { ...state, filters: { ...state.filters, [name]: value } };
    }

    if (action.type === "FILTER_REPOSITORY") {
        const { language } = state.filters;
        let tempRepos = [...state.all_repository];

        if (language !== 'Any') {
            tempRepos = tempRepos.filter((repo) => { return repo.language === language; })
        }

        return { ...state, filtered_repository: [...tempRepos] };
    }
    
    throw new Error(`No matching ${action.type} - action type`);
}
export default filter_reducer;