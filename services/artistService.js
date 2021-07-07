var deezerProvider = require("../interfaces/deezerInterface.js");

exports.getartists = async () => {
    var data = await deezerProvider.deezzerSereach();
    return data
};

exports.searchArtist = async (searchQuery) => {
    var data = await deezerProvider.deezzerSereach(searchQuery);
    return data
};

exports.getArtist = async (id) => {
    var data = await deezerProvider.getArtistById(id)
    return data
};

exports.getPopularTracks = async (id) => {
    var data = await deezerProvider.getTopPopularTracks(id)
    return data
};

exports.getArtistAlbums = async (id) => {
    var data = await deezerProvider.getAritistAblums(id)
    return data
};