import path from 'path'

const rootDir = path.join(__dirname, '..')

export default {
  // dir
  _root: rootDir,
  screenshotDir: path.join(rootDir, '../../data/screenshot'),
  imgDir: path.join(rootDir, '../../assets/img'),
  // env
  devMode: process.env.PORT !== 'production',
  port: process.env.PORT,
  mongodb: process.env.MONGODB,
  assetEndpoint: process.env.ASSET_ENDPOINT,
  optimizerEndpoint: process.env.OPTIMIZER_ENDPOINT,
  optimizerTimeout: process.env.OPTIMIZER_TIMEOUT,
  // google page speed
  googlePageSpeedApiKey: process.env.GOOGLE_PAGE_SPEED_API_KEY,
  googlePageSpeedUrl: process.env.GOOGLE_PAGE_SPEED_URL
}
