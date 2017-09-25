import Reactotron from 'reactotron-react-native'

Reactotron
  .configure() // we can use plugins here -- more on this later
  .useReactNative()
  .connect() // let's connect!
