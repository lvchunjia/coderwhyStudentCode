const EventEmitter = require('events')

const ee = new EventEmitter()

// ee.on("why", () => {
//   console.log("on监听why")
// })

// 1.once: 事件监听只监听一次(第一次发射事件的时候进行监听)
ee.once("why", () => {
  console.log("on监听why")
})

// 2.prependListener: 将事件监听添加到最前面
ee.prependListener('why', () => {
  console.log('on监听why2')
})

ee.emit('why')


// 3.移除所有的事件监听
// 不传递参数的情况下, 移除所有事件名称的所有事件监听
// 在传递参数的情况下, 只会移除传递的事件名称的事件监听
ee.removeAllListeners('why')

