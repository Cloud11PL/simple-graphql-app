import * as React from 'react';
import { Formik, FormikErrors } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { addMovie } from 'Core/actions';
import { PlanetPreview } from 'Common/types';
import { AddMovieForm } from './components';
import { Form } from './components/AddMoveForm/components';

const addMovieSchema = Yup.object().shape({
  movieTitle: Yup.string()
    .required('Movie title is required!')
    .matches(/^[A-Z]/, 'Movie title name must start with a capital letter'),
  planets: Yup.array()
    .min(1, 'Add at least one planet to your movie')
    .required(),
});

type FormValues = {
  movieTitle: string;
  planets: PlanetPreview[];
};

const AddMovie = () => {
  const initValues: FormValues = {
    movieTitle: '',
    planets: [],
  };

  const dispatch = useDispatch();

  const submitForm = (vals: FormValues) => {
    dispatch({
      type: addMovie,
      payload: vals
    });
  };

  return (
    <Formik
      initialValues={initValues}
      onSubmit={(vals: FormValues) => submitForm(vals)}
      validationSchema={addMovieSchema}
    >
      {({ handleReset, handleSubmit, errors, setFieldValue, values }) => {
        console.log(errors);
        return (
          <Form onReset={handleReset} onSubmit={handleSubmit}>
            <AddMovieForm
              setFieldValue={setFieldValue}
              errors={
                errors as FormikErrors<{ planets: string; movieTitle: string }>
              }
              addedPlanets={values.planets}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddMovie;
