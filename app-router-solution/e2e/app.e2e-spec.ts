import { AppRouterSolutionPage } from './app.po';

describe('app-router-solution App', () => {
  let page: AppRouterSolutionPage;

  beforeEach(() => {
    page = new AppRouterSolutionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
