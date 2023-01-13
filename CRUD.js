var courseApi = "http://localhost:3000/course";

function getCoursesFromApi(callback) {
  fetch(courseApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function renderCourse(courseFromApi) {
  var courseBlock = document.querySelector("#list-course");
  var listCoursesFromApi = courseFromApi.map(function (course) {
    return `<li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})
                ">Delete</button>
                <button onclick="getInfoCourse(${course.id})
                ">Edit</button>
            </li>`;
  });
  courseBlock.innerHTML = listCoursesFromApi.join("");
}

function handleCreateCourseApi(data) {
  fetch(courseApi, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(function (response) {
    return response.json();
  });
}

function createNewCourse() {
  var createButton = document.querySelector("#create");
  createButton.onclick = function () {
    var nameInput = document.querySelector('input[name="name"]').value;
    var descriptionInput = document.querySelector(
      'input[name="description"]'
    ).value;

    var dataInput = { name: nameInput, description: descriptionInput };
    handleCreateCourseApi(dataInput);
  };
}

function handleDeleteCourse(id) {
  var options = {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(courseApi + "/" + id, options).then(function (response) {
    return response.json();
  });
}

// function handleUpdateCourse(id, data) {
//   var options = {
//     method: "put",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   };
//   fetch(courseApi + "/" + id, options).then(function (response) {
//     return response.json();
//   });
// }

function getInfoCourse(id) {
  var listCourses = document.querySelectorAll("li");
  console.log(listCourses);
  var informationOfCourse = listCourses.find(function (course) {
    return course.id === id;
  });
  console.log(informationOfCourse);
}

function startWeb() {
  getCoursesFromApi(renderCourse);

  createNewCourse();
}

startWeb();
