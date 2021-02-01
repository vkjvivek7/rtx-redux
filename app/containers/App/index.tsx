/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styles/styled-components';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import Sidebar from 'components/SideBar';
import './App.scss';

// const AppWrapper = styled.div`
//   margin: 0 auto;
//   display: flex;
//   height: 100vh;
//   flex-direction: column;
// `;

function App() {
  return (
    <div id="app">
      {/* <AppWrapper> */}
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Sidebar />
      <main id="page-wrap">
        <div style={{ padding: '1em 1em' }} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      {/* <Footer /> */}
      {/* <GlobalStyle /> */}
      {/* </AppWrapper> */}
    </div>
  );
}
export default hot(App);
