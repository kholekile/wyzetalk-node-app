var express = require('express');
var router = express.Router();
var artistController = require('../controllers/artistController');

router.get('/',artistController.artists)
router.get('/search',artistController.searchForArtist)
router.get('/:id',artistController.getArtist)
router.get('/:id/tracks',artistController.getTracks)
router.get('/:id/albums',artistController.getAlbums)

module.exports = router;