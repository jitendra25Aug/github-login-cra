import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthWrapper, Error, Home, Login, PrivateRoute, SharedLayout, SingleRepo } from "./pages";

const App = () => {

  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />} >
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