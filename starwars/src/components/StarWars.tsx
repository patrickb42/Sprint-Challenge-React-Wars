import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

import People from './People';
import Person, { PersonData } from './Person';

const StarWars = ({  }) => {
  const [personResponse, setPersonResponse] = useState();

  function retrievePerson() {
    (async () => {
      try {
        setPersonResponse(
          await axios.get('https://swapi.co/api/people/1')
        );
      } catch (e) {
        console.log(e);
      }
    })();
  }

  useEffect(retrievePerson, []);

  return (
    <>
      <Person response={personResponse} />
    </>
  );
};

export default StarWars;
