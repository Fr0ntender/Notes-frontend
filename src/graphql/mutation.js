import { gql } from 'apollo-boost'

export const addNoteMutation = gql`
    mutation (
            $name: String!,
            $color: String!,
            $categoryId: ID!
        ) {
        addNote(
            name: $name,
            color: $color,
            categoryId: $categoryId
        ) {
            id
        }
    }
`
export const upNoteMutation  = gql`
    mutation upNote(
            $id: ID!,
            $name: String!,
            $color: String!,
            $categoryId: ID!
        ) {
        upNote(
            id: $id,
            name: $name,
            color: $color,
            categoryId: $categoryId
            ) {
            id
        }
    }
`

export const delNoteMutation = gql`
  mutation delNote($id: ID) {
    delNote(id: $id) {
      id
    }
  }
`

export const addCategoryMutation = gql`
    mutation (
            $name: String!
        ) {
        addCategory(
            name: $name
        ) {
            id
        }
    }
`

export const upCategoryMutation = gql`
    mutation upCategory(
            $id: ID!,
            $name: String!
        ) {
        upCategory(
            id: $id,
            name: $name
            ) {
            id
        }
    }
`
export const delCategoryMutation = gql`
  mutation delCategory($id: ID) {
    delAllNote(categoryId: $id) {
        categoryId
    }
    delCategory(id: $id) {
      id
    }
  }
`