import { FC, useState } from 'react';

import SearchTalk from '../../components/pages/SearchTalk';
import { genre, date, talks, Talk } from '../../data/dummy-data';

const EnhancedSearchTalk: FC = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [searchedResult, setResult] = useState<Talk[]>([]);

  const handleGenreChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedGenre(event.target.value as string);
  };
  const handleDateChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedDate(event.target.value as string);
  };

  const search = () => {
    setResult(
      talks.filter(
        (talk) =>
          talk.genre.some((id) => id === selectedGenre) &&
          talk.date === selectedDate,
      ),
    );
  };

  return (
    <SearchTalk
      genre={genre}
      date={date}
      selectedGenre={selectedGenre}
      selectedDate={selectedDate}
      searchedResult={searchedResult}
      handleGenreChange={handleGenreChange}
      handleDateChange={handleDateChange}
      search={search}
    />
  );
};
export default EnhancedSearchTalk;
