/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  protected _getByResourceID(id: string) {
    return $(
      `android=new UiSelector().resourceId("io.testproject.demo:id/${id}")`
    )
  }
}
