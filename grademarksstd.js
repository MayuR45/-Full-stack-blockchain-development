function findGrade(marks) {
    switch (true) {
      case marks >= 90 && marks <= 100:
        return "S grade";
      case marks >= 80 && marks < 90:
        return "A grade";
      case marks >= 70 && marks < 80:
        return "B grade";
      case marks >= 60 && marks < 70:
        return "C grade";
      case marks >= 50 && marks < 60:
        return "D grade";
      case marks >= 40 && marks < 50:
        return "E grade";
      case marks >= 0 && marks < 40:
        return "Student has failed";
      default:
        return "Invalid marks";
    }
  }
  console.log(findGrade(95)); // prints "S grade"
  console.log(findGrade(85)); // prints "A grade"
  console.log(findGrade(75)); // prints "B grade"
  console.log(findGrade(65)); // prints "C grade"
  console.log(findGrade(55)); // prints "D grade"
  console.log(findGrade(45)); // prints "E grade"
  console.log(findGrade(35)); // prints "Student has failed"
  console.log(findGrade(105)); // prints "Invalid marks"
    