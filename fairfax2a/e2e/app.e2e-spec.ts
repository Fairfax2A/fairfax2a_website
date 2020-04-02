import { Fairfax2aPage } from './app.po';

describe('fairfax2a App', function() {
  let page: Fairfax2aPage;

  beforeEach(() => {
    page = new Fairfax2aPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
