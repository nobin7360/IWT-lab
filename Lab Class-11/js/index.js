
    var name = "NObin chandra";
    var roll = 12345;
    var year = "2nd";
    var courses = ["Operating System", "Data Structure", "Algorithm"];

    var student1 = {
      name : "Nobin Chandra",
      roll : 12345,
      year : "2nd",
      courses : ["Operating System", "Data Structure", "Algorithm"]
    };

    document.writeln(student1.name + " " + student1.roll + " " + student1.year + " " + student1.courses + "<br>");
    function Student(name, roll, year, courses){
      this.name= name;
      this.roll = roll;
      this.year = year;
      this.courses = courses;

      this.display = function(){
        document.writeln(this.name + " " + this.roll + " " + this.year + " " + this.courses + "<br>");
      }
    }

    var student2 = new Student("Abdul", 123, "2025",
      ["Operating System", "Data Structure", "Algorithm"]);
    student2.display();

    document.writeln("Favorite Course: " + student1.courses[1] + "<br><br>");
    var header = document.getElementById("header1");
    document.writeln("getElementById: " + header.innerText + "<br>");
    header.innerHTML = "<p style='color:red;'>Hello</p>";

    var text1= document.getElementsByTagName("h3");
    document.writeln("From h3: " + text1[0].innerText + "<br>");

    document.writeln("From class header2: " + document.getElementsByClassName("header2")[0].innerText + "<br>");

    var text2 = document.querySelector('.header3');
    document.writeln("QuerySelector: " + text2.innerText + "<br>");

    var text3 = document.querySelectorAll('.header3')[1];
    document.writeln("QuerySelectorAll: " + text3.innerText + "<br>");

    document.querySelector("li a").innerHTML = "newContact";