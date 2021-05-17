export const getColor = (score: number) => {
  if (score < 30) return 'success.500'
  if (score >= 70) return 'error.500'
  return 'warning.500'
}

export const getText = (score: number) => {
  if (score < 30) return 'Low Risk'
  if (score >= 70) return 'High Risk'
  return 'Fair'
}
