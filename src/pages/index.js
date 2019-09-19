import { graphql } from 'react-apollo'
import { compose } from 'recompose'
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Categoryes from '../components/Categoryes'
import { CategoryesQuery } from '../graphql/query'

const getCategory = graphql(CategoryesQuery, {
  options: ({ name = '' }) => ({
      variables: { name },
  }),
})

const Home = ({data}) => {
  return (
    <Layout gqdata={data}>
      <SEO title="Home" />
      <Categoryes data={data} />
    </Layout>
  )
}

export default compose(getCategory)(Home)