import { ChainablePromiseElement } from 'webdriverio'

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  protected _getByResourceID(
    id: string
  ): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(
      `android=new UiSelector().resourceId("io.testproject.demo:id/${id}")`
    )
  }
}
