(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [83], {
        296: function(e) {
            function t(e, t, n) {
                var r, o, c, s, l;

                function i() {
                    var u = Date.now() - s;
                    u < t && u >= 0 ? r = setTimeout(i, t - u) : (r = null, n || (l = e.apply(c, o), c = o = null))
                }
                null == t && (t = 100);
                var u = function() {
                    c = this, o = arguments, s = Date.now();
                    var u = n && !r;
                    return r || (r = setTimeout(i, t)), u && (l = e.apply(c, o), c = o = null), l
                };
                return u.clear = function() {
                    r && (clearTimeout(r), r = null)
                }, u.flush = function() {
                    r && (l = e.apply(c, o), c = o = null, clearTimeout(r), r = null)
                }, u
            }
            t.debounce = t, e.exports = t
        },
        2083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            });
            var r = n(9499),
                o = n(4730),
                c = n(5804),
                s = n(7462),
                l = n(7294),
                i = n(9477),
                u = n(296),
                a = n.n(u);

            function f(e) {
                let {
                    debounce: t,
                    scroll: n,
                    polyfill: r,
                    offsetSize: o
                } = void 0 === e ? {
                    debounce: 0,
                    scroll: !1,
                    offsetSize: !1
                } : e;
                const c = r || ("undefined" === typeof window ? class {} : window.ResizeObserver);
                if (!c) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
                const [s, i] = (0, l.useState)({
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                    bottom: 0,
                    right: 0,
                    x: 0,
                    y: 0
                }), u = (0, l.useRef)({
                    element: null,
                    scrollContainers: null,
                    resizeObserver: null,
                    lastBounds: s
                }), f = t ? "number" === typeof t ? t : t.scroll : null, p = t ? "number" === typeof t ? t : t.resize : null, v = (0, l.useRef)(!1);
                (0, l.useEffect)((() => (v.current = !0, () => {
                    v.current = !1
                })));
                const [m, b, w] = (0, l.useMemo)((() => {
                    const e = () => {
                        if (!u.current.element) return;
                        const {
                            left: e,
                            top: t,
                            width: n,
                            height: r,
                            bottom: c,
                            right: s,
                            x: l,
                            y: a
                        } = u.current.element.getBoundingClientRect(), f = {
                            left: e,
                            top: t,
                            width: n,
                            height: r,
                            bottom: c,
                            right: s,
                            x: l,
                            y: a
                        };
                        u.current.element instanceof HTMLElement && o && (f.height = u.current.element.offsetHeight, f.width = u.current.element.offsetWidth), Object.freeze(f), v.current && !h(u.current.lastBounds, f) && i(u.current.lastBounds = f)
                    };
                    return [e, p ? a()(e, p) : e, f ? a()(e, f) : e]
                }), [i, o, f, p]);

                function y() {
                    u.current.scrollContainers && (u.current.scrollContainers.forEach((e => e.removeEventListener("scroll", w, !0))), u.current.scrollContainers = null), u.current.resizeObserver && (u.current.resizeObserver.disconnect(), u.current.resizeObserver = null)
                }

                function g() {
                    u.current.element && (u.current.resizeObserver = new c(w), u.current.resizeObserver.observe(u.current.element), n && u.current.scrollContainers && u.current.scrollContainers.forEach((e => e.addEventListener("scroll", w, {
                        capture: !0,
                        passive: !0
                    }))))
                }
                var E, O, C;
                return E = w, O = Boolean(n), (0, l.useEffect)((() => {
                    if (O) {
                        const e = E;
                        return window.addEventListener("scroll", e, {
                            capture: !0,
                            passive: !0
                        }), () => {
                            window.removeEventListener("scroll", e, !0)
                        }
                    }
                }), [E, O]), C = b, (0, l.useEffect)((() => {
                    const e = C;
                    return window.addEventListener("resize", e), () => {
                        window.removeEventListener("resize", e)
                    }
                }), [C]), (0, l.useEffect)((() => {
                    y(), g()
                }), [n, w, b]), (0, l.useEffect)((() => y), []), [e => {
                    e && e !== u.current.element && (y(), u.current.element = e, u.current.scrollContainers = d(e), g())
                }, s, m]
            }

            function d(e) {
                const t = [];
                if (!e || e === document.body) return t;
                const {
                    overflow: n,
                    overflowX: r,
                    overflowY: o
                } = window.getComputedStyle(e);
                return [n, r, o].some((e => "auto" === e || "scroll" === e)) && t.push(e), [...t, ...d(e.parentElement)]
            }
            const p = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
                h = (e, t) => p.every((n => e[n] === t[n]));
            n(2576), n(6525), n(3840);
            const v = {
                onClick: ["click", !1],
                onContextMenu: ["contextmenu", !1],
                onDoubleClick: ["dblclick", !1],
                onWheel: ["wheel", !0],
                onPointerDown: ["pointerdown", !0],
                onPointerUp: ["pointerup", !0],
                onPointerLeave: ["pointerleave", !0],
                onPointerMove: ["pointermove", !0],
                onPointerCancel: ["pointercancel", !0],
                onLostPointerCapture: ["lostpointercapture", !0]
            };

            function m(e) {
                const {
                    handlePointer: t
                } = (0, c.c)(e);
                return {
                    priority: 1,
                    enabled: !0,
                    compute(e, t, n) {
                        t.pointer.set(e.offsetX / t.size.width * 2 - 1, -e.offsetY / t.size.height * 2 + 1), t.raycaster.setFromCamera(t.pointer, t.camera)
                    },
                    connected: void 0,
                    handlers: Object.keys(v).reduce(((e, n) => ({ ...e,
                        [n]: t(n)
                    })), {}),
                    connect: t => {
                        var n;
                        const {
                            set: r,
                            events: o
                        } = e.getState();
                        null == o.disconnect || o.disconnect(), r((e => ({
                            events: { ...e.events,
                                connected: t
                            }
                        }))), Object.entries(null != (n = o.handlers) ? n : []).forEach((([e, n]) => {
                            const [r, o] = v[e];
                            t.addEventListener(r, n, {
                                passive: o
                            })
                        }))
                    },
                    disconnect: () => {
                        const {
                            set: t,
                            events: n
                        } = e.getState();
                        var r;
                        n.connected && (Object.entries(null != (r = n.handlers) ? r : []).forEach((([e, t]) => {
                            if (n && n.connected instanceof HTMLElement) {
                                const [r] = v[e];
                                n.connected.removeEventListener(r, t)
                            }
                        })), t((e => ({
                            events: { ...e.events,
                                connected: void 0
                            }
                        }))))
                    }
                }
            }
            const b = l.forwardRef((function({
                children: e,
                fallback: t,
                resize: n,
                style: r,
                gl: o,
                events: u = m,
                shadows: a,
                linear: d,
                flat: p,
                legacy: h,
                orthographic: v,
                frameloop: b,
                dpr: w,
                performance: y,
                raycaster: g,
                camera: E,
                onPointerMissed: O,
                onCreated: C,
                ...z
            }, P) {
                l.useMemo((() => (0, c.e)(i)), []);
                const [j, L] = f({
                    scroll: !0,
                    debounce: {
                        scroll: 50,
                        resize: 0
                    },
                    ...n
                }), S = l.useRef(null), k = l.useRef(null), [x, R] = l.useState(null);
                l.useImperativeHandle(P, (() => S.current));
                const D = (0, c.u)(O),
                    [M, T] = l.useState(!1),
                    [B, _] = l.useState(!1);
                if (M) throw M;
                if (B) throw B;
                const Z = l.useRef(null);
                return L.width > 0 && L.height > 0 && x && (Z.current || (Z.current = (0, c.a)(x)), Z.current.configure({
                    gl: o,
                    events: u,
                    shadows: a,
                    linear: d,
                    flat: p,
                    legacy: h,
                    orthographic: v,
                    frameloop: b,
                    dpr: w,
                    performance: y,
                    raycaster: g,
                    camera: E,
                    size: L,
                    onPointerMissed: (...e) => null == D.current ? void 0 : D.current(...e),
                    onCreated: e => {
                        null == e.events.connect || e.events.connect(k.current), null == C || C(e)
                    }
                }), Z.current.render(l.createElement(c.E, {
                    set: _
                }, l.createElement(l.Suspense, {
                    fallback: l.createElement(c.B, {
                        set: T
                    })
                }, e)))), (0, c.b)((() => {
                    R(S.current)
                }), []), l.useEffect((() => {
                    if (x) return () => (0, c.d)(x)
                }), [x]), l.createElement("div", (0, s.Z)({
                    ref: k,
                    style: {
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        ...r
                    }
                }, z), l.createElement("div", {
                    ref: j,
                    style: {
                        width: "100%",
                        height: "100%"
                    }
                }, l.createElement("canvas", {
                    ref: S,
                    style: {
                        display: "block"
                    }
                }, t)))
            }));

            function w({
                all: e,
                scene: t,
                camera: n
            }) {
                const r = (0, c.w)((({
                        gl: e
                    }) => e)),
                    o = (0, c.w)((({
                        camera: e
                    }) => e)),
                    s = (0, c.w)((({
                        scene: e
                    }) => e));
                return l.useLayoutEffect((() => {
                    const c = [];
                    e && (t || s).traverse((e => {
                        !1 === e.visible && (c.push(e), e.visible = !0)
                    })), r.compile(t || s, n || o);
                    const l = new i.WebGLCubeRenderTarget(128);
                    new i.CubeCamera(.01, 1e5, l).update(r, t || s), l.dispose(), c.forEach((e => e.visible = !1))
                }), []), null
            }
            var y = n(4294),
                g = n(4141),
                E = n(5893),
                O = ["children"];

            function C(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var P = (0, g.ZP)(b).withConfig({
                    displayName: "canvas__StyledCanvas",
                    componentId: "sc-x2hiwi-0"
                })([""]),
                j = function(e) {
                    var t = e.children,
                        n = (0, o.Z)(e, O);
                    (0, y.Z)((function(e) {
                        return e.dom
                    }));
                    return (0, E.jsxs)(P, z(z({}, n), {}, {
                        style: {
                            position: "fixed",
                            top: 0,
                            zIndex: -10
                        },
                        children: [(0, E.jsx)(w, {
                            all: !0
                        }), t]
                    }))
                }
        }
    }
]);