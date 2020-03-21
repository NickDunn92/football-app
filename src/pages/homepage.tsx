import * as React from 'react';
import { LeagueTable } from '../components';
import { Header, Icon } from 'semantic-ui-react'

export interface HomepageProps {}
 
export const Homepage: React.FC<HomepageProps> = () => {
    return (  
        <div className='header'>
            <Header as='h2' icon textAlign='center'>
                <Icon name='soccer' />
                <Header.Content>Futsbol</Header.Content>
            </Header>
            <LeagueTable />
        </div>
    );
}