const messages = [
  {
    text: 'Hi there!',
    user: 'Amanda',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: "Charles",
    added: new Date()
  }
]

const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Message Board',
messages });
});
router.post('/new', (req,res,next) => {
  const newMessages = req.body
  messages.push({text: newMessages.messageText, user: newMessages.messageUser, added: new Date()})
  res.redirect('/')
})

module.exports = router;
