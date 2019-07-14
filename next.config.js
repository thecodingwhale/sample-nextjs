const path = require('path')

module.exports = {
  webpack (config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'src/components')
    return config
  }
}