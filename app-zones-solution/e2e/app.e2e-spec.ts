import { AppZonesSolutionPage } from './app.po';

describe('app-zones-solution App', () => {
  let page: AppZonesSolutionPage;

  beforeEach(() => {
    page = new AppZonesSolutionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
