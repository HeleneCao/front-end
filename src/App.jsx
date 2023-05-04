import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Layout from "./components/layouts/Layout.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import IncubateurPage from "./pages/IncubateurPage.jsx";
import PlanningPage from "./pages/PlanningPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import Error from "./_utils/Error.jsx";
import ManagementInterns from "./pages/ManagementInterns.jsx";
import ManagementTeams from "./pages/ManagementTeams.jsx";
import ManagementSupervisors from "./pages/ManagementSupervisors.jsx";
import TeamDetails from "./pages/TeamDetails.jsx";
import InternDetails from "./pages/InternDetails.jsx";
import SupervisorDetails from "./pages/SupervisorDetails.jsx";
import ModalTeamAdd from "./pages/ModalTeamAdd.jsx";
import ModalSupervisorAdd from "./pages/ModalSupervisorAdd.jsx";
import ModalInternAdd from "./pages/ModalInternAdd.jsx";
import ModalUpdateSupervisor from "./pages/ModalUpdateSupervisor.jsx";
import ModalUpdateTeam from "./pages/ModalUpdateTeam.jsx";





function App() {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Routes>

            <Route element={<Layout />}>
              <Route path="/" element={<HomePage/>} />
              <Route path="/incubateur" element={<IncubateurPage/>} />
              <Route path="/gestionEquipes" element={<ManagementTeams/>}/>
              <Route path="/dashboard" element={<DashboardPage/>} />
              <Route path="/planning" element={<PlanningPage/>} />

              <Route path="/gestionStagiaires" element={<ManagementInterns/>} />
              <Route path="/gestionStagiaires/detail/:uuid" element={<InternDetails/>}/>
              <Route path="/gestionStagiaires/create" element={<ModalInternAdd/>}/>
              <Route path="/gestionStagiaires/update" element/>
              
              <Route path="/gestionEquipes" element={<ManagementTeams/>} />
              <Route path="/gestionEquipes/detail/:uuid" element={<TeamDetails/>}/>
              <Route path="/gestionEquipes/create" element={<ModalTeamAdd/>}/>
              <Route path="/gestionEquipes/update" element={<ModalUpdateTeam/>}/>
              
              <Route path="/gestionResponsables" element={<ManagementSupervisors/>}/>
              <Route path="/gestionResponsables/detail/:uuid" element={<SupervisorDetails/>}/>
              <Route path="/gestionResponsables/create" element={<ModalSupervisorAdd/>}/>
              <Route path="/gestionResponsables/update" element={<ModalUpdateSupervisor/>}/>
            
            </Route>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="*" element={<Error/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
