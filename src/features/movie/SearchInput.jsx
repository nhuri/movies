import React, { useState } from 'react'

const SearchInput = ({searchMovie}) => {
  const [searchValue, setSearchValue] = useState('')
const handleInputSearch = (e)=>{
  setSearchValue(e.target.value)
}
const handleSearchMovie=()=>{
  searchMovie(searchValue)
}

  return (
    <div className='search-block'>
        <input onChange = {handleInputSearch} type="text" placeholder='Search By Title' value={searchValue}/>
        <button onClick={handleSearchMovie}>Search</button>
    </div>
  )
}

export default SearchInput