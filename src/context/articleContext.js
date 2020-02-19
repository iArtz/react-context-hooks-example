import React, { createContext, useReducer } from 'react';
import { reducer } from '../reducer';

const ArticleContext = createContext();

// eslint-disable-next-line react/prop-types
const ArticleProvider = ({ children }) => {
	const [articles, dispatch] = useReducer(reducer, [
		{ id: 1, title: 'Post 1', body: 'Quisque cursus, metus vitae pharetra' },
		{ id: 2, title: 'Post 2', body: 'Quisque cursus, metus vitae pharetra' }
	]);

	return (
		<ArticleContext.Provider value={{ articles, dispatch }}>
			{children}
		</ArticleContext.Provider>
	);
};

export { ArticleContext };
export default ArticleProvider;
