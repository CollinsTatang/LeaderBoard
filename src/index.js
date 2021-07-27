import './style.css';

const leaderContent = document.querySelector('#boardList');
const leaderboard = [
  {
    name: 'Collins Tatang',
    score: 70,
  },
  {
    name: 'Tatang James',
    score: 100,
  },
];

const displayScores = async () => {
  if (leaderboard !== null) {
    leaderboard.forEach((ele) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${ele.name}</td>
        <td>${ele.score}</td>
      `;
      leaderContent.appendChild(row);
    });
  }
};

displayScores();