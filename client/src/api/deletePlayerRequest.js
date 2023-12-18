import { API_URL, token } from "./config";

export default (player) => {
  return fetch(`${API_URL}/players/${player._id}`, {  
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json'  
    },
  })
}