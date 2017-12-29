export default (state= {win: 0, loss: 0}, action) => {
  switch(action.type) {

    case 'INCREASE_WIN':
      return {...state,
      win: state.win + 1
      }

      case 'INCREASE_LOSS':
        return state.loss + 1
        // loss: state.loss + 1

      default:
        return state;
  }
}
