import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles';

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography varient="h3" className={classes.title}>
          Travelly
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
