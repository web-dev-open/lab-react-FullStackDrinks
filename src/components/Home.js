import React from 'react'
import { Link } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'


function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}} >

 
    <Link to="/list">
    <div>
      <img src='https://3.bp.blogspot.com/-QCw7msM6NZM/Vqg7cahAjOI/AAAAAAAAQwM/JhwLBfXa7Ng/s640/Lotsa%2BBeers.jpg'></img>
      <h1>List of Beers</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at mattis nulla. 
    Suspendisse ut tempor odio. Sed massa nibh, ultrices vitae nunc quis, 
    elementum malesuada eros. Vivamus et venenatis neque. Donec accumsan sapien dui, 
    a eleifend nisl vehicula in. Morbi aliquam lorem odio. Nam porttitor congue rhoncus. 
    Maecenas auctor ligula.</p>
    </div>
    </Link>
    <Link to="/random-beer">
    <div>
    <img src='https://3.bp.blogspot.com/-QCw7msM6NZM/Vqg7cahAjOI/AAAAAAAAQwM/JhwLBfXa7Ng/s640/Lotsa%2BBeers.jpg'></img>
    <h1>Random Beer</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at mattis nulla. 
    Suspendisse ut tempor odio. Sed massa nibh, ultrices vitae nunc quis, 
    elementum malesuada eros. Vivamus et venenatis neque. Donec accumsan sapien dui, 
    a eleifend nisl vehicula in. Morbi aliquam lorem odio. Nam porttitor congue rhoncus. 
    Maecenas auctor ligula.</p>
      </div>
      </Link>
      <Link to="/new-beer">
      <div>
      <img src='https://3.bp.blogspot.com/-QCw7msM6NZM/Vqg7cahAjOI/AAAAAAAAQwM/JhwLBfXa7Ng/s640/Lotsa%2BBeers.jpg'></img>
      <h1>Add New Beer</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at mattis nulla. 
    Suspendisse ut tempor odio. Sed massa nibh, ultrices vitae nunc quis, 
    elementum malesuada eros. Vivamus et venenatis neque. Donec accumsan sapien dui, 
    a eleifend nisl vehicula in. Morbi aliquam lorem odio. Nam porttitor congue rhoncus. 
    Maecenas auctor ligula.</p>
      </div>
      </Link>
  </div>
  )
}

export default Home