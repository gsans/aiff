import { AppModulesPage } from './app.po';

describe('app-modules App', () => {
  let page: AppModulesPage;

  beforeEach(() => {
    page = new AppModulesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
