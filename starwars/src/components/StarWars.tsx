import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StarWars = ({  }) => {
  const getPeople = async () => {
    const person = await axios.get('https://swapi.co/api/people/1');
    console.log(person.data);
  };

  getPeople();

  return (
    <>
    </>
  );
};

export default StarWars;
