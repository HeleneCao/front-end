import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Layout from "./components/layouts/Layout.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import GestionEquipe from "./pages/GestionEquipe.jsx";
import IncubateurPage from "./pages/IncubateurPage.jsx";
import PlanningPage from "./pages/PlanningPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import Error from "./_utils/Error.jsx";
import GestionStagiaires from "./pages/GestionStagiaires.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Routes>

            <Route element={<Layout />}>
              <Route path="/" element={<HomePage/>} />
              <Route path="/incubateur" element={<IncubateurPage/>} />
              <Route path="/gestionEquipe" element={<GestionEquipe/>}/>
              <Route path="/dashboard" element={<DashboardPage/>} />
              <Route path="/planning" element={<PlanningPage/>} />
              <Route path="/gestionstagiaires" element={<GestionStagiaires/>} />


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
