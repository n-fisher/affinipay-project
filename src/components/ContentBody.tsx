import React, { ReactElement, Component } from 'react';
import { SiteModel } from './App';

interface ContentBodyProps {
  siteModel: SiteModel;
  onWordClick: Function;
  saveCoords: Function;
}

const findWordBoundsFromIndex = (string: string, index: number): number[] => {
  // caveat: will not find words with special characters (ñ)
  const isAlpha = (char: string) => char.match(/[a-z]/i);

  // check if we have clicked an alphabetical character, and if there's any other contiguous ones
  if (index < string.length && isAlpha(string[index])) {
    let startingIndex = index;
    while (startingIndex > 0 && isAlpha(string[startingIndex-1])) {
      startingIndex -= 1;
    }

    let endingIndex = index;
    while (endingIndex < string.length-1 && isAlpha(string[endingIndex+1])) {
      endingIndex += 1;
    }

    return [startingIndex, endingIndex+1];
  }

  return [-1, -1];
}

export default class ContentBody extends Component<ContentBodyProps> {
  onClick(this: HTMLTextAreaElement, onWordClick: Function, saveCoords: Function, ev: MouseEvent): void {
    const [start, end] = findWordBoundsFromIndex(this.value, this.selectionStart);
    if (start !== -1 && end !== -1) this.setSelectionRange(start, end);
  
    onWordClick(this.value.slice(start, end).toLowerCase());
    saveCoords(ev.x, ev.y);
  }

  resizeTextArea = (ref: HTMLTextAreaElement | null): void => {
    // need to trigger size->0->newsize as text area will expand but not contract otherwise
    const resize = () => {
      if (!ref) return;
      ref.style.height = '0px';
      ref.style.height = ref.scrollHeight+'px';
    };
  
    // Add resize listener and trigger it for initial height setting
    if (ref) {
      const onclick = this.onClick.bind(ref, this.props.onWordClick, this.props.saveCoords);
      ref.onclick = onclick;
      window.addEventListener('resize', resize);
      resize();
    }
  }

  generateParagraphs = (siteModel: SiteModel): ReactElement[] => (
    siteModel.paragraphs.map((p, idx) => {
      const text = (idx === 0 ? `${siteModel.publicationInfo} - ` : '') + p;
      return <textarea readOnly ref={this.resizeTextArea} value={text} key={idx} />
    })
  );

  render() {
    const { siteModel } = this.props;
    return (
      <div className="content-body">
        <textarea className='title'
          ref={this.resizeTextArea}
          value={siteModel.title}
          readOnly
        />
        {this.generateParagraphs(siteModel)}
      </div>
    );
  }
}