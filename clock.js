document.addEventListener('DOMContentLoaded', function () {
    if (Notification.permission !== "granted")
        Notification.requestPermission();
    var loop = setInterval(clock.tick(), 1000);
});
window.addEventListener('beforeunload', function(e) {
    if(!br)
        var returnValue = 'Are you really done with your work?';
});
var clock = (function () {
    var txt = "First grace period";
    var m = 0;
    var s = 15;
    var r = 1;
    var ds = "00";
    var c = 0;
    var br = true;
    var start = 1;
    return {
        set: function (inM, inS) {
            m = inM; s = inS;
            return;
        },
        tick: function () {
            s--;
            clock.update();
            return;
        },
        update: function () {
            if (m === 0 && s <= 0) {
                if (r === 0) {
                    alarm(txt);
                    txt = "Grace period";
                    clock.set(0, 15);
                    r = 1;
                }
                if (start == 1) {
                    alarm(txt);
                    start = 0;
                }
                if (r == 1 && s !== 15) {
                    if (!br) {
                        if (c < 3) {
                            txt = "Short break";
                            clock.set(5, 60);
                            c++;
                        }
                        else {
                            txt = "Long break";
                            c = 0;
                            clock.set(10, 60);
                        }
                        br = true;
                    }
                    if (br && m === 0) {
                        br = false;
                        txt = "Work time";
                        clock.set(25, 60);
                    }
                    r = 0;
                }
                document.getElementById('txt').innerText = txt;
            }
            clock.format();
            document.getElementById("disp").innerText = m + ":" + ds;
            return;
        },
        format: function () {
            switch (true) {
                case (s <= 0 && m !== 0):
                    s = 60;
                    break;
                case (s <= 9):
                    ds = String("0" + s);
                    break;
                case (s >= 60):
                    ds = String("00");
                    break;
                case (s == 59):
                    m--;
                    break;
                default:
                    ds = String(s);
                    break;
            }
            return;
        }
    }
}());
function alarm(a)
{
    var stop = function () {
        document.getElementById('break').pause();
        document.getElementById('work').pause();
        document.getElementById('break').currentTime = 0;
        document.getElementById('work').currentTime = 0;
    };
    var ntxt = a + " is over";
    if (Notification.permission === "granted") {
        var note = new Notification((!br) ? "Time to take a break" : "Time to get back to work", { icon: '/tomodoro/Content/clock.png', body: ntxt });
      note.addEventListener('show', function () { setTimeout(note.close.bind(note), 5000) });
      note.addEventListener('click', stop);
      note.addEventListener('close', stop);
    }
    if (!br)
        document.getElementById('break').play();
    else
        document.getElementById('work').play();
    setTimeout(stop, 5000);
}
