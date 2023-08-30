import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/homepage';
import PlaylistList from './components/playlistList';
import PlaylistDetail from './components/PlaylistDetails';
import Navbar from './components/navbar';
import SongItem from './components/SongItem';

const App = () => {
  const [playlists, setPlaylists] = useState([
    { index: '1', name: 'Playlist 1' ,songs:'3'},
    { index: '2', name: 'Playlist 2' ,songs:'3'},
    { index: '3', name: 'Playlist 3' ,songs:'3'},
    { index: '4', name: 'Playlist 4' ,songs:'3'},
    { index: '5', name: 'Playlist 5' ,songs:'3'}
    // ... add more playlists
  ]);
  
  
 

  return (
    <div className="App">
      
     {/* <PlaylistList/> */}
     {/* <PlaylistDetail/> */}
    <Router>
    <Navbar/>
    {/* <Homepage/> */}
    {/* <PlaylistList/> */}
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/songs" element={<Homepage/>} />
        <Route path="/playlists" element={ <PlaylistList playlists={playlists} />} />
        {/* Add route for playlist detail */}
        <Route path="/playlist/:playlistId" element={<PlaylistDetail/>} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;

