let abc = new Array();
      let sort = () => {
        for (let j = 0; j < abc.length; j++) {
          for (let i = 0; i < abc.length - 1; i++) {
            if (abc[i] > abc[i + 1]) {
              let temp = abc[i];
              abc[i] = abc[i + 1];
              abc[i + 1] = temp;
            }
          }
        }
        show();
      };
      let add = () => {
        abc.push(Number(document.getElementById("element").value));
        show();
      };

      let show = () => {
        document.getElementById("result").innerHTML = abc;
        document.getElementById("element").value = "";
      };
      let del = () => {
        abc.pop();
        show();
      };
      let del_all = () => {
        abc = [];
        show();
      };

   

      $(document).keypress(function (e) {
        if (e.which == 13) {
          document.getElementById("aboba").click();
          document.getElementById("element").vabclue = "";
        }
      });