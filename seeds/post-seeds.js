const { Post } = require('../models');

const postData = [
  {
    id: 1,
    title: "Convert your HTML tables into datatables",
    post_text: "DataTables.net’s jQuery JS library is an easy and free way to convert your HTML tables into user-friendly datatables with advanced interaction controls.",
    user_id: 1 
  },
  { id: 2,
    title: "Getting Git right, with tutorials, news and tips.",
    post_text: "Git is a free and open-source version control system, originally created by Linus Torvalds in 2005. Unlike older centralized version control systems such as SVN and CVS, Git is distributed: every developer has the full history of their code repository locally. This makes the initial clone of the repository slower, but subsequent operations such as commit, blame, diff, merge, and log dramatically faster.",
    user_id: 2
  },
  {
    id: 3,
    title: "What is Handlebars?",
    post_text: "Handlebars is a simple templating language. It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular text with embedded Handlebars expressions.",
    user_id: 3
  },
  {
    id: 4,
    title: "What is hashing and how does it work?",
    post_text: "Hashing is the process of transforming any given key or a string of characters into another value. This is usually represented by a shorter, fixed-length value or key that represents and makes it easier to find or employ the original string. The most popular use for hashing is the implementation of hash tables.",
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;