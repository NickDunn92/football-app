import * as React from 'react';
import { Table } from 'semantic-ui-react';
import { Player } from '../../../types';

export interface PlayersTableProps {
    players: Player[];
}
 
export const PlayersTable: React.FC<PlayersTableProps> = ({ players }) => {

    return (  
        <Table basic='very' celled collapsing>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Player</Table.HeaderCell>
                    <Table.HeaderCell>Nationality</Table.HeaderCell>
                    <Table.HeaderCell>Team</Table.HeaderCell>
                    <Table.HeaderCell>Age</Table.HeaderCell>
                    <Table.HeaderCell>Position</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {players.map((player: Player) => {
                    return (
                        <Table.Row>
                            <Table.Cell>
                                {player.firstname} {player.lastname}
                            </Table.Cell>
                            <Table.Cell>
                                {player.nationality}
                            </Table.Cell>
                            <Table.Cell>
                                {player.team}
                            </Table.Cell>
                            <Table.Cell>
                                {player.age}
                            </Table.Cell>
                            <Table.Cell>
                                {player.position}
                            </Table.Cell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>
    );
}