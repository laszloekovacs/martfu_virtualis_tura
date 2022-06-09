import React, {useEffect} from 'react';

function Panorama({url}) {
	useEffect(() => {
		(async function init() {
			try {
				const req = await fetch(url);
				const data = await req.json();

				window.pannellum.view = window.pannellum.viewer(
					'panorama',
					data
				);

				return () => {
					window.pannellum.view.destroy();
				};
			} catch (e) {
				console.error('failed to load panorama: ' + e);
			}
		})();
	}, []);

	return <div id="panorama">ht</div>;
}

export default Panorama;
