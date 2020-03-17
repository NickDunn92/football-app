import gql from 'graphql-tag';

export const GET_PLAYERS = gql`
    query {
        players {
            id
            createdAt
            updatedAt
            firstname
            lastname
            nationality
            team
            age
            position
        }
    }
`;