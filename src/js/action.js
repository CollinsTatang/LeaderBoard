const topScores = (scores) => scores.sort((a, b) => {
  if (+a.score > +b.score) return -1;
  return 1;
});

const refresh = () => {
  window.location.reload();
};

const clearFields = () => {
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
};
export { topScores, refresh, clearFields };