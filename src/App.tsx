import { FC } from 'react';
import { Route, Switch } from 'react-router';

import Notify from './containers/pages/Notify';
import RecommendTalk from './containers/pages/RecommendTalk';
import SearchTalk from './containers/pages/SearchTalk';
import MenuBar from './components/pages/MenuBar';
import NotFound from './components/pages/NotFound';
import NotifyTimer from './containers/pages/NotifyTimer';
import HandleStorage from './containers/pages/HandleStorage';

const App: FC = () => (
  <div>
    <span>
      <MenuBar />
    </span>
    <NotifyTimer />
    <HandleStorage />
    <br />
    <Switch>
      <Route exact path="/">
        <SearchTalk />
      </Route>
      <Route exact path="/recommend">
        <RecommendTalk />
      </Route>
      <Route exact path="/notify">
        <Notify />
      </Route>
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
