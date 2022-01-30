import Hero from './Hero';

const Home = () => {
	return (
		<>
			<Hero text='Welcome to React 201' />
			<div className='container'>
				<div className='row'>
					<div className='col-lg-8 offset-lg-2 my-5'>
						<p className='lead'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam temporibus, at dolores
							similique voluptates necessitatibus non deserunt incidunt? Labore.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
