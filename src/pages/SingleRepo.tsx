import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";
import styled from "styled-components";
import { Error } from ".";
import { Card, Loading } from "../components";

/**
 * DISPLAYS THE DETAILS ABOUT PARTICULAR REPOSITORY.
 */

const SingleRepo = () => {
    const { repoName } = useParams();
    const { repos, isLoading } = useSelector((store: any) => store.userSlice);
    const [currentRepo, setCurrentRepo] = useState<any>(null);
    const [isError, setIsError] = useState(false);
    const { isAuthenticated, user } = useAuth0();

    useEffect(() => {
        if (!isLoading && repos.length) {
            const currentRepo = repos.filter((repo: any) => repo.name === repoName);
            if (currentRepo.length === 0) { setIsError(true); }
            setCurrentRepo(currentRepo[0]);
        }
    }, [repos, repoName, isLoading])

    if (isLoading) { return <Loading /> }
    if (isError) { return <Error /> }
    if (!currentRepo) { return (<Loading />) }

    if (!(isAuthenticated && user)) {
        return <Navigate to='/login' />;
    }

    return (
        <section className='section'>
            <Wrapper className='section-center'>
                <Card>
                    <div className="card-header">
                        <h3>{currentRepo.owner.login} / <span>{repoName}</span></h3>
                    </div>
                    <div className="card-body">
                        <article className="repo-row">
                            <p>
                                <span className="span-heading">Description: </span>
                                <span>{currentRepo.description}</span>
                            </p>
                            <div className="more-info">
                                {currentRepo.language && (
                                    <p>
                                        <span className="inline-block">
                                            <span className="span-heading">Language: </span>
                                            <span>{currentRepo.language}</span>
                                        </span>
                                    </p>
                                )}
                                {(currentRepo.stargazers_count || currentRepo.stargazers_count >= 0) && (
                                    <p>
                                        <span className="inline-block">
                                            <span className="span-heading">Watchers: </span>
                                            <span>{currentRepo.stargazers_count}</span>
                                        </span>
                                    </p>
                                )}
                                {(currentRepo.forks_count || currentRepo.forks_count >= 0) && (
                                    <p>
                                        <span className="inline-block">
                                            <span className="span-heading">Forks: </span>
                                            <span>{currentRepo.forks_count}</span>
                                        </span>
                                    </p>
                                )}
                                {(currentRepo.created_at && (currentRepo.created_at.trim()).length >= 0) && (
                                    <p>
                                        <span className="inline-block">
                                            <span className="span-heading">Created At: </span>
                                            <span>{currentRepo.created_at.slice(0, 10)}</span>
                                        </span>
                                    </p>
                                )}
                            </div>
                        </article>
                    </div>
                </Card>
            </Wrapper>
        </section>
    );
}

const Wrapper = styled.div`
margin-top: 4rem;
.card-header{
    background-color: var(--color-canvas-subtle);
    border: 1px solid var(--color-border-default);
    border-top-left-radius: var(--borderRadius-medium);
    border-top-right-radius: var(--borderRadius-medium);
    margin: calc(var(--borderWidth-thin)*-1) calc(var(--borderWidth-thin)*-1) 0;
    padding: 1rem;
    h3{
        color: var(--color-accent-fg);
        margin: 0;
    }
}
    
.repo-row{
    border-top: var(--borderWidth-thin) solid var(--color-border-muted);
    margin-top: calc(var(--borderWidth-thin) * -1);
    padding: var(--stack-padding-normal, 16px);
}

.span-heading{
    font-weight: bolder;
}
svg{
    margin-right: 0.3rem;
    color: var(--color-fg-muted);
    display: inline-block;
    overflow: visible;
    vertical-align: text-bottom;
    fill: currentColor;
}

p{
    width: 75%;
    color: var(--color-fg-muted);
    margin-top: 4px;
    margin-bottom: 4px;
    padding-right: 24px;
}

.more-info{
    font-size: 14px;
    margin-top: 8px;
    color: var(--color-fg-muted);
    .inline-block{
        display: inline-block;
        margin-right: 16px;
        margin-left: 0;
    }
    .repo-language-color{
        position: relative;
        top: 1px;
        display: inline-block;
        width: 12px;
        height: 12px;
        border: 1px solid var(--color-primer-border-contrast);
        border-radius: 50%;
        margin-right: 4px;
    }
}

@media (min-width: 768px){ 
    .card-header {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .repo-row{
        h2{
            font-size: 20px;
        }
    }
}
`;
export default SingleRepo;