import { Link } from "react-router-dom";


const BeerCard = ({ img, name, tagline, contributed_by, beerId }) => {


    return (
        <Link
          className="flex items-center justify-evenly bg-slate-100 w-[800px] max-sm:w-[90%] p-4 rounded-lg shadow-md my-3 h-[30vh] "
           to={`/beers/${beerId}`}
         >
        <img className="h-52 object-contain mx-8" src={img} alt={name} />
        <div className=" leading-10 h-5/6">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-600">{tagline}</p>
          <p className="text-gray-700">
            <b>Created by:</b> {contributed_by}
          </p>
        </div>
          </Link>
    );
  };

  export default BeerCard