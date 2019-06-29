import { connect } from 'react-redux';
import Popover from './Popover';

const mapStateToProps = (state: any) => {
  const { currentWord } = state.lookup,
        { x, y } = state.coords;

  return { x, y, word: currentWord, definition: state.lookup[currentWord], visible: Boolean(currentWord) };
}

const PopoverContainer = connect(mapStateToProps)(Popover);
export default PopoverContainer;