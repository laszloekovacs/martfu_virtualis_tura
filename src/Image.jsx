import React, {useState} from 'react';

const imagebasepath = 'assets/images/';

function Image({index, src, label, onClick}) {
	return (
		<>
			<img src={imagebasepath + src} alt={label} onClick={onClick} />
		</>
	);
}

export default Image;
