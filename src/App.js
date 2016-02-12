import React from 'react';
import ContactsList from './ContactsList';

let contacts = [
	{
		id: 1,
		name: 'Scott',
		phone: '783-333-555'
	},
	{
		id: 2,
		name: 'Courtney',
		phone: '115-333-215'
	},
	{
		id: 3,
		name: 'Celso',
		phone: '434-432-2434'
	},
	{
		id: 4,
		name: 'Billy',
		phone: '602-432-2434'
	}
]

class App extends React.Component {
	render() {

		return (
			<div>
				<h1>Contacts List</h1>
				<ContactsList contacts={this.props.contacts}/>
			</div>
		)
	}
}

React.render(<App contacts={contacts} />, document.getElementById('app'));
