import { Route, Routes } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import TournamentDetail from "./containers/Tournament/Detail";
import { Navbar, Topbar } from "./components";
import Tournament from "./containers/Tournament"
import styled from "styled-components";
const Authorized = () => {
  return (
    <AuthorizedContainer>
      <Topbar />
      <ContentContainer>
        <Navbar />
        <Content>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/statistic" element={<div>statistic</div>} />
            <Route path="/tournament" element={<Tournament />} />
            <Route path="/tournament/:id" element={<TournamentDetail />} />
          </Routes>
        </Content>
      </ContentContainer>
    </AuthorizedContainer>
  );
};
const AuthorizedContainer = styled.div``;
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  padding: 20px 0;
  margin: 0 auto;
  min-width: 1140px;
`;
export default Authorized;
