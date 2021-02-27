import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Search, Notifications, Done } from '@material-ui/icons';

const MenuBar: FC = () => (
  <>
    <Button color="primary" size="large" component={RouterLink} to="/">
      <Search fontSize="large" color="primary" />
      <span style={{ fontSize: 'large' }}>探す</span>
    </Button>
    <Button
      color="primary"
      size="medium"
      component={RouterLink}
      to="/recommend"
    >
      <Done fontSize="large" color="primary" />
      <span style={{ fontSize: 'large' }}>おすすめ</span>
    </Button>
    <Button color="primary" size="medium" component={RouterLink} to="/notify">
      <Notifications fontSize="large" color="primary" />
      <span style={{ fontSize: 'large' }}>通知</span>
    </Button>
    <Divider />
  </>
);

export default MenuBar;
