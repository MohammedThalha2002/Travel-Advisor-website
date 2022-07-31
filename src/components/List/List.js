import React, { useState } from 'react';
import { Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

function List({ places }) {
  const classes = useStyles();
  const [type, setType] = useState('restaurents');
  const [rating, setRating] = useState('');


  return (
    <div className={classes.container}>
      {/* Heading  */}
      <Typography varient="h2"> Restaurents, Hotels & Attractions Around You</Typography>
      {/* Form for Selecting Restau, hotels, attractions */}
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurents">Restaurents</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      {/* Form for filter based on the Rating */}
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid conatiner spacing={5} columns={4} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default List;
