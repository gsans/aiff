import { AppJsonpPage } from './app.po';

describe('app-jsonp App', () => {
  let page: AppJsonpPage;

  beforeEach(() => {
    page = new AppJsonpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
