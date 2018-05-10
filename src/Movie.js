import React from 'react';
import propTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component {

//   static propTypes = {
//     title: propTypes.string.isRequired,
//     poster: propTypes.string.isRequired
//   }

//   render() {
//     return(
//       <div>
//         <MoviePoster poster={this.props.poster} />
//         <h1>{this.props.title}</h1>
//       </div>
//     )
//   }
// }

// class MoviePoster extends Component{

//   static propTypes = {
//     poster: propTypes.string.isRequired
//   }

//   render(){
//     return(
//       <img src={this.props.poster} alt="" />
//     )
//   }
// }

function Movie({title, poster, genres, synopsis}){
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Genres">
        {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <p className="Movie__Synopsis">
          {synopsis}
        </p>
      </div>
    </div>
  )
}

function MoviePoster({poster, alt}){
  return (
    <img src={poster} alt={alt} className="Movie__Poster" />
  )
}

function MovieGenre({genre}){
  return (
    <span className="Movie__Genre">{genre} </span>
  )
}

MoviePoster.propTypes = {
  title: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.string.isRequired,
  synopsis: propTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster: propTypes.string,
  alt: propTypes.string
}

MovieGenre.propTypes = {
  genre: propTypes.string
}

export default Movie;
