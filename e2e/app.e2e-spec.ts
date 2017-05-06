import { AngularReduxWorkshopPage } from './app.po';

describe('angular-redux-workshop App', () => {
  let page: AngularReduxWorkshopPage;

  beforeEach(() => {
    page = new AngularReduxWorkshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ngr works!');
  });
});
