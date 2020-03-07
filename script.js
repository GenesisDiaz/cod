
document.getElementById('formTask').addEventListener('submit', saveTasks);

let tasks = [];
let tasks2 = [];

function saveTasks(ev)
{
  ev.preventDefault();

  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;

   titleInput = document.getElementById("title");

   if (title === "") {
      alert("Add a Title");
      return false;
    }
    
    if (description === "") {
      alert("Add a Description");
      return false;
    }


  const task =
  {
    title,
    description
  }

  tasks.push(task);
  console.log(tasks);

  getTasks();

}

function getTasks()
{

  let tareasArray = tasks;

  let tasksCard = document.getElementById('tasksP');
  tasksCard.innerHTML = '';
  console.log(tasksCard)

  console.log('array: ', tareasArray)
  for(i = 0; i < tareasArray.length; i++)
  {
    let title = tareasArray[i].title;
    let description = tareasArray[i].description;
    // console.log(tasks[i]);
    tasksCard.innerHTML += `
      <div class="col-md-12">
        <div class="card mb-3">
          <div class="card-body">
            <p>${title} -  ${description}</p>
            <a class="btn btn-primary btn-block" onclick="getTasks2('${title}','${description}')">Completed</a>
          </div>
        </div>
      </div>
    `;
  }
  document.getElementById('title').value = "";
   document.getElementById('description').value = "";
  // console.log(title, description)
}

getTasks();


function getTasks2(title,description)
{

  let title2 = title;
  let description2 = description;

  const task2 =
  {
    title2,
    description2
  }

  tasks2.push(task2);
  console.log(tasks2);
  deleteTask(title);
  getTasks3();


}

function getTasks3()
{
  let tareasArray2 = tasks2;

  let tasksCard = document.getElementById('tasksC');
  tasksCard.innerHTML = '';
  console.log(tasksCard)

  console.log('array: ', tareasArray2)
  for(i = 0; i < tareasArray2.length; i++)
  {
    let title = tareasArray2[i].title2;
    let description = tareasArray2[i].description2;
    // console.log(tasks[i]);
    tasksCard.innerHTML += `
      <div class="col-md-12">
        <div class="card mb-3">
          <div class="card-body">
            <p>${title} -  ${description}</p>
            <a class="btn btn-primary btn-block"" onclick="deleteTask2('${title}')">Deleted</a>
          </div>
        </div>
      </div>
    `;
  }

}


function deleteTask(title)
 {
  let tareasArray = tasks;
   for(i = 0; i < tareasArray.length; i++)
   {
    if(tareasArray[i].title == title)
    {
       tareasArray.splice(i, 1);
     }
   }
   getTasks();
 }

 function deleteTask2(title)
 {
  let tareasArray2 = tasks2;
   for(i = 0; i < tareasArray2.length; i++)
   {
    if(tareasArray2[i].title2 == title)
    {
       tareasArray2.splice(i, 1);
     }
   }
   getTasks3();
 }
