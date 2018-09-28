module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/snowflake' : '',
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  }
}
