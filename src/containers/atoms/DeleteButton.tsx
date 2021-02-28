import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { noticeSlice, NoticeState } from '../../features/manageNotice';
import DeleteButton from '../../components/atoms/DeleteButton';
import type { Talk } from '../../data/dummy-data';

type Props = {
  talk: Talk;
};

const EnhancedDeleteButton: FC<Props> = ({
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

  const deleteTalk = (t: Talk) => {
    dispatch(noticeSlice.actions.deletedTalk(t));
  };

  useEffect(() => {
    window.localStorage.setItem(
      'GEEKSAI_NOTIFICATION_LIST',
      JSON.stringify(notices),
    );
  }, [notices]);

  return <DeleteButton talk={talk} deleteTalk={(t: Talk) => deleteTalk(t)} />;
};

export default EnhancedDeleteButton;
