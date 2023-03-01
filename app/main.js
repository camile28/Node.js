fetch("http://localhost:3000/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
fetch("http://localhost:3000/tasks")
  .then((res) => res.json())
  .then((data) => {
    const ul = document.createElement("ul");

    data.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task.name;
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
  });
