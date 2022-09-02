import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    loading: {
        display: 'block', margin: '3% auto'
    },
    wrapper: {
        padding: '10px 0',
        width: '100%',
        margin: 0,
    },
    singlets: {
        alignItems: 'center'
    },
    info: {
        padding: '20px', justifyContent: 'space-around', width: '600px'
    }, 
    infotext: {
        fontSize: '15px', fontFamily: 'tahoma'
    },
    paginate: {
        marginBottom: '100px'
    },
    header:{
        textAlign: 'center',
        fontFamily: 'tahoma',
        padding: '10px'
    },
    fixedBottom: {
        width: '100%', position:'fixed', bottom: 0, backgroundColor: '#15ace7',
        zIndex: 100, padding: '0 40px', justifyContent: 'space-around'
    },
    fixedBottomItem: {
        color: '#ffffff'
    }, 
    oopps: {
        display: 'block',
        margin: '3% auto'
    }
}));