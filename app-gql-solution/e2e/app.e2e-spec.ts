import { AppGqlSolutionPage } from './app.po';

describe('app-gql-solution App', () => {
  let page: AppGqlSolutionPage;

  beforeEach(() => {
    page = new AppGqlSolutionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
