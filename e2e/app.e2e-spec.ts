import { InterviewBlogPage } from './app.po';

describe('interview-blog App', function() {
  let page: InterviewBlogPage;

  beforeEach(() => {
    page = new InterviewBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
