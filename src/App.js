import MainAppBar from "./components/MainAppBar";

import ThemeSwitch from "./utilities/ThemeSwitchContext";
import HomePage from "./screens/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConsultingPage from "./screens/ConsultingPage";
import AuditingPage from "./screens/AuditingPage";
import ServicesPage from "./screens/ServicesPage";
function App() {
  return (
    <ThemeSwitch>
      <div className="App">
        <Router>
          <MainAppBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/consulting" element={<ConsultingPage />} />
            <Route path="/training" element={<ServicesPage />} />
            <Route path="/auditing" element={<AuditingPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeSwitch>
  );
}

export default App;
