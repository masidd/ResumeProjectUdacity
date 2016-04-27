


var bio={
  "name": "Mahira Siddiqi",
  "role": "Web Developer",
  "contacts":[{
     "mobile":"555-123-4567",
     "email":"mahira.siddiqi@gmail.com",
     "github":"masidd",
     "location":"New York, NY"
   }],
  "welcomeMessage":"hi",
  "biopic":"http://dreamatico.com/data_images/cat/cat-3.jpg",
  "skills":["HTML/CSS", "JavaScript"]
};

bio.display=function(){

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
  $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts[0].phone));
  $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts[0].email));
  $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts[0].github));
  $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts[0].location));

  if (bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(val) {
      $("#header").append(HTMLskills.replace("%data%",val));
    });
  }
}

bio.display();

var work = {
    "jobs":[
      {
        "employer":"IBM",
        "dates":"2000",
        "title":"Developer",
        "location":"White Plains, NY",
        "description":"Worked on various intra-departmental groupware and workflow projects, using Java, XML, Perl, CGI, Oracle 8i, Oracle Reports 6.0, Oracle Forms, PL/SQL, DHTML, and JavaScript. Used Perl with the DBI module, DHTML and JavaScript to interact with the Oracle 8i database to implement an Executive Message Board system. Added functionality to existing applications using ASP, DHTML, JavaScript, and VB."
      },
      {
        "employer":"Long Beach Medical Center",
        "dates":"2002",
        "title":"System Administrator",
        "location":"Long Beach, NY",
        "description":"Installation, configuration, and development of enterprise-wide EMR system.  As the system SME and Administrator, led training and documentation efforts for end-users."
      }
    ]
};

work.display=function(){
  for (job in work.jobs){
     if (work.jobs.hasOwnProperty(job)) {

         $("#workExperience").append(HTMLworkStart);

         var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
         var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
         $(".work-entry:last").append(formattedEmployer+formattedTitle);

         var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
         $(".work-entry:last").append(formattedLocation);

         var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
         $(".work-entry:last").append(formattedDates);

         var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
         $(".work-entry:last").append(formattedDescription);



     }
  }
}

work.display();

var projects = {
    "project":[
      {
        "title":"Portfolio Site",
        "datesWorked":"2016",
        "description":"Developed a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.",
        "images":"images/project1.png"
      },
      {
        "title":"Hometown App",
        "datesWorked":"2016",
        "description":"Developed a responsive website using breakpoints, media queries to change the layout for different devices.",
        "images":"images/project2.png"
      }
    ]
};


projects.display=function(){
   for (proj in projects.project){
      if (projects.project.hasOwnProperty(proj)) {
          $("#projects").append(HTMLprojectStart);

          var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[proj].title);
          var formattedDates = HTMLprojectDates.replace("%data%",projects.project[proj].datesWorked);
          var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[proj].description);
          var formattedImage = HTMLprojectImage.replace("%data%",projects.project[proj].images);

          $(".project-entry:last").append(formattedTitle);
          $(".project-entry:last").append(formattedDates);
          $(".project-entry:last").append(formattedDescription);
          $(".project-entry:last").append(formattedImage);

      }
   }
}

projects.display();

var education = {
  "schools":[
    {
      "name":"SUNY Stony Brook",
      "location":"Stony Brook, NY",
      "degree":"BS",
      "majors":["Information Technology"],
      "dates":"1997",
      "url":"http://www.stonybrook.edu"
    }
  ],
  "onlineCourses":[
    {
      "title":"Front End Web Development",
      "school":"Udacity",
      "dates":"2016",
      "url":"http://www.udacity.com"
    },
    {
      "title":"CSS/HTML",
      "school":"Udacity",
      "dates":"2016",
      "url":"http://www.udacity.com"
    }
  ]
};
education.display=function(){
  for (school in education.schools){
     if (education.schools.hasOwnProperty(school)) {
         $("#education").append(HTMLschoolStart);
         var formattedSchoolName=HTMLschoolName.replace("%data%",education.schools[school].name);
         var formattedLocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
         var formattedDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
         var formattedMajor=HTMLschoolMajor.replace("%data%",education.schools[school].majors);
         var formattedDates=HTMLschoolDates.replace("%data%",education.schools[school].dates);
          $(".education-entry:last").append(formattedSchoolName+formattedDegree);

          $(".education-entry:last").append(formattedDates);
          $(".education-entry:last").append(formattedMajor);
          $(".education-entry:last").append(formattedLocation);

    }
  }
  $("#education").append(HTMLonlineClasses);
    for (courses in education.onlineCourses){
      if (education.onlineCourses.hasOwnProperty(courses)) {
         $("#education").append(HTMLschoolStart);
         var formattedTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[courses].title);
         var formattedSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[courses].school);
         var formattedDates=HTMLonlineDates.replace("%data%",education.onlineCourses[courses].dates);
         var formattedURL=HTMLonlineURL.replace("%data%",education.onlineCourses[courses].url);

         $(".education-entry:last").append(formattedTitle + formattedSchool);
         $(".education-entry:last").append(formattedDates);
         $(".education-entry:last").append(formattedURL);
      }
    }
}
education.display();

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[0].phone);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts[0].email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[0].github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[0].location);
$("#footerContacts").append(formattedMobile+formattedEmail+formattedGithub+formattedLocation);

$('#mapDiv').append(googleMap);
