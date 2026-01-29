import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ActivityTab from './components/ActivityTab';
import Explorer from "./components/Explorer";
import AlbumDetail from "./components/AlbumDetail";
function App() {

  return (
    <>
    <router>
        <Navbar />
      <div className="mainpage">
       <ActivityTab />
       <Routes>
          <Route path="/" element={<Explorer />} />
          <Route path="/album/:id" element={<AlbumDetail />} />
        </Routes>
       </div>
    </router>
    </>
  );
}

export default App;
