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
import './Notify.css';

const useStyles = makeStyles(() =>
  createStyles({
    table: {
      maxWidth: 1000,
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
              <TableCell>
                <span className="itemTitleText">タイトル</span>
              </TableCell>
              <TableCell>
                <span className="itemTitleText">講演者</span>
              </TableCell>
              <TableCell>
                <span className="itemTitleText">時間</span>
              </TableCell>
              <TableCell>
                <span className="itemTitleText">削除</span>
              </TableCell>
            </TableRow>
            {result}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Notify;
