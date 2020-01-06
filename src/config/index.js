
const env = process.env.REACT_APP_ENV || 'develop'
const config = require(`./${env}`)
  
export default config.default
  