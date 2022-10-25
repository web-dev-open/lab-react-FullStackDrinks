
import React, { useEffect, useState, useContext, createContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


let AppContext = createContext()

function AppContextWrapper(props){

    async function handleAddBeer(event){
        event.preventDefault()
        
        const {name, tagline , description, first_brewed, brewers_tips, attenuation_level, contributed_by     } = event.target
        console.log(name.value)
        await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name: name.value,
            tagline: tagline.value,
            description: description.value,
            first_brewed: first_brewed.value,
            brewers_tips: brewers_tips.value,
            attenuation_level: attenuation_level.value,
            contributed_by: contributed_by.value
        })
        .then((res) => {
            
        })
    }

    const [list, setList] = useState([])

    useEffect(() => {
        async function makeApi (){
            await axios.get('https://ih-beers-api2.herokuapp.com/beers')
                .then((res) => {
                    
                    setList(res.data)
                })
        }
    
        makeApi()
    }, [])


    return (
        <AppContext.Provider value={{list, setList, handleAddBeer}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextWrapper}