import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 0;

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  smallIcon: {
    width: 30,
    height: 30,
  },
  grow: {
    flexGrow: 1,
  },
  root: {
      marginTop: 80,
      flexGrow: 1
  }
}));