const axios = require('axios');
let url = "https://api.deezer.com/"

exports.deezzerSereach = async (searchQuery) => {
    searchQuery = searchQuery && searchQuery.length > 0 ? searchQuery : "pac"
    try {
		return new Promise((resolve, reject) => {

            axios.get(`${url}search/artist?q=${searchQuery}`).then(response => {
                resolve({success: true, results:response.data});
            }).catch(error => {
                reject({success: false, results: error})
            });
		});
	} catch (e) {
		return {success: false, status: 403, data: e}
	}
};

exports.getArtistById = async (id) =>{
   
    try {
		return new Promise((resolve, reject) => {

            axios.get(`${url}artist/${id}`).then(response => {
                resolve({success: true, results:response.data});
            }).catch(error => {
                reject({success: false, results: error})
            });
		});

	} catch (e) {
		return {success: false, status: 403, data: e}
	}
};

exports.getAritistAblums = async (id) =>{
    try {
		return new Promise((resolve, reject) => {

            axios.get(`${url}artist/${id}/albums`).then(response => {
                resolve({success:true, results:response.data});
            }).catch(error => {
                reject({success:false, results:error})
            });
		});
	} catch (e) {
		return {success: false, status: 403, data: e}
	}
};

exports.getTopPopularTracks = async (id) =>{
    try {
		return new Promise((resolve, reject) => {
            
            axios.get(`${url}artist/${id}/top?limit=5`).then(response => {
                resolve({success:true, results:response.data});
            }).catch(error => {
                reject({success:false, results:error})
            });
		});

	} catch (e) {
		return {success: false, status: 403, data: e}
	}
};