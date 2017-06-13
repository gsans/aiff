import { AppJsonpSolutionPage } from './app.po';

describe('app-jsonp-solution App', () => {
  let page: AppJsonpSolutionPage;

  beforeEach(() => {
    page = new AppJsonpSolutionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
