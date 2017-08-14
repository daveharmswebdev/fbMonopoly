import { MonopolyFirebasePage } from './app.po';

describe('monopoly-firebase App', () => {
  let page: MonopolyFirebasePage;

  beforeEach(() => {
    page = new MonopolyFirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
