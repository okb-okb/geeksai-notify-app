import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { NoticeState } from '../../features/manageNotice';
import Notify from '../../components/pages/Notify';
import type { Talk } from '../../data/dummy-data';

const EnhancedNotify: FC = () => {
  const notices = useSelector<NoticeState, { [id: string]: Talk }>(
    (state) => state.noticeList,
  );

  useEffect(() => {
    window.localStorage.setItem(
      'GEEKSAI_NOTIFICATION_LIST',
      JSON.stringify(notices),
    );
  }, [notices]);

  return <Notify notices={notices} />;
};

export default EnhancedNotify;
