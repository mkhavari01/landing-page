async function promise() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

// promise()
//   .then((res) => console.log(res, "asli"))
//   .catch((err) => console.log("Err: ", err));

let r = await promise();
console.log(r);

console.log(2);
