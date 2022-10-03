import React, {Component} from 'react'

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError : false
		}
	}
	componentDidCatch(error, info) {
		this.setState({hasError : true})
	}

	render () {
		const {hasError} = this.state.hasError;
		if (hasError) {
			return <h1> The website is not good now, please refresh later </h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary;