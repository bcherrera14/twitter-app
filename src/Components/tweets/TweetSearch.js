import React from 'react';
import { Form, Col, Card, Button } from 'react-bootstrap';

import TweetCard from './TweetCard';
import tweetData from '../../tweetData';

class TweetSearch extends React.Component {
	constructor() {
		super();
		this.state = { tweetData: [] };
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	componentDidMount() {
		this.setState({ tweetData });
	}

	onFormSubmit(e) {
		e.preventDefault();
		const searchTerm = e.target.searchTerm.value;
		const response = this.state.tweetData.filter(
			(tweet) => tweet.firstName.toLowerCase() === searchTerm.toLowerCase()
		);
		this.setState({
			tweetData: response
		});
		console.log(searchTerm);
		// console.log(response);
	}

	render() {
		console.log(this.state.tweetData);
		return (
			<div className="d-flex justify-content-center flex-column align-items-center">
				<Form onSubmit={this.onFormSubmit}>
					<Form.Row className="align-items-center">
						<Col className="my-1">
							<Form.Label htmlFor="inlineFormInputName" srOnly>
								Search
							</Form.Label>
							<div className="search">
								<Form.Control
									id="search-input"
									name="searchTerm"
									placeholder="Search for username or keyword"
								/>
								<span>
									<i className="fas fa-search" />
								</span>
							</div>
						</Col>
						<Col xs="auto" className="my-1">
							<Button type="submit">Search</Button>
						</Col>
					</Form.Row>
				</Form>
				<div className="card-grid d-flex flex-column">
					<TweetCard />
					<TweetCard />
					<TweetCard />
				</div>
			</div>
		);
	}
}

export default TweetSearch;
