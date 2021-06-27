import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  searchbar: {
  },
  gridItem: {
  },
  textField: {
  },
  button: {
    margin: '0 8px'
  }
}));
  
const Searchbar = () => {
  const classes = useStyles();
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const clearText = () => {
    setCity('')
    setCountry('')
  }

  const requestWeather = () => {
    // api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=2a694ddfc62b4413a62525bc6a71db59
    // 2a694ddfc62b4413a62525bc6a71db59
    alert()
  }

  return (
    <Grid item container direction="row" justify="flex-start" alignItems="center" spacing={2} className={classes.searchbar}>
      <Grid item xs={6} sm={3} className={classes.gridItem} > 
        <TextField 
          variant="outlined" 
          label="City" 
          placeholder="e.g. Tokyo" 
          fullWidth
          className={classes.textField} 
          onChange={ e => setCity(e.target.value) }
        />
      </Grid>
      <Grid item xs={6} sm={3} className={classes.gridItem} > 
        <TextField 
          variant="outlined" 
          label="Country"
          placeholder="e.g Japan" 
          fullWidth 
          className={classes.textField} 
          onChange={ e => setCountry(e.target.value) } 
        />
      </Grid>
      <Button variant="contained" color="primary" size="small" className={classes.button} onClick={ () => {requestWeather()} } >
        Search
      </Button>
      <Button variant="contained" color="primary" size="small" className={classes.button} onClick={ () => {clearText()} } >
        Clear
      </Button>

    </Grid>
  );
}
export default Searchbar