import { ChainablePromiseElement } from 'webdriverio'
import Page from './page'

class LoginPage extends Page {
  public get inputUsername(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this._getByResourceID('name')
  }

  public get inputPassword(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this._getByResourceID('password')
  }

  public get btnSubmit(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this._getByResourceID('login')
  }

  public async login(username: string, password: string): Promise<void> {
    await this.inputUsername.setValue(username)
    await this.inputPassword.setValue(password)
    await this.btnSubmit.click()
  }
}

export default new LoginPage()
