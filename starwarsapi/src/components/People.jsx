import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../App.css'

const People = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people')
        .then( response => {setItems(response.data.results)})
        .catch(error => console.error(error))
    }, [])

    return (
       
        <div className="wrapper">
            <ul className="card-grid">
            {items && items.map((item) => (
                <li>
                    <article className="card" key={item.name}>
                        <div className="card-image">
                            <img src={`/img/${item.name.split(' ').join('')}.webp`} alt="character" />
                        </div>
                        <div className="card-content">
                            <h2 className="card-name">{item.name}</h2>
                            <ol>
                                <li>
                                    <p>Height: <span className="span">{item.height}</span></p> 
                                </li>
                                <li>
                                    <p>Mass: <span className="span">{item.mass}</span></p>
                                </li>
                                <li>
                                    <p>Hair Color: <span className="span">{item.hair_color}</span></p>
                                </li>
                                <li>
                                    <p>Skin Color: <span className="span">{item.skin_color}</span></p>
                                </li>
                                <li>
                                    <p>Eye Color: <span className="span">{item.eye_color}</span></p>
                                </li>
                                <li>
                                    <p>Birth Year: <span className="span">{item.birth_year}</span></p>
                                </li>
                                <li>
                                    <p>Gender: <span className="span">{item.gender}</span></p>
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

export default People
