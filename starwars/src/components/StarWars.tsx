import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

import People from './People';
import Person, { PersonData } from './Person';

const StarWars = ({  }) => {
  const [personResponse, setPersonResponse] = useState();
  const [count, setCount] = useState(1);

  function retrievePerson() {
    (async () => {
      try {
        setPersonResponse(
          await axios.get(`https://swapi.co/api/people/${count}`)
        );
      } catch (e) {
        console.log(e);
      }
    })();
  }

  useEffect(retrievePerson, [count]);

  window.addEventListener('keydown', (e) => {
    setCount(oldCount => oldCount + 1);
  });

  return (
    <>
      <Person response={personResponse} />
    </>
  );
};

export default StarWars;
