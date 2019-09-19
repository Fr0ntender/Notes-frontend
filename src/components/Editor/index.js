import React from 'react'

import {
    Box
} from '@material-ui/core'

import {
    Acept,
    Close,
    CustomPaper,
    CustomRadio,
    CustomTextarea,
} from './Editor.style'

const Editor = ({
    onAddNote,
    selectedValue,
    onActiveEditor,
    handleChangeColor,
    editorContent = '',
    onChangeContentEditor
}) => {
    return (
        <Box px={1} mb={1}>
            <CustomPaper colors={selectedValue}>
                <CustomTextarea
                    name="nameChanged"
                    type="text"
                    onChange={onChangeContentEditor}
                    defaultValue={editorContent}
                />
                <Box display="flex" alignItems="center">
                    <CustomRadio
                        checked={selectedValue === '#FFF'}
                        onChange={handleChangeColor}
                        value="#FFF"
                        colors="#F1F6F8"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': '#FFF' }}
                    />
                    <CustomRadio
                        checked={selectedValue === '#94FFC2'}
                        onChange={handleChangeColor}
                        value="#94FFC2"
                        colors="#94FFC2"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': '#94FFC2' }}
                    />
                    <CustomRadio
                        checked={selectedValue === '#94EDFF'}
                        onChange={handleChangeColor}
                        value="#94EDFF"
                        colors="#94EDFF"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': '#94EDFF' }}
                    />
                    <CustomRadio
                        checked={selectedValue === '#EFAAFF'}
                        onChange={handleChangeColor}
                        value="#EFAAFF"
                        colors="#EFAAFF"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': '#EFAAFF' }}
                    />
                </Box>
                <Acept
                    types="card"
                    fontSize="small"
                    onClick={onAddNote} />
                <Close
                    types="card"
                    fontSize="small"
                    onClick={onActiveEditor} />
            </CustomPaper>
        </Box>
    )
}

export default Editor




