export const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
    },
    {
      id: '2',
      title: 'Another Article title',
      shortDescription: 'Short description of the article...',
      content: 'content of the article',
      publishedDate: new Date('02-02-2021'),
      author: 'Jane Doe',
    },
    {
      id: '3',
      title: ' Article title 3',
      shortDescription: 'Medium description of the article...',
      content: 'content of the article',
      publishedDate: new Date('02-04-2021'),
      author: 'Jane Doe',
    },
    {
      id: '4',
      title: 'Another1 Article title',
      shortDescription: 'Long description of the article...',
      content: 'content of the article',
      publishedDate: new Date('02-02-2021'),
      author: 'Jane Doe',
    },
  ],
};
