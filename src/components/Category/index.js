import React, { useState } from 'react'
import { v4 } from 'uuid'
import Note from '../Note'
import Editor from '../Editor'

import {
    Box,
    Grid,
    CardActions,
} from '@material-ui/core'

import {
    Add,
} from '@material-ui/icons'

import {
    Acept,
    Close,
    CustomBox,
    CustomFab,
    CustomDesc,
    CustomCard,
    CustomInput,
    CustomLabel,
    CustomDesc2,
    CustomCreate,
    CustomDelete,
} from './Category.style'

const CardComponent = ({
    id,
    note,
    upNote,
    catName,
    addNote,
    delNote,
    upCategory,
    delCategory
}) => {
    const [nameChanged, setNameChanged] = useState(false)
    const [isEditor, setEditorStatus] = useState(false)
    const [nameContext, setNameContext] = useState('')
    const [editorContent, setContentEditor] = useState('')
    const [selectedValue, setSelectedValue] = useState('#FFF')

    const handleDelate = () => {
        delCategory({ id })
    }
    const handleChangeColor = e => {
        setSelectedValue(e.target.value)
    }
    const nameContextChange = e => {
        setNameContext(e.target.value)
    }
    const onNameChange = () => {
        setNameChanged(!nameChanged)
    }
    const nameChangeOnChange = () => {
        setNameChanged(false)
        upCategory({
            id,
            name: nameContext
        })
    }
    const onActiveEditor = () => {
        if (isEditor) {
            setContentEditor('')
            setSelectedValue('#FFF')
        }
        setEditorStatus(!isEditor)

    }
    const onChangeContentEditor = e => {
        setContentEditor(e.target.value)
    }
    const onAddNote = () => {
        addNote({
            name: editorContent,
            color: selectedValue,
            categoryId: id
        })
        setContentEditor('')
        setEditorStatus(!isEditor)
        setSelectedValue('#FFF')
    }
    return (
        <Grid item xs={3}>
            <CustomCard>
                <CardActions>
                    {
                        !nameChanged 
                            ?
                            <CustomDesc>{catName}</CustomDesc> 
                            :
                            <CustomLabel>
                                <CustomInput
                                    name="nameChanged"
                                    type="text"
                                    defaultValue={catName}
                                    onChange={nameContextChange}
                                />
                                <Acept
                                    types="cat"
                                    fontSize="small"
                                    onClick={nameChangeOnChange} />
                                <Close
                                    types="cat"
                                    fontSize="small"
                                    onClick={onNameChange} />
                            </CustomLabel>
                    }
                    {!nameChanged && <CustomBox>
                        <CustomCreate fontSize="small" onClick={onNameChange}/>
                        <CustomDelete fontSize="small" onClick={handleDelate}/>
                    </CustomBox>}
                </CardActions>
                {note.map(v => <Note
                    key={v4()}
                    id={v.id}
                    name={v.name}
                    upNote={upNote}
                    color={v.color}
                    delNote={delNote}
                    categoryId={v.categoryId}
                />)}
                {isEditor
                    ?
                    <Editor
                        onAddNote={onAddNote}
                        selectedValue={selectedValue}
                        onActiveEditor={onActiveEditor}
                        handleChangeColor={handleChangeColor}
                        onChangeContentEditor={onChangeContentEditor}
                    />
                    :
                    <CardActions>
                        <Box display="flex" alignItems="center" style={{width: '100%'}}>
                            <CustomFab color="primary" aria-label="add" onClick={onActiveEditor}>
                                <Add fontSize="small" />
                            </CustomFab>
                            <Box ml={1} display="flex" alignItems="center" justifyContent="space-between" style={{width: '100%'}}>
                                <CustomDesc2 variant="subtitle2" onClick={onActiveEditor}>
                                    Добавить карточку
                                </CustomDesc2>
                                <Box>
                                    {note.length}
                                </Box>
                            </Box>
                        </Box>
                    </CardActions>
                }
            </CustomCard>
        </Grid>
    )
}

export default CardComponent
