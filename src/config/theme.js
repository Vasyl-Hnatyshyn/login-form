import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';

const theme = createMuiTheme({
    palette: {
        primary: yellow,
        secondary: green,
    },
    status: {
        danger: 'orange',
    },
});


export default theme;