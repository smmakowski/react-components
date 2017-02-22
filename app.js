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

var GroceryList = () => (
	<div>
	<h2>sfkjsadkf</h2>
		<GroceryListItem items={['lettuce', 'tommato', 'onions']} />
	</div>
); 



// var Cucumber = () => (
// 	<li>Cucumber</li>
// );

// var Kale = () => (
// 	<li>Kale</li>
// );



ReactDOM.render(<GroceryList />, document.getElementById('app'));
