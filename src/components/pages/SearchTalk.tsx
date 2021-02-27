import { FC } from 'react';
import {
  Button,
  FormControl,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import ShowResult from '../../containers/organisms/ShowResult';
import type { Item, Talk } from '../../data/dummy-data';
import './SearchTalk.css';

type Props = {
  genre: Item[];
  date: Item[];
  selectedGenre: string;
  selectedDate: string;
  searchedResult: Talk[];
  handleGenreChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  handleDateChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  search: () => void;
};

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      minWidth: 120,
    },
    table: {
      maxWidth: 600,
    },
    large: {
      fontSize: 'large',
    },
  }),
);

const SearchTalk: FC<Props> = ({
  genre = [],
  date = [],
  selectedGenre = '',
  selectedDate = '',
  searchedResult = [],
  handleGenreChange = () => undefined,
  handleDateChange = () => undefined,
  search = () => undefined,
}) => {
  const classes = useStyles();

  return (
    <>
      <TableContainer>
        <Table className={classes.table} aria-label="table">
          <TableBody>
            <TableRow key="genrerow">
              <TableCell className={classes.large}>ジャンル</TableCell>
              <TableCell align="right">
                <span className="second-column">
                  <FormControl className={classes.form}>
                    <Select value={selectedGenre} onChange={handleGenreChange}>
                      {genre.map((item) => (
                        <MenuItem value={item.id} key={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </span>
              </TableCell>
            </TableRow>
            <TableRow key="daterow">
              <TableCell className={classes.large}>日付</TableCell>
              <TableCell align="right">
                <span className="second-column">
                  <FormControl className={classes.form}>
                    <Select value={selectedDate} onChange={handleDateChange}>
                      {date.map((item) => (
                        <MenuItem value={item.id} key={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </span>
              </TableCell>
            </TableRow>
            <TableRow key="searchrow">
              <TableCell />
              <TableCell align="right">
                <Button
                  className={classes.large}
                  color="primary"
                  variant="contained"
                  onClick={search}
                >
                  検索
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <ShowResult talks={searchedResult} />
    </>
  );
};

export default SearchTalk;
