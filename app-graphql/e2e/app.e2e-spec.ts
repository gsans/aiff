import { AppGraphqlPage } from './app.po';

describe('app-graphql App', () => {
  let page: AppGraphqlPage;

  beforeEach(() => {
    page = new AppGraphqlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
