import { AppFormsPage } from './app.po';

describe('app-forms App', () => {
  let page: AppFormsPage;

  beforeEach(() => {
    page = new AppFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
