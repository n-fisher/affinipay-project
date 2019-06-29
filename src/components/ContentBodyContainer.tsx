import { connect } from 'react-redux';
import { startLookup } from '../redux/actions';
import ContentBody from './ContentBody';

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onWordClick: (word: string) => {
      dispatch(startLookup(word))
    }
  }
}

const ContentBodyContainer = connect(null, mapDispatchToProps)(ContentBody);
export default ContentBodyContainer;