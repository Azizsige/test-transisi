let num = 0;
// create json file
let dummyJson = [];

let statusData = ["Approved", "In Progress", "Waiting", "In Review"];

let counter = document.getElementById("num");
const btn = document.getElementById("increment");
const contTodo = document.querySelector(".item--todos");

function renderData() {
  dummyJson.forEach((item) => {
    contTodo.innerHTML += `
    <div class="todos">
                <div class="checkbox">
                  <div class="round">
                    <input type="checkbox" checked id="${item.id}" />
                    <label for="${item.id}"></label>
                  </div>
                  <label for="${item.id}">${item.name}</label>
                </div>
                <div class="status ${item.class}">
                  <p>${item.status}</p>
                </div>
              </div>
    `;
  });
}

btn.addEventListener("click", function () {
  let randomStatus = Math.floor(Math.random() * statusData.length);
  let newTodo = {
    id: dummyJson.length + 1,
    name: `John ${dummyJson.length + 1}`,
    status: statusData[randomStatus],
    class: statusData[randomStatus].toLowerCase(),
  };
  dummyJson.push(newTodo);
  console.log(dummyJson);
  contTodo.innerHTML = "";
  if (dummyJson.length >= 8 || dummyJson.length >= 10) {
    contTodo.classList.add("max");
  }
  renderData();
});

// console.log(statusData[randomStatus]);

// dummyJson.forEach((item) => {
//   console.log(item[1]);
// });

renderData();
