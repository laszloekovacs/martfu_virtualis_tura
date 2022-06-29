import React, {useState} from 'react';

const imagebasepath = 'assets/images/';

function Image({index, src, label}) {
	return (
		<>
			<img src={imagebasepath + src} alt={label} />
		</>
	);
}

export default Image;
