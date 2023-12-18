import React from 'react'
import { useQuery } from 'react-query';
import ClipLoader from 'react-spinners/ClipLoader';

import readPlayersRequest from '../api/readPlayersRequest';
import { PlayerItem } from '../components/PlayerItem';
import { CreatePlayerForm } from '../components/CreatePlayerForm';

export const PlayerPage = () => {

  const { isLoading, data: players } = useQuery(
    'players',
    readPlayersRequest
  );

  return (
    <div>
          <h1>GameDay v2</h1>
    {isLoading ? (
      <ClipLoader size={150} />
    ) : (
      players.map((player) => (
        <PlayerItem player={player} key={player._id} />
      ))
     )}
     <CreatePlayerForm />
    </div>
  );
}
