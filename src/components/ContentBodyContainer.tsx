import { connect } from 'react-redux';
import { startLookup, saveCoords, finishLookup } from '../redux/actions';
import ContentBody from './ContentBody';

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onWordClick: (word: string) => {
      dispatch(startLookup(word));
      dispatch(finishLookup(word, 'defined'));
    },
    saveCoords: (x: number, y: number) => {
      dispatch(saveCoords(x, y));
    }
  }
}

const ContentBodyContainer = connect(null, mapDispatchToProps)(ContentBody);
export default ContentBodyContainer;