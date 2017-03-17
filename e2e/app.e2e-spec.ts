import { ExHousesPage } from './app.po';

describe('ex-houses App', function() {
  let page: ExHousesPage;

  beforeEach(() => {
    page = new ExHousesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
