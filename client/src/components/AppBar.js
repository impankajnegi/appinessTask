import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Appiness
          </Typography>
          {props.currentStatus =="SignUp" && <Button color="inherit" onClick={()=>props.updateCurrentStatus("LogIn")}>Login</Button>}
          {props.currentStatus =="LogIn" && <Button color="inherit" onClick={()=>props.updateCurrentStatus("SignUp")}>SignUp</Button>}
          {props.currentStatus =="LoginSuccess" && <Button color="inherit" onClick={()=>props.updateCurrentStatus("LogIn")}>Log Out</Button>}
          {props.currentStatus =="AdminLoginSuccess" && <Button color="inherit" onClick={()=>props.updateCurrentStatus("LogIn")}>Log Out</Button>}

           
 
        </Toolbar>
      </AppBar>
    </div>
  );
}
