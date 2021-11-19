import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../App.css'

const Vehicles = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/vehicles')
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
                                    <p>model: <span className="span">{item.model}</span></p> 
                                </li>
                                <li>
                                    <p>manufacturer: <span className="span">{item.manufacturer}</span></p>
                                </li>
                                <li>
                                    <p>crew: <span className="span">{item.crew}</span></p>
                                </li>
                                <li>
                                    <p>passengers: <span className="span">{item.passengers}</span></p>
                                </li>
                                <li>
                                    <p>cargo_capacity: <span className="span">{item.cargo_capacity}</span></p>
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

export default Vehicles
