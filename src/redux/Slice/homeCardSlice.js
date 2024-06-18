import {createSlice} from '@reduxjs/toolkit';
import {HOME_CARD_DATA} from '../../data';

const initialState = {
  item: HOME_CARD_DATA,
};

export const homeCardSlice = createSlice({
  name: 'cardData',
  initialState,
  reducers: {
    likeItem: (state, action) => {
      const itemId = action.payload;
      const item = state.item.find(item => item.id === itemId);
      if (item) {
        item.liked = !item.liked;
      }
    },
  },
});

export const {likeItem} = homeCardSlice.actions;
export default homeCardSlice.reducer;
