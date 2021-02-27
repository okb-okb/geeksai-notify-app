import { FC } from 'react';
import SwitchingButton from '../../containers/molecules/SwitchingButton';
import type { Talk } from '../../data/dummy-data';

type Props = {
  talks: Talk[];
};

const ShowResult: FC<Props> = ({ talks = [] }) => {
  const result = talks.map((talk) => {
    const time = new Date(talk.time);

    return (
      <span key={talk.id}>
        <div>タイトル {talk.title}</div>
        <div>講演者 {talk.speaker}</div>
        <div>
          時間 {time.getMonth() + 1}月 {time.getDate()}日 {time.getHours()}時{' '}
          {time.getMinutes()}分
        </div>
        <div>内容 {talk.content}</div>
        <div>
          <SwitchingButton talk={talk} />
        </div>
        <br />
      </span>
    );
  });

  return <>{result}</>;
};

export default ShowResult;
