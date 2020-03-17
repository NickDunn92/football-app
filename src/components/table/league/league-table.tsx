import * as React from 'react';
import { Header, Table } from 'semantic-ui-react';
import './league-table.css';

export interface LeagueTableProps {}
 
export const LeagueTable: React.FC<LeagueTableProps> = () => {
    return (  
        <Table className='table' basic='very' celled collapsing>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Position</Table.HeaderCell>
                    <Table.HeaderCell>Club</Table.HeaderCell>
                    <Table.HeaderCell>Played</Table.HeaderCell>
                    <Table.HeaderCell>Won</Table.HeaderCell>
                    <Table.HeaderCell>Drawn</Table.HeaderCell>
                    <Table.HeaderCell>Lost</Table.HeaderCell>
                    <Table.HeaderCell>GF</Table.HeaderCell>
                    <Table.HeaderCell>GA</Table.HeaderCell>
                    <Table.HeaderCell>GD</Table.HeaderCell>
                    <Table.HeaderCell>Points</Table.HeaderCell>
                    <Table.HeaderCell>Form</Table.HeaderCell>
                    <Table.HeaderCell>Next</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        <Header>
                            <Header.Content>
                                1
                            </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>Liverpool</Table.Cell>
                    <Table.Cell>29</Table.Cell>
                    <Table.Cell>19</Table.Cell>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>66</Table.Cell>
                    <Table.Cell>21</Table.Cell>
                    <Table.Cell>+45</Table.Cell>
                    <Table.Cell>82</Table.Cell>
                    <Table.Cell>W/W/W/L/W</Table.Cell>
                    <Table.Cell>Everton</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
}