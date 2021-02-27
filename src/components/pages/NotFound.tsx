import { FC } from 'react';
import './NotFound.css';
import sorry from '../../public/sorry.webp';

const NotFound: FC = () => (
  <div className="Notfoundpage">
    お探しのページは見つかりませんでした
    <img src={sorry} alt="" />
  </div>
);

export default NotFound;
