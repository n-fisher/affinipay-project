import React, { FC } from 'react';
import '../styles//App.scss';
import Header from './Header';
import ContentBody from './ContentBody'

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
    <div className="app">
      <Header />
      <ContentBody siteModel={siteModel}/>
    </div>
  );
}

export default App;
