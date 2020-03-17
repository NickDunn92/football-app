import gql from 'graphql-tag';

export const CREATE_USER = gql`
    mutation createUser($input: NewUser!) {
        createUser(input: $input) {
            username
            password
            email
            active
        }
    }
`;