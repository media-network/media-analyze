import { auditStructData } from './lighthouse-struct-data'

 const formatDataLighthouse = (originalLighthouseData) => {
  let auditsData = Object.keys(originalLighthouseData.audits).map((element) => {
    if (auditStructData.indexOf(element) !== -1) {
        let key = element.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
        let value = originalLighthouseData.audits[element]

        return { [ key ]: value }
    }

    return
  })
  .filter(Boolean)
  .reduce( (ac, p) => {
    let key = Object.keys(p)[0]
    let value = Object.values(p)[0]
    return {...ac,  [ key ]: value }
  }, {} )

  let {
    userAgent,
    fetchTime,
    requestedUrl,
    finalUrl,
    categories
  } = originalLighthouseData

  return {
    userAgent,
    fetchTime,
    requestedUrl,
    finalUrl,
    categories,
    audits: auditsData
  }
}

export default formatDataLighthouse