import { AppModulesSolutionPage } from './app.po';

describe('app-modules-solution App', () => {
  let page: AppModulesSolutionPage;

  beforeEach(() => {
    page = new AppModulesSolutionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
