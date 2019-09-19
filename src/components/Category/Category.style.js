import styled from 'styled-components'

import {
    Box,
    Fab,
    Card,
    Typography
} from '@material-ui/core'

import {
    Check,
    Clear,
    Delete,
    Create,
} from '@material-ui/icons'

export const CustomDesc = styled.div`
    font-size: 14px;
    font-weight: 600;
`
export const CustomDesc2 = styled(Typography)`
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`
export const CustomInput = styled.input`
    padding-bottom: 13px;
    font-size: 14px;
    font-weight: 600;
    background-color: transparent;
    outline: none;
    border: none;
    width: 100%;
    padding-right: 40px;
    justify-content: space-between
`
export const CustomLabel = styled.label`
    position: relative;
    width: 100%;
`

export const CustomFab = styled(Fab)`
    width: 30px !important;
    min-width: 30px !important;
    height: 30px !important;
    min-height: 30px !important;
`

const aceptPosition = ({ types }) => {
    if (types === 'cat') return `
        top: 5px; right: 20px;
    `
    else return `
        bottom: 12px; right: 40px;
    `
}
const closePosition = ({ types }) => {
    if (types === 'cat') return `
        top: 5px; right: 0;
    `
    else return `
        bottom: 12px; right: 10px;
    `
}
export const Acept = styled(Check)`
    position: absolute;
    fill: rgba(0, 0, 0, 0.3);
    ${props => aceptPosition(props)}
    &:hover{
        cursor: pointer;
        fill: #005BFF;
    }
`
export const Close = styled(Clear)`
    position: absolute;
    fill: rgba(0, 0, 0, 0.3);
    ${props => closePosition(props)}
    &:hover{
        cursor: pointer;
        fill: #C42828;
    }
`
export const CustomBox = styled(Box)`
    position: absolute;
    top: 5px;
    right: 5px;
`
export const CustomCreate = styled(Create)`
    color: rgba(0, 0, 0, 0.3);
    &:hover {
        color: #005BFF;
        cursor: pointer;
    }
`
export const CustomDelete= styled(Delete)`
    color: rgba(0, 0, 0, 0.3);
    &:hover {
        color: #C42828;
        cursor: pointer;
    }
`
export const CustomCard= styled(Card)`
    background-color: #F1F6F8 !important;
    position: relative;
`