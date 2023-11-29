import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import {AppContext} from '../context/list.context'
import { Button, Row, Spinner } from 'react-bootstrap'



function AddBeer() {

    const {handleAddBeer} = useContext(AppContext)	



  return (
    <div>
        	<form onSubmit={handleAddBeer}  enctype="multipart/form-data">
			<h1>Add New Beer</h1>
			<input  name="name"  type="text"  placeholder="Enter name"/>
			<input  name="tagline "  type="text"  placeholder="Enter desc"/>
			<input  name="description"  type="text"  placeholder="Enter desc"/>
            <input  name="first_brewed "  type="text"  placeholder="Enter desc"/>
            <input  name="brewers_tips "  type="text"  placeholder="Enter desc"/>
            <input  name="attenuation_level "  type="number"  placeholder="Enter desc"/>
            <input  name="contributed_by "  type="text"  placeholder="Enter desc"/>
			<Button  type="submit"  >Submit</Button>
		</form>
    </div>
  )
}

export default AddBeer