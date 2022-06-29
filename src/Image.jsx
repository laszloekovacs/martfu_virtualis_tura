import React, {useState} from 'react';
import ImageView from './ImageView';

const imagebasepath = 'assets/images/';

function Image({index, src, label}) {
	const [isZoomed, setZoomed] = useState(false);

	function zoomHandler(e) {
		setZoomed(!isZoomed);
		console.log('klikk');
	}

	if (!isZoomed) {
		return (
			<img src={imagebasepath + src} alt={label} onClick={zoomHandler} />
		);
	} else {
		return (
			<ImageView
				src={imagebasepath + src}
				label={label}
				onZoom={zoomHandler}
			/>
		);
	}
}

export default Image;
