import { Link } from "react-router-dom";
import styled from "styled-components";
import { Card, Filters } from ".";
import { useFilterContext } from "../context/filter_context";

/*
 * DISPLAYS THE LIST OF REPOSITORIES
 */

const Repos = () => {
    const { filtered_repository } = useFilterContext();

    return (
        <section className='section'>
            <Wrapper className='section-center'>
                <Card>
                    <div className="card-header">
                        <Filters />
                    </div>
                    <div className="card-body">
                        {filtered_repository &&
                            filtered_repository.map((repo: any) => {
                                const { id, description, language, owner, name, stargazers_count, forks_count } = repo;
                                return (
                                    <article className="repo-row" key={id}>
                                        <h2>
                                            <Link to={`/${owner.login}/${name}`} >
                                                <svg height="16" viewBox="0 0 16 16" width="16">
                                                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                                                </svg>
                                                {owner.login} / <span> {name}</span></Link>
                                        </h2>
                                        <p>
                                            {description}
                                        </p>
                                        <div className="more-info">
                                            {language && (
                                                <span className="inline-block">
                                                    <span className="repo-language-color" style={{ backgroundColor: '#3572A5' }}></span>
                                                    <span>{language}</span>
                                                </span>)
                                            }
                                            {(stargazers_count || stargazers_count >= 0) && (<span className="inline-block">
                                                <svg height="16" viewBox="0 0 16 16" width="16">
                                                    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                                                </svg>
                                                {stargazers_count}
                                            </span>)}
                                            {(forks_count || forks_count >= 0) && (<span className="inline-block">
                                                <svg height="16" viewBox="0 0 16 16" width="16">
                                                    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                                                </svg>
                                                {forks_count}
                                            </span>)}
                                        </div>
                                    </article>
                                );
                            })
                        }
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
}

.repo-row{
    border-top: var(--borderWidth-thin) solid var(--color-border-muted);
    margin-top: calc(var(--borderWidth-thin) * -1);
    padding: 1rem;
    h2{
        line-height: 1.25;
        font-size: 18px;
        span{
            font-weight: 700;
        }
    }
    a{
        color: var(--color-accent-fg);
    }
    a:hover{
        text-decoration: underline;
    }
}
svg{
    margin-right: 0.65rem;
    color: var(--color-fg-muted);
    display: inline-block;
    overflow: visible;
    vertical-align: middle;
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
    font-size: 12px;
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
    svg{
        margin-right: 0.3rem;
        vertical-align: text-bottom;
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

export default Repos;