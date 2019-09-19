import React, { useState } from 'react'
import Editor from '../Editor'

import {
    Box
} from '@material-ui/core'

import {
    CustomBox,
    CustomPaper,
    CustomCreate,
    CustomDelete,
} from './Note.style'

const Note = ({
    id,
    name,
    color,
    upNote,
    delNote,
    categoryId
}) => {
    const [isEditor, setEditorStatus] = useState(false)
    const [editorContent, setContentEditor] = useState(name)
    const [selectedValue, setSelectedValue] = useState(color)

    const onActiveEditor = () => {
        if (isEditor) {
            setContentEditor('')
            setSelectedValue(color)
        }
        setEditorStatus(!isEditor)

    }
    
    const handleChangeColor = e => {
        setSelectedValue(e.target.value)
    }
    
    const onChangeContentEditor = e => {
        setContentEditor(e.target.value)
    }
    
    const onAddNote = () => {
        upNote({
            id: id,
            name: editorContent,
            color: selectedValue,
            categoryId: categoryId
        })
        setContentEditor('')
        setEditorStatus(!isEditor)
        setSelectedValue('#FFF')
    }
    
    const handleDelate = () => {
        delNote({id})
    }
    return (
        <>
            {isEditor 
            ?
            <Editor
                onAddNote={onAddNote}
                selectedValue={selectedValue}
                editorContent={editorContent}
                onActiveEditor={onActiveEditor}
                handleChangeColor={handleChangeColor}
                onChangeContentEditor={onChangeContentEditor}
            /> 
            :
            <Box px={1} mb={1}>
                <CustomPaper colors={color}>
                    <Box p={2} fontWeight="fontWeightLight" >{name}</Box>
                    <CustomBox display="flex" alignItems="center">
                        <CustomCreate fontSize="small" onClick={onActiveEditor} />
                        <CustomDelete fontSize="small" onClick={handleDelate} />
                    </CustomBox>
                </CustomPaper>
            </Box>}
        </>
    )
}

export default Note
