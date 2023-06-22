// const { HYEventBus } = require('hy-event-store')
// const eventBus = new HYEventBus()
// eventBus.on('why', () => {})

// events模块中的事件总线
const EventEmitter = require('events')

// 创建EventEmitter的实例
const emitter = new EventEmitter()

// 监听事件
emitter.on('why', () => {
  console.log('监听why的事件')
})

// 发射事件
setTimeout(() => {
  emitter.emit('why')
}, 2000);
