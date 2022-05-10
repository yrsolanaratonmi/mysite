let input = document.getElementById('input');
let blockTime = document.querySelector('.time');
let interval

blockTime.innerHTML = 0;
input.value = 0;

document.getElementById('start').addEventListener('click', () => {
    if (input.value < 0) {
        input.value = 0;
        blockTime.innerHTML = 0;
    }

    blockTime.innerHTML = input.value;
    
    clearInterval(interval);
    interval = setInterval(subtractTime, 1000);
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(interval);
});

document.getElementById('reset').addEventListener('click', () => {
    input.value = 0;
    blockTime.innerHTML = 0;
});

function subtractTime() {
    if (blockTime.innerHTML > 0) {
        blockTime.innerHTML--;
        input.value--;
        if (input.value < 0 || blockTime.innerHTML == 0) {
            input.value = 0;
            blockTime.innerHTML = 0;
            alert('Время вышло')
        }
    } else {
        clearInterval(interval);
    }
}

$(document).keypress(function (e) {
    if (e.which == 13) {
      document.getElementById("start").click();
      
    }
  });

  $(document).keypress(function (e) {
    if (e.which == 13) {
      document.getElementById("aboba").click();
      document.getElementById("element").vabclue = "";
    }
  });