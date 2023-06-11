import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues } from "../utils/helper";

/*
 * CONTAINS THE FILTERS FUNCTIONALITY
 */

const dateRanges = ['Today', 'This week', 'This month'];
const Filters = () => {
    const { all_repository, filters: { language, dateRange }, updateFilters } = useFilterContext();
    const languages = getUniqueValues('language', all_repository);

    return (
        <Wrapper>
            <div className="content">
                <form onSubmit={(e) => e.preventDefault()} className="form">
                    {/* Language */}
                    <div className="form-control">
                        <label htmlFor="language">Language: </label>
                        <select name="language" className="language" value={language} onChange={updateFilters}>
                            {languages.map((lng: any, index: number) => {
                                return <option key={index} value={lng}>{lng}</option>
                            })}
                        </select>
                    </div>
                    {/* Date Range */}
                    <div className="form-control">
                        <label htmlFor="dateRange">Date range: </label>
                        <select name="dateRange" className="language" value={dateRange} onChange={updateFilters}>
                            {dateRanges.map((dateRange, index) => {
                                return <option key={index} value={dateRange}>{dateRange}</option>
                            })}
                        </select>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
color: var(--color-fg-muted);
.form{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
}
.form-control{
    padding-right: 15px;
    padding-left: 15px;
}

.language{
    background-color: transparent;
    border-radius: var(--radius);
    border-color: transparent;
    color: var(--color-fg-muted);
    option{
        color: var(--color-fg-default);
        background-color: var(--color-canvas-overlay);
    }
}
`;

export default Filters;