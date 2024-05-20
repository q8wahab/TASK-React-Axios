import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/pet" Component={PetList} />
        <Route path="/pet/:petId" Component={PetDetail} />
      </Routes>
    </div>
  );
}

export default App;
