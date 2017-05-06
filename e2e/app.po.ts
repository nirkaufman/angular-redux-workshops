import { browser, element, by } from 'protractor';

export class AngularReduxWorkshopPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngr-root h1')).getText();
  }
}
