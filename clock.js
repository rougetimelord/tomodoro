(function () {
    function l(a) {
        function b() { document.getElementById("break").pause(); document.getElementById("work").pause(); document.getElementById("break").currentTime = 0; document.getElementById("work").currentTime = 0 } a += " is over"; if ("granted" === Notification.permission) {
            var c = new Notification(d ? "Time to get back to work" : "Time to take a break", { icon: "/tomodoro/Content/clock.png", body: a }); c.addEventListener("show", function () { setTimeout(c.close.bind(c), 2E3) }); c.addEventListener("click", b); c.addEventListener("close",
            b)
        } h || (d ? document.getElementById("work").play() : document.getElementById("break").play(), setTimeout(b, 2E3))
    } var h = !1, e, b = 0, a = 15, g = 1, f = "00", k = 0, d = !0, c = "First grace period", m = 1; document.addEventListener("DOMContentLoaded", function () { "granted" !== Notification.permission && Notification.requestPermission(); e = document.getElementById("muteSt"); document.getElementById("mute").addEventListener("click", function () { (h = !h) ? (e.innerHTML = "Muted", e.style.marginBottom = ".65em") : (e.innerHTML = "", e.style.marginBottom = "1.75em") }) });
    window.addEventListener("beforeunload", function () { if (!d) return "Are you really done with your work?" }); (function () {
        setInterval(function () {
            a--; 0 === b && 0 >= a && (0 === g && (l(c), c = "Grace period", b = 0, a = 15, g = 1), 1 == m && (l(c), m = 0), 1 == g && 15 !== a && (d || (3 > k ? (c = "Short break", b = 5) : (c = "Long break", k = 0, b = 10), a = 60, k++, d = !0), d && 0 === b && (d = !1, c = "Work time", b = 25, a = 60), g = 0), document.getElementById("txt").innerText = c); switch (!0) {
                case 0 >= a && 0 !== b: a = 60; break; case 9 >= a: f = String("0" + a); break; case 60 <= a: f = "00"; break; case 59 == a && 0 !==
                    b: b--; f = "59"; break; default: f = String(a)
            } document.getElementById("disp").innerText = b + ":" + f
        }, 1E3)
    })()
})();