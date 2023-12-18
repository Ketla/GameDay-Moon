import { API_URL, token } from "./config";

export default (player) => {
  return fetch(`${API_URL}/players/${player._id}`, {  
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json'  
    },
    body: JSON.stringify({
      name: player.name,
      afk: player.afk
    })
  })
  .then(response => response.json());
}