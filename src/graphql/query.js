import { gql } from 'apollo-boost'

export const CategoryesQuery = gql`
    query($name: String!) {
        categoryes(name: $name) {
            id
            name
            note {
                id
                name
                color
                categoryId
            }
        }
    }
`