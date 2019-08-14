import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "부산행",
    poster: "https://t1.daumcdn.net/movie/fe9da43b455db93228b5bfa74dacc78107f1eb40"
  },
  {
    title: "Get Out",
    poster: "https://t1.daumcdn.net/movie/d3720c60629495fd5ef599c46b00636868da267e"
  },
  {
    title: "기생충",
    poster: "https://t1.daumcdn.net/cfile/tistory/990B04375CF5BB553A"
  },
  {
    title: "엑시트",
    poster: "http://image.chosun.com/sitedata/image/201908/05/2019080501005_0.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie key={index} title={movie.title} poster={movie.poster}/>
        })}
      </div>
    );
  }
}

export default App;
