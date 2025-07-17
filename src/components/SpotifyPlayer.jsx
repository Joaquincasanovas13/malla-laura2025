import React, { useState, useEffect } from 'react';
import { getAccessToken } from '../services/spotify';

export default function SpotifyPlayer() {
  const [token, setToken] = useState('');
  const [trackUri, setTrackUri] = useState('');

  useEffect(() => {
    const hash = window.location.hash;
    if (!token && hash) {
      const parsed = new URLSearchParams(hash.replace('#','?'));
      setToken(parsed.get('access_token'));
      window.location.hash = '';
    }
  }, [token]);

  const login = () => {
    const CLIENT_ID = 'TU_CLIENT_ID';
    const redirect = window.location.origin;
    const scope = 'user-read-currently-playing user-modify-playback-state';
    window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirect}&scope=${scope}&response_type=token`;
  };

  const play = () => {
    fetch('https://api.spotify.com/v1/me/player/play', {
      method: 'PUT',
      headers:{'Authorization':`Bearer ${token}`},
      body: JSON.stringify({ uris: [trackUri] })
    });
  };

  return (
    <div className="spotify-player">
      {token ? (
        <>
          <input placeholder="URI del track" value={trackUri} onChange={e=>setTrackUri(e.target.value)} />
          <button onClick={play}>Reproducir</button>
        </>
      ) : (
        <button onClick={login}>Conectar Spotify</button>
      )}
    </div>
  );
}
