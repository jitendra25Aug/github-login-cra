import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

/**
 * @returns REACT ELEMENT WHICH DISPLAYS EITHER LOGIN PAGE OR HOME PAGE
 */

type Props = { children: ReactNode }

const PrivateRoute = ({ children }: Props) => {
    const { isAuthenticated, user } = useAuth0();
    const isUser = isAuthenticated && user;

    if (!isUser) {
        return <Navigate to='/login' />;
    }

    return <>{children}</>
}

export default PrivateRoute;