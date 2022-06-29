import React, {useState} from 'react';
import Image from './Image';

function ImageList({title}) {
	const [isZoomed, setZoomed] = useState(false);

	function zoomHandler(e) {
		setZoomed(!isZoomed);
	}

	/* find artcile loop trough images */
	const article = window.pano.data.articles.find((a) => a.title == title);
	if (!article) return;

	const images = article.images.map((v, k) => (
		<li key={k}>
			<Image
				index={k}
				src={v.src}
				label={v.label}
				onClick={zoomHandler}
			/>
		</li>
	));

	return (
		<div id="imageList" className={isZoomed ? 'zoomed' : undefined}>
			<ul>{images}</ul>
		</div>
	);
}

export default ImageList;
