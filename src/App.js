
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Routes,
  Route
} from "react-router-dom";
import SearchBar from './components/SearchBar';
import InfoPeople from './components/InfoPeople';
import InfoPlanets from './components/InfoPlanets';
import InfoSpecies from './components/InfoSpecies';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Routes>
        <Route path="/people/:id" element={<InfoPeople />}/>
        <Route path="/planets/:id" element={<InfoPlanets />}/>
        <Route path="/species/:id" element={<InfoSpecies />}/>
        <Route path="/error" element={<ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default App;
