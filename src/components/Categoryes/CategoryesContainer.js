import { graphql } from 'react-apollo'
import { compose } from 'recompose'

import {
    upNoteMutation,
    addNoteMutation,
    delNoteMutation,
    upCategoryMutation,
    addCategoryMutation,
    delCategoryMutation,
} from '../../graphql/mutation'

import { CategoryesQuery } from '../../graphql/query'

import Categoryes from './Categoryes'

const addNote = graphql(addNoteMutation, {
    props: ({ mutate }) => ({
        addNote: note => mutate({
            variables: note,
            refetchQueries: [{
                query: CategoryesQuery,
                variables: { name: '' }
            }],
        }),
    }),
})

const upNote = graphql(upNoteMutation, {
    props: ({ mutate }) => ({
        upNote: note => mutate({
            variables: note,
            refetchQueries: [{
                query: CategoryesQuery,
                variables: { name: '' }
            }],
        }),
    }),
})

const delNote = graphql(delNoteMutation, {
    props: ({ mutate }) => ({
        delNote : id => mutate({
            variables: id,
            refetchQueries: [{
                query: CategoryesQuery,
                variables: { name: '' }
            }],
        })
    })
})


const addCategory = graphql(addCategoryMutation, {
    props: ({ mutate }) => ({
        addCategory: сategory => mutate({
            variables: сategory,
            refetchQueries: [{
                query: CategoryesQuery,
                variables: { name: '' }
            }],
        }),
    }),
})



const upCategory = graphql(upCategoryMutation, {
    props: ({ mutate }) => ({
        upCategory: category => mutate({
            variables: category,
            refetchQueries: [{
                query: CategoryesQuery,
                variables: { name: '' }
            }],
        }),
    }),
})

const delCategory = graphql(delCategoryMutation, {
    props: ({ mutate }) => ({
        delCategory: id => mutate({
            variables: id,
            refetchQueries: [{
                query: CategoryesQuery,
                variables: { name: '' }
            }],
        })
    })
})

export default compose(
    upNote,
    addNote,
    delNote,
    upCategory,
    addCategory,
    delCategory,
)(Categoryes)