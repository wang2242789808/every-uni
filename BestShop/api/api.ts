import { request } from '../utils/request.js'
import * as TS from './define.ts'

const getSwiper = () => {
	return request('/home/swiperdata').then((res: TS.Swiper) => res)
}


export {
	getSwiper
}