export default ({app}, inject) => {
  app.myInjectFunction = (str) => {
    console.warn('this is ctx inject', str)
  }
}
