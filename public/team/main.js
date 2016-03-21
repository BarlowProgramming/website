// jshint -W033
// jshint -W119
// var k33g = new Gh3.User("BarlowProgramming"),
//     userInfos = $("#user");
//
// k33g.fetch(function (err, resUser){
//   if(err) {
//     throw "ouch..."
//   }
//   console.log(k33g, resUser);
//   _.each(_.keys(resUser), function (prop) {
//     userInfos.append(
//       $('<li>').append(prop+" : "+resUser[prop])
//     );
//   });
// });

alert("TESTING");

var url = 'https://api.github.com/orgs/BarlowProgramming/members';
$.get(url, function(users) {
  displayUsers(users)
});

var $container = $('#container')
var $userList = $('#users-list')

function displayUsers(users) {
  for (var i = 0; i < users.length; i++) {
    var user = users[i]
    // console.log(user.name);
    var $userLi = $(
      `<li class="user-container">
        <img class="user-picture" src="${user.avatar_url}" alt="${user.login}'s profile picture"/>
        <div class="user-info">
          <a class="user-link" href="${user.html_url}">${user.login}</a>
        </div>
      </li>`
    )
    $userList.append($userLi)
  }
}
