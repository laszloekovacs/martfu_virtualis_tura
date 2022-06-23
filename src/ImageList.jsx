import React, {useEffect} from 'react';
import Image from './Image';

function ImageList({title}) {
	function zoomHandler(e) {
		console.log('zoomin in / out');
	}

	/* find artcile loop trough images */
	const article = window.pano.data.articles.find((a) => a.title == title);
	if (!article) return;

	const images = article.images.map((v, k) => (
		<li key={k}>
			<Image index={k} src={v} />
		</li>
	));

	return (
		<div onClick={zoomHandler}>
			<ul>{images}</ul>
		</div>
	);
}

export default ImageList;
