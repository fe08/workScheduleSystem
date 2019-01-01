const Mock = require('mockjs')
const Random = Mock.Random

Mock.mock('/news/index', 'post', function(params) {
  console.log('mock ok')
  console.log('params', params)

  return {
    data: {
      str: 'i am a string'
    }
  }
})
