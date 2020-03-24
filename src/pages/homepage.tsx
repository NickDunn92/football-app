import * as React from 'react';
import { Header, Icon } from 'semantic-ui-react'

export interface HomepageProps {}
 
export const Homepage: React.FC<HomepageProps> = () => {
    return (  
        <>
            <Header as='h2' icon textAlign='center'>
                <Icon name='soccer' />
                <Header.Content>Futsbol</Header.Content>
            </Header>
        </>
    );
}