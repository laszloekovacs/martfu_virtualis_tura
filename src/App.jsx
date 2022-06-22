import React, {useState} from 'react';
import View from './View';

/* note: strict mode will render twice! */
function App() {
	const [showInfo, setShowInfo] = useState(false);

	function sceneChangeHandler(scene) {
		console.log('changing scene to: ' + scene);
	}

	function infoClickHandler(e, info) {
		console.log(info);
	}

	return (
		<>
			<View
				onSceneChange={sceneChangeHandler}
				onInfoClick={infoClickHandler}
			></View>
		</>
	);
}
export default App;
