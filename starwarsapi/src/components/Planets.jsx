import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../App.css'

const Films = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets')
        .then( response => {setItems(response.data.results)})
        .catch(error => console.error(error))
    }, [])

    return (
       
        <div className="wrapper">
            <ul className="card-grid">
            {items && items.map((item) => (
                <li>
                    <article className="card" key={item.name}>
                        <div className="card-content">
                            <h2 className="card-name">{item.name}</h2>
                            <ol>
                                <li>
                                    <p>rotation period: <span className="span">{item.rotation_period}</span></p> 
                                </li>
                                <li>
                                    <p>orbital_period: <span className="span">{item.orbital_period}</span></p>
                                </li>
                                <li>
                                    <p>diameter: <span className="span">{item.diameter}</span></p>
                                </li>
                                <li>
                                    <p>climate: <span className="span">{item.climate}</span></p>
                                </li>
                                <li>
                                    <p>terrain: <span className="span">{item.terrain}</span></p>
                                </li>
                                <li>
                                    <p>population: <span className="span">{item.population}</span></p>
                                </li>
                            </ol>
                        </div>
                    </article>
                </li>
            )
            )}
            </ul>
        </div>
        
    )
}

export default Films
