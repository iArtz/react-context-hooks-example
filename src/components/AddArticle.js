import React, { useState, useContext } from 'react';
import { ArticleContext } from '../context/articleContext';

import './AddArticle.css';

const AddArticle = () => {
	const { dispatch } = useContext(ArticleContext);
	const [article, setArticle] = useState();

	const handleArticleDate = e => {
		setArticle({
			...article,
			[e.target.id]: e.target.value
		});
	};
	const addNewArticle = e => {
		e.preventDefault();
		dispatch({ type: 'ADD_ARTICLE', article });
		console.log('State: ',article);
		console.log();
	};

	return (
		<form onSubmit={addNewArticle} className='add-article'>
			<input
				type='text'
				id='title'
				placeholder='Title'
				onChange={handleArticleDate}
			/>
			<input
				type='text'
				id='body'
				placeholder='Body'
				onChange={handleArticleDate}
			/>
			<button>
            Add Article
			</button>
		</form>
	);
};

export default AddArticle;
