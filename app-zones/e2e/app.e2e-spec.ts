import { AppZonesPage } from './app.po';

describe('app-zones App', () => {
  let page: AppZonesPage;

  beforeEach(() => {
    page = new AppZonesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
