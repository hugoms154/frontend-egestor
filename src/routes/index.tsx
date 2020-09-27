import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Delete from '../pages/Delete';
import Import from '../pages/Import';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/import" exact component={Import} />
    <Route path="/delete" exact component={Delete} />
    {/*
    /insert
    /search
    */}
  </Switch>
);

export default Routes;
