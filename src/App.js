import './App.css';
import { Link} from "react-router-dom"
import beersImg from "./assets/beers.png"
import newBeerImg from "./assets/new-beer.png"
import randomBeerImg from "./assets/random-beer.png"

const Card = ({imageUrl,title,paragrah})=>{
  return(
    <div className='max-w-sm rounded overflow-hidden m-5 bg-lime-100 shadow-lg'>
       <img src={imageUrl} alt={title} />
       <div className='px-6 py-4'>
        <h2 className=' text-2xl mb-2'>{title}</h2>
        <p className='text-gray-700 text-base'>{paragrah}</p>
       </div>
    </div>
  )
}


function App() {



  return (
    <div className="App container  flex justify-center items-center flex-col ">

    <Link to={'/beers'}>
    <Card 
      imageUrl={beersImg}
      title="All Beers"
      paragrah="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quis asperiores ducimus ipsa corrupti consequuntur sit esse rem vel amet?"
    />
    </Link>
    <Link to={'/new-beer'}>
   
    <Card
    imageUrl={newBeerImg}
     title="New Beers"
     paragrah="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quis asperiores ducimus ipsa corrupti consequuntur sit esse rem vel amet?"
    />
    </Link>
    <Link to={'/random-beer'}>
      <Card
      imageUrl={randomBeerImg}
      title="Random Beers"
      paragrah="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quis asperiores ducimus ipsa corrupti consequuntur sit esse rem vel amet? "
      />
    </Link>
    
 
  
    </div>
  );
}

export default App;