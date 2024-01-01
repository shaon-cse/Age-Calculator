function calculateAge() {
    var birthdateInput = document.getElementById('birthdate').value;
    var birthdate = new Date(birthdateInput);
    var currentDate = new Date();
  
    var ageYears = currentDate.getFullYear() - birthdate.getFullYear();
    var ageMonths = currentDate.getMonth() - birthdate.getMonth();
    var ageDays = currentDate.getDate() - birthdate.getDate();
  
    // Adjust ageMonths and ageDays based on negative values
    if (ageDays < 0) {
      var lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
      ageDays += lastMonth.getDate();
      ageMonths--;
    }
  
    if (ageMonths < 0) {
      ageMonths += 12;
      ageYears--;
    }
  
    var result = 'Your age is: ' + ageYears + ' years, ' + ageMonths + ' months, and ' + ageDays + ' days.';
    document.getElementById('result').innerHTML = result;
  }
  