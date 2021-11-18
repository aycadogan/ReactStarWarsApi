import React, {useState, useEffect} from 'react'
import axios from 'axios'


const People = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people')
        .then( response => {setData(response.data.results)})
        .catch(error => console.error(error))
    }, [])

    return (
        <div>
            {data && data.map((item) => (
                <div className="card" key={item.name}>
                    <div>
                        <p className="card-name">{item.name}</p>
                    </div>
                    

                </div>
            )
            )}
        </div>
    )
}

export default People
