import React from 'react';
import { Link } from 'react-router-dom';
import './playlistList.css'


const PlaylistList = ({ playlists, onDelete }) => {

  return (
    <div className="Playlist-list">

      <h2>NUMBER PLAYLISTNAME  TOTALSONGS</h2>
      <ul>
        {playlists.map((playlist, index) => (

          <li key={playlist.id}>

            <span>{playlist.index}</span>
            <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
            <span>{playlist.songs}</span>
            <button onClick={() => onDelete(playlist.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistList;
