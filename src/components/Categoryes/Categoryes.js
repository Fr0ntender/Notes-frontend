import React, { useState } from 'react'
import { v4 } from 'uuid'

import {
    Box,
    Grid,
    Card,
    CardActions
} from '@material-ui/core'

import {
    Acept,
    Close,
    CustomFab,
    CustomDesc,
    CustomInput,
    CustomLabel,
    TitleWrapper
} from './Categoryes.style'

import {
    Add
} from '@material-ui/icons'

import Category from '../Category'

const Categoryes = ({
    data,
    upNote,
    addNote,
    delNote,
    addCategory,
    upCategory,
    delCategory
}) => {
    const { categoryes = [] } = data
    const [isOpenAddCategory, setOpenAddCategory] = useState(false)
    const [categoryTitle, setCategoryTitle] = useState('')

    const onAddCategory = () => {
        setOpenAddCategory(!isOpenAddCategory)
    }
    const onAddCategoryChange = e => {
        setCategoryTitle(e.target.value)
    }
    const AddCategoryTitle = () => {
        addCategory({
            name: categoryTitle
        })
        setCategoryTitle('')
        setOpenAddCategory(!isOpenAddCategory)
    }
    
    return (
        <Grid container spacing={2}>
            {categoryes.map(v => <Category
                key={v4()}
                id={v.id}
                catName={v.name}
                note={v.note}
                upNote={upNote}
                addNote={addNote}
                delNote={delNote}
                upCategory={upCategory}
                delCategory={delCategory}
            />)}
            <Grid item xs={3}>
                <Card style={{ backgroundColor: '#CBD8E9' }}>
                    <CardActions>
                        {!isOpenAddCategory ?
                            <TitleWrapper onClick={onAddCategory}>
                                <CustomFab color="primary" aria-label="add">
                                    <Add fontSize="small" />
                                </CustomFab>
                                <Box ml={1}>
                                    <CustomDesc variant="subtitle2">
                                        Добавить колонку
                                    </CustomDesc>
                                </Box>
                            </TitleWrapper> :
                            <CustomLabel>
                                <CustomInput
                                    name="titleChanged"
                                    type="text"
                                    onChange={onAddCategoryChange}
                                />
                                <Acept
                                    fontSize="small"
                                    onClick={AddCategoryTitle} />
                                <Close
                                    fontSize="small"
                                    onClick={onAddCategory} />
                            </CustomLabel>}
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Categoryes