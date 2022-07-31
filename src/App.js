import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
import { getPlacesData } from './api/travelAdvisorAPI';

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getPlacesData(position.coords.latitude, position.coords.longitude, 'hotels')
        .then((data) => {
          setPlaces(data)
          console.log( "Getting the places in App.js file" + places)
        })
    })
  }, [])



  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={12}>
          <List places={places}/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
