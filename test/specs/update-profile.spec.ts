import { loginCreds, profileInfo } from '../data/user'
import LoginPage from '../pageObjects/login.page'
import ProfilePage from '../pageObjects/profile.page'

describe('Update Profile', () => {
  it('should allow a user to save new profile information', async () => {
    await LoginPage.login(loginCreds.username, loginCreds.password)
    await ProfilePage.enterProfileInfo(profileInfo)
    await ProfilePage.isBannerSavedDisplayed()
    await ProfilePage.logout()

    expect(await LoginPage.isLoginBtnDisplayed()).toBeTruthy()
  })
})
