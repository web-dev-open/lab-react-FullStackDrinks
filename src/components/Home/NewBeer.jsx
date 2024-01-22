import React, { useState } from 'react'
import Header from '../Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const NewBeer = () => {
  const navigate = useNavigate()

  const [newBeer,setNewBeer] = useState({
    name:"",
    tagline:"",
    description:"",
    first_brewed:"",
    brewers_tips:"",
    attenuation_level:"",
    contributed_by:""
  })
  const addNewBeer = async (event)=>{
    event.preventDefault()
    try {
    const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new',newBeer);
    setNewBeer(response.data)
    setNewBeer({
      name:"",
      tagline:"",
      description:"",
      first_brewed:"",
      brewers_tips:"",
      attenuation_level:"",
      contributed_by:""
    })
    navigate('/beers')
    } catch (error) {
      console.error("Error while adding a new project",error)
    }
  }




function handleChange(e){
  const {name,value}= e.target;
  setNewBeer({
    ...newBeer,
    [name]:value
  })
}
 
console.log(newBeer)

  return (
    <>
    <Header/>
    <form className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
      Name:
    </label>
    <input
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      type="text"
      id="name"
      name="name"
      onChange={handleChange}
    />
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tagline">
      Tagline:
    </label>
    <input
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      type="text"
      id="tagline"
      name="tagline"
      onChange={handleChange}
    />
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
      Description:
    </label>
    <textarea
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      id="description"
      name="description"
      cols="30"
      rows="5"
      onChange={handleChange}
    ></textarea>
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first_brewed">
      First Brewed:
    </label>
    <input
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      type="text"
      id="first_brewed"
      name="first_brewed"
      onChange={handleChange}
    />
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brewers_tips">
      Brewer's Tips:
    </label>
    <input
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      type="text"
      id="brewers_tips"
      name="brewers_tips"
      onChange={handleChange}
    />
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="attenuation_level">
      Attenuation Level:
    </label>
    <input
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      type="text"
      id="attenuation_level"
      name="attenuation_level"
      onChange={handleChange}
    />
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contributed_by">
      Contributed By:
    </label>
    <input
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      type="text"
      id="contributed_by"
      name="contributed_by"
      onChange={handleChange}
    />
  </div>

  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type="submit"
    onClick={addNewBeer}
  >
    ADD NEW
  </button>
</form>

    </>
  )
}

export default NewBeer
