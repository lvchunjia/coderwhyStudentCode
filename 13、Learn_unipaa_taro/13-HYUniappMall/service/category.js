import hyRequest from './index.js'

export function getCategory() {
	return hyRequest.get("/category")
}

export function getSubcategory(maitKey) {
	return hyRequest.get(`/subcategory?maitKey=${maitKey}`)
}

export function getCategoryDetail(type, miniWallkey) {
	return hyRequest.get(`/subcategory/detail?miniWallkey=${miniWallkey}&type=${type}`)
}