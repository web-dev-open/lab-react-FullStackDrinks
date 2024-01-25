import React, { useEffect, useState } from 'react'
import Header from '../Header';
import axios from 'axios';

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState({})

  

    useEffect(()=>{
      const getRandomBeer= async ()=>{
        try{
         const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
          setRandomBeer(response.data)
        }
        catch(error){
             console.error("Error getting while random beer",error)
        }
      }
      getRandomBeer()
    },[])  


    console.log(randomBeer)

  return (
    <>
    <Header/>
    <div className="flex flex-col items-center justify-center bg-gray-100 shadow-md h-1/2 my-10 w-1/2 m-auto py-10 px-10
">
      <img
        className="rounded-lg mb-4 h-96"
        src={randomBeer.image_url}
        alt={randomBeer.name}
      />

      <section className="flex justify-between leading-10  p-8 rounded-lg  w-full  ">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-5">{randomBeer.name}</h2>
          <h3 className="text-gray-600 text-xl">{randomBeer.tagline}</h3>
        </div>
        <div >
        
            <p className="text-2xl font-bold text-gray-500 mb-5">Attenuation Level: {randomBeer.attenuation_level}</p>
            <p className='font-bold'>First Brewed: {randomBeer.first_brewed}</p>

        </div>
        
      </section>

      <p className="mt-4 text-left text-black font-bold max-w-screen-md">{randomBeer.description}</p>
      <h3 className="mt-4 text-gray-700">{randomBeer.contributed_by}</h3>
    </div>
   
    </>
  )
}

export default RandomBeer