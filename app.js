let colleges
d3.csv("india_data.csv").then(function (data) {
    colleges = data;
    var form = d3.select("#form");
  form.on("submit", runEnter);
});
d3.csv("university.csv").then(function (data2) {
  universities = data2;
  var form = d3.select("#form");
form.on("submit", runEnter);
});
    function runEnter() {
      d3.select("tbody").html("")
      event.preventDefault();
  
      let inputValue = d3.select("#user-input").property("value");
      let filteredColleges = colleges.filter(colleges => colleges['College Name'].toLowerCase().includes(inputValue.toLowerCase()));
      let filteredColleges1 = colleges.filter(colleges => colleges['University Name'].toLowerCase().includes(inputValue.toLowerCase()));
      let filteredUniversities = universities.filter(universities => universities.University_Name.toLowerCase().includes(inputValue.toLowerCase()));
      let mylist = [];
      for (let i = 0; i < filteredColleges.length; i++) {
  
        let collegeName = filteredColleges[i]['College Name']
        let collegeState = filteredColleges[i]['College_State']
        mylist.push(collegeName);
  
        d3.select("tbody").insert("tr").html(
          "<td>" + (collegeName) + "</a>" + "</td>" +
          "<td>" + (collegeState) + "</a>" + "</td>" +
          "<td>" + ("Accredited") + "</a>" + "</td>")
      }
      for (let i = 0; i < filteredUniversities.length; i++) {
        let universityName = filteredUniversities[i]['University_Name']
        let universityState = filteredColleges1[i]['University State']
        d3.select("tbody").insert("tr").html(
          "<td>" + (universityName) + "</a>" + "</td>" +
          "<td>" + (universityState) + "</a>" + "</td>" +
          "<td>" + ("Accredited") + "</a>" + "</td>")}
    };
