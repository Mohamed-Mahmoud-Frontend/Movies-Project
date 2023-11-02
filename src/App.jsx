import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import axios from "axios";
import "./App.css";
import Card from "./components/card/Card";

const App = () => {
  const [movies, setMovies] = useState([]);
  const alldata = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/person/popular?api_key=2b016c664b1d05234808596975ee10be&language=en-US"
    );
    setMovies(res.data.results);
  };
  useEffect(() => {
    alldata();
    console.log(movies);
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Routes>
        <Route />
      </Routes>
    </Router>
  );
};

export default App;
