import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  searchbar: {
    display: 'flex',
    alignContent: 'flex-start',
    // justifyContent: 'flex-start'
  },
  button: {
    margin: 8
  }
}));
  
const HistoryList = ({
  history
}) => {
  const classes = useStyles();

  return (
    <Grid item container direction="row" justify="flex-start" alignItems="center" spacing={2} className={classes.searchbar}>
      {
        history.map( ({ city, country }) => 
          <Typography variant="body1" className={classes.title}>
            City: {city} Country: {country}
          </Typography>
        )

      }
    </Grid>
  );
}
export default HistoryList