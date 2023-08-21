const loadRandomUsers = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((user) => displayUsers(user));
};

const displayUsers = (user) => {
  const gender = document.getElementById("gender");
  const name = document.getElementById("name");
  const location = document.getElementById("location");
  const cell = document.getElementById("cell");
  const email = document.getElementById("email");
  //show random image within html document ====================================
  const img = document.getElementById("img");
  //====================01=============
  //   img.src = user.results[0].picture.medium;
  //====================02=============
  //   const imgUrl = user.results[0].picture.medium;
  //   img.src = imgUrl;
  //====================03=============
  img.setAttribute("src", `${user.results[0].picture.medium}`);

  gender.innerHTML = user.results[0].gender;
  name.innerHTML =
    user.results[0].name.title +
    " " +
    user.results[0].name.first +
    " " +
    user.results[0].name.first;
  location.innerHTML = user.results[0].location.country;
  cell.innerHTML = user.results[0].cell;
  email.innerHTML = user.results[0].email;
  console.log(user.results[0].picture.medium);
};

loadRandomUsers();
