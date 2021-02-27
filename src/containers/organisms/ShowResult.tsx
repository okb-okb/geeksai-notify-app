import { FC } from 'react';
import ShowResult from '../../components/organisms/ShowResult';
import type { Talk } from '../../data/dummy-data';

type Props = {
  talks: Talk[];
};

const EnhancedShowResult: FC<Props> = ({ talks = [] }) => (
  <ShowResult talks={talks} />
);

export default EnhancedShowResult;
