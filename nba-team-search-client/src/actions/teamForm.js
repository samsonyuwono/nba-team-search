// ** Action Creators **
export const updateTeamFormData = teamFormData => {
  return {
    type: 'UPDATED_DATA',
    teamFormData
  }
}

export const resetTeamForm = () => {
  return {
    type: 'RESET_SURFBOARD_FORM'
  }
}
