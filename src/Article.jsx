import React, {useEffect, useRef} from 'react';

const articlebasepath = 'assets/articles/';

function Article({title}) {
	const divRef = useRef();

	/* the source will be: basepath + title + html */
	if (!title) {
		console.error('article not found!');
		return;
	}

	const source = articlebasepath + title.trim().toLowerCase() + '.html';

	fetch(source)
		.then((req) => req.text())
		.then((fragment) => {
			divRef.current.innerHTML = fragment;
		})

		.catch((e) => {
			console.error('failed to load fragment:' + e);
			return;
		});

	return <div id="article" ref={divRef}></div>;
}

export default Article;
