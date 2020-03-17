import * as React from 'react';
import { useMutation, useQuery, useApolloClient } from '@apollo/react-hooks';
import { GET_PLAYERS } from '../../queries/player.queries';
import { CREATE_PLAYER } from '../../mutations/player.mutations';
import { PlayersComponent } from './players.component';
import { AddPlayerFormData } from '../form';

export interface PlayersContainerProps {}
 
export const PlayersContainer: React.FC<PlayersContainerProps> = () => {

    const client = useApolloClient();

    const { loading, error, data } = useQuery(GET_PLAYERS, {
        client,
    })

    const [addPlayer] = useMutation(CREATE_PLAYER, {
        client,
        refetchQueries: [{
            query: GET_PLAYERS
        }]
    });

    if (loading) return <>Loading...</>;
    if (error) return <>Error</>

    const handleAddPlayer = (data: AddPlayerFormData) => {
        addPlayer({
            variables: {
                input: {
                    ...data
                }
            }
        })
    }

    return (  
        <PlayersComponent Player={data.players} onAddNewPlayer={handleAddPlayer} />
    );
}