var Stream = require('stream')
console.log(Stream)
// if (process.env.READABLE_STREAM === 'disable' && Stream) {
module.exports = Stream.Readable
Object.assign(module.exports, Stream)
module.exports.Stream = Stream
// } else {
//   exports = module.exports = require('readable-stream/lib/_stream_readable.js')
//   exports.Stream = Stream || exports
//   exports.Readable = exports
//   exports.Writable = require('readable-stream/lib/_stream_writable.js')
//   exports.Duplex = require('readable-stream/lib/_stream_duplex.js')
//   exports.Transform = require('readable-stream/lib/_stream_transform.js')
//   exports.PassThrough = require('readable-stream/lib/_stream_passthrough.js')
//   exports.finished = require('readable-stream/lib/internal/streams/end-of-stream.js')
//   exports.pipeline = require('readable-stream/lib/internal/streams/pipeline.js')
// }
