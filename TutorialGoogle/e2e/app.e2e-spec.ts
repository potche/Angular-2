import { TutorialGooglePage } from './app.po';

describe('tutorial-google App', function() {
  let page: TutorialGooglePage;

  beforeEach(() => {
    page = new TutorialGooglePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
