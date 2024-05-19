import React from 'react';
import Row from "./components/Row"
import request from "./request.js"
import Banner from './components/Banner.jsx';
import NavBar from './components/NavBar.jsx';
function App() {
  return (
    <div>
    <NavBar/>
    <Banner/>
    <Row title="NetFlix Originals" url={request.fetchNetflixOriginals} isOriginal/>
    <Row title="TRENDING" url={request.fetchTrending}/>
    <Row title="TOP RATED MOVIES" url={request.fetchTopRated}/>
    <Row title="ACTION MOVIES" url={request.fetchActionMovies}/>
    <Row title="COMEDY MOVIES" url={request.fetchComedyMovies}/>
    <Row title="DOCUMENTARY MOVIES" url={request.fetchDocumentaries}/>
    <Row title="HORROR MOVIES" url={request.fetchHorrorMovies}/>
    <Row title="ROMANCE MOVIES" url={request.fetchRomanceMovies}/>
    </div>
  )
}

export default App
