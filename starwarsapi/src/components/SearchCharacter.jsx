import React from 'react'
import '../App.css'


const SearchCharacter = ({items}) => {

    const searchCharacterHandler = (items) => {
        items.preventDefault();
        const character = items.target.name.value
        console.dir(character);
        //getCharacter(items.name)
    }

    const getCharacter = (name) => {
        const url = `https://swapi.dev/api/people/${name}`
    }

    return (
        <div>
            <form onSubmit={searchCharacterHandler}>
            <input type="text" name="name" id="name" placeholder="Enter a  Name"/>
            </form>
        </div>
    )
}

export default SearchCharacter;
