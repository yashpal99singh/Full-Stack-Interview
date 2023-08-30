import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';

const PlaylistDetail = () => {
  const [playlists, setPlaylists] = useState([
    { index: '1', name: 'Playlist 1' ,songs:'3'},
    { index: '2', name: 'Playlist 2' ,songs:'3'},
    { index: '3', name: 'Playlist 3' ,songs:'3'},
    { index: '4', name: 'Playlist 4' ,songs:'3'},
    { index: '5', name: 'Playlist 5' ,songs:'3'}
  ]);
  const { playlistId } = useParams();
  const [playlist, setPlaylist] = useState( );

  useEffect(() => {
    // Fetch playlist details from backend using playlistId
    fetch(`/api/playlists/${playlistId}`)
      .then(response => response.json())
      .then(data => setPlaylist(data))
      .catch(error => console.error('Error fetching playlist:', error));
  }, [playlistId]);

  if (!playlist) {
    return <div>Loading...</div>;
  }
  

  // Sample playlist data (replace with actual data)
 

  return (
    <div className="playlist-detail">
      
      <h2>{playlist.name}</h2>
      <ul>
        {playlist.songs.map((song) => (
          <li key={playlist.index}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistDetail;
