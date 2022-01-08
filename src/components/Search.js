import React, { useState , useEffect} from 'react'
import axios from 'axios'

import { Card } from '@mui/material'

const Search = () => {

    const [APIData, setAPIData] = useState([])
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);


    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
    const [ keyword , setkeyword] = useState('')
    const searchHandler = (e)=>{

        e.preventDefault()

    }
    return (
        <div>
            <input type="text" class="form-control" id="search_field" placeholder="search room"
            onChange={(e) => searchItems(e.target.value)}/>

                {  searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <div>
                            {item.name}
                                        {item.email}
                                        </div>
                        )
                    })
                ) :(APIData.map((item) => {
                    return (
                        <div>
                        {item.name}
                        {item.email}
                        </div>
                    )
                              
                })
                )}

            {/* <form onSubmit={searchHandler}>
  <div class="input-group">
    <input type="text" class="form-control" id="search_field" placeholder="Enter email"
    onChange={(e)=>setkeyword(e.target.value)}/>
  </div>
  <div class="input-group-append">
      <button id="search_btn" className='btn'>
       search
      </button>
  </div>
  </form> */}
        </div>
    )
}

export default Search
