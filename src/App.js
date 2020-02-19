import React from 'react';
import ArticleProvider from './context/articleContext';
import Articles from './containers/Articles';
import AddArticle from './components/AddArticle';

import './App.css';

function App() {
	return (
		<ArticleProvider>
			<AddArticle />
			<Articles />
		</ArticleProvider>
	);
}

export default App;
