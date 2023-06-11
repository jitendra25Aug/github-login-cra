import { useSelector } from "react-redux";
import { Loading, Repos } from "../components";


/*
 * DISPLAYS THE LIST OF REPOSITORIES
 */

const Home = () => {
    const { isLoading } = useSelector((store: any) => store.userSlice);

    if (isLoading) { return (<Loading />) }
    // if (isError) { return <Error /> }

    return (<Repos />);
}

export default Home;