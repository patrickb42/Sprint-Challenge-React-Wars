import React, { useState, useEffect} from 'react';

import Name from './Name';

export interface PersonData {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}
interface PersonProps {
  response: {
    data: PersonData
  };
}
const Person = ({ response }: PersonProps) => {
  if (response === undefined || response.data === undefined) return (<></>);
  const {
    birth_year,
    gender,
    hair_color,
    height,
    homeworld,
    mass,
    name,
    skin_color,
    species,
    url,
  } = response.data;

  return (
    <>
      <Name>{name}</Name>
    </>
  );
};

export default Person;
