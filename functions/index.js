const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.host = functions.https.onRequest((req, res) => {
	const userAgent = req.headers['user-agent'].toLowerCase();
	let indexHTML = fs.readFileSync('./hosting/index.html').toString();
	const path = req.path ? req.path.split('/') : req.path;
	const ogPlaceholder = '<meta name="functions-insert-dynamic-og">';
	const metaPlaceholder = '<meta name="functions-insert-dynamic-meta">';

	const isBot = userAgent.includes('googlebot') ||
		userAgent.includes('yahoou') ||
		userAgent.includes('bingbot') ||
		userAgent.includes('baiduspider') ||
		userAgent.includes('yandex') ||
		userAgent.includes('yeti') ||
		userAgent.includes('yodaobot') ||
		userAgent.includes('gigabot') ||
		userAgent.includes('ia_archiver') ||
		userAgent.includes('facebookexternalhit') ||
		userAgent.includes('twitterbot') ||
		userAgent.includes('developers\.google\.com') ? true : false;

	if (isBot && (path && path.length > 1 && path[1] === 'organisation')) {
		const slug = path[2];
		admin.database().ref(`posts/${slug}`).once('value').then(snapshot => {
			const org = snapshot.val();
			if (org) {
				org.slug = slug;
			}
			indexHTML = indexHTML.replace(metaPlaceholder, getMeta(org));
			indexHTML = indexHTML.replace(ogPlaceholder, getOpenGraph(org));
			res.status(200).send(indexHTML);
		});
		return;
	}

	// optional - turn on caching: res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
	indexHTML = indexHTML.replace(metaPlaceholder, getMeta());
	indexHTML = indexHTML.replace(ogPlaceholder, getOpenGraph());
	res.status(200).send(indexHTML);
});


const defaultDesc = 'The mobsters, bootleggers and gangsters of the 1920s and 30s, such as Al Capone, Lucky Luciano, and Bugs Moran.';
const defaultTitle = 'Original Gangsters';
const defaultLogo = 'https://example.com/images/headerHQ.jpg';

const getOpenGraph = (org) => {
	let og = `<meta property="fb:app_id" content="921373517372" />`;
	og += `<meta property="og:type" content="website" />`;

	if (!org) {
		og += `<meta property="og:title" content="${defaultTitle}" />`;
		og += `<meta property="og:description" content="${defaultDesc}" />`;
		og += `<meta property="og:image" content="${defaultLogo}" />`;
		og += `<meta property="og:url" content="https://example.com" />`;
		return og;
	}
	og += `<meta property="og:title" content="${org.name}" />`;
	og += `<meta property="og:description" content="${org.desc || defDesc}" />`;
	og += `<meta property="og:image" content="${org.logo_url || defLogo}" />`;
	og += `<meta property="og:url" content="https://example.com/organisation/${org.slug}" />`;
	return og;
};

const getMeta = (org) => {
	// return other meta tags
};