function usefull () {
  console.log("usefull");
}
setTimeout(usefull, 3000);


function cancelled () {
  console.log("function cancelled");
}
let cancel = setTimeout(cancelled, 2000);

clearTimeout(cancelled);