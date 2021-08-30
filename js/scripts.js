(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function (require, module, exports) {
        'use strict';

        dragula([
            document.getElementById('top-1'), 
            document.getElementById('top-2'), 
            document.getElementById('top-3'),
            document.getElementById('top-4'),
            document.getElementById('top-5'),
            document.getElementById('top-6'),
            document.getElementById('top-7'),
            document.getElementById('top-8'),
            document.getElementById('top-9'),
            document.getElementById('bottom')], 
            {
                accepts: function (el, target) {
                    if (target != document.getElementById('bottom')) {
                        return (target.children.length == 0)
                    } else {
                        return true
                    }
                }
            });

        dragula([sortable]);

        crossvent.add(sortable, 'click', clickHandler);

        function clickHandler(e) {
            var target = e.target;
            if (target === sortable) {
                return;
            }
            target.innerHTML += ' [click!]';

            setTimeout(function () {
                target.innerHTML = target.innerHTML.replace(/ \[click!\]/g, '');
            }, 500);
        }

        function $(id) {
            return document.getElementById(id);
        }

    }, {
        "crossvent": 3
    }],
}, {}, [1])