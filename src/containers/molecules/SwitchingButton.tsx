import { FC } from 'react';
import { useSelector } from 'react-redux';

import { NoticeState } from '../../features/manageNotice';
import AddButton from '../atoms/AddButton';
import DeleteButton from '../atoms/DeleteButton';
import type { Talk } from '../../data/dummy-data';

type Props = {
  talk: Talk;
};

const SwitchingButton: FC<Props> = ({
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
  const notices = useSelector<NoticeState, { [id: string]: Talk }>(
    (state) => state.noticeList,
  );

  if (talk.id in notices) {
    return <DeleteButton talk={talk} />;
  }

  return <AddButton talk={talk} />;
};

export default SwitchingButton;
