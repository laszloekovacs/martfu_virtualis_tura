import React, {useEffect} from 'react';

function InfoContainer({visible}) {
	useEffect(() => {
		window.PerformanceObserverEntryList;
	}, []);

	if (visible) {
		return (
			<div>
				<div>images go here</div>
				<article>
					<h2></h2>
				</article>
			</div>
		);
	} else {
		return;
	}
}

export default InfoContainer;
