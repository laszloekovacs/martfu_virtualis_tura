import React, {classNames} from 'react';
import Image from './Image';

function InfoContainer({visible, closeHandler}) {
	/* set current article */

	if (window.pannellum?.view == undefined) return;

	const title = window.pannellum?.article;

	const scene = window.pannellum?.view?.getConfig();

	/* grab the article we want */
	const article = scene.articles.find((a) => (a.title = title));
	console.log(article);

	if (article == undefined) return;

	/* build image galery */
	const images = article.images.map((p, k) => (
		<li key={k}>
			<Image src={scene.default.imagePath + p} />
		</li>
	));

	//	const viewer =

	if (visible) {
		return (
			<div className="info">
				<div className="btn_container">
					<button className="btn_close" onClick={closeHandler}>
						bezár
					</button>
				</div>

				<ul>{images}</ul>
				<article>
					<h2>{article.title}</h2>
					<div>{article.text}</div>
				</article>
			</div>
		);
	} else {
		return;
	}
}

export default InfoContainer;
