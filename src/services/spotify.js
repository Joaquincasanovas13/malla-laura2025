// MUSICA INTEGRA SHAAA LA MEA VOLAITA

export function getAccessTokenFromUrl() {
  const hash = window.location.hash;
  if (!hash) return null;

  const params = new URLSearchParams(hash.substring(1));
  return params.get('access_token');
}

export function redirectToSpotifyAuth() {
  const clientId = 'TU_CLIENT_ID'; // Sustituir con tu client ID
  const redirectUri = window.location.origin;
  const scope = 'user-read-playback-state user-modify-playback-state';

  window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token&show_dialog=true`;
}
