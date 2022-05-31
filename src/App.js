import './App.css';
import Gallery from './pages/Gallery';
import Camera from './pages/Camera';
import NavBar from './components/NavBar'
import GeoLocation from './components/GeoLocation';
import PhotoState from './context/photos/PhotoState'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <PhotoState>
      <Router>
      <NavBar/>
        <Routes>
        <Route exact path = "/" element = {<Gallery/> }/>
        <Route exact path = "/camera" element = {<Camera/>}/>
        </Routes>
        <GeoLocation></GeoLocation>
      </Router>
      </PhotoState>
    </div>
  );
}

export default App;
