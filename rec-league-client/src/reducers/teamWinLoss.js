// const initialState = {
//   wins: 0
// }
export default (state = { wins: 0 }, action) => {
  switch(action.type) {

    // case 'INCREASE_WIN':
    // debugger;
    //   return
    //   state.wins + 1


      // case 'INCREASE_LOSS':
      //   return state.loss + 1
      //   // loss: state.loss + 1

      default:
        return state;
  }
}
