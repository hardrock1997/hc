import MainContainer from './components/MainContainer/MainContainer';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/*" element={<MainContainer />} />
      </Routes>
    </div>
  );
}

export default App;
