const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')





  setInterval(function name () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
  }, 1000);