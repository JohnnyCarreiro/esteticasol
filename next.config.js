
const withImages = require('next-images')
// const withVideos = require('next-videos')
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif", "svg", "ico", "mp4"],
  esModule:true,
  webpack(config, options) {
    return config
  }
})