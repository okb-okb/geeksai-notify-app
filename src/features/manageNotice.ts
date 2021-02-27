/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Talk } from '../data/dummy-data';

export type NoticeState = {
  noticeList: { [id: string]: Talk };
};

export const noticeSlice = createSlice({
  name: 'notice',
  initialState: { noticeList: {} } as NoticeState,
  reducers: {
    addedTalk: (state, action: PayloadAction<Talk>) => {
      state.noticeList[action.payload.id] = { ...action.payload };
    },
    deletedTalk: (state, action: PayloadAction<Talk>) => {
      delete state.noticeList[action.payload.id];
    },
  },
});
