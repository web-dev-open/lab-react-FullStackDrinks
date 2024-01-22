import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header'

const GetSingleBeer = () => {
    const [singleBeer , setSingleBeer] = useState({})
    const {beerId} = useParams()
    
   
    
useEffect(()=>{
    const fetchSingleBeer = async ()=>{
        try{
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            setSingleBeer(response.data);
        }
        catch(error){
            console.error("Error while fetching single beer",error)
        }
      
    }
    fetchSingleBeer()
},[beerId])


console.log(singleBeer)

  return (
    <>
  <Header/>
    <div className="flex flex-col items-center justify-center bg-gray-100 shadow-md h-1/2 my-10 w-1/2 m-auto py-10 px-10
">
      <img
        className="rounded-lg mb-4 h-96"
        src={singleBeer.image_url}
        alt={singleBeer.name}
      />

      <section className="flex justify-between leading-10  p-8 rounded-lg  w-full  ">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-5">{singleBeer.name}</h2>
          <h3 className="text-gray-600 text-xl">{singleBeer.tagline}</h3>
        </div>
        <div >
        
            <p className="text-2xl font-bold text-gray-500 mb-5">Attenuation Level: {singleBeer.attenuation_level}</p>
            <p className='font-bold'>First Brewed: {singleBeer.first_brewed}</p>

        </div>
        
      </section>

      <p className="mt-4 text-left text-black font-bold max-w-screen-md">{singleBeer.description}</p>
      <h3 className="mt-4 text-gray-700">{singleBeer.contributed_by}</h3>
    </div>
    </>

  )
}

export default GetSingleBeer
