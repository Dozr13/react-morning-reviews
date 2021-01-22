import React, { Component } from 'react'


export default class Form extends Component {
  constructor() {
    super()

    this.state= {
      title: '',
      posterImg: '',
      year: ''
    }
  }
//! Important, structuring changeHandler for input universally
//! name property on input MUST match exactly the state prop you want to change

//! Without the name property on the input, this universal change handler WILL NOT WORK
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addMovie(e) {
    e.preventDefault() 
    this.props.add(this.state)
  }


                                    //! need name for the universal handler to work!
  render() {
    return (
      <form className='Form'>
                            
        <input onChange={ e => this.handleChange(e)} name='title' placeholder='Title' />
        <input onChange={ e => this.handleChange(e)} name='year' placeholder='Year' />
        <input onChange={ e => this.handleChange(e)} name='posterImg' placeholder='Poster url' />
        <button type='submit' onClick={ e => this.addMovie(e)}>Add Movie</button>

      </form>
    )
  }
}