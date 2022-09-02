import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    loading: {
        display: 'block', margin: '3% auto'
    },
    info: {
        padding: '20px', justifyContent: 'space-around', width: '600px'
    }, 
    infotext: {
        fontSize: '15px', fontFamily: 'tahoma'
    }
}));