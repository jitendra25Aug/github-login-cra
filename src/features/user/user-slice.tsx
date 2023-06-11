import { createSlice } from "@reduxjs/toolkit";

const initialState = { repos: [], isLoading: false, isError: false };

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        getRepoBegin(state, action) {
            state.isLoading = action.payload;
        },
        setError(state, action) {
            state.isError = action.payload;
        },
        setRepos(state, action) {
            const data = action.payload.repos;
            state.repos = data;
        }
    }
});

export const userSliceActions = userSlice.actions;
export default userSlice;