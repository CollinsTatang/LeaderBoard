import { getScores, postScore } from './js/api';
import { topScores, refresh, clearFields } from './js/action';
import './style.css';

const body = document.querySelector('body');
body.innerHTML = ` 

<div class="container mt-3">
    <div class=" h1 font-weight-bold">Leaderboard</div>
    <div class="row"> 
    <div class="inner-container d-flex col-md-6">
      <div class="scores-container">
        <div class="d-flex">
          <div class="h4 font-weight-bold">Recent scores</div>
          <button type="button" class="btn btn-primary btn-sm btn-refresh"> Refresh</button>
        </div>
        <div class="">
          <table class="table table-striped mt-4">
            <thead class="thead-dark">
                <tr>
                  <th class="display-5 lead text-white">Name</th>
                  <th class="display-5 lead text-white">Scores</th>                 
                </tr>
            </thead>
            <tbody id="boardList">
            </tbody>
          </table>
        </div>
      </div>
      <div class="form-container">
        <div class="h4 font-weight-bold">Add your score</div>
        <form action="#" class="d-flex form">
          <input type="text" class="name form-control mb-4" placeholder="Enter name">
          <input type="number" class="score form-control mb-4" placeholder="Enter score">
          <input type="submit" value="submit" id="submit" class="btn btn-success btn-sm">
        </form>
      </div>
    </div>
    </div>
  </div>
`;

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