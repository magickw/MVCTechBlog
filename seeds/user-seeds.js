const { User } = require('../models');

const userData = [
  {
    id: 1,
    name: "Peter",
    email: "BG@email.com",
    password: "password12345",
  },
  {
    id: 2,
    name: "Atlassian",
    email: "atlassian@email.com",
    password: "password123456",
  },
  {
    id: 3,
    name: "Thomas",
    email: "thomas@email.com",
    password: "password1234567",
  },
  {
    id: 4,
    name: "Josh",
    email: "josh@email.com",
    password: "password1234567",
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;