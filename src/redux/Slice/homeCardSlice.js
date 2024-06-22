import {createSlice} from '@reduxjs/toolkit';
import {HOME_CARD_DATA} from '../../data';

const initialState = {
  items: HOME_CARD_DATA,
  selectedItem: {
    id: -1,
    image: require('../../assets/image/destination.jpeg'),
    liked: false,
    location: '',
    name: '',
    rate: {value: '', currency: '', code: ''},
    rating: '',
  },
};

export const homeCardSlice = createSlice({
  name: 'cardData',
  initialState,
  reducers: {
    likeItem: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      if (item) {
        item.liked = !item.liked;
      }
    },
    selectedItem: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      if (item) {
        state.selectedItem = item;
      }
    },
  },
});

export const {likeItem, selectedItem} = homeCardSlice.actions;
export default homeCardSlice.reducer;
