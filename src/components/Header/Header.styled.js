import styled from 'styled-components'

import { Link } from 'gatsby'

import {
  Box,
  Input
} from '@material-ui/core'

import {
  Clear,
  Search,
} from '@material-ui/icons'

export const Wrapper = styled.div`
  width: 100%;
  height: 54px;
  padding-top: 10px;
  margin-bottom: 50px;
  border-bottom: 1px solid #CBD8E9;
`
export const CustomLink = styled(Link)`
  text-decoration: none;
`
export const CustomBox = styled(Box)`
  position: relative;
`
export const CustomInput = styled(Input)`
  width: 100%;
  padding-left: 30px;
`
export const CustomSearch = styled(Search)`
  position: absolute;
  left: 0;
  bottom: 5px;
`
export const CustomClear = styled(Clear)`
  position: absolute;
  right: 0;
  bottom: 5px;
  color: #ccc;
  &:hover {
    cursor: pointer;
    color: black;
  }
`