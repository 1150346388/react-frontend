import React from 'react';

import axios from 'axios';

export default class Plist extends React.Component {

	constructor(props) {
		super(props);
		this.state = {'loading': false, 'list': []};
	}

	componentDidMount() {
	    this.setState({'firstView': true});  
	}

	componentWillReceiveProps(nextProps) {
	    let keyword = nextProps.keyword;

	    this.setState({'loading': true, 'firstView': false});
	    let url = `https://api.github.com/search/users?q=${keyword}`;

	    axios.get(url).then((data) => {
	    	this.setState({'loading': false, 'list': data.data.items});
	    }).catch((error) => {
	    	console.error(error);
	    });  
	}

	render() {
		const imgStyle = {
			width: '50px'
		}
		if(this.state.firstView) {
			return (
				<h2>Enter name to search</h2>
			)
		}
		if(this.state.loading) {
			return (
				<h2>loading result...</h2>
			)
		} else {
			if(this.state.list.length === 0) {
				return (
					<h2>No result.</h2>
				)
			} else {
				return (
					<div className="row">
						{
							this.state.list.map((people, i) => {
								let key = 'item' + i;
								return (
									<div key={key} className="card">
										<img src={people.avatar_url} style={imgStyle}/>
										<p className="card-text">
											{people.login}
										</p>
									</div>
								)
							})
						}
					</div>
				)
			}
		}
	}
}