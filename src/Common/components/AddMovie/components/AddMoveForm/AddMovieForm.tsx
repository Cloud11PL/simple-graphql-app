import * as React from 'react';
import { useState } from 'react';
import { useField } from 'formik';
import Autosuggest from 'react-autosuggest';

import { Input, Form, Label } from './components';

type Props = {
  setFieldValue?: (field: string, value: string) => void;
};

const AddMovieForm = ({ setFieldValue }:Props) => {
    const [suggestion]
  const [field] = useField({
    name: 'movieTitle',
    placeholder: 'Please enter the title of the movie',
  });

  const getSuggestion = (rVal: string) => {
    return PLANETS.filter((val: any) => val.name === rVal)[0].name;
  };

  return (
    <Form>
      <div style={{ position: 'relative', marginTop: '1em' }}>
        <Label>Movie title</Label>
        <Input {...field}  placeholder="Please enter the title of the movie" />
      </div>
      <div style={{ position: 'relative', marginTop: '1em' }}>
        <Autosuggest getSuggestionValue={getSuggestion} suggestions={PLANETS} />
      </div>
    </Form>
  );
};

export default AddMovieForm;

const PLANETS = [
  {
    name: 'Tatooine',
    id: 'cGxhbmV0czox',
  },
  {
    name: 'Alderaan',
    id: 'cGxhbmV0czoy',
  },
  {
    name: 'Yavin IV',
    id: 'cGxhbmV0czoz',
  },
  {
    name: 'Hoth',
    id: 'cGxhbmV0czo0',
  },
  {
    name: 'Dagobah',
    id: 'cGxhbmV0czo1',
  },
  {
    name: 'Bespin',
    id: 'cGxhbmV0czo2',
  },
  {
    name: 'Endor',
    id: 'cGxhbmV0czo3',
  },
  {
    name: 'Naboo',
    id: 'cGxhbmV0czo4',
  },
  {
    name: 'Coruscant',
    id: 'cGxhbmV0czo5',
  },
  {
    name: 'Kamino',
    id: 'cGxhbmV0czoxMA==',
  },
  {
    name: 'Geonosis',
    id: 'cGxhbmV0czoxMQ==',
  },
  {
    name: 'Utapau',
    id: 'cGxhbmV0czoxMg==',
  },
  {
    name: 'Mustafar',
    id: 'cGxhbmV0czoxMw==',
  },
  {
    name: 'Kashyyyk',
    id: 'cGxhbmV0czoxNA==',
  },
  {
    name: 'Polis Massa',
    id: 'cGxhbmV0czoxNQ==',
  },
  {
    name: 'Mygeeto',
    id: 'cGxhbmV0czoxNg==',
  },
  {
    name: 'Felucia',
    id: 'cGxhbmV0czoxNw==',
  },
  {
    name: 'Cato Neimoidia',
    id: 'cGxhbmV0czoxOA==',
  },
  {
    name: 'Saleucami',
    id: 'cGxhbmV0czoxOQ==',
  },
  {
    name: 'Stewjon',
    id: 'cGxhbmV0czoyMA==',
  },
  {
    name: 'Eriadu',
    id: 'cGxhbmV0czoyMQ==',
  },
  {
    name: 'Corellia',
    id: 'cGxhbmV0czoyMg==',
  },
  {
    name: 'Rodia',
    id: 'cGxhbmV0czoyMw==',
  },
  {
    name: 'Nal Hutta',
    id: 'cGxhbmV0czoyNA==',
  },
  {
    name: 'Dantooine',
    id: 'cGxhbmV0czoyNQ==',
  },
  {
    name: 'Bestine IV',
    id: 'cGxhbmV0czoyNg==',
  },
  {
    name: 'Ord Mantell',
    id: 'cGxhbmV0czoyNw==',
  },
  {
    name: 'unknown',
    id: 'cGxhbmV0czoyOA==',
  },
  {
    name: 'Trandosha',
    id: 'cGxhbmV0czoyOQ==',
  },
  {
    name: 'Socorro',
    id: 'cGxhbmV0czozMA==',
  },
  {
    name: 'Mon Cala',
    id: 'cGxhbmV0czozMQ==',
  },
  {
    name: 'Chandrila',
    id: 'cGxhbmV0czozMg==',
  },
  {
    name: 'Sullust',
    id: 'cGxhbmV0czozMw==',
  },
  {
    name: 'Toydaria',
    id: 'cGxhbmV0czozNA==',
  },
  {
    name: 'Malastare',
    id: 'cGxhbmV0czozNQ==',
  },
  {
    name: 'Dathomir',
    id: 'cGxhbmV0czozNg==',
  },
  {
    name: 'Ryloth',
    id: 'cGxhbmV0czozNw==',
  },
  {
    name: 'Aleen Minor',
    id: 'cGxhbmV0czozOA==',
  },
  {
    name: 'Vulpter',
    id: 'cGxhbmV0czozOQ==',
  },
  {
    name: 'Troiken',
    id: 'cGxhbmV0czo0MA==',
  },
  {
    name: 'Tund',
    id: 'cGxhbmV0czo0MQ==',
  },
  {
    name: 'Haruun Kal',
    id: 'cGxhbmV0czo0Mg==',
  },
  {
    name: 'Cerea',
    id: 'cGxhbmV0czo0Mw==',
  },
  {
    name: 'Glee Anselm',
    id: 'cGxhbmV0czo0NA==',
  },
  {
    name: 'Iridonia',
    id: 'cGxhbmV0czo0NQ==',
  },
  {
    name: 'Tholoth',
    id: 'cGxhbmV0czo0Ng==',
  },
  {
    name: 'Iktotch',
    id: 'cGxhbmV0czo0Nw==',
  },
  {
    name: 'Quermia',
    id: 'cGxhbmV0czo0OA==',
  },
  {
    name: 'Dorin',
    id: 'cGxhbmV0czo0OQ==',
  },
  {
    name: 'Champala',
    id: 'cGxhbmV0czo1MA==',
  },
  {
    name: 'Mirial',
    id: 'cGxhbmV0czo1MQ==',
  },
  {
    name: 'Serenno',
    id: 'cGxhbmV0czo1Mg==',
  },
  {
    name: 'Concord Dawn',
    id: 'cGxhbmV0czo1Mw==',
  },
  {
    name: 'Zolan',
    id: 'cGxhbmV0czo1NA==',
  },
  {
    name: 'Ojom',
    id: 'cGxhbmV0czo1NQ==',
  },
  {
    name: 'Skako',
    id: 'cGxhbmV0czo1Ng==',
  },
  {
    name: 'Muunilinst',
    id: 'cGxhbmV0czo1Nw==',
  },
  {
    name: 'Shili',
    id: 'cGxhbmV0czo1OA==',
  },
  {
    name: 'Kalee',
    id: 'cGxhbmV0czo1OQ==',
  },
  {
    name: 'Umbara',
    id: 'cGxhbmV0czo2MA==',
  },
];
