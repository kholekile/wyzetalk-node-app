var artistService = require("../services/artistService")

exports.artists = async (req, res) => {
    try {
        var artists = await artistService.getartists();
        res.send(artists); 
    } catch (e) {
        return {success: false, status: 403, data: e}
    }
};

exports.searchForArtist = async (req, res) => {
    try {
        const name = req.query.name;
        var artists = await artistService.searchArtist(name)
        res.send(artists);
    } catch (e) {
        return {success: false, status: 403, data: e}
    }
};

exports.getArtist = async (req, res) => {
    try {
        const id = req.params.id;
        var artist = await artistService.getArtist(id)
        res.send(artist);
    } catch (e) {
        return {success: false, status: 403, data: e}
    }
}; 

exports.getTracks = async (req, res) => {
    try {
        const id = req.params.id;
        var tracks = await artistService.getPopularTracks(id)
        res.send(tracks);
    } catch (e) {
        return {success: false, status: 403, data: e}
    }
}; 

exports.getAlbums = async (req, res) => {
    try {
        const id = req.params.id;
        var albums = await artistService.getArtistAlbums(id)
        res.send(albums);
    } catch (e) {
        return {success: false, status: 403, data: e}
    }
};