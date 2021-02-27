import { FC } from 'react';
import { Button } from '@material-ui/core';
import type { Talk } from '../../data/dummy-data';

type Props = {
  talk: Talk;
  deleteTalk: (talk: Talk) => void;
};

const DeleteButton: FC<Props> = ({
  talk = {
    id: '',
    title: '',
    speaker: '',
    date: '',
    genre: [],
    content: '',
    time: '',
    label: {},
  },
  deleteTalk = () => undefined,
}) => (
  <>
    <Button
      color="secondary"
      variant="contained"
      onClick={() => deleteTalk(talk)}
    >
      削除
    </Button>
  </>
);

export default DeleteButton;
