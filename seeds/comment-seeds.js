const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Wow! I didn't know about datatables. Thanks!",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "This is really helpful. Datatables makes my html tables beautiful",
    post_id: 1,
    user_id: 2
  },
  {
    comment_text: "Thank you for your content!",
    post_id: 2,
    user_id: 3
  },
  {
    comment_text: "Great. Thank you for your comparisons. They look similar to me.",
    post_id: 3,
    user_id: 2
  },
  {
    comment_text: "Handlebars have saved me a lot of time! Great.",
    post_id: 3,
    user_id: 4
  },
  {
    comment_text: "What is hashing in cyber security? I am really curious.",
    post_id: 4,
    user_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;