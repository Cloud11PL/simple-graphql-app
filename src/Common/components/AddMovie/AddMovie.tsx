import * as React from 'react';
import { Formik, FormikErrors, FormikTouched } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import addMovieAction from 'Common/actions/addMovieAction';
import { PlanetPreview } from 'Common/types';
import { AddMovieFields } from './components';
import { Form } from './components/AddMoveFields/components';

const addMovieSchema = Yup.object().shape({
  movieTitle: Yup.string()
    .required('Movie title is required!')
    .matches(/^[A-Z]/, 'Movie title name must start with a capital letter')
    .min(3, "The title is too short"),
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
    dispatch(addMovieAction(vals));
  };

  return (
    <Formik
      initialValues={initValues}
      onSubmit={(vals: FormValues, { resetForm }) => {
        submitForm(vals);
        resetForm();
      }}
      validationSchema={addMovieSchema}
    >
      {({
        handleReset,
        handleSubmit,
        errors,
        setFieldValue,
        values,
        touched,
      }) => (
        <Form
          onReset={handleReset}
          onSubmit={handleSubmit}
        >
          <AddMovieFields
            setFieldValue={setFieldValue}
            errors={
              errors as FormikErrors<{ planets: string; movieTitle: string }>
            }
            touched={
              touched as FormikTouched<{
                planets: boolean;
                movieTitle: boolean;
              }>
            }
            addedPlanets={values.planets}
          />
        </Form>
      )}
    </Formik>
  );
};

export default AddMovie;
