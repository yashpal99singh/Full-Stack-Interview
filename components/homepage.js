import React from 'react';
import SongItem from './SongItem';
import {  Link } from "react-router-dom";

const songs = [
  {index:'1', title: 'abc', artist: 'yash' },
  {index:'2',title: 'bcd', artist: 'deepak' },
  { index:'3', title:'Song 1', artist: 'kanu' },
  { index:'4',title: 'Song 1', artist: 'Artist 1' },
  { index:'5',title: 'xyz', artist: 'Artist 1' },
  // ... add more songs
];

const Homepage = () => {
  return (
    <div className="Homepage">
        
            <ul>
                Song TITLE
                
                 singer

                 playlist
                    
            </ul>

      <div className="song-list">
        {songs.map((song, index) => (
          <SongItem key={index} song={song} />
        ))}
      </div>
    </div>


  );
};

export default Homepage;
