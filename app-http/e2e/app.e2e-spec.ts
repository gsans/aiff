import { AppHttpPage } from './app.po';

describe('app-http App', () => {
  let page: AppHttpPage;

  beforeEach(() => {
    page = new AppHttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
