document.addEventListener("DOMContentLoaded",function(){var b=!1;document.getElementById("aboutLink").addEventListener("click",function(){1==Math.floor(10*Math.random()+1)&&window.open("https://youtu.be/dQw4w9WgXcQ","_blank");b?(c.a(),b=!1):(c.show(),b=!0)},"false");var a=0;window.addEventListener("keyup",function(b){a=e(b,a)});window.addEventListener("beforeunload",function(a){if(!br&&running)return a.returnValue="Are you really done with your work?"})});
var c=function(){var b=!0;return{show:function(){b&&(document.getElementById("aboutLink").innerText="About (Click to close)");document.getElementById("disp").style.fontSize="1.5em";document.getElementById("about").innerHTML="The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals traditionally 25 minutes in length, separated by short breaks. These intervals are known as &quot;pomodoros&quot;, the plural in English of the Italian word pomodoro meaning &quot;tomato&quot;. The method is based on the idea that frequent breaks can improve mental agility.<br><ol><li>Decide on the task to be done<li>Set the pomodoro timer to n minutes (traditionally 25)<li>Work on the task until the timer rings; record with an x<li>Take a short break (3&#45;5 minutes)<li>After four pomodoros, take a longer break (15&#45;30 minutes)&quot;</ol><br>The creator and others encourage a low-tech approach, using a mechanical timer, paper and pencil. The physical act of winding up the timer confirms the user's determination to start the task; ticking externalises desire to complete the task; ringing announces a break. Flow and focus become associated with these physical stimuli.<br><br>This non physical (therefore inferior) version by Blair &quot;Rouge&quot;<br><a href=https://github.com/rougetimelord/tomodoro/ target=_blank>Source</a>"},
a:function(){b&&(document.getElementById("aboutLink").innerText="About",b=!1);document.getElementById("disp").style.fontSize="6em";document.getElementById("about").innerHTML=""}}}(),f=!0,g;
function e(b,a){b.keyCode==(1>=a?38:3>=a?40:4==a?37:5==a?39:6==a?37:7==a?39:8==a?66:9==a?65:13)?a++:a=0;if(11==a){if(1==f){var d=!1;g=setInterval(function(){document.body.style.background="url('"+(0==d?"./Content/heman.gif":"./Content/frog.png")+"') repeat right top";d=!d},2500)}0==f&&(clearInterval(g),document.body.style.background="");f=!f;a=0}return a};
