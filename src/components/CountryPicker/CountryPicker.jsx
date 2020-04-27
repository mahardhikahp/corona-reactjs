import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from './CountryPicker.module.css';

import { fetchCountries } from "../../Api";

const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries, setFetchCountries] = useState([]);

  useEffect(() => {
    const fetchNations = async () => {;
    setFetchCountries(await fetchCountries());
    }

    fetchNations();

  }, [setFetchCountries]);

//   console.log("negaranya boy", fetchedCountries); 

  return (
    <FormControl className={styles.container}>
      <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option> )}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
