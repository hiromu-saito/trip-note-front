import Auth from './auth'
import Memory from './memory'

const HOTEL_SEARCH_URL = `https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?applicationId=${process.env.VUE_APP_SECRET}&format=json&keyword=%keyword&hits=6&page=%page`
export {
  Auth,
  Memory,
  HOTEL_SEARCH_URL
}