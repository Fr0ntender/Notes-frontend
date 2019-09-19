import styled from 'styled-components'

import {
    Fab,
    Typography
} from '@material-ui/core'

import {
    Check,
    Clear,
} from '@material-ui/icons'

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const CustomDesc = styled(Typography)`
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
`
export const CustomLabel = styled.label`
    position: relative;
    width: 100%;
`

export const CustomFab = styled(Fab)`
    width: 30px !important;
    height: 30px !important;
    min-height: 30px !important;
`

export const Acept = styled(Check)`
    position: absolute;
    bottom: 3px;
    right: 20px;
    fill: #828282;
    &:hover{
        cursor: pointer;
        fill: #005BFF;
    }
`
export const Close = styled(Clear)`
    position: absolute;
    bottom: 3px;
    right: 0;
    fill: #828282;
    &:hover{
        cursor: pointer;
        fill: #C42828;
    }
`