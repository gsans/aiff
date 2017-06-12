import { AppFormsSolutionPage } from './app.po';

describe('app-forms-solution App', () => {
  let page: AppFormsSolutionPage;

  beforeEach(() => {
    page = new AppFormsSolutionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
