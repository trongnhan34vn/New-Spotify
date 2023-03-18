import React from 'react'
import PlaylistHeader from '../../components/Admin/Header/Playlists/PlaylistHeader'
import Sidebar from '../../components/Admin/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
import FormPlaylist from '../../components/Admin/Content/Playlists/FormPlaylist';
import ListPlaylists from '../../components/Admin/Content/Playlists/ListPlaylists';

export default function Playlists() {
  const location = useLocation();
  const playlistPageElement = (location.pathname ==='/admin-playlist/form') ? <FormPlaylist /> : <ListPlaylists />;
  return (
    <div>
      <PlaylistHeader />
      <Sidebar />
      {playlistPageElement}
    </div>
  )
}
