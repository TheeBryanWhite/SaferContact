const linkResolver = ({ node, key, value }) => doc => {
	if (doc.uid === 'home') {
		return '/'
	}

	if (doc.type === 'page' && doc.uid !== 'home') {
		return `/${doc.uid}`
	}
}

module.exports = linkResolver