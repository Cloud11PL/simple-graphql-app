import * as React from 'react';
import { Formik } from 'formik';

import { AddMovieForm } from './components';

const AddMovie = () => {
  return (
    <Formik
      initialValues={{ movieTitle: '', planets: [] }}
      onSubmit={() => console.log('uwu')}
    >
      {/* {({ setFieldValue }) => {
      }} */}
        <AddMovieForm />
    </Formik>
  );
};

export default AddMovie;
