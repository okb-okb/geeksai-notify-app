import { FC } from 'react';
import { Button } from '@material-ui/core';
import type { Talk } from '../../data/dummy-data';

type Props = {
  talk: Talk;
  addTalk?: (talk: Talk) => void;
};

const AddButton: FC<Props> = ({
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
  addTalk = () => undefined,
}) => (
  <>
    <Button color="primary" variant="contained" onClick={() => addTalk(talk)}>
      追加
    </Button>
  </>
);

export default AddButton;
