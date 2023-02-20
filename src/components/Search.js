import React, { useState } from 'react'
import { AsyncPaginate } from "react-select-async-paginate"
import "./Search.css"

const Search = () => {

    const [searchValue, setSearchValue] = useState("")

    const loadOptions = async (inputValue) => {
        if (!!inputValue) {

        }
        return {
            options: []
        }
    }
    const handleChangeSearchInput = (searchValue) => {
        setSearchValue(searchValue)
    }
    console.log(searchValue)
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