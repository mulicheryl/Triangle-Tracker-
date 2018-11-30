function triangleTracker() {

      var first = parseFloat(document.getElementById("first").value);
      var second = parseFloat(document.getElementById("second").value);
      var third = parseFloat(document.getElementById("third").value);
          if (first === second && second === third && third === first) {
            alert("Equilateral Triangle");
        }
          else if (first === second || first === third || second === third ) {
            alert("Isosceles Triangle");
        }
          else if ((first+second)<=third || (first+third)<=second || (second+third)<=first) {
            alert("Scalene Triangle");
        }
          else {
            alert("THIS IS NOT A Triangle");
        }

  function triangleTracker() {
    return third;
  }
      }
