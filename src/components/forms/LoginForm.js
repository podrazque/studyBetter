import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from "../messages/InlineError";

class LoginForm extends React.Component {
	state = {
		data: {
			phoneNumber: '',
			password: ''
		},
		loading: false,
		errors: {}
	};

	onChange = e => this.setState({
		data: {...this.state.data, [e.target.name]: e.target.value }
	});

	onSubmit = () => {
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		if (Object.keys(errors).length === 0)
		{
			this.props.submit(this.state.data);
		}
	};

	validate = (data) => {
		const errors = {};
		if (!Validator.isMobilePhone(data.phoneNumber, "en-US")) errors.phoneNumber = "Invalid phone number";
		if (!data.password) errors.password = "You need to input a password";
		return errors;
	};

	render() {
		const { data, errors } = this.state;

		return(
			<Form onSubmit={this.onSubmit}>
				<Form.Field error={!!errors.phoneNumber}>
					<label htmlFor='phoneNumber'>Phone Number</label>
					<input 
						type='phoneNumber' 
						id='phoneNumber' 
						name='phoneNumber' 
						placeholder='1234567890' 
						value = {data.email} 
						onChange={this.onChange}
					/>
					{errors.phoneNumber && <InlineError text={errors.phoneNumber} />}
				</Form.Field>
				<Form.Field error={!!errors.password}>
					<label htmlFor='password'>Password</label>
					<input 
						type='password' 
						id='password' 
						name='password' 
						placeholder='Make it something secure' 
						value = {data.email} 
						onChange={this.onChange}
					/>
					{errors.password && <InlineError text={errors.password} />}
				</Form.Field>
				<Button primary>Login</Button>
			</Form>
		);
	}
}

LoginForm.propTypes = {
	submit: PropTypes.func.isRequired
};

export default LoginForm;