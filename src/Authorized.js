import { Route, Routes } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import TournamentDetail from "./containers/Tournament/Detail";
import { Navbar, Topbar } from "./components";
import Tournament from "./containers/Tournament"
import PartnerPage from "./containers/Partner"
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
            <Route path="/partner" element={<PartnerPage />} />
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
  width: 100%;
`;
export default Authorized;
