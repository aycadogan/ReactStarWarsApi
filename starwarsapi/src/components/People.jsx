import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CharInfo from './CharInfo.jsx'
import PeopleList from './PeopleList.jsx'


const People = ({people}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people')
        .then( response => {setData(response.data.results)})
        .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <PeopleList data={data}/>

        </div>
    )
}

export default People
