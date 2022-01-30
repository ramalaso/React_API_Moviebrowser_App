import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AboutView from './components/AboutView';
import Home from './components/Home';
import MovieView from './components/MovieView';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		if (searchText) {
			const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=e374be8d0644bacc8a42b54aef16cfac&page=1&query=${searchText}`;
			fetch(SEARCH_URL)
				.then((response) => response.json())
				.then((data) => setSearchResults(data.results));
		}
	}, [searchText]);

	return (
		<>
			<Navbar searchText={searchText} setSearchText={setSearchText} />
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='about' element={<AboutView />} />
				<Route path='movies/:id' element={<MovieView />} />
				<Route path='search' element={<Search keyword={searchText} searchResults={searchResults} />} />
			</Routes>
		</>
	);
}

export default App;
