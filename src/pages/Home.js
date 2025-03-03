import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";
import "../App.css";

const Home = () => {
  const links = [
    {
      path: "/beers",
      label: "All Beers",
      image: beersImg,
      description:
        "Explore our collection of handcrafted beers. Find the perfect drink for any occasion!",
    },
    {
      path: "/random-beer",
      label: "Random Beer",
      image: randomBeerImg,
      description:
        "Feeling adventurous? Let us surprise you with a random beer from our collection!",
    },
    {
      path: "/new-beer",
      label: "New Beer",
      image: newBeerImg,
      description:
        "Create your own beer entry! Share details about your favorite brew.",
    },
  ];

  return (
    <div className="home-container">

      {/* Cards Section */}
      <div className="home-card">
        {links.map((link, index) => (
          <Link
            to={link.path}
            key={index}
            className="normal-text"
          >
            <img
              src={link.image}
              alt={link.label}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-600 mb-2">{link.label}</h2>
            <p className="text-gray-700 text-sm">{link.description}</p><br/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
