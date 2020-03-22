import * as React from 'react';
import { LeagueTable } from '../components';

export interface LeagueProps {}
 
export const League: React.FC<LeagueProps> = () => {
    return (  
        <>
            <h1>League</h1>
            <LeagueTable />
        </>
    );
}