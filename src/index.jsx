import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

/* config */
const url = './assets/iroda.json';
const selector = 'app';

/* */
(async function startup() {
	try {
		const req = await fetch(url);
		const data = await req.json();

		/* TODO: Override editor settings */
		data.default.hotSpotDebug = false;

		/* keep a copy of the data */
		window.pano = {};
		window.pano.data = data;

		console.log(window.pano.data);
		const root = ReactDOM.createRoot(document.getElementById(selector));
		root.render(<App></App>);
	} catch (e) {
		console.error('failed to init: ');
		console.error(e);
	}
})();
