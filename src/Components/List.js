import React, { Component } from 'react'
import movies from '../data/movies.json'
import ListItem from './ListItem'
import Form from './Form'

class List extends Component {
  constructor() {
    super()

    this.state = {
      movies: movies
    }

    this.addMovie = this.addMovie.bind(this)
  }

  addMovie(movie) {
    this.setState({
      movies: [...this.state.movies, movie]
    })
  }

  render() {
    const moviesMap = this.state.movies.map(movie => {
      return <ListItem key={ movie.id } movie={ movie } />
    })
    
    return <div className='List'>
      <Form add={ this.addMovie } />
      { moviesMap }
      </div>
  }
}
export default List