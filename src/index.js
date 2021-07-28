import { getScores, postScore } from './asset/api.js';
import { topScores, refresh, clearFields } from './asset/action.js';
import './style.css';

const leaderContent = document.querySelector('#boardList');
const btn = document.querySelector('#submit');

const displayScores = async () => {
  const api = await getScores();
  const sortedData = topScores(api.result);
  sortedData.forEach((ele) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${ele.user}</td>
        <td>${ele.score}</td>
      `;
    leaderContent.appendChild(row);
  });
};

btn.addEventListener('click', () => {
  const names = document.querySelector('.name').value;
  const scores = document.querySelector('.score').value;

  postScore(names, scores);
  clearFields();
});

const refreshContent = document.querySelector('.btn-refresh');
refreshContent.addEventListener('click', refresh);

displayScores();