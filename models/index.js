const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Create associations between the models
// User-Post relationship
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  // hooks:true
});
//Post-User relationship
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// Comment-User relationship
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  // hooks:true
});

// Comment-Post relationship
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  // hooks: true
});

// User-Comment relationsihp
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  // hooks:true
});

// Post-Comment relationship
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
  // hooks:true
})

module.exports = { User, Post, Comment };