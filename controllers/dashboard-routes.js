const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
// redirect unauthenticated users to the login page
const withAuth = require('../utils/auth')

// A route to render the dashboard page, only for a logged in user
router.get('/', withAuth, (req, res) => {
    Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'post_text',
        'title',
        'created_at',
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['name', 'github']
          }
        },
        {
          model: User,
          attributes: ['name', 'github']
        }
      ]
    })
      .then(dbPostData => {
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// A route to edit a post
router.get('/edit/:id', withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_text',
      'title',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['name', 'github']
        }
      },
      {
        model: User,
        attributes: ['name', 'github']
      }
    ]
  })
    .then(dbPostData => {
      // if no post by that id exists, return an error
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      // serialize data before passing to template
      const post = dbPostData.get({ plain: true });
      res.render('edit-post', { post, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// route to create/add a new post by author
router.get('/create/', withAuth, (req, res) => {
  Post.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'title',
      'created_at',
      'post_text',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['name', 'github']
        }
      },
      {
        model: User,
        attributes: ['name', 'github']
      }
    ]
  })
    .then(dbPostData => {
      // serialize data before passing to template
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('new-post', { posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// A route to edit the logged in user
// router.get('/edituser', withAuth, (req, res) => {
//   // Acess the User model and run the findOne() method to get a single user based on parameters
//   User.findOne({
//     // when the data is sent back, exclude the password property
//     attributes: { exclude: ['password'] },
//     where: {
//       // use id as the parameter for the request
//       id: req.session.user_id
//     }
//   })
//     .then(dbUserData => {
//       if (!dbUserData) {
//         // if no user is found, return an error
//         res.status(404).json({ message: 'No user found with this id' });
//         return;
//       }
//       // otherwise, return the data for the requested user
//       const user = dbUserData.get({ plain: true });
//       res.render('edit-user', {user, loggedIn: true});
//     })
//     .catch(err => {
//       // if there is a server error, return that error
//       console.log(err);
//       res.status(500).json(err);
//     })
//   });

module.exports = router;