import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import {
  Box,
  Grid,
  Container,
  Typography,
} from '@material-ui/core'

const SecondPage = () => {
  return (
    <Layout>
      <SEO title="About app" />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3">
            Notes
          </Typography>
          <Box fontWeight="fontWeightRegular" fontSize={24} mt={3}>
            Приложение для создания заметок
          </Box>
          <Box fontWeight="fontWeightLight" fontSize={20} mt={2}>
            В приложении можно создавать категории выполняемых действий, внутри категорий можно создать карточки в которые можно сделать запись также можно указывать цвет карточки.
          </Box>
          <Box fontWeight="fontWeightLight" fontSize={20} mt={2}>
            Категории можно удалять, менять текст и осуществлять по ним поиск, при удалении категории из неё будут удалены все карточки.
          </Box>
          <Box fontWeight="fontWeightLight" fontSize={20} mt={2}>
            Карточки можно удалять, менять текст и цвет.
          </Box>
          <Box fontWeight="fontWeightRegular" fontSize={24} mt={3}>
            Техническая часть
          </Box>
          <Box fontWeight="fontWeightLight" fontSize={18} mt={2}>
            Клиент: Gatsby / React / GraphQL / Apollo / Material-UI / Styled Components;
          </Box>
          <Box fontWeight="fontWeightLight" fontSize={18} mt={2}>
            Сервер: Node / Express / GraphQL / Mongoose;
          </Box>
          <Box fontWeight="fontWeightLight" fontSize={18} mt={2}>
            БД: MongoDB;
          </Box>
          <Box fontWeight="fontWeightLight" fontSize={18} mt={2}>
            Деплой: AWS ES2 - Ubuntu 18.04 при помощи Docker и Nginx.
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default SecondPage
