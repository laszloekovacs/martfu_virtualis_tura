import React, {useEffect} from 'react';

function View({onSceneChange, onInfoClick}) {
	useEffect(() => {
		/* bind handler to info bubbles before loading */

		const data = window.pano.data;

		for (const scene in data.scenes) {
			if (Array.isArray(data.scenes[scene]?.hotSpots)) {
				for (const p of data.scenes[scene]?.hotSpots) {
					if (p.type == 'info') {
						p.clickHandlerFunc = onInfoClick;
						p.clickHandlerArgs = {...p};
					}
				}
			}
		}

		window.pano.view = window.pannellum.viewer('view', window.pano.data);

		window.pano.view.on('scenechange', onSceneChange);

		return () => {
			window.pano.view.destroy();
		};
	}, []);

	return <div id="view"></div>;
}

export default View;
