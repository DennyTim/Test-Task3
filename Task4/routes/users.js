const express = require('express');
const router = express.Router();

const {
  getAll,
  getById,
  getOverId,
  createUser
} = require('../controllers/user');

//routes
router.get('/', getAll);
router.get('/:id', getById);
router.get('/over/:custom', getOverId);
router.post('/', createUser);

module.exports = router;
