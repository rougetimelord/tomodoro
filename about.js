document.addEventListener('DOMContentLoaded', function()
{
    var shown = false;
    var link = document.getElementById('aboutLink');
    link.addEventListener('click', function () {
        var r = Math.floor((Math.random() * 10) + 1);
        switch (r) {
            case (1):
                window.open("https://youtu.be/dQw4w9WgXcQ", '_blank');
                break;
            default:
                (!shown) ? (about.show(), shown = true) : (about.hide(), shown = false);
                break;
        }
    }, 'false')
}
)
var about = (function(){
    var first = true;
    var st = "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals traditionally 25 minutes in length, separated by short breaks. These intervals are known as &quot;pomodoros&quot;, the plural in English of the Italian word pomodoro meaning &quot;tomato&quot;. The method is based on the idea that frequent breaks can improve mental agility.<br><ol><li>Decide on the task to be done<li>Set the pomodoro timer to n minutes (traditionally 25)<li>Work on the task until the timer rings; record with an x<li>Take a short break (3&#45;5 minutes)<li>After four pomodoros, take a longer break (15&#45;30 minutes)&quot;</ol><br>The creator and others encourage a low-tech approach, using a mechanical timer, paper and pencil. The physical act of winding up the timer confirms the user's determination to start the task; ticking externalises desire to complete the task; ringing announces a break. Flow and focus become associated with these physical stimuli.<br><br>This non physical (therefore inferior) version by Blair &quot;Rouge&quot;";
    return {
        show: function () {
            if (first) {
                document.getElementById('aboutLink').innerText = "About (Click to close)";
            }
            document.getElementById('disp').style.fontSize = "1.5em";
            document.getElementById('about').innerHTML = st;
        },
        hide: function () {
            if (first) {
                document.getElementById('aboutLink').innerText = "About";
                first = false;
            }
            document.getElementById('disp').style.fontSize = "6em";
            document.getElementById('about').innerHTML = "";
        }
    }
}());
window.addEventListener('keypress', function (e) { keyPress(e) })
function keyPress(event)
{
    event.charCode;
}