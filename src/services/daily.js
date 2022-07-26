const Basics = require('../loaders/Basics')
const config = require('../config/index')
const { url, secretkey } = config.api.amap
/**
 * 日常服务类
 * - 天气查询 ⭕
 * - 快递查询 ❌
 * - 地图导航 ❌
 * 。。。。。
 */
class Daily extends Basics {

  async Weather(query) {
    const { address, extensions = 'all' } = query
    try {
      const geoResult = await this.Geo(address)
      const { adcode } = geoResult[0]
      const weatherInfo = await this.http(`${url}/weather/weatherInfo?key=${secretkey}&city=${encodeURI(adcode)}&extensions=${encodeURI(extensions)}`)
      if (weatherInfo.status === '1') {
        return weatherInfo.forecasts
      } else {
        throw new Error(`geocode/geo throw "${weatherInfo.info}"`)
      }
    } catch (error) {
      throw error
    }
  }

  /**
   * 地址名称解析
   * @param {String} address 
   * @returns Object
   */
  async Geo(address) {
    try {
      const { status, geocodes, info } = await this.http(`${url}/geocode/geo?key=${secretkey}&address=${encodeURI(address)}`)
      if (status === '1') {
        return geocodes
      } else {
        throw new Error(`geocode/geo throw "${info}"`)
      }
    } catch (error) {
      throw error
    }
  }
}

module.exports = Daily