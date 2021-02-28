import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { noticeSlice, NoticeState } from '../../features/manageNotice';
import AddButton from '../../components/atoms/AddButton';
import type { Talk } from '../../data/dummy-data';

type Props = {
  talk: Talk;
};

const EnhancedAddButton: FC<Props> = ({
  talk = {
    id: '',
    title: '',
    speaker: '',
    date: '',
    genre: [],
    content: '',
    time: '',
    label: {},
  },
}) => {
  const dispatch = useDispatch();
  const notices = useSelector<NoticeState, { [id: string]: Talk }>(
    (state) => state.noticeList,
  );

  const addTalk = (t: Talk) => {
    dispatch(noticeSlice.actions.addedTalk(t));
  };

  useEffect(() => {
    window.localStorage.setItem(
      'GEEKSAI_NOTIFICATION_LIST',
      JSON.stringify(notices),
    );
  }, [notices]);

  return <AddButton talk={talk} addTalk={(t: Talk) => addTalk(t)} />;
};

export default EnhancedAddButton;
