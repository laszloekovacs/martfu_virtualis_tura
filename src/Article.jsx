import React from 'react';

const articlebasepath = 'assets/Articles/';

function Article({title}) {
	/* the source will be: basepath + title + html */
	if (!title) {
		console.error('article not found!');
		return;
	}

	const source = articlebasepath + title + '.html';

	return (
		<>
			<iframe src={source} frameBorder="0"></iframe>
		</>
	);
}

export default Article;
