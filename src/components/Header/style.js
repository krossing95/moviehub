import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    display: 'none', fontFamily: 'tahoma',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  rightTitle: {
    display: 'block', fontFamily: 'tahoma', padding: '14px 0',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    display: 'flex', justifyContent: 'space-between',
    backgroundColor: '#15ace7',
  },
}));

