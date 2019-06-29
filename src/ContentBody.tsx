import React, { FC, ReactElement } from 'react';
import { SiteModel } from './App';

interface ContentBodyProps {
  siteModel: SiteModel;
}

function generateParagraphs(siteModel: SiteModel): ReactElement[]  {
  return siteModel.paragraphs.map((p, idx) => 
    <p>
      {idx === 0 && 
      <span className='meta'>{siteModel.publicationInfo} - </span>}
      {p}
    </p>
  );
}

const ContentBody: FC<ContentBodyProps> = ({siteModel}) => {
  return (
    <div className="content-body">
      <h1 children={siteModel.title} />
      {generateParagraphs(siteModel)}
    </div>
  );
}

export default ContentBody;
