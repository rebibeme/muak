function formatDate(startDate) {
    var stringMM = [
      "January",   //0
      "February",  //1
      "March",     //2
      "April",     //3...
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var dd = startDate.getDate();
    var mm = startDate.getMonth();
    var yyyy = startDate.getFullYear();
    var hh = startDate.getHours();
    var ms = startDate.getMinutes();
    var ss = startDate.getSeconds();
  
    var stringDate =
      dd.toString().padStart(2, '0') + " "
      + stringMM[mm] + " "
      + yyyy + " "
      + hh + ":"
      + ms + ":"
      + ss;
  
    return stringDate;
    // padding number
    // 1 - 01
    // 2 - 02
    // 3 - 03
  
    // days in js
    // 0 - sun
    // 1 - monday
    // 2 - tues
    // ... etc
  
    // months in js
    // 0 - jan
    // 1 - feb
    // 2 - mac
    // ... etc
  }
  
  function getData() {
    var startDate = new Date();
  
    var formattedStartDate = formatDate(startDate);
    var line2 = "Current Time: " + formattedStartDate
    return line2;
  }
  