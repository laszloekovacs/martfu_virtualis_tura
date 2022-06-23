import React, {useRef} from 'react';

const articlebasepath = 'assets/Articles/';

function Article({title}) {
	const divRef = useRef();

	/* the source will be: basepath + title + html */
	if (!title) {
		console.error('article not found!');
		return;
	}

	const source = articlebasepath + title + '.html';

	return (
		<iframe
			id="article"
			title={source}
			src={source}
			frameBorder="0"
		></iframe>
	);
}

export default Article;
