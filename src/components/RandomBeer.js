import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom';



function RandomBeer() {

    const [list, setList] = useState()
    const [reroll, setReroll] = useState(true)

    useEffect(() => {
        async function makeApi (){
            await axios.get('https://ih-beers-api2.herokuapp.com/beers')
                .then((res) => {
                    console.log(res)
                    setList(res.data)
                    
                })
        }
        setReroll(true)
        makeApi()
        
    }, [reroll])

function reRollin(){
  setReroll(false)
}



if(!list){
    return  <Spinner animation="border" variant="primary" />
  }

  let randomIndex = Math.floor(Math.random() * list.length)
  let randomBeer = list[randomIndex]
    console.log(randomBeer)

  return (
        <div>
            <h1>{randomBeer.name}</h1>
            <img src={`${randomBeer.image_url}`} style={{ width: 100, height: 300}}></img>
            <Button onClick={reRollin}> reroll</Button>

        </div>


  )
}

export default RandomBeer