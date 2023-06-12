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
          <Route path="/" element={<PrivateRoute> <SharedLayout /> </PrivateRoute>} >
            <Route index element={<PrivateRoute> <Home /> </PrivateRoute>} />
            <Route path="repos/:repoName" element={<ProtectedRoute component={SingleRepo} />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;