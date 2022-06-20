import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('ui'));




function infoClickHandler(e, args) {
    console.log('info clicked')
    /* call on every scene change */
    root.render(<App display={true}></App>);
}


function onSceneChangeHandler(e) {

    console.log('scene changing')
    root.render(<App display={false}></App>);
}


(async function init() {
    try {
        const url = "assets/iroda.json"
        /* load and create panorama*/
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
                        p.clickHandlerArgs = { ...p };
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


    } catch (e) {
        console.error('failed to load panorama: ' + e);
    }
})();