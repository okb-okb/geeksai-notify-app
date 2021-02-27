/* eslint-disable no-console */
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Push from 'push.js';

import NotifyTimer from '../../components/pages/NotifyTimer';
import { NoticeState } from '../../features/manageNotice';
import type { Talk } from '../../data/dummy-data';

const EnhancedNotifyTimer: FC = () => {
  const [permitted, setPermission] = useState(false);
  const [notifiedTalk, setNotified] = useState<{ [id: string]: Talk }>({});
  const notices = useSelector<NoticeState, { [id: string]: Talk }>(
    (state) => state.noticeList,
  );

  const check = (
    _notices: { [id: string]: Talk },
    _notifiedTalk: { [id: string]: Talk },
  ): void => {
    const upcomingTalk = Object.values(_notices).filter((talk) => {
      const time = new Date(talk.time);
      const now = new Date();

      return (
        now <= time && Math.abs(now.getTime() - time.getTime()) <= 5 * 60 * 1000
      );
    });

    if (upcomingTalk.length) {
      upcomingTalk.forEach((talk) => {
        if (!(talk.id in _notifiedTalk)) {
          Push.create(`「${talk.title}」がまもなく始まります`, {
            timeout: 5000,
          }).catch((e) => console.error(e));

          setNotified((t) => ({ ...t, [talk.id]: talk }));
        }
      });
    }
  };

  useEffect(() => {
    Push.Permission.request(
      () => setPermission(() => true),
      () => setPermission(() => false),
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => check(notices, notifiedTalk), 10000);

    return () => clearInterval(timer);
  }, [notices, notifiedTalk]);

  return <NotifyTimer permitted={permitted} />;
};

export default EnhancedNotifyTimer;
