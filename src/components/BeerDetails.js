import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom';
import {AppContext} from '../context/list.context'
import { Button, Row, Spinner } from 'react-bootstrap'




function BeerDetails() {

    let {id} = useParams()
    
    console.log(id)
    const [list, setList] = useState([])	


    useEffect(() => {
        async function makeApi (){
            await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
                .then((res) => {
                    console.log(res.data)
                    setList(res.data)
                    
                })
        }
    
        makeApi()
    }, [])


    if(!list){
        return  <Spinner animation="border" variant="primary" />
      }

  return (
    <div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <img style={{ width: 100}} src={`${list.image_url}`}></img>
        <h1>
            {list.name}
        </h1>
        <div style={{ display: 'flex'}}>
        <h4 style={{ color: "gray", marginRight: 50}}>{list.tagline}</h4>
        <h6>{list.attenuation_level}</h6>
        </div>
        <p style={{fontWeight: 'bold'}}>{list.description}</p>
        <p style={{ color: "gray", fontWeight: 'bold'}}>{list.contributed_by}</p>
        <Link to={`/list`}>Back to List</Link>
    </div>
    
    </div>
  )
}

export default BeerDetails