import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    textPrimary: {
      main: 'black'
    },
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F9FCFC',
    },
  },
});

export default theme