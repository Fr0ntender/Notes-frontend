import styled from 'styled-components'

import {
    Box,
    Paper
} from '@material-ui/core'

import {
    Delete,
    Create,
} from '@material-ui/icons'


export const CustomBox = styled(Box)`
    position: absolute;
    top: 5px;
    right: 5px;
`

export const CustomPaper = styled(Paper)`
    position: relative;
    background-color: ${props => props.colors} !important;
    
    svg {
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s ease-in;
    }
    &:hover svg {
        cursor: pointer;
        visibility: visible;
        opacity: 1;
    }
`
export const CustomCreate = styled(Create)`
    color: rgba(0, 0, 0, 0.3);
    &:hover {
        color: #005BFF;
    }
`
export const CustomDelete= styled(Delete)`
    color: rgba(0, 0, 0, 0.3);
    &:hover {
        color: #C42828;
    }
`