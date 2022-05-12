import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Menu from './pages/Menu'
import Events from './pages/Events'
import NavBar from './components/NavBar'
import BasicFooter from "./components/BasicFooter";


function App() {
  return (
    <div class="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<NavBar />}>
            <Route index element={<Landing />} />
            <Route path="menu" element={<Menu />} />
            <Route path="events" element={<Events />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <hr className="lineElem" />
      <BasicFooter />
    </div>
  );
}

export default App;
