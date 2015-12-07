document.addEventListener('DOMContentLoaded', function () {
    if (Notification.permission !== "granted")
        Notification.requestPermission();
    clockHook();
});
function clockHook() {
    var _disp = document.getElementById('disp'), _workA = document.getElementById('work'), _breakA = document.getElementById('break');
    var _s = 15;
    var _m = 0;
    var loop = setInterval(function () { tick(_s, _m); }, 1000);
};
var tick = function (passS, passM) {
    var _s = passS, _m = passM;
    var _ds;
    _s--;
    switch (true) {
        case (_s <= 0 && _m !== 0):
            _s = 60;
            _ds = String("00");
            break;
        case (_s <= 9):
            _ds = String("0" + _s);
            break;
        default:
            _ds = String(_s);
            break;
    }
    if (_s = 59 && _m !== 0)
        _m--;
    return { m: _m, ds: _ds, s: _s};
}