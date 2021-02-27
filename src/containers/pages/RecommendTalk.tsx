import { FC, useState } from 'react';

import RecommendTalk from '../../components/pages/RecommendTalk';
import { interest, Talk, talks } from '../../data/dummy-data';

const EnhancedRecommendTalk: FC = () => {
  const [interestedGenre1, setInterestedGenre1] = useState('');
  const [interestedGenre2, setInterestedGenre2] = useState('');
  const [interestedGenre3, setInterestedGenre3] = useState('');
  const [recommendedResult, setResult] = useState<Talk[]>([]);

  const handleGenreChange1 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setInterestedGenre1(event.target.value as string);
  };
  const handleGenreChange2 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setInterestedGenre2(event.target.value as string);
  };
  const handleGenreChange3 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setInterestedGenre3(event.target.value as string);
  };
  const search = () => {
    setResult(
      talks.filter((talk) => {
        let score = 0;
        score +=
          (talk.label[interestedGenre1] ?? 0) +
          (talk.label[interestedGenre2] ?? 0) +
          (talk.label[interestedGenre3] ?? 0);

        return score >= 0.9;
      }),
    );
  };

  return (
    <RecommendTalk
      genre={interest}
      interestedGenre1={interestedGenre1}
      interestedGenre2={interestedGenre2}
      interestedGenre3={interestedGenre3}
      recommendedResult={recommendedResult}
      handleGenreChange1={handleGenreChange1}
      handleGenreChange2={handleGenreChange2}
      handleGenreChange3={handleGenreChange3}
      search={search}
    />
  );
};
export default EnhancedRecommendTalk;
