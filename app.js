let colleges,universities,courses,fakeUniversities

d3.csv("india_data.csv").then(function (data) {
    colleges = data;
d3.csv("university.csv").then(function (data2) {
  universities = data2; 
d3.csv("unicour.csv").then(function (data) {
  courses = data;
d3.csv("fakeUniversity.csv").then(function (data) {
  fakeUniversities = data;
  var form = d3.select("#form");
form.on("submit", runEnter);
});
});
});
});
    function runEnter() {
      d3.select("tbody").html("")
      event.preventDefault();
  
      let inputValue = d3.select("#user-input").property("value");
      let filteredColleges = colleges.filter(colleges => colleges['College Name'].toLowerCase().includes(inputValue.toLowerCase()));
      let filteredColleges1 = colleges.filter(colleges => colleges['University Name'].toLowerCase().includes(inputValue.toLowerCase()));
      let filteredUniversities = universities.filter(universities => universities.University_Name.toLowerCase().includes(inputValue.toLowerCase()));
      let filteredCourses = courses.filter(courses => courses['IA Name'].toLowerCase().includes(inputValue.toLowerCase()));
      let filteredCourses1 = filteredCourses.filter(filteredCourses => filteredCourses['University_Courses_Full form'].toLowerCase());
      let filteredFakeUniversities = fakeUniversities.filter(fakeUniversities => fakeUniversities['University_Name'].toLowerCase().includes(inputValue.toLowerCase()));
      let mylist = [];
      for (let i = 0; i < filteredColleges.length; i++) {
  
        let collegeName = filteredColleges[i]['College Name']
        let collegeState = filteredColleges[i]['College_State']
        let courseName = filteredCourses1[i]['University_Courses_Full form']
        mylist.push(collegeName);
  
        d3.select("tbody").insert("tr").html(
          "<td>" + (collegeName) + "</a>" + "</td>" +
          "<td>" + (courseName) + "</a>" + "</td>" +
          "<td>" + (collegeState) + "</a>" + "</td>" +
          "<td>" + ("Accredited") + "</a>" + "</td>")
      }
      for (let i = 0; i < filteredUniversities.length; i++) {
        let universityName = filteredUniversities[i]['University_Name']
        let courseName = filteredCourses1[i]['University_Courses_Full form']
        let universityState = filteredColleges1[i]['University State']
        d3.select("tbody").insert("tr").html(
          "<td>" + (universityName) + "</a>" + "</td>" +
          "<td>" + (courseName) + "</a>" + "</td>" +
          "<td>" + (universityState) + "</a>" + "</td>" +
          "<td>" + ("Accredited") + "</a>" + "</td>")}

       for (let i = 0; i < filteredCourses1.length; i++) {
        
        let universityName = filteredCourses[i]['IA Name']
        let courseName = filteredCourses1[i]['University_Courses_Full form']
        let universityLocation = filteredCourses[i]['Location']
        d3.select("tbody").insert("tr").html(
          "<td>" + (universityName) + "</a>" + "</td>" +
          "<td>" + (courseName) + "</a>" + "</td>" +
          "<td>" + (universityLocation) + "</a>" + "</td>" +
          "<td>" + ("Accredited") + "</a>" + "</td>")}

        for (let i = 0; i < filteredFakeUniversities.length; i++) {
      
          let universityName = filteredFakeUniversities[i]['University_Name']
          let universityLocation = filteredFakeUniversities[i]['University_City']
          d3.select("tbody").insert("tr").html(
            "<td>" + (universityName) + "</a>" + "</td>" +
            "<td>" + ("N.A") + "</a>" + "</td>" +
            "<td>" + (universityLocation) + "</a>" + "</td>" +
            "<td>" + (" Non-Accredited") + "</a>" + "</td>")}
    };
