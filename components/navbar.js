import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
        <Link to="/" className="site-title">
            SONGIFY
            </Link>
            <div>
                
                    <Link to="/songs">Songs</Link>
                
                    <Link to="/Playlists">Playlist</Link>

                
            </div>
    </nav>
  )
}

export default Navbar;
