import { connect } from 'react-redux';
import { hidePopup } from '../redux/actions';
import Popover from './Popover';

const mapStateToProps = (state: any) => {
  const { currentWord } = state.lookup,
        { x, y } = state.coords;

  return { x, y, word: currentWord, definition: state.lookup[currentWord], visible: Boolean(currentWord) };
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onDismiss: () => {
      dispatch(hidePopup())
    }
  }
}

const PopoverContainer = connect(mapStateToProps, mapDispatchToProps)(Popover);
export default PopoverContainer;