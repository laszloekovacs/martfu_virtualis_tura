import React from 'react';

const imagebasepath = 'assets/images/';

function Image({index, src}) {
	return (
		<>
			<img src={imagebasepath + src} alt={src} />
		</>
	);
}

export default Image;
