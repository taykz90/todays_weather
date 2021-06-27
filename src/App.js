import logo from './logo.svg';
import './App.css';

import Section from './components/Section'
import Searchbar from './components/Searchbar'
import HistoryList from './components/HistoryList.js'

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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

function App() {
  const classes = useStyles();
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [history, setHistory] = useState([])

  const clearText = () => {
    console.log("CHECK info", city, country)
    setCity('orange')
    setCountry('black')
    console.log("CHECK info1", city, country)
  }

  const requestWeather = () => {
    // api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=2a694ddfc62b4413a62525bc6a71db59
    // 2a694ddfc62b4413a62525bc6a71db59

    setHistory([ ...history, { city, country } ])
  }

  return (
    // <div className="App" style={{maxWidth: 1280}}>
    //   <main>
    //     <Section title="Today's Weather">
    //       <Searchbar />
    //     </Section>
    //     <Section title="Search History">
    //       <HistoryList />
    //     </Section>
    //   </main>
    // </div>

    <div className="App" style={{maxWidth: 1280}}>
      <main>
        <Grid container className={classes.grid} spacing={1}>
          <Grid item>
            <Typography variant="h4" className={classes.title}>
              Today's Weather
            </Typography>
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
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

          <Grid item>
            <Typography variant="h4" className={classes.title}>
              Search History
            </Typography>
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item container direction="row" justify="flex-start" alignItems="center" spacing={2} className={classes.searchbar}>
            {
              history.map( ({ city, country}) => 
                <Typography variant="body1" className={classes.title}>
                  City: {city} Country: {country}
                </Typography>
              )

            }
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default App;
