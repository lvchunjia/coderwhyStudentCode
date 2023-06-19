import hyRequest from './index.js'

export function getHomeMultidata() {
	return hyRequest.get("/home/multidata")
}

export function getHomeData(type, page) {
	return hyRequest.get("/home/data", {
		type,
		page
	})
}
