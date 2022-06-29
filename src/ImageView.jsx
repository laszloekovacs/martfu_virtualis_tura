import React from 'react';

function ImageView({src, label, onZoom}) {
	return (
		<div className="ImageView" onClick={onZoom}>
			<div>
				<img src={src} alt={label} />
				<p>{label}</p>
			</div>
		</div>
	);
}

export default ImageView;
