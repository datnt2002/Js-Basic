//callback hell
// setTimeout(function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//     setTimeout(function () {
//       console.log(3);
//     }, 1000);
//   }, 1000);
// }, 1000);

//promises
// var promise = new Promise(
//   //Executor
//   function (resolve, reject) {
//     //Logic
//     //Thanh cong: resolve()
//     //That bai: reject()
//     //Fake call API
//     resolve();
//     // reject("Co loi");
//   }
// );

// promise
//   .then(function () {
//     return new Promise(function (resolve) {
//       setTimeout(function () {
//         resolve([1, 2, 3]);
//       }, 3000);
//     });
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .finally(function () {
//     console.log("Done");
//   });

// function sleep(ms) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, ms);
//   });
// }

// sleep(1000)
//   .then(function () {
//     console.log(1);
//     return sleep(1000);
//   })
//   .then(function () {
//     console.log(2);
//     return new Promise(function (resolve, reject) {
//       reject("CO loi");
//     });
//   })
//   .then(function () {
//     console.log(3);
//     return sleep(1000);
//   })
//   .then(function () {
//     console.log(4);
//     return sleep(1000);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// var promise = Promise.resolve("Success");

// promise
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// var promise1 = new Promise(function (resolve) {
//   setTimeout(function () {
//     resolve([1]);
//   }, 2000);
// });

// var promise2 = new Promise(function (resolve) {
//   setTimeout(function () {
//     resolve([2, 3]);
//   }, 5000);
// });

// Promise.all([promise1, promise2]).then(function (result) {
//   console.log(result);
// });

var users = [
  { id: 1, name: "dat" },
  { id: 2, name: "mai ngol" },
  { id: 3, name: "mai het ieu" },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "mai k ieu",
  },
  {
    id: 2,
    user_id: 2,
    content: "mai het ieu r",
  },
  {
    id: 3,
    user_id: 3,
    content: "da het yeu tu lau r",
  },
];

function getComments() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}

function getUsersByIds(userIds) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var result = users.filter(function (user) {
        return userIds.includes(user.id);
      });
      resolve(result);
    }, 1000);
  });
}

getComments()
  .then(function (comments) {
    var userIds = comments.map(function (comment) {
      return comment.user_id;
    });
    return getUsersByIds(userIds).then(function (users) {
      var result = { users: users, comments: comments };
      return result;
    });
  })
  .then(function (data) {
    var commentBlock = document.querySelector("ul");
    console.log(commentBlock);
    html = "";
    data.comments.forEach(function (comment) {
      var user_id = data.users.find(function (user) {
        return user.id === comment.user_id;
      });
      html += `<li>${user_id.name}: ${comment.content}</li>`;
    });
    console.log(html);
    commentBlock.innerHTML = html;
  });
