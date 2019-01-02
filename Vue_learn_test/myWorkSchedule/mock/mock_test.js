const Mock = require('mockjs')
const Random = Mock.Random


Mock.mock('/test', 'post', function(params) {
  // console.warn('params-->', params)
  const {body} = params
  const {name} = JSON.parse(body)
  console.warn(name)

  let msg = ''
  if (name === 'alex') {
    msg = "i am alex"
  } else {
    msg = "i am a string"
  }

  return {
    data: msg
  }
})

