import { FC } from 'react';
import { useSelector } from 'react-redux';

import { NoticeState } from '../../features/manageNotice';
import Notify from '../../components/pages/Notify';
import type { Talk } from '../../data/dummy-data';

const EnhancedNotify: FC = () => {
  const notices = useSelector<NoticeState, { [id: string]: Talk }>(
    (state) => state.noticeList,
  );

  return <Notify notices={notices} />;
};

export default EnhancedNotify;
