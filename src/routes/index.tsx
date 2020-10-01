import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Delete from '../pages/Delete';
import Edit from '../pages/Edit';
import Import from '../pages/Import';
import Insert from '../pages/Insert';
import Search from '../pages/Search';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/import" component={Import} />
    <Route path="/delete" component={Delete} />
    <Route path="/insert" component={Insert} />
    <Route path="/edit" component={Edit} />
    <Route path="/search" component={Search} />
  </Switch>
);

export default Routes;
