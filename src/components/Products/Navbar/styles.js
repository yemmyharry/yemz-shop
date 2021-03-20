import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: 'none',
    // borderBottom: '1px solid red',
  },
 
  title: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    fontSize: '1.5rem',
    textDecoration: 'none'
    // fontFamily: 'helvetica'
  },
}));
