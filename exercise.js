const user = {
  id: 1,
  name: "John",
  age: 25,
};
const storeUserData = (user) => {
  localStorage.setItem("user",JSON.stringify(user));
}

const getFromLocalStorage = () =>{
  user = JSON.parse(localStorage.getItem("user"))
  console.log(user)
}

storeUserData(user);
getFromLocalStorage();