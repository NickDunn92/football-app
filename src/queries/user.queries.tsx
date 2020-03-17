import gql from 'graphql-tag';

export const GET_USERS = gql`
    query {
        users {
            id
            createdAt
            updatedAt
            username
            password
            email
            active
        }
    }
`;