import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoApiOptions } from '../searchBar/api';
const Search = ({onSearchChange}) => {

    const [search, setSearch ] = useState(null);

    const loadOptions = (inputValue) => {
      // eslint-disable-next-line no-undef
      return fetch(`${GEO_API_URL}/cities?&namePrefix=${inputValue}`, geoApiOptions)
.then((response) => response.json())
.then((response) => {
  return {
    options: response.data.map((city) => {
      return {
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countrycode}`,
      }
    })
  }
})
.catch((err) => console.error(err));

    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
  return (
    <AsyncPaginate
    placeholder="search"
    debounceTimeout={600}
    value={search}
    onChange={handleOnChange}
    loadOptions={loadOptions}
    />
  )
}

export default Search