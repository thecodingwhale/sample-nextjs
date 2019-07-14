const path = require('path')

module.exports = {
  webpack (config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'src/components')
    config.resolve.alias['assets'] = path.join(__dirname, 'src/assets')
    config.resolve.alias['variables'] = path.join(__dirname, 'src/variables')
    return config
  }
}