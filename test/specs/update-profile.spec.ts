import LoginPage from '../pageobjects/login.page'
describe('My Login application', () => {
  it('should open login page', async () => {
    await LoginPage.login('test user', '12345')
  })
})
