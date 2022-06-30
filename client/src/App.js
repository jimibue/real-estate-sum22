import Home from "./components/shared/Home";
import NoMatch from "./components/shared/NoMatch";
import Navbar from "./components/shared/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UserAccount from "./components/shared/UserAccount";
import FetchUser from "./components/auth/FetchUser";
import Hooks from "./demos/Hooks";
import reset from "styled-reset";

import { createGlobalStyle } from "styled-components";
import Available from "./pages/available/Available";
import { Container } from "semantic-ui-react";
import Cities from "./pages/cities/Cities";
import Buyers from "./pages/buyers/Buyers";

const GlobalStyle = createGlobalStyle`
   ${reset}
`;

const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <>
      <Container>
        <FetchUser>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/available" element={<Available />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/buyers" element={<Buyers />} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/account" element={<UserAccount />} />
            </Route>
            <Route path="/*" element={<NoMatch />} />
          </Routes>
        </FetchUser>
      </Container>
    </>
  </>
);

export default App;
