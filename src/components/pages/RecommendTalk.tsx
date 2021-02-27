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
import './RecommendTalk.css';

type Props = {
  genre: Item[];
  interestedGenre1: string;
  interestedGenre2: string;
  interestedGenre3: string;
  recommendedResult: Talk[];
  handleGenreChange1: (event: React.ChangeEvent<{ value: unknown }>) => void;
  handleGenreChange2: (event: React.ChangeEvent<{ value: unknown }>) => void;
  handleGenreChange3: (event: React.ChangeEvent<{ value: unknown }>) => void;
  search: () => void;
};

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      minWidth: 120,
    },
    table: {
      maxWidth: 500,
    },
    large: {
      fontSize: 'large',
    },
  }),
);

const RecommendTalk: FC<Props> = ({
  genre = [],
  interestedGenre1 = '',
  interestedGenre2 = '',
  interestedGenre3 = '',
  recommendedResult = [],
  handleGenreChange1 = () => undefined,
  handleGenreChange2 = () => undefined,
  handleGenreChange3 = () => undefined,
  search = () => undefined,
}) => {
  const classes = useStyles();

  return (
    <>
      <TableContainer>
        <Table className={classes.table} aria-label="table">
          <TableBody>
            <TableRow key="genre1">
              <TableCell className={classes.large}>気になる(1)</TableCell>
              <TableCell align="right">
                <span className="second-column">
                  <FormControl className={classes.form}>
                    <Select
                      value={interestedGenre1}
                      onChange={handleGenreChange1}
                    >
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
            <TableRow key="genre2">
              <TableCell className={classes.large}>気になる(2)</TableCell>
              <TableCell align="right">
                <span className="second-column">
                  <FormControl className={classes.form}>
                    <Select
                      value={interestedGenre2}
                      onChange={handleGenreChange2}
                    >
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
            <TableRow key="genre3">
              <TableCell className={classes.large}>気になる(3)</TableCell>
              <TableCell align="right">
                <span className="second-column">
                  <FormControl className={classes.form}>
                    <Select
                      value={interestedGenre3}
                      onChange={handleGenreChange3}
                    >
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
      <ShowResult talks={recommendedResult} />
    </>
  );
};

export default RecommendTalk;
