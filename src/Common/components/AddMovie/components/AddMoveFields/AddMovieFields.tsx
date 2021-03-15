import * as React from 'react';
import { useState, useEffect } from 'react';
import { useField, FormikErrors, FieldArray, FormikTouched } from 'formik';
import Autosuggest from 'react-autosuggest';
import { propEq, isEmpty, isNil, filter } from 'ramda';

import { usePlanets } from 'Common/hooks';
import { getSuggestedPlanets } from 'Common/helpers';
import { Close } from 'Assets/Icons';
import { IconButton, LoadingBox } from 'Common/components';
import {
  Input,
  Label,
  AutosuggestWrapper,
  PlanetButtonWrapper,
  PlanetsWrapper,
  FieldError,
  SubmitButton,
} from './components';
import { PlanetPreview } from 'Common/types';

type Props = {
  setFieldValue: (field: string, value: string) => void;
  errors?: FormikErrors<{
    movieTitle: string;
    planets: string;
  }>;
  touched?: FormikTouched<{
    movieTitle: boolean;
    planets: boolean;
  }>
  addedPlanets: PlanetPreview[];
};

const AddMovieForm = ({ setFieldValue, errors, addedPlanets, touched }: Props) => {
  const { data, loading } = usePlanets();
  const [suggestions, setSuggestions] = useState<PlanetPreview[]>([]);
  const [autosuggestValue, setAutosuggestValue] = useState<string>('');
  const [field] = useField({
    name: 'movieTitle',
    placeholder: 'Please enter the title of the movie',
  });

  useEffect(() => {
    if (!isNil(data) && !loading && !isEmpty(autosuggestValue)) {
      setSuggestions(getSuggestedPlanets(data, autosuggestValue));
    }
  }, [autosuggestValue, data, loading]);

  const getSuggestionValue = (suggestion: PlanetPreview) =>
    suggestion.name || '';

  const renderSuggestion = (suggestion: PlanetPreview) => (
    <div>{suggestion.name}</div>
  );

  const removePlanetFromSelected = (planetId: string) => {
    const newArr: PlanetPreview[] = addedPlanets.filter((planet) => {
      if (!propEq('id', planetId, planet)) {
        return planet;
      }
    });
    setFieldValue('planets', newArr as any);
  };

  const renderSelectedPlanets = () => {
    return addedPlanets.map((planet) => {
      return (
        <PlanetButtonWrapper>
          {planet.name}
          <IconButton handleClick={() => removePlanetFromSelected(planet.id)}>
            <Close />
          </IconButton>
        </PlanetButtonWrapper>
      );
    });
  };

  const isPlanetAdded = (id: string) =>
    !isEmpty(filter(propEq('id', id))(addedPlanets));

  return (
    <>
      <div style={{ position: 'relative', marginTop: '1em' }}>
        <Label hasError={!isNil(errors?.movieTitle) && touched?.planets}>Movie title</Label>
        <Input {...field} placeholder="Please enter the title of the movie" />
        {!isNil(errors?.movieTitle) && touched?.movieTitle && (
          <FieldError>{errors?.movieTitle}</FieldError>
        )}
      </div>

      <PlanetsWrapper>{renderSelectedPlanets()}</PlanetsWrapper>

      <div style={{ position: 'relative', marginTop: '1em' }}>
        <Label hasError={!isNil(errors?.planets) && touched?.planets}>Movie planets</Label>
        <AutosuggestWrapper>
          <FieldArray
            name="planets"
            render={(arrayHelpers) => (
              <Autosuggest
                suggestions={suggestions}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                onSuggestionsFetchRequested={() => console.log('XD!')}
                inputProps={{
                  placeholder: 'Type someting',
                  value: autosuggestValue,
                  onChange: (e: any, { newValue }) => {
                    setAutosuggestValue(newValue);
                  },
                }}
                onSuggestionSelected={(e, { suggestion }) => {
                  const { name, id } = suggestion;
                  setAutosuggestValue('');
                  if (!isPlanetAdded(id)) {
                    arrayHelpers.push({ name, id });
                  }
                }}
              />
            )}
          />

          {!isNil(errors?.planets) && touched?.planets && (
            <FieldError>{errors?.planets}</FieldError>
          )}
          
        </AutosuggestWrapper>
      </div>

      <SubmitButton type="submit" hasError={!isEmpty(errors)}>
        Add Movie
      </SubmitButton>
    </>
  );
};

export default AddMovieForm;
