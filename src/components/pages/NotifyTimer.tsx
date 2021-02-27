import { FC } from 'react';
import Alert from '@material-ui/lab/Alert';

type Props = {
  permitted: boolean;
};

const NotifyTimer: FC<Props> = ({ permitted = false }) => {
  if (permitted) return <></>;

  return <Alert severity="warning">通知がオフになっています</Alert>;
};

export default NotifyTimer;
