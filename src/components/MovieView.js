import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Hero from './Hero';

const MovieView = () => {
	const { id } = useParams();
	const [movieDetails, setMovieDetails] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=e374be8d0644bacc8a42b54aef16cfac`;
		fetch(DETAILS_URL)
			.then((response) => response.json())
			.then((data) => {
				setMovieDetails(data);
				setIsLoading(false);
			});
	}, [id]);

	function renderMovieDetails() {
		if (isLoading) {
			return <Hero text='Loading....' />;
		}
		if (movieDetails) {
			const POSTER_PATH = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
			const backdroUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
			console.log(POSTER_PATH);
			return (
				<>
					<Hero text={movieDetails.title} backdropUrl={backdroUrl} />;
					<div className='container my-5'>
						<div className='row'>
							<div className='col-md-3'>
								<img src={POSTER_PATH} alt='' className='img-fluid shadow rounded' />
							</div>
							<div className='col-md-6'>
								<h1 style={{ color: 'red' }}>{movieDetails.title}</h1>
								<p style={{ fontWeight: 'bold', color: '#333' }}>{movieDetails.overview}</p>
							</div>
						</div>
					</div>
				</>
			);
		}
	}

	return renderMovieDetails();
};

export default MovieView;
