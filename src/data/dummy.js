export const USERS = [
  {
    id: 'u1',
    name: 'Paul Graham',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 'u2',
    name: 'Naval Ravikant',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 'u3',
    name: 'Elon Musk',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 'u4',
    name: 'Balaji Srinivasan',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: 'u5',
    name: 'Marc Andreessen',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 'u6',
    name: 'User 6',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    id: 'u7',
    name: 'User 7',
    avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
  },
  {
    id: 'u8',
    name: 'User 8',
    avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
];

export const ROOMS = [
  {
    id: 'r1',
    title: 'Welcome to Clubhouse! 🎉',
    tags: ['Welcome', 'Onboarding'],
    speakers: [USERS[0], USERS[1]],
    participants: 450,
    others: [USERS[2], USERS[3], USERS[4]],
  },
  {
    id: 'r2',
    title: 'Startup School: How to build a product users love',
    tags: ['Startups', 'Product'],
    speakers: [USERS[0], USERS[4]],
    participants: 1200,
    others: [USERS[1], USERS[2], USERS[3], USERS[5], USERS[6]],
  },
  {
    id: 'r3',
    title: 'The Future of Crypto 🚀',
    tags: ['Crypto', 'Bitcoin', 'Ethereum'],
    speakers: [USERS[3], USERS[2]],
    participants: 8900,
    others: [USERS[0], USERS[1], USERS[4], USERS[7]],
  },
  {
    id: 'r4',
    title: 'Design Critique Session',
    tags: ['Design', 'UI/UX'],
    speakers: [USERS[5], USERS[6]],
    participants: 120,
    others: [USERS[7], USERS[0]],
  },
  {
    id: 'r5',
    title: 'Morning Meditation 🧘‍♂️',
    tags: ['Wellness', 'Health'],
    speakers: [USERS[7]],
    participants: 50,
    others: [USERS[5], USERS[6]],
  },
];

export const FEED_ITEMS = [
    {
        id: 'f1',
        author: USERS[0],
        topic: 'Startup Ideas',
        content: 'What is the one problem you face daily that you wish someone would solve?',
        likes: 120,
        comments: 45,
        time: '2h ago',
    },
    {
        id: 'f2',
        author: USERS[2],
        topic: 'Space Exploration',
        content: 'Mars is the only place in the solar system where it’s possible for life to become multi-planetary.',
        likes: 5400,
        comments: 890,
        time: '5h ago',
    },
    {
        id: 'f3',
        author: USERS[3],
        topic: 'Network State',
        content: 'The most important thing to understand about the future is that it is not pre-determined.',
        likes: 890,
        comments: 210,
        time: '1d ago',
    },
    {
        id: 'f4',
        author: USERS[1],
        topic: 'Wealth Creation',
        content: 'Specific knowledge is found by pursuing your genuine curiosity and passion rather than whatever is hot right now.',
        likes: 2300,
        comments: 150,
        time: '1d ago',
    },
];
