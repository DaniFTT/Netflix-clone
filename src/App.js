import "./App.css";
import React, { useEffect, useState } from "react";
import MovieRow from "./components/MovieRow/MovieRow";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer'

function App() {
  const [blackHeader, setBlackHeader] = useState(false);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      <MovieRow />
      <Footer />
    </div>
  );
}

export default App;
