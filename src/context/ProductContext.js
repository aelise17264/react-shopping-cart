import React, {createContext, useState} from 'react';
import data from '../data';


export default function ProductContext(){
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		console.log(item)
		setCart({...cart, [item]: item})
	};


}