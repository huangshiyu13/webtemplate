$(document).ready(function(){
//Grabs url path
var url = window.location.pathname;
//Grabs current file name from URL
var url = url.substring(url.lastIndexOf('/')+1);
// now grab every link from the navigation
 
$('#navigation a').each(function(){
//Grab the current elements href tag value
var link = $(this).attr("href");
//Test if the url value and element value matches
if(url === link){
//Adds class to the current item
$(this).parent('li').addClass('active');	
}
 
});
 
});