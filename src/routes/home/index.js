import { h } from 'preact';

const Home = () => {
	return (
		<div className="main p-5 mt-20">
			<a href="https://preactjs.com">
				<img src="../../assets/preact-logo.svg" alt="Preact Logo" height="160" width="160" />
			</a>
			<h1>Get Started Building PWAs with Preact-CLI</h1>
			<section className='text-black'>
				<Resource
					title="Learn Preact"
					description="If you're new to Preact, try the interactive tutorial to learn important concepts"
					link="https://preactjs.com/tutorial/"
				/>
				<Resource
					title="Differences to React"
					description="If you're coming from React, check out our docs for where Preact differs"
					link="https://preactjs.com/guide/v10/differences-to-react"
				/>
				<Resource
					title="Learn Preact-CLI"
					description="To learn more about Preact-CLI, read through the ReadMe & Wiki"
					link="https://github.com/preactjs/preact-cli#preact-cli--"
				/>
			</section>
		</div>
	);
};

const Resource = props => {
	return (
		<a href={props.link}>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
};

export default Home;
