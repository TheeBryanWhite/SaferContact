const linkResolver = ({ node, key, value }) => doc => {
	if (doc.type === "page") {
		return `/${doc.uid}`
	}
}

module.exports = linkResolver