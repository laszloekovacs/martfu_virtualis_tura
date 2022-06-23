import React, {useState, useEffect} from 'react';
import Article from './Article';
import ImageList from './ImageList';

function InfoContainer({article, onCloseInfo}) {
	/* TODO: if we only have one image, render the image viewer only*/

	return (
		<>
			<button onClick={onCloseInfo}>bezár</button>
			<ImageList title={article}></ImageList>
			<Article title={article}></Article>
		</>
	);
}

export default InfoContainer;
