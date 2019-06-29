import React, { FC } from 'react';
import '../styles//App.scss';
import Header from './Header';
import ContentBodyContainer from './ContentBodyContainer'
import PopoverContainer from './PopoverContainer';
import { startLookup } from '../redux/actions';
import store from '../redux/store';

export interface SiteModel {
  title: string;
  publicationInfo: string;
  paragraphs: string[];
}

interface AppProps {
  siteModel: SiteModel;
}

const App: FC<AppProps> = ({siteModel}) => {
  return (
    <div className="app"
      onClick={_=> store.dispatch(startLookup(''))}
    >
      <Header />
      <ContentBodyContainer siteModel={siteModel}/>
      <PopoverContainer />
    </div>
  );
}

export default App;
