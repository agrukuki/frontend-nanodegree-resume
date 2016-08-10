var bio = {
    name: 'Agru ',
    role: 'Owner ',
    welcomeMessege: 'Welcome! ',
    biopic: '<img width="150px" height="150px" src="images/fry.jpg"> ',
    contacts: {
        mobile: '0123 456 7890',
        email:"agru285@gmail.com",
        github: "agru",
        twitter: "Unknown"
    },
    skills: ['King of Minecraft', 'God of troll', 'Hacker']
};
var education = {
   school: {
       name:"Cat Linh",
       location:"VietNam, Hanoi, Phuong Cat Linh, Quan Dong Da",
       degree_dates:"Unknown",
       url:"Unknown"
   }, 
   major: {
       //nothing in here
   },
    
};
var projects = {
    
}
var work = {
    employer:"Unknown",
    title:"Unknown",
    location:"Unknown",
    dates:"Unknown",
    description:"Unknown"
};

 $( document ).ready(function() {
      $("#header").append(HTMLskillsStart);
    for (var i in bio.skills) {
       
        $("#skills").append("<li>"+bio.skills[i]+"</li>");
        console.log(bio.skills[i]);
    }
      $("#header").append(bio.biopic);
      $("#header").show();
    });

 
