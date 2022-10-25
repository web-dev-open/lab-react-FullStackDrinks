
import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {AppContext} from '../context/list.context'

function List() {

    const {list, setList} = useContext(AppContext)	



    useEffect(() => {
        async function makeApi (){
            await axios.get('https://ih-beers-api2.herokuapp.com/beers')
                .then((res) => {
                    console.log(res)
                    setList(res.data)
                })
        }
    
        makeApi()
    }, [])

  return (
    <>
    <h2>Beers</h2>
    <div style={{ flexWrap: 'wrap', display: 'flex', flexDirection: 'row'}}>
    {
        list.map((beer, i) => {
            return (
                <>
                <Link to={`/beer/${beer._id}`}>
                <div key={beer.name} style={{ margin: 40, width: "100%"}}>
                    <img style={{ width: 100, height: 200}} src= {`${beer.image_url}`}></img>
                    {beer.name}
                </div>
                </Link>
                </>
            )
        })
    } </div>
</>
)
}


export default List