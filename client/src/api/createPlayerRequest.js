import { API_URL, token } from "./config";

export default (player) => {
  return fetch(`${API_URL}/players`, {  
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json'  
    },
    body: JSON.stringify({
      name: player.name,
      afk: false
    })
  })
  .then(response => response.json());
}