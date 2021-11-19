import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../App.css'

const Starships = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships')
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
                                <p>Model: <span className="span">{item.model}</span></p> 
                            </li>
                            <li>
                                <p>Manufacturer: <span className="span">{item.manufacturer}</span></p>
                            </li>
                            <li>
                                <p>cost in credits: <span className="span">{item.cost_in_credits}</span></p>
                            </li>
                            <li>
                                <p>length: <span className="span">{item.length}</span></p>
                            </li>
                            <li>
                                <p>Passengers: <span className="span">{item.passengers}</span></p>
                            </li>
                            <li>
                                <p>cargo capacity: <span className="span">{item.cargo_capacity}</span></p>
                            </li>
                            <li>
                                <p>starship class: <span className="span">{item.starship_class}</span></p>
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

export default Starships
