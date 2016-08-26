
var bio = {
    name: 'Agru ',
    role: 'Javascript Developer',
    welcomeMessege: 'Welcome! ',
    biopic: '<img class="biopic" src="images/agrupic2.jpg"> ',
    contacts: {
        mobile  :   "<span class='orange-text'>mobile:</span> <a href='tel:0123-456-7890'>0123-456-7890</a>",
        email   :   "<span class='orange-text'>email:</span><a href=mailto:agru285@gmail.com>agru285@gmail.com</a>",
        github  :   "<span class='orange-text'>github:</span> <a href='https://github.com/agrukuki/' target='_blank'>agrukuki</a>",
        location:   "Ha Noi"
    },
    skills:['King of Minecraft',' God of troll', 'Hacker']
};
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var education = {
   schools: [
    {
       name:"Trường Tiểu học Cát Linh",
       location:"Ha Noi",
       degree_dates:"[Secret]",
       url:"catlinhschool.edu.vn"
       
   }
]};

var myprojects = [
    
    {dates:"19 8 2016",title:"This is my first project!",description:"A project make by: [Owner]Agru"},
    {dates:"19 8 2016",title:"This is my second project!",description:"A project make by: [Owner]Agru"}
    
];
    var work = {
        employer:"Unknown",
        title:"Unknown",
        location:"Ha Noi",
        dates:"Unknown",
        description:"Unknown"
    };

function displayWork() {
    for (var i in bio.contacts) {
        $("#topContacts").prepend("<li>"+bio.contacts[i]+"</li>");
    }
    $("#header").append(bio.biopic);
    $("#header").append(HTMLskillsStart);
   
    for (var i in bio.skills) {
        
        $("#skills").append("<li>"+bio.skills[i]+"</li>");
        console.log(bio.skills[i]);
    }
    $("#skills").toggleClass('white-text');
    $("#topContacts").show();
    $("#projects").toggleClass('gray');
    $("#header").show();
}
 $( document ).ready(function() {
    displayWork();
    display_project();
 });

function inName(name) {
    name = name.trim().split(' ');
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toUpperCase();
    return name[0] + " " + name[1];
} 
var display_project = function () {
    
 //   $("#projects").append(projects.projects.length);
    $("#projects").append(HTMLprojectStart);
    for (var index in myprojects) {  
        console.log(myprojects[index]);
        var formattedTitle = HTMLprojectTitle.replace("%data%",myprojects[index].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%",myprojects[index].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",myprojects[index].description);
        $(".project-entry:last").append(formattedDescription);
    }
}
//$(document).click(function(loc) {
//    logClicks(loc.pageX,loc.pageY);
//});        
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);