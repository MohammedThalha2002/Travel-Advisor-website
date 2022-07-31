/* eslint-disable consistent-return */
import axios from 'axios';
import { useState } from 'react';

export const getPlacesData = async (lat, long, type) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng`, {
      params: {
        latitude: lat,
        longitude: long,
      }, 
      headers: {
        'x-rapidapi-key': 'f5dca0b228msh53bbb1d33a3c45fp10fd31jsn5922659ac882',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com', 
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: { lat, lon: lng },
        headers: {
          'x-rapidapi-key': 'f5dca0b228msh53bbb1d33a3c45fp10fd31jsn5922659ac882',
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
