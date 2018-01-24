# React Example :  Visualización de videos de youtube

Este ejemplo utiliza React puro sin manejador de state (como redux o apollo2). Esta basado en un curso de Udemy. En cada archivo hay notas que referencian al video original del autor.

Primero generamos un componente App que engloba a toda la app, sera nuestro componente root.
Funciona como un wrapper de los componentes "funcionales" (Por funcional, me refiero a los que estan haciendo el laburo):
* App
    * SearchBar
    * VideoDetail
    * VideoList
        * VideoListItem
        * VideoListItem
        * VideoListItem
        * ...

Chequear bien las props para ver como interactuan unos con otros. 

## Nota: CSS
Los estilos de la página están cargados en el HTML principal. Esto no escala pensando en componentes reutilizables pero sirve para una página pequeña.

## ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```

#NEXT!
Video 33
