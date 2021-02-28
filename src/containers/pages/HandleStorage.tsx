/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { noticeSlice } from '../../features/manageNotice';
import type { Talk } from '../../data/dummy-data';

const HandleStorage: FC = () => {
  const dispatch = useDispatch();

  const storagedTalk = JSON.parse(
    window.localStorage.getItem('GEEKSAI_NOTIFICATION_LIST') ?? '{}',
  ) as { [id: string]: Talk };

  const isTalk = (arg: unknown): arg is Talk => {
    const t = arg as Talk;

    return (
      typeof t?.id === 'string' &&
      typeof t?.title === 'string' &&
      typeof t?.speaker === 'string' &&
      typeof t?.date === 'string' &&
      Array.isArray(t?.genre) &&
      typeof t?.content === 'string' &&
      typeof t?.time === 'string' &&
      typeof t?.label === 'object'
    );
  };

  useEffect(() => {
    if (Object.values(storagedTalk).every((t) => isTalk(t))) {
      Object.values(storagedTalk).forEach((t) =>
        dispatch(noticeSlice.actions.addedTalk(t)),
      );
    }
  }, []);

  return <></>;
};

export default HandleStorage;
