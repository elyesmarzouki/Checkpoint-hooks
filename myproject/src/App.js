//import logo from './logo.svg';
import './App.css';
import "./App.css";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";
import Filter from './components/components/Filter';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Details from "./components/Details"

function App() {
  const [movies, setMovies] = useState([
    {
      id:1,
      title: "Innocent",
      description: "Serie",
      posterUrl: "https://media.senscritique.com/media/000020038065/source_big/Innocent.jpg",
      rate: 3,
    },
    {
      id:2,
      title: "You",
      description: "Serie",
      posterUrl: "https://fr.web.img6.acsta.net/pictures/18/10/22/11/41/0937031.jpg",
      rate: 3,
    },
    {
      id:3,
      title: "L'accusé",
      description: "Movie",
      posterUrl: "https://fr.web.img6.acsta.net/pictures/16/11/18/11/16/356441.jpg",
      rate: 5,
    },
    {
      id:4,
      title: "White lines",
      description: "Serie",
      posterUrl: "https://fr.web.img5.acsta.net/pictures/20/04/22/16/47/5791638.jpg",
      rate: 4,
    },
    {
      id:5,
      title: "La reina del Sur",
      description: "Serie",
      posterUrl: "https://fr.web.img6.acsta.net/pictures/15/08/24/18/32/462895.jpg",
      rate: 5,
    },
    {
      id:6,
      title: "La casa de papel",
      description: "Serie",
      posterUrl: "https://www.avoir-alire.com/IMG/arton42400.png",
      rate: 4,
    },
    {
      id:7,
      title: "How i met your mother",
      description: "Serie",
      posterUrl: "https://starzplay-img-prod-ssl.akamaized.net/474w/20thcenturyfox/HOWIMETYOURMOTHERY2005S01E001/HOWIMETYOURMOTHERY2005S01E001-474x677-PST.jpg",
      rate: 4,
    },
    {
      id:8,
      title: "13 reasons why",
      description: "Serie",
      posterUrl: "https://images-na.ssl-images-amazon.com/images/I/918KkftCUFL.jpg",
      rate: 2,
    },
    {
      id:9,
      title: "Vikings",
      description: "Serie",
      posterUrl: "https://fr.web.img6.acsta.net/medias/nmedia/18/95/52/44/20457563.jpg",
      rate: 5,
    },
    {
      id:10,
      title: "The walking dead",
      description: "Serie",
      posterUrl: "https://www.ecranlarge.com/uploads/image/001/363/the-walking-dead-photo-1363015.jpg",
      rate: 1,
    },
  ]);

  const [searchRate, setSearchRate] = useState(0);
  const [searchTitle, setSearchTitle] = useState("");

  const ratingChanged = (newRating) => {
    getSearchRate(newRating);
  };
  const getSearchRate = (input) => {
    setSearchRate(input);
  };
  const getSearchTitle = (input) => {
    setSearchTitle(input);
  };
  const getNewMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <BrowserRouter>
    <Switch>
    <div><Route exact path="/" render={() => 
    <div className="App">
      <Filter getSearchTitle={getSearchTitle} />
    <div id="filter">
      <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      activeColor="#ffd700"
      />
    </div>
    <AddMovie getNewMovie={getNewMovie} />
    <MovieList
      movies={movies}
      searchRate={searchRate}
      searchTitle={searchTitle}
    />
    </div>
    }/>
    <Route path="/Details/:id" component={Details}/>
    </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App