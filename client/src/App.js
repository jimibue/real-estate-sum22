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
import { normalize } from 'styled-normalize'

import { createGlobalStyle } from "styled-components";
import Available from "./pages/Available";

const GlobalStyle = createGlobalStyle`
   ${reset}
`;

const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <>
      <FetchUser>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/available" element={<Available />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<UserAccount />} />
          </Route>
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </FetchUser>
    </>
  </>
);

export default App;
