export default {
  members: [
    // The parent record's logic is omitted due to test task
    {
      id: 100,
      avatar: 'https://avatars.io/twitter/rand',
      firstName: 'Randy',
      lastName: 'Davidson',
      position: 'Founder, CEO',
      order: 0,
      admin: true,
      complete: 1.0, // we set this value while user works with their profile
    },
    {
      id: 200,
      avatar: 'https://avatars.io/twitter/Barbara',
      firstName: 'Barbara',
      lastName: 'Baker',
      position: 'Fullstack developer',
      order: 1,
      admin: false,
      complete: 0.15,
    },
    {
      id: 300,
      avatar: 'https://avatars.io/twitter/James',
      firstName: 'James',
      lastName: 'White',
      position: 'Designer',
      order: 2,
      admin: false,
      complete: 0.45,
    },
  ],
};
