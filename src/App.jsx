import React, {useEffect, useState} from 'react';
import InfoContainer from './InfoContainer';

function App({url}) {
	const [showDialog, setShowDialog] = useState(false);

	function infoClickHandler(e, args) {
		/* keep a reference of the article */
		window.pannellum.article = args.text;
		setShowDialog(true);
	}

	function onSceneChangeHandler(e) {
		console.log(e);
		/* hide viewer on scene change */
		setShowDialog(false);
	}

	useEffect(() => {
		(async function init() {
			try {
				/* load and crete panorama, keep a ref to the data */
				const req = await fetch(url);
				const data = await req.json();
				data.default.hotSpotDebug = false;
				data.default.showControls = false;

				/* bind all info bubbles to a callback function before loading */
				for (const scene in data.scenes) {
					if (Array.isArray(data.scenes[scene]?.hotSpots))
						for (const p of data.scenes[scene]?.hotSpots) {
							if (p.type == 'info') {
								p.clickHandlerFunc = infoClickHandler;
								p.clickHandlerArgs = {...p};
							}
						}
				}

				/* create the view */
				window.pannellum.view = window.pannellum.viewer(
					'panorama',
					data
				);

				/* bind event for scenechange */
				window.pannellum.view.on('scenechange', onSceneChangeHandler);

				return () => {
					window.pannellum.view.destroy();
				};
			} catch (e) {
				console.error('failed to load panorama: ' + e);
			}
		})();
	}, [url]);

	return (
		<>
			<div id="panorama"></div>
			<InfoContainer visible={showDialog}></InfoContainer>
		</>
	);
}

export default App;
