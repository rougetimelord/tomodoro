(function () {
    function h(a) {
        function b() { document.getElementById("break").pause(); document.getElementById("work").pause(); document.getElementById("break").currentTime = 0; document.getElementById("work").currentTime = 0 } a += " is over"; if ("granted" === Notification.permission) {
            var c = new Notification(d ? "Time to get back to work" : "Time to take a break", { icon: "/tomodoro/Content/clock.png", body: a }); c.addEventListener("show", function () { setTimeout(c.close.bind(c), 2E3) }); c.addEventListener("click", b); c.addEventListener("close",
            b)
        } d ? document.getElementById("work").play() : document.getElementById("break").play(); setTimeout(b, 2E3)
    } var b = 0, a = 15, f = 1, e = "00", g = 0, d = !0, c = "First grace period", k = 1; document.addEventListener("DOMContentLoaded", function () { "granted" !== Notification.permission && Notification.requestPermission() }); window.addEventListener("beforeunload", function () { if (!d) return "Are you really done with your work?" }); (function () {
        setInterval(function () {
            a--; 0 === b && 0 >= a && (0 === f && (h(c), c = "Grace period", b = 0, a = 15, f = 1), 1 == k && (h(c),
            k = 0), 1 == f && 15 !== a && (d || (3 > g ? (c = "Short break", b = 5) : (c = "Long break", g = 0, b = 10), a = 60, g++, d = !0), d && 0 === b && (d = !1, c = "Work time", b = 25, a = 60), f = 0), document.getElementById("txt").innerText = c); switch (!0) { case 0 >= a && 0 !== b: a = 60; break; case 9 >= a: e = String("0" + a); break; case 60 <= a: e = "00"; break; case 59 == a && 0 !== b: b--; e = "59"; break; default: e = String(a) } document.getElementById("disp").innerText = b + ":" + e
        }, 1E3)
    })()
})();