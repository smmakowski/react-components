/// Class based component
// funcitonia
class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			done: false
		};
	}

	onListItemClick() {
		this.setState({
			done: !this.state.done
		});
	}

	render() {
		var style = {
			'font-weight': this.state.done ? 'bold' : 'normal'
		};

		return (
				<li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.items}</li>	
		);
	} 
}


///// this works
/*
var GroceryListItem = (props) => {
	var onListItemClick = (event) => {
		console.log('I got clicked');
	};

	return (
	<ul>
		<li onClick={onListItemClick}>{props.items[0]}</li>
		<li>{props.items[1]}</li>
		<li>{props.items[2]}</li>
	</ul>
	);
}
*/

var item = ['Bacon', 'Whiskey', 'Cabbage']

var GroceryList = () => (
	<div>
	<h2>Grocery List</h2>
		<GroceryListItem items={item[1]} />
		<GroceryListItem items={item[0]} />
		<GroceryListItem items={item[2]} />
	</div>
); 


ReactDOM.render(<GroceryList />, document.getElementById('app'));

