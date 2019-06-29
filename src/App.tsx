import React, { FC } from 'react';
import './App.scss';
import Header from './Header';

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
    <div className="App">
      <Header />
      <h1 children={siteModel.title} />
      {siteModel.paragraphs.map(p => <p children={p} />)}
    </div>
  );
}

export default App;
