async function loadJson(url) {
    let response = await Promise.reject({status:404}) // await fetch()
    if(response.status == 200) {
        return response.json();
    }
    throw new Error(err.status)
  }
  
loadJson('no-such-user.json') // (3)
  .catch(console.log); // Error: 404


/********/
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
    
  return 10;
}
      
function f() {
// ...what to write here?
// we need to call async wait() and wait to get 10
// remember, we can't use "await"
  wait().then(console.log)
}

f();