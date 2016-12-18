import { ForumsPage } from './app.po';

describe('forums App', function() {
  let page: ForumsPage;

  beforeEach(() => {
    page = new ForumsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
