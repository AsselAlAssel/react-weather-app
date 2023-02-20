import React, { useState } from 'react'
import { AsyncPaginate } from "react-select-async-paginate"
import { getCities } from '../api'
import "./Search.css"

const Search = ({ onChangeSearchValue }) => {
    const [searchValue, setSearchValue] = useState("")

    const loadOptions = async (inputValue) => {
        try {
            let response = await getCities(inputValue);
            response = response.data;
            const options = response.data.map((city) => {
                return {
                    label: `${city.name}, ${city.regionCode}`,
                    value: `${city.latitude} ${city.longitude}`
                }
            })
            return { options }
        } catch (error) {
            console.log(error)
            return {
                options: []
            }

        }
    }
    const handleChangeSearchInput = (searchValue) => {
        setSearchValue(searchValue)
        onChangeSearchValue(searchValue)
    }
    return (
        <div className='search'>
            <AsyncPaginate
                className='search__input'
                placeholder="select a city..."
                value={searchValue}
                debounceTimeout={600}//debounce time
                onChange={handleChangeSearchInput}
                loadOptions={loadOptions}
            />
        </div>
    )
}

export default Search