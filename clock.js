(function () {
    var mute = false;
    var m = 0;
    var s = 15;
    var r = 1;
    var ds = "00";
    var c = 0;
    var br = true;
    var txt = "First grace period";
    var start = 1;
    document.addEventListener('DOMContentLoaded', function () {
        if (Notification.permission !== "granted")
            Notification.requestPermission();
        document.getElementById('mute').addEventListener('click', function () { mute = !mute; });
    });
    window.addEventListener('beforeunload', function (e) {
        if (!br)
            return 'Are you really done with your work?';
    });
    (function () {
        var loop = setInterval(function () { tick() }, 1000);
    })();
    function tick() {
        s--;
        update();
    }
    function update() {
        if (m === 0 && s <= 0) {
            if (r === 0) {
                alarm(txt);
                txt = "Grace period";
                m = 0;
                s = 15;
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
                        m = 5;
                    }
                    else {
                        txt = 'Long break';
                        c = 0;
                        m = 10;
                    }
                    s = 60;
                    c++;
                    br = true;
                }
                if (br && m === 0) {
                    br = false;
                    txt = 'Work time';
                    m = 25;
                    s = 60;
                }
                r = 0;
            }
            document.getElementById('txt').innerText = txt;
        }
        format();
        document.getElementById('disp').innerText = m + ':' + ds;
    }
    function format() {
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
            case (s == 59 && m !== 0):
                m--;
                ds = '59';
                break;
            default:
                ds = String(s);
                break;
        }
    }
    function alarm(a) {
        var stop = function () {
            document.getElementById('break').pause();
            document.getElementById('work').pause();
            document.getElementById('break').currentTime = 0;
            document.getElementById('work').currentTime = 0;
        };
        var ntxt = a + " is over";
        if (Notification.permission === "granted") {
            var note = new Notification((!br) ? "Time to take a break" : "Time to get back to work", { icon: '/tomodoro/Content/clock.png', body: ntxt });
            note.addEventListener('show', function () { setTimeout(note.close.bind(note), 2000) });
            note.addEventListener('click', stop);
            note.addEventListener('close', stop);
        }
        if (!mute) {
            if (!br)
                document.getElementById('break').play();
            else
                document.getElementById('work').play();
            setTimeout(stop, 2000);
        }
    }
}());