import React, {useState} from 'react';
import View from './View';
import InfoContainer from './infoContainer';

function App() {
	const [showInfo, setShowInfo] = useState(false);
	const [article, setArticle] = useState('');

	function sceneChangeHandler(scene) {
		setShowInfo(false);
	}

	function infoClickHandler(e, info) {
		console.log(info.text);

		/* check if article is actually registered */
		const _article = window.pano.data.articles.find(
			(a) => a.title == info.text
		);

		if (_article == undefined) {
			console.error('article is not registered');
			return;
		}

		setArticle(info.text);
		setShowInfo(!showInfo);
	}

	function closeInfoHandler(e) {
		setShowInfo(false);
	}

	return (
		<>
			<View
				onSceneChange={sceneChangeHandler}
				onInfoClick={infoClickHandler}
			/>
			{showInfo && article && (
				<InfoContainer
					article={article}
					onCloseInfo={closeInfoHandler}
				/>
			)}
		</>
	);
}
export default App;
