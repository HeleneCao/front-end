import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Layout from "./components/layouts/Layout.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import GestionEquipes from "./pages/GestionEquipes.jsx";
import IncubateurPage from "./pages/IncubateurPage.jsx";
import PlanningPage from "./pages/PlanningPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import Error from "./_utils/Error.jsx";
import GestionStagiaires from "./pages/GestionStagiaires.jsx";
import GestionResponsables from "./pages/GestionResponsables.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Routes>

            <Route element={<Layout />}>
              <Route path="/" element={<HomePage/>} />
              <Route path="/incubateur" element={<IncubateurPage/>} />
              <Route path="/gestionEquipe" element={<GestionEquipes/>}/>
              <Route path="/dashboard" element={<DashboardPage/>} />
              <Route path="/planning" element={<PlanningPage/>} />
              <Route path="/gestionStagiaires" element={<GestionStagiaires/>} />
              <Route path="/gestionResponsables" element={<GestionResponsables/>}/>


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
