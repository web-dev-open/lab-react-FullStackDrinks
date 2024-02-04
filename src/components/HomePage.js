import React from 'react'
import { Link } from 'react-router-dom';
import beersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';
function HomePage(){
    return (
        <div>
        <div className='box'>
        <img src={beersImage} alt='beer_pic'></img>
        <Link to="/beers"><h1>All Beers</h1></Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate lorem ac dolor euismod hendrerit. Maecenas lacinia tempus massa, at iaculis arcu. Vestibulum a eros ut sapien porttitor finibus. Curabitur risus velit, laoreet id molestie ut, placerat non quam. Proin posuere enim at massa porttitor volutpat. Vivamus vel scelerisque nulla. Proin blandit massa a rhoncus imperdiet. Suspendisse ac dapibus lorem. Sed posuere ullamcorper lorem. Nullam quis iaculis leo.</p>
      </div>

      <div className='box'>
        <img src={randomBeerImage} alt="random-beer"></img>
        <Link to="/random-beer"><h1>Random Beer</h1></Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate lorem ac dolor euismod hendrerit. Maecenas lacinia tempus massa, at iaculis arcu. Vestibulum a eros ut sapien porttitor finibus. Curabitur risus velit, laoreet id molestie ut, placerat non quam. Proin posuere enim at massa porttitor volutpat. Vivamus vel scelerisque nulla. Proin blandit massa a rhoncus imperdiet. Suspendisse ac dapibus lorem. Sed posuere ullamcorper lorem. Nullam quis iaculis leo.</p>
      </div>
     
      <div className='box'>
        <img src={newBeerImage} alt="new-beer"></img>
        <Link to="/new-beer"><h1>New Beer</h1></Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate lorem ac dolor euismod hendrerit. Maecenas lacinia tempus massa, at iaculis arcu. Vestibulum a eros ut sapien porttitor finibus. Curabitur risus velit, laoreet id molestie ut, placerat non quam. Proin posuere enim at massa porttitor volutpat. Vivamus vel scelerisque nulla. Proin blandit massa a rhoncus imperdiet. Suspendisse ac dapibus lorem. Sed posuere ullamcorper lorem. Nullam quis iaculis leo.</p>
        </div>
        </div>
    )
}
export default HomePage