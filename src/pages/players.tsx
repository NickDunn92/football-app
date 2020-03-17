import * as React from 'react';
import { PlayersContainer } from '../components/players';

export interface PlayersProps {}
 
export const Players: React.FC<PlayersProps> = () => {
    return (  
        <>
            <h1>Players</h1>
            <PlayersContainer />
        </>
    );
}