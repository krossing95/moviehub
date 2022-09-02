import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    photo: {
        height: 250,
    },
    border:{
        border: 'solid'
    },
    fullheightCard: {
        height: '100%'
    },
    grid:{
        display: 'flex'
    },
    details:{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px'
    },
    title:{
        padding:'0 15px', fontFamily: 'tahoma'
    },
    cardActions:{
        padding: '0 16px 8px 16px',
        justifyContent: 'space-between',
        display: 'flex'
    },
    card: {
        width: '100%'
    },
    badge: {
        marginRight: '6px'
    }
}));