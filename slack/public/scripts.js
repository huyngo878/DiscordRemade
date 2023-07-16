const userName = "huy";
const password = "x";

const socket = io("http://localhost:8000");

socket.on("connect", () => {
  console.log("Connected to server");
  socket.emit("connected");
});

//listening for the "nsList" event from server which give us namespace
socket.on("nsList", (nsData) => {
  console.log(nsData);
  const nameSpacesDiv = document.querySelector(".nameSpaces");
  nsData.forEach((ns) => {
    //update html with each namespace
    nameSpacesDiv.innerHTML += `<div class="namespace" ns="${ns.name}"><img src="${ns.image}"></div>`;
  });
});
