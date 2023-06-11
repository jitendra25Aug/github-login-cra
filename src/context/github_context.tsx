import {  useEffect, createContext, ReactNode, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { fetchTrendingRepos } from '../features/user/user-actions';

type Props = { children: ReactNode }

// CONTEXT
const GithubContext = createContext({});
export const useGithubContext = () => {
    return useContext(GithubContext);
}

// GLOBAL CONTEXT PROVIDER
const GithubProvider = ({ children }: Props) => {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthenticated && user) {
            dispatch(fetchTrendingRepos() as any)
        }
    }, [user]);

    return (
        <GithubContext.Provider value={{ loginWithRedirect, logout }}>
            {children}
        </GithubContext.Provider>
    );
};

export default GithubProvider;
