jest.mock('Linking', () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn(),
  }
})
jest.mock('PushNotificationIOS', () => ({
  addEventListener: jest.fn(),
  requestPermissions: jest.fn(),
}));
jest.mock('react-native-push-notification', () => ({
    configure: jest.fn(),
    onRegister: jest.fn(),
    onNotification: jest.fn(),
    addEventListener: jest.fn(),
    requestPermissions: jest.fn(),
}));
