import Hero from './Hero';

const AboutView = () => {
	return (
		<>
			<Hero text='About us' />
			<div className='container'>
				<div className='row'>
					<div className='col-lg-8 offset-lg-2 my-5'>
						<p className='lead'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam temporibus, at dolores
							similique voluptates necessitatibus non deserunt incidunt? Labore. Lorem ipsum dolor sit
							amet consectetur adipisicing elit. Dolore distinctio voluptates sed iure quasi excepturi
							minima asperiores explicabo numquam accusantium, commodi, repellendus eius laboriosam
							veritatis saepe quisquam iusto quibusdam doloremque, consequatur temporibus suscipit! Eius
							delectus maiores iusto labore est, illo tempora dolorum. Ea, modi aperiam cumque quasi
							mollitia eius?
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutView;
