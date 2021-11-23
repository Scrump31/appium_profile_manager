import { ChainablePromiseElement } from 'webdriverio'
import Page from './page'

class ProfilePage extends Page {
  private get inputCountry(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this._getByResourceID('country')
  }

  private get inputAddress(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this._getByResourceID('address')
  }

  private get inputEmail(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this._getByResourceID('email')
  }

  private get inputPhone(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this._getByResourceID('phone')
  }

  private get btnSave(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return this._getByResourceID('save')
  }

  private get btnLogout(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this._getByResourceID('logout')
  }

  private get bannerSaved(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return this._getByResourceID('saved')
  }

  public async enterProfileInfo({
    country,
    address,
    email,
    phone,
  }: {
    country: string
    address: string
    email: string
    phone: string
  }): Promise<void> {
    await this.inputCountry.setValue(country)
    await this.inputAddress.setValue(address)
    await this.inputEmail.setValue(email)
    await this.inputPhone.setValue(phone)
    await browser.hideKeyboard()
    await this.btnSave.click()
  }

  public async logout(): Promise<void> {
    await browser.hideKeyboard()
    await this.btnLogout.click()
  }

  public async isBannerSavedDisplayed(): Promise<boolean> {
    return await this.bannerSaved.isDisplayed()
  }
}

export default new ProfilePage()
