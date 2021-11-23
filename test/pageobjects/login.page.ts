import { ChainablePromiseElement } from 'webdriverio'
import Page from './page'

class LoginPage extends Page {
  private get inputUsername(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this._getByResourceID('name')
  }

  private get inputPassword(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this._getByResourceID('password')
  }

  private get btnSubmit(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this._getByResourceID('login')
  }

  public async login(username: string, password: string): Promise<void> {
    await this.inputUsername.setValue(username)
    await this.inputPassword.setValue(password)
    await this.btnSubmit.click()
  }

  public async isLoginBtnDisplayed(): Promise<boolean> {
    return await this.btnSubmit.isDisplayed()
  }
}

export default new LoginPage()
