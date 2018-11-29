function triangleTracker(){
      var first = parseInt(document.getElementById("first").value);
      var second = parseInt(document.getElementById("second").value);
      var third = parseInt(document.getElementById("second").value);
          if (first === second && second === third && third === first) {
            alert("Equilateral Triangle");
        }
          else if (a === b || a === c || b === c ) {
            alert("Isosceles Triangle");
        }
          else if ((a+b)<=c || (a+c)<=b || (b+c)<=a) {
            alert("THIS IS NOT A Triangle");
        }
          else if (a !== b && b !== c ) {
            alert("Scalene Triangle");
        }
      }
