import gql from 'graphql-tag';

export const CREATE_PLAYER = gql`
    mutation createPlayer($input: NewPlayer!) {
        createPlayer(input: $input) {
            firstname
            lastname
            nationality
            team
            age
            position
        }
    }
`;