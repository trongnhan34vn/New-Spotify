import logo from './logo.svg';
import './App.css';
import Home from './Page/Admin/Home';
import AudioTracks from './Page/Admin/AudioTracks';
import Playlists from './Page/Admin/Playlists';
import { Routes, Route } from 'react-router-dom';
import User from './Page/Admin/Users';
import FormUsers from './components/Admin/Content/Users/Items/FormUsers';
import ListUsers from './components/Admin/Content/Users/Items/ListUsers';
import FormPlaylist from './components/Admin/Content/Playlists/FormPlaylist';
import ListPlaylists from './components/Admin/Content/Playlists/ListPlaylists';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<Home />} />
        <Route path='/admin-users' element={<User />}>
          <Route path='form' element={<FormUsers />} />
          <Route path='list' element={<ListUsers />} />
        </Route>
        <Route path='/admin-playlist' element={<Playlists />}>
          <Route path='form' element={<FormPlaylist />} />
          <Route path='list' element={<ListPlaylists />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
