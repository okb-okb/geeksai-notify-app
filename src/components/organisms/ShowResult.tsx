import { FC } from 'react';

import SwitchingButton from '../../containers/molecules/SwitchingButton';
import type { Talk } from '../../data/dummy-data';
import './ShowResult.css';

type Props = {
  talks: Talk[];
};

const ShowResult: FC<Props> = ({ talks = [] }) => {
  const result = talks.map((talk) => {
    const time = new Date(talk.time);

    return (
      <div key={talk.id} className="talkBlock">
        <div className="itemBlock">
          <div className="itemTitleText"> タイトル</div> {talk.title}
        </div>
        <div className="itemBlock">
          <div className="itemTitleText">講演者</div>
          {talk.speaker}
        </div>
        <div className="itemBlock">
          <div className="itemTitleText">時間</div> {time.getMonth() + 1}月{' '}
          {time.getDate()}日 {time.getHours()}時 {time.getMinutes()}分
        </div>
        <div className="itemBlock">
          <div className="itemTitleText">内容</div> {talk.content}
        </div>
        <div>
          <SwitchingButton talk={talk} />
        </div>
      </div>
    );
  });

  return <>{result}</>;
};

export default ShowResult;
