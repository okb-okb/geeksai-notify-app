import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { noticeSlice } from '../../features/manageNotice';
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

  return (
    <DeleteButton
      talk={talk}
      deleteTalk={(t: Talk) => dispatch(noticeSlice.actions.deletedTalk(t))}
    />
  );
};

export default EnhancedDeleteButton;
