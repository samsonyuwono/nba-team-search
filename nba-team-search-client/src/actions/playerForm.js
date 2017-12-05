// ** Action Creators **
export const updatePlayerFormData = playerFormData => {
  return {
    type: 'UPDATED_FORM',
    playerFormData
  }
}

export const resetPlayerForm = () => {
  return {
    type: 'RESET_PLAYER_FORM'
  }
}
