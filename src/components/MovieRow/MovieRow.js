import React, { useState, useEffect } from "react";
import Tmdb from "../../Tmdb";
import "./MovieRow.css";
import FeatureMovie from "../FeatureMovie/FeatureMovie";
import GetMovieInfo from "../../GetMovieInfo";

import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";

function MovieRow() {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [scrollX, setScrollX] = useState(-400);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = 20 * 200;

    if((window.innerWidth - listW) > x ){
      x = (window.innerWidth - listW) - 100;
    }

    setScrollX(x);
  };

  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista total de filmes
      let list = await Tmdb();
      setMovieList(list);

      // pegando o featured
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );

      let chosen = originals[0].items.results[randomChosen];
      let choseInfo = await GetMovieInfo(chosen.id, "tv");

      setFeatureData(choseInfo);
    };

    loadAll();
  }, []);




  return (
    <>
      {featureData && <FeatureMovie item={featureData} />}
      <section className="listas">
        {movieList.map((item, key) => (
          <div key={key} className="movieRow">
            <h2>{item.title}</h2>
            <div  className="movieRow-left" onClick={handleLeftArrow}>
              <BsChevronCompactLeft style={{ fontSize: 60 }} />
            </div>
            <div  className="movieRow-right" onClick={handleRightArrow}>
              <BsChevronCompactRight style={{ fontSize: 60 }} />
            </div>
            <div className="movieRow-listarea">
              <div className="movieRow-list" style={{
                  marginLeft: scrollX,
                  width: item.items.results.length * 200,
                }}>
                {item.items.results.length > 0 &&
                  item.items.results.map((item, key) => (
                    <>
                      {item.poster_path != null && (
                        <div key={key} className="movieRow-item">
                          <img
                            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                            alt={item.original_name}
                          />
                        </div>
                      )}
                    </>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default MovieRow;
