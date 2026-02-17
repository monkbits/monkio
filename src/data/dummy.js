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
