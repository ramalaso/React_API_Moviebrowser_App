import { Link } from 'react-router-dom';
import Hero from './Hero';

//TMB API key = e374be8d0644bacc8a42b54aef16cfac

const MovieCard = ({ movie }) => {
	const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
	const detailUrl = `/movies/${movie.id}`;
	return (
		<div className='col-lg-3 col-md-4 col-2 my-4'>
			<div className='card'>
				<img className='card-img-top' src={posterUrl} alt={movie.title} />
				<div className='card-body'>
					<h5 className='card-title'>{movie.title}</h5>
					<Link to={detailUrl} className='btn btn-primary'>
						Show Details
					</Link>
				</div>
			</div>
		</div>
	);
};

function Search({ keyword, searchResults }) {
	console.log(searchResults.length);
	const objHTML = searchResults.map((obj, index) => {
		return <MovieCard movie={obj} key={index} />;
	});

	const title = `You are searching for ${keyword}`;
	console.log(searchResults, 'are the search results');
	return (
		<>
			<Hero text={title} />
			{objHTML && (
				<div className='container'>
					<div className='row'>{objHTML}</div>
				</div>
			)}
		</>
	);
}

export default Search;
