import users from './data/users.json';
import currentSong from './data/MusicPlayer/currentSong.json';
import currentPlayback from './data/MusicPlayer/currentPlayback.json';
import genres from './data/genres.json';
import currentUserAlbum from './data/Get-Current-User-Album.json';
import currentUserPlaylists from './data/Get-Current-User-Playlists.json';
import currentUserArtists from './data/Get-User-Followed-Artists.json';
import getAnArtist from './data/Get-An-Artist.json';
import getArtistRelatedArtists from './data/Get-Artist-Related-Artists.json';
import songs from './data/songs.json';
import lists from './data/listsInfo.json';
import albums from './data/albumsInfo.json';
import Boolean from './data/Boolean.json';

/**
 * Fetches mock data after a given timeout.
 * @param  {JSON}   mockData The Object containing the data
 * @param  {Number} time     The amount in seconds to timeout
 * @return {Promise}         A promise containing the mockData
 */
const fetch = (mockData, time = 0) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockData);
  }, time);
});

export default {
  /**
   * Fetches all users in the mock data
   * @return {Promise} A promise containing all users
   */
  fetchUsers() {
    return fetch(users, 50);
  },

  /**
   * Fetches all users in the mock data and matches them against a single user
   * @param  {Object} body The user's credentials
   * @return {Object}      The corresponding response
   */
  async loginUser(body) {
    // Get all users
    const allUsers = await fetch(users, 50);

    // Search all users for our user
    let found = false;
    allUsers.some((user) => {
      if (user.email === body.email && user.password === body.password) {
        found = true;
      }
      // Breaking condition
      return user.email === body.email && user.password === body.password;
    });

    // Succeed if the user is found
    return {
      status: found ? 200 : 400,
      token: '',
      data: {},
    };
  },

  /**
   * Check if Current User Follows Artists or Users
   * @param {String} ids IDs of artists or user which current user follows
   */
  async ifCurrentUserFollowsArtistsOrUsers(ids, token) {
    console.log(ids + token);
    return fetch(Boolean, 100);
  },
  /**
   * Check if Users Follows a playlist
   * @param {String} userID ID of current user
   * @param {String} playlistID ID of certain playlist
   * @param {String} token Token of current user
   */
  async ifUsersFollowsaPlaylist(userID, playlistID, token) {
    console.log(userID + playlistID + token);
    return fetch(Boolean, 100);
  },


  /**
   * Follow a playlist
   * @param {String} playlistID ID of certain playlist
   * @param {String} token Token of current user
   */
  async followaPlaylist(playlistID, token) {
    console.log(playlistID + token);
  },

  /**
   * unFollow a playlist
   * @param {String} playlistID ID of certain playlist
   * @param {String} token Token of current user
   */
  async UnfollowaPlaylist(playlistID, token) {
    console.log(playlistID + token);
  },

  /**
   * Check if Users Follows an Album
   * @param {String} albumID ID of current album
   * @param {String} token Token of current user
   */
  async ifUserFollowsAlbums(albumID, token) {
    console.log(albumID + token);
    return fetch(Boolean, 100);
  },

  /**
   * Save an album for current user
   * @param {String} albumID ID of album
   * @param {String} token Token of current user
   */
  async saveAlbumsForCurrentUser(albumsID, token) {
    console.log(albumsID, token);
  },

  /**
   * Delete an album for current user
   * @param {String} albumID ID of album
   * @param {String} token Token of current user
   */
  async deleteAlbumsForCurrentUser(albumsID, token) {
    console.log(albumsID, token);
  },

  /**
   * Follow Artists or Users
   * @param {String} ids IDs of artists or Users to follow
   */
  async followArtistsOrUsers(ids, token) {
    console.log(ids + token);
  },

  /**
   * UnFollow Artists or Users
   * @param {String} ids IDs of artists or Users to Unfollow
   */
  async unfollowArtistsOrUsers(ids, token) {
    console.log(ids + token);
  },

  /**
 * Creates a new playlists
 * @param {OBJECT} createdPlaylist The created playlist object
 */
  async createNewPlayList(createdPlaylist, token) {
    console.log(token);
    console.log(createdPlaylist);
  },

  /**
   * Fetches all users in the mock data and ensures that a certain user isn't among them
   * @param  {Object} body The user's signup data
   * @return {Object}      The corresponding response
   */
  async signupUser(body) {
    // Get all users
    const allUsers = await fetch(users, 50);

    // Search all users for our user
    let found = false;
    allUsers.some((user) => {
      if (user.email === body.email) {
        found = true;
      }
      // Breaking condition
      return user.email === body.email;
    });

    // Succeed if the user isn't found
    return {
      status: !found ? 200 : 400,
      token: '',
      data: {},
    };
  },

  /**
   * Fetches all users in the mock data and ensures that a certain user is among them
   * @param  {Object} body The user's signup data
   * @return {Object}      The corresponding response
   */
  async forgotPassword(body) {
    // Get all users
    const allUsers = await fetch(users, 50);

    // Search all users for our user
    let found = false;
    allUsers.some((user) => {
      if (user.email === body.email) {
        found = true;
      }
      // Breaking condition
      return user.email === body.email;
    });

    // Succeed if the user is found
    return { status: found ? 200 : 400 };
  },

  /**
   * Fetches Current Song in the mock data
   * @return {Object} An object containing info about current Track
   */
  fetchCurrentSong() {
    return fetch(currentSong[0], 1000).then((Promisedata) => Promisedata);
  },

  /**
   * Get the User's Current playback info
   * @return {Object} An Object Containing info about the User's Current playback
   */
  async fetchCurrentPlayback() {
    return fetch(currentPlayback[0], 1000).then((Promisedata) => Promisedata);
  },

  /**
   * Pause a User's Playback
   * @return {Boolean} a Boolean True if successful and false if failed
   */
  async pausePlayback() {
    return fetch(true, 1000).then((Promisedata) => Promisedata);
  },

  /**
   * Start/Resume a User's Playback
   * @return {Boolean} a Boolean True if successful and false if failed
   */
  async startPlayback() {
    return fetch(true, 1000).then((Promisedata) => Promisedata);
  },

  /**
   * Skip User’s Playback To Next Track
   * @return {Boolean} a Boolean True if successful and false if failed
   */
  async skipNext() {
    return fetch(true, 1000).then((Promisedata) => Promisedata);
  },

  /**
   * Skip User’s Playback To Previous Track
   * @return {Boolean} a Boolean True if successful and false if failed
   */
  async skipPrevious() {
    return fetch(true, 1000).then((Promisedata) => Promisedata);
  },

  /**
   * Toggle Shuffle For User’s Playback
   * @param {Boolean} state a Boolean containing the state wanted of shuffle
   * @return {Boolean} a Boolean True if successful and false if failed
   */
  async toggleShuffle(state) {
    const dummytrue = state || true; // for mocking purposes of matching the server api
    return fetch(dummytrue, 1000).then((Promisedata) => Promisedata);
  },

  /**
   * Set Repeat Mode On User’s Playback
   * @param {object} state track, context or off. track: will repeat the current track.
   * context: will repeat the current context. off: will turn repeat off.
   * @return {Boolean} a Boolean True if successful and false if failed
   */
  async toggleRepeat(state) {
    if (state === 'track' || state === 'off' || state === 'context') {
      return fetch(true, 1000).then((Promisedata) => Promisedata);
    }
    return false;
  },

  /**
   * Seek To Position In Currently Playing Track
   * @param {Number} position_ms Number of milliseconds to seek to
   * @return {Boolean} a Boolean True if successful and false if failed
   */
  async seekPosition(positionMs) {
    if (positionMs > 0) {
      return fetch(true, 1000).then((Promisedata) => Promisedata);
    }
    return false;
  },

  /**
   * Set Volume For User's Playback
   * @param {Number} volumePercent the Volume percentage wanted from the player
   * @return {Boolean} a Boolean True if successful and false if failed
   */
  async setVolume(volumePercent) {
    if (volumePercent > 0) {
      return fetch(true, 1000).then((Promisedata) => Promisedata);
    }
    return false;
  },
  fetchGenres() {
    return fetch(genres, 1000);
  },
  /**
   * Get all the albums saved by the user
   * @param {String} token Token of the current user
   */
  fetchCurrentUserAlbum(token) {
    console.log(token);
    return fetch(currentUserAlbum, 100);
  },
  /**
   * Get All the playlists of the current user
   * @param {string} userID Current User ID
   * @param {string} token Token of the current user
   */
  async fetchCurrentUserPlaylists(userID, token) {
    console.log(token);
    let dummy = userID || true;
    if (dummy) {
      dummy += dummy;
    }
    return fetch(currentUserPlaylists, 100);
  },
  /**
   * Get all the Artist followed by the user
   * @param {string} token Token of the current user
   */
  fetchCurrentUserArtists(token) {
    console.log(token);
    return fetch(currentUserArtists, 100);
  },
  async fetchAnArtist(id) {
    let dummy = id || true;
    if (dummy) {
      dummy += dummy;
    }
    return fetch(getAnArtist, 100);
  },
  async fetchArtistRelatedArtists(id, token) {
    console.log(token);
    let dummy = id || true;
    if (dummy) {
      dummy += dummy;
    }
    return fetch(getArtistRelatedArtists, 100);
  },
  /**
   * Fetches all songs in the mock data
   * @param  {Number}  id The id of a list
   * @return {Object}  An object containing all songs in a given list of ID equals to id
   */
  async fetchSongs(id) {
    const allSongs = await fetch(songs, 500);
    return allSongs[id];
  },
  /**
   * Fetches a list from the mock data
   * @param  {Number}  id The id of the desired list
   * @return {Object} An object containing all information about the list of ID equals to id
   */
  async fetchList(id) {
    const allLists = await fetch(lists, 1000);
    for (let i = 0; i < allLists.length; i += 1) {
      if (allLists[i].id === id) {
        return allLists[i];
      }
    }
    return {};
  },
  /**
   * Fetches an album from the mock data
   * @param  {Number}  id The id of the desired album
   * @return {Object} An object containing all information about the album of ID equals to id
   */
  async fetchAlbum(id) {
    const allAlbums = await fetch(albums, 1000);
    for (let i = 0; i < allAlbums.length; i += 1) {
      for (let j = 0; j < allAlbums[i].items.length; j += 1) {
        if (allAlbums[i].items[j].album.id === id) {
          return allAlbums[i].items[j].album;
        }
      }
    }
    return {};
  },
};
