import React, { FC } from 'react';
import '../styles//App.scss';
import Header from './Header';
import ContentBodyContainer from './ContentBodyContainer'

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
      <ContentBodyContainer siteModel={siteModel}/>
    </div>
  );
}

export default App;
