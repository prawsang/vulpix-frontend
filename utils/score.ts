export const getColor = (score: number) => {
  if (score < 25) return 'success.500'
  else if (score >= 25 && score < 50) return 'warning.500'
  else if (score >= 50 && score < 75) return 'warning.700'
  return 'error.500'
}

export const getText = (score: number) => {
  if (score < 25) return 'Low Risk'
  else if (score >= 25 && score < 50) return 'Moderate Risk'
  else if (score >= 50 && score < 75) return 'High Risk'
  return 'Highest Risk'
}
