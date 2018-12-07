// TO BE USED FOR AUTOCOMPLETE  ----- Get first num(5) movies and map them to list. Display list as dropdown for user to choose movie. 

function loopFive(arr, callback, num = 5) {
  for (let i = 0; i < num;  i++) {
    callback(arr[i])
  }
}

export default loopFive;