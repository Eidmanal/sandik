fetch("http://localhost:3000/load-files")
.then(res => res.text())
.then(data => console.log(data));