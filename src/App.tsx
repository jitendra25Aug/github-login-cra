import { withAuthenticationRequired } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthWrapper, Error, Home, Login, PrivateRoute, SharedLayout, SingleRepo } from "./pages";

const App = () => {

  const ProtectedRoute = ({ component, ...args }: any) => {
    const Component = withAuthenticationRequired(component, args);
    return <Component />;
  };

  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute component={SharedLayout} />} >
            <Route index element={<PrivateRoute> <Home /> </PrivateRoute>} />
            <Route path=":owner/:repoName" element={<PrivateRoute> <SingleRepo /> </PrivateRoute>} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;