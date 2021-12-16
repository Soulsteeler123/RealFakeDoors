import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(10),
  },
  root: {
    flexGrow: 1,
  },
  topPicks: {
    fontSize:150
  }, 
  grow: {
    flexGrow: 1,
  },
  border: {
    flex:2,
    flexDirection:"row",
    justifyContent:'space-between',
    padding:10,
    border: '2px solid black'
  },
  centeredcontent:{
    alignContent:'space-between',
    display:'flex',
    justifyContent:'center',
    margin: 'auto',
  },
  flexContainer:{
    display: 'flex',
    justifyContent: 'space-between'
  },
  flexItem:{
    flexGrow:1,
    // "&:hover": {
    //   backgroundColor: "transparent",//hides an oversight. plz dont remove
    // }
  },
}));