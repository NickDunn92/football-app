import * as React from 'react';
import { LeagueTable } from '../components';

export interface HomepageProps {
    
}
 
export const Homepage: React.FC<HomepageProps> = () => {
    return (  
        <>
            <h1>Futsbol</h1>
            <LeagueTable />
        </>
    );
}