import { connect } from 'react-redux';
import { startLookup, saveCoords, finishLookup } from '../redux/actions';
import ContentBody from './ContentBody';

const mapDispatchToProps = (dispatch: Function) => {
  return {
    // normally I'd make this a thunk or saga, but running close to the deadline
    onWordClick: (word: string) => {
      dispatch(startLookup(word));
      if (!word) return;

      let definition = '';
      try {
        const lemmaReq = new XMLHttpRequest();

        lemmaReq.onreadystatechange = function() {
          if (lemmaReq.readyState === 4 && lemmaReq.status === 200) {
            const baseWord = JSON.parse(lemmaReq.responseText).results[0].lexicalEntries[0].inflectionOf[0].id;

            const wordReq = new XMLHttpRequest();
            wordReq.onreadystatechange = function() {
              if (wordReq.readyState === 4 && wordReq.status === 200) {
                definition = JSON.parse(wordReq.responseText).results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
                dispatch(finishLookup(word, definition));
              }
            }
            wordReq.open("GET", `/api/v2/entries/en-us/${baseWord}`, true);
            wordReq.setRequestHeader("app_id", process.env.app_id || '');
            wordReq.setRequestHeader('app_key', process.env.app_key || '');

            wordReq.send(null);
          }
        }
        lemmaReq.open("GET", `/api/v2/lemmas/en-us/${word}`, true);
        lemmaReq.setRequestHeader("app_id", process.env.app_id || '');
        lemmaReq.setRequestHeader('app_key', process.env.app_key || '');

        lemmaReq.send(null);
      } catch(e) {
        dispatch(finishLookup(word, ''));
      }
    },
    saveCoords: (x: number, y: number) => {
      dispatch(saveCoords(x, y));
    }
  }
}

const ContentBodyContainer = connect(null, mapDispatchToProps)(ContentBody);
export default ContentBodyContainer;