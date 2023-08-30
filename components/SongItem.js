import React,{useState} from 'react';

const SongItem = ({ song }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);
  const [newPlaylistName, setNewPlaylistName] = useState('');

  const handlePlusClick = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedPlaylists([]);
    setNewPlaylistName('');
  };

  const handleCheckboxChange = (playlistId) => {
    if (selectedPlaylists.includes(playlistId)) {
      setSelectedPlaylists(selectedPlaylists.filter(id => id !== playlistId));
    } else {
      setSelectedPlaylists([...selectedPlaylists, playlistId]);
    }
  };

  const handleCreatePlaylist = () => {
    // Logic to create a new playlist
    // You can use API calls to save the new playlist
    console.log('Creating new playlist:', newPlaylistName);
  };

  return (
    <ul className="song-item">
      <li className="song-number">{song.index}</li>
      <li className="song-title">{song.title}</li>
      <li className="song-artist">{song.artist}</li>
      <button className="plus-icon" onClick={handlePlusClick}>
        +
      </button>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h2>CREATE NEW PLAYLIST</h2>
            <input
              type="text"
              placeholder="Enter playlist name"
              value={newPlaylistName}
              onChange={(e) => setNewPlaylistName(e.target.value)}
            />
            <h3>ADD TO PLAYLIST</h3>
            <ul className="playlist-list">
              {/* Replace with dynamic playlist rendering */}
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedPlaylists.includes('playlist1')}
                    onChange={() => handleCheckboxChange('playlist1')}
                  />
                  Playlist 1
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedPlaylists.includes('playlist2')}
                    onChange={() => handleCheckboxChange('playlist2')}
                  />
                  Playlist 2
                </label>
              </li>
              <li>
                <label>
                  <input type="hidden"
                
                    checked={selectedPlaylists.includes('..........')}
                    onChange={() => handleCheckboxChange('..........')}
                  />
                  ..........
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedPlaylists.includes('playlist5')}
                    onChange={() => handleCheckboxChange('playlist5')}
                  />
                  Playlist 5
                </label>
              </li>
              {/* ... Add more playlist items */}
            </ul>
            <button onClick={handleCreatePlaylist}> CREATE</button>
            <button onClick={closeModal}>DONE</button>
          </div>
        </div>
      )}
    </ul>
  );
};

export default SongItem;
