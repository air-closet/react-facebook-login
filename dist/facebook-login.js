! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("react")) : "function" == typeof define && define.amd ? define(["react"], t) : "object" == typeof exports ? exports.FacebookLogin = t(require("react")) : e.FacebookLogin = t(e.react)
}(this, function(e) {
    return function(e) {
        function t(n) {
            if (o[n]) return o[n].exports;
            var r = o[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
        }
        var o = {};
        return t.m = e, t.c = o, t.p = "", t(0)
    }([function(e, t, o) {
        e.exports = o(2)
    }, function(e, t, o) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = function() {
                function e(e, t) {
                    for (var o = 0; o < t.length; o++) {
                        var n = t[o];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, o, n) {
                    return o && e(t.prototype, o), n && e(t, n), t
                }
            }(),
            s = o(6),
            p = n(s),
            l = o(4),
            u = n(l),
            f = o(3),
            d = n(f),
            b = function(e) {
                function t() {
                    var e, o, n, i;
                    r(this, t);
                    for (var c = arguments.length, s = Array(c), p = 0; p < c; p++) s[p] = arguments[p];
                    return o = n = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), n.responseApi = function(e) {
                        window.FB.api("/me", {
                            fields: n.props.fields
                        }, function(t) {
                            Object.assign(t, e), n.props.callback(t)
                        })
                    }, n.checkLoginState = function(e) {
                        e.authResponse ? n.responseApi(e.authResponse) : n.props.callback && n.props.callback({
                            status: e.status
                        })
                    }, n.click = function() {
                        var e = n.props,
                            t = e.scope,
                            o = e.appId,
                            r = e.onClick,
                            a = e.reAuthenticate;
                        "function" == typeof r && r();
                        var i = !1;
                        try {
                            i = window.navigator && window.navigator.standalone || navigator.userAgent.match("CriOS") || navigator.userAgent.match(/mobile/i)
                        } catch (c) {}
                        var s = {
                            client_id: o,
                            redirect_uri: window.location.href,
                            state: "facebookdirect",
                            scope: t
                        };
                        a && (s.auth_type = "reauthenticate"), i ? window.location.href = "https://www.facebook.com/dialog/oauth?" + (0, d["default"])(s) : window.FB.login(n.checkLoginState, {
                            scope: t,
                            auth_type: s.auth_type
                        })
                    }, i = o, a(n, i)
                }
                return i(t, e), c(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this,
                            t = this.props,
                            o = t.appId,
                            n = t.xfbml,
                            r = t.cookie,
                            a = t.version,
                            i = t.autoLoad,
                            c = t.language,
                            s = document.getElementById("fb-root");
                        s || (s = document.createElement("div"), s.id = "fb-root", document.body.appendChild(s)),

                            function(e, t, o) {
                                var n = e.getElementsByTagName(t)[0],
                                    r = n,
                                    a = n;
                                e.getElementById(o) || (a = e.createElement(t), a.id = o, a.src = "//connect.facebook.net/" + c + "/all.js", r.parentNode.insertBefore(a, r))
                            }(document, "script", "facebook-jssdk")
                            window.FB.init({
                                version: "v" + a,
                                appId: o,
                                xfbml: n,
                                cookie: r
                            }), (i || window.location.search.includes("facebookdirect")) && window.FB.getLoginStatus(e.checkLoginState)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.cssClass,
                            o = e.size,
                            n = e.icon,
                            r = e.textButton,
                            a = "string" == typeof n;
                        return p["default"].createElement("span", null, a && p["default"].createElement("link", {
                            rel: "stylesheet",
                            href: "//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
                        }), p["default"].createElement("button", {
                            className: t + " " + o,
                            onClick: this.click
                        }, n && a && p["default"].createElement("i", {
                            className: "fa " + n
                        }), n && !a && n, r), p["default"].createElement("style", {
                            dangerouslySetInnerHTML: {
                                __html: u["default"]
                            }
                        }))
                    }
                }]), t
            }(p["default"].Component);
        b.propTypes = {
            callback: s.PropTypes.func.isRequired,
            appId: s.PropTypes.string.isRequired,
            xfbml: s.PropTypes.bool,
            cookie: s.PropTypes.bool,
            reAuthenticate: s.PropTypes.bool,
            scope: s.PropTypes.string,
            textButton: s.PropTypes.string,
            typeButton: s.PropTypes.string,
            autoLoad: s.PropTypes.bool,
            size: s.PropTypes.string,
            fields: s.PropTypes.string,
            cssClass: s.PropTypes.string,
            version: s.PropTypes.string,
            icon: s.PropTypes.any,
            language: s.PropTypes.string,
            onClick: s.PropTypes.func
        }, b.defaultProps = {
            textButton: "Login with Facebook",
            typeButton: "button",
            scope: "public_profile,email",
            xfbml: !1,
            cookie: !1,
            reAuthenticate: !1,
            size: "metro",
            fields: "name",
            cssClass: "kep-login-facebook",
            version: "2.3",
            language: "en_US"
        }, t["default"] = b
    }, function(e, t, o) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(1),
            a = n(r);
        t["default"] = a["default"]
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t["default"] = function(e) {
            var t = "";
            for (var o in e) "" !== t && (t += "&"), t += o + "=" + encodeURIComponent(e[o]);
            return t
        }
    }, function(e, t, o) {
        t = e.exports = o(5)(), t.push([e.id, ".kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}", ""]), t.locals = {
            "kep-login-facebook": "kep-login-facebook",
            small: "small",
            medium: "medium",
            metro: "metro",
            fa: "fa"
        }
    }, function(e, t) {
        e.exports = function() {
            var e = [];
            return e.toString = function() {
                for (var e = [], t = 0; t < this.length; t++) {
                    var o = this[t];
                    o[2] ? e.push("@media " + o[2] + "{" + o[1] + "}") : e.push(o[1])
                }
                return e.join("")
            }, e.i = function(t, o) {
                "string" == typeof t && (t = [
                    [null, t, ""]
                ]);
                for (var n = {}, r = 0; r < this.length; r++) {
                    var a = this[r][0];
                    "number" == typeof a && (n[a] = !0)
                }
                for (r = 0; r < t.length; r++) {
                    var i = t[r];
                    "number" == typeof i[0] && n[i[0]] || (o && !i[2] ? i[2] = o : o && (i[2] = "(" + i[2] + ") and (" + o + ")"), e.push(i))
                }
            }, e
        }
    }, function(t, o) {
        t.exports = e
    }])
});
