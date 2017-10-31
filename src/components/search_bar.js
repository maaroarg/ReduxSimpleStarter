/*
Clase 16,17: state.
Clase 18: review de la seccion
Cada componente puede manejar su propio state
*/
import React, { Component } from 'react';

//Creamos un class-based component
class SearchBar extends Component {
  //Solo podemos usar state en class-based components
  constructor(props){
    super(props);
    this.state = { term: ''} //Solo en el constructor podemos modificar el state de esta forma
  }

  //El metodo render se llama cada vez que el componente se redibuja, esto sucede cada vez que cambia el state
  render() { //Si extendemos de React.Component tenemos que definir render()
    return (
      <div className="search-bar">
        <input
          value = { this.state.term }
          onChange = { event => this.onInputChange(event.target.value) }
        />
      </div>
    );
  }

  onInputChange(term){
    /*
    El state que modifico de esta forma es el que usa este componente "search_bar"
    Para modificar el state del componente padre, mando la data via callback
    */
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
