// Add your code here

const formData = {
  name: "Steve",
  email: "steve@steve.com",
};

function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((resp) => resp.json())
    .then((formData) => {
      document.body.innerHTML = formData["id"];
    })
    .catch((error) => {
      alert("Error!!");
      document.body.innerHTML = error.message;
    });
}
