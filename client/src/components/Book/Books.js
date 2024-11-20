import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from './Book';


const Books = () => {
	const [books, setBooks] = useState();
	useEffect(() => {
		axios.get('http://localhost:5000/books').then(
			res => setBooks(res.data.books))
	}, []);
	console.log(books);
	return (
		<div>
			<ul>
				{
					books &&
					books.map((book, index) =>
						<li key={index}>
							<Book book={book} />
						</li>
					)
				}
			</ul>
		</div>
	)
}

export default Books
