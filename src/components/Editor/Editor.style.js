import styled from 'styled-components'

import {
    Fab,
    Paper,
    Radio
} from '@material-ui/core'

import {
    Check,
    Clear,
} from '@material-ui/icons'

export const CustomPaper = styled(Paper)`
    position: relative;
    background-color: ${props => props.colors} !important;
`

export const CustomFab = styled(Fab)`
    width: 30px !important;
    height: 30px !important;
    min-height: 30px !important;
`

const aceptPosition = ({ types }) => {
    if (types === 'cat') return `
        bottom: 3px; right: 20px;
    `
    else return `
        bottom: 12px; right: 40px;
    `
}
const closePosition = ({ types }) => {
    if (types === 'cat') return `
        bottom: 3px; right: 0;
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
export const CustomRadio = styled(Radio)`
    ${props => `svg {color: ${props.colors};}`}
`
export const CustomTextarea = styled.textarea`
    padding: 10px;
    font-size: 14px;
    font-weight: 100;
    background-color: transparent;
    outline: none;
    border: none;
    width: 100%;
    padding-right: 40px;
    overflow: hidden;
`