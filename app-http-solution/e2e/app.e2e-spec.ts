import { AppHttpSolutionPage } from './app.po';

describe('app-http-solution App', () => {
  let page: AppHttpSolutionPage;

  beforeEach(() => {
    page = new AppHttpSolutionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
