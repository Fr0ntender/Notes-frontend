import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  Grid,
  Container,
  Typography,
} from '@material-ui/core'

import {
  Wrapper,
  CustomBox,
  CustomLink,
  CustomClear,
  CustomInput,
  CustomSearch,
} from './Header.styled.js'

const Header = ({ data }) => {
  const [categoryName, setCanegoryName] = useState('')
  
  const handeleSearch= e => {
    setCanegoryName(e.target.value)
    if(e.charCode === 13) {
      data.fetchMore({
        variables: { name: categoryName},
        updateQuery: (previousResult, { fetchMoreResult }) => fetchMoreResult,
      })
    }
  }
  
  const cleanup = () => {
    setCanegoryName('')
    data.fetchMore({
      variables: { name: '' },
      updateQuery: (previousResult, { fetchMoreResult }) => fetchMoreResult,
    })
  }
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <CustomLink to="/">
              <Typography variant="h6" color="textPrimary">
                Перечень задач
              </Typography>
            </CustomLink>
          </Grid>
          <Grid item xs={2}>
            <CustomLink to="/page-2">
              <Typography variant="h6" color="textPrimary">
                О приложении
              </Typography>
            </CustomLink>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={3}>
            <CustomBox display="flex" alignItems="center">
              <CustomSearch fontSize="small" />
              <CustomInput
                placeholder="Поиск ..."
                value={categoryName}
                onChange={handeleSearch}
                onKeyPress={handeleSearch}
              />
              <CustomClear fontSize="small" onClick={cleanup}/>
            </CustomBox>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default Header

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}