import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const YOUTUBE_API_KEY = 'AIzaSyBU_epRqlPZUEJoMf33CRaeoJBP0p1js4A';

/*
  Segun React, el most parent component es el responsable de traer datos externos, API, Redux, etc.
  En nuestro caso, es App.
*/

//Functional component. Creamos un componente que va a producir HTML
/*const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};*/

//Class based component. Lo usamos como alternativa al funcional. Diferencias?
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    //Busqueda de prueba usando YTSearch
    YTSearch({ key:YOUTUBE_API_KEY, term:'PES 2018' }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) } 
          videos={ this.state.videos }
        />
      </div>
    );
  }
}

//Tomar el HTML generado por el componente y mostrarlo en la pagina (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
