import React, { useState, createContext, useCallback, useContext } from 'react';
// import { Provider } from "react-redux";
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './context/ProductContext'
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		console.log(item)
		setCart({...cart, [item]: item})
	};



	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
