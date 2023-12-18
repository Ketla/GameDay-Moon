import React from "react";
import { useQueryClient, useMutation } from 'react-query';
import createPlayerRequest from "../api/createPlayerRequest";
import { useState } from "react";

export const CreatePlayerForm = () => {

  const [name, setName] = useState('');

  const queryClient = useQueryClient();

  const {mutate: createPlayer} = useMutation(
    (newPlayer) => createPlayerRequest(newPlayer),
     {
        onSettled: () => {
         queryClient.invalidateQueries('players');
      },
    }
  );

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        if (!name) return;
        createPlayer({
          name,
        });
        setName('');
      }}
    >
      <input 
        onChange={(e) => setName(e.target.value)} 
        value={name}
        type="text" 

      />
      <button>Create</button>
    </form>
  )
}