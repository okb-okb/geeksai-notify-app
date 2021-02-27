import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { noticeSlice } from '../../features/manageNotice';
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

  return (
    <AddButton
      talk={talk}
      addTalk={(t: Talk) => dispatch(noticeSlice.actions.addedTalk(t))}
    />
  );
};

export default EnhancedAddButton;
