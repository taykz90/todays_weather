import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  title: {
    margin: '0 0 8px 8px'
  }
}));

const Section = ({
  title,
  children,
}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.grid} spacing={1}>
      <Grid item>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      {children}
    </Grid>
  );
}
export default Section