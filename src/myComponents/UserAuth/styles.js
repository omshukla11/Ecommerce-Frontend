import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    form: {
        maxWidth: '100%',
        marginTop: '100px',
        marginBottom: '75px'
    },
    media: {
        height: 300,
        width: 350
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cartActions: {
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    },
}));