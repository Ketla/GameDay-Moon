import React from 'react';
import { useQueryClient, useMutation } from 'react-query';
import updatePlayerRequest from '../api/updatePlayerRequest';
import deletePlayerRequest from '../api/deletePlayerRequest';

export const PlayerItem = ({ player }) => {
  const queryClient = useQueryClient();

  const {mutate: updatePlayer} = useMutation(
    (updatedPlayer) => updatePlayerRequest(updatedPlayer),
     {
        onSettled: () => {
         queryClient.invalidateQueries('players');
      },
    }
  );

  const {mutate: deletePlayer} = useMutation(
    (updatedPlayer) => deletePlayerRequest(updatedPlayer),
     {
        onSettled: () => {
         queryClient.invalidateQueries('players');
      },
    }
  );



  return (
    <div>
    {player.name}
    {player.afk ? " (AFK)" : " (Active)"}
    <input
      checked={player.afk}
      type="checkbox"
      onChange={() =>
        updatePlayer({
          ...player,
          afk: !player.afk,
        })
      }
    />

      <button onClick={() => deletePlayer(player)}>Delete</button>
    </div>
  );
};