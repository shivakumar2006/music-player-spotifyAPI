import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      const { song, data, i } = action.payload;
      state.activeSong = song;
      state.currentIndex = i;
      state.isActive = true;

      if (data?.tracks?.hits) {
        state.currentSongs = data.tracks.hits;
      } else if (data?.tracks) {
        state.currentSongs = data.tracks;
      } else {
        state.currentSongs = data || [];
      }
    },

    nextSong: (state) => {
      const nextIndex = (state.currentIndex + 1) % state.currentSongs.length;
      state.activeSong = state.currentSongs[nextIndex]?.track || state.currentSongs[nextIndex];
      state.currentIndex = nextIndex;
      state.isActive = true;
    },

    prevSong: (state) => {
      const prevIndex = (state.currentIndex - 1 + state.currentSongs.length) % state.currentSongs.length;
      state.activeSong = state.currentSongs[prevIndex]?.track || state.currentSongs[prevIndex];
      state.currentIndex = prevIndex;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = playerSlice.actions;

export default playerSlice.reducer;
