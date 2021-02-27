import { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';

import DeleteButton from '../../containers/atoms/DeleteButton';
import type { Talk } from '../../data/dummy-data';

const useStyles = makeStyles(() =>
  createStyles({
    table: {
      maxWidth: 500,
    },
  }),
);

type Props = {
  notices: { [id: string]: Talk };
};

const Notify: FC<Props> = ({ notices = {} }) => {
  const classes = useStyles();

  const result = Object.values(notices).map((talk) => {
    const time = new Date(talk.time);

    return (
      <TableRow key={talk.id}>
        <TableCell>{talk.title}</TableCell>
        <TableCell>{talk.speaker}</TableCell>
        <TableCell>
          {time.getMonth() + 1}月 {time.getDate()}日 {time.getHours()}時{' '}
          {time.getMinutes()}分
        </TableCell>
        <TableCell>
          <DeleteButton talk={talk} />
        </TableCell>
      </TableRow>
    );
  });

  return (
    <>
      <TableContainer>
        <Table className={classes.table} aria-label="table">
          <TableBody>
            <TableRow key="header">
              <TableCell>タイトル</TableCell>
              <TableCell>講演者</TableCell>
              <TableCell>時間</TableCell>
              <TableCell>削除</TableCell>
            </TableRow>
            {result}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Notify;
