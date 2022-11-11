(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [18], {
        1314: function(t, e, r) {
            "use strict";
            r.d(e, {
                He: function() {
                    return l
                },
                Ld: function() {
                    return x
                },
                eC: function() {
                    return h
                },
                f3: function() {
                    return a
                },
                iG: function() {
                    return c
                },
                rS: function() {
                    return f
                },
                sb: function() {
                    return g
                },
                ys: function() {
                    return s
                }
            });
            var n = r(1132),
                i = r(7294);
            const o = Symbol.for("Animated:node"),
                s = t => t && t[o],
                a = (t, e) => (0, n.dE)(t, o, e),
                l = t => t && t[o] && t[o].getPayload();
            class u {
                constructor() {
                    this.payload = void 0, a(this, this)
                }
                getPayload() {
                    return this.payload || []
                }
            }
            class c extends u {
                constructor(t) {
                    super(), this.done = !0, this.elapsedTime = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.v0 = void 0, this.durationProgress = 0, this._value = t, n.is.num(this._value) && (this.lastPosition = this._value)
                }
                static create(t) {
                    return new c(t)
                }
                getPayload() {
                    return [this]
                }
                getValue() {
                    return this._value
                }
                setValue(t, e) {
                    return n.is.num(t) && (this.lastPosition = t, e && (t = Math.round(t / e) * e, this.done && (this.lastPosition = t))), this._value !== t && (this._value = t, !0)
                }
                reset() {
                    const {
                        done: t
                    } = this;
                    this.done = !1, n.is.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, t && (this.lastVelocity = null), this.v0 = null)
                }
            }
            class h extends c {
                constructor(t) {
                    super(0), this._string = null, this._toString = void 0, this._toString = (0, n.mD)({
                        output: [t, t]
                    })
                }
                static create(t) {
                    return new h(t)
                }
                getValue() {
                    let t = this._string;
                    return null == t ? this._string = this._toString(this._value) : t
                }
                setValue(t) {
                    if (n.is.str(t)) {
                        if (t == this._string) return !1;
                        this._string = t, this._value = 1
                    } else {
                        if (!super.setValue(t)) return !1;
                        this._string = null
                    }
                    return !0
                }
                reset(t) {
                    t && (this._toString = (0, n.mD)({
                        output: [this.getValue(), t]
                    })), this._value = 0, super.reset()
                }
            }
            const d = {
                dependencies: null
            };
            class f extends u {
                constructor(t) {
                    super(), this.source = t, this.setValue(t)
                }
                getValue(t) {
                    const e = {};
                    return (0, n.rU)(this.source, ((r, i) => {
                        var s;
                        (s = r) && s[o] === s ? e[i] = r.getValue(t) : (0, n.j$)(r) ? e[i] = (0, n.je)(r) : t || (e[i] = r)
                    })), e
                }
                setValue(t) {
                    this.source = t, this.payload = this._makePayload(t)
                }
                reset() {
                    this.payload && (0, n.S6)(this.payload, (t => t.reset()))
                }
                _makePayload(t) {
                    if (t) {
                        const e = new Set;
                        return (0, n.rU)(t, this._addToPayload, e), Array.from(e)
                    }
                }
                _addToPayload(t) {
                    d.dependencies && (0, n.j$)(t) && d.dependencies.add(t);
                    const e = l(t);
                    e && (0, n.S6)(e, (t => this.add(t)))
                }
            }
            class p extends f {
                constructor(t) {
                    super(t)
                }
                static create(t) {
                    return new p(t)
                }
                getValue() {
                    return this.source.map((t => t.getValue()))
                }
                setValue(t) {
                    const e = this.getPayload();
                    return t.length == e.length ? e.map(((e, r) => e.setValue(t[r]))).some(Boolean) : (super.setValue(t.map(m)), !0)
                }
            }

            function m(t) {
                return ((0, n.Df)(t) ? h : c).create(t)
            }

            function g(t) {
                const e = s(t);
                return e ? e.constructor : n.is.arr(t) ? p : (0, n.Df)(t) ? h : c
            }

            function v() {
                return v = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, v.apply(this, arguments)
            }
            const y = (t, e) => {
                const r = !n.is.fun(t) || t.prototype && t.prototype.isReactComponent;
                return (0, i.forwardRef)(((o, s) => {
                    const a = (0, i.useRef)(null),
                        l = r && (0, i.useCallback)((t => {
                            a.current = function(t, e) {
                                t && (n.is.fun(t) ? t(e) : t.current = e);
                                return e
                            }(s, t)
                        }), [s]),
                        [u, c] = function(t, e) {
                            const r = new Set;
                            d.dependencies = r, t.style && (t = v({}, t, {
                                style: e.createAnimatedStyle(t.style)
                            }));
                            return t = new f(t), d.dependencies = null, [t, r]
                        }(o, e),
                        h = (0, n.NW)(),
                        p = () => {
                            const t = a.current;
                            if (r && !t) return;
                            !1 === (!!t && e.applyAnimatedValues(t, u.getValue(!0))) && h()
                        },
                        m = new b(p, c),
                        g = (0, i.useRef)();
                    (0, n.LI)((() => (g.current = m, (0, n.S6)(c, (t => (0, n.UI)(t, m))), () => {
                        g.current && ((0, n.S6)(g.current.deps, (t => (0, n.iL)(t, g.current))), n.Wn.cancel(g.current.update))
                    }))), (0, i.useEffect)(p, []), (0, n.tf)((() => () => {
                        const t = g.current;
                        (0, n.S6)(t.deps, (e => (0, n.iL)(e, t)))
                    }));
                    const y = e.getComponentProps(u.getValue());
                    return i.createElement(t, v({}, y, {
                        ref: l
                    }))
                }))
            };
            class b {
                constructor(t, e) {
                    this.update = t, this.deps = e
                }
                eventObserved(t) {
                    "change" == t.type && n.Wn.write(this.update)
                }
            }
            const w = Symbol.for("AnimatedComponent"),
                x = (t, {
                    applyAnimatedValues: e = (() => !1),
                    createAnimatedStyle: r = (t => new f(t)),
                    getComponentProps: i = (t => t)
                } = {}) => {
                    const o = {
                            applyAnimatedValues: e,
                            createAnimatedStyle: r,
                            getComponentProps: i
                        },
                        s = t => {
                            const e = S(t) || "Anonymous";
                            return (t = n.is.str(t) ? s[t] || (s[t] = y(t, o)) : t[w] || (t[w] = y(t, o))).displayName = `Animated(${e})`, t
                        };
                    return (0, n.rU)(t, ((e, r) => {
                        n.is.arr(t) && (r = S(e)), s[r] = s(e)
                    })), {
                        animated: s
                    }
                },
                S = t => n.is.str(t) ? t : t && n.is.str(t.displayName) ? t.displayName : n.is.fun(t) && t.name || null
        },
        4928: function(t, e, r) {
            "use strict";
            r.d(e, {
                Globals: function() {
                    return n.OH
                },
                useSpring: function() {
                    return Tt
                }
            });
            var n = r(1132),
                i = r(7294),
                o = r(1314);

            function s() {
                return s = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, s.apply(this, arguments)
            }

            function a(t, ...e) {
                return n.is.fun(t) ? t(...e) : t
            }
            const l = (t, e) => !0 === t || !!(e && t && (n.is.fun(t) ? t(e) : (0, n.qo)(t).includes(e))),
                u = (t, e) => n.is.obj(t) ? e && t[e] : t,
                c = (t, e) => !0 === t.default ? t[e] : t.default ? t.default[e] : void 0,
                h = t => t,
                d = (t, e = h) => {
                    let r = f;
                    t.default && !0 !== t.default && (t = t.default, r = Object.keys(t));
                    const i = {};
                    for (const o of r) {
                        const r = e(t[o], o);
                        n.is.und(r) || (i[o] = r)
                    }
                    return i
                },
                f = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
                p = {
                    config: 1,
                    from: 1,
                    to: 1,
                    ref: 1,
                    loop: 1,
                    reset: 1,
                    pause: 1,
                    cancel: 1,
                    reverse: 1,
                    immediate: 1,
                    default: 1,
                    delay: 1,
                    onProps: 1,
                    onStart: 1,
                    onChange: 1,
                    onPause: 1,
                    onResume: 1,
                    onRest: 1,
                    onResolve: 1,
                    items: 1,
                    trail: 1,
                    sort: 1,
                    expires: 1,
                    initial: 1,
                    enter: 1,
                    update: 1,
                    leave: 1,
                    children: 1,
                    onDestroyed: 1,
                    keys: 1,
                    callId: 1,
                    parentId: 1
                };

            function m(t) {
                const e = function(t) {
                    const e = {};
                    let r = 0;
                    if ((0, n.rU)(t, ((t, n) => {
                            p[n] || (e[n] = t, r++)
                        })), r) return e
                }(t);
                if (e) {
                    const r = {
                        to: e
                    };
                    return (0, n.rU)(t, ((t, n) => n in e || (r[n] = t))), r
                }
                return s({}, t)
            }

            function g(t) {
                return t = (0, n.je)(t), n.is.arr(t) ? t.map(g) : (0, n.Df)(t) ? n.OH.createStringInterpolator({
                    range: [0, 1],
                    output: [t, t]
                })(1) : t
            }

            function v(t) {
                for (const e in t) return !0;
                return !1
            }

            function y(t) {
                return n.is.fun(t) || n.is.arr(t) && n.is.obj(t[0])
            }

            function b(t, e) {
                var r;
                null == (r = t.ref) || r.delete(t), null == e || e.delete(t)
            }

            function w(t, e) {
                var r;
                e && t.ref !== e && (null == (r = t.ref) || r.delete(t), e.add(t), t.ref = e)
            }
            const x = 1.70158,
                S = 1.525 * x,
                T = x + 1,
                _ = 2 * Math.PI / 3,
                E = 2 * Math.PI / 4.5,
                k = t => {
                    const e = 7.5625,
                        r = 2.75;
                    return t < 1 / r ? e * t * t : t < 2 / r ? e * (t -= 1.5 / r) * t + .75 : t < 2.5 / r ? e * (t -= 2.25 / r) * t + .9375 : e * (t -= 2.625 / r) * t + .984375
                },
                A = s({}, {
                    tension: 170,
                    friction: 26
                }, {
                    mass: 1,
                    damping: 1,
                    easing: {
                        linear: t => t,
                        easeInQuad: t => t * t,
                        easeOutQuad: t => 1 - (1 - t) * (1 - t),
                        easeInOutQuad: t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
                        easeInCubic: t => t * t * t,
                        easeOutCubic: t => 1 - Math.pow(1 - t, 3),
                        easeInOutCubic: t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
                        easeInQuart: t => t * t * t * t,
                        easeOutQuart: t => 1 - Math.pow(1 - t, 4),
                        easeInOutQuart: t => t < .5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2,
                        easeInQuint: t => t * t * t * t * t,
                        easeOutQuint: t => 1 - Math.pow(1 - t, 5),
                        easeInOutQuint: t => t < .5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2,
                        easeInSine: t => 1 - Math.cos(t * Math.PI / 2),
                        easeOutSine: t => Math.sin(t * Math.PI / 2),
                        easeInOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2,
                        easeInExpo: t => 0 === t ? 0 : Math.pow(2, 10 * t - 10),
                        easeOutExpo: t => 1 === t ? 1 : 1 - Math.pow(2, -10 * t),
                        easeInOutExpo: t => 0 === t ? 0 : 1 === t ? 1 : t < .5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2,
                        easeInCirc: t => 1 - Math.sqrt(1 - Math.pow(t, 2)),
                        easeOutCirc: t => Math.sqrt(1 - Math.pow(t - 1, 2)),
                        easeInOutCirc: t => t < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2,
                        easeInBack: t => T * t * t * t - x * t * t,
                        easeOutBack: t => 1 + T * Math.pow(t - 1, 3) + x * Math.pow(t - 1, 2),
                        easeInOutBack: t => t < .5 ? Math.pow(2 * t, 2) * (7.189819 * t - S) / 2 : (Math.pow(2 * t - 2, 2) * ((S + 1) * (2 * t - 2) + S) + 2) / 2,
                        easeInElastic: t => 0 === t ? 0 : 1 === t ? 1 : -Math.pow(2, 10 * t - 10) * Math.sin((10 * t - 10.75) * _),
                        easeOutElastic: t => 0 === t ? 0 : 1 === t ? 1 : Math.pow(2, -10 * t) * Math.sin((10 * t - .75) * _) + 1,
                        easeInOutElastic: t => 0 === t ? 0 : 1 === t ? 1 : t < .5 ? -Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * E) / 2 : Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * E) / 2 + 1,
                        easeInBounce: t => 1 - k(1 - t),
                        easeOutBounce: k,
                        easeInOutBounce: t => t < .5 ? (1 - k(1 - 2 * t)) / 2 : (1 + k(2 * t - 1)) / 2
                    }.linear,
                    clamp: !1
                });
            class R {
                constructor() {
                    this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, A)
                }
            }

            function C(t, e) {
                if (n.is.und(e.decay)) {
                    const r = !n.is.und(e.tension) || !n.is.und(e.friction);
                    !r && n.is.und(e.frequency) && n.is.und(e.damping) && n.is.und(e.mass) || (t.duration = void 0, t.decay = void 0), r && (t.frequency = void 0)
                } else t.duration = void 0
            }
            const O = [];
            class U {
                constructor() {
                    this.changed = !1, this.values = O, this.toValues = null, this.fromValues = O, this.to = void 0, this.from = void 0, this.config = new R, this.immediate = !1
                }
            }

            function P(t, {
                key: e,
                props: r,
                defaultProps: i,
                state: o,
                actions: u
            }) {
                return new Promise(((c, h) => {
                    var d;
                    let f, p, m = l(null != (d = r.cancel) ? d : null == i ? void 0 : i.cancel, e);
                    if (m) y();
                    else {
                        n.is.und(r.pause) || (o.paused = l(r.pause, e));
                        let t = null == i ? void 0 : i.pause;
                        !0 !== t && (t = o.paused || l(t, e)), f = a(r.delay || 0, e), t ? (o.resumeQueue.add(v), u.pause()) : (u.resume(), v())
                    }

                    function g() {
                        o.resumeQueue.add(v), o.timeouts.delete(p), p.cancel(), f = p.time - n.Wn.now()
                    }

                    function v() {
                        f > 0 && !n.OH.skipAnimation ? (o.delayed = !0, p = n.Wn.setTimeout(y, f), o.pauseQueue.add(g), o.timeouts.add(p)) : y()
                    }

                    function y() {
                        o.delayed && (o.delayed = !1), o.pauseQueue.delete(g), o.timeouts.delete(p), t <= (o.cancelId || 0) && (m = !0);
                        try {
                            u.start(s({}, r, {
                                callId: t,
                                cancel: m
                            }), c)
                        } catch (e) {
                            h(e)
                        }
                    }
                }))
            }
            const D = (t, e) => 1 == e.length ? e[0] : e.some((t => t.cancelled)) ? B(t.get()) : e.every((t => t.noop)) ? M(t.get()) : F(t.get(), e.every((t => t.finished))),
                M = t => ({
                    value: t,
                    noop: !0,
                    finished: !0,
                    cancelled: !1
                }),
                F = (t, e, r = !1) => ({
                    value: t,
                    finished: e,
                    cancelled: r
                }),
                B = t => ({
                    value: t,
                    cancelled: !0,
                    finished: !1
                });

            function L(t, e, r, i) {
                const {
                    callId: o,
                    parentId: a,
                    onRest: l
                } = e, {
                    asyncTo: u,
                    promise: c
                } = r;
                return a || t !== u || e.reset ? r.promise = (async () => {
                    r.asyncId = o, r.asyncTo = t;
                    const h = d(e, ((t, e) => "onRest" === e ? void 0 : t));
                    let f, p;
                    const m = new Promise(((t, e) => (f = t, p = e))),
                        g = t => {
                            const e = o <= (r.cancelId || 0) && B(i) || o !== r.asyncId && F(i, !1);
                            if (e) throw t.result = e, p(t), t
                        },
                        v = (t, e) => {
                            const a = new I,
                                l = new V;
                            return (async () => {
                                if (n.OH.skipAnimation) throw j(r), l.result = F(i, !1), p(l), l;
                                g(a);
                                const u = n.is.obj(t) ? s({}, t) : s({}, e, {
                                    to: t
                                });
                                u.parentId = o, (0, n.rU)(h, ((t, e) => {
                                    n.is.und(u[e]) && (u[e] = t)
                                }));
                                const c = await i.start(u);
                                return g(a), r.paused && await new Promise((t => {
                                    r.resumeQueue.add(t)
                                })), c
                            })()
                        };
                    let y;
                    if (n.OH.skipAnimation) return j(r), F(i, !1);
                    try {
                        let e;
                        e = n.is.arr(t) ? (async t => {
                            for (const e of t) await v(e)
                        })(t) : Promise.resolve(t(v, i.stop.bind(i))), await Promise.all([e.then(f), m]), y = F(i.get(), !0, !1)
                    } catch (b) {
                        if (b instanceof I) y = b.result;
                        else {
                            if (!(b instanceof V)) throw b;
                            y = b.result
                        }
                    } finally {
                        o == r.asyncId && (r.asyncId = a, r.asyncTo = a ? u : void 0, r.promise = a ? c : void 0)
                    }
                    return n.is.fun(l) && n.Wn.batchedUpdates((() => {
                        l(y, i, i.item)
                    })), y
                })() : c
            }

            function j(t, e) {
                (0, n.yl)(t.timeouts, (t => t.cancel())), t.pauseQueue.clear(), t.resumeQueue.clear(), t.asyncId = t.asyncTo = t.promise = void 0, e && (t.cancelId = e)
            }
            class I extends Error {
                constructor() {
                    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."), this.result = void 0
                }
            }
            class V extends Error {
                constructor() {
                    super("SkipAnimationSignal"), this.result = void 0
                }
            }
            const W = t => t instanceof N;
            let z = 1;
            class N extends n.B0 {
                constructor(...t) {
                    super(...t), this.id = z++, this.key = void 0, this._priority = 0
                }
                get priority() {
                    return this._priority
                }
                set priority(t) {
                    this._priority != t && (this._priority = t, this._onPriorityChange(t))
                }
                get() {
                    const t = (0, o.ys)(this);
                    return t && t.getValue()
                }
                to(...t) {
                    return n.OH.to(this, t)
                }
                interpolate(...t) {
                    return (0, n.LW)(), n.OH.to(this, t)
                }
                toJSON() {
                    return this.get()
                }
                observerAdded(t) {
                    1 == t && this._attach()
                }
                observerRemoved(t) {
                    0 == t && this._detach()
                }
                _attach() {}
                _detach() {}
                _onChange(t, e = !1) {
                    (0, n.k0)(this, {
                        type: "change",
                        parent: this,
                        value: t,
                        idle: e
                    })
                }
                _onPriorityChange(t) {
                    this.idle || n.fT.sort(this), (0, n.k0)(this, {
                        type: "priority",
                        parent: this,
                        priority: t
                    })
                }
            }
            const G = Symbol.for("SpringPhase"),
                q = t => (1 & t[G]) > 0,
                H = t => (2 & t[G]) > 0,
                Y = t => (4 & t[G]) > 0,
                X = (t, e) => e ? t[G] |= 3 : t[G] &= -3,
                $ = (t, e) => e ? t[G] |= 4 : t[G] &= -5;
            class K extends N {
                constructor(t, e) {
                    if (super(), this.key = void 0, this.animation = new U, this.queue = void 0, this.defaultProps = {}, this._state = {
                            paused: !1,
                            delayed: !1,
                            pauseQueue: new Set,
                            resumeQueue: new Set,
                            timeouts: new Set
                        }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !n.is.und(t) || !n.is.und(e)) {
                        const r = n.is.obj(t) ? s({}, t) : s({}, e, {
                            from: t
                        });
                        n.is.und(r.default) && (r.default = !0), this.start(r)
                    }
                }
                get idle() {
                    return !(H(this) || this._state.asyncTo) || Y(this)
                }
                get goal() {
                    return (0, n.je)(this.animation.to)
                }
                get velocity() {
                    const t = (0, o.ys)(this);
                    return t instanceof o.iG ? t.lastVelocity || 0 : t.getPayload().map((t => t.lastVelocity || 0))
                }
                get hasAnimated() {
                    return q(this)
                }
                get isAnimating() {
                    return H(this)
                }
                get isPaused() {
                    return Y(this)
                }
                get isDelayed() {
                    return this._state.delayed
                }
                advance(t) {
                    let e = !0,
                        r = !1;
                    const i = this.animation;
                    let {
                        config: s,
                        toValues: a
                    } = i;
                    const l = (0, o.He)(i.to);
                    !l && (0, n.j$)(i.to) && (a = (0, n.qo)((0, n.je)(i.to))), i.values.forEach(((u, c) => {
                        if (u.done) return;
                        const h = u.constructor == o.eC ? 1 : l ? l[c].lastPosition : a[c];
                        let d = i.immediate,
                            f = h;
                        if (!d) {
                            if (f = u.lastPosition, s.tension <= 0) return void(u.done = !0);
                            let e = u.elapsedTime += t;
                            const r = i.fromValues[c],
                                o = null != u.v0 ? u.v0 : u.v0 = n.is.arr(s.velocity) ? s.velocity[c] : s.velocity;
                            let a;
                            if (n.is.und(s.duration))
                                if (s.decay) {
                                    const t = !0 === s.decay ? .998 : s.decay,
                                        n = Math.exp(-(1 - t) * e);
                                    f = r + o / (1 - t) * (1 - n), d = Math.abs(u.lastPosition - f) < .1, a = o * n
                                } else {
                                    a = null == u.lastVelocity ? o : u.lastVelocity;
                                    const e = s.precision || (r == h ? .005 : Math.min(1, .001 * Math.abs(h - r))),
                                        i = s.restVelocity || e / 10,
                                        l = s.clamp ? 0 : s.bounce,
                                        c = !n.is.und(l),
                                        p = r == h ? u.v0 > 0 : r < h;
                                    let m, g = !1;
                                    const v = 1,
                                        y = Math.ceil(t / v);
                                    for (let t = 0; t < y && (m = Math.abs(a) > i, m || (d = Math.abs(h - f) <= e, !d)); ++t) {
                                        c && (g = f == h || f > h == p, g && (a = -a * l, f = h));
                                        a += (1e-6 * -s.tension * (f - h) + .001 * -s.friction * a) / s.mass * v, f += a * v
                                    }
                                }
                            else {
                                let n = 1;
                                s.duration > 0 && (this._memoizedDuration !== s.duration && (this._memoizedDuration = s.duration, u.durationProgress > 0 && (u.elapsedTime = s.duration * u.durationProgress, e = u.elapsedTime += t)), n = (s.progress || 0) + e / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, u.durationProgress = n), f = r + s.easing(n) * (h - r), a = (f - u.lastPosition) / t, d = 1 == n
                            }
                            u.lastVelocity = a, Number.isNaN(f) && (console.warn("Got NaN while animating:", this), d = !0)
                        }
                        l && !l[c].done && (d = !1), d ? u.done = !0 : e = !1, u.setValue(f, s.round) && (r = !0)
                    }));
                    const u = (0, o.ys)(this),
                        c = u.getValue();
                    if (e) {
                        const t = (0, n.je)(i.to);
                        c === t && !r || s.decay ? r && s.decay && this._onChange(c) : (u.setValue(t), this._onChange(t)), this._stop()
                    } else r && this._onChange(c)
                }
                set(t) {
                    return n.Wn.batchedUpdates((() => {
                        this._stop(), this._focus(t), this._set(t)
                    })), this
                }
                pause() {
                    this._update({
                        pause: !0
                    })
                }
                resume() {
                    this._update({
                        pause: !1
                    })
                }
                finish() {
                    if (H(this)) {
                        const {
                            to: t,
                            config: e
                        } = this.animation;
                        n.Wn.batchedUpdates((() => {
                            this._onStart(), e.decay || this._set(t, !1), this._stop()
                        }))
                    }
                    return this
                }
                update(t) {
                    return (this.queue || (this.queue = [])).push(t), this
                }
                start(t, e) {
                    let r;
                    return n.is.und(t) ? (r = this.queue || [], this.queue = []) : r = [n.is.obj(t) ? t : s({}, e, {
                        to: t
                    })], Promise.all(r.map((t => this._update(t)))).then((t => D(this, t)))
                }
                stop(t) {
                    const {
                        to: e
                    } = this.animation;
                    return this._focus(this.get()), j(this._state, t && this._lastCallId), n.Wn.batchedUpdates((() => this._stop(e, t))), this
                }
                reset() {
                    this._update({
                        reset: !0
                    })
                }
                eventObserved(t) {
                    "change" == t.type ? this._start() : "priority" == t.type && (this.priority = t.priority + 1)
                }
                _prepareNode(t) {
                    const e = this.key || "";
                    let {
                        to: r,
                        from: i
                    } = t;
                    r = n.is.obj(r) ? r[e] : r, (null == r || y(r)) && (r = void 0), i = n.is.obj(i) ? i[e] : i, null == i && (i = void 0);
                    const s = {
                        to: r,
                        from: i
                    };
                    return q(this) || (t.reverse && ([r, i] = [i, r]), i = (0, n.je)(i), n.is.und(i) ? (0, o.ys)(this) || this._set(r) : this._set(i)), s
                }
                _update(t, e) {
                    let r = s({}, t);
                    const {
                        key: i,
                        defaultProps: o
                    } = this;
                    r.default && Object.assign(o, d(r, ((t, e) => /^on/.test(e) ? u(t, i) : t))), nt(this, r, "onProps"), it(this, "onProps", r, this);
                    const a = this._prepareNode(r);
                    if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
                    const l = this._state;
                    return P(++this._lastCallId, {
                        key: i,
                        props: r,
                        defaultProps: o,
                        state: l,
                        actions: {
                            pause: () => {
                                Y(this) || ($(this, !0), (0, n.bl)(l.pauseQueue), it(this, "onPause", F(this, Z(this, this.animation.to)), this))
                            },
                            resume: () => {
                                Y(this) && ($(this, !1), H(this) && this._resume(), (0, n.bl)(l.resumeQueue), it(this, "onResume", F(this, Z(this, this.animation.to)), this))
                            },
                            start: this._merge.bind(this, a)
                        }
                    }).then((t => {
                        if (r.loop && t.finished && (!e || !t.noop)) {
                            const t = Q(r);
                            if (t) return this._update(t, !0)
                        }
                        return t
                    }))
                }
                _merge(t, e, r) {
                    if (e.cancel) return this.stop(!0), r(B(this));
                    const i = !n.is.und(t.to),
                        u = !n.is.und(t.from);
                    if (i || u) {
                        if (!(e.callId > this._lastToId)) return r(B(this));
                        this._lastToId = e.callId
                    }
                    const {
                        key: c,
                        defaultProps: h,
                        animation: d
                    } = this, {
                        to: f,
                        from: p
                    } = d;
                    let {
                        to: m = f,
                        from: v = p
                    } = t;
                    !u || i || e.default && !n.is.und(m) || (m = v), e.reverse && ([m, v] = [v, m]);
                    const b = !(0, n.Xy)(v, p);
                    b && (d.from = v), v = (0, n.je)(v);
                    const w = !(0, n.Xy)(m, f);
                    w && this._focus(m);
                    const x = y(e.to),
                        {
                            config: S
                        } = d,
                        {
                            decay: T,
                            velocity: _
                        } = S;
                    (i || u) && (S.velocity = 0), e.config && !x && function(t, e, r) {
                        r && (C(r = s({}, r), e), e = s({}, r, e)), C(t, e), Object.assign(t, e);
                        for (const n in A) null == t[n] && (t[n] = A[n]);
                        let {
                            mass: i,
                            frequency: o,
                            damping: a
                        } = t;
                        n.is.und(o) || (o < .01 && (o = .01), a < 0 && (a = 0), t.tension = Math.pow(2 * Math.PI / o, 2) * i, t.friction = 4 * Math.PI * a * i / o)
                    }(S, a(e.config, c), e.config !== h.config ? a(h.config, c) : void 0);
                    let E = (0, o.ys)(this);
                    if (!E || n.is.und(m)) return r(F(this, !0));
                    const k = n.is.und(e.reset) ? u && !e.default : !n.is.und(v) && l(e.reset, c),
                        R = k ? v : this.get(),
                        O = g(m),
                        U = n.is.num(O) || n.is.arr(O) || (0, n.Df)(O),
                        P = !x && (!U || l(h.immediate || e.immediate, c));
                    if (w) {
                        const t = (0, o.sb)(m);
                        if (t !== E.constructor) {
                            if (!P) throw Error(`Cannot animate between ${E.constructor.name} and ${t.name}, as the "to" prop suggests`);
                            E = this._set(O)
                        }
                    }
                    const D = E.constructor;
                    let j = (0, n.j$)(m),
                        I = !1;
                    if (!j) {
                        const t = k || !q(this) && b;
                        (w || t) && (I = (0, n.Xy)(g(R), O), j = !I), ((0, n.Xy)(d.immediate, P) || P) && (0, n.Xy)(S.decay, T) && (0, n.Xy)(S.velocity, _) || (j = !0)
                    }
                    if (I && H(this) && (d.changed && !k ? j = !0 : j || this._stop(f)), !x && ((j || (0, n.j$)(f)) && (d.values = E.getPayload(), d.toValues = (0, n.j$)(m) ? null : D == o.eC ? [1] : (0, n.qo)(O)), d.immediate != P && (d.immediate = P, P || k || this._set(f)), j)) {
                        const {
                            onRest: t
                        } = d;
                        (0, n.S6)(rt, (t => nt(this, e, t)));
                        const i = F(this, Z(this, f));
                        (0, n.bl)(this._pendingCalls, i), this._pendingCalls.add(r), d.changed && n.Wn.batchedUpdates((() => {
                            d.changed = !k, null == t || t(i, this), k ? a(h.onRest, i) : null == d.onStart || d.onStart(i, this)
                        }))
                    }
                    k && this._set(R), x ? r(L(e.to, e, this._state, this)) : j ? this._start() : H(this) && !w ? this._pendingCalls.add(r) : r(M(R))
                }
                _focus(t) {
                    const e = this.animation;
                    t !== e.to && ((0, n.Ll)(this) && this._detach(), e.to = t, (0, n.Ll)(this) && this._attach())
                }
                _attach() {
                    let t = 0;
                    const {
                        to: e
                    } = this.animation;
                    (0, n.j$)(e) && ((0, n.UI)(e, this), W(e) && (t = e.priority + 1)), this.priority = t
                }
                _detach() {
                    const {
                        to: t
                    } = this.animation;
                    (0, n.j$)(t) && (0, n.iL)(t, this)
                }
                _set(t, e = !0) {
                    const r = (0, n.je)(t);
                    if (!n.is.und(r)) {
                        const t = (0, o.ys)(this);
                        if (!t || !(0, n.Xy)(r, t.getValue())) {
                            const i = (0, o.sb)(r);
                            t && t.constructor == i ? t.setValue(r) : (0, o.f3)(this, i.create(r)), t && n.Wn.batchedUpdates((() => {
                                this._onChange(r, e)
                            }))
                        }
                    }
                    return (0, o.ys)(this)
                }
                _onStart() {
                    const t = this.animation;
                    t.changed || (t.changed = !0, it(this, "onStart", F(this, Z(this, t.to)), this))
                }
                _onChange(t, e) {
                    e || (this._onStart(), a(this.animation.onChange, t, this)), a(this.defaultProps.onChange, t, this), super._onChange(t, e)
                }
                _start() {
                    const t = this.animation;
                    (0, o.ys)(this).reset((0, n.je)(t.to)), t.immediate || (t.fromValues = t.values.map((t => t.lastPosition))), H(this) || (X(this, !0), Y(this) || this._resume())
                }
                _resume() {
                    n.OH.skipAnimation ? this.finish() : n.fT.start(this)
                }
                _stop(t, e) {
                    if (H(this)) {
                        X(this, !1);
                        const r = this.animation;
                        (0, n.S6)(r.values, (t => {
                            t.done = !0
                        })), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), (0, n.k0)(this, {
                            type: "idle",
                            parent: this
                        });
                        const i = e ? B(this.get()) : F(this.get(), Z(this, null != t ? t : r.to));
                        (0, n.bl)(this._pendingCalls, i), r.changed && (r.changed = !1, it(this, "onRest", i, this))
                    }
                }
            }

            function Z(t, e) {
                const r = g(e),
                    i = g(t.get());
                return (0, n.Xy)(i, r)
            }

            function Q(t, e = t.loop, r = t.to) {
                let n = a(e);
                if (n) {
                    const i = !0 !== n && m(n),
                        o = (i || t).reverse,
                        a = !i || i.reset;
                    return J(s({}, t, {
                        loop: e,
                        default: !1,
                        pause: void 0,
                        to: !o || y(r) ? r : void 0,
                        from: a ? t.from : void 0,
                        reset: a
                    }, i))
                }
            }

            function J(t) {
                const {
                    to: e,
                    from: r
                } = t = m(t), i = new Set;
                return n.is.obj(e) && et(e, i), n.is.obj(r) && et(r, i), t.keys = i.size ? Array.from(i) : null, t
            }

            function tt(t) {
                const e = J(t);
                return n.is.und(e.default) && (e.default = d(e)), e
            }

            function et(t, e) {
                (0, n.rU)(t, ((t, r) => null != t && e.add(r)))
            }
            const rt = ["onStart", "onRest", "onChange", "onPause", "onResume"];

            function nt(t, e, r) {
                t.animation[r] = e[r] !== c(e, r) ? u(e[r], t.key) : void 0
            }

            function it(t, e, ...r) {
                var n, i, o, s;
                null == (n = (i = t.animation)[e]) || n.call(i, ...r), null == (o = (s = t.defaultProps)[e]) || o.call(s, ...r)
            }
            const ot = ["onStart", "onChange", "onRest"];
            let st = 1;
            class at {
                constructor(t, e) {
                    this.id = st++, this.springs = {}, this.queue = [], this.ref = void 0, this._flush = void 0, this._initialProps = void 0, this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._item = void 0, this._state = {
                        paused: !1,
                        pauseQueue: new Set,
                        resumeQueue: new Set,
                        timeouts: new Set
                    }, this._events = {
                        onStart: new Map,
                        onChange: new Map,
                        onRest: new Map
                    }, this._onFrame = this._onFrame.bind(this), e && (this._flush = e), t && this.start(s({
                        default: !0
                    }, t))
                }
                get idle() {
                    return !this._state.asyncTo && Object.values(this.springs).every((t => t.idle && !t.isDelayed && !t.isPaused))
                }
                get item() {
                    return this._item
                }
                set item(t) {
                    this._item = t
                }
                get() {
                    const t = {};
                    return this.each(((e, r) => t[r] = e.get())), t
                }
                set(t) {
                    for (const e in t) {
                        const r = t[e];
                        n.is.und(r) || this.springs[e].set(r)
                    }
                }
                update(t) {
                    return t && this.queue.push(J(t)), this
                }
                start(t) {
                    let {
                        queue: e
                    } = this;
                    return t ? e = (0, n.qo)(t).map(J) : this.queue = [], this._flush ? this._flush(this, e) : (pt(this, e), lt(this, e))
                }
                stop(t, e) {
                    if (t !== !!t && (e = t), e) {
                        const r = this.springs;
                        (0, n.S6)((0, n.qo)(e), (e => r[e].stop(!!t)))
                    } else j(this._state, this._lastAsyncId), this.each((e => e.stop(!!t)));
                    return this
                }
                pause(t) {
                    if (n.is.und(t)) this.start({
                        pause: !0
                    });
                    else {
                        const e = this.springs;
                        (0, n.S6)((0, n.qo)(t), (t => e[t].pause()))
                    }
                    return this
                }
                resume(t) {
                    if (n.is.und(t)) this.start({
                        pause: !1
                    });
                    else {
                        const e = this.springs;
                        (0, n.S6)((0, n.qo)(t), (t => e[t].resume()))
                    }
                    return this
                }
                each(t) {
                    (0, n.rU)(this.springs, t)
                }
                _onFrame() {
                    const {
                        onStart: t,
                        onChange: e,
                        onRest: r
                    } = this._events, i = this._active.size > 0, o = this._changed.size > 0;
                    (i && !this._started || o && !this._started) && (this._started = !0, (0, n.yl)(t, (([t, e]) => {
                        e.value = this.get(), t(e, this, this._item)
                    })));
                    const s = !i && this._started,
                        a = o || s && r.size ? this.get() : null;
                    o && e.size && (0, n.yl)(e, (([t, e]) => {
                        e.value = a, t(e, this, this._item)
                    })), s && (this._started = !1, (0, n.yl)(r, (([t, e]) => {
                        e.value = a, t(e, this, this._item)
                    })))
                }
                eventObserved(t) {
                    if ("change" == t.type) this._changed.add(t.parent), t.idle || this._active.add(t.parent);
                    else {
                        if ("idle" != t.type) return;
                        this._active.delete(t.parent)
                    }
                    n.Wn.onFrame(this._onFrame)
                }
            }

            function lt(t, e) {
                return Promise.all(e.map((e => ut(t, e)))).then((e => D(t, e)))
            }
            async function ut(t, e, r) {
                const {
                    keys: i,
                    to: o,
                    from: s,
                    loop: a,
                    onRest: l,
                    onResolve: u
                } = e, h = n.is.obj(e.default) && e.default;
                a && (e.loop = !1), !1 === o && (e.to = null), !1 === s && (e.from = null);
                const d = n.is.arr(o) || n.is.fun(o) ? o : void 0;
                d ? (e.to = void 0, e.onRest = void 0, h && (h.onRest = void 0)) : (0, n.S6)(ot, (r => {
                    const i = e[r];
                    if (n.is.fun(i)) {
                        const n = t._events[r];
                        e[r] = ({
                            finished: t,
                            cancelled: e
                        }) => {
                            const r = n.get(i);
                            r ? (t || (r.finished = !1), e && (r.cancelled = !0)) : n.set(i, {
                                value: null,
                                finished: t || !1,
                                cancelled: e || !1
                            })
                        }, h && (h[r] = e[r])
                    }
                }));
                const f = t._state;
                e.pause === !f.paused ? (f.paused = e.pause, (0, n.bl)(e.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (e.pause = !0);
                const p = (i || Object.keys(t.springs)).map((r => t.springs[r].start(e))),
                    m = !0 === e.cancel || !0 === c(e, "cancel");
                (d || m && f.asyncId) && p.push(P(++t._lastAsyncId, {
                    props: e,
                    state: f,
                    actions: {
                        pause: n.ZT,
                        resume: n.ZT,
                        start(e, r) {
                            m ? (j(f, t._lastAsyncId), r(B(t))) : (e.onRest = l, r(L(d, e, f, t)))
                        }
                    }
                })), f.paused && await new Promise((t => {
                    f.resumeQueue.add(t)
                }));
                const g = D(t, await Promise.all(p));
                if (a && g.finished && (!r || !g.noop)) {
                    const r = Q(e, a, o);
                    if (r) return pt(t, [r]), ut(t, r, !0)
                }
                return u && n.Wn.batchedUpdates((() => u(g, t, t.item))), g
            }

            function ct(t, e) {
                const r = s({}, t.springs);
                return e && (0, n.S6)((0, n.qo)(e), (t => {
                    n.is.und(t.keys) && (t = J(t)), n.is.obj(t.to) || (t = s({}, t, {
                        to: void 0
                    })), ft(r, t, (t => dt(t)))
                })), ht(t, r), r
            }

            function ht(t, e) {
                (0, n.rU)(e, ((e, r) => {
                    t.springs[r] || (t.springs[r] = e, (0, n.UI)(e, t))
                }))
            }

            function dt(t, e) {
                const r = new K;
                return r.key = t, e && (0, n.UI)(r, e), r
            }

            function ft(t, e, r) {
                e.keys && (0, n.S6)(e.keys, (n => {
                    (t[n] || (t[n] = r(n)))._prepareNode(e)
                }))
            }

            function pt(t, e) {
                (0, n.S6)(e, (e => {
                    ft(t.springs, e, (e => dt(e, t)))
                }))
            }

            function mt(t, e) {
                if (null == t) return {};
                var r, n, i = {},
                    o = Object.keys(t);
                for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
                return i
            }
            const gt = ["children"],
                vt = t => {
                    let {
                        children: e
                    } = t, r = mt(t, gt);
                    const o = (0, i.useContext)(yt),
                        s = r.pause || !!o.pause,
                        a = r.immediate || !!o.immediate;
                    r = (0, n.Pr)((() => ({
                        pause: s,
                        immediate: a
                    })), [s, a]);
                    const {
                        Provider: l
                    } = yt;
                    return i.createElement(l, {
                        value: r
                    }, e)
                },
                yt = (bt = vt, wt = {}, Object.assign(bt, i.createContext(wt)), bt.Provider._context = bt, bt.Consumer._context = bt, bt);
            var bt, wt;
            vt.Provider = yt.Provider, vt.Consumer = yt.Consumer;
            const xt = () => {
                const t = [],
                    e = function(e) {
                        (0, n.ZR)();
                        const i = [];
                        return (0, n.S6)(t, ((t, o) => {
                            if (n.is.und(e)) i.push(t.start());
                            else {
                                const n = r(e, t, o);
                                n && i.push(t.start(n))
                            }
                        })), i
                    };
                e.current = t, e.add = function(e) {
                    t.includes(e) || t.push(e)
                }, e.delete = function(e) {
                    const r = t.indexOf(e);
                    ~r && t.splice(r, 1)
                }, e.pause = function() {
                    return (0, n.S6)(t, (t => t.pause(...arguments))), this
                }, e.resume = function() {
                    return (0, n.S6)(t, (t => t.resume(...arguments))), this
                }, e.set = function(e) {
                    (0, n.S6)(t, (t => t.set(e)))
                }, e.start = function(e) {
                    const r = [];
                    return (0, n.S6)(t, ((t, i) => {
                        if (n.is.und(e)) r.push(t.start());
                        else {
                            const n = this._getProps(e, t, i);
                            n && r.push(t.start(n))
                        }
                    })), r
                }, e.stop = function() {
                    return (0, n.S6)(t, (t => t.stop(...arguments))), this
                }, e.update = function(e) {
                    return (0, n.S6)(t, ((t, r) => t.update(this._getProps(e, t, r)))), this
                };
                const r = function(t, e, r) {
                    return n.is.fun(t) ? t(r, e) : t
                };
                return e._getProps = r, e
            };

            function St(t, e, r) {
                const o = n.is.fun(e) && e;
                o && !r && (r = []);
                const a = (0, i.useMemo)((() => o || 3 == arguments.length ? xt() : void 0), []),
                    l = (0, i.useRef)(0),
                    u = (0, n.NW)(),
                    c = (0, i.useMemo)((() => ({
                        ctrls: [],
                        queue: [],
                        flush(t, e) {
                            const r = ct(t, e);
                            return l.current > 0 && !c.queue.length && !Object.keys(r).some((e => !t.springs[e])) ? lt(t, e) : new Promise((n => {
                                ht(t, r), c.queue.push((() => {
                                    n(lt(t, e))
                                })), u()
                            }))
                        }
                    })), []),
                    h = (0, i.useRef)([...c.ctrls]),
                    d = [],
                    f = (0, n.zH)(t) || 0;

                function p(t, r) {
                    for (let n = t; n < r; n++) {
                        const t = h.current[n] || (h.current[n] = new at(null, c.flush)),
                            r = o ? o(n, t) : e[n];
                        r && (d[n] = tt(r))
                    }
                }(0, i.useMemo)((() => {
                    (0, n.S6)(h.current.slice(t, f), (t => {
                        b(t, a), t.stop(!0)
                    })), h.current.length = t, p(f, t)
                }), [t]), (0, i.useMemo)((() => {
                    p(0, Math.min(f, t))
                }), r);
                const m = h.current.map(((t, e) => ct(t, d[e]))),
                    g = (0, i.useContext)(vt),
                    y = (0, n.zH)(g),
                    x = g !== y && v(g);
                (0, n.LI)((() => {
                    l.current++, c.ctrls = h.current;
                    const {
                        queue: t
                    } = c;
                    t.length && (c.queue = [], (0, n.S6)(t, (t => t()))), (0, n.S6)(h.current, ((t, e) => {
                        null == a || a.add(t), x && t.start({
                            default: g
                        });
                        const r = d[e];
                        r && (w(t, r.ref), t.ref ? t.queue.push(r) : t.start(r))
                    }))
                })), (0, n.tf)((() => () => {
                    (0, n.S6)(c.ctrls, (t => t.stop(!0)))
                }));
                const S = m.map((t => s({}, t)));
                return a ? [S, a] : S
            }

            function Tt(t, e) {
                const r = n.is.fun(t),
                    [
                        [i], o
                    ] = St(1, r ? t : [t], r ? e || [] : e);
                return r || 2 == arguments.length ? [i, o] : i
            }
            let _t;
            ! function(t) {
                t.MOUNT = "mount", t.ENTER = "enter", t.UPDATE = "update", t.LEAVE = "leave"
            }(_t || (_t = {}));
            class Et extends N {
                constructor(t, e) {
                    super(), this.key = void 0, this.idle = !0, this.calc = void 0, this._active = new Set, this.source = t, this.calc = (0, n.mD)(...e);
                    const r = this._get(),
                        i = (0, o.sb)(r);
                    (0, o.f3)(this, i.create(r))
                }
                advance(t) {
                    const e = this._get(),
                        r = this.get();
                    (0, n.Xy)(e, r) || ((0, o.ys)(this).setValue(e), this._onChange(e, this.idle)), !this.idle && At(this._active) && Rt(this)
                }
                _get() {
                    const t = n.is.arr(this.source) ? this.source.map(n.je) : (0, n.qo)((0, n.je)(this.source));
                    return this.calc(...t)
                }
                _start() {
                    this.idle && !At(this._active) && (this.idle = !1, (0, n.S6)((0, o.He)(this), (t => {
                        t.done = !1
                    })), n.OH.skipAnimation ? (n.Wn.batchedUpdates((() => this.advance())), Rt(this)) : n.fT.start(this))
                }
                _attach() {
                    let t = 1;
                    (0, n.S6)((0, n.qo)(this.source), (e => {
                        (0, n.j$)(e) && (0, n.UI)(e, this), W(e) && (e.idle || this._active.add(e), t = Math.max(t, e.priority + 1))
                    })), this.priority = t, this._start()
                }
                _detach() {
                    (0, n.S6)((0, n.qo)(this.source), (t => {
                        (0, n.j$)(t) && (0, n.iL)(t, this)
                    })), this._active.clear(), Rt(this)
                }
                eventObserved(t) {
                    "change" == t.type ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : "idle" == t.type ? this._active.delete(t.parent) : "priority" == t.type && (this.priority = (0, n.qo)(this.source).reduce(((t, e) => Math.max(t, (W(e) ? e.priority : 0) + 1)), 0))
                }
            }

            function kt(t) {
                return !1 !== t.idle
            }

            function At(t) {
                return !t.size || Array.from(t).every(kt)
            }

            function Rt(t) {
                t.idle || (t.idle = !0, (0, n.S6)((0, o.He)(t), (t => {
                    t.done = !0
                })), (0, n.k0)(t, {
                    type: "idle",
                    parent: t
                }))
            }
            n.OH.assign({
                createStringInterpolator: n.qS,
                to: (t, e) => new Et(t, e)
            });
            n.fT.advance
        },
        1132: function(t, e, r) {
            "use strict";
            r.d(e, {
                B0: function() {
                    return xt
                },
                OH: function() {
                    return j
                },
                UI: function() {
                    return Tt
                },
                k0: function() {
                    return wt
                },
                O9: function() {
                    return X
                },
                mD: function() {
                    return ft
                },
                qS: function() {
                    return Ft
                },
                dE: function() {
                    return T
                },
                ZR: function() {
                    return Wt
                },
                LW: function() {
                    return It
                },
                S6: function() {
                    return k
                },
                rU: function() {
                    return A
                },
                yl: function() {
                    return C
                },
                bl: function() {
                    return O
                },
                fT: function() {
                    return N
                },
                Ll: function() {
                    return bt
                },
                je: function() {
                    return yt
                },
                j$: function() {
                    return vt
                },
                is: function() {
                    return _
                },
                Df: function() {
                    return zt
                },
                Xy: function() {
                    return E
                },
                ZT: function() {
                    return S
                },
                Wn: function() {
                    return i
                },
                iL: function() {
                    return _t
                },
                qo: function() {
                    return R
                },
                NW: function() {
                    return Gt
                },
                LI: function() {
                    return Nt
                },
                Pr: function() {
                    return qt
                },
                tf: function() {
                    return Ht
                },
                zH: function() {
                    return Xt
                }
            });
            let n = b();
            const i = t => m(t, n);
            let o = b();
            i.write = t => m(t, o);
            let s = b();
            i.onStart = t => m(t, s);
            let a = b();
            i.onFrame = t => m(t, a);
            let l = b();
            i.onFinish = t => m(t, l);
            let u = [];
            i.setTimeout = (t, e) => {
                let r = i.now() + e,
                    n = () => {
                        let t = u.findIndex((t => t.cancel == n));
                        ~t && u.splice(t, 1), f -= ~t ? 1 : 0
                    },
                    o = {
                        time: r,
                        handler: t,
                        cancel: n
                    };
                return u.splice(c(r), 0, o), f += 1, g(), o
            };
            let c = t => ~(~u.findIndex((e => e.time > t)) || ~u.length);
            i.cancel = t => {
                s.delete(t), a.delete(t), l.delete(t), n.delete(t), o.delete(t)
            }, i.sync = t => {
                p = !0, i.batchedUpdates(t), p = !1
            }, i.throttle = t => {
                let e;

                function r() {
                    try {
                        t(...e)
                    } finally {
                        e = null
                    }
                }

                function n(...t) {
                    e = t, i.onStart(r)
                }
                return n.handler = t, n.cancel = () => {
                    s.delete(r), e = null
                }, n
            };
            let h = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
            i.use = t => h = t, i.now = "undefined" != typeof performance ? () => performance.now() : Date.now, i.batchedUpdates = t => t(), i.catch = console.error, i.frameLoop = "always", i.advance = () => {
                "demand" !== i.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : y()
            };
            let d = -1,
                f = 0,
                p = !1;

            function m(t, e) {
                p ? (e.delete(t), t(0)) : (e.add(t), g())
            }

            function g() {
                d < 0 && (d = 0, "demand" !== i.frameLoop && h(v))
            }

            function v() {
                ~d && (h(v), i.batchedUpdates(y))
            }

            function y() {
                let t = d;
                d = i.now();
                let e = c(d);
                e && (w(u.splice(0, e), (t => t.handler())), f -= e), f ? (s.flush(), n.flush(t ? Math.min(64, d - t) : 16.667), a.flush(), o.flush(), l.flush()) : d = -1
            }

            function b() {
                let t = new Set,
                    e = t;
                return {
                    add(r) {
                        f += e != t || t.has(r) ? 0 : 1, t.add(r)
                    },
                    delete: r => (f -= e == t && t.has(r) ? 1 : 0, t.delete(r)),
                    flush(r) {
                        e.size && (t = new Set, f -= e.size, w(e, (e => e(r) && t.add(e))), f += t.size, e = t)
                    }
                }
            }

            function w(t, e) {
                t.forEach((t => {
                    try {
                        e(t)
                    } catch (r) {
                        i.catch(r)
                    }
                }))
            }
            var x = r(7294);

            function S() {}
            const T = (t, e, r) => Object.defineProperty(t, e, {
                    value: r,
                    writable: !0,
                    configurable: !0
                }),
                _ = {
                    arr: Array.isArray,
                    obj: t => !!t && "Object" === t.constructor.name,
                    fun: t => "function" === typeof t,
                    str: t => "string" === typeof t,
                    num: t => "number" === typeof t,
                    und: t => void 0 === t
                };

            function E(t, e) {
                if (_.arr(t)) {
                    if (!_.arr(e) || t.length !== e.length) return !1;
                    for (let r = 0; r < t.length; r++)
                        if (t[r] !== e[r]) return !1;
                    return !0
                }
                return t === e
            }
            const k = (t, e) => t.forEach(e);

            function A(t, e, r) {
                if (_.arr(t))
                    for (let n = 0; n < t.length; n++) e.call(r, t[n], `${n}`);
                else
                    for (const n in t) t.hasOwnProperty(n) && e.call(r, t[n], n)
            }
            const R = t => _.und(t) ? [] : _.arr(t) ? t : [t];

            function C(t, e) {
                if (t.size) {
                    const r = Array.from(t);
                    t.clear(), k(r, e)
                }
            }
            const O = (t, ...e) => C(t, (t => t(...e))),
                U = () => "undefined" === typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
            let P, D, M = null,
                F = !1,
                B = S;
            const L = t => {
                t.to && (D = t.to), t.now && (i.now = t.now), void 0 !== t.colors && (M = t.colors), null != t.skipAnimation && (F = t.skipAnimation), t.createStringInterpolator && (P = t.createStringInterpolator), t.requestAnimationFrame && i.use(t.requestAnimationFrame), t.batchedUpdates && (i.batchedUpdates = t.batchedUpdates), t.willAdvance && (B = t.willAdvance), t.frameLoop && (i.frameLoop = t.frameLoop)
            };
            var j = Object.freeze({
                __proto__: null,
                get createStringInterpolator() {
                    return P
                },
                get to() {
                    return D
                },
                get colors() {
                    return M
                },
                get skipAnimation() {
                    return F
                },
                get willAdvance() {
                    return B
                },
                assign: L
            });
            const I = new Set;
            let V = [],
                W = [],
                z = 0;
            const N = {
                get idle() {
                    return !I.size && !V.length
                },
                start(t) {
                    z > t.priority ? (I.add(t), i.onStart(G)) : (q(t), i(Y))
                },
                advance: Y,
                sort(t) {
                    if (z) i.onFrame((() => N.sort(t)));
                    else {
                        const e = V.indexOf(t);
                        ~e && (V.splice(e, 1), H(t))
                    }
                },
                clear() {
                    V = [], I.clear()
                }
            };

            function G() {
                I.forEach(q), I.clear(), i(Y)
            }

            function q(t) {
                V.includes(t) || H(t)
            }

            function H(t) {
                V.splice(function(t, e) {
                    const r = t.findIndex(e);
                    return r < 0 ? t.length : r
                }(V, (e => e.priority > t.priority)), 0, t)
            }

            function Y(t) {
                const e = W;
                for (let r = 0; r < V.length; r++) {
                    const n = V[r];
                    z = n.priority, n.idle || (B(n), n.advance(t), n.idle || e.push(n))
                }
                return z = 0, W = V, W.length = 0, V = e, V.length > 0
            }
            const X = {
                    transparent: 0,
                    aliceblue: 4042850303,
                    antiquewhite: 4209760255,
                    aqua: 16777215,
                    aquamarine: 2147472639,
                    azure: 4043309055,
                    beige: 4126530815,
                    bisque: 4293182719,
                    black: 255,
                    blanchedalmond: 4293643775,
                    blue: 65535,
                    blueviolet: 2318131967,
                    brown: 2771004159,
                    burlywood: 3736635391,
                    burntsienna: 3934150143,
                    cadetblue: 1604231423,
                    chartreuse: 2147418367,
                    chocolate: 3530104575,
                    coral: 4286533887,
                    cornflowerblue: 1687547391,
                    cornsilk: 4294499583,
                    crimson: 3692313855,
                    cyan: 16777215,
                    darkblue: 35839,
                    darkcyan: 9145343,
                    darkgoldenrod: 3095792639,
                    darkgray: 2846468607,
                    darkgreen: 6553855,
                    darkgrey: 2846468607,
                    darkkhaki: 3182914559,
                    darkmagenta: 2332068863,
                    darkolivegreen: 1433087999,
                    darkorange: 4287365375,
                    darkorchid: 2570243327,
                    darkred: 2332033279,
                    darksalmon: 3918953215,
                    darkseagreen: 2411499519,
                    darkslateblue: 1211993087,
                    darkslategray: 793726975,
                    darkslategrey: 793726975,
                    darkturquoise: 13554175,
                    darkviolet: 2483082239,
                    deeppink: 4279538687,
                    deepskyblue: 12582911,
                    dimgray: 1768516095,
                    dimgrey: 1768516095,
                    dodgerblue: 512819199,
                    firebrick: 2988581631,
                    floralwhite: 4294635775,
                    forestgreen: 579543807,
                    fuchsia: 4278255615,
                    gainsboro: 3705462015,
                    ghostwhite: 4177068031,
                    gold: 4292280575,
                    goldenrod: 3668254975,
                    gray: 2155905279,
                    green: 8388863,
                    greenyellow: 2919182335,
                    grey: 2155905279,
                    honeydew: 4043305215,
                    hotpink: 4285117695,
                    indianred: 3445382399,
                    indigo: 1258324735,
                    ivory: 4294963455,
                    khaki: 4041641215,
                    lavender: 3873897215,
                    lavenderblush: 4293981695,
                    lawngreen: 2096890111,
                    lemonchiffon: 4294626815,
                    lightblue: 2916673279,
                    lightcoral: 4034953471,
                    lightcyan: 3774873599,
                    lightgoldenrodyellow: 4210742015,
                    lightgray: 3553874943,
                    lightgreen: 2431553791,
                    lightgrey: 3553874943,
                    lightpink: 4290167295,
                    lightsalmon: 4288707327,
                    lightseagreen: 548580095,
                    lightskyblue: 2278488831,
                    lightslategray: 2005441023,
                    lightslategrey: 2005441023,
                    lightsteelblue: 2965692159,
                    lightyellow: 4294959359,
                    lime: 16711935,
                    limegreen: 852308735,
                    linen: 4210091775,
                    magenta: 4278255615,
                    maroon: 2147483903,
                    mediumaquamarine: 1724754687,
                    mediumblue: 52735,
                    mediumorchid: 3126187007,
                    mediumpurple: 2473647103,
                    mediumseagreen: 1018393087,
                    mediumslateblue: 2070474495,
                    mediumspringgreen: 16423679,
                    mediumturquoise: 1221709055,
                    mediumvioletred: 3340076543,
                    midnightblue: 421097727,
                    mintcream: 4127193855,
                    mistyrose: 4293190143,
                    moccasin: 4293178879,
                    navajowhite: 4292783615,
                    navy: 33023,
                    oldlace: 4260751103,
                    olive: 2155872511,
                    olivedrab: 1804477439,
                    orange: 4289003775,
                    orangered: 4282712319,
                    orchid: 3664828159,
                    palegoldenrod: 4008225535,
                    palegreen: 2566625535,
                    paleturquoise: 2951671551,
                    palevioletred: 3681588223,
                    papayawhip: 4293907967,
                    peachpuff: 4292524543,
                    peru: 3448061951,
                    pink: 4290825215,
                    plum: 3718307327,
                    powderblue: 2967529215,
                    purple: 2147516671,
                    rebeccapurple: 1714657791,
                    red: 4278190335,
                    rosybrown: 3163525119,
                    royalblue: 1097458175,
                    saddlebrown: 2336560127,
                    salmon: 4202722047,
                    sandybrown: 4104413439,
                    seagreen: 780883967,
                    seashell: 4294307583,
                    sienna: 2689740287,
                    silver: 3233857791,
                    skyblue: 2278484991,
                    slateblue: 1784335871,
                    slategray: 1887473919,
                    slategrey: 1887473919,
                    snow: 4294638335,
                    springgreen: 16744447,
                    steelblue: 1182971135,
                    tan: 3535047935,
                    teal: 8421631,
                    thistle: 3636451583,
                    tomato: 4284696575,
                    turquoise: 1088475391,
                    violet: 4001558271,
                    wheat: 4125012991,
                    white: 4294967295,
                    whitesmoke: 4126537215,
                    yellow: 4294902015,
                    yellowgreen: 2597139199
                },
                $ = "[-+]?\\d*\\.?\\d+",
                K = $ + "%";

            function Z(...t) {
                return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)"
            }
            const Q = new RegExp("rgb" + Z($, $, $)),
                J = new RegExp("rgba" + Z($, $, $, $)),
                tt = new RegExp("hsl" + Z($, K, K)),
                et = new RegExp("hsla" + Z($, K, K, $)),
                rt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                nt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                it = /^#([0-9a-fA-F]{6})$/,
                ot = /^#([0-9a-fA-F]{8})$/;

            function st(t, e, r) {
                return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
            }

            function at(t, e, r) {
                const n = r < .5 ? r * (1 + e) : r + e - r * e,
                    i = 2 * r - n,
                    o = st(i, n, t + 1 / 3),
                    s = st(i, n, t),
                    a = st(i, n, t - 1 / 3);
                return Math.round(255 * o) << 24 | Math.round(255 * s) << 16 | Math.round(255 * a) << 8
            }

            function lt(t) {
                const e = parseInt(t, 10);
                return e < 0 ? 0 : e > 255 ? 255 : e
            }

            function ut(t) {
                return (parseFloat(t) % 360 + 360) % 360 / 360
            }

            function ct(t) {
                const e = parseFloat(t);
                return e < 0 ? 0 : e > 1 ? 255 : Math.round(255 * e)
            }

            function ht(t) {
                const e = parseFloat(t);
                return e < 0 ? 0 : e > 100 ? 1 : e / 100
            }

            function dt(t) {
                let e = function(t) {
                    let e;
                    return "number" === typeof t ? t >>> 0 === t && t >= 0 && t <= 4294967295 ? t : null : (e = it.exec(t)) ? parseInt(e[1] + "ff", 16) >>> 0 : M && void 0 !== M[t] ? M[t] : (e = Q.exec(t)) ? (lt(e[1]) << 24 | lt(e[2]) << 16 | lt(e[3]) << 8 | 255) >>> 0 : (e = J.exec(t)) ? (lt(e[1]) << 24 | lt(e[2]) << 16 | lt(e[3]) << 8 | ct(e[4])) >>> 0 : (e = rt.exec(t)) ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + "ff", 16) >>> 0 : (e = ot.exec(t)) ? parseInt(e[1], 16) >>> 0 : (e = nt.exec(t)) ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + e[4] + e[4], 16) >>> 0 : (e = tt.exec(t)) ? (255 | at(ut(e[1]), ht(e[2]), ht(e[3]))) >>> 0 : (e = et.exec(t)) ? (at(ut(e[1]), ht(e[2]), ht(e[3])) | ct(e[4])) >>> 0 : null
                }(t);
                return null === e ? t : (e = e || 0, `rgba(${(4278190080&e)>>>24}, ${(16711680&e)>>>16}, ${(65280&e)>>>8}, ${(255&e)/255})`)
            }
            const ft = (t, e, r) => {
                if (_.fun(t)) return t;
                if (_.arr(t)) return ft({
                    range: t,
                    output: e,
                    extrapolate: r
                });
                if (_.str(t.output[0])) return P(t);
                const n = t,
                    i = n.output,
                    o = n.range || [0, 1],
                    s = n.extrapolateLeft || n.extrapolate || "extend",
                    a = n.extrapolateRight || n.extrapolate || "extend",
                    l = n.easing || (t => t);
                return t => {
                    const e = function(t, e) {
                        for (var r = 1; r < e.length - 1 && !(e[r] >= t); ++r);
                        return r - 1
                    }(t, o);
                    return function(t, e, r, n, i, o, s, a, l) {
                        let u = l ? l(t) : t;
                        if (u < e) {
                            if ("identity" === s) return u;
                            "clamp" === s && (u = e)
                        }
                        if (u > r) {
                            if ("identity" === a) return u;
                            "clamp" === a && (u = r)
                        }
                        if (n === i) return n;
                        if (e === r) return t <= e ? n : i;
                        e === -1 / 0 ? u = -u : r === 1 / 0 ? u -= e : u = (u - e) / (r - e);
                        u = o(u), n === -1 / 0 ? u = -u : i === 1 / 0 ? u += n : u = u * (i - n) + n;
                        return u
                    }(t, o[e], o[e + 1], i[e], i[e + 1], l, s, a, n.map)
                }
            };

            function pt() {
                return pt = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, pt.apply(this, arguments)
            }
            const mt = Symbol.for("FluidValue.get"),
                gt = Symbol.for("FluidValue.observers"),
                vt = t => Boolean(t && t[mt]),
                yt = t => t && t[mt] ? t[mt]() : t,
                bt = t => t[gt] || null;

            function wt(t, e) {
                let r = t[gt];
                r && r.forEach((t => {
                    ! function(t, e) {
                        t.eventObserved ? t.eventObserved(e) : t(e)
                    }(t, e)
                }))
            }
            class xt {
                constructor(t) {
                    if (this[mt] = void 0, this[gt] = void 0, !t && !(t = this.get)) throw Error("Unknown getter");
                    St(this, t)
                }
            }
            const St = (t, e) => Et(t, mt, e);

            function Tt(t, e) {
                if (t[mt]) {
                    let r = t[gt];
                    r || Et(t, gt, r = new Set), r.has(e) || (r.add(e), t.observerAdded && t.observerAdded(r.size, e))
                }
                return e
            }

            function _t(t, e) {
                let r = t[gt];
                if (r && r.has(e)) {
                    const n = r.size - 1;
                    n ? r.delete(e) : t[gt] = null, t.observerRemoved && t.observerRemoved(n, e)
                }
            }
            const Et = (t, e, r) => Object.defineProperty(t, e, {
                    value: r,
                    writable: !0,
                    configurable: !0
                }),
                kt = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                At = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
                Rt = new RegExp(`(${kt.source})(%|[a-z]+)`, "i"),
                Ct = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
                Ot = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
                Ut = t => {
                    const [e, r] = Pt(t);
                    if (!e || U()) return t;
                    const n = window.getComputedStyle(document.documentElement).getPropertyValue(e);
                    if (n) return n.trim();
                    if (r && r.startsWith("--")) {
                        const e = window.getComputedStyle(document.documentElement).getPropertyValue(r);
                        return e || t
                    }
                    return r && Ot.test(r) ? Ut(r) : r || t
                },
                Pt = t => {
                    const e = Ot.exec(t);
                    if (!e) return [, ];
                    const [, r, n] = e;
                    return [r, n]
                };
            let Dt;
            const Mt = (t, e, r, n, i) => `rgba(${Math.round(e)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,
                Ft = t => {
                    Dt || (Dt = M ? new RegExp(`(${Object.keys(M).join("|")})(?!\\w)`, "g") : /^\b$/);
                    const e = t.output.map((t => yt(t).replace(Ot, Ut).replace(At, dt).replace(Dt, dt))),
                        r = e.map((t => t.match(kt).map(Number))),
                        n = r[0].map(((t, e) => r.map((t => {
                            if (!(e in t)) throw Error('The arity of each "output" value must be equal');
                            return t[e]
                        })))).map((e => ft(pt({}, t, {
                            output: e
                        }))));
                    return t => {
                        var r;
                        const i = !Rt.test(e[0]) && (null == (r = e.find((t => Rt.test(t)))) ? void 0 : r.replace(kt, ""));
                        let o = 0;
                        return e[0].replace(kt, (() => `${n[o++](t)}${i||""}`)).replace(Ct, Mt)
                    }
                },
                Bt = "react-spring: ",
                Lt = t => {
                    const e = t;
                    let r = !1;
                    if ("function" != typeof e) throw new TypeError(`${Bt}once requires a function parameter`);
                    return (...t) => {
                        r || (e(...t), r = !0)
                    }
                },
                jt = Lt(console.warn);

            function It() {
                jt(`${Bt}The "interpolate" function is deprecated in v9 (use "to" instead)`)
            }
            const Vt = Lt(console.warn);

            function Wt() {
                Vt(`${Bt}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)
            }

            function zt(t) {
                return _.str(t) && ("#" == t[0] || /\d/.test(t) || !U() && Ot.test(t) || t in (M || {}))
            }
            const Nt = U() ? x.useEffect : x.useLayoutEffect;

            function Gt() {
                const t = (0, x.useState)()[1],
                    e = (() => {
                        const t = (0, x.useRef)(!1);
                        return Nt((() => (t.current = !0, () => {
                            t.current = !1
                        })), []), t
                    })();
                return () => {
                    e.current && t(Math.random())
                }
            }

            function qt(t, e) {
                const [r] = (0, x.useState)((() => ({
                    inputs: e,
                    result: t()
                }))), n = (0, x.useRef)(), i = n.current;
                let o = i;
                if (o) {
                    Boolean(e && o.inputs && function(t, e) {
                        if (t.length !== e.length) return !1;
                        for (let r = 0; r < t.length; r++)
                            if (t[r] !== e[r]) return !1;
                        return !0
                    }(e, o.inputs)) || (o = {
                        inputs: e,
                        result: t()
                    })
                } else o = r;
                return (0, x.useEffect)((() => {
                    n.current = o, i == r && (r.inputs = r.result = void 0)
                }), [o]), o.result
            }
            const Ht = t => (0, x.useEffect)(t, Yt),
                Yt = [];

            function Xt(t) {
                const e = (0, x.useRef)();
                return (0, x.useEffect)((() => {
                    e.current = t
                })), e.current
            }
        },
        1472: function(t, e, r) {
            "use strict";
            r.d(e, {
                animated: function() {
                    return T
                },
                useSpring: function() {
                    return n.useSpring
                }
            });
            var n = r(4928),
                i = r(3935),
                o = r(1132),
                s = r(1314);

            function a(t, e) {
                if (null == t) return {};
                var r, n, i = {},
                    o = Object.keys(t);
                for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
                return i
            }
            const l = ["style", "children", "scrollTop", "scrollLeft"],
                u = /^--/;

            function c(t, e) {
                return null == e || "boolean" === typeof e || "" === e ? "" : "number" !== typeof e || 0 === e || u.test(t) || d.hasOwnProperty(t) && d[t] ? ("" + e).trim() : e + "px"
            }
            const h = {};
            let d = {
                animationIterationCount: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            };
            const f = ["Webkit", "Ms", "Moz", "O"];
            d = Object.keys(d).reduce(((t, e) => (f.forEach((r => t[((t, e) => t + e.charAt(0).toUpperCase() + e.substring(1))(r, e)] = t[e])), t)), d);
            const p = ["x", "y", "z"],
                m = /^(matrix|translate|scale|rotate|skew)/,
                g = /^(translate)/,
                v = /^(rotate|skew)/,
                y = (t, e) => o.is.num(t) && 0 !== t ? t + e : t,
                b = (t, e) => o.is.arr(t) ? t.every((t => b(t, e))) : o.is.num(t) ? t === e : parseFloat(t) === e;
            class w extends s.rS {
                constructor(t) {
                    let {
                        x: e,
                        y: r,
                        z: n
                    } = t, i = a(t, p);
                    const s = [],
                        l = [];
                    (e || r || n) && (s.push([e || 0, r || 0, n || 0]), l.push((t => [`translate3d(${t.map((t=>y(t,"px"))).join(",")})`, b(t, 0)]))), (0, o.rU)(i, ((t, e) => {
                        if ("transform" === e) s.push([t || ""]), l.push((t => [t, "" === t]));
                        else if (m.test(e)) {
                            if (delete i[e], o.is.und(t)) return;
                            const r = g.test(e) ? "px" : v.test(e) ? "deg" : "";
                            s.push((0, o.qo)(t)), l.push("rotate3d" === e ? ([t, e, n, i]) => [`rotate3d(${t},${e},${n},${y(i,r)})`, b(i, 0)] : t => [`${e}(${t.map((t=>y(t,r))).join(",")})`, b(t, e.startsWith("scale") ? 1 : 0)])
                        }
                    })), s.length && (i.transform = new x(s, l)), super(i)
                }
            }
            class x extends o.B0 {
                constructor(t, e) {
                    super(), this._value = null, this.inputs = t, this.transforms = e
                }
                get() {
                    return this._value || (this._value = this._get())
                }
                _get() {
                    let t = "",
                        e = !0;
                    return (0, o.S6)(this.inputs, ((r, n) => {
                        const i = (0, o.je)(r[0]),
                            [s, a] = this.transforms[n](o.is.arr(i) ? i : r.map(o.je));
                        t += " " + s, e = e && a
                    })), e ? "none" : t
                }
                observerAdded(t) {
                    1 == t && (0, o.S6)(this.inputs, (t => (0, o.S6)(t, (t => (0, o.j$)(t) && (0, o.UI)(t, this)))))
                }
                observerRemoved(t) {
                    0 == t && (0, o.S6)(this.inputs, (t => (0, o.S6)(t, (t => (0, o.j$)(t) && (0, o.iL)(t, this)))))
                }
                eventObserved(t) {
                    "change" == t.type && (this._value = null), (0, o.k0)(this, t)
                }
            }
            const S = ["scrollTop", "scrollLeft"];
            n.Globals.assign({
                batchedUpdates: i.unstable_batchedUpdates,
                createStringInterpolator: o.qS,
                colors: o.O9
            });
            const T = (0, s.Ld)(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
                applyAnimatedValues: function(t, e) {
                    if (!t.nodeType || !t.setAttribute) return !1;
                    const r = "filter" === t.nodeName || t.parentNode && "filter" === t.parentNode.nodeName,
                        n = e,
                        {
                            style: i,
                            children: o,
                            scrollTop: s,
                            scrollLeft: d
                        } = n,
                        f = a(n, l),
                        p = Object.values(f),
                        m = Object.keys(f).map((e => r || t.hasAttribute(e) ? e : h[e] || (h[e] = e.replace(/([A-Z])/g, (t => "-" + t.toLowerCase())))));
                    void 0 !== o && (t.textContent = o);
                    for (let a in i)
                        if (i.hasOwnProperty(a)) {
                            const e = c(a, i[a]);
                            u.test(a) ? t.style.setProperty(a, e) : t.style[a] = e
                        }
                    m.forEach(((e, r) => {
                        t.setAttribute(e, p[r])
                    })), void 0 !== s && (t.scrollTop = s), void 0 !== d && (t.scrollLeft = d)
                },
                createAnimatedStyle: t => new w(t),
                getComponentProps: t => a(t, S)
            }).animated
        },
        7768: function(t, e, r) {
            "use strict";
            r.d(e, {
                r: function() {
                    return h
                }
            });
            var n = r(7462),
                i = r(7294),
                o = r(9477),
                s = r(5804);
            var a = function(t) {
                return function(e) {
                    t.forEach((function(t) {
                        "function" === typeof t ? t(e) : null != t && (t.current = e)
                    }))
                }
            };
            class l extends o.ShaderMaterial {
                constructor(t = new o.Vector2) {
                    super({
                        uniforms: {
                            inputBuffer: new o.Uniform(null),
                            depthBuffer: new o.Uniform(null),
                            resolution: new o.Uniform(new o.Vector2),
                            texelSize: new o.Uniform(new o.Vector2),
                            halfTexelSize: new o.Uniform(new o.Vector2),
                            kernel: new o.Uniform(0),
                            scale: new o.Uniform(1),
                            cameraNear: new o.Uniform(0),
                            cameraFar: new o.Uniform(1),
                            minDepthThreshold: new o.Uniform(0),
                            maxDepthThreshold: new o.Uniform(1),
                            depthScale: new o.Uniform(0),
                            depthToBlurRatioBias: new o.Uniform(.25)
                        },
                        fragmentShader: "#include <common>\n        #include <dithering_pars_fragment>      \n        uniform sampler2D inputBuffer;\n        uniform sampler2D depthBuffer;\n        uniform float cameraNear;\n        uniform float cameraFar;\n        uniform float minDepthThreshold;\n        uniform float maxDepthThreshold;\n        uniform float depthScale;\n        uniform float depthToBlurRatioBias;\n        varying vec2 vUv;\n        varying vec2 vUv0;\n        varying vec2 vUv1;\n        varying vec2 vUv2;\n        varying vec2 vUv3;\n\n        void main() {\n          float depthFactor = 0.0;\n          \n          #ifdef USE_DEPTH\n            vec4 depth = texture2D(depthBuffer, vUv);\n            depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));\n            depthFactor *= depthScale;\n            depthFactor = max(0.0, min(1.0, depthFactor + 0.25));\n          #endif\n          \n          vec4 sum = texture2D(inputBuffer, mix(vUv0, vUv, depthFactor));\n          sum += texture2D(inputBuffer, mix(vUv1, vUv, depthFactor));\n          sum += texture2D(inputBuffer, mix(vUv2, vUv, depthFactor));\n          sum += texture2D(inputBuffer, mix(vUv3, vUv, depthFactor));\n          gl_FragColor = sum * 0.25 ;\n\n          #include <dithering_fragment>\n          #include <tonemapping_fragment>\n          #include <encodings_fragment>\n        }",
                        vertexShader: "uniform vec2 texelSize;\n        uniform vec2 halfTexelSize;\n        uniform float kernel;\n        uniform float scale;\n        varying vec2 vUv;\n        varying vec2 vUv0;\n        varying vec2 vUv1;\n        varying vec2 vUv2;\n        varying vec2 vUv3;\n\n        void main() {\n          vec2 uv = position.xy * 0.5 + 0.5;\n          vUv = uv;\n\n          vec2 dUv = (texelSize * vec2(kernel) + halfTexelSize) * scale;\n          vUv0 = vec2(uv.x - dUv.x, uv.y + dUv.y);\n          vUv1 = vec2(uv.x + dUv.x, uv.y + dUv.y);\n          vUv2 = vec2(uv.x + dUv.x, uv.y - dUv.y);\n          vUv3 = vec2(uv.x - dUv.x, uv.y - dUv.y);\n\n          gl_Position = vec4(position.xy, 1.0, 1.0);\n        }",
                        blending: o.NoBlending,
                        depthWrite: !1,
                        depthTest: !1
                    }), this.toneMapped = !1, this.setTexelSize(t.x, t.y), this.kernel = new Float32Array([0, 1, 2, 2, 3])
                }
                setTexelSize(t, e) {
                    this.uniforms.texelSize.value.set(t, e), this.uniforms.halfTexelSize.value.set(t, e).multiplyScalar(.5)
                }
                setResolution(t) {
                    this.uniforms.resolution.value.copy(t)
                }
            }
            class u {
                constructor({
                    gl: t,
                    resolution: e,
                    width: r = 500,
                    height: n = 500,
                    minDepthThreshold: i = 0,
                    maxDepthThreshold: s = 1,
                    depthScale: a = 0,
                    depthToBlurRatioBias: u = .25
                }) {
                    this.renderToScreen = !1, this.renderTargetA = new o.WebGLRenderTarget(e, e, {
                        minFilter: o.LinearFilter,
                        magFilter: o.LinearFilter,
                        stencilBuffer: !1,
                        depthBuffer: !1,
                        encoding: t.outputEncoding
                    }), this.renderTargetB = this.renderTargetA.clone(), this.convolutionMaterial = new l, this.convolutionMaterial.setTexelSize(1 / r, 1 / n), this.convolutionMaterial.setResolution(new o.Vector2(r, n)), this.scene = new o.Scene, this.camera = new o.Camera, this.convolutionMaterial.uniforms.minDepthThreshold.value = i, this.convolutionMaterial.uniforms.maxDepthThreshold.value = s, this.convolutionMaterial.uniforms.depthScale.value = a, this.convolutionMaterial.uniforms.depthToBlurRatioBias.value = u, this.convolutionMaterial.defines.USE_DEPTH = a > 0;
                    const c = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),
                        h = new Float32Array([0, 0, 2, 0, 0, 2]),
                        d = new o.BufferGeometry;
                    d.setAttribute("position", new o.BufferAttribute(c, 3)), d.setAttribute("uv", new o.BufferAttribute(h, 2)), this.screen = new o.Mesh(d, this.convolutionMaterial), this.screen.frustumCulled = !1, this.scene.add(this.screen)
                }
                render(t, e, r) {
                    const n = this.scene,
                        i = this.camera,
                        o = this.renderTargetA,
                        s = this.renderTargetB;
                    let a = this.convolutionMaterial,
                        l = a.uniforms;
                    l.depthBuffer.value = e.depthTexture;
                    const u = a.kernel;
                    let c, h, d, f = e;
                    for (h = 0, d = u.length - 1; h < d; ++h) c = 0 === (1 & h) ? o : s, l.kernel.value = u[h], l.inputBuffer.value = f.texture, t.setRenderTarget(c), t.render(n, i), f = c;
                    l.kernel.value = u[h], l.inputBuffer.value = f.texture, t.setRenderTarget(this.renderToScreen ? null : r), t.render(n, i)
                }
            }
            class c extends o.MeshStandardMaterial {
                constructor(t = {}) {
                    super(t), this._tDepth = {
                        value: null
                    }, this._distortionMap = {
                        value: null
                    }, this._tDiffuse = {
                        value: null
                    }, this._tDiffuseBlur = {
                        value: null
                    }, this._textureMatrix = {
                        value: null
                    }, this._hasBlur = {
                        value: !1
                    }, this._mirror = {
                        value: 0
                    }, this._mixBlur = {
                        value: 0
                    }, this._blurStrength = {
                        value: .5
                    }, this._minDepthThreshold = {
                        value: .9
                    }, this._maxDepthThreshold = {
                        value: 1
                    }, this._depthScale = {
                        value: 0
                    }, this._depthToBlurRatioBias = {
                        value: .25
                    }, this._distortion = {
                        value: 1
                    }, this._mixContrast = {
                        value: 1
                    }, this.setValues(t)
                }
                onBeforeCompile(t) {
                    var e;
                    null != (e = t.defines) && e.USE_UV || (t.defines.USE_UV = ""), t.uniforms.hasBlur = this._hasBlur, t.uniforms.tDiffuse = this._tDiffuse, t.uniforms.tDepth = this._tDepth, t.uniforms.distortionMap = this._distortionMap, t.uniforms.tDiffuseBlur = this._tDiffuseBlur, t.uniforms.textureMatrix = this._textureMatrix, t.uniforms.mirror = this._mirror, t.uniforms.mixBlur = this._mixBlur, t.uniforms.mixStrength = this._blurStrength, t.uniforms.minDepthThreshold = this._minDepthThreshold, t.uniforms.maxDepthThreshold = this._maxDepthThreshold, t.uniforms.depthScale = this._depthScale, t.uniforms.depthToBlurRatioBias = this._depthToBlurRatioBias, t.uniforms.distortion = this._distortion, t.uniforms.mixContrast = this._mixContrast, t.vertexShader = `\n        uniform mat4 textureMatrix;\n        varying vec4 my_vUv;\n      ${t.vertexShader}`, t.vertexShader = t.vertexShader.replace("#include <project_vertex>", "#include <project_vertex>\n        my_vUv = textureMatrix * vec4( position, 1.0 );\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );"), t.fragmentShader = `\n        uniform sampler2D tDiffuse;\n        uniform sampler2D tDiffuseBlur;\n        uniform sampler2D tDepth;\n        uniform sampler2D distortionMap;\n        uniform float distortion;\n        uniform float cameraNear;\n\t\t\t  uniform float cameraFar;\n        uniform bool hasBlur;\n        uniform float mixBlur;\n        uniform float mirror;\n        uniform float mixStrength;\n        uniform float minDepthThreshold;\n        uniform float maxDepthThreshold;\n        uniform float mixContrast;\n        uniform float depthScale;\n        uniform float depthToBlurRatioBias;\n        varying vec4 my_vUv;\n        ${t.fragmentShader}`, t.fragmentShader = t.fragmentShader.replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\n\n      float distortionFactor = 0.0;\n      #ifdef USE_DISTORTION\n        distortionFactor = texture2D(distortionMap, vUv).r * distortion;\n      #endif\n\n      vec4 new_vUv = my_vUv;\n      new_vUv.x += distortionFactor;\n      new_vUv.y += distortionFactor;\n\n      vec4 base = texture2DProj(tDiffuse, new_vUv);\n      vec4 blur = texture2DProj(tDiffuseBlur, new_vUv);\n\n      vec4 merge = base;\n\n      #ifdef USE_NORMALMAP\n        vec2 normal_uv = vec2(0.0);\n        vec4 normalColor = texture2D(normalMap, vUv * normalScale);\n        vec3 my_normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );\n        vec3 coord = new_vUv.xyz / new_vUv.w;\n        normal_uv = coord.xy + coord.z * my_normal.xz * 0.05;\n        vec4 base_normal = texture2D(tDiffuse, normal_uv);\n        vec4 blur_normal = texture2D(tDiffuseBlur, normal_uv);\n        merge = base_normal;\n        blur = blur_normal;\n      #endif\n\n      float depthFactor = 0.0001;\n      float blurFactor = 0.0;\n\n      #ifdef USE_DEPTH\n        vec4 depth = texture2DProj(tDepth, new_vUv);\n        depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));\n        depthFactor *= depthScale;\n        depthFactor = max(0.0001, min(1.0, depthFactor));\n\n        #ifdef USE_BLUR\n          blur = blur * min(1.0, depthFactor + depthToBlurRatioBias);\n          merge = merge * min(1.0, depthFactor + 0.5);\n        #else\n          merge = merge * depthFactor;\n        #endif\n\n      #endif\n\n      float reflectorRoughnessFactor = roughness;\n      #ifdef USE_ROUGHNESSMAP\n        vec4 reflectorTexelRoughness = texture2D( roughnessMap, vUv );\n        reflectorRoughnessFactor *= reflectorTexelRoughness.g;\n      #endif\n\n      #ifdef USE_BLUR\n        blurFactor = min(1.0, mixBlur * reflectorRoughnessFactor);\n        merge = mix(merge, blur, blurFactor);\n      #endif\n\n      vec4 newMerge = vec4(0.0, 0.0, 0.0, 1.0);\n      newMerge.r = (merge.r - 0.5) * mixContrast + 0.5;\n      newMerge.g = (merge.g - 0.5) * mixContrast + 0.5;\n      newMerge.b = (merge.b - 0.5) * mixContrast + 0.5;\n\n      diffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + newMerge.rgb * mixStrength);\n      ")
                }
                get tDiffuse() {
                    return this._tDiffuse.value
                }
                set tDiffuse(t) {
                    this._tDiffuse.value = t
                }
                get tDepth() {
                    return this._tDepth.value
                }
                set tDepth(t) {
                    this._tDepth.value = t
                }
                get distortionMap() {
                    return this._distortionMap.value
                }
                set distortionMap(t) {
                    this._distortionMap.value = t
                }
                get tDiffuseBlur() {
                    return this._tDiffuseBlur.value
                }
                set tDiffuseBlur(t) {
                    this._tDiffuseBlur.value = t
                }
                get textureMatrix() {
                    return this._textureMatrix.value
                }
                set textureMatrix(t) {
                    this._textureMatrix.value = t
                }
                get hasBlur() {
                    return this._hasBlur.value
                }
                set hasBlur(t) {
                    this._hasBlur.value = t
                }
                get mirror() {
                    return this._mirror.value
                }
                set mirror(t) {
                    this._mirror.value = t
                }
                get mixBlur() {
                    return this._mixBlur.value
                }
                set mixBlur(t) {
                    this._mixBlur.value = t
                }
                get mixStrength() {
                    return this._blurStrength.value
                }
                set mixStrength(t) {
                    this._blurStrength.value = t
                }
                get minDepthThreshold() {
                    return this._minDepthThreshold.value
                }
                set minDepthThreshold(t) {
                    this._minDepthThreshold.value = t
                }
                get maxDepthThreshold() {
                    return this._maxDepthThreshold.value
                }
                set maxDepthThreshold(t) {
                    this._maxDepthThreshold.value = t
                }
                get depthScale() {
                    return this._depthScale.value
                }
                set depthScale(t) {
                    this._depthScale.value = t
                }
                get depthToBlurRatioBias() {
                    return this._depthToBlurRatioBias.value
                }
                set depthToBlurRatioBias(t) {
                    this._depthToBlurRatioBias.value = t
                }
                get distortion() {
                    return this._distortion.value
                }
                set distortion(t) {
                    this._distortion.value = t
                }
                get mixContrast() {
                    return this._mixContrast.value
                }
                set mixContrast(t) {
                    this._mixContrast.value = t
                }
            }(0, s.e)({
                MeshReflectorMaterial: c
            });
            const h = i.forwardRef((({
                mixBlur: t = 0,
                mixStrength: e = .5,
                resolution: r = 256,
                blur: l = [0, 0],
                args: c = [1, 1],
                minDepthThreshold: h = .9,
                maxDepthThreshold: d = 1,
                depthScale: f = 0,
                depthToBlurRatioBias: p = .25,
                mirror: m = 0,
                children: g,
                debug: v = 0,
                distortion: y = 1,
                mixContrast: b = 1,
                distortionMap: w,
                ...x
            }, S) => {
                i.useEffect((() => {
                    console.warn("Reflector has been deprecated and will be removed next major. Replace it with <MeshReflectorMaterial />!")
                }), []);
                const T = (0, s.w)((({
                        gl: t
                    }) => t)),
                    _ = (0, s.w)((({
                        camera: t
                    }) => t)),
                    E = (0, s.w)((({
                        scene: t
                    }) => t)),
                    k = (l = Array.isArray(l) ? l : [l, l])[0] + l[1] > 0,
                    A = i.useRef(null),
                    [R] = i.useState((() => new o.Plane)),
                    [C] = i.useState((() => new o.Vector3)),
                    [O] = i.useState((() => new o.Vector3)),
                    [U] = i.useState((() => new o.Vector3)),
                    [P] = i.useState((() => new o.Matrix4)),
                    [D] = i.useState((() => new o.Vector3(0, 0, -1))),
                    [M] = i.useState((() => new o.Vector4)),
                    [F] = i.useState((() => new o.Vector3)),
                    [B] = i.useState((() => new o.Vector3)),
                    [L] = i.useState((() => new o.Vector4)),
                    [j] = i.useState((() => new o.Matrix4)),
                    [I] = i.useState((() => new o.PerspectiveCamera)),
                    V = i.useCallback((() => {
                        if (O.setFromMatrixPosition(A.current.matrixWorld), U.setFromMatrixPosition(_.matrixWorld), P.extractRotation(A.current.matrixWorld), C.set(0, 0, 1), C.applyMatrix4(P), F.subVectors(O, U), F.dot(C) > 0) return;
                        F.reflect(C).negate(), F.add(O), P.extractRotation(_.matrixWorld), D.set(0, 0, -1), D.applyMatrix4(P), D.add(U), B.subVectors(O, D), B.reflect(C).negate(), B.add(O), I.position.copy(F), I.up.set(0, 1, 0), I.up.applyMatrix4(P), I.up.reflect(C), I.lookAt(B), I.far = _.far, I.updateMatrixWorld(), I.projectionMatrix.copy(_.projectionMatrix), j.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), j.multiply(I.projectionMatrix), j.multiply(I.matrixWorldInverse), j.multiply(A.current.matrixWorld), R.setFromNormalAndCoplanarPoint(C, O), R.applyMatrix4(I.matrixWorldInverse), M.set(R.normal.x, R.normal.y, R.normal.z, R.constant);
                        const t = I.projectionMatrix;
                        L.x = (Math.sign(M.x) + t.elements[8]) / t.elements[0], L.y = (Math.sign(M.y) + t.elements[9]) / t.elements[5], L.z = -1, L.w = (1 + t.elements[10]) / t.elements[14], M.multiplyScalar(2 / M.dot(L)), t.elements[2] = M.x, t.elements[6] = M.y, t.elements[10] = M.z + 1, t.elements[14] = M.w
                    }), []),
                    [W, z, N, G] = i.useMemo((() => {
                        const n = {
                                minFilter: o.LinearFilter,
                                magFilter: o.LinearFilter,
                                encoding: T.outputEncoding
                            },
                            i = new o.WebGLRenderTarget(r, r, n);
                        i.depthBuffer = !0, i.depthTexture = new o.DepthTexture(r, r), i.depthTexture.format = o.DepthFormat, i.depthTexture.type = o.UnsignedShortType;
                        const s = new o.WebGLRenderTarget(r, r, n);
                        return [i, s, new u({
                            gl: T,
                            resolution: r,
                            width: l[0],
                            height: l[1],
                            minDepthThreshold: h,
                            maxDepthThreshold: d,
                            depthScale: f,
                            depthToBlurRatioBias: p
                        }), {
                            mirror: m,
                            textureMatrix: j,
                            mixBlur: t,
                            tDiffuse: i.texture,
                            tDepth: i.depthTexture,
                            tDiffuseBlur: s.texture,
                            hasBlur: k,
                            mixStrength: e,
                            minDepthThreshold: h,
                            maxDepthThreshold: d,
                            depthScale: f,
                            depthToBlurRatioBias: p,
                            transparent: !0,
                            debug: v,
                            distortion: y,
                            distortionMap: w,
                            mixContrast: b,
                            "defines-USE_BLUR": k ? "" : void 0,
                            "defines-USE_DEPTH": f > 0 ? "" : void 0,
                            "defines-USE_DISTORTION": w ? "" : void 0
                        }]
                    }), [T, l, j, r, m, k, t, e, h, d, f, p, v, y, w, b]);
                return (0, s.x)((() => {
                    if (null == A || !A.current) return;
                    A.current.visible = !1;
                    const t = T.xr.enabled,
                        e = T.shadowMap.autoUpdate;
                    V(), T.xr.enabled = !1, T.shadowMap.autoUpdate = !1, T.setRenderTarget(W), T.state.buffers.depth.setMask(!0), T.autoClear || T.clear(), T.render(E, I), k && N.render(T, W, z), T.xr.enabled = t, T.shadowMap.autoUpdate = e, A.current.visible = !0, T.setRenderTarget(null)
                })), i.createElement("mesh", (0, n.Z)({
                    ref: a([A, S])
                }, x), i.createElement("planeBufferGeometry", {
                    args: c
                }), g ? g("meshReflectorMaterial", G) : i.createElement("meshReflectorMaterial", G))
            }))
        },
        6625: function(t, e, r) {
            "use strict";
            r.d(e, {
                x: function() {
                    return ot
                }
            });
            var n = r(7462),
                i = r(7294),
                o = r(9477);
            r(4155);

            function s() {
                var t, e = 0,
                    r = [],
                    n = 0,
                    i = 0;
                var o = f((function(t) {
                        i || l(1, t)
                    })),
                    a = f((function(t) {
                        i || l(-1, t)
                    }));

                function l(r, n) {
                    i++;
                    var o = 0;
                    try {
                        n === g && p();
                        var s = r > 0 && d(n);
                        s ? s.call(n, f((function(t) {
                            o++, l(1, t)
                        })), f((function(t) {
                            o++, l(-1, t)
                        }))) : (e = r, t = n, u())
                    } catch (a) {
                        e || o || l(-1, a)
                    }
                }

                function u() {
                    n || (setTimeout(c, 0), n = 1)
                }

                function c() {
                    var t = r;
                    n = 0, r = [], t.forEach(h)
                }

                function h(t) {
                    t()
                }

                function d(t) {
                    var e = t && (m(t) || "object" === typeof t) && t.then;
                    return m(e) && e
                }

                function f(t) {
                    var e = 0;
                    return function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        e++ || t.apply(this, r)
                    }
                }

                function p() {
                    throw new TypeError("Chaining cycle detected")
                }
                var m = function(t) {
                        return "function" === typeof t
                    },
                    g = {
                        then: function(n, i) {
                            var o = s();
                            return r.push((function() {
                                var r = e > 0 ? n : i;
                                if (m(r)) try {
                                    var s = r(t);
                                    s === o && p();
                                    var a = d(s);
                                    a ? a.call(s, o.resolve, o.reject) : o.resolve(s)
                                } catch (l) {
                                    o.reject(l)
                                } else o[e > 0 ? "resolve" : "reject"](t)
                            })), e && u(), o
                        },
                        resolve: o,
                        reject: a
                    };
                return g
            }

            function a() {
                var t, e, r = new Promise((function(r, n) {
                    t = r, e = n
                }));
                return {
                    then: r.then.bind(r),
                    resolve: t,
                    reject: e
                }
            }
            s.all = a.all = function(t) {
                var e = 0,
                    r = [],
                    n = l();
                return 0 === t.length ? n.resolve([]) : t.forEach((function(i, o) {
                    var s = l();
                    s.resolve(i), s.then((function(i) {
                        e++, r[o] = i, e === t.length && n.resolve(r)
                    }), n.reject)
                })), n
            };
            var l = "function" === typeof Promise ? a : s;

            function u() {
                var t = Object.create(null);

                function e(n, i) {
                    var o = n.id,
                        s = n.name,
                        a = n.dependencies;
                    void 0 === a && (a = []);
                    var l = n.init;
                    void 0 === l && (l = function() {});
                    var u = n.getTransferables;
                    if (void 0 === u && (u = null), !t[o]) try {
                        a = a.map((function(r) {
                            return r && r.isWorkerModule && (e(r, (function(t) {
                                if (t instanceof Error) throw t
                            })), r = t[r.id].value), r
                        })), l = r("<" + s + ">.init", l), u && (u = r("<" + s + ">.getTransferables", u));
                        var c = null;
                        "function" === typeof l ? c = l.apply(void 0, a) : console.error("worker module init function failed to rehydrate"), t[o] = {
                            id: o,
                            value: c,
                            getTransferables: u
                        }, i(c)
                    } catch (h) {
                        h && h.noLog || console.error(h), i(h)
                    }
                }

                function r(t, e) {
                    var r = void 0;
                    self.troikaDefine = function(t) {
                        return r = t
                    };
                    var n = URL.createObjectURL(new Blob(["/** " + t.replace(/\*/g, "") + " **/\n\ntroikaDefine(\n" + e + "\n)"], {
                        type: "application/javascript"
                    }));
                    try {
                        importScripts(n)
                    } catch (i) {
                        console.error(i)
                    }
                    return URL.revokeObjectURL(n), delete self.troikaDefine, r
                }
                self.addEventListener("message", (function(r) {
                    var n = r.data,
                        i = n.messageId,
                        o = n.action,
                        s = n.data;
                    try {
                        "registerModule" === o && e(s, (function(t) {
                            t instanceof Error ? postMessage({
                                messageId: i,
                                success: !1,
                                error: t.message
                            }) : postMessage({
                                messageId: i,
                                success: !0,
                                result: {
                                    isCallable: "function" === typeof t
                                }
                            })
                        })), "callModule" === o && function(e, r) {
                            var n, i = e.id,
                                o = e.args;
                            t[i] && "function" === typeof t[i].value || r(new Error("Worker module " + i + ": not found or its 'init' did not return a function"));
                            try {
                                var s = (n = t[i]).value.apply(n, o);
                                s && "function" === typeof s.then ? s.then(a, (function(t) {
                                    return r(t instanceof Error ? t : new Error("" + t))
                                })) : a(s)
                            } catch (l) {
                                r(l)
                            }

                            function a(e) {
                                try {
                                    var n = t[i].getTransferables && t[i].getTransferables(e);
                                    n && Array.isArray(n) && n.length || (n = void 0), r(e, n)
                                } catch (l) {
                                    console.error(l), r(l)
                                }
                            }
                        }(s, (function(t, e) {
                            t instanceof Error ? postMessage({
                                messageId: i,
                                success: !1,
                                error: t.message
                            }) : postMessage({
                                messageId: i,
                                success: !0,
                                result: t
                            }, e || void 0)
                        }))
                    } catch (a) {
                        postMessage({
                            messageId: i,
                            success: !1,
                            error: a.stack
                        })
                    }
                }))
            }
            var c = function() {
                    var t = !1;
                    if ("undefined" !== typeof window && "undefined" !== typeof window.document) try {
                        new Worker(URL.createObjectURL(new Blob([""], {
                            type: "application/javascript"
                        }))).terminate(), t = !0
                    } catch (e) {
                        console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: [" + e.message + "]")
                    }
                    return c = function() {
                        return t
                    }, t
                },
                h = 0,
                d = 0,
                f = !1,
                p = Object.create(null),
                m = Object.create(null),
                g = Object.create(null);

            function v(t) {
                if ((!t || "function" !== typeof t.init) && !f) throw new Error("requires `options.init` function");
                var e = t.dependencies,
                    r = t.init,
                    n = t.getTransferables,
                    i = t.workerId;
                if (!c()) return function(t) {
                    var e = function() {
                        for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
                        return e._getInitResult().then((function(e) {
                            if ("function" === typeof e) return e.apply(void 0, t);
                            throw new Error("Worker module function was called but `init` did not return a callable function")
                        }))
                    };
                    return e._getInitResult = function() {
                        var r = t.dependencies,
                            n = t.init;
                        r = Array.isArray(r) ? r.map((function(t) {
                            return t && t._getInitResult ? t._getInitResult() : t
                        })) : [];
                        var i = l.all(r).then((function(t) {
                            return n.apply(null, t)
                        }));
                        return e._getInitResult = function() {
                            return i
                        }, i
                    }, e
                }(t);
                null == i && (i = "#default");
                var o = "workerModule" + ++h,
                    s = t.name || o,
                    a = null;

                function u() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    if (!a) {
                        a = b(i, "registerModule", u.workerModuleData);
                        var r = function() {
                            a = null, m[i].delete(r)
                        };
                        (m[i] || (m[i] = new Set)).add(r)
                    }
                    return a.then((function(e) {
                        if (e.isCallable) return b(i, "callModule", {
                            id: o,
                            args: t
                        });
                        throw new Error("Worker module function was called but `init` did not return a callable function")
                    }))
                }
                return e = e && e.map((function(t) {
                    return "function" !== typeof t || t.workerModuleData || (f = !0, t = v({
                        workerId: i,
                        name: "<" + s + "> function dependency: " + t.name,
                        init: "function(){return (\n" + y(t) + "\n)}"
                    }), f = !1), t && t.workerModuleData && (t = t.workerModuleData), t
                })), u.workerModuleData = {
                    isWorkerModule: !0,
                    id: o,
                    name: s,
                    dependencies: e,
                    init: y(r),
                    getTransferables: n && y(n)
                }, u
            }

            function y(t) {
                var e = t.toString();
                return !/^function/.test(e) && /^\w+\s*\(/.test(e) && (e = "function " + e), e
            }

            function b(t, e, r) {
                var n = l(),
                    i = ++d;
                return g[i] = function(t) {
                        t.success ? n.resolve(t.result) : n.reject(new Error("Error in worker " + e + " call: " + t.error))
                    },
                    function(t) {
                        var e = p[t];
                        if (!e) {
                            var r = y(u);
                            (e = p[t] = new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: " + t.replace(/\*/g, "") + " **/\n\n;(" + r + ")()"], {
                                type: "application/javascript"
                            })))).onmessage = function(t) {
                                var e = t.data,
                                    r = e.messageId,
                                    n = g[r];
                                if (!n) throw new Error("WorkerModule response with empty or unknown messageId");
                                delete g[r], n(e)
                            }
                        }
                        return e
                    }(t).postMessage({
                        messageId: i,
                        action: e,
                        data: r
                    }), n
            }
            var w = v({
                name: "Thenable",
                dependencies: [l],
                init: function(t) {
                    return t
                }
            });

            function x() {
                var t = function(t) {
                    function e(t, e, r, n, i, o, s, a) {
                        var l = 1 - s;
                        a.x = l * l * t + 2 * l * s * r + s * s * i, a.y = l * l * e + 2 * l * s * n + s * s * o
                    }

                    function r(t, e, r, n, i, o, s, a, l, u) {
                        var c = 1 - l;
                        u.x = c * c * c * t + 3 * c * c * l * r + 3 * c * l * l * i + l * l * l * s, u.y = c * c * c * e + 3 * c * c * l * n + 3 * c * l * l * o + l * l * l * a
                    }

                    function n(t, e) {
                        for (var r, n, i, o, s, a = /([MLQCZ])([^MLQCZ]*)/g; r = a.exec(t);) {
                            var l = r[2].replace(/^\s*|\s*$/g, "").split(/[,\s]+/).map((function(t) {
                                return parseFloat(t)
                            }));
                            switch (r[1]) {
                                case "M":
                                    o = n = l[0], s = i = l[1];
                                    break;
                                case "L":
                                    l[0] === o && l[1] === s || e("L", o, s, o = l[0], s = l[1]);
                                    break;
                                case "Q":
                                    e("Q", o, s, o = l[2], s = l[3], l[0], l[1]);
                                    break;
                                case "C":
                                    e("C", o, s, o = l[4], s = l[5], l[0], l[1], l[2], l[3]);
                                    break;
                                case "Z":
                                    o === n && s === i || e("L", o, s, n, i)
                            }
                        }
                    }

                    function i(t, i, o) {
                        void 0 === o && (o = 16);
                        var s = {
                            x: 0,
                            y: 0
                        };
                        n(t, (function(t, n, a, l, u, c, h, d, f) {
                            switch (t) {
                                case "L":
                                    i(n, a, l, u);
                                    break;
                                case "Q":
                                    for (var p = n, m = a, g = 1; g < o; g++) e(n, a, c, h, l, u, g / (o - 1), s), i(p, m, s.x, s.y), p = s.x, m = s.y;
                                    break;
                                case "C":
                                    for (var v = n, y = a, b = 1; b < o; b++) r(n, a, c, h, d, f, l, u, b / (o - 1), s), i(v, y, s.x, s.y), v = s.x, y = s.y
                            }
                        }))
                    }
                    var o = "precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",
                        s = new WeakMap,
                        a = {
                            premultipliedAlpha: !1,
                            preserveDrawingBuffer: !0,
                            antialias: !1,
                            depth: !1
                        };

                    function l(t, e) {
                        var r = t.getContext ? t.getContext("webgl", a) : t,
                            n = s.get(r);
                        if (!n) {
                            var i = "undefined" !== typeof WebGL2RenderingContext && r instanceof WebGL2RenderingContext,
                                o = {},
                                l = {},
                                u = {},
                                c = -1,
                                h = [];

                            function d(t) {
                                var e = o[t];
                                if (!e && !(e = o[t] = r.getExtension(t))) throw new Error(t + " not supported");
                                return e
                            }

                            function f(t, e) {
                                var n = r.createShader(e);
                                return r.shaderSource(n, t), r.compileShader(n), n
                            }

                            function p(t, e, n, o) {
                                if (!l[t]) {
                                    var s = {},
                                        a = {},
                                        u = r.createProgram();
                                    r.attachShader(u, f(e, r.VERTEX_SHADER)), r.attachShader(u, f(n, r.FRAGMENT_SHADER)), r.linkProgram(u), l[t] = {
                                        program: u,
                                        transaction: function(t) {
                                            r.useProgram(u), t({
                                                setUniform: function(t, e) {
                                                    for (var n = [], i = arguments.length - 2; i-- > 0;) n[i] = arguments[i + 2];
                                                    var o = a[e] || (a[e] = r.getUniformLocation(u, e));
                                                    r["uniform" + t].apply(r, [o].concat(n))
                                                },
                                                setAttribute: function(t, e, n, o, a) {
                                                    var l = s[t];
                                                    l || (l = s[t] = {
                                                        buf: r.createBuffer(),
                                                        loc: r.getAttribLocation(u, t),
                                                        data: null
                                                    }), r.bindBuffer(r.ARRAY_BUFFER, l.buf), r.vertexAttribPointer(l.loc, e, r.FLOAT, !1, 0, 0), r.enableVertexAttribArray(l.loc), i ? r.vertexAttribDivisor(l.loc, o) : d("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(l.loc, o), a !== l.data && (r.bufferData(r.ARRAY_BUFFER, a, n), l.data = a)
                                                }
                                            })
                                        }
                                    }
                                }
                                l[t].transaction(o)
                            }

                            function m(t, e) {
                                c++;
                                try {
                                    r.activeTexture(r.TEXTURE0 + c);
                                    var n = u[t];
                                    n || (n = u[t] = r.createTexture(), r.bindTexture(r.TEXTURE_2D, n), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.NEAREST)), r.bindTexture(r.TEXTURE_2D, n), e(n, c)
                                } finally {
                                    c--
                                }
                            }

                            function g(t, e, n) {
                                var i = r.createFramebuffer();
                                h.push(i), r.bindFramebuffer(r.FRAMEBUFFER, i), r.activeTexture(r.TEXTURE0 + e), r.bindTexture(r.TEXTURE_2D, t), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, t, 0);
                                try {
                                    n(i)
                                } finally {
                                    r.deleteFramebuffer(i), r.bindFramebuffer(r.FRAMEBUFFER, h[--h.length - 1] || null)
                                }
                            }

                            function v() {
                                o = {}, l = {}, u = {}, c = -1, h.length = 0
                            }
                            r.canvas.addEventListener("webglcontextlost", (function(t) {
                                v(), t.preventDefault()
                            }), !1), s.set(r, n = {
                                gl: r,
                                isWebGL2: i,
                                getExtension: d,
                                withProgram: p,
                                withTexture: m,
                                withTextureFramebuffer: g,
                                handleContextLoss: v
                            })
                        }
                        e(n)
                    }

                    function u(t, e, r, n, i, s, a, u) {
                        void 0 === a && (a = 15), void 0 === u && (u = null), l(t, (function(t) {
                            var l = t.gl,
                                c = t.withProgram;
                            (0, t.withTexture)("copy", (function(t, h) {
                                l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, i, s, 0, l.RGBA, l.UNSIGNED_BYTE, e), c("copy", o, "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}", (function(t) {
                                    var e = t.setUniform;
                                    (0, t.setAttribute)("aUV", 2, l.STATIC_DRAW, 0, new Float32Array([0, 0, 2, 0, 0, 2])), e("1i", "image", h), l.bindFramebuffer(l.FRAMEBUFFER, u || null), l.disable(l.BLEND), l.colorMask(8 & a, 4 & a, 2 & a, 1 & a), l.viewport(r, n, i, s), l.scissor(r, n, i, s), l.drawArrays(l.TRIANGLES, 0, 3)
                                }))
                            }))
                        }))
                    }
                    var c = Object.freeze({
                        __proto__: null,
                        withWebGLContext: l,
                        renderImageData: u,
                        resizeWebGLCanvasWithoutClearing: function(t, e, r) {
                            var n = t.width,
                                i = t.height;
                            l(t, (function(o) {
                                var s = o.gl,
                                    a = new Uint8Array(n * i * 4);
                                s.readPixels(0, 0, n, i, s.RGBA, s.UNSIGNED_BYTE, a), t.width = e, t.height = r, u(s, a, 0, 0, n, i)
                            }))
                        }
                    });

                    function h(t, e, r, n, o, s) {
                        void 0 === s && (s = 1);
                        var a = new Uint8Array(t * e),
                            l = n[2] - n[0],
                            u = n[3] - n[1],
                            c = [];
                        i(r, (function(t, e, r, n) {
                            c.push({
                                x1: t,
                                y1: e,
                                x2: r,
                                y2: n,
                                minX: Math.min(t, r),
                                minY: Math.min(e, n),
                                maxX: Math.max(t, r),
                                maxY: Math.max(e, n)
                            })
                        })), c.sort((function(t, e) {
                            return t.maxX - e.maxX
                        }));
                        for (var h = 0; h < t; h++)
                            for (var d = 0; d < e; d++) {
                                var f = g(n[0] + l * (h + .5) / t, n[1] + u * (d + .5) / e),
                                    m = Math.pow(1 - Math.abs(f) / o, s) / 2;
                                f < 0 && (m = 1 - m), m = Math.max(0, Math.min(255, Math.round(255 * m))), a[d * t + h] = m
                            }
                        return a;

                        function g(t, e) {
                            for (var r = 1 / 0, n = 1 / 0, i = c.length; i--;) {
                                var o = c[i];
                                if (o.maxX + n <= t) break;
                                if (t + n > o.minX && e - n < o.maxY && e + n > o.minY) {
                                    var s = p(t, e, o.x1, o.y1, o.x2, o.y2);
                                    s < r && (r = s, n = Math.sqrt(r))
                                }
                            }
                            return function(t, e) {
                                for (var r = 0, n = c.length; n--;) {
                                    var i = c[n];
                                    if (i.maxX <= t) break;
                                    i.y1 > e !== i.y2 > e && t < (i.x2 - i.x1) * (e - i.y1) / (i.y2 - i.y1) + i.x1 && (r += i.y1 < i.y2 ? 1 : -1)
                                }
                                return 0 !== r
                            }(t, e) && (n = -n), n
                        }
                    }

                    function d(t, e, r, n, i, o, s, a, l, u) {
                        void 0 === o && (o = 1), void 0 === a && (a = 0), void 0 === l && (l = 0), void 0 === u && (u = 0), f(t, e, r, n, i, o, s, null, a, l, u)
                    }

                    function f(t, e, r, n, i, o, s, a, l, c, d) {
                        void 0 === o && (o = 1), void 0 === l && (l = 0), void 0 === c && (c = 0), void 0 === d && (d = 0);
                        for (var f = h(t, e, r, n, i, o), p = new Uint8Array(4 * f.length), m = 0; m < f.length; m++) p[4 * m + d] = f[m];
                        u(s, p, l, c, t, e, 1 << 3 - d, a)
                    }

                    function p(t, e, r, n, i, o) {
                        var s = i - r,
                            a = o - n,
                            l = s * s + a * a,
                            u = l ? Math.max(0, Math.min(1, ((t - r) * s + (e - n) * a) / l)) : 0,
                            c = t - (r + u * s),
                            h = e - (n + u * a);
                        return c * c + h * h
                    }
                    var m = Object.freeze({
                            __proto__: null,
                            generate: h,
                            generateIntoCanvas: d,
                            generateIntoFramebuffer: f
                        }),
                        g = new Float32Array([0, 0, 2, 0, 0, 2]),
                        v = null,
                        y = !1,
                        b = {},
                        w = new WeakMap;

                    function x(t) {
                        if (!y && !E(t)) throw new Error("WebGL generation not supported")
                    }

                    function S(t, e, r, n, i, o, s) {
                        if (void 0 === o && (o = 1), void 0 === s && (s = null), !s && !(s = v)) {
                            var a = "function" === typeof OffscreenCanvas ? new OffscreenCanvas(1, 1) : "undefined" !== typeof document ? document.createElement("canvas") : null;
                            if (!a) throw new Error("OffscreenCanvas or DOM canvas not supported");
                            s = v = a.getContext("webgl", {
                                depth: !1
                            })
                        }
                        x(s);
                        var u = new Uint8Array(t * e * 4);
                        l(s, (function(s) {
                            var a = s.gl,
                                l = s.withTexture,
                                c = s.withTextureFramebuffer;
                            l("readable", (function(s, l) {
                                a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, t, e, 0, a.RGBA, a.UNSIGNED_BYTE, null), c(s, l, (function(s) {
                                    _(t, e, r, n, i, o, a, s, 0, 0, 0), a.readPixels(0, 0, t, e, a.RGBA, a.UNSIGNED_BYTE, u)
                                }))
                            }))
                        }));
                        for (var c = new Uint8Array(t * e), h = 0, d = 0; h < u.length; h += 4) c[d++] = u[h];
                        return c
                    }

                    function T(t, e, r, n, i, o, s, a, l, u) {
                        void 0 === o && (o = 1), void 0 === a && (a = 0), void 0 === l && (l = 0), void 0 === u && (u = 0), _(t, e, r, n, i, o, s, null, a, l, u)
                    }

                    function _(t, e, r, n, s, a, u, c, h, d, f) {
                        void 0 === a && (a = 1), void 0 === h && (h = 0), void 0 === d && (d = 0), void 0 === f && (f = 0), x(u);
                        var p = [];
                        i(r, (function(t, e, r, n) {
                            p.push(t, e, r, n)
                        })), p = new Float32Array(p), l(u, (function(r) {
                            var i = r.gl,
                                l = r.isWebGL2,
                                u = r.getExtension,
                                m = r.withProgram,
                                v = r.withTexture,
                                y = r.withTextureFramebuffer,
                                b = r.handleContextLoss;
                            if (v("rawDistances", (function(r, v) {
                                    t === r._lastWidth && e === r._lastHeight || i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, r._lastWidth = t, r._lastHeight = e, 0, i.RGBA, i.UNSIGNED_BYTE, null), m("main", "precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}", "precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}", (function(o) {
                                        var c = o.setAttribute,
                                            h = o.setUniform,
                                            d = !l && u("ANGLE_instanced_arrays"),
                                            f = !l && u("EXT_blend_minmax");
                                        c("aUV", 2, i.STATIC_DRAW, 0, g), c("aLineSegment", 4, i.DYNAMIC_DRAW, 1, p), h.apply(void 0, ["4f", "uGlyphBounds"].concat(n)), h("1f", "uMaxDistance", s), h("1f", "uExponent", a), y(r, v, (function(r) {
                                            i.enable(i.BLEND), i.colorMask(!0, !0, !0, !0), i.viewport(0, 0, t, e), i.scissor(0, 0, t, e), i.blendFunc(i.ONE, i.ONE), i.blendEquationSeparate(i.FUNC_ADD, l ? i.MAX : f.MAX_EXT), i.clear(i.COLOR_BUFFER_BIT), l ? i.drawArraysInstanced(i.TRIANGLES, 0, 3, p.length / 4) : d.drawArraysInstancedANGLE(i.TRIANGLES, 0, 3, p.length / 4)
                                        }))
                                    })), m("post", o, "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}", (function(r) {
                                        r.setAttribute("aUV", 2, i.STATIC_DRAW, 0, g), r.setUniform("1i", "tex", v), i.bindFramebuffer(i.FRAMEBUFFER, c), i.disable(i.BLEND), i.colorMask(0 === f, 1 === f, 2 === f, 3 === f), i.viewport(h, d, t, e), i.scissor(h, d, t, e), i.drawArrays(i.TRIANGLES, 0, 3)
                                    }))
                                })), i.isContextLost()) throw b(), new Error("webgl context lost")
                        }))
                    }

                    function E(t) {
                        var e = t && t !== v ? t.canvas || t : b,
                            r = w.get(e);
                        if (void 0 === r) {
                            y = !0;
                            var n = null;
                            try {
                                var i = [97, 106, 97, 61, 99, 137, 118, 80, 80, 118, 137, 99, 61, 97, 106, 97],
                                    o = S(4, 4, "M8,8L16,8L24,24L16,24Z", [0, 0, 32, 32], 24, 1, t);
                                (r = o && i.length === o.length && o.every((function(t, e) {
                                    return t === i[e]
                                }))) || (n = "bad trial run results", console.info(i, o))
                            } catch (s) {
                                r = !1, n = s.message
                            }
                            n && console.warn("WebGL SDF generation not supported:", n), y = !1, w.set(e, r)
                        }
                        return r
                    }
                    var k = Object.freeze({
                        __proto__: null,
                        generate: S,
                        generateIntoCanvas: T,
                        generateIntoFramebuffer: _,
                        isSupported: E
                    });
                    return t.forEachPathCommand = n, t.generate = function(t, e, r, n, i, o) {
                        void 0 === i && (i = Math.max(n[2] - n[0], n[3] - n[1]) / 2), void 0 === o && (o = 1);
                        try {
                            return S.apply(k, arguments)
                        } catch (s) {
                            return console.info("WebGL SDF generation failed, falling back to JS", s), h.apply(m, arguments)
                        }
                    }, t.generateIntoCanvas = function(t, e, r, n, i, o, s, a, l, u) {
                        void 0 === i && (i = Math.max(n[2] - n[0], n[3] - n[1]) / 2), void 0 === o && (o = 1), void 0 === a && (a = 0), void 0 === l && (l = 0), void 0 === u && (u = 0);
                        try {
                            return T.apply(k, arguments)
                        } catch (c) {
                            return console.info("WebGL SDF generation failed, falling back to JS", c), d.apply(m, arguments)
                        }
                    }, t.javascript = m, t.pathToLineSegments = i, t.webgl = k, t.webglUtils = c, Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t
                }({});
                return t
            }
            var S = function() {
                return function(t) {
                    var e = {
                            R: "13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",
                            EN: "1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",
                            ES: "17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",
                            ET: "z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",
                            AN: "16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",
                            CS: "18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",
                            B: "a,3,f+2,2v,690",
                            S: "9,2,k",
                            WS: "c,k,4f4,1vk+a,u,1j,335",
                            ON: "x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",
                            BN: "0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",
                            NSM: "lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",
                            AL: "16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",
                            LRO: "6ct",
                            RLO: "6cu",
                            LRE: "6cq",
                            RLE: "6cr",
                            PDF: "6cs",
                            LRI: "6ee",
                            RLI: "6ef",
                            FSI: "6eg",
                            PDI: "6eh"
                        },
                        r = {},
                        n = {};
                    r.L = 1, n[1] = "L", Object.keys(e).forEach((function(t, e) {
                        r[t] = 1 << e + 1, n[r[t]] = t
                    })), Object.freeze(r);
                    var i = r.LRI | r.RLI | r.FSI,
                        o = r.L | r.R | r.AL,
                        s = r.B | r.S | r.WS | r.ON | r.FSI | r.LRI | r.RLI | r.PDI,
                        a = r.BN | r.RLE | r.LRE | r.RLO | r.LRO | r.PDF,
                        l = r.S | r.WS | r.B | i | r.PDI | a,
                        u = null;

                    function c(t) {
                        return function() {
                            if (!u) {
                                u = new Map;
                                var t = function(t) {
                                    if (e.hasOwnProperty(t)) {
                                        var n = 0;
                                        e[t].split(",").forEach((function(e) {
                                            var i = e.split("+"),
                                                o = i[0],
                                                s = i[1];
                                            o = parseInt(o, 36), s = s ? parseInt(s, 36) : 0, u.set(n += o, r[t]);
                                            for (var a = 0; a < s; a++) u.set(++n, r[t])
                                        }))
                                    }
                                };
                                for (var n in e) t(n)
                            }
                        }(), u.get(t.codePointAt(0)) || r.L
                    }
                    var h, d, f, p = "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",
                        m = "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye";

                    function g(t, e) {
                        var r, n = 0,
                            i = new Map,
                            o = e && new Map;
                        return t.split(",").forEach((function t(s) {
                            if (-1 !== s.indexOf("+"))
                                for (var a = +s; a--;) t(r);
                            else {
                                r = s;
                                var l = s.split(">"),
                                    u = l[0],
                                    c = l[1];
                                u = String.fromCodePoint(n += parseInt(u, 36)), c = String.fromCodePoint(n += parseInt(c, 36)), i.set(u, c), e && o.set(c, u)
                            }
                        })), {
                            map: i,
                            reverseMap: o
                        }
                    }

                    function v() {
                        if (!h) {
                            var t = g(p, !0),
                                e = t.map,
                                r = t.reverseMap;
                            h = e, d = r, f = g(m, !1).map
                        }
                    }

                    function y(t) {
                        return v(), h.get(t) || null
                    }

                    function b(t) {
                        return v(), d.get(t) || null
                    }

                    function w(t) {
                        return v(), f.get(t) || null
                    }
                    var x = r.L,
                        S = r.R,
                        T = r.EN,
                        _ = r.ES,
                        E = r.ET,
                        k = r.AN,
                        A = r.CS,
                        R = r.B,
                        C = r.S,
                        O = r.ON,
                        U = r.BN,
                        P = r.NSM,
                        D = r.AL,
                        M = r.LRO,
                        F = r.RLO,
                        B = r.LRE,
                        L = r.RLE,
                        j = r.PDF,
                        I = r.LRI,
                        V = r.RLI,
                        W = r.FSI,
                        z = r.PDI;
                    var N;

                    function G(t) {
                        return function() {
                            if (!N) {
                                var t = g("14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1", !0),
                                    e = t.map;
                                t.reverseMap.forEach((function(t, r) {
                                    e.set(r, t)
                                })), N = e
                            }
                        }(), N.get(t) || null
                    }

                    function q(t, e, r, n) {
                        var i = t.length;
                        r = Math.max(0, null == r ? 0 : +r), n = Math.min(i - 1, null == n ? i - 1 : +n);
                        var o = [];
                        return e.paragraphs.forEach((function(i) {
                            var s = Math.max(r, i.start),
                                a = Math.min(n, i.end);
                            if (s < a) {
                                for (var u = e.levels.slice(s, a + 1), h = a; h >= s && c(t[h]) & l; h--) u[h] = i.level;
                                for (var d = i.level, f = 1 / 0, p = 0; p < u.length; p++) {
                                    var m = u[p];
                                    m > d && (d = m), m < f && (f = 1 | m)
                                }
                                for (var g = d; g >= f; g--)
                                    for (var v = 0; v < u.length; v++)
                                        if (u[v] >= g) {
                                            for (var y = v; v + 1 < u.length && u[v + 1] >= g;) v++;
                                            v > y && o.push([y + r, v + r])
                                        }
                            }
                        })), o
                    }

                    function H(t, e, r, n) {
                        for (var i = q(t, e, r, n), o = [], s = 0; s < t.length; s++) o[s] = s;
                        return i.forEach((function(t) {
                            for (var e = t[0], r = t[1], n = o.slice(e, r + 1), i = n.length; i--;) o[r - i] = n[i]
                        })), o
                    }
                    return t.closingToOpeningBracket = b, t.getBidiCharType = c, t.getBidiCharTypeName = function(t) {
                        return n[c(t)]
                    }, t.getCanonicalBracket = w, t.getEmbeddingLevels = function(t, e) {
                        for (var r = new Uint32Array(t.length), n = 0; n < t.length; n++) r[n] = c(t[n]);
                        var u = new Map;

                        function h(t, e) {
                            var n = r[t];
                            r[t] = e, u.set(n, u.get(n) - 1), n & s && u.set(s, u.get(s) - 1), u.set(e, (u.get(e) || 0) + 1), e & s && u.set(s, (u.get(s) || 0) + 1)
                        }
                        for (var d = new Uint8Array(t.length), f = new Map, p = [], m = null, g = 0; g < t.length; g++) m || p.push(m = {
                            start: g,
                            end: t.length - 1,
                            level: "rtl" === e ? 1 : "ltr" === e ? 0 : We(g, !1)
                        }), r[g] & R && (m.end = g, m = null);
                        for (var v = L | B | F | M | i | z | j | R, N = function(t) {
                                return t + (1 & t ? 1 : 2)
                            }, G = function(t) {
                                return t + (1 & t ? 2 : 1)
                            }, q = 0; q < p.length; q++) {
                            var H = [{
                                    _level: (m = p[q]).level,
                                    _override: 0,
                                    _isolate: 0
                                }],
                                Y = void 0,
                                X = 0,
                                $ = 0,
                                K = 0;
                            u.clear();
                            for (var Z = m.start; Z <= m.end; Z++) {
                                var Q = r[Z];
                                if (Y = H[H.length - 1], u.set(Q, (u.get(Q) || 0) + 1), Q & s && u.set(s, (u.get(s) || 0) + 1), Q & v)
                                    if (Q & (L | B)) {
                                        d[Z] = Y._level;
                                        var J = (Q === L ? G : N)(Y._level);
                                        J <= 125 && !X && !$ ? H.push({
                                            _level: J,
                                            _override: 0,
                                            _isolate: 0
                                        }) : X || $++
                                    } else if (Q & (F | M)) {
                                    d[Z] = Y._level;
                                    var tt = (Q === F ? G : N)(Y._level);
                                    tt <= 125 && !X && !$ ? H.push({
                                        _level: tt,
                                        _override: Q & F ? S : x,
                                        _isolate: 0
                                    }) : X || $++
                                } else if (Q & i) {
                                    Q & W && (Q = 1 === We(Z + 1, !0) ? V : I), d[Z] = Y._level, Y._override && h(Z, Y._override);
                                    var et = (Q === V ? G : N)(Y._level);
                                    et <= 125 && 0 === X && 0 === $ ? (K++, H.push({
                                        _level: et,
                                        _override: 0,
                                        _isolate: 1,
                                        _isolInitIndex: Z
                                    })) : X++
                                } else if (Q & z) {
                                    if (X > 0) X--;
                                    else if (K > 0) {
                                        for ($ = 0; !H[H.length - 1]._isolate;) H.pop();
                                        var rt = H[H.length - 1]._isolInitIndex;
                                        null != rt && (f.set(rt, Z), f.set(Z, rt)), H.pop(), K--
                                    }
                                    Y = H[H.length - 1], d[Z] = Y._level, Y._override && h(Z, Y._override)
                                } else Q & j ? (0 === X && ($ > 0 ? $-- : !Y._isolate && H.length > 1 && (H.pop(), Y = H[H.length - 1])), d[Z] = Y._level) : Q & R && (d[Z] = m.level);
                                else d[Z] = Y._level, Y._override && Q !== U && h(Z, Y._override)
                            }
                            for (var nt = [], it = null, ot = m.start; ot <= m.end; ot++) {
                                var st = r[ot];
                                if (!(st & a)) {
                                    var at = d[ot],
                                        lt = st & i,
                                        ut = st === z;
                                    it && at === it._level ? (it._end = ot, it._endsWithIsolInit = lt) : nt.push(it = {
                                        _start: ot,
                                        _end: ot,
                                        _level: at,
                                        _startsWithPDI: ut,
                                        _endsWithIsolInit: lt
                                    })
                                }
                            }
                            for (var ct = [], ht = 0; ht < nt.length; ht++) {
                                var dt = nt[ht];
                                if (!dt._startsWithPDI || dt._startsWithPDI && !f.has(dt._start)) {
                                    for (var ft = [it = dt], pt = void 0; it && it._endsWithIsolInit && null != (pt = f.get(it._end));)
                                        for (var mt = ht + 1; mt < nt.length; mt++)
                                            if (nt[mt]._start === pt) {
                                                ft.push(it = nt[mt]);
                                                break
                                            }
                                    for (var gt = [], vt = 0; vt < ft.length; vt++)
                                        for (var yt = ft[vt], bt = yt._start; bt <= yt._end; bt++) gt.push(bt);
                                    for (var wt = d[gt[0]], xt = m.level, St = gt[0] - 1; St >= 0; St--)
                                        if (!(r[St] & a)) {
                                            xt = d[St];
                                            break
                                        }
                                    var Tt = gt[gt.length - 1],
                                        _t = d[Tt],
                                        Et = m.level;
                                    if (!(r[Tt] & i))
                                        for (var kt = Tt + 1; kt <= m.end; kt++)
                                            if (!(r[kt] & a)) {
                                                Et = d[kt];
                                                break
                                            }
                                    ct.push({
                                        _seqIndices: gt,
                                        _sosType: Math.max(xt, wt) % 2 ? S : x,
                                        _eosType: Math.max(Et, _t) % 2 ? S : x
                                    })
                                }
                            }
                            for (var At = 0; At < ct.length; At++) {
                                var Rt = ct[At],
                                    Ct = Rt._seqIndices,
                                    Ot = Rt._sosType,
                                    Ut = Rt._eosType;
                                if (u.get(P))
                                    for (var Pt = 0; Pt < Ct.length; Pt++) {
                                        var Dt = Ct[Pt];
                                        if (r[Dt] & P) {
                                            for (var Mt = Ot, Ft = Pt - 1; Ft >= 0; Ft--)
                                                if (!(r[Ct[Ft]] & a)) {
                                                    Mt = r[Ct[Ft]];
                                                    break
                                                }
                                            h(Dt, Mt & (i | z) ? O : Mt)
                                        }
                                    }
                                if (u.get(T))
                                    for (var Bt = 0; Bt < Ct.length; Bt++) {
                                        var Lt = Ct[Bt];
                                        if (r[Lt] & T)
                                            for (var jt = Bt - 1; jt >= -1; jt--) {
                                                var It = -1 === jt ? Ot : r[Ct[jt]];
                                                if (It & o) {
                                                    It === D && h(Lt, k);
                                                    break
                                                }
                                            }
                                    }
                                if (u.get(D))
                                    for (var Vt = 0; Vt < Ct.length; Vt++) {
                                        var Wt = Ct[Vt];
                                        r[Wt] & D && h(Wt, S)
                                    }
                                if (u.get(_) || u.get(A))
                                    for (var zt = 1; zt < Ct.length - 1; zt++) {
                                        var Nt = Ct[zt];
                                        if (r[Nt] & (_ | A)) {
                                            for (var Gt = 0, qt = 0, Ht = zt - 1; Ht >= 0 && (Gt = r[Ct[Ht]]) & a; Ht--);
                                            for (var Yt = zt + 1; Yt < Ct.length && (qt = r[Ct[Yt]]) & a; Yt++);
                                            Gt === qt && (r[Nt] === _ ? Gt === T : Gt & (T | k)) && h(Nt, Gt)
                                        }
                                    }
                                if (u.get(T))
                                    for (var Xt = 0; Xt < Ct.length; Xt++) {
                                        var $t = Ct[Xt];
                                        if (r[$t] & T) {
                                            for (var Kt = Xt - 1; Kt >= 0 && r[Ct[Kt]] & (E | a); Kt--) h(Ct[Kt], T);
                                            for (var Zt = Xt + 1; Zt < Ct.length && r[Ct[Zt]] & (E | a); Zt++) h(Ct[Zt], T)
                                        }
                                    }
                                if (u.get(E) || u.get(_) || u.get(A))
                                    for (var Qt = 0; Qt < Ct.length; Qt++) {
                                        var Jt = Ct[Qt];
                                        if (r[Jt] & (E | _ | A)) {
                                            h(Jt, O);
                                            for (var te = Qt - 1; te >= 0 && r[Ct[te]] & a; te--) h(Ct[te], O);
                                            for (var ee = Qt + 1; ee < Ct.length && r[Ct[ee]] & a; ee++) h(Ct[ee], O)
                                        }
                                    }
                                if (u.get(T))
                                    for (var re = 0, ne = Ot; re < Ct.length; re++) {
                                        var ie = Ct[re],
                                            oe = r[ie];
                                        oe & T ? ne === x && h(ie, x) : oe & o && (ne = oe)
                                    }
                                if (u.get(s)) {
                                    for (var se = S | T | k, ae = se | x, le = [], ue = [], ce = 0; ce < Ct.length; ce++)
                                        if (r[Ct[ce]] & s) {
                                            var he = t[Ct[ce]],
                                                de = void 0;
                                            if (null !== y(he)) {
                                                if (!(ue.length < 63)) break;
                                                ue.push({
                                                    char: he,
                                                    seqIndex: ce
                                                })
                                            } else if (null !== (de = b(he)))
                                                for (var fe = ue.length - 1; fe >= 0; fe--) {
                                                    var pe = ue[fe].char;
                                                    if (pe === de || pe === b(w(he)) || y(w(pe)) === he) {
                                                        le.push([ue[fe].seqIndex, ce]), ue.length = fe;
                                                        break
                                                    }
                                                }
                                        }
                                    le.sort((function(t, e) {
                                        return t[0] - e[0]
                                    }));
                                    for (var me = 0; me < le.length; me++) {
                                        for (var ge = le[me], ve = ge[0], ye = ge[1], be = !1, we = 0, xe = ve + 1; xe < ye; xe++) {
                                            var Se = Ct[xe];
                                            if (r[Se] & ae) {
                                                be = !0;
                                                var Te = r[Se] & se ? S : x;
                                                if (Te === Ne(Se)) {
                                                    we = Te;
                                                    break
                                                }
                                            }
                                        }
                                        if (be && !we) {
                                            we = Ot;
                                            for (var _e = ve - 1; _e >= 0; _e--) {
                                                var Ee = Ct[_e];
                                                if (r[Ee] & ae) {
                                                    var ke = r[Ee] & se ? S : x;
                                                    we = ke !== Ne(Ee) ? ke : Ne(Ee);
                                                    break
                                                }
                                            }
                                        }
                                        if (we) {
                                            if (r[Ct[ve]] = r[Ct[ye]] = we, we !== Ne(Ct[ve]))
                                                for (var Ae = ve + 1; Ae < Ct.length; Ae++)
                                                    if (!(r[Ct[Ae]] & a)) {
                                                        c(t[Ct[Ae]]) & P && (r[Ct[Ae]] = we);
                                                        break
                                                    }
                                            if (we !== Ne(Ct[ye]))
                                                for (var Re = ye + 1; Re < Ct.length; Re++)
                                                    if (!(r[Ct[Re]] & a)) {
                                                        c(t[Ct[Re]]) & P && (r[Ct[Re]] = we);
                                                        break
                                                    }
                                        }
                                    }
                                    for (var Ce = 0; Ce < Ct.length; Ce++)
                                        if (r[Ct[Ce]] & s) {
                                            for (var Oe = Ce, Ue = Ce, Pe = Ot, De = Ce - 1; De >= 0; De--) {
                                                if (!(r[Ct[De]] & a)) {
                                                    Pe = r[Ct[De]] & se ? S : x;
                                                    break
                                                }
                                                Oe = De
                                            }
                                            for (var Me = Ut, Fe = Ce + 1; Fe < Ct.length; Fe++) {
                                                if (!(r[Ct[Fe]] & (s | a))) {
                                                    Me = r[Ct[Fe]] & se ? S : x;
                                                    break
                                                }
                                                Ue = Fe
                                            }
                                            for (var Be = Oe; Be <= Ue; Be++) r[Ct[Be]] = Pe === Me ? Pe : Ne(Ct[Be]);
                                            Ce = Ue
                                        }
                                }
                            }
                            for (var Le = m.start; Le <= m.end; Le++) {
                                var je = d[Le],
                                    Ie = r[Le];
                                if (1 & je ? Ie & (x | T | k) && d[Le]++ : Ie & S ? d[Le]++ : Ie & (k | T) && (d[Le] += 2), Ie & a && (d[Le] = 0 === Le ? m.level : d[Le - 1]), Le === m.end || c(t[Le]) & (C | R))
                                    for (var Ve = Le; Ve >= 0 && c(t[Ve]) & l; Ve--) d[Ve] = m.level
                            }
                        }
                        return {
                            levels: d,
                            paragraphs: p
                        };

                        function We(e, n) {
                            for (var o = e; o < t.length; o++) {
                                var s = r[o];
                                if (s & (S | D)) return 1;
                                if (s & (R | x) || n && s === z) return 0;
                                if (s & i) {
                                    var a = ze(o);
                                    o = -1 === a ? t.length : a
                                }
                            }
                            return 0
                        }

                        function ze(e) {
                            for (var n = 1, o = e + 1; o < t.length; o++) {
                                var s = r[o];
                                if (s & R) break;
                                if (s & z) {
                                    if (0 === --n) return o
                                } else s & i && n++
                            }
                            return -1
                        }

                        function Ne(t) {
                            return 1 & d[t] ? S : x
                        }
                    }, t.getMirroredCharacter = G, t.getMirroredCharactersMap = function(t, e, r, n) {
                        var i = t.length;
                        r = Math.max(0, null == r ? 0 : +r), n = Math.min(i - 1, null == n ? i - 1 : +n);
                        for (var o = new Map, s = r; s <= n; s++)
                            if (1 & e[s]) {
                                var a = G(t[s]);
                                null !== a && o.set(s, a)
                            }
                        return o
                    }, t.getReorderSegments = q, t.getReorderedIndices = H, t.getReorderedString = function(t, e, r, n) {
                        var i = H(t, e, r, n),
                            o = [].concat(t);
                        return i.forEach((function(r, n) {
                            o[n] = (1 & e.levels[r] ? G(t[r]) : null) || t[r]
                        })), o.join("")
                    }, t.openingToClosingBracket = y, Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t
                }({})
            };
            const T = /\bvoid\s+main\s*\(\s*\)\s*{/g;

            function _(t) {
                return t.replace(/^[ \t]*#include +<([\w\d./]+)>/gm, (function(t, e) {
                    let r = o.ShaderChunk[e];
                    return r ? _(r) : t
                }))
            }
            const E = [];
            for (let st = 0; st < 256; st++) E[st] = (st < 16 ? "0" : "") + st.toString(16);
            const k = Object.assign || function() {
                    let t = arguments[0];
                    for (let e = 1, r = arguments.length; e < r; e++) {
                        let r = arguments[e];
                        if (r)
                            for (let e in r) r.hasOwnProperty(e) && (t[e] = r[e])
                    }
                    return t
                },
                A = Date.now(),
                R = new WeakMap,
                C = new Map;
            let O = 1e10;

            function U(t, e) {
                const r = function(t) {
                    const e = JSON.stringify(t, D);
                    let r = F.get(e);
                    null == r && F.set(e, r = ++M);
                    return r
                }(e);
                let n = R.get(t);
                if (n || R.set(t, n = Object.create(null)), n[r]) return new n[r];
                const i = `_onBeforeCompile${r}`,
                    s = function(n) {
                        t.onBeforeCompile.call(this, n);
                        const o = this.customProgramCacheKey() + "|" + n.vertexShader + "|" + n.fragmentShader;
                        let s = C[o];
                        if (!s) {
                            const t = function({
                                vertexShader: t,
                                fragmentShader: e
                            }, r, n) {
                                let {
                                    vertexDefs: i,
                                    vertexMainIntro: o,
                                    vertexMainOutro: s,
                                    vertexTransform: a,
                                    fragmentDefs: l,
                                    fragmentMainIntro: u,
                                    fragmentMainOutro: c,
                                    fragmentColorTransform: h,
                                    customRewriter: d,
                                    timeUniform: f
                                } = r;
                                i = i || "", o = o || "", s = s || "", l = l || "", u = u || "", c = c || "", (a || d) && (t = _(t));
                                (h || d) && (e = _(e = e.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm, "\n//!BEGIN_POST_CHUNK $1\n$&\n//!END_POST_CHUNK\n")));
                                if (d) {
                                    let r = d({
                                        vertexShader: t,
                                        fragmentShader: e
                                    });
                                    t = r.vertexShader, e = r.fragmentShader
                                }
                                if (h) {
                                    let t = [];
                                    e = e.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm, (e => (t.push(e), ""))), c = `${h}\n${t.join("\n")}\n${c}`
                                }
                                if (f) {
                                    const t = `\nuniform float ${f};\n`;
                                    i = t + i, l = t + l
                                }
                                a && (i = `${i}\nvoid troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {\n  ${a}\n}\n`, o = `\ntroika_position_${n} = vec3(position);\ntroika_normal_${n} = vec3(normal);\ntroika_uv_${n} = vec2(uv);\ntroikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});\n${o}\n`, t = (t = `vec3 troika_position_${n};\nvec3 troika_normal_${n};\nvec2 troika_uv_${n};\n${t}\n`).replace(/\b(position|normal|uv)\b/g, ((t, e, r, i) => /\battribute\s+vec[23]\s+$/.test(i.substr(0, r)) ? e : `troika_${e}_${n}`)));
                                return t = P(t, n, i, o, s), e = P(e, n, l, u, c), {
                                    vertexShader: t,
                                    fragmentShader: e
                                }
                            }(n, e, r);
                            s = C[o] = t
                        }
                        n.vertexShader = s.vertexShader, n.fragmentShader = s.fragmentShader, k(n.uniforms, this.uniforms), e.timeUniform && (n.uniforms[e.timeUniform] = {
                            get value() {
                                return Date.now() - A
                            }
                        }), this[i] && this[i](n)
                    },
                    a = function() {
                        return l(e.chained ? t : t.clone())
                    },
                    l = function(n) {
                        const i = Object.create(n, u);
                        return Object.defineProperty(i, "baseMaterial", {
                            value: t
                        }), Object.defineProperty(i, "id", {
                            value: O++
                        }), i.uuid = function() {
                            const t = 4294967295 * Math.random() | 0,
                                e = 4294967295 * Math.random() | 0,
                                r = 4294967295 * Math.random() | 0,
                                n = 4294967295 * Math.random() | 0;
                            return (E[255 & t] + E[t >> 8 & 255] + E[t >> 16 & 255] + E[t >> 24 & 255] + "-" + E[255 & e] + E[e >> 8 & 255] + "-" + E[e >> 16 & 15 | 64] + E[e >> 24 & 255] + "-" + E[63 & r | 128] + E[r >> 8 & 255] + "-" + E[r >> 16 & 255] + E[r >> 24 & 255] + E[255 & n] + E[n >> 8 & 255] + E[n >> 16 & 255] + E[n >> 24 & 255]).toUpperCase()
                        }(), i.uniforms = k({}, n.uniforms, e.uniforms), i.defines = k({}, n.defines, e.defines), i.defines[`TROIKA_DERIVED_MATERIAL_${r}`] = "", i.extensions = k({}, n.extensions, e.extensions), i._listeners = void 0, i
                    },
                    u = {
                        constructor: {
                            value: a
                        },
                        isDerivedMaterial: {
                            value: !0
                        },
                        customProgramCacheKey: {
                            writable: !0,
                            configurable: !0,
                            value: function() {
                                return t.customProgramCacheKey() + "|" + r
                            }
                        },
                        onBeforeCompile: {
                            get: () => s,
                            set(t) {
                                this[i] = t
                            }
                        },
                        copy: {
                            writable: !0,
                            configurable: !0,
                            value: function(e) {
                                return t.copy.call(this, e), t.isShaderMaterial || t.isDerivedMaterial || (k(this.extensions, e.extensions), k(this.defines, e.defines), k(this.uniforms, o.UniformsUtils.clone(e.uniforms))), this
                            }
                        },
                        clone: {
                            writable: !0,
                            configurable: !0,
                            value: function() {
                                const e = new t.constructor;
                                return l(e).copy(this)
                            }
                        },
                        getDepthMaterial: {
                            writable: !0,
                            configurable: !0,
                            value: function() {
                                let r = this._depthMaterial;
                                return r || (r = this._depthMaterial = U(t.isDerivedMaterial ? t.getDepthMaterial() : new o.MeshDepthMaterial({
                                    depthPacking: o.RGBADepthPacking
                                }), e), r.defines.IS_DEPTH_MATERIAL = "", r.uniforms = this.uniforms), r
                            }
                        },
                        getDistanceMaterial: {
                            writable: !0,
                            configurable: !0,
                            value: function() {
                                let r = this._distanceMaterial;
                                return r || (r = this._distanceMaterial = U(t.isDerivedMaterial ? t.getDistanceMaterial() : new o.MeshDistanceMaterial, e), r.defines.IS_DISTANCE_MATERIAL = "", r.uniforms = this.uniforms), r
                            }
                        },
                        dispose: {
                            writable: !0,
                            configurable: !0,
                            value() {
                                const {
                                    _depthMaterial: e,
                                    _distanceMaterial: r
                                } = this;
                                e && e.dispose(), r && r.dispose(), t.dispose.call(this)
                            }
                        }
                    };
                return n[r] = a, new a
            }

            function P(t, e, r, n, i) {
                return (n || i || r) && (t = t.replace(T, `\n${r}\nvoid troikaOrigMain${e}() {`), t += `\nvoid main() {\n  ${n}\n  troikaOrigMain${e}();\n  ${i}\n}`), t
            }

            function D(t, e) {
                return "uniforms" === t ? void 0 : "function" === typeof e ? e.toString() : e
            }
            let M = 0;
            const F = new Map;
            o.DoubleSide;
            const B = () => (self.performance || Date).now(),
                L = x();
            let j;
            const I = function() {
                    const t = [];
                    let e = 0;

                    function r() {
                        const n = B();
                        for (; t.length && B() - n < 5;) t.shift()();
                        e = t.length ? setTimeout(r, 0) : 0
                    }
                    return (...n) => {
                        const i = l();
                        return t.push((() => {
                            const t = B();
                            try {
                                L.webgl.generateIntoCanvas(...n), i.resolve({
                                    timing: B() - t
                                })
                            } catch (e) {
                                i.reject(e)
                            }
                        })), e || (e = setTimeout(r, 0)), i
                    }
                }(),
                V = function() {
                    const t = {};
                    let e = 0;
                    return function(r, n, i, o, s, a, l, u, c, h) {
                        const d = "TroikaTextSDFGenerator_JS_" + e++ % 4;
                        let f = t[d];
                        return f || (f = t[d] = {
                            workerModule: v({
                                name: d,
                                workerId: d,
                                dependencies: [x, B],
                                init(t, e) {
                                    const r = t().javascript.generate;
                                    return function(...t) {
                                        const n = e();
                                        return {
                                            textureData: r(...t),
                                            timing: e() - n
                                        }
                                    }
                                },
                                getTransferables: t => [t.textureData.buffer]
                            }),
                            requests: 0,
                            idleTimer: null
                        }), f.requests++, clearTimeout(f.idleTimer), f.workerModule(r, n, i, o, s, a).then((({
                            textureData: t,
                            timing: e
                        }) => {
                            const i = B(),
                                o = new Uint8Array(4 * t.length);
                            for (let r = 0; r < t.length; r++) o[4 * r + h] = t[r];
                            return L.webglUtils.renderImageData(l, o, u, c, r, n, 1 << 3 - h), e += B() - i, 0 === --f.requests && (f.idleTimer = setTimeout((() => {
                                ! function(t) {
                                    m[t] && m[t].forEach((function(t) {
                                        t()
                                    })), p[t] && (p[t].terminate(), delete p[t])
                                }(d)
                            }), 2e3)), {
                                timing: e
                            }
                        }))
                    }
                }();
            const W = L.webglUtils.resizeWebGLCanvasWithoutClearing;
            const z = v({
                    name: "Typr Font Parser",
                    dependencies: [function() {
                        return "undefined" == typeof window && (self.window = self),
                            function(t) {
                                var e = {
                                    parse: function(t) {
                                        var r = e._bin,
                                            n = new Uint8Array(t);
                                        if ("ttcf" == r.readASCII(n, 0, 4)) {
                                            var i = 4;
                                            r.readUshort(n, i), i += 2, r.readUshort(n, i), i += 2;
                                            var o = r.readUint(n, i);
                                            i += 4;
                                            for (var s = [], a = 0; a < o; a++) {
                                                var l = r.readUint(n, i);
                                                i += 4, s.push(e._readFont(n, l))
                                            }
                                            return s
                                        }
                                        return [e._readFont(n, 0)]
                                    },
                                    _readFont: function(t, r) {
                                        var n = e._bin,
                                            i = r;
                                        n.readFixed(t, r), r += 4;
                                        var o = n.readUshort(t, r);
                                        r += 2, n.readUshort(t, r), r += 2, n.readUshort(t, r), r += 2, n.readUshort(t, r), r += 2;
                                        for (var s = ["cmap", "head", "hhea", "maxp", "hmtx", "name", "OS/2", "post", "loca", "glyf", "kern", "CFF ", "GPOS", "GSUB", "SVG "], a = {
                                                _data: t,
                                                _offset: i
                                            }, l = {}, u = 0; u < o; u++) {
                                            var c = n.readASCII(t, r, 4);
                                            r += 4, n.readUint(t, r), r += 4;
                                            var h = n.readUint(t, r);
                                            r += 4;
                                            var d = n.readUint(t, r);
                                            r += 4, l[c] = {
                                                offset: h,
                                                length: d
                                            }
                                        }
                                        for (u = 0; u < s.length; u++) {
                                            var f = s[u];
                                            l[f] && (a[f.trim()] = e[f.trim()].parse(t, l[f].offset, l[f].length, a))
                                        }
                                        return a
                                    },
                                    _tabOffset: function(t, r, n) {
                                        for (var i = e._bin, o = i.readUshort(t, n + 4), s = n + 12, a = 0; a < o; a++) {
                                            var l = i.readASCII(t, s, 4);
                                            s += 4, i.readUint(t, s), s += 4;
                                            var u = i.readUint(t, s);
                                            if (s += 4, i.readUint(t, s), s += 4, l == r) return u
                                        }
                                        return 0
                                    }
                                };
                                e._bin = {
                                    readFixed: function(t, e) {
                                        return (t[e] << 8 | t[e + 1]) + (t[e + 2] << 8 | t[e + 3]) / 65540
                                    },
                                    readF2dot14: function(t, r) {
                                        return e._bin.readShort(t, r) / 16384
                                    },
                                    readInt: function(t, r) {
                                        return e._bin._view(t).getInt32(r)
                                    },
                                    readInt8: function(t, r) {
                                        return e._bin._view(t).getInt8(r)
                                    },
                                    readShort: function(t, r) {
                                        return e._bin._view(t).getInt16(r)
                                    },
                                    readUshort: function(t, r) {
                                        return e._bin._view(t).getUint16(r)
                                    },
                                    readUshorts: function(t, r, n) {
                                        for (var i = [], o = 0; o < n; o++) i.push(e._bin.readUshort(t, r + 2 * o));
                                        return i
                                    },
                                    readUint: function(t, r) {
                                        return e._bin._view(t).getUint32(r)
                                    },
                                    readUint64: function(t, r) {
                                        return 4294967296 * e._bin.readUint(t, r) + e._bin.readUint(t, r + 4)
                                    },
                                    readASCII: function(t, e, r) {
                                        for (var n = "", i = 0; i < r; i++) n += String.fromCharCode(t[e + i]);
                                        return n
                                    },
                                    readUnicode: function(t, e, r) {
                                        for (var n = "", i = 0; i < r; i++) {
                                            var o = t[e++] << 8 | t[e++];
                                            n += String.fromCharCode(o)
                                        }
                                        return n
                                    },
                                    _tdec: "undefined" != typeof window && window.TextDecoder ? new window.TextDecoder : null,
                                    readUTF8: function(t, r, n) {
                                        var i = e._bin._tdec;
                                        return i && 0 == r && n == t.length ? i.decode(t) : e._bin.readASCII(t, r, n)
                                    },
                                    readBytes: function(t, e, r) {
                                        for (var n = [], i = 0; i < r; i++) n.push(t[e + i]);
                                        return n
                                    },
                                    readASCIIArray: function(t, e, r) {
                                        for (var n = [], i = 0; i < r; i++) n.push(String.fromCharCode(t[e + i]));
                                        return n
                                    },
                                    _view: function(t) {
                                        return t._dataView || (t._dataView = t.buffer ? new DataView(t.buffer, t.byteOffset, t.byteLength) : new DataView(new Uint8Array(t).buffer))
                                    }
                                }, e._lctf = {}, e._lctf.parse = function(t, r, n, i, o) {
                                    var s = e._bin,
                                        a = {},
                                        l = r;
                                    s.readFixed(t, r), r += 4;
                                    var u = s.readUshort(t, r);
                                    r += 2;
                                    var c = s.readUshort(t, r);
                                    r += 2;
                                    var h = s.readUshort(t, r);
                                    return r += 2, a.scriptList = e._lctf.readScriptList(t, l + u), a.featureList = e._lctf.readFeatureList(t, l + c), a.lookupList = e._lctf.readLookupList(t, l + h, o), a
                                }, e._lctf.readLookupList = function(t, r, n) {
                                    var i = e._bin,
                                        o = r,
                                        s = [],
                                        a = i.readUshort(t, r);
                                    r += 2;
                                    for (var l = 0; l < a; l++) {
                                        var u = i.readUshort(t, r);
                                        r += 2;
                                        var c = e._lctf.readLookupTable(t, o + u, n);
                                        s.push(c)
                                    }
                                    return s
                                }, e._lctf.readLookupTable = function(t, r, n) {
                                    var i = e._bin,
                                        o = r,
                                        s = {
                                            tabs: []
                                        };
                                    s.ltype = i.readUshort(t, r), r += 2, s.flag = i.readUshort(t, r), r += 2;
                                    var a = i.readUshort(t, r);
                                    r += 2;
                                    for (var l = s.ltype, u = 0; u < a; u++) {
                                        var c = i.readUshort(t, r);
                                        r += 2;
                                        var h = n(t, l, o + c, s);
                                        s.tabs.push(h)
                                    }
                                    return s
                                }, e._lctf.numOfOnes = function(t) {
                                    for (var e = 0, r = 0; r < 32; r++) 0 != (t >>> r & 1) && e++;
                                    return e
                                }, e._lctf.readClassDef = function(t, r) {
                                    var n = e._bin,
                                        i = [],
                                        o = n.readUshort(t, r);
                                    if (r += 2, 1 == o) {
                                        var s = n.readUshort(t, r);
                                        r += 2;
                                        var a = n.readUshort(t, r);
                                        r += 2;
                                        for (var l = 0; l < a; l++) i.push(s + l), i.push(s + l), i.push(n.readUshort(t, r)), r += 2
                                    }
                                    if (2 == o) {
                                        var u = n.readUshort(t, r);
                                        for (r += 2, l = 0; l < u; l++) i.push(n.readUshort(t, r)), r += 2, i.push(n.readUshort(t, r)), r += 2, i.push(n.readUshort(t, r)), r += 2
                                    }
                                    return i
                                }, e._lctf.getInterval = function(t, e) {
                                    for (var r = 0; r < t.length; r += 3) {
                                        var n = t[r],
                                            i = t[r + 1];
                                        if (t[r + 2], n <= e && e <= i) return r
                                    }
                                    return -1
                                }, e._lctf.readCoverage = function(t, r) {
                                    var n = e._bin,
                                        i = {};
                                    i.fmt = n.readUshort(t, r), r += 2;
                                    var o = n.readUshort(t, r);
                                    return r += 2, 1 == i.fmt && (i.tab = n.readUshorts(t, r, o)), 2 == i.fmt && (i.tab = n.readUshorts(t, r, 3 * o)), i
                                }, e._lctf.coverageIndex = function(t, r) {
                                    var n = t.tab;
                                    if (1 == t.fmt) return n.indexOf(r);
                                    if (2 == t.fmt) {
                                        var i = e._lctf.getInterval(n, r);
                                        if (-1 != i) return n[i + 2] + (r - n[i])
                                    }
                                    return -1
                                }, e._lctf.readFeatureList = function(t, r) {
                                    var n = e._bin,
                                        i = r,
                                        o = [],
                                        s = n.readUshort(t, r);
                                    r += 2;
                                    for (var a = 0; a < s; a++) {
                                        var l = n.readASCII(t, r, 4);
                                        r += 4;
                                        var u = n.readUshort(t, r);
                                        r += 2;
                                        var c = e._lctf.readFeatureTable(t, i + u);
                                        c.tag = l.trim(), o.push(c)
                                    }
                                    return o
                                }, e._lctf.readFeatureTable = function(t, r) {
                                    var n = e._bin,
                                        i = r,
                                        o = {},
                                        s = n.readUshort(t, r);
                                    r += 2, s > 0 && (o.featureParams = i + s);
                                    var a = n.readUshort(t, r);
                                    r += 2, o.tab = [];
                                    for (var l = 0; l < a; l++) o.tab.push(n.readUshort(t, r + 2 * l));
                                    return o
                                }, e._lctf.readScriptList = function(t, r) {
                                    var n = e._bin,
                                        i = r,
                                        o = {},
                                        s = n.readUshort(t, r);
                                    r += 2;
                                    for (var a = 0; a < s; a++) {
                                        var l = n.readASCII(t, r, 4);
                                        r += 4;
                                        var u = n.readUshort(t, r);
                                        r += 2, o[l.trim()] = e._lctf.readScriptTable(t, i + u)
                                    }
                                    return o
                                }, e._lctf.readScriptTable = function(t, r) {
                                    var n = e._bin,
                                        i = r,
                                        o = {},
                                        s = n.readUshort(t, r);
                                    r += 2, o.default = e._lctf.readLangSysTable(t, i + s);
                                    var a = n.readUshort(t, r);
                                    r += 2;
                                    for (var l = 0; l < a; l++) {
                                        var u = n.readASCII(t, r, 4);
                                        r += 4;
                                        var c = n.readUshort(t, r);
                                        r += 2, o[u.trim()] = e._lctf.readLangSysTable(t, i + c)
                                    }
                                    return o
                                }, e._lctf.readLangSysTable = function(t, r) {
                                    var n = e._bin,
                                        i = {};
                                    n.readUshort(t, r), r += 2, i.reqFeature = n.readUshort(t, r), r += 2;
                                    var o = n.readUshort(t, r);
                                    return r += 2, i.features = n.readUshorts(t, r, o), i
                                }, e.CFF = {}, e.CFF.parse = function(t, r, n) {
                                    var i = e._bin;
                                    (t = new Uint8Array(t.buffer, r, n))[r = 0], t[++r], t[++r], t[++r], r++;
                                    var o = [];
                                    r = e.CFF.readIndex(t, r, o);
                                    for (var s = [], a = 0; a < o.length - 1; a++) s.push(i.readASCII(t, r + o[a], o[a + 1] - o[a]));
                                    r += o[o.length - 1];
                                    var l = [];
                                    r = e.CFF.readIndex(t, r, l);
                                    var u = [];
                                    for (a = 0; a < l.length - 1; a++) u.push(e.CFF.readDict(t, r + l[a], r + l[a + 1]));
                                    r += l[l.length - 1];
                                    var c = u[0],
                                        h = [];
                                    r = e.CFF.readIndex(t, r, h);
                                    var d = [];
                                    for (a = 0; a < h.length - 1; a++) d.push(i.readASCII(t, r + h[a], h[a + 1] - h[a]));
                                    if (r += h[h.length - 1], e.CFF.readSubrs(t, r, c), c.CharStrings) {
                                        r = c.CharStrings, h = [], r = e.CFF.readIndex(t, r, h);
                                        var f = [];
                                        for (a = 0; a < h.length - 1; a++) f.push(i.readBytes(t, r + h[a], h[a + 1] - h[a]));
                                        c.CharStrings = f
                                    }
                                    if (c.ROS) {
                                        r = c.FDArray;
                                        var p = [];
                                        for (r = e.CFF.readIndex(t, r, p), c.FDArray = [], a = 0; a < p.length - 1; a++) {
                                            var m = e.CFF.readDict(t, r + p[a], r + p[a + 1]);
                                            e.CFF._readFDict(t, m, d), c.FDArray.push(m)
                                        }
                                        r += p[p.length - 1], r = c.FDSelect, c.FDSelect = [];
                                        var g = t[r];
                                        if (r++, 3 != g) throw g;
                                        var v = i.readUshort(t, r);
                                        for (r += 2, a = 0; a < v + 1; a++) c.FDSelect.push(i.readUshort(t, r), t[r + 2]), r += 3
                                    }
                                    return c.Encoding && (c.Encoding = e.CFF.readEncoding(t, c.Encoding, c.CharStrings.length)), c.charset && (c.charset = e.CFF.readCharset(t, c.charset, c.CharStrings.length)), e.CFF._readFDict(t, c, d), c
                                }, e.CFF._readFDict = function(t, r, n) {
                                    var i;
                                    for (var o in r.Private && (i = r.Private[1], r.Private = e.CFF.readDict(t, i, i + r.Private[0]), r.Private.Subrs && e.CFF.readSubrs(t, i + r.Private.Subrs, r.Private)), r) - 1 != ["FamilyName", "FontName", "FullName", "Notice", "version", "Copyright"].indexOf(o) && (r[o] = n[r[o] - 426 + 35])
                                }, e.CFF.readSubrs = function(t, r, n) {
                                    var i = e._bin,
                                        o = [];
                                    r = e.CFF.readIndex(t, r, o);
                                    var s, a = o.length;
                                    s = a < 1240 ? 107 : a < 33900 ? 1131 : 32768, n.Bias = s, n.Subrs = [];
                                    for (var l = 0; l < o.length - 1; l++) n.Subrs.push(i.readBytes(t, r + o[l], o[l + 1] - o[l]))
                                }, e.CFF.tableSE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 0, 111, 112, 113, 114, 0, 115, 116, 117, 118, 119, 120, 121, 122, 0, 123, 0, 124, 125, 126, 127, 128, 129, 130, 131, 0, 132, 133, 0, 134, 135, 136, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 139, 0, 0, 0, 0, 140, 141, 142, 143, 0, 0, 0, 0, 0, 144, 0, 0, 0, 145, 0, 0, 146, 147, 148, 149, 0, 0, 0, 0], e.CFF.glyphByUnicode = function(t, e) {
                                    for (var r = 0; r < t.charset.length; r++)
                                        if (t.charset[r] == e) return r;
                                    return -1
                                }, e.CFF.glyphBySE = function(t, r) {
                                    return r < 0 || r > 255 ? -1 : e.CFF.glyphByUnicode(t, e.CFF.tableSE[r])
                                }, e.CFF.readEncoding = function(t, r, n) {
                                    e._bin;
                                    var i = [".notdef"],
                                        o = t[r];
                                    if (r++, 0 != o) throw "error: unknown encoding format: " + o;
                                    var s = t[r];
                                    r++;
                                    for (var a = 0; a < s; a++) i.push(t[r + a]);
                                    return i
                                }, e.CFF.readCharset = function(t, r, n) {
                                    var i = e._bin,
                                        o = [".notdef"],
                                        s = t[r];
                                    if (r++, 0 == s)
                                        for (var a = 0; a < n; a++) {
                                            var l = i.readUshort(t, r);
                                            r += 2, o.push(l)
                                        } else {
                                            if (1 != s && 2 != s) throw "error: format: " + s;
                                            for (; o.length < n;) {
                                                l = i.readUshort(t, r), r += 2;
                                                var u = 0;
                                                for (1 == s ? (u = t[r], r++) : (u = i.readUshort(t, r), r += 2), a = 0; a <= u; a++) o.push(l), l++
                                            }
                                        }
                                    return o
                                }, e.CFF.readIndex = function(t, r, n) {
                                    var i = e._bin,
                                        o = i.readUshort(t, r) + 1,
                                        s = t[r += 2];
                                    if (r++, 1 == s)
                                        for (var a = 0; a < o; a++) n.push(t[r + a]);
                                    else if (2 == s)
                                        for (a = 0; a < o; a++) n.push(i.readUshort(t, r + 2 * a));
                                    else if (3 == s)
                                        for (a = 0; a < o; a++) n.push(16777215 & i.readUint(t, r + 3 * a - 1));
                                    else if (1 != o) throw "unsupported offset size: " + s + ", count: " + o;
                                    return (r += o * s) - 1
                                }, e.CFF.getCharString = function(t, r, n) {
                                    var i = e._bin,
                                        o = t[r],
                                        s = t[r + 1];
                                    t[r + 2], t[r + 3], t[r + 4];
                                    var a = 1,
                                        l = null,
                                        u = null;
                                    o <= 20 && (l = o, a = 1), 12 == o && (l = 100 * o + s, a = 2), 21 <= o && o <= 27 && (l = o, a = 1), 28 == o && (u = i.readShort(t, r + 1), a = 3), 29 <= o && o <= 31 && (l = o, a = 1), 32 <= o && o <= 246 && (u = o - 139, a = 1), 247 <= o && o <= 250 && (u = 256 * (o - 247) + s + 108, a = 2), 251 <= o && o <= 254 && (u = 256 * -(o - 251) - s - 108, a = 2), 255 == o && (u = i.readInt(t, r + 1) / 65535, a = 5), n.val = null != u ? u : "o" + l, n.size = a
                                }, e.CFF.readCharString = function(t, r, n) {
                                    for (var i = r + n, o = e._bin, s = []; r < i;) {
                                        var a = t[r],
                                            l = t[r + 1];
                                        t[r + 2], t[r + 3], t[r + 4];
                                        var u = 1,
                                            c = null,
                                            h = null;
                                        a <= 20 && (c = a, u = 1), 12 == a && (c = 100 * a + l, u = 2), 19 != a && 20 != a || (c = a, u = 2), 21 <= a && a <= 27 && (c = a, u = 1), 28 == a && (h = o.readShort(t, r + 1), u = 3), 29 <= a && a <= 31 && (c = a, u = 1), 32 <= a && a <= 246 && (h = a - 139, u = 1), 247 <= a && a <= 250 && (h = 256 * (a - 247) + l + 108, u = 2), 251 <= a && a <= 254 && (h = 256 * -(a - 251) - l - 108, u = 2), 255 == a && (h = o.readInt(t, r + 1) / 65535, u = 5), s.push(null != h ? h : "o" + c), r += u
                                    }
                                    return s
                                }, e.CFF.readDict = function(t, r, n) {
                                    for (var i = e._bin, o = {}, s = []; r < n;) {
                                        var a = t[r],
                                            l = t[r + 1];
                                        t[r + 2], t[r + 3], t[r + 4];
                                        var u = 1,
                                            c = null,
                                            h = null;
                                        if (28 == a && (h = i.readShort(t, r + 1), u = 3), 29 == a && (h = i.readInt(t, r + 1), u = 5), 32 <= a && a <= 246 && (h = a - 139, u = 1), 247 <= a && a <= 250 && (h = 256 * (a - 247) + l + 108, u = 2), 251 <= a && a <= 254 && (h = 256 * -(a - 251) - l - 108, u = 2), 255 == a) throw h = i.readInt(t, r + 1) / 65535, u = 5, "unknown number";
                                        if (30 == a) {
                                            var d = [];
                                            for (u = 1;;) {
                                                var f = t[r + u];
                                                u++;
                                                var p = f >> 4,
                                                    m = 15 & f;
                                                if (15 != p && d.push(p), 15 != m && d.push(m), 15 == m) break
                                            }
                                            for (var g = "", v = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber"], y = 0; y < d.length; y++) g += v[d[y]];
                                            h = parseFloat(g)
                                        }
                                        a <= 21 && (c = ["version", "Notice", "FullName", "FamilyName", "Weight", "FontBBox", "BlueValues", "OtherBlues", "FamilyBlues", "FamilyOtherBlues", "StdHW", "StdVW", "escape", "UniqueID", "XUID", "charset", "Encoding", "CharStrings", "Private", "Subrs", "defaultWidthX", "nominalWidthX"][a], u = 1, 12 == a && (c = ["Copyright", "isFixedPitch", "ItalicAngle", "UnderlinePosition", "UnderlineThickness", "PaintType", "CharstringType", "FontMatrix", "StrokeWidth", "BlueScale", "BlueShift", "BlueFuzz", "StemSnapH", "StemSnapV", "ForceBold", 0, 0, "LanguageGroup", "ExpansionFactor", "initialRandomSeed", "SyntheticBase", "PostScript", "BaseFontName", "BaseFontBlend", 0, 0, 0, 0, 0, 0, "ROS", "CIDFontVersion", "CIDFontRevision", "CIDFontType", "CIDCount", "UIDBase", "FDArray", "FDSelect", "FontName"][l], u = 2)), null != c ? (o[c] = 1 == s.length ? s[0] : s, s = []) : s.push(h), r += u
                                    }
                                    return o
                                }, e.cmap = {}, e.cmap.parse = function(t, r, n) {
                                    t = new Uint8Array(t.buffer, r, n), r = 0;
                                    var i = e._bin,
                                        o = {};
                                    i.readUshort(t, r), r += 2;
                                    var s = i.readUshort(t, r);
                                    r += 2;
                                    var a = [];
                                    o.tables = [];
                                    for (var l = 0; l < s; l++) {
                                        var u = i.readUshort(t, r);
                                        r += 2;
                                        var c = i.readUshort(t, r);
                                        r += 2;
                                        var h = i.readUint(t, r);
                                        r += 4;
                                        var d = "p" + u + "e" + c,
                                            f = a.indexOf(h);
                                        if (-1 == f) {
                                            var p;
                                            f = o.tables.length, a.push(h);
                                            var m = i.readUshort(t, h);
                                            0 == m ? p = e.cmap.parse0(t, h) : 4 == m ? p = e.cmap.parse4(t, h) : 6 == m ? p = e.cmap.parse6(t, h) : 12 == m ? p = e.cmap.parse12(t, h) : console.debug("unknown format: " + m, u, c, h), o.tables.push(p)
                                        }
                                        if (null != o[d]) throw "multiple tables for one platform+encoding";
                                        o[d] = f
                                    }
                                    return o
                                }, e.cmap.parse0 = function(t, r) {
                                    var n = e._bin,
                                        i = {};
                                    i.format = n.readUshort(t, r), r += 2;
                                    var o = n.readUshort(t, r);
                                    r += 2, n.readUshort(t, r), r += 2, i.map = [];
                                    for (var s = 0; s < o - 6; s++) i.map.push(t[r + s]);
                                    return i
                                }, e.cmap.parse4 = function(t, r) {
                                    var n = e._bin,
                                        i = r,
                                        o = {};
                                    o.format = n.readUshort(t, r), r += 2;
                                    var s = n.readUshort(t, r);
                                    r += 2, n.readUshort(t, r), r += 2;
                                    var a = n.readUshort(t, r);
                                    r += 2;
                                    var l = a / 2;
                                    o.searchRange = n.readUshort(t, r), r += 2, o.entrySelector = n.readUshort(t, r), r += 2, o.rangeShift = n.readUshort(t, r), r += 2, o.endCount = n.readUshorts(t, r, l), r += 2 * l, r += 2, o.startCount = n.readUshorts(t, r, l), r += 2 * l, o.idDelta = [];
                                    for (var u = 0; u < l; u++) o.idDelta.push(n.readShort(t, r)), r += 2;
                                    for (o.idRangeOffset = n.readUshorts(t, r, l), r += 2 * l, o.glyphIdArray = []; r < i + s;) o.glyphIdArray.push(n.readUshort(t, r)), r += 2;
                                    return o
                                }, e.cmap.parse6 = function(t, r) {
                                    var n = e._bin,
                                        i = {};
                                    i.format = n.readUshort(t, r), r += 2, n.readUshort(t, r), r += 2, n.readUshort(t, r), r += 2, i.firstCode = n.readUshort(t, r), r += 2;
                                    var o = n.readUshort(t, r);
                                    r += 2, i.glyphIdArray = [];
                                    for (var s = 0; s < o; s++) i.glyphIdArray.push(n.readUshort(t, r)), r += 2;
                                    return i
                                }, e.cmap.parse12 = function(t, r) {
                                    var n = e._bin,
                                        i = {};
                                    i.format = n.readUshort(t, r), r += 2, r += 2, n.readUint(t, r), r += 4, n.readUint(t, r), r += 4;
                                    var o = n.readUint(t, r);
                                    r += 4, i.groups = [];
                                    for (var s = 0; s < o; s++) {
                                        var a = r + 12 * s,
                                            l = n.readUint(t, a + 0),
                                            u = n.readUint(t, a + 4),
                                            c = n.readUint(t, a + 8);
                                        i.groups.push([l, u, c])
                                    }
                                    return i
                                }, e.glyf = {}, e.glyf.parse = function(t, e, r, n) {
                                    for (var i = [], o = 0; o < n.maxp.numGlyphs; o++) i.push(null);
                                    return i
                                }, e.glyf._parseGlyf = function(t, r) {
                                    var n = e._bin,
                                        i = t._data,
                                        o = e._tabOffset(i, "glyf", t._offset) + t.loca[r];
                                    if (t.loca[r] == t.loca[r + 1]) return null;
                                    var s = {};
                                    if (s.noc = n.readShort(i, o), o += 2, s.xMin = n.readShort(i, o), o += 2, s.yMin = n.readShort(i, o), o += 2, s.xMax = n.readShort(i, o), o += 2, s.yMax = n.readShort(i, o), o += 2, s.xMin >= s.xMax || s.yMin >= s.yMax) return null;
                                    if (s.noc > 0) {
                                        s.endPts = [];
                                        for (var a = 0; a < s.noc; a++) s.endPts.push(n.readUshort(i, o)), o += 2;
                                        var l = n.readUshort(i, o);
                                        if (o += 2, i.length - o < l) return null;
                                        s.instructions = n.readBytes(i, o, l), o += l;
                                        var u = s.endPts[s.noc - 1] + 1;
                                        for (s.flags = [], a = 0; a < u; a++) {
                                            var c = i[o];
                                            if (o++, s.flags.push(c), 0 != (8 & c)) {
                                                var h = i[o];
                                                o++;
                                                for (var d = 0; d < h; d++) s.flags.push(c), a++
                                            }
                                        }
                                        for (s.xs = [], a = 0; a < u; a++) {
                                            var f = 0 != (2 & s.flags[a]),
                                                p = 0 != (16 & s.flags[a]);
                                            f ? (s.xs.push(p ? i[o] : -i[o]), o++) : p ? s.xs.push(0) : (s.xs.push(n.readShort(i, o)), o += 2)
                                        }
                                        for (s.ys = [], a = 0; a < u; a++) f = 0 != (4 & s.flags[a]), p = 0 != (32 & s.flags[a]), f ? (s.ys.push(p ? i[o] : -i[o]), o++) : p ? s.ys.push(0) : (s.ys.push(n.readShort(i, o)), o += 2);
                                        var m = 0,
                                            g = 0;
                                        for (a = 0; a < u; a++) m += s.xs[a], g += s.ys[a], s.xs[a] = m, s.ys[a] = g
                                    } else {
                                        var v;
                                        s.parts = [];
                                        do {
                                            v = n.readUshort(i, o), o += 2;
                                            var y = {
                                                m: {
                                                    a: 1,
                                                    b: 0,
                                                    c: 0,
                                                    d: 1,
                                                    tx: 0,
                                                    ty: 0
                                                },
                                                p1: -1,
                                                p2: -1
                                            };
                                            if (s.parts.push(y), y.glyphIndex = n.readUshort(i, o), o += 2, 1 & v) {
                                                var b = n.readShort(i, o);
                                                o += 2;
                                                var w = n.readShort(i, o);
                                                o += 2
                                            } else b = n.readInt8(i, o), o++, w = n.readInt8(i, o), o++;
                                            2 & v ? (y.m.tx = b, y.m.ty = w) : (y.p1 = b, y.p2 = w), 8 & v ? (y.m.a = y.m.d = n.readF2dot14(i, o), o += 2) : 64 & v ? (y.m.a = n.readF2dot14(i, o), o += 2, y.m.d = n.readF2dot14(i, o), o += 2) : 128 & v && (y.m.a = n.readF2dot14(i, o), o += 2, y.m.b = n.readF2dot14(i, o), o += 2, y.m.c = n.readF2dot14(i, o), o += 2, y.m.d = n.readF2dot14(i, o), o += 2)
                                        } while (32 & v);
                                        if (256 & v) {
                                            var x = n.readUshort(i, o);
                                            for (o += 2, s.instr = [], a = 0; a < x; a++) s.instr.push(i[o]), o++
                                        }
                                    }
                                    return s
                                }, e.GPOS = {}, e.GPOS.parse = function(t, r, n, i) {
                                    return e._lctf.parse(t, r, n, i, e.GPOS.subt)
                                }, e.GPOS.subt = function(t, r, n, i) {
                                    var o = e._bin,
                                        s = n,
                                        a = {};
                                    if (a.fmt = o.readUshort(t, n), n += 2, 1 == r || 2 == r || 3 == r || 7 == r || 8 == r && a.fmt <= 2) {
                                        var l = o.readUshort(t, n);
                                        n += 2, a.coverage = e._lctf.readCoverage(t, l + s)
                                    }
                                    if (1 == r && 1 == a.fmt) {
                                        var u = o.readUshort(t, n);
                                        n += 2;
                                        var c = e._lctf.numOfOnes(u);
                                        0 != u && (a.pos = e.GPOS.readValueRecord(t, n, u))
                                    } else if (2 == r && a.fmt >= 1 && a.fmt <= 2) {
                                        u = o.readUshort(t, n), n += 2;
                                        var h = o.readUshort(t, n);
                                        n += 2, c = e._lctf.numOfOnes(u);
                                        var d = e._lctf.numOfOnes(h);
                                        if (1 == a.fmt) {
                                            a.pairsets = [];
                                            var f = o.readUshort(t, n);
                                            n += 2;
                                            for (var p = 0; p < f; p++) {
                                                var m = s + o.readUshort(t, n);
                                                n += 2;
                                                var g = o.readUshort(t, m);
                                                m += 2;
                                                for (var v = [], y = 0; y < g; y++) {
                                                    var b = o.readUshort(t, m);
                                                    m += 2, 0 != u && (E = e.GPOS.readValueRecord(t, m, u), m += 2 * c), 0 != h && (k = e.GPOS.readValueRecord(t, m, h), m += 2 * d), v.push({
                                                        gid2: b,
                                                        val1: E,
                                                        val2: k
                                                    })
                                                }
                                                a.pairsets.push(v)
                                            }
                                        }
                                        if (2 == a.fmt) {
                                            var w = o.readUshort(t, n);
                                            n += 2;
                                            var x = o.readUshort(t, n);
                                            n += 2;
                                            var S = o.readUshort(t, n);
                                            n += 2;
                                            var T = o.readUshort(t, n);
                                            for (n += 2, a.classDef1 = e._lctf.readClassDef(t, s + w), a.classDef2 = e._lctf.readClassDef(t, s + x), a.matrix = [], p = 0; p < S; p++) {
                                                var _ = [];
                                                for (y = 0; y < T; y++) {
                                                    var E = null,
                                                        k = null;
                                                    0 != u && (E = e.GPOS.readValueRecord(t, n, u), n += 2 * c), 0 != h && (k = e.GPOS.readValueRecord(t, n, h), n += 2 * d), _.push({
                                                        val1: E,
                                                        val2: k
                                                    })
                                                }
                                                a.matrix.push(_)
                                            }
                                        }
                                    } else {
                                        if (9 == r && 1 == a.fmt) {
                                            var A = o.readUshort(t, n);
                                            n += 2;
                                            var R = o.readUint(t, n);
                                            if (n += 4, 9 == i.ltype) i.ltype = A;
                                            else if (i.ltype != A) throw "invalid extension substitution";
                                            return e.GPOS.subt(t, i.ltype, s + R)
                                        }
                                        console.debug("unsupported GPOS table LookupType", r, "format", a.fmt)
                                    }
                                    return a
                                }, e.GPOS.readValueRecord = function(t, r, n) {
                                    var i = e._bin,
                                        o = [];
                                    return o.push(1 & n ? i.readShort(t, r) : 0), r += 1 & n ? 2 : 0, o.push(2 & n ? i.readShort(t, r) : 0), r += 2 & n ? 2 : 0, o.push(4 & n ? i.readShort(t, r) : 0), r += 4 & n ? 2 : 0, o.push(8 & n ? i.readShort(t, r) : 0), r += 8 & n ? 2 : 0, o
                                }, e.GSUB = {}, e.GSUB.parse = function(t, r, n, i) {
                                    return e._lctf.parse(t, r, n, i, e.GSUB.subt)
                                }, e.GSUB.subt = function(t, r, n, i) {
                                    var o = e._bin,
                                        s = n,
                                        a = {};
                                    if (a.fmt = o.readUshort(t, n), n += 2, 1 != r && 4 != r && 5 != r && 6 != r) return null;
                                    if (1 == r || 4 == r || 5 == r && a.fmt <= 2 || 6 == r && a.fmt <= 2) {
                                        var l = o.readUshort(t, n);
                                        n += 2, a.coverage = e._lctf.readCoverage(t, s + l)
                                    }
                                    if (1 == r && a.fmt >= 1 && a.fmt <= 2) {
                                        if (1 == a.fmt) a.delta = o.readShort(t, n), n += 2;
                                        else if (2 == a.fmt) {
                                            var u = o.readUshort(t, n);
                                            n += 2, a.newg = o.readUshorts(t, n, u), n += 2 * a.newg.length
                                        }
                                    } else if (4 == r) {
                                        a.vals = [], u = o.readUshort(t, n), n += 2;
                                        for (var c = 0; c < u; c++) {
                                            var h = o.readUshort(t, n);
                                            n += 2, a.vals.push(e.GSUB.readLigatureSet(t, s + h))
                                        }
                                    } else if (5 == r && 2 == a.fmt) {
                                        if (2 == a.fmt) {
                                            var d = o.readUshort(t, n);
                                            n += 2, a.cDef = e._lctf.readClassDef(t, s + d), a.scset = [];
                                            var f = o.readUshort(t, n);
                                            for (n += 2, c = 0; c < f; c++) {
                                                var p = o.readUshort(t, n);
                                                n += 2, a.scset.push(0 == p ? null : e.GSUB.readSubClassSet(t, s + p))
                                            }
                                        }
                                    } else if (6 == r && 3 == a.fmt) {
                                        if (3 == a.fmt) {
                                            for (c = 0; c < 3; c++) {
                                                u = o.readUshort(t, n), n += 2;
                                                for (var m = [], g = 0; g < u; g++) m.push(e._lctf.readCoverage(t, s + o.readUshort(t, n + 2 * g)));
                                                n += 2 * u, 0 == c && (a.backCvg = m), 1 == c && (a.inptCvg = m), 2 == c && (a.ahedCvg = m)
                                            }
                                            u = o.readUshort(t, n), n += 2, a.lookupRec = e.GSUB.readSubstLookupRecords(t, n, u)
                                        }
                                    } else {
                                        if (7 == r && 1 == a.fmt) {
                                            var v = o.readUshort(t, n);
                                            n += 2;
                                            var y = o.readUint(t, n);
                                            if (n += 4, 9 == i.ltype) i.ltype = v;
                                            else if (i.ltype != v) throw "invalid extension substitution";
                                            return e.GSUB.subt(t, i.ltype, s + y)
                                        }
                                        console.debug("unsupported GSUB table LookupType", r, "format", a.fmt)
                                    }
                                    return a
                                }, e.GSUB.readSubClassSet = function(t, r) {
                                    var n = e._bin.readUshort,
                                        i = r,
                                        o = [],
                                        s = n(t, r);
                                    r += 2;
                                    for (var a = 0; a < s; a++) {
                                        var l = n(t, r);
                                        r += 2, o.push(e.GSUB.readSubClassRule(t, i + l))
                                    }
                                    return o
                                }, e.GSUB.readSubClassRule = function(t, r) {
                                    var n = e._bin.readUshort,
                                        i = {},
                                        o = n(t, r),
                                        s = n(t, r += 2);
                                    r += 2, i.input = [];
                                    for (var a = 0; a < o - 1; a++) i.input.push(n(t, r)), r += 2;
                                    return i.substLookupRecords = e.GSUB.readSubstLookupRecords(t, r, s), i
                                }, e.GSUB.readSubstLookupRecords = function(t, r, n) {
                                    for (var i = e._bin.readUshort, o = [], s = 0; s < n; s++) o.push(i(t, r), i(t, r + 2)), r += 4;
                                    return o
                                }, e.GSUB.readChainSubClassSet = function(t, r) {
                                    var n = e._bin,
                                        i = r,
                                        o = [],
                                        s = n.readUshort(t, r);
                                    r += 2;
                                    for (var a = 0; a < s; a++) {
                                        var l = n.readUshort(t, r);
                                        r += 2, o.push(e.GSUB.readChainSubClassRule(t, i + l))
                                    }
                                    return o
                                }, e.GSUB.readChainSubClassRule = function(t, r) {
                                    for (var n = e._bin, i = {}, o = ["backtrack", "input", "lookahead"], s = 0; s < o.length; s++) {
                                        var a = n.readUshort(t, r);
                                        r += 2, 1 == s && a--, i[o[s]] = n.readUshorts(t, r, a), r += 2 * i[o[s]].length
                                    }
                                    return a = n.readUshort(t, r), r += 2, i.subst = n.readUshorts(t, r, 2 * a), r += 2 * i.subst.length, i
                                }, e.GSUB.readLigatureSet = function(t, r) {
                                    var n = e._bin,
                                        i = r,
                                        o = [],
                                        s = n.readUshort(t, r);
                                    r += 2;
                                    for (var a = 0; a < s; a++) {
                                        var l = n.readUshort(t, r);
                                        r += 2, o.push(e.GSUB.readLigature(t, i + l))
                                    }
                                    return o
                                }, e.GSUB.readLigature = function(t, r) {
                                    var n = e._bin,
                                        i = {
                                            chain: []
                                        };
                                    i.nglyph = n.readUshort(t, r), r += 2;
                                    var o = n.readUshort(t, r);
                                    r += 2;
                                    for (var s = 0; s < o - 1; s++) i.chain.push(n.readUshort(t, r)), r += 2;
                                    return i
                                }, e.head = {}, e.head.parse = function(t, r, n) {
                                    var i = e._bin,
                                        o = {};
                                    return i.readFixed(t, r), r += 4, o.fontRevision = i.readFixed(t, r), r += 4, i.readUint(t, r), r += 4, i.readUint(t, r), r += 4, o.flags = i.readUshort(t, r), r += 2, o.unitsPerEm = i.readUshort(t, r), r += 2, o.created = i.readUint64(t, r), r += 8, o.modified = i.readUint64(t, r), r += 8, o.xMin = i.readShort(t, r), r += 2, o.yMin = i.readShort(t, r), r += 2, o.xMax = i.readShort(t, r), r += 2, o.yMax = i.readShort(t, r), r += 2, o.macStyle = i.readUshort(t, r), r += 2, o.lowestRecPPEM = i.readUshort(t, r), r += 2, o.fontDirectionHint = i.readShort(t, r), r += 2, o.indexToLocFormat = i.readShort(t, r), r += 2, o.glyphDataFormat = i.readShort(t, r), r += 2, o
                                }, e.hhea = {}, e.hhea.parse = function(t, r, n) {
                                    var i = e._bin,
                                        o = {};
                                    return i.readFixed(t, r), r += 4, o.ascender = i.readShort(t, r), r += 2, o.descender = i.readShort(t, r), r += 2, o.lineGap = i.readShort(t, r), r += 2, o.advanceWidthMax = i.readUshort(t, r), r += 2, o.minLeftSideBearing = i.readShort(t, r), r += 2, o.minRightSideBearing = i.readShort(t, r), r += 2, o.xMaxExtent = i.readShort(t, r), r += 2, o.caretSlopeRise = i.readShort(t, r), r += 2, o.caretSlopeRun = i.readShort(t, r), r += 2, o.caretOffset = i.readShort(t, r), r += 2, r += 8, o.metricDataFormat = i.readShort(t, r), r += 2, o.numberOfHMetrics = i.readUshort(t, r), r += 2, o
                                }, e.hmtx = {}, e.hmtx.parse = function(t, r, n, i) {
                                    for (var o = e._bin, s = {
                                            aWidth: [],
                                            lsBearing: []
                                        }, a = 0, l = 0, u = 0; u < i.maxp.numGlyphs; u++) u < i.hhea.numberOfHMetrics && (a = o.readUshort(t, r), r += 2, l = o.readShort(t, r), r += 2), s.aWidth.push(a), s.lsBearing.push(l);
                                    return s
                                }, e.kern = {}, e.kern.parse = function(t, r, n, i) {
                                    var o = e._bin,
                                        s = o.readUshort(t, r);
                                    if (r += 2, 1 == s) return e.kern.parseV1(t, r - 2, n, i);
                                    var a = o.readUshort(t, r);
                                    r += 2;
                                    for (var l = {
                                            glyph1: [],
                                            rval: []
                                        }, u = 0; u < a; u++) {
                                        r += 2, n = o.readUshort(t, r), r += 2;
                                        var c = o.readUshort(t, r);
                                        r += 2;
                                        var h = c >>> 8;
                                        if (0 != (h &= 15)) throw "unknown kern table format: " + h;
                                        r = e.kern.readFormat0(t, r, l)
                                    }
                                    return l
                                }, e.kern.parseV1 = function(t, r, n, i) {
                                    var o = e._bin;
                                    o.readFixed(t, r), r += 4;
                                    var s = o.readUint(t, r);
                                    r += 4;
                                    for (var a = {
                                            glyph1: [],
                                            rval: []
                                        }, l = 0; l < s; l++) {
                                        o.readUint(t, r), r += 4;
                                        var u = o.readUshort(t, r);
                                        r += 2, o.readUshort(t, r), r += 2;
                                        var c = u >>> 8;
                                        if (0 != (c &= 15)) throw "unknown kern table format: " + c;
                                        r = e.kern.readFormat0(t, r, a)
                                    }
                                    return a
                                }, e.kern.readFormat0 = function(t, r, n) {
                                    var i = e._bin,
                                        o = -1,
                                        s = i.readUshort(t, r);
                                    r += 2, i.readUshort(t, r), r += 2, i.readUshort(t, r), r += 2, i.readUshort(t, r), r += 2;
                                    for (var a = 0; a < s; a++) {
                                        var l = i.readUshort(t, r);
                                        r += 2;
                                        var u = i.readUshort(t, r);
                                        r += 2;
                                        var c = i.readShort(t, r);
                                        r += 2, l != o && (n.glyph1.push(l), n.rval.push({
                                            glyph2: [],
                                            vals: []
                                        }));
                                        var h = n.rval[n.rval.length - 1];
                                        h.glyph2.push(u), h.vals.push(c), o = l
                                    }
                                    return r
                                }, e.loca = {}, e.loca.parse = function(t, r, n, i) {
                                    var o = e._bin,
                                        s = [],
                                        a = i.head.indexToLocFormat,
                                        l = i.maxp.numGlyphs + 1;
                                    if (0 == a)
                                        for (var u = 0; u < l; u++) s.push(o.readUshort(t, r + (u << 1)) << 1);
                                    if (1 == a)
                                        for (u = 0; u < l; u++) s.push(o.readUint(t, r + (u << 2)));
                                    return s
                                }, e.maxp = {}, e.maxp.parse = function(t, r, n) {
                                    var i = e._bin,
                                        o = {},
                                        s = i.readUint(t, r);
                                    return r += 4, o.numGlyphs = i.readUshort(t, r), r += 2, 65536 == s && (o.maxPoints = i.readUshort(t, r), r += 2, o.maxContours = i.readUshort(t, r), r += 2, o.maxCompositePoints = i.readUshort(t, r), r += 2, o.maxCompositeContours = i.readUshort(t, r), r += 2, o.maxZones = i.readUshort(t, r), r += 2, o.maxTwilightPoints = i.readUshort(t, r), r += 2, o.maxStorage = i.readUshort(t, r), r += 2, o.maxFunctionDefs = i.readUshort(t, r), r += 2, o.maxInstructionDefs = i.readUshort(t, r), r += 2, o.maxStackElements = i.readUshort(t, r), r += 2, o.maxSizeOfInstructions = i.readUshort(t, r), r += 2, o.maxComponentElements = i.readUshort(t, r), r += 2, o.maxComponentDepth = i.readUshort(t, r), r += 2), o
                                }, e.name = {}, e.name.parse = function(t, r, n) {
                                    var i = e._bin,
                                        o = {};
                                    i.readUshort(t, r), r += 2;
                                    var s = i.readUshort(t, r);
                                    r += 2, i.readUshort(t, r);
                                    for (var a, l = ["copyright", "fontFamily", "fontSubfamily", "ID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "urlVendor", "urlDesigner", "licence", "licenceURL", "---", "typoFamilyName", "typoSubfamilyName", "compatibleFull", "sampleText", "postScriptCID", "wwsFamilyName", "wwsSubfamilyName", "lightPalette", "darkPalette"], u = r += 2, c = 0; c < s; c++) {
                                        var h = i.readUshort(t, r);
                                        r += 2;
                                        var d = i.readUshort(t, r);
                                        r += 2;
                                        var f = i.readUshort(t, r);
                                        r += 2;
                                        var p = i.readUshort(t, r);
                                        r += 2;
                                        var m = i.readUshort(t, r);
                                        r += 2;
                                        var g = i.readUshort(t, r);
                                        r += 2;
                                        var v, y = l[p],
                                            b = u + 12 * s + g;
                                        if (0 == h) v = i.readUnicode(t, b, m / 2);
                                        else if (3 == h && 0 == d) v = i.readUnicode(t, b, m / 2);
                                        else if (0 == d) v = i.readASCII(t, b, m);
                                        else if (1 == d) v = i.readUnicode(t, b, m / 2);
                                        else if (3 == d) v = i.readUnicode(t, b, m / 2);
                                        else {
                                            if (1 != h) throw "unknown encoding " + d + ", platformID: " + h;
                                            v = i.readASCII(t, b, m), console.debug("reading unknown MAC encoding " + d + " as ASCII")
                                        }
                                        var w = "p" + h + "," + f.toString(16);
                                        null == o[w] && (o[w] = {}), o[w][void 0 !== y ? y : p] = v, o[w]._lang = f
                                    }
                                    for (var x in o)
                                        if (null != o[x].postScriptName && 1033 == o[x]._lang) return o[x];
                                    for (var x in o)
                                        if (null != o[x].postScriptName && 0 == o[x]._lang) return o[x];
                                    for (var x in o)
                                        if (null != o[x].postScriptName && 3084 == o[x]._lang) return o[x];
                                    for (var x in o)
                                        if (null != o[x].postScriptName) return o[x];
                                    for (var x in o) {
                                        a = x;
                                        break
                                    }
                                    return console.debug("returning name table with languageID " + o[a]._lang), o[a]
                                }, e["OS/2"] = {}, e["OS/2"].parse = function(t, r, n) {
                                    var i = e._bin.readUshort(t, r);
                                    r += 2;
                                    var o = {};
                                    if (0 == i) e["OS/2"].version0(t, r, o);
                                    else if (1 == i) e["OS/2"].version1(t, r, o);
                                    else if (2 == i || 3 == i || 4 == i) e["OS/2"].version2(t, r, o);
                                    else {
                                        if (5 != i) throw "unknown OS/2 table version: " + i;
                                        e["OS/2"].version5(t, r, o)
                                    }
                                    return o
                                }, e["OS/2"].version0 = function(t, r, n) {
                                    var i = e._bin;
                                    return n.xAvgCharWidth = i.readShort(t, r), r += 2, n.usWeightClass = i.readUshort(t, r), r += 2, n.usWidthClass = i.readUshort(t, r), r += 2, n.fsType = i.readUshort(t, r), r += 2, n.ySubscriptXSize = i.readShort(t, r), r += 2, n.ySubscriptYSize = i.readShort(t, r), r += 2, n.ySubscriptXOffset = i.readShort(t, r), r += 2, n.ySubscriptYOffset = i.readShort(t, r), r += 2, n.ySuperscriptXSize = i.readShort(t, r), r += 2, n.ySuperscriptYSize = i.readShort(t, r), r += 2, n.ySuperscriptXOffset = i.readShort(t, r), r += 2, n.ySuperscriptYOffset = i.readShort(t, r), r += 2, n.yStrikeoutSize = i.readShort(t, r), r += 2, n.yStrikeoutPosition = i.readShort(t, r), r += 2, n.sFamilyClass = i.readShort(t, r), r += 2, n.panose = i.readBytes(t, r, 10), r += 10, n.ulUnicodeRange1 = i.readUint(t, r), r += 4, n.ulUnicodeRange2 = i.readUint(t, r), r += 4, n.ulUnicodeRange3 = i.readUint(t, r), r += 4, n.ulUnicodeRange4 = i.readUint(t, r), r += 4, n.achVendID = [i.readInt8(t, r), i.readInt8(t, r + 1), i.readInt8(t, r + 2), i.readInt8(t, r + 3)], r += 4, n.fsSelection = i.readUshort(t, r), r += 2, n.usFirstCharIndex = i.readUshort(t, r), r += 2, n.usLastCharIndex = i.readUshort(t, r), r += 2, n.sTypoAscender = i.readShort(t, r), r += 2, n.sTypoDescender = i.readShort(t, r), r += 2, n.sTypoLineGap = i.readShort(t, r), r += 2, n.usWinAscent = i.readUshort(t, r), r += 2, n.usWinDescent = i.readUshort(t, r), r + 2
                                }, e["OS/2"].version1 = function(t, r, n) {
                                    var i = e._bin;
                                    return r = e["OS/2"].version0(t, r, n), n.ulCodePageRange1 = i.readUint(t, r), r += 4, n.ulCodePageRange2 = i.readUint(t, r), r + 4
                                }, e["OS/2"].version2 = function(t, r, n) {
                                    var i = e._bin;
                                    return r = e["OS/2"].version1(t, r, n), n.sxHeight = i.readShort(t, r), r += 2, n.sCapHeight = i.readShort(t, r), r += 2, n.usDefault = i.readUshort(t, r), r += 2, n.usBreak = i.readUshort(t, r), r += 2, n.usMaxContext = i.readUshort(t, r), r + 2
                                }, e["OS/2"].version5 = function(t, r, n) {
                                    var i = e._bin;
                                    return r = e["OS/2"].version2(t, r, n), n.usLowerOpticalPointSize = i.readUshort(t, r), r += 2, n.usUpperOpticalPointSize = i.readUshort(t, r), r + 2
                                }, e.post = {}, e.post.parse = function(t, r, n) {
                                    var i = e._bin,
                                        o = {};
                                    return o.version = i.readFixed(t, r), r += 4, o.italicAngle = i.readFixed(t, r), r += 4, o.underlinePosition = i.readShort(t, r), r += 2, o.underlineThickness = i.readShort(t, r), r += 2, o
                                }, null == e && (e = {}), null == e.U && (e.U = {}), e.U.codeToGlyph = function(t, e) {
                                    var r = t.cmap,
                                        n = -1;
                                    if (null != r.p0e4 ? n = r.p0e4 : null != r.p3e1 ? n = r.p3e1 : null != r.p1e0 ? n = r.p1e0 : null != r.p0e3 && (n = r.p0e3), -1 == n) throw "no familiar platform and encoding!";
                                    var i = r.tables[n];
                                    if (0 == i.format) return e >= i.map.length ? 0 : i.map[e];
                                    if (4 == i.format) {
                                        for (var o = -1, s = 0; s < i.endCount.length; s++)
                                            if (e <= i.endCount[s]) {
                                                o = s;
                                                break
                                            }
                                        return -1 == o || i.startCount[o] > e ? 0 : 65535 & (0 != i.idRangeOffset[o] ? i.glyphIdArray[e - i.startCount[o] + (i.idRangeOffset[o] >> 1) - (i.idRangeOffset.length - o)] : e + i.idDelta[o])
                                    }
                                    if (12 == i.format) {
                                        if (e > i.groups[i.groups.length - 1][1]) return 0;
                                        for (s = 0; s < i.groups.length; s++) {
                                            var a = i.groups[s];
                                            if (a[0] <= e && e <= a[1]) return a[2] + (e - a[0])
                                        }
                                        return 0
                                    }
                                    throw "unknown cmap table format " + i.format
                                }, e.U.glyphToPath = function(t, r) {
                                    var n = {
                                        cmds: [],
                                        crds: []
                                    };
                                    if (t.SVG && t.SVG.entries[r]) {
                                        var i = t.SVG.entries[r];
                                        return null == i ? n : ("string" == typeof i && (i = e.SVG.toPath(i), t.SVG.entries[r] = i), i)
                                    }
                                    if (t.CFF) {
                                        var o = {
                                                x: 0,
                                                y: 0,
                                                stack: [],
                                                nStems: 0,
                                                haveWidth: !1,
                                                width: t.CFF.Private ? t.CFF.Private.defaultWidthX : 0,
                                                open: !1
                                            },
                                            s = t.CFF,
                                            a = t.CFF.Private;
                                        if (s.ROS) {
                                            for (var l = 0; s.FDSelect[l + 2] <= r;) l += 2;
                                            a = s.FDArray[s.FDSelect[l + 1]].Private
                                        }
                                        e.U._drawCFF(t.CFF.CharStrings[r], o, s, a, n)
                                    } else t.glyf && e.U._drawGlyf(r, t, n);
                                    return n
                                }, e.U._drawGlyf = function(t, r, n) {
                                    var i = r.glyf[t];
                                    null == i && (i = r.glyf[t] = e.glyf._parseGlyf(r, t)), null != i && (i.noc > -1 ? e.U._simpleGlyph(i, n) : e.U._compoGlyph(i, r, n))
                                }, e.U._simpleGlyph = function(t, r) {
                                    for (var n = 0; n < t.noc; n++) {
                                        for (var i = 0 == n ? 0 : t.endPts[n - 1] + 1, o = t.endPts[n], s = i; s <= o; s++) {
                                            var a = s == i ? o : s - 1,
                                                l = s == o ? i : s + 1,
                                                u = 1 & t.flags[s],
                                                c = 1 & t.flags[a],
                                                h = 1 & t.flags[l],
                                                d = t.xs[s],
                                                f = t.ys[s];
                                            if (s == i)
                                                if (u) {
                                                    if (!c) {
                                                        e.U.P.moveTo(r, d, f);
                                                        continue
                                                    }
                                                    e.U.P.moveTo(r, t.xs[a], t.ys[a])
                                                } else c ? e.U.P.moveTo(r, t.xs[a], t.ys[a]) : e.U.P.moveTo(r, (t.xs[a] + d) / 2, (t.ys[a] + f) / 2);
                                            u ? c && e.U.P.lineTo(r, d, f) : h ? e.U.P.qcurveTo(r, d, f, t.xs[l], t.ys[l]) : e.U.P.qcurveTo(r, d, f, (d + t.xs[l]) / 2, (f + t.ys[l]) / 2)
                                        }
                                        e.U.P.closePath(r)
                                    }
                                }, e.U._compoGlyph = function(t, r, n) {
                                    for (var i = 0; i < t.parts.length; i++) {
                                        var o = {
                                                cmds: [],
                                                crds: []
                                            },
                                            s = t.parts[i];
                                        e.U._drawGlyf(s.glyphIndex, r, o);
                                        for (var a = s.m, l = 0; l < o.crds.length; l += 2) {
                                            var u = o.crds[l],
                                                c = o.crds[l + 1];
                                            n.crds.push(u * a.a + c * a.b + a.tx), n.crds.push(u * a.c + c * a.d + a.ty)
                                        }
                                        for (l = 0; l < o.cmds.length; l++) n.cmds.push(o.cmds[l])
                                    }
                                }, e.U._getGlyphClass = function(t, r) {
                                    var n = e._lctf.getInterval(r, t);
                                    return -1 == n ? 0 : r[n + 2]
                                }, e.U.getPairAdjustment = function(t, r, n) {
                                    var i = 0,
                                        o = !1;
                                    if (t.GPOS)
                                        for (var s = t.GPOS, a = s.lookupList, l = s.featureList, u = [], c = 0; c < l.length; c++) {
                                            var h = l[c];
                                            if ("kern" == h.tag) {
                                                o = !0;
                                                for (var d = 0; d < h.tab.length; d++)
                                                    if (!u[h.tab[d]]) {
                                                        u[h.tab[d]] = !0;
                                                        for (var f = a[h.tab[d]], p = 0; p < f.tabs.length; p++)
                                                            if (null != f.tabs[p]) {
                                                                var m, g = f.tabs[p];
                                                                if (!g.coverage || -1 != (m = e._lctf.coverageIndex(g.coverage, r)))
                                                                    if (1 == f.ltype);
                                                                    else if (2 == f.ltype) {
                                                                    var v;
                                                                    if (1 == g.fmt) {
                                                                        var y = g.pairsets[m];
                                                                        for (c = 0; c < y.length; c++) y[c].gid2 == n && (v = y[c])
                                                                    } else if (2 == g.fmt) {
                                                                        var b = e.U._getGlyphClass(r, g.classDef1),
                                                                            w = e.U._getGlyphClass(n, g.classDef2);
                                                                        v = g.matrix[b][w]
                                                                    }
                                                                    v && v.val1 && v.val1[2] && (i += v.val1[2]), v && v.val2 && v.val2[0] && (i += v.val2[0])
                                                                }
                                                            }
                                                    }
                                            }
                                        }
                                    if (t.kern && !o) {
                                        var x = t.kern.glyph1.indexOf(r);
                                        if (-1 != x) {
                                            var S = t.kern.rval[x].glyph2.indexOf(n); - 1 != S && (i += t.kern.rval[x].vals[S])
                                        }
                                    }
                                    return i
                                }, e.U._applySubs = function(t, r, n, i) {
                                    for (var o = t.length - r - 1, s = 0; s < n.tabs.length; s++)
                                        if (null != n.tabs[s]) {
                                            var a, l = n.tabs[s];
                                            if (!l.coverage || -1 != (a = e._lctf.coverageIndex(l.coverage, t[r])))
                                                if (1 == n.ltype) t[r], 1 == l.fmt ? t[r] = t[r] + l.delta : t[r] = l.newg[a];
                                                else if (4 == n.ltype)
                                                for (var u = l.vals[a], c = 0; c < u.length; c++) {
                                                    var h = u[c],
                                                        d = h.chain.length;
                                                    if (!(d > o)) {
                                                        for (var f = !0, p = 0, m = 0; m < d; m++) {
                                                            for (; - 1 == t[r + p + (1 + m)];) p++;
                                                            h.chain[m] != t[r + p + (1 + m)] && (f = !1)
                                                        }
                                                        if (f) {
                                                            for (t[r] = h.nglyph, m = 0; m < d + p; m++) t[r + m + 1] = -1;
                                                            break
                                                        }
                                                    }
                                                } else if (5 == n.ltype && 2 == l.fmt)
                                                    for (var g = e._lctf.getInterval(l.cDef, t[r]), v = l.cDef[g + 2], y = l.scset[v], b = 0; b < y.length; b++) {
                                                        var w = y[b],
                                                            x = w.input;
                                                        if (!(x.length > o)) {
                                                            for (f = !0, m = 0; m < x.length; m++) {
                                                                var S = e._lctf.getInterval(l.cDef, t[r + 1 + m]);
                                                                if (-1 == g && l.cDef[S + 2] != x[m]) {
                                                                    f = !1;
                                                                    break
                                                                }
                                                            }
                                                            if (f) {
                                                                var T = w.substLookupRecords;
                                                                for (c = 0; c < T.length; c += 2) T[c], T[c + 1]
                                                            }
                                                        }
                                                    } else if (6 == n.ltype && 3 == l.fmt) {
                                                        if (!e.U._glsCovered(t, l.backCvg, r - l.backCvg.length)) continue;
                                                        if (!e.U._glsCovered(t, l.inptCvg, r)) continue;
                                                        if (!e.U._glsCovered(t, l.ahedCvg, r + l.inptCvg.length)) continue;
                                                        var _ = l.lookupRec;
                                                        for (b = 0; b < _.length; b += 2) {
                                                            g = _[b];
                                                            var E = i[_[b + 1]];
                                                            e.U._applySubs(t, r + g, E, i)
                                                        }
                                                    }
                                        }
                                }, e.U._glsCovered = function(t, r, n) {
                                    for (var i = 0; i < r.length; i++)
                                        if (-1 == e._lctf.coverageIndex(r[i], t[n + i])) return !1;
                                    return !0
                                }, e.U.glyphsToPath = function(t, r, n) {
                                    for (var i = {
                                            cmds: [],
                                            crds: []
                                        }, o = 0, s = 0; s < r.length; s++) {
                                        var a = r[s];
                                        if (-1 != a) {
                                            for (var l = s < r.length - 1 && -1 != r[s + 1] ? r[s + 1] : 0, u = e.U.glyphToPath(t, a), c = 0; c < u.crds.length; c += 2) i.crds.push(u.crds[c] + o), i.crds.push(u.crds[c + 1]);
                                            for (n && i.cmds.push(n), c = 0; c < u.cmds.length; c++) i.cmds.push(u.cmds[c]);
                                            n && i.cmds.push("X"), o += t.hmtx.aWidth[a], s < r.length - 1 && (o += e.U.getPairAdjustment(t, a, l))
                                        }
                                    }
                                    return i
                                }, e.U.P = {}, e.U.P.moveTo = function(t, e, r) {
                                    t.cmds.push("M"), t.crds.push(e, r)
                                }, e.U.P.lineTo = function(t, e, r) {
                                    t.cmds.push("L"), t.crds.push(e, r)
                                }, e.U.P.curveTo = function(t, e, r, n, i, o, s) {
                                    t.cmds.push("C"), t.crds.push(e, r, n, i, o, s)
                                }, e.U.P.qcurveTo = function(t, e, r, n, i) {
                                    t.cmds.push("Q"), t.crds.push(e, r, n, i)
                                }, e.U.P.closePath = function(t) {
                                    t.cmds.push("Z")
                                }, e.U._drawCFF = function(t, r, n, i, o) {
                                    for (var s = r.stack, a = r.nStems, l = r.haveWidth, u = r.width, c = r.open, h = 0, d = r.x, f = r.y, p = 0, m = 0, g = 0, v = 0, y = 0, b = 0, w = 0, x = 0, S = 0, T = 0, _ = {
                                            val: 0,
                                            size: 0
                                        }; h < t.length;) {
                                        e.CFF.getCharString(t, h, _);
                                        var E = _.val;
                                        if (h += _.size, "o1" == E || "o18" == E) s.length % 2 != 0 && !l && (u = s.shift() + i.nominalWidthX), a += s.length >> 1, s.length = 0, l = !0;
                                        else if ("o3" == E || "o23" == E) s.length % 2 != 0 && !l && (u = s.shift() + i.nominalWidthX), a += s.length >> 1, s.length = 0, l = !0;
                                        else if ("o4" == E) s.length > 1 && !l && (u = s.shift() + i.nominalWidthX, l = !0), c && e.U.P.closePath(o), f += s.pop(), e.U.P.moveTo(o, d, f), c = !0;
                                        else if ("o5" == E)
                                            for (; s.length > 0;) d += s.shift(), f += s.shift(), e.U.P.lineTo(o, d, f);
                                        else if ("o6" == E || "o7" == E)
                                            for (var k = s.length, A = "o6" == E, R = 0; R < k; R++) {
                                                var C = s.shift();
                                                A ? d += C : f += C, A = !A, e.U.P.lineTo(o, d, f)
                                            } else if ("o8" == E || "o24" == E) {
                                                k = s.length;
                                                for (var O = 0; O + 6 <= k;) p = d + s.shift(), m = f + s.shift(), g = p + s.shift(), v = m + s.shift(), d = g + s.shift(), f = v + s.shift(), e.U.P.curveTo(o, p, m, g, v, d, f), O += 6;
                                                "o24" == E && (d += s.shift(), f += s.shift(), e.U.P.lineTo(o, d, f))
                                            } else {
                                                if ("o11" == E) break;
                                                if ("o1234" == E || "o1235" == E || "o1236" == E || "o1237" == E) "o1234" == E && (m = f, g = (p = d + s.shift()) + s.shift(), T = v = m + s.shift(), b = v, x = f, d = (w = (y = (S = g + s.shift()) + s.shift()) + s.shift()) + s.shift(), e.U.P.curveTo(o, p, m, g, v, S, T), e.U.P.curveTo(o, y, b, w, x, d, f)), "o1235" == E && (p = d + s.shift(), m = f + s.shift(), g = p + s.shift(), v = m + s.shift(), S = g + s.shift(), T = v + s.shift(), y = S + s.shift(), b = T + s.shift(), w = y + s.shift(), x = b + s.shift(), d = w + s.shift(), f = x + s.shift(), s.shift(), e.U.P.curveTo(o, p, m, g, v, S, T), e.U.P.curveTo(o, y, b, w, x, d, f)), "o1236" == E && (p = d + s.shift(), m = f + s.shift(), g = p + s.shift(), T = v = m + s.shift(), b = v, w = (y = (S = g + s.shift()) + s.shift()) + s.shift(), x = b + s.shift(), d = w + s.shift(), e.U.P.curveTo(o, p, m, g, v, S, T), e.U.P.curveTo(o, y, b, w, x, d, f)), "o1237" == E && (p = d + s.shift(), m = f + s.shift(), g = p + s.shift(), v = m + s.shift(), S = g + s.shift(), T = v + s.shift(), y = S + s.shift(), b = T + s.shift(), w = y + s.shift(), x = b + s.shift(), Math.abs(w - d) > Math.abs(x - f) ? d = w + s.shift() : f = x + s.shift(), e.U.P.curveTo(o, p, m, g, v, S, T), e.U.P.curveTo(o, y, b, w, x, d, f));
                                                else if ("o14" == E) {
                                                    if (s.length > 0 && !l && (u = s.shift() + n.nominalWidthX, l = !0), 4 == s.length) {
                                                        var U = s.shift(),
                                                            P = s.shift(),
                                                            D = s.shift(),
                                                            M = s.shift(),
                                                            F = e.CFF.glyphBySE(n, D),
                                                            B = e.CFF.glyphBySE(n, M);
                                                        e.U._drawCFF(n.CharStrings[F], r, n, i, o), r.x = U, r.y = P, e.U._drawCFF(n.CharStrings[B], r, n, i, o)
                                                    }
                                                    c && (e.U.P.closePath(o), c = !1)
                                                } else if ("o19" == E || "o20" == E) s.length % 2 != 0 && !l && (u = s.shift() + i.nominalWidthX), a += s.length >> 1, s.length = 0, l = !0, h += a + 7 >> 3;
                                                else if ("o21" == E) s.length > 2 && !l && (u = s.shift() + i.nominalWidthX, l = !0), f += s.pop(), d += s.pop(), c && e.U.P.closePath(o), e.U.P.moveTo(o, d, f), c = !0;
                                                else if ("o22" == E) s.length > 1 && !l && (u = s.shift() + i.nominalWidthX, l = !0), d += s.pop(), c && e.U.P.closePath(o), e.U.P.moveTo(o, d, f), c = !0;
                                                else if ("o25" == E) {
                                                    for (; s.length > 6;) d += s.shift(), f += s.shift(), e.U.P.lineTo(o, d, f);
                                                    p = d + s.shift(), m = f + s.shift(), g = p + s.shift(), v = m + s.shift(), d = g + s.shift(), f = v + s.shift(), e.U.P.curveTo(o, p, m, g, v, d, f)
                                                } else if ("o26" == E)
                                                    for (s.length % 2 && (d += s.shift()); s.length > 0;) p = d, m = f + s.shift(), d = g = p + s.shift(), f = (v = m + s.shift()) + s.shift(), e.U.P.curveTo(o, p, m, g, v, d, f);
                                                else if ("o27" == E)
                                                    for (s.length % 2 && (f += s.shift()); s.length > 0;) m = f, g = (p = d + s.shift()) + s.shift(), v = m + s.shift(), d = g + s.shift(), f = v, e.U.P.curveTo(o, p, m, g, v, d, f);
                                                else if ("o10" == E || "o29" == E) {
                                                    var L = "o10" == E ? i : n;
                                                    if (0 == s.length) console.debug("error: empty stack");
                                                    else {
                                                        var j = s.pop(),
                                                            I = L.Subrs[j + L.Bias];
                                                        r.x = d, r.y = f, r.nStems = a, r.haveWidth = l, r.width = u, r.open = c, e.U._drawCFF(I, r, n, i, o), d = r.x, f = r.y, a = r.nStems, l = r.haveWidth, u = r.width, c = r.open
                                                    }
                                                } else if ("o30" == E || "o31" == E) {
                                                    var V = s.length,
                                                        W = (O = 0, "o31" == E);
                                                    for (O += V - (k = -3 & V); O < k;) W ? (m = f, g = (p = d + s.shift()) + s.shift(), f = (v = m + s.shift()) + s.shift(), k - O == 5 ? (d = g + s.shift(), O++) : d = g, W = !1) : (p = d, m = f + s.shift(), g = p + s.shift(), v = m + s.shift(), d = g + s.shift(), k - O == 5 ? (f = v + s.shift(), O++) : f = v, W = !0), e.U.P.curveTo(o, p, m, g, v, d, f), O += 4
                                                } else {
                                                    if ("o" == (E + "").charAt(0)) throw console.debug("Unknown operation: " + E, t), E;
                                                    s.push(E)
                                                }
                                            }
                                    }
                                    r.x = d, r.y = f, r.nStems = a, r.haveWidth = l, r.width = u, r.open = c
                                };
                                var r = e,
                                    n = {
                                        Typr: r
                                    };
                                return t.Typr = r, t.default = n, Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t
                            }({}).Typr
                    }, function() {
                        return function(t) {
                            var e = Uint8Array,
                                r = Uint16Array,
                                n = Uint32Array,
                                i = new e([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
                                o = new e([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
                                s = new e([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                                a = function(t, e) {
                                    for (var i = new r(31), o = 0; o < 31; ++o) i[o] = e += 1 << t[o - 1];
                                    var s = new n(i[30]);
                                    for (o = 1; o < 30; ++o)
                                        for (var a = i[o]; a < i[o + 1]; ++a) s[a] = a - i[o] << 5 | o;
                                    return [i, s]
                                },
                                l = a(i, 2),
                                u = l[0],
                                c = l[1];
                            u[28] = 258, c[258] = 28;
                            for (var h = a(o, 0)[0], d = new r(32768), f = 0; f < 32768; ++f) {
                                var p = (43690 & f) >>> 1 | (21845 & f) << 1;
                                p = (61680 & (p = (52428 & p) >>> 2 | (13107 & p) << 2)) >>> 4 | (3855 & p) << 4, d[f] = ((65280 & p) >>> 8 | (255 & p) << 8) >>> 1
                            }
                            var m = function(t, e, n) {
                                    for (var i = t.length, o = 0, s = new r(e); o < i; ++o) ++s[t[o] - 1];
                                    var a, l = new r(e);
                                    for (o = 0; o < e; ++o) l[o] = l[o - 1] + s[o - 1] << 1;
                                    if (n) {
                                        a = new r(1 << e);
                                        var u = 15 - e;
                                        for (o = 0; o < i; ++o)
                                            if (t[o])
                                                for (var c = o << 4 | t[o], h = e - t[o], f = l[t[o] - 1]++ << h, p = f | (1 << h) - 1; f <= p; ++f) a[d[f] >>> u] = c
                                    } else
                                        for (a = new r(i), o = 0; o < i; ++o) t[o] && (a[o] = d[l[t[o] - 1]++] >>> 15 - t[o]);
                                    return a
                                },
                                g = new e(288);
                            for (f = 0; f < 144; ++f) g[f] = 8;
                            for (f = 144; f < 256; ++f) g[f] = 9;
                            for (f = 256; f < 280; ++f) g[f] = 7;
                            for (f = 280; f < 288; ++f) g[f] = 8;
                            var v = new e(32);
                            for (f = 0; f < 32; ++f) v[f] = 5;
                            var y = m(g, 9, 1),
                                b = m(v, 5, 1),
                                w = function(t) {
                                    for (var e = t[0], r = 1; r < t.length; ++r) t[r] > e && (e = t[r]);
                                    return e
                                },
                                x = function(t, e, r) {
                                    var n = e / 8 | 0;
                                    return (t[n] | t[n + 1] << 8) >> (7 & e) & r
                                },
                                S = function(t, e) {
                                    var r = e / 8 | 0;
                                    return (t[r] | t[r + 1] << 8 | t[r + 2] << 16) >> (7 & e)
                                },
                                T = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
                                _ = function(t, e, r) {
                                    var n = new Error(e || T[t]);
                                    if (n.code = t, Error.captureStackTrace && Error.captureStackTrace(n, _), !r) throw n;
                                    return n
                                },
                                E = function(t, a, l) {
                                    var c = t.length;
                                    if (!c || l && !l.l && c < 5) return a || new e(0);
                                    var d = !a || l,
                                        f = !l || l.i;
                                    l || (l = {}), a || (a = new e(3 * c));
                                    var p, g = function(t) {
                                            var r = a.length;
                                            if (t > r) {
                                                var n = new e(Math.max(2 * r, t));
                                                n.set(a), a = n
                                            }
                                        },
                                        v = l.f || 0,
                                        T = l.p || 0,
                                        E = l.b || 0,
                                        k = l.l,
                                        A = l.d,
                                        R = l.m,
                                        C = l.n,
                                        O = 8 * c;
                                    do {
                                        if (!k) {
                                            l.f = v = x(t, T, 1);
                                            var U = x(t, T + 1, 3);
                                            if (T += 3, !U) {
                                                var P = t[(N = ((p = T) / 8 | 0) + (7 & p && 1) + 4) - 4] | t[N - 3] << 8,
                                                    D = N + P;
                                                if (D > c) {
                                                    f && _(0);
                                                    break
                                                }
                                                d && g(E + P), a.set(t.subarray(N, D), E), l.b = E += P, l.p = T = 8 * D;
                                                continue
                                            }
                                            if (1 == U) k = y, A = b, R = 9, C = 5;
                                            else if (2 == U) {
                                                var M = x(t, T, 31) + 257,
                                                    F = x(t, T + 10, 15) + 4,
                                                    B = M + x(t, T + 5, 31) + 1;
                                                T += 14;
                                                for (var L = new e(B), j = new e(19), I = 0; I < F; ++I) j[s[I]] = x(t, T + 3 * I, 7);
                                                T += 3 * F;
                                                var V = w(j),
                                                    W = (1 << V) - 1,
                                                    z = m(j, V, 1);
                                                for (I = 0; I < B;) {
                                                    var N, G = z[x(t, T, W)];
                                                    if (T += 15 & G, (N = G >>> 4) < 16) L[I++] = N;
                                                    else {
                                                        var q = 0,
                                                            H = 0;
                                                        for (16 == N ? (H = 3 + x(t, T, 3), T += 2, q = L[I - 1]) : 17 == N ? (H = 3 + x(t, T, 7), T += 3) : 18 == N && (H = 11 + x(t, T, 127), T += 7); H--;) L[I++] = q
                                                    }
                                                }
                                                var Y = L.subarray(0, M),
                                                    X = L.subarray(M);
                                                R = w(Y), C = w(X), k = m(Y, R, 1), A = m(X, C, 1)
                                            } else _(1);
                                            if (T > O) {
                                                f && _(0);
                                                break
                                            }
                                        }
                                        d && g(E + 131072);
                                        for (var $ = (1 << R) - 1, K = (1 << C) - 1, Z = T;; Z = T) {
                                            var Q = (q = k[S(t, T) & $]) >>> 4;
                                            if ((T += 15 & q) > O) {
                                                f && _(0);
                                                break
                                            }
                                            if (q || _(2), Q < 256) a[E++] = Q;
                                            else {
                                                if (256 == Q) {
                                                    Z = T, k = null;
                                                    break
                                                }
                                                var J = Q - 254;
                                                if (Q > 264) {
                                                    var tt = i[I = Q - 257];
                                                    J = x(t, T, (1 << tt) - 1) + u[I], T += tt
                                                }
                                                var et = A[S(t, T) & K],
                                                    rt = et >>> 4;
                                                if (et || _(3), T += 15 & et, X = h[rt], rt > 3 && (tt = o[rt], X += S(t, T) & (1 << tt) - 1, T += tt), T > O) {
                                                    f && _(0);
                                                    break
                                                }
                                                d && g(E + 131072);
                                                for (var nt = E + J; E < nt; E += 4) a[E] = a[E - X], a[E + 1] = a[E + 1 - X], a[E + 2] = a[E + 2 - X], a[E + 3] = a[E + 3 - X];
                                                E = nt
                                            }
                                        }
                                        l.l = k, l.p = Z, l.b = E, k && (v = 1, l.m = R, l.d = A, l.n = C)
                                    } while (!v);
                                    return E == a.length ? a : function(t, i, o) {
                                        (null == i || i < 0) && (i = 0), (null == o || o > t.length) && (o = t.length);
                                        var s = new(t instanceof r ? r : t instanceof n ? n : e)(o - i);
                                        return s.set(t.subarray(i, o)), s
                                    }(a, 0, E)
                                },
                                k = new e(0),
                                A = "undefined" != typeof TextDecoder && new TextDecoder;
                            try {
                                A.decode(k, {
                                    stream: !0
                                })
                            } catch (t) {}
                            return t.convert_streams = function(t) {
                                var e = new DataView(t),
                                    r = 0;

                                function n() {
                                    var t = e.getUint16(r);
                                    return r += 2, t
                                }

                                function i() {
                                    var t = e.getUint32(r);
                                    return r += 4, t
                                }

                                function o(t) {
                                    v.setUint16(y, t), y += 2
                                }

                                function s(t) {
                                    v.setUint32(y, t), y += 4
                                }
                                for (var a = {
                                        signature: i(),
                                        flavor: i(),
                                        length: i(),
                                        numTables: n(),
                                        reserved: n(),
                                        totalSfntSize: i(),
                                        majorVersion: n(),
                                        minorVersion: n(),
                                        metaOffset: i(),
                                        metaLength: i(),
                                        metaOrigLength: i(),
                                        privOffset: i(),
                                        privLength: i()
                                    }, l = 0; Math.pow(2, l) <= a.numTables;) l++;
                                l--;
                                for (var u = 16 * Math.pow(2, l), c = 16 * a.numTables - u, h = 12, d = [], f = 0; f < a.numTables; f++) d.push({
                                    tag: i(),
                                    offset: i(),
                                    compLength: i(),
                                    origLength: i(),
                                    origChecksum: i()
                                }), h += 16;
                                var p, m = new Uint8Array(12 + 16 * d.length + d.reduce((function(t, e) {
                                        return t + e.origLength + 4
                                    }), 0)),
                                    g = m.buffer,
                                    v = new DataView(g),
                                    y = 0;
                                return s(a.flavor), o(a.numTables), o(u), o(l), o(c), d.forEach((function(t) {
                                    s(t.tag), s(t.origChecksum), s(h), s(t.origLength), t.outOffset = h, (h += t.origLength) % 4 != 0 && (h += 4 - h % 4)
                                })), d.forEach((function(e) {
                                    var r, n = t.slice(e.offset, e.offset + e.compLength);
                                    if (e.compLength != e.origLength) {
                                        var i = new Uint8Array(e.origLength);
                                        r = new Uint8Array(n, 2), E(r, i)
                                    } else i = new Uint8Array(n);
                                    m.set(i, e.outOffset);
                                    var o = 0;
                                    (h = e.outOffset + e.origLength) % 4 != 0 && (o = 4 - h % 4), m.set(new Uint8Array(o).buffer, e.outOffset + e.origLength), p = h + o
                                })), g.slice(0, p)
                            }, Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t
                        }({}).convert_streams
                    }, function(t, e) {
                        const r = {
                                M: 2,
                                L: 2,
                                Q: 4,
                                C: 6,
                                Z: 0
                            },
                            n = {
                                C: "18g,ca,368,1kz",
                                D: "17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",
                                R: "17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",
                                L: "x9u,jff,a,fd,jv",
                                T: "4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"
                            };
                        let i;

                        function o(t) {
                            if (!i) {
                                const t = {
                                    R: 2,
                                    L: 1,
                                    D: 4,
                                    C: 16,
                                    U: 32,
                                    T: 8
                                };
                                i = new Map;
                                for (let e in n) {
                                    let r = 0;
                                    n[e].split(",").forEach((n => {
                                        let [o, s] = n.split("+");
                                        o = parseInt(o, 36), s = s ? parseInt(s, 36) : 0, i.set(r += o, t[e]);
                                        for (let a = s; a--;) i.set(++r, t[e])
                                    }))
                                }
                            }
                            return i.get(t) || 32
                        }
                        const s = [null, "isol", "init", "fina", "medi"];

                        function a(t) {
                            const e = new Uint8Array(t.length);
                            let r = 32,
                                n = 1,
                                i = -1;
                            for (let s = 0; s < t.length; s++) {
                                const a = t.codePointAt(s);
                                let l = 0 | o(a),
                                    u = 1;
                                8 & l || (21 & r ? 22 & l ? (u = 3, 1 !== n && 3 !== n || e[i]++) : 33 & l && (2 !== n && 4 !== n || e[i]--) : 34 & r && (2 !== n && 4 !== n || e[i]--), n = e[s] = u, r = l, i = s, a > 65535 && s++)
                            }
                            return e
                        }

                        function l(e) {
                            const n = Object.create(null),
                                i = {
                                    unitsPerEm: e.head.unitsPerEm,
                                    ascender: e.hhea.ascender,
                                    descender: e.hhea.descender,
                                    forEachGlyph(o, l, u, c) {
                                        let h = 0;
                                        const d = 1 / i.unitsPerEm * l,
                                            f = function(e, r) {
                                                const n = [];
                                                for (let o = 0; o < r.length; o++) {
                                                    const i = r.codePointAt(o);
                                                    i > 65535 && o++, n.push(t.U.codeToGlyph(e, i))
                                                }
                                                const i = e.GSUB;
                                                if (i) {
                                                    const {
                                                        lookupList: e,
                                                        featureList: o
                                                    } = i;
                                                    let l;
                                                    const u = /^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws)$/,
                                                        c = [];
                                                    o.forEach((i => {
                                                        if (u.test(i.tag))
                                                            for (let o = 0; o < i.tab.length; o++) {
                                                                if (c[i.tab[o]]) continue;
                                                                c[i.tab[o]] = !0;
                                                                const u = e[i.tab[o]],
                                                                    h = /^(isol|init|fina|medi)$/.test(i.tag);
                                                                h && !l && (l = a(r));
                                                                for (let r = 0; r < n.length; r++) l && h && s[l[r]] !== i.tag || t.U._applySubs(n, r, u, e)
                                                            }
                                                    }))
                                                }
                                                return n
                                            }(e, o);
                                        let p = 0,
                                            m = -1;
                                        return f.forEach(((i, s) => {
                                            if (-1 !== i) {
                                                let o = n[i];
                                                if (!o) {
                                                    const {
                                                        cmds: s,
                                                        crds: a
                                                    } = t.U.glyphToPath(e, i);
                                                    let l, u, c, h, d = "",
                                                        f = 0;
                                                    for (let t = 0, e = s.length; t < e; t++) {
                                                        const e = r[s[t]];
                                                        d += s[t];
                                                        for (let t = 1; t <= e; t++) d += (t > 1 ? "," : "") + a[f++]
                                                    }
                                                    if (a.length) {
                                                        l = u = 1 / 0, c = h = -1 / 0;
                                                        for (let t = 0, e = a.length; t < e; t += 2) {
                                                            let e = a[t],
                                                                r = a[t + 1];
                                                            e < l && (l = e), r < u && (u = r), e > c && (c = e), r > h && (h = r)
                                                        }
                                                    } else l = c = u = h = 0;
                                                    o = n[i] = {
                                                        index: i,
                                                        advanceWidth: e.hmtx.aWidth[i],
                                                        xMin: l,
                                                        yMin: u,
                                                        xMax: c,
                                                        yMax: h,
                                                        path: d,
                                                        pathCommandCount: s.length
                                                    }
                                                } - 1 !== m && (h += t.U.getPairAdjustment(e, m, i) * d), c.call(null, o, h, p), o.advanceWidth && (h += o.advanceWidth * d), u && (h += u * l), m = i
                                            }
                                            p += o.codePointAt(p) > 65535 ? 2 : 1
                                        })), h
                                    }
                                };
                            return i
                        }
                        return function(r) {
                            const n = new Uint8Array(r, 0, 4),
                                i = t._bin.readASCII(n, 0, 4);
                            if ("wOFF" === i) r = e(r);
                            else if ("wOF2" === i) throw new Error("woff2 fonts not supported");
                            return l(t.parse(r)[0])
                        }
                    }],
                    init: (t, e, r) => r(t(), e())
                }),
                N = {
                    defaultFontURL: "https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff",
                    sdfGlyphSize: 64,
                    sdfMargin: 1 / 16,
                    sdfExponent: 9,
                    textureWidth: 2048
                },
                G = new o.Color;
            let q = !1;

            function H() {
                return (self.performance || Date).now()
            }
            const Y = Object.create(null);

            function X(t, e) {
                q = !0, t = K({}, t);
                const r = H();
                if (t.font = function(t) {
                        Z || (Z = "undefined" === typeof document ? {} : document.createElement("a"));
                        return Z.href = t, Z.href
                    }(t.font || N.defaultFontURL), t.text = "" + t.text, t.sdfGlyphSize = t.sdfGlyphSize || N.sdfGlyphSize, null != t.colorRanges) {
                    let e = {};
                    for (let r in t.colorRanges)
                        if (t.colorRanges.hasOwnProperty(r)) {
                            let n = t.colorRanges[r];
                            "number" !== typeof n && (n = G.set(n).getHex()), e[r] = n
                        }
                    t.colorRanges = e
                }
                Object.freeze(t);
                const {
                    textureWidth: n,
                    sdfExponent: i
                } = N, {
                    sdfGlyphSize: s
                } = t, a = n / s * 4;
                let u = Y[s];
                if (!u) {
                    const t = document.createElement("canvas");
                    t.width = n, t.height = 256 * s / a, u = Y[s] = {
                            glyphCount: 0,
                            sdfGlyphSize: s,
                            sdfCanvas: t,
                            sdfTexture: new o.Texture(t, void 0, void 0, void 0, o.LinearFilter, o.LinearFilter),
                            contextLost: !1,
                            glyphsByFont: new Map
                        }, u.sdfTexture.generateMipmaps = !1,
                        function(t) {
                            const e = t.sdfCanvas;
                            e.addEventListener("webglcontextlost", (e => {
                                console.log("Context Lost", e), e.preventDefault(), t.contextLost = !0
                            })), e.addEventListener("webglcontextrestored", (e => {
                                console.log("Context Restored", e), t.contextLost = !1;
                                const r = [];
                                t.glyphsByFont.forEach((e => {
                                    e.forEach((e => {
                                        r.push($(e, t, !0))
                                    }))
                                })), l.all(r).then((() => {
                                    Q(t), t.sdfTexture.needsUpdate = !0
                                }))
                            }))
                        }(u)
                }
                const {
                    sdfTexture: c,
                    sdfCanvas: h
                } = u;
                let d = u.glyphsByFont.get(t.font);
                d || u.glyphsByFont.set(t.font, d = new Map), tt(t).then((o => {
                    const {
                        glyphIds: f,
                        glyphPositions: p,
                        fontSize: m,
                        unitsPerEm: g,
                        timings: v
                    } = o, y = [], b = new Float32Array(4 * f.length), w = m / g;
                    let x = 0,
                        S = 0;
                    const T = H();
                    f.forEach(((t, e) => {
                        let r = d.get(t);
                        if (!r) {
                            const {
                                path: e,
                                pathBounds: n
                            } = o.glyphData[t], i = Math.max(n[2] - n[0], n[3] - n[1]) / s * (N.sdfMargin * s + .5), a = u.glyphCount++, l = [n[0] - i, n[1] - i, n[2] + i, n[3] + i];
                            d.set(t, r = {
                                path: e,
                                atlasIndex: a,
                                sdfViewBox: l
                            }), y.push(r)
                        }
                        const {
                            sdfViewBox: n
                        } = r, i = p[S++], a = p[S++];
                        b[x++] = i + n[0] * w, b[x++] = a + n[1] * w, b[x++] = i + n[2] * w, b[x++] = a + n[3] * w, f[e] = r.atlasIndex
                    })), v.quads = (v.quads || 0) + (H() - T);
                    const _ = H();
                    v.sdf = {};
                    const E = h.height,
                        k = Math.ceil(u.glyphCount / a),
                        A = Math.pow(2, Math.ceil(Math.log2(k * s)));
                    A > E && (console.info(`Increasing SDF texture size ${E}->${A}`), W(h, n, A), c.dispose()), l.all(y.map((e => $(e, u, t.gpuAccelerateSDF).then((({
                        timing: t
                    }) => {
                        v.sdf[e.atlasIndex] = t
                    }))))).then((() => {
                        y.length && !u.contextLost && (Q(u), c.needsUpdate = !0), v.sdfTotal = H() - _, v.total = H() - r, e(Object.freeze({
                            parameters: t,
                            sdfTexture: c,
                            sdfGlyphSize: s,
                            sdfExponent: i,
                            glyphBounds: b,
                            glyphAtlasIndices: f,
                            glyphColors: o.glyphColors,
                            caretPositions: o.caretPositions,
                            caretHeight: o.caretHeight,
                            chunkedBounds: o.chunkedBounds,
                            ascender: o.ascender,
                            descender: o.descender,
                            lineHeight: o.lineHeight,
                            topBaseline: o.topBaseline,
                            blockBounds: o.blockBounds,
                            visibleBounds: o.visibleBounds,
                            timings: o.timings,
                            get totalBounds() {
                                return console.log("totalBounds deprecated, use blockBounds instead"), o.blockBounds
                            },
                            get totalBlockSize() {
                                console.log("totalBlockSize deprecated, use blockBounds instead");
                                const [t, e, r, n] = o.blockBounds;
                                return [r - t, n - e]
                            }
                        }))
                    }))
                })), l.all([]).then((() => {
                    var t;
                    u.contextLost || (t = h)._warm || (L.webgl.isSupported(t), t._warm = !0)
                }))
            }

            function $({
                path: t,
                atlasIndex: e,
                sdfViewBox: r
            }, {
                sdfGlyphSize: n,
                sdfCanvas: i,
                contextLost: o
            }, s) {
                if (o) return Promise.resolve({
                    timing: -1
                });
                const {
                    textureWidth: a,
                    sdfExponent: l
                } = N, u = Math.max(r[2] - r[0], r[3] - r[1]), c = Math.floor(e / 4);
                return function(t, e, r, n, i, o, s, a, l, u, c = !0) {
                    return c ? I(t, e, r, n, i, o, s, a, l, u).then(null, (c => (j || (console.warn("WebGL SDF generation failed, falling back to JS", c), j = !0), V(t, e, r, n, i, o, s, a, l, u)))) : V(t, e, r, n, i, o, s, a, l, u)
                }(n, n, t, r, u, l, i, c % (a / n) * n, Math.floor(c / (a / n)) * n, e % 4, s)
            }

            function K(t, e) {
                for (let r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                return t
            }
            let Z;

            function Q(t) {
                if ("function" !== typeof createImageBitmap) {
                    console.info("Safari<15: applying SDF canvas workaround");
                    const {
                        sdfCanvas: e,
                        sdfTexture: r
                    } = t, {
                        width: n,
                        height: i
                    } = e, o = t.sdfCanvas.getContext("webgl");
                    let s = r.image.data;
                    s && s.length === n * i * 4 || (s = new Uint8Array(n * i * 4), r.image = {
                        width: n,
                        height: i,
                        data: s
                    }, r.flipY = !1, r.isDataTexture = !0), o.readPixels(0, 0, n, i, o.RGBA, o.UNSIGNED_BYTE, s)
                }
            }
            const J = v({
                    name: "Typesetter",
                    dependencies: [N, z, function(t, e, r) {
                        const {
                            defaultFontURL: n
                        } = r, i = Object.create(null), o = 1 / 0, s = /[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/, a = /[\s\-\u007C\u00AD\u2010\u2012-\u2014\u2027\u2056\u2E17\u2E40]/;

                        function l(e, r) {
                            e || (e = n);
                            let o = i[e];
                            o ? o.pending ? o.pending.push(r) : r(o) : (i[e] = {
                                pending: [r]
                            }, function(e, r) {
                                ! function i() {
                                    const o = t => {
                                        console.error(`Failure loading font ${e}${e===n?"":"; trying fallback"}`, t), e !== n && (e = n, i())
                                    };
                                    try {
                                        const n = new XMLHttpRequest;
                                        n.open("get", e, !0), n.responseType = "arraybuffer", n.onload = function() {
                                            if (n.status >= 400) o(new Error(n.statusText));
                                            else if (n.status > 0) try {
                                                const e = t(n.response);
                                                r(e)
                                            } catch (e) {
                                                o(e)
                                            }
                                        }, n.onerror = o, n.send()
                                    } catch (s) {
                                        o(s)
                                    }
                                }()
                            }(e, (t => {
                                let r = i[e].pending;
                                i[e] = t, r.forEach((e => e(t)))
                            })))
                        }

                        function u({
                            text: t = "",
                            font: r = n,
                            sdfGlyphSize: i = 64,
                            fontSize: u = 1,
                            letterSpacing: p = 0,
                            lineHeight: m = "normal",
                            maxWidth: g = o,
                            direction: v,
                            textAlign: y = "left",
                            textIndent: b = 0,
                            whiteSpace: w = "normal",
                            overflowWrap: x = "normal",
                            anchorX: S = 0,
                            anchorY: T = 0,
                            includeCaretPositions: _ = !1,
                            chunkedBoundsSize: E = 8192,
                            colorRanges: k = null
                        }, A, R = !1) {
                            const C = d(),
                                O = {
                                    fontLoad: 0,
                                    typesetting: 0
                                };
                            t.indexOf("\r") > -1 && (console.info("Typesetter: got text with \\r chars; normalizing to \\n"), t = t.replace(/\r\n/g, "\n").replace(/\r/g, "\n")), u = +u, p = +p, g = +g, m = m || "normal", b = +b, l(r, (r => {
                                const n = isFinite(g);
                                let i = null,
                                    l = null,
                                    U = null,
                                    P = null,
                                    D = null,
                                    M = null,
                                    F = null,
                                    B = 0,
                                    L = 0,
                                    j = "nowrap" !== w;
                                const {
                                    ascender: I,
                                    descender: V,
                                    unitsPerEm: W
                                } = r;
                                O.fontLoad = d() - C;
                                const z = d(),
                                    N = u / W;
                                "normal" === m && (m = (I - V) / W);
                                const G = ((m *= u) - (I - V) * N) / 2,
                                    q = -(I * N + G),
                                    H = Math.min(m, (I - V) * N),
                                    Y = (I + V) / 2 * N - H / 2;
                                let X = b,
                                    $ = new f;
                                const K = [$];
                                r.forEachGlyph(t, u, p, ((e, r, i) => {
                                    const o = t.charAt(i),
                                        l = e.advanceWidth * N,
                                        c = $.count;
                                    let h;
                                    if ("isEmpty" in e || (e.isWhitespace = !!o && /\s/.test(o), e.canBreakAfter = !!o && a.test(o), e.isEmpty = e.xMin === e.xMax || e.yMin === e.yMax || s.test(o)), e.isWhitespace || e.isEmpty || L++, j && n && !e.isWhitespace && r + l + X > g && c) {
                                        if ($.glyphAt(c - 1).glyphObj.canBreakAfter) h = new f, X = -r;
                                        else
                                            for (let t = c; t--;) {
                                                if (0 === t && "break-word" === x) {
                                                    h = new f, X = -r;
                                                    break
                                                }
                                                if ($.glyphAt(t).glyphObj.canBreakAfter) {
                                                    h = $.splitAt(t + 1);
                                                    const e = h.glyphAt(0).x;
                                                    X -= e;
                                                    for (let t = h.count; t--;) h.glyphAt(t).x -= e;
                                                    break
                                                }
                                            }
                                        h && ($.isSoftWrapped = !0, $ = h, K.push($), B = g)
                                    }
                                    let d = $.glyphAt($.count);
                                    d.glyphObj = e, d.x = r + X, d.width = l, d.charIndex = i, "\n" === o && ($ = new f, K.push($), X = -(r + l + p * u) + b)
                                })), K.forEach((t => {
                                    for (let e = t.count; e--;) {
                                        let {
                                            glyphObj: r,
                                            x: n,
                                            width: i
                                        } = t.glyphAt(e);
                                        if (!r.isWhitespace) return t.width = n + i, void(t.width > B && (B = t.width))
                                    }
                                }));
                                let Z = 0,
                                    Q = 0;
                                if (S && ("number" === typeof S ? Z = -S : "string" === typeof S && (Z = -B * ("left" === S ? 0 : "center" === S ? .5 : "right" === S ? 1 : c(S)))), T)
                                    if ("number" === typeof T) Q = -T;
                                    else if ("string" === typeof T) {
                                    let t = K.length * m;
                                    Q = "top" === T ? 0 : "top-baseline" === T ? -q : "middle" === T ? t / 2 : "bottom" === T ? t : "bottom-baseline" === T ? t - G + V * N : c(T) * t
                                }
                                if (!R) {
                                    const n = e.getEmbeddingLevels(t, v);
                                    i = new Uint16Array(L), l = new Float32Array(2 * L), U = {}, M = [o, o, -1 / 0, -1 / 0], F = [];
                                    let s = q;
                                    _ && (D = new Float32Array(3 * t.length)), k && (P = new Uint8Array(3 * L));
                                    let a, u, c = 0,
                                        d = -1,
                                        f = -1;
                                    if (K.forEach(((p, g) => {
                                            let {
                                                count: v,
                                                width: b
                                            } = p;
                                            if (v > 0) {
                                                let m = 0;
                                                for (let t = v; t-- && p.glyphAt(t).glyphObj.isWhitespace;) m++;
                                                let g = 0,
                                                    w = 0;
                                                if ("center" === y) g = (B - b) / 2;
                                                else if ("right" === y) g = B - b;
                                                else if ("justify" === y && p.isSoftWrapped) {
                                                    let t = 0;
                                                    for (let e = v - m; e--;) p.glyphAt(e).glyphObj.isWhitespace && t++;
                                                    w = (B - b) / t
                                                }
                                                if (w || g) {
                                                    let t = 0;
                                                    for (let e = 0; e < v; e++) {
                                                        let r = p.glyphAt(e);
                                                        const n = r.glyphObj;
                                                        r.x += g + t, 0 !== w && n.isWhitespace && e < v - m && (t += w, r.width += w)
                                                    }
                                                }
                                                const x = e.getReorderSegments(t, n, p.glyphAt(0).charIndex, p.glyphAt(p.count - 1).charIndex);
                                                for (let t = 0; t < x.length; t++) {
                                                    const [e, r] = x[t];
                                                    let n = 1 / 0,
                                                        i = -1 / 0;
                                                    for (let t = 0; t < v; t++)
                                                        if (p.glyphAt(t).charIndex >= e) {
                                                            let e = t,
                                                                o = t;
                                                            for (; o < v; o++) {
                                                                let t = p.glyphAt(o);
                                                                if (t.charIndex > r) break;
                                                                o < v - m && (n = Math.min(n, t.x), i = Math.max(i, t.x + t.width))
                                                            }
                                                            for (let t = e; t < o; t++) {
                                                                const e = p.glyphAt(t);
                                                                e.x = i - (e.x + e.width - n)
                                                            }
                                                            break
                                                        }
                                                }
                                                let S;
                                                const T = t => S = t;
                                                for (let y = 0; y < v; y++) {
                                                    let m = p.glyphAt(y);
                                                    S = m.glyphObj;
                                                    const g = S.index,
                                                        v = 1 & n.levels[m.charIndex];
                                                    if (v) {
                                                        const n = e.getMirroredCharacter(t[m.charIndex]);
                                                        n && r.forEachGlyph(n, 0, 0, T)
                                                    }
                                                    if (_) {
                                                        const {
                                                            charIndex: t
                                                        } = m, e = m.x + Z, r = m.x + m.width + Z;
                                                        D[3 * t] = v ? r : e, D[3 * t + 1] = v ? e : r, D[3 * t + 2] = s + Y + Q;
                                                        const n = t - d;
                                                        n > 1 && h(D, d, n), d = t
                                                    }
                                                    if (k) {
                                                        const {
                                                            charIndex: t
                                                        } = m;
                                                        for (; t > f;) f++, k.hasOwnProperty(f) && (u = k[f])
                                                    }
                                                    if (!S.isWhitespace && !S.isEmpty) {
                                                        const t = c++;
                                                        U[g] || (U[g] = {
                                                            path: S.path,
                                                            pathBounds: [S.xMin, S.yMin, S.xMax, S.yMax]
                                                        });
                                                        const e = m.x + Z,
                                                            r = s + Q;
                                                        l[2 * t] = e, l[2 * t + 1] = r;
                                                        const n = e + S.xMin * N,
                                                            h = r + S.yMin * N,
                                                            d = e + S.xMax * N,
                                                            f = r + S.yMax * N;
                                                        n < M[0] && (M[0] = n), h < M[1] && (M[1] = h), d > M[2] && (M[2] = d), f > M[3] && (M[3] = f), t % E === 0 && (a = {
                                                            start: t,
                                                            end: t,
                                                            rect: [o, o, -1 / 0, -1 / 0]
                                                        }, F.push(a)), a.end++;
                                                        const p = a.rect;
                                                        if (n < p[0] && (p[0] = n), h < p[1] && (p[1] = h), d > p[2] && (p[2] = d), f > p[3] && (p[3] = f), i[t] = g, k) {
                                                            const e = 3 * t;
                                                            P[e] = u >> 16 & 255, P[e + 1] = u >> 8 & 255, P[e + 2] = 255 & u
                                                        }
                                                    }
                                                }
                                            }
                                            s -= m
                                        })), D) {
                                        const e = t.length - d;
                                        e > 1 && h(D, d, e)
                                    }
                                }
                                O.typesetting = d() - z, A({
                                    glyphIds: i,
                                    glyphPositions: l,
                                    glyphData: U,
                                    caretPositions: D,
                                    caretHeight: H,
                                    glyphColors: P,
                                    chunkedBounds: F,
                                    fontSize: u,
                                    unitsPerEm: W,
                                    ascender: I * N,
                                    descender: V * N,
                                    lineHeight: m,
                                    topBaseline: q,
                                    blockBounds: [Z, Q - K.length * m, Z + B, Q],
                                    visibleBounds: M,
                                    timings: O
                                })
                            }))
                        }

                        function c(t) {
                            let e = t.match(/^([\d.]+)%$/),
                                r = e ? parseFloat(e[1]) : NaN;
                            return isNaN(r) ? 0 : r / 100
                        }

                        function h(t, e, r) {
                            const n = t[3 * e],
                                i = t[3 * e + 1],
                                o = t[3 * e + 2],
                                s = (i - n) / r;
                            for (let a = 0; a < r; a++) {
                                const r = 3 * (e + a);
                                t[r] = n + s * a, t[r + 1] = n + s * (a + 1), t[r + 2] = o
                            }
                        }

                        function d() {
                            return (self.performance || Date).now()
                        }

                        function f() {
                            this.data = []
                        }
                        const p = ["glyphObj", "x", "width", "charIndex"];
                        return f.prototype = {
                            width: 0,
                            isSoftWrapped: !1,
                            get count() {
                                return Math.ceil(this.data.length / p.length)
                            },
                            glyphAt(t) {
                                let e = f.flyweight;
                                return e.data = this.data, e.index = t, e
                            },
                            splitAt(t) {
                                let e = new f;
                                return e.data = this.data.splice(t * p.length), e
                            }
                        }, f.flyweight = p.reduce(((t, e, r, n) => (Object.defineProperty(t, e, {
                            get() {
                                return this.data[this.index * p.length + r]
                            },
                            set(t) {
                                this.data[this.index * p.length + r] = t
                            }
                        }), t)), {
                            data: null,
                            index: 0
                        }), {
                            typeset: u,
                            measure: function(t, e) {
                                u(t, (t => {
                                    const [r, n, i, o] = t.blockBounds;
                                    e({
                                        width: i - r,
                                        height: o - n
                                    })
                                }), {
                                    metricsOnly: !0
                                })
                            },
                            loadFont: l
                        }
                    }, S],
                    init(t, e, r, n) {
                        const {
                            defaultFontURL: i
                        } = t;
                        return r(e, n(), {
                            defaultFontURL: i
                        })
                    }
                }),
                tt = v({
                    name: "Typesetter",
                    dependencies: [J, w],
                    init: (t, e) => function(r) {
                        const n = new e;
                        return t.typeset(r, n.resolve), n
                    },
                    getTransferables(t) {
                        const e = [t.glyphPositions.buffer, t.glyphIds.buffer];
                        return t.caretPositions && e.push(t.caretPositions.buffer), t.glyphColors && e.push(t.glyphColors.buffer), e
                    }
                });
            const et = (() => {
                const t = {};
                const e = "aTroikaGlyphIndex";
                class r extends o.InstancedBufferGeometry {
                    constructor() {
                        super(), this.detail = 1, this.curveRadius = 0, this.groups = [{
                            start: 0,
                            count: 1 / 0,
                            materialIndex: 0
                        }, {
                            start: 0,
                            count: 1 / 0,
                            materialIndex: 1
                        }], this.boundingSphere = new o.Sphere, this.boundingBox = new o.Box3
                    }
                    computeBoundingSphere() {}
                    computeBoundingBox() {}
                    setSide(t) {
                        const e = this.getIndex().count;
                        this.setDrawRange(t === o.BackSide ? e / 2 : 0, t === o.DoubleSide ? e : e / 2)
                    }
                    set detail(e) {
                        if (e !== this._detail) {
                            this._detail = e, ("number" !== typeof e || e < 1) && (e = 1);
                            let r = function(e) {
                                let r = t[e];
                                if (!r) {
                                    const n = new o.PlaneBufferGeometry(1, 1, e, e),
                                        i = n.clone(),
                                        s = n.attributes,
                                        a = i.attributes,
                                        l = new o.BufferGeometry,
                                        u = s.uv.count;
                                    for (let t = 0; t < u; t++) a.position.array[3 * t] *= -1, a.normal.array[3 * t + 2] *= -1;
                                    ["position", "normal", "uv"].forEach((t => {
                                        l.setAttribute(t, new o.Float32BufferAttribute([...s[t].array, ...a[t].array], s[t].itemSize))
                                    })), l.setIndex([...n.index.array, ...i.index.array.map((t => t + u))]), l.translate(.5, .5, 0), r = t[e] = l
                                }
                                return r
                            }(e);
                            ["position", "normal", "uv"].forEach((t => {
                                this.attributes[t] = r.attributes[t].clone()
                            })), this.setIndex(r.getIndex().clone())
                        }
                    }
                    get detail() {
                        return this._detail
                    }
                    set curveRadius(t) {
                        t !== this._curveRadius && (this._curveRadius = t, this._updateBounds())
                    }
                    get curveRadius() {
                        return this._curveRadius
                    }
                    updateGlyphs(t, r, o, s, a) {
                        n(this, "aTroikaGlyphBounds", t, 4), n(this, e, r, 1), n(this, "aTroikaGlyphColor", a, 3), this._blockBounds = o, this._chunkedBounds = s, i(this, r.length), this._updateBounds()
                    }
                    _updateBounds() {
                        const t = this._blockBounds;
                        if (t) {
                            const {
                                curveRadius: e,
                                boundingBox: r
                            } = this;
                            if (e) {
                                const {
                                    PI: n,
                                    floor: i,
                                    min: o,
                                    max: s,
                                    sin: a,
                                    cos: l
                                } = Math, u = n / 2, c = 2 * n, h = Math.abs(e), d = t[0] / h, f = t[2] / h, p = i((d + u) / c) !== i((f + u) / c) ? -h : o(a(d) * h, a(f) * h), m = i((d - u) / c) !== i((f - u) / c) ? h : s(a(d) * h, a(f) * h), g = i((d + n) / c) !== i((f + n) / c) ? 2 * h : s(h - l(d) * h, h - l(f) * h);
                                r.min.set(p, t[1], e < 0 ? -g : 0), r.max.set(m, t[3], e < 0 ? 0 : g)
                            } else r.min.set(t[0], t[1], 0), r.max.set(t[2], t[3], 0);
                            r.getBoundingSphere(this.boundingSphere)
                        }
                    }
                    applyClipRect(t) {
                        let r = this.getAttribute(e).count,
                            n = this._chunkedBounds;
                        if (n)
                            for (let e = n.length; e--;) {
                                r = n[e].end;
                                let i = n[e].rect;
                                if (i[1] < t.w && i[3] > t.y && i[0] < t.z && i[2] > t.x) break
                            }
                        i(this, r)
                    }
                }

                function n(t, e, r, n) {
                    const i = t.getAttribute(e);
                    r ? i && i.array.length === r.length ? (i.array.set(r), i.needsUpdate = !0) : (t.setAttribute(e, new o.InstancedBufferAttribute(r, n)), delete t._maxInstanceCount, t.dispose()) : i && t.deleteAttribute(e)
                }

                function i(t, e) {
                    t[t.hasOwnProperty("instanceCount") ? "instanceCount" : "maxInstancedCount"] = e
                }
                return r.prototype.setAttribute || (r.prototype.setAttribute = function(t, e) {
                    return this.attributes[t] = e, this
                }), r
            })();
            const rt = (() => {
                const t = new o.MeshBasicMaterial({
                        color: 16777215,
                        side: o.DoubleSide,
                        transparent: !0
                    }),
                    e = 8421504,
                    r = new o.Matrix4,
                    n = new o.Vector3,
                    i = new o.Vector3,
                    s = [],
                    a = new o.Vector3,
                    l = "+x+y";

                function u(t) {
                    return Array.isArray(t) ? t[0] : t
                }
                let c = () => {
                        const e = new o.Mesh(new o.PlaneBufferGeometry(1, 1), t);
                        return c = () => e, e
                    },
                    h = () => {
                        const e = new o.Mesh(new o.PlaneBufferGeometry(1, 1, 32, 1), t);
                        return h = () => e, e
                    };
                const d = {
                        type: "syncstart"
                    },
                    f = {
                        type: "synccomplete"
                    },
                    p = ["font", "fontSize", "letterSpacing", "lineHeight", "maxWidth", "overflowWrap", "text", "direction", "textAlign", "textIndent", "whiteSpace", "anchorX", "anchorY", "colorRanges", "sdfGlyphSize"],
                    m = p.concat("material", "color", "depthOffset", "clipRect", "curveRadius", "orientation", "glyphGeometryDetail");
                class g extends o.Mesh {
                    constructor() {
                        super(new et, null), this.text = "", this.anchorX = 0, this.anchorY = 0, this.curveRadius = 0, this.direction = "auto", this.font = null, this.fontSize = .1, this.letterSpacing = 0, this.lineHeight = "normal", this.maxWidth = 1 / 0, this.overflowWrap = "normal", this.textAlign = "left", this.textIndent = 0, this.whiteSpace = "normal", this.material = null, this.color = null, this.colorRanges = null, this.outlineWidth = 0, this.outlineColor = 0, this.outlineOpacity = 1, this.outlineBlur = 0, this.outlineOffsetX = 0, this.outlineOffsetY = 0, this.strokeWidth = 0, this.strokeColor = e, this.strokeOpacity = 1, this.fillOpacity = 1, this.depthOffset = 0, this.clipRect = null, this.orientation = l, this.glyphGeometryDetail = 1, this.sdfGlyphSize = null, this.gpuAccelerateSDF = !0, this.debugSDF = !1
                    }
                    sync(t) {
                        this._needsSync && (this._needsSync = !1, this._isSyncing ? (this._queuedSyncs || (this._queuedSyncs = [])).push(t) : (this._isSyncing = !0, this.dispatchEvent(d), X({
                            text: this.text,
                            font: this.font,
                            fontSize: this.fontSize || .1,
                            letterSpacing: this.letterSpacing || 0,
                            lineHeight: this.lineHeight || "normal",
                            maxWidth: this.maxWidth,
                            direction: this.direction || "auto",
                            textAlign: this.textAlign,
                            textIndent: this.textIndent,
                            whiteSpace: this.whiteSpace,
                            overflowWrap: this.overflowWrap,
                            anchorX: this.anchorX,
                            anchorY: this.anchorY,
                            colorRanges: this.colorRanges,
                            includeCaretPositions: !0,
                            sdfGlyphSize: this.sdfGlyphSize,
                            gpuAccelerateSDF: this.gpuAccelerateSDF
                        }, (e => {
                            this._isSyncing = !1, this._textRenderInfo = e, this.geometry.updateGlyphs(e.glyphBounds, e.glyphAtlasIndices, e.blockBounds, e.chunkedBounds, e.glyphColors);
                            const r = this._queuedSyncs;
                            r && (this._queuedSyncs = null, this._needsSync = !0, this.sync((() => {
                                r.forEach((t => t && t()))
                            }))), this.dispatchEvent(f), t && t()
                        }))))
                    }
                    onBeforeRender(t, e, r, n, i, s) {
                        this.sync(), i.isTroikaTextMaterial && this._prepareForRender(i), i._hadOwnSide = i.hasOwnProperty("side"), this.geometry.setSide(i._actualSide = i.side), i.side = o.FrontSide
                    }
                    onAfterRender(t, e, r, n, i, o) {
                        i._hadOwnSide ? i.side = i._actualSide : delete i.side
                    }
                    dispose() {
                        this.geometry.dispose()
                    }
                    get textRenderInfo() {
                        return this._textRenderInfo || null
                    }
                    get material() {
                        let e = this._derivedMaterial;
                        const r = this._baseMaterial || this._defaultMaterial || (this._defaultMaterial = t.clone());
                        if (e && e.baseMaterial === r || (e = this._derivedMaterial = function(t) {
                                const e = U(t, {
                                    chained: !0,
                                    extensions: {
                                        derivatives: !0
                                    },
                                    uniforms: {
                                        uTroikaSDFTexture: {
                                            value: null
                                        },
                                        uTroikaSDFTextureSize: {
                                            value: new o.Vector2
                                        },
                                        uTroikaSDFGlyphSize: {
                                            value: 0
                                        },
                                        uTroikaSDFExponent: {
                                            value: 0
                                        },
                                        uTroikaTotalBounds: {
                                            value: new o.Vector4(0, 0, 0, 0)
                                        },
                                        uTroikaClipRect: {
                                            value: new o.Vector4(0, 0, 0, 0)
                                        },
                                        uTroikaDistanceOffset: {
                                            value: 0
                                        },
                                        uTroikaOutlineOpacity: {
                                            value: 0
                                        },
                                        uTroikaFillOpacity: {
                                            value: 1
                                        },
                                        uTroikaPositionOffset: {
                                            value: new o.Vector2
                                        },
                                        uTroikaCurveRadius: {
                                            value: 0
                                        },
                                        uTroikaBlurRadius: {
                                            value: 0
                                        },
                                        uTroikaStrokeWidth: {
                                            value: 0
                                        },
                                        uTroikaStrokeColor: {
                                            value: new o.Color
                                        },
                                        uTroikaStrokeOpacity: {
                                            value: 1
                                        },
                                        uTroikaOrient: {
                                            value: new o.Matrix3
                                        },
                                        uTroikaUseGlyphColors: {
                                            value: !0
                                        },
                                        uTroikaSDFDebug: {
                                            value: !1
                                        }
                                    },
                                    vertexDefs: "\nuniform vec2 uTroikaSDFTextureSize;\nuniform float uTroikaSDFGlyphSize;\nuniform vec4 uTroikaTotalBounds;\nuniform vec4 uTroikaClipRect;\nuniform mat3 uTroikaOrient;\nuniform bool uTroikaUseGlyphColors;\nuniform float uTroikaDistanceOffset;\nuniform float uTroikaBlurRadius;\nuniform vec2 uTroikaPositionOffset;\nuniform float uTroikaCurveRadius;\nattribute vec4 aTroikaGlyphBounds;\nattribute float aTroikaGlyphIndex;\nattribute vec3 aTroikaGlyphColor;\nvarying vec2 vTroikaGlyphUV;\nvarying vec4 vTroikaTextureUVBounds;\nvarying float vTroikaTextureChannel;\nvarying vec3 vTroikaGlyphColor;\nvarying vec2 vTroikaGlyphDimensions;\n",
                                    vertexTransform: "\nvec4 bounds = aTroikaGlyphBounds;\nbounds.xz += uTroikaPositionOffset.x;\nbounds.yw -= uTroikaPositionOffset.y;\n\nvec4 outlineBounds = vec4(\n  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,\n  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius\n);\nvec4 clippedBounds = vec4(\n  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),\n  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)\n);\n\nvec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);\n\nposition.xy = mix(bounds.xy, bounds.zw, clippedXY);\n\nuv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);\n\nfloat rad = uTroikaCurveRadius;\nif (rad != 0.0) {\n  float angle = position.x / rad;\n  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);\n  normal.xz = vec2(sin(angle), cos(angle));\n}\n  \nposition = uTroikaOrient * position;\nnormal = uTroikaOrient * normal;\n\nvTroikaGlyphUV = clippedXY.xy;\nvTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);\n\n\nfloat txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;\nvec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;\nvec2 txStartUV = txUvPerSquare * vec2(\n  mod(floor(aTroikaGlyphIndex / 4.0), txCols),\n  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)\n);\nvTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);\nvTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);\n",
                                    fragmentDefs: "\nuniform sampler2D uTroikaSDFTexture;\nuniform vec2 uTroikaSDFTextureSize;\nuniform float uTroikaSDFGlyphSize;\nuniform float uTroikaSDFExponent;\nuniform float uTroikaDistanceOffset;\nuniform float uTroikaFillOpacity;\nuniform float uTroikaOutlineOpacity;\nuniform float uTroikaBlurRadius;\nuniform vec3 uTroikaStrokeColor;\nuniform float uTroikaStrokeWidth;\nuniform float uTroikaStrokeOpacity;\nuniform bool uTroikaSDFDebug;\nvarying vec2 vTroikaGlyphUV;\nvarying vec4 vTroikaTextureUVBounds;\nvarying float vTroikaTextureChannel;\nvarying vec2 vTroikaGlyphDimensions;\n\nfloat troikaSdfValueToSignedDistance(float alpha) {\n  // Inverse of exponential encoding in webgl-sdf-generator\n  \n  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);\n  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;\n  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);\n  return signedDist;\n}\n\nfloat troikaGlyphUvToSdfValue(vec2 glyphUV) {\n  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);\n  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);\n  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1\n  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;\n}\n\nfloat troikaGlyphUvToDistance(vec2 uv) {\n  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));\n}\n\nfloat troikaGetAADist() {\n  \n  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300\n  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;\n  #else\n  return vTroikaGlyphDimensions.x / 64.0;\n  #endif\n}\n\nfloat troikaGetFragDistValue() {\n  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);\n  float distance = troikaGlyphUvToDistance(clampedGlyphUV);\n \n  // Extrapolate distance when outside bounds:\n  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : \n    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);\n\n  \n\n  return distance;\n}\n\nfloat troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {\n  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)\n  float alpha = step(-distanceOffset, -distance);\n  #else\n\n  float alpha = smoothstep(\n    distanceOffset + aaDist,\n    distanceOffset - aaDist,\n    distance\n  );\n  #endif\n\n  return alpha;\n}\n",
                                    fragmentColorTransform: "\nfloat aaDist = troikaGetAADist();\nfloat fragDistance = troikaGetFragDistValue();\nfloat edgeAlpha = uTroikaSDFDebug ?\n  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :\n  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));\n\n#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)\nvec4 fillRGBA = gl_FragColor;\nfillRGBA.a *= uTroikaFillOpacity;\nvec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);\nif (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;\ngl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(\n  -uTroikaStrokeWidth - aaDist,\n  -uTroikaStrokeWidth + aaDist,\n  fragDistance\n));\ngl_FragColor.a *= edgeAlpha;\n#endif\n\nif (edgeAlpha == 0.0) {\n  discard;\n}\n",
                                    customRewriter({
                                        vertexShader: t,
                                        fragmentShader: e
                                    }) {
                                        let r = /\buniform\s+vec3\s+diffuse\b/;
                                        return r.test(e) && (e = e.replace(r, "varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g, "vTroikaGlyphColor"), r.test(t) || (t = t.replace(T, "uniform vec3 diffuse;\n$&\nvTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;\n"))), {
                                            vertexShader: t,
                                            fragmentShader: e
                                        }
                                    }
                                });
                                return e.transparent = !0, Object.defineProperties(e, {
                                    isTroikaTextMaterial: {
                                        value: !0
                                    },
                                    shadowSide: {
                                        get() {
                                            return this.side
                                        },
                                        set() {}
                                    }
                                }), e
                            }(r), r.addEventListener("dispose", (function t() {
                                r.removeEventListener("dispose", t), e.dispose()
                            }))), this.outlineWidth || this.outlineBlur || this.outlineOffsetX || this.outlineOffsetY) {
                            let t = e._outlineMtl;
                            return t || (t = e._outlineMtl = Object.create(e, {
                                id: {
                                    value: e.id + .1
                                }
                            }), t.isTextOutlineMaterial = !0, t.depthWrite = !1, t.map = null, e.addEventListener("dispose", (function r() {
                                e.removeEventListener("dispose", r), t.dispose()
                            }))), [t, e]
                        }
                        return e
                    }
                    set material(t) {
                        t && t.isTroikaTextMaterial ? (this._derivedMaterial = t, this._baseMaterial = t.baseMaterial) : this._baseMaterial = t
                    }
                    get glyphGeometryDetail() {
                        return this.geometry.detail
                    }
                    set glyphGeometryDetail(t) {
                        this.geometry.detail = t
                    }
                    get curveRadius() {
                        return this.geometry.curveRadius
                    }
                    set curveRadius(t) {
                        this.geometry.curveRadius = t
                    }
                    get customDepthMaterial() {
                        return u(this.material).getDepthMaterial()
                    }
                    get customDistanceMaterial() {
                        return u(this.material).getDistanceMaterial()
                    }
                    _prepareForRender(t) {
                        const s = t.isTextOutlineMaterial,
                            u = t.uniforms,
                            c = this.textRenderInfo;
                        if (c) {
                            const {
                                sdfTexture: t,
                                blockBounds: r
                            } = c;
                            u.uTroikaSDFTexture.value = t, u.uTroikaSDFTextureSize.value.set(t.image.width, t.image.height), u.uTroikaSDFGlyphSize.value = c.sdfGlyphSize, u.uTroikaSDFExponent.value = c.sdfExponent, u.uTroikaTotalBounds.value.fromArray(r), u.uTroikaUseGlyphColors.value = !s && !!c.glyphColors;
                            let n, i, o, a = 0,
                                l = 0,
                                h = 0,
                                d = 0,
                                f = 0;
                            if (s) {
                                let {
                                    outlineWidth: t,
                                    outlineOffsetX: e,
                                    outlineOffsetY: r,
                                    outlineBlur: i,
                                    outlineOpacity: o
                                } = this;
                                a = this._parsePercent(t) || 0, l = Math.max(0, this._parsePercent(i) || 0), n = o, d = this._parsePercent(e) || 0, f = this._parsePercent(r) || 0
                            } else h = Math.max(0, this._parsePercent(this.strokeWidth) || 0), h && (o = this.strokeColor, u.uTroikaStrokeColor.value.set(null == o ? e : o), i = this.strokeOpacity, null == i && (i = 1)), n = this.fillOpacity;
                            u.uTroikaDistanceOffset.value = a, u.uTroikaPositionOffset.value.set(d, f), u.uTroikaBlurRadius.value = l, u.uTroikaStrokeWidth.value = h, u.uTroikaStrokeOpacity.value = i, u.uTroikaFillOpacity.value = null == n ? 1 : n, u.uTroikaCurveRadius.value = this.curveRadius || 0;
                            let p = this.clipRect;
                            if (p && Array.isArray(p) && 4 === p.length) u.uTroikaClipRect.value.fromArray(p);
                            else {
                                const t = 100 * (this.fontSize || .1);
                                u.uTroikaClipRect.value.set(r[0] - t, r[1] - t, r[2] + t, r[3] + t)
                            }
                            this.geometry.applyClipRect(u.uTroikaClipRect.value)
                        }
                        u.uTroikaSDFDebug.value = !!this.debugSDF, t.polygonOffset = !!this.depthOffset, t.polygonOffsetFactor = t.polygonOffsetUnits = this.depthOffset || 0;
                        const h = s ? this.outlineColor || 0 : this.color;
                        if (null == h) delete t.color;
                        else {
                            const e = t.hasOwnProperty("color") ? t.color : t.color = new o.Color;
                            h === e._input && "object" !== typeof h || e.set(e._input = h)
                        }
                        let d = this.orientation || l;
                        if (d !== t._orientation) {
                            let e = u.uTroikaOrient.value;
                            d = d.replace(/[^-+xyz]/g, "");
                            let o = d !== l && d.match(/^([-+])([xyz])([-+])([xyz])$/);
                            if (o) {
                                let [, t, s, l, u] = o;
                                n.set(0, 0, 0)[s] = "-" === t ? 1 : -1, i.set(0, 0, 0)[u] = "-" === l ? -1 : 1, r.lookAt(a, n.cross(i), i), e.setFromMatrix4(r)
                            } else e.identity();
                            t._orientation = d
                        }
                    }
                    _parsePercent(t) {
                        if ("string" === typeof t) {
                            let e = t.match(/^(-?[\d.]+)%$/),
                                r = e ? parseFloat(e[1]) : NaN;
                            t = (isNaN(r) ? 0 : r / 100) * this.fontSize
                        }
                        return t
                    }
                    localPositionToTextCoords(t, e = new o.Vector2) {
                        e.copy(t);
                        const r = this.curveRadius;
                        return r && (e.x = Math.atan2(t.x, Math.abs(r) - Math.abs(t.z)) * Math.abs(r)), e
                    }
                    worldPositionToTextCoords(t, e = new o.Vector2) {
                        return n.copy(t), this.localPositionToTextCoords(this.worldToLocal(n), e)
                    }
                    raycast(t, e) {
                        const {
                            textRenderInfo: r,
                            curveRadius: n
                        } = this;
                        if (r) {
                            const i = r.blockBounds,
                                o = n ? h() : c(),
                                a = o.geometry,
                                {
                                    position: l,
                                    uv: u
                                } = a.attributes;
                            for (let t = 0; t < u.count; t++) {
                                let e = i[0] + u.getX(t) * (i[2] - i[0]);
                                const r = i[1] + u.getY(t) * (i[3] - i[1]);
                                let o = 0;
                                n && (o = n - Math.cos(e / n) * n, e = Math.sin(e / n) * n), l.setXYZ(t, e, r, o)
                            }
                            a.boundingSphere = this.geometry.boundingSphere, a.boundingBox = this.geometry.boundingBox, o.matrixWorld = this.matrixWorld, o.material.side = this.material.side, s.length = 0, o.raycast(t, s);
                            for (let t = 0; t < s.length; t++) s[t].object = this, e.push(s[t])
                        }
                    }
                    copy(t) {
                        const e = this.geometry;
                        return super.copy(t), this.geometry = e, m.forEach((e => {
                            this[e] = t[e]
                        })), this
                    }
                    clone() {
                        return (new this.constructor).copy(this)
                    }
                }
                p.forEach((t => {
                    const e = "_private_" + t;
                    Object.defineProperty(g.prototype, t, {
                        get() {
                            return this[e]
                        },
                        set(t) {
                            t !== this[e] && (this[e] = t, this._needsSync = !0)
                        }
                    })
                }));
                let v = !1;
                return Object.defineProperty(g.prototype, "anchor", {
                    get() {
                        return this._deprecated_anchor
                    },
                    set(t) {
                        this._deprecated_anchor = t, v || (console.warn("TextMesh: `anchor` has been deprecated; use `anchorX` and `anchorY` instead."), v = !0), Array.isArray(t) ? (this.anchorX = 100 * (+t[0] || 0) + "%", this.anchorY = 100 * (+t[1] || 0) + "%") : this.anchorX = this.anchorY = 0
                    }
                }), g
            })();
            new WeakMap;
            new WeakMap;
            var nt = r(5804),
                it = r(4881);
            const ot = i.forwardRef((({
                anchorX: t = "center",
                anchorY: e = "middle",
                font: r,
                children: o,
                characters: s,
                onSync: a,
                ...l
            }, u) => {
                const c = (0, nt.w)((({
                        invalidate: t
                    }) => t)),
                    [h] = i.useState((() => new rt)),
                    [d, f] = i.useMemo((() => {
                        const t = [];
                        let e = "";
                        return i.Children.forEach(o, (r => {
                            "string" === typeof r || "number" === typeof r ? e += r : t.push(r)
                        })), [t, e]
                    }), [o]);
                return (0, it.Rq)((() => new Promise((t => function({
                    font: t,
                    characters: e,
                    sdfGlyphSize: r
                }, n) {
                    X({
                        font: t,
                        sdfGlyphSize: r,
                        text: Array.isArray(e) ? e.join("\n") : "" + e
                    }, n)
                }({
                    font: r,
                    characters: s
                }, t)))), ["troika-text", r, s]), i.useLayoutEffect((() => {
                    h.sync((() => {
                        c(), a && a(h)
                    }))
                })), i.useEffect((() => () => h.dispose()), [h]), i.createElement("primitive", (0, n.Z)({
                    object: h,
                    ref: u,
                    font: r,
                    text: f,
                    anchorX: t,
                    anchorY: e
                }, l), d)
            }))
        },
        5769: function(t, e, r) {
            "use strict";
            r.d(e, {
                m: function() {
                    return a
                }
            });
            var n = r(9477),
                i = r(5804),
                o = r(7294);
            const s = t => t === Object(t) && !Array.isArray(t) && "function" !== typeof t;

            function a(t, e) {
                const r = (0, i.w)((t => t.gl)),
                    a = (0, i.z)(n.TextureLoader, s(t) ? Object.values(t) : t);
                if ((0, o.useLayoutEffect)((() => {
                        null == e || e(a)
                    }), [e]), (0, o.useEffect)((() => {
                        (Array.isArray(a) ? a : [a]).forEach(r.initTexture)
                    }), [r, a]), s(t)) {
                    const e = Object.keys(t),
                        r = {};
                    return e.forEach((t => Object.assign(r, {
                        [t]: a[e.indexOf(t)]
                    }))), r
                }
                return a
            }
            a.preload = t => i.z.preload(n.TextureLoader, t), a.clear = t => i.z.clear(n.TextureLoader, t)
        },
        9742: function(t, e) {
            "use strict";
            e.byteLength = function(t) {
                var e = l(t),
                    r = e[0],
                    n = e[1];
                return 3 * (r + n) / 4 - n
            }, e.toByteArray = function(t) {
                var e, r, o = l(t),
                    s = o[0],
                    a = o[1],
                    u = new i(function(t, e, r) {
                        return 3 * (e + r) / 4 - r
                    }(0, s, a)),
                    c = 0,
                    h = a > 0 ? s - 4 : s;
                for (r = 0; r < h; r += 4) e = n[t.charCodeAt(r)] << 18 | n[t.charCodeAt(r + 1)] << 12 | n[t.charCodeAt(r + 2)] << 6 | n[t.charCodeAt(r + 3)], u[c++] = e >> 16 & 255, u[c++] = e >> 8 & 255, u[c++] = 255 & e;
                2 === a && (e = n[t.charCodeAt(r)] << 2 | n[t.charCodeAt(r + 1)] >> 4, u[c++] = 255 & e);
                1 === a && (e = n[t.charCodeAt(r)] << 10 | n[t.charCodeAt(r + 1)] << 4 | n[t.charCodeAt(r + 2)] >> 2, u[c++] = e >> 8 & 255, u[c++] = 255 & e);
                return u
            }, e.fromByteArray = function(t) {
                for (var e, n = t.length, i = n % 3, o = [], s = 16383, a = 0, l = n - i; a < l; a += s) o.push(u(t, a, a + s > l ? l : a + s));
                1 === i ? (e = t[n - 1], o.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === i && (e = (t[n - 2] << 8) + t[n - 1], o.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="));
                return o.join("")
            };
            for (var r = [], n = [], i = "undefined" !== typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, a = o.length; s < a; ++s) r[s] = o[s], n[o.charCodeAt(s)] = s;

            function l(t) {
                var e = t.length;
                if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var r = t.indexOf("=");
                return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
            }

            function u(t, e, n) {
                for (var i, o, s = [], a = e; a < n; a += 3) i = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
                return s.join("")
            }
            n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63
        },
        8764: function(t, e, r) {
            "use strict";
            var n = r(9742),
                i = r(645),
                o = r(7300);

            function s() {
                return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function a(t, e) {
                if (s() < e) throw new RangeError("Invalid typed array length");
                return l.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = l.prototype : (null === t && (t = new l(e)), t.length = e), t
            }

            function l(t, e, r) {
                if (!l.TYPED_ARRAY_SUPPORT && !(this instanceof l)) return new l(t, e, r);
                if ("number" === typeof t) {
                    if ("string" === typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                    return h(this, t)
                }
                return u(this, t, e, r)
            }

            function u(t, e, r, n) {
                if ("number" === typeof e) throw new TypeError('"value" argument must not be a number');
                return "undefined" !== typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, r, n) {
                    if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");
                    if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                    e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n);
                    l.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = l.prototype : t = d(t, e);
                    return t
                }(t, e, r, n) : "string" === typeof e ? function(t, e, r) {
                    "string" === typeof r && "" !== r || (r = "utf8");
                    if (!l.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                    var n = 0 | p(e, r),
                        i = (t = a(t, n)).write(e, r);
                    i !== n && (t = t.slice(0, i));
                    return t
                }(t, e, r) : function(t, e) {
                    if (l.isBuffer(e)) {
                        var r = 0 | f(e.length);
                        return 0 === (t = a(t, r)).length || e.copy(t, 0, 0, r), t
                    }
                    if (e) {
                        if ("undefined" !== typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" !== typeof e.length || (n = e.length) !== n ? a(t, 0) : d(t, e);
                        if ("Buffer" === e.type && o(e.data)) return d(t, e.data)
                    }
                    var n;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(t, e)
            }

            function c(t) {
                if ("number" !== typeof t) throw new TypeError('"size" argument must be a number');
                if (t < 0) throw new RangeError('"size" argument must not be negative')
            }

            function h(t, e) {
                if (c(e), t = a(t, e < 0 ? 0 : 0 | f(e)), !l.TYPED_ARRAY_SUPPORT)
                    for (var r = 0; r < e; ++r) t[r] = 0;
                return t
            }

            function d(t, e) {
                var r = e.length < 0 ? 0 : 0 | f(e.length);
                t = a(t, r);
                for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
                return t
            }

            function f(t) {
                if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
                return 0 | t
            }

            function p(t, e) {
                if (l.isBuffer(t)) return t.length;
                if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                "string" !== typeof t && (t = "" + t);
                var r = t.length;
                if (0 === r) return 0;
                for (var n = !1;;) switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return W(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return z(t).length;
                    default:
                        if (n) return W(t).length;
                        e = ("" + e).toLowerCase(), n = !0
                }
            }

            function m(t, e, r) {
                var n = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                if ((r >>>= 0) <= (e >>>= 0)) return "";
                for (t || (t = "utf8");;) switch (t) {
                    case "hex":
                        return O(this, e, r);
                    case "utf8":
                    case "utf-8":
                        return k(this, e, r);
                    case "ascii":
                        return R(this, e, r);
                    case "latin1":
                    case "binary":
                        return C(this, e, r);
                    case "base64":
                        return E(this, e, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return U(this, e, r);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), n = !0
                }
            }

            function g(t, e, r) {
                var n = t[e];
                t[e] = t[r], t[r] = n
            }

            function v(t, e, r, n, i) {
                if (0 === t.length) return -1;
                if ("string" === typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                    if (i) return -1;
                    r = t.length - 1
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0
                }
                if ("string" === typeof e && (e = l.from(e, n)), l.isBuffer(e)) return 0 === e.length ? -1 : y(t, e, r, n, i);
                if ("number" === typeof e) return e &= 255, l.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : y(t, [e], r, n, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function y(t, e, r, n, i) {
                var o, s = 1,
                    a = t.length,
                    l = e.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    s = 2, a /= 2, l /= 2, r /= 2
                }

                function u(t, e) {
                    return 1 === s ? t[e] : t.readUInt16BE(e * s)
                }
                if (i) {
                    var c = -1;
                    for (o = r; o < a; o++)
                        if (u(t, o) === u(e, -1 === c ? 0 : o - c)) {
                            if (-1 === c && (c = o), o - c + 1 === l) return c * s
                        } else -1 !== c && (o -= o - c), c = -1
                } else
                    for (r + l > a && (r = a - l), o = r; o >= 0; o--) {
                        for (var h = !0, d = 0; d < l; d++)
                            if (u(t, o + d) !== u(e, d)) {
                                h = !1;
                                break
                            }
                        if (h) return o
                    }
                return -1
            }

            function b(t, e, r, n) {
                r = Number(r) || 0;
                var i = t.length - r;
                n ? (n = Number(n)) > i && (n = i) : n = i;
                var o = e.length;
                if (o % 2 !== 0) throw new TypeError("Invalid hex string");
                n > o / 2 && (n = o / 2);
                for (var s = 0; s < n; ++s) {
                    var a = parseInt(e.substr(2 * s, 2), 16);
                    if (isNaN(a)) return s;
                    t[r + s] = a
                }
                return s
            }

            function w(t, e, r, n) {
                return N(W(e, t.length - r), t, r, n)
            }

            function x(t, e, r, n) {
                return N(function(t) {
                    for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                    return e
                }(e), t, r, n)
            }

            function S(t, e, r, n) {
                return x(t, e, r, n)
            }

            function T(t, e, r, n) {
                return N(z(e), t, r, n)
            }

            function _(t, e, r, n) {
                return N(function(t, e) {
                    for (var r, n, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) n = (r = t.charCodeAt(s)) >> 8, i = r % 256, o.push(i), o.push(n);
                    return o
                }(e, t.length - r), t, r, n)
            }

            function E(t, e, r) {
                return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
            }

            function k(t, e, r) {
                r = Math.min(t.length, r);
                for (var n = [], i = e; i < r;) {
                    var o, s, a, l, u = t[i],
                        c = null,
                        h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                    if (i + h <= r) switch (h) {
                        case 1:
                            u < 128 && (c = u);
                            break;
                        case 2:
                            128 === (192 & (o = t[i + 1])) && (l = (31 & u) << 6 | 63 & o) > 127 && (c = l);
                            break;
                        case 3:
                            o = t[i + 1], s = t[i + 2], 128 === (192 & o) && 128 === (192 & s) && (l = (15 & u) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (l < 55296 || l > 57343) && (c = l);
                            break;
                        case 4:
                            o = t[i + 1], s = t[i + 2], a = t[i + 3], 128 === (192 & o) && 128 === (192 & s) && 128 === (192 & a) && (l = (15 & u) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && l < 1114112 && (c = l)
                    }
                    null === c ? (c = 65533, h = 1) : c > 65535 && (c -= 65536, n.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), n.push(c), i += h
                }
                return function(t) {
                    var e = t.length;
                    if (e <= A) return String.fromCharCode.apply(String, t);
                    var r = "",
                        n = 0;
                    for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += A));
                    return r
                }(n)
            }
            e.lW = l, e.h2 = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== r.g.TYPED_ARRAY_SUPPORT ? r.g.TYPED_ARRAY_SUPPORT : function() {
                try {
                    var t = new Uint8Array(1);
                    return t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === t.foo() && "function" === typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(), s(), l.poolSize = 8192, l._augment = function(t) {
                return t.__proto__ = l.prototype, t
            }, l.from = function(t, e, r) {
                return u(null, t, e, r)
            }, l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, "undefined" !== typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
                value: null,
                configurable: !0
            })), l.alloc = function(t, e, r) {
                return function(t, e, r, n) {
                    return c(e), e <= 0 ? a(t, e) : void 0 !== r ? "string" === typeof n ? a(t, e).fill(r, n) : a(t, e).fill(r) : a(t, e)
                }(null, t, e, r)
            }, l.allocUnsafe = function(t) {
                return h(null, t)
            }, l.allocUnsafeSlow = function(t) {
                return h(null, t)
            }, l.isBuffer = function(t) {
                return !(null == t || !t._isBuffer)
            }, l.compare = function(t, e) {
                if (!l.isBuffer(t) || !l.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                if (t === e) return 0;
                for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i)
                    if (t[i] !== e[i]) {
                        r = t[i], n = e[i];
                        break
                    }
                return r < n ? -1 : n < r ? 1 : 0
            }, l.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, l.concat = function(t, e) {
                if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return l.alloc(0);
                var r;
                if (void 0 === e)
                    for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
                var n = l.allocUnsafe(e),
                    i = 0;
                for (r = 0; r < t.length; ++r) {
                    var s = t[r];
                    if (!l.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                    s.copy(n, i), i += s.length
                }
                return n
            }, l.byteLength = p, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
                var t = this.length;
                if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < t; e += 2) g(this, e, e + 1);
                return this
            }, l.prototype.swap32 = function() {
                var t = this.length;
                if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < t; e += 4) g(this, e, e + 3), g(this, e + 1, e + 2);
                return this
            }, l.prototype.swap64 = function() {
                var t = this.length;
                if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < t; e += 8) g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);
                return this
            }, l.prototype.toString = function() {
                var t = 0 | this.length;
                return 0 === t ? "" : 0 === arguments.length ? k(this, 0, t) : m.apply(this, arguments)
            }, l.prototype.equals = function(t) {
                if (!l.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === l.compare(this, t)
            }, l.prototype.inspect = function() {
                var t = "",
                    r = e.h2;
                return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">"
            }, l.prototype.compare = function(t, e, r, n, i) {
                if (!l.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                if (n >= i && e >= r) return 0;
                if (n >= i) return -1;
                if (e >= r) return 1;
                if (this === t) return 0;
                for (var o = (i >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (e >>>= 0), a = Math.min(o, s), u = this.slice(n, i), c = t.slice(e, r), h = 0; h < a; ++h)
                    if (u[h] !== c[h]) {
                        o = u[h], s = c[h];
                        break
                    }
                return o < s ? -1 : s < o ? 1 : 0
            }, l.prototype.includes = function(t, e, r) {
                return -1 !== this.indexOf(t, e, r)
            }, l.prototype.indexOf = function(t, e, r) {
                return v(this, t, e, r, !0)
            }, l.prototype.lastIndexOf = function(t, e, r) {
                return v(this, t, e, r, !1)
            }, l.prototype.write = function(t, e, r, n) {
                if (void 0 === e) n = "utf8", r = this.length, e = 0;
                else if (void 0 === r && "string" === typeof e) n = e, r = this.length, e = 0;
                else {
                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                var i = this.length - e;
                if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var o = !1;;) switch (n) {
                    case "hex":
                        return b(this, t, e, r);
                    case "utf8":
                    case "utf-8":
                        return w(this, t, e, r);
                    case "ascii":
                        return x(this, t, e, r);
                    case "latin1":
                    case "binary":
                        return S(this, t, e, r);
                    case "base64":
                        return T(this, t, e, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return _(this, t, e, r);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), o = !0
                }
            }, l.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var A = 4096;

            function R(t, e, r) {
                var n = "";
                r = Math.min(t.length, r);
                for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
                return n
            }

            function C(t, e, r) {
                var n = "";
                r = Math.min(t.length, r);
                for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                return n
            }

            function O(t, e, r) {
                var n = t.length;
                (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                for (var i = "", o = e; o < r; ++o) i += V(t[o]);
                return i
            }

            function U(t, e, r) {
                for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                return i
            }

            function P(t, e, r) {
                if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
                if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function D(t, e, r, n, i, o) {
                if (!l.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
                if (r + n > t.length) throw new RangeError("Index out of range")
            }

            function M(t, e, r, n) {
                e < 0 && (e = 65535 + e + 1);
                for (var i = 0, o = Math.min(t.length - r, 2); i < o; ++i) t[r + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
            }

            function F(t, e, r, n) {
                e < 0 && (e = 4294967295 + e + 1);
                for (var i = 0, o = Math.min(t.length - r, 4); i < o; ++i) t[r + i] = e >>> 8 * (n ? i : 3 - i) & 255
            }

            function B(t, e, r, n, i, o) {
                if (r + n > t.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function L(t, e, r, n, o) {
                return o || B(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4
            }

            function j(t, e, r, n, o) {
                return o || B(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8
            }
            l.prototype.slice = function(t, e) {
                var r, n = this.length;
                if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t), l.TYPED_ARRAY_SUPPORT)(r = this.subarray(t, e)).__proto__ = l.prototype;
                else {
                    var i = e - t;
                    r = new l(i, void 0);
                    for (var o = 0; o < i; ++o) r[o] = this[o + t]
                }
                return r
            }, l.prototype.readUIntLE = function(t, e, r) {
                t |= 0, e |= 0, r || P(t, e, this.length);
                for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
                return n
            }, l.prototype.readUIntBE = function(t, e, r) {
                t |= 0, e |= 0, r || P(t, e, this.length);
                for (var n = this[t + --e], i = 1; e > 0 && (i *= 256);) n += this[t + --e] * i;
                return n
            }, l.prototype.readUInt8 = function(t, e) {
                return e || P(t, 1, this.length), this[t]
            }, l.prototype.readUInt16LE = function(t, e) {
                return e || P(t, 2, this.length), this[t] | this[t + 1] << 8
            }, l.prototype.readUInt16BE = function(t, e) {
                return e || P(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, l.prototype.readUInt32LE = function(t, e) {
                return e || P(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, l.prototype.readUInt32BE = function(t, e) {
                return e || P(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, l.prototype.readIntLE = function(t, e, r) {
                t |= 0, e |= 0, r || P(t, e, this.length);
                for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
                return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
            }, l.prototype.readIntBE = function(t, e, r) {
                t |= 0, e |= 0, r || P(t, e, this.length);
                for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) o += this[t + --n] * i;
                return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
            }, l.prototype.readInt8 = function(t, e) {
                return e || P(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }, l.prototype.readInt16LE = function(t, e) {
                e || P(t, 2, this.length);
                var r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, l.prototype.readInt16BE = function(t, e) {
                e || P(t, 2, this.length);
                var r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, l.prototype.readInt32LE = function(t, e) {
                return e || P(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, l.prototype.readInt32BE = function(t, e) {
                return e || P(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, l.prototype.readFloatLE = function(t, e) {
                return e || P(t, 4, this.length), i.read(this, t, !0, 23, 4)
            }, l.prototype.readFloatBE = function(t, e) {
                return e || P(t, 4, this.length), i.read(this, t, !1, 23, 4)
            }, l.prototype.readDoubleLE = function(t, e) {
                return e || P(t, 8, this.length), i.read(this, t, !0, 52, 8)
            }, l.prototype.readDoubleBE = function(t, e) {
                return e || P(t, 8, this.length), i.read(this, t, !1, 52, 8)
            }, l.prototype.writeUIntLE = function(t, e, r, n) {
                (t = +t, e |= 0, r |= 0, n) || D(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var i = 1,
                    o = 0;
                for (this[e] = 255 & t; ++o < r && (i *= 256);) this[e + o] = t / i & 255;
                return e + r
            }, l.prototype.writeUIntBE = function(t, e, r, n) {
                (t = +t, e |= 0, r |= 0, n) || D(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var i = r - 1,
                    o = 1;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
                return e + r
            }, l.prototype.writeUInt8 = function(t, e, r) {
                return t = +t, e |= 0, r || D(this, t, e, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
            }, l.prototype.writeUInt16LE = function(t, e, r) {
                return t = +t, e |= 0, r || D(this, t, e, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : M(this, t, e, !0), e + 2
            }, l.prototype.writeUInt16BE = function(t, e, r) {
                return t = +t, e |= 0, r || D(this, t, e, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : M(this, t, e, !1), e + 2
            }, l.prototype.writeUInt32LE = function(t, e, r) {
                return t = +t, e |= 0, r || D(this, t, e, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : F(this, t, e, !0), e + 4
            }, l.prototype.writeUInt32BE = function(t, e, r) {
                return t = +t, e |= 0, r || D(this, t, e, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : F(this, t, e, !1), e + 4
            }, l.prototype.writeIntLE = function(t, e, r, n) {
                if (t = +t, e |= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    D(this, t, e, r, i - 1, -i)
                }
                var o = 0,
                    s = 1,
                    a = 0;
                for (this[e] = 255 & t; ++o < r && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
                return e + r
            }, l.prototype.writeIntBE = function(t, e, r, n) {
                if (t = +t, e |= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    D(this, t, e, r, i - 1, -i)
                }
                var o = r - 1,
                    s = 1,
                    a = 0;
                for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
                return e + r
            }, l.prototype.writeInt8 = function(t, e, r) {
                return t = +t, e |= 0, r || D(this, t, e, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
            }, l.prototype.writeInt16LE = function(t, e, r) {
                return t = +t, e |= 0, r || D(this, t, e, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : M(this, t, e, !0), e + 2
            }, l.prototype.writeInt16BE = function(t, e, r) {
                return t = +t, e |= 0, r || D(this, t, e, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : M(this, t, e, !1), e + 2
            }, l.prototype.writeInt32LE = function(t, e, r) {
                return t = +t, e |= 0, r || D(this, t, e, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : F(this, t, e, !0), e + 4
            }, l.prototype.writeInt32BE = function(t, e, r) {
                return t = +t, e |= 0, r || D(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : F(this, t, e, !1), e + 4
            }, l.prototype.writeFloatLE = function(t, e, r) {
                return L(this, t, e, !0, r)
            }, l.prototype.writeFloatBE = function(t, e, r) {
                return L(this, t, e, !1, r)
            }, l.prototype.writeDoubleLE = function(t, e, r) {
                return j(this, t, e, !0, r)
            }, l.prototype.writeDoubleBE = function(t, e, r) {
                return j(this, t, e, !1, r)
            }, l.prototype.copy = function(t, e, r, n) {
                if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                var i, o = n - r;
                if (this === t && r < e && e < n)
                    for (i = o - 1; i >= 0; --i) t[i + e] = this[i + r];
                else if (o < 1e3 || !l.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < o; ++i) t[i + e] = this[i + r];
                else Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e);
                return o
            }, l.prototype.fill = function(t, e, r, n) {
                if ("string" === typeof t) {
                    if ("string" === typeof e ? (n = e, e = 0, r = this.length) : "string" === typeof r && (n = r, r = this.length), 1 === t.length) {
                        var i = t.charCodeAt(0);
                        i < 256 && (t = i)
                    }
                    if (void 0 !== n && "string" !== typeof n) throw new TypeError("encoding must be a string");
                    if ("string" === typeof n && !l.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                } else "number" === typeof t && (t &= 255);
                if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                if (r <= e) return this;
                var o;
                if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" === typeof t)
                    for (o = e; o < r; ++o) this[o] = t;
                else {
                    var s = l.isBuffer(t) ? t : W(new l(t, n).toString()),
                        a = s.length;
                    for (o = 0; o < r - e; ++o) this[o + e] = s[o % a]
                }
                return this
            };
            var I = /[^+\/0-9A-Za-z-_]/g;

            function V(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16)
            }

            function W(t, e) {
                var r;
                e = e || 1 / 0;
                for (var n = t.length, i = null, o = [], s = 0; s < n; ++s) {
                    if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
                        if (!i) {
                            if (r > 56319) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === n) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            (e -= 3) > -1 && o.push(239, 191, 189), i = r;
                            continue
                        }
                        r = 65536 + (i - 55296 << 10 | r - 56320)
                    } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, r < 128) {
                        if ((e -= 1) < 0) break;
                        o.push(r)
                    } else if (r < 2048) {
                        if ((e -= 2) < 0) break;
                        o.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((e -= 3) < 0) break;
                        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return o
            }

            function z(t) {
                return n.toByteArray(function(t) {
                    if ((t = function(t) {
                            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                        }(t).replace(I, "")).length < 2) return "";
                    for (; t.length % 4 !== 0;) t += "=";
                    return t
                }(t))
            }

            function N(t, e, r, n) {
                for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
                return i
            }
        },
        7300: function(t) {
            var e = {}.toString;
            t.exports = Array.isArray || function(t) {
                return "[object Array]" == e.call(t)
            }
        },
        6230: function(t) {
            t.exports = "object" == typeof self ? self.FormData : window.FormData
        },
        645: function(t, e) {
            e.read = function(t, e, r, n, i) {
                var o, s, a = 8 * i - n - 1,
                    l = (1 << a) - 1,
                    u = l >> 1,
                    c = -7,
                    h = r ? i - 1 : 0,
                    d = r ? -1 : 1,
                    f = t[e + h];
                for (h += d, o = f & (1 << -c) - 1, f >>= -c, c += a; c > 0; o = 256 * o + t[e + h], h += d, c -= 8);
                for (s = o & (1 << -c) - 1, o >>= -c, c += n; c > 0; s = 256 * s + t[e + h], h += d, c -= 8);
                if (0 === o) o = 1 - u;
                else {
                    if (o === l) return s ? NaN : 1 / 0 * (f ? -1 : 1);
                    s += Math.pow(2, n), o -= u
                }
                return (f ? -1 : 1) * s * Math.pow(2, o - n)
            }, e.write = function(t, e, r, n, i, o) {
                var s, a, l, u = 8 * o - i - 1,
                    c = (1 << u) - 1,
                    h = c >> 1,
                    d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    f = n ? 0 : o - 1,
                    p = n ? 1 : -1,
                    m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = c) : (s = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), (e += s + h >= 1 ? d / l : d * Math.pow(2, 1 - h)) * l >= 2 && (s++, l /= 2), s + h >= c ? (a = 0, s = c) : s + h >= 1 ? (a = (e * l - 1) * Math.pow(2, i), s += h) : (a = e * Math.pow(2, h - 1) * Math.pow(2, i), s = 0)); i >= 8; t[r + f] = 255 & a, f += p, a /= 256, i -= 8);
                for (s = s << i | a, u += i; u > 0; t[r + f] = 255 & s, f += p, s /= 256, u -= 8);
                t[r + f - p] |= 128 * m
            }
        },
        6267: function(t, e, r) {
            "use strict";

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function o(t, e, r) {
                return e && i(t.prototype, e), r && i(t, r), t
            }

            function s(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function a(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(r), !0).forEach((function(e) {
                        s(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function u(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && h(t, e)
            }

            function c(t) {
                return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, c(t)
            }

            function h(t, e) {
                return h = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, h(t, e)
            }

            function d(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function f(t, e) {
                return !e || "object" !== typeof e && "function" !== typeof e ? d(t) : e
            }

            function p(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = c(t);
                    if (e) {
                        var i = c(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return f(this, r)
                }
            }

            function m(t, e, r) {
                return m = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(t, e, r) {
                    var n = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)););
                        return t
                    }(t, e);
                    if (n) {
                        var i = Object.getOwnPropertyDescriptor(n, e);
                        return i.get ? i.get.call(r) : i.value
                    }
                }, m(t, e, r || t)
            }

            function g(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var r = [],
                        n = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (r.push(s.value), !e || r.length !== e); n = !0);
                    } catch (l) {
                        i = !0, o = l
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return r
                }(t, e) || y(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(t) {
                return function(t) {
                    if (Array.isArray(t)) return b(t)
                }(t) || function(t) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || y(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y(t, e) {
                if (t) {
                    if ("string" === typeof t) return b(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? b(t, e) : void 0
                }
            }

            function b(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            r.r(e), r.d(e, {
                Native: function() {
                    return mt
                },
                Smooth: function() {
                    return pt
                }
            });
            var w = {
                    el: document,
                    name: "scroll",
                    offset: [0, 0],
                    repeat: !1,
                    smooth: !1,
                    initPosition: {
                        x: 0,
                        y: 0
                    },
                    direction: "vertical",
                    gestureDirection: "vertical",
                    reloadOnContextChange: !1,
                    lerp: .1,
                    class: "is-inview",
                    scrollbarContainer: !1,
                    scrollbarClass: "c-scrollbar",
                    scrollingClass: "has-scroll-scrolling",
                    draggingClass: "has-scroll-dragging",
                    smoothClass: "has-scroll-smooth",
                    initClass: "has-scroll-init",
                    getSpeed: !1,
                    getDirection: !1,
                    scrollFromAnywhere: !1,
                    multiplier: 1,
                    firefoxMultiplier: 50,
                    touchMultiplier: 2,
                    resetNativeScroll: !0,
                    tablet: {
                        smooth: !1,
                        direction: "vertical",
                        gestureDirection: "vertical",
                        breakpoint: 1024
                    },
                    smartphone: {
                        smooth: !1,
                        direction: "vertical",
                        gestureDirection: "vertical"
                    }
                },
                x = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        n(this, t), Object.assign(this, w, e), this.smartphone = w.smartphone, e.smartphone && Object.assign(this.smartphone, e.smartphone), this.tablet = w.tablet, e.tablet && Object.assign(this.tablet, e.tablet), this.namespace = "locomotive", this.html = document.documentElement, this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.windowMiddle = {
                            x: this.windowWidth / 2,
                            y: this.windowHeight / 2
                        }, this.els = {}, this.currentElements = {}, this.listeners = {}, this.hasScrollTicking = !1, this.hasCallEventSet = !1, this.checkScroll = this.checkScroll.bind(this), this.checkResize = this.checkResize.bind(this), this.checkEvent = this.checkEvent.bind(this), this.instance = {
                            scroll: {
                                x: 0,
                                y: 0
                            },
                            limit: {
                                x: this.html.offsetWidth,
                                y: this.html.offsetHeight
                            },
                            currentElements: this.currentElements
                        }, this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", this.isMobile && (this.direction = this[this.context].direction), "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y", this.getDirection && (this.instance.direction = null), this.getDirection && (this.instance.speed = 0), this.html.classList.add(this.initClass), window.addEventListener("resize", this.checkResize, !1)
                    }
                    return o(t, [{
                        key: "init",
                        value: function() {
                            this.initEvents()
                        }
                    }, {
                        key: "checkScroll",
                        value: function() {
                            this.dispatchScroll()
                        }
                    }, {
                        key: "checkResize",
                        value: function() {
                            var t = this;
                            this.resizeTick || (this.resizeTick = !0, requestAnimationFrame((function() {
                                t.resize(), t.resizeTick = !1
                            })))
                        }
                    }, {
                        key: "resize",
                        value: function() {}
                    }, {
                        key: "checkContext",
                        value: function() {
                            if (this.reloadOnContextChange) {
                                this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint, this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                                var t = this.context;
                                if (this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", t != this.context)("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload()
                            }
                        }
                    }, {
                        key: "initEvents",
                        value: function() {
                            var t = this;
                            this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")), this.setScrollTo = this.setScrollTo.bind(this), this.scrollToEls.forEach((function(e) {
                                e.addEventListener("click", t.setScrollTo, !1)
                            }))
                        }
                    }, {
                        key: "setScrollTo",
                        value: function(t) {
                            t.preventDefault(), this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
                                offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                            })
                        }
                    }, {
                        key: "addElements",
                        value: function() {}
                    }, {
                        key: "detectElements",
                        value: function(t) {
                            var e = this,
                                r = this.instance.scroll.y,
                                n = r + this.windowHeight,
                                i = this.instance.scroll.x,
                                o = i + this.windowWidth;
                            Object.entries(this.els).forEach((function(s) {
                                var a = g(s, 2),
                                    l = a[0],
                                    u = a[1];
                                if (!u || u.inView && !t || ("horizontal" === e.direction ? o >= u.left && i < u.right && e.setInView(u, l) : n >= u.top && r < u.bottom && e.setInView(u, l)), u && u.inView)
                                    if ("horizontal" === e.direction) {
                                        var c = u.right - u.left;
                                        u.progress = (e.instance.scroll.x - (u.left - e.windowWidth)) / (c + e.windowWidth), (o < u.left || i > u.right) && e.setOutOfView(u, l)
                                    } else {
                                        var h = u.bottom - u.top;
                                        u.progress = (e.instance.scroll.y - (u.top - e.windowHeight)) / (h + e.windowHeight), (n < u.top || r > u.bottom) && e.setOutOfView(u, l)
                                    }
                            })), this.hasScrollTicking = !1
                        }
                    }, {
                        key: "setInView",
                        value: function(t, e) {
                            this.els[e].inView = !0, t.el.classList.add(t.class), this.currentElements[e] = t, t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"), t.repeat || (this.els[e].call = !1))
                        }
                    }, {
                        key: "setOutOfView",
                        value: function(t, e) {
                            var r = this;
                            this.els[e].inView = !1, Object.keys(this.currentElements).forEach((function(t) {
                                t === e && delete r.currentElements[t]
                            })), t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"), t.repeat && t.el.classList.remove(t.class)
                        }
                    }, {
                        key: "dispatchCall",
                        value: function(t, e) {
                            this.callWay = e, this.callValue = t.call.split(",").map((function(t) {
                                return t.trim()
                            })), this.callObj = t, 1 == this.callValue.length && (this.callValue = this.callValue[0]);
                            var r = new Event(this.namespace + "call");
                            this.el.dispatchEvent(r)
                        }
                    }, {
                        key: "dispatchScroll",
                        value: function() {
                            var t = new Event(this.namespace + "scroll");
                            this.el.dispatchEvent(t)
                        }
                    }, {
                        key: "setEvents",
                        value: function(t, e) {
                            this.listeners[t] || (this.listeners[t] = []);
                            var r = this.listeners[t];
                            r.push(e), 1 === r.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), "call" === t && (this.hasCallEventSet = !0, this.detectElements(!0))
                        }
                    }, {
                        key: "unsetEvents",
                        value: function(t, e) {
                            if (this.listeners[t]) {
                                var r = this.listeners[t],
                                    n = r.indexOf(e);
                                n < 0 || (r.splice(n, 1), 0 === r.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
                            }
                        }
                    }, {
                        key: "checkEvent",
                        value: function(t) {
                            var e = this,
                                r = t.type.replace(this.namespace, ""),
                                n = this.listeners[r];
                            n && 0 !== n.length && n.forEach((function(t) {
                                switch (r) {
                                    case "scroll":
                                        return t(e.instance);
                                    case "call":
                                        return t(e.callValue, e.callWay, e.callObj);
                                    default:
                                        return t()
                                }
                            }))
                        }
                    }, {
                        key: "startScroll",
                        value: function() {}
                    }, {
                        key: "stopScroll",
                        value: function() {}
                    }, {
                        key: "setScroll",
                        value: function(t, e) {
                            this.instance.scroll = {
                                x: 0,
                                y: 0
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var t = this;
                            window.removeEventListener("resize", this.checkResize, !1), Object.keys(this.listeners).forEach((function(e) {
                                t.el.removeEventListener(t.namespace + e, t.checkEvent, !1)
                            })), this.listeners = {}, this.scrollToEls.forEach((function(e) {
                                e.removeEventListener("click", t.setScrollTo, !1)
                            })), this.html.classList.remove(this.initClass)
                        }
                    }]), t
                }(),
                S = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof r.g ? r.g : "undefined" !== typeof self ? self : {};

            function T(t, e) {
                return t(e = {
                    exports: {}
                }, e.exports), e.exports
            }
            var _ = T((function(t, e) {
                    t.exports = {
                        polyfill: function() {
                            var t = window,
                                e = document;
                            if (!("scrollBehavior" in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                                var r, n = t.HTMLElement || t.Element,
                                    i = {
                                        scroll: t.scroll || t.scrollTo,
                                        scrollBy: t.scrollBy,
                                        elementScroll: n.prototype.scroll || a,
                                        scrollIntoView: n.prototype.scrollIntoView
                                    },
                                    o = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                                    s = (r = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(r) ? 1 : 0);
                                t.scroll = t.scrollTo = function() {
                                    void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? p.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : i.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                                }, t.scrollBy = function() {
                                    void 0 !== arguments[0] && (l(arguments[0]) ? i.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                                }, n.prototype.scroll = n.prototype.scrollTo = function() {
                                    if (void 0 !== arguments[0])
                                        if (!0 !== l(arguments[0])) {
                                            var t = arguments[0].left,
                                                e = arguments[0].top;
                                            p.call(this, this, "undefined" === typeof t ? this.scrollLeft : ~~t, "undefined" === typeof e ? this.scrollTop : ~~e)
                                        } else {
                                            if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                            i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                        }
                                }, n.prototype.scrollBy = function() {
                                    void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? this.scroll({
                                        left: ~~arguments[0].left + this.scrollLeft,
                                        top: ~~arguments[0].top + this.scrollTop,
                                        behavior: arguments[0].behavior
                                    }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                                }, n.prototype.scrollIntoView = function() {
                                    if (!0 !== l(arguments[0])) {
                                        var r = d(this),
                                            n = r.getBoundingClientRect(),
                                            o = this.getBoundingClientRect();
                                        r !== e.body ? (p.call(this, r, r.scrollLeft + o.left - n.left, r.scrollTop + o.top - n.top), "fixed" !== t.getComputedStyle(r).position && t.scrollBy({
                                            left: n.left,
                                            top: n.top,
                                            behavior: "smooth"
                                        })) : t.scrollBy({
                                            left: o.left,
                                            top: o.top,
                                            behavior: "smooth"
                                        })
                                    } else i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                                }
                            }

                            function a(t, e) {
                                this.scrollLeft = t, this.scrollTop = e
                            }

                            function l(t) {
                                if (null === t || "object" !== typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                                if ("object" === typeof t && "smooth" === t.behavior) return !1;
                                throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                            }

                            function u(t, e) {
                                return "Y" === e ? t.clientHeight + s < t.scrollHeight : "X" === e ? t.clientWidth + s < t.scrollWidth : void 0
                            }

                            function c(e, r) {
                                var n = t.getComputedStyle(e, null)["overflow" + r];
                                return "auto" === n || "scroll" === n
                            }

                            function h(t) {
                                var e = u(t, "Y") && c(t, "Y"),
                                    r = u(t, "X") && c(t, "X");
                                return e || r
                            }

                            function d(t) {
                                for (; t !== e.body && !1 === h(t);) t = t.parentNode || t.host;
                                return t
                            }

                            function f(e) {
                                var r, n, i, s, a = (o() - e.startTime) / 468;
                                s = a = a > 1 ? 1 : a, r = .5 * (1 - Math.cos(Math.PI * s)), n = e.startX + (e.x - e.startX) * r, i = e.startY + (e.y - e.startY) * r, e.method.call(e.scrollable, n, i), n === e.x && i === e.y || t.requestAnimationFrame(f.bind(t, e))
                            }

                            function p(r, n, s) {
                                var l, u, c, h, d = o();
                                r === e.body ? (l = t, u = t.scrollX || t.pageXOffset, c = t.scrollY || t.pageYOffset, h = i.scroll) : (l = r, u = r.scrollLeft, c = r.scrollTop, h = a), f({
                                    scrollable: l,
                                    method: h,
                                    startTime: d,
                                    startX: u,
                                    startY: c,
                                    x: n,
                                    y: s
                                })
                            }
                        }
                    }
                })),
                E = (_.polyfill, function(t) {
                    u(r, t);
                    var e = p(r);

                    function r() {
                        var t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return n(this, r), (t = e.call(this, i)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0)), window.addEventListener("scroll", t.checkScroll, !1), void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = _, window.smoothscrollPolyfill.polyfill()), t
                    }
                    return o(r, [{
                        key: "init",
                        value: function() {
                            this.instance.scroll.y = window.pageYOffset, this.addElements(), this.detectElements(), m(c(r.prototype), "init", this).call(this)
                        }
                    }, {
                        key: "checkScroll",
                        value: function() {
                            var t = this;
                            m(c(r.prototype), "checkScroll", this).call(this), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.instance.scroll.y = window.pageYOffset, Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame((function() {
                                t.detectElements()
                            })), this.hasScrollTicking = !0))
                        }
                    }, {
                        key: "addDirection",
                        value: function() {
                            window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
                        }
                    }, {
                        key: "addSpeed",
                        value: function() {
                            window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            Object.entries(this.els).length && (this.windowHeight = window.innerHeight, this.updateElements())
                        }
                    }, {
                        key: "addElements",
                        value: function() {
                            var t = this;
                            this.els = {}, this.el.querySelectorAll("[data-" + this.name + "]").forEach((function(e, r) {
                                e.getBoundingClientRect();
                                var n, i, o, s = e.dataset[t.name + "Class"] || t.class,
                                    a = "string" === typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : r,
                                    l = "string" === typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                                    u = e.dataset[t.name + "Repeat"],
                                    c = e.dataset[t.name + "Call"],
                                    h = e.dataset[t.name + "Target"],
                                    d = (o = void 0 !== h ? document.querySelector("".concat(h)) : e).getBoundingClientRect();
                                n = d.top + t.instance.scroll.y, i = d.left + t.instance.scroll.x;
                                var f = n + o.offsetHeight,
                                    p = i + o.offsetWidth;
                                u = "false" != u && (void 0 != u || t.repeat);
                                var m = t.getRelativeOffset(l),
                                    g = {
                                        el: e,
                                        targetEl: o,
                                        id: a,
                                        class: s,
                                        top: n += m[0],
                                        bottom: f -= m[1],
                                        left: i,
                                        right: p,
                                        offset: l,
                                        progress: 0,
                                        repeat: u,
                                        inView: !1,
                                        call: c
                                    };
                                t.els[a] = g, e.classList.contains(s) && t.setInView(t.els[a], a)
                            }))
                        }
                    }, {
                        key: "updateElements",
                        value: function() {
                            var t = this;
                            Object.entries(this.els).forEach((function(e) {
                                var r = g(e, 2),
                                    n = r[0],
                                    i = r[1],
                                    o = i.targetEl.getBoundingClientRect().top + t.instance.scroll.y,
                                    s = o + i.targetEl.offsetHeight,
                                    a = t.getRelativeOffset(i.offset);
                                t.els[n].top = o + a[0], t.els[n].bottom = s - a[1]
                            })), this.hasScrollTicking = !1
                        }
                    }, {
                        key: "getRelativeOffset",
                        value: function(t) {
                            var e = [0, 0];
                            if (t)
                                for (var r = 0; r < t.length; r++) "string" == typeof t[r] ? t[r].includes("%") ? e[r] = parseInt(t[r].replace("%", "") * this.windowHeight / 100) : e[r] = parseInt(t[r]) : e[r] = t[r];
                            return e
                        }
                    }, {
                        key: "scrollTo",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = parseInt(e.offset) || 0,
                                n = !!e.callback && e.callback;
                            if ("string" === typeof t) {
                                if ("top" === t) t = this.html;
                                else if ("bottom" === t) t = this.html.offsetHeight - window.innerHeight;
                                else if (!(t = document.querySelector(t))) return
                            } else if ("number" === typeof t) t = parseInt(t);
                            else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
                            r = "number" !== typeof t ? t.getBoundingClientRect().top + r + this.instance.scroll.y : t + r;
                            var i = function() {
                                return parseInt(window.pageYOffset) === parseInt(r)
                            };
                            if (n) {
                                if (i()) return void n();
                                var o = function t() {
                                    i() && (window.removeEventListener("scroll", t), n())
                                };
                                window.addEventListener("scroll", o)
                            }
                            window.scrollTo({
                                top: r,
                                behavior: 0 === e.duration ? "auto" : "smooth"
                            })
                        }
                    }, {
                        key: "update",
                        value: function() {
                            this.addElements(), this.detectElements()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            m(c(r.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1)
                        }
                    }]), r
                }(x)),
                k = Object.getOwnPropertySymbols,
                A = Object.prototype.hasOwnProperty,
                R = Object.prototype.propertyIsEnumerable;

            function C(t) {
                if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }
            var O = function() {
                try {
                    if (!Object.assign) return !1;
                    var t = new String("abc");
                    if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                    for (var e = {}, r = 0; r < 10; r++) e["_" + String.fromCharCode(r)] = r;
                    if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
                            return e[t]
                        })).join("")) return !1;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(t) {
                        n[t] = t
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (i) {
                    return !1
                }
            }() ? Object.assign : function(t, e) {
                for (var r, n, i = C(t), o = 1; o < arguments.length; o++) {
                    for (var s in r = Object(arguments[o])) A.call(r, s) && (i[s] = r[s]);
                    if (k) {
                        n = k(r);
                        for (var a = 0; a < n.length; a++) R.call(r, n[a]) && (i[n[a]] = r[n[a]])
                    }
                }
                return i
            };

            function U() {}
            U.prototype = {
                on: function(t, e, r) {
                    var n = this.e || (this.e = {});
                    return (n[t] || (n[t] = [])).push({
                        fn: e,
                        ctx: r
                    }), this
                },
                once: function(t, e, r) {
                    var n = this;

                    function i() {
                        n.off(t, i), e.apply(r, arguments)
                    }
                    return i._ = e, this.on(t, i, r)
                },
                emit: function(t) {
                    for (var e = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, i = r.length; n < i; n++) r[n].fn.apply(r[n].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var r = this.e || (this.e = {}),
                        n = r[t],
                        i = [];
                    if (n && e)
                        for (var o = 0, s = n.length; o < s; o++) n[o].fn !== e && n[o].fn._ !== e && i.push(n[o]);
                    return i.length ? r[t] = i : delete r[t], this
                }
            };
            var P = U,
                D = T((function(t, e) {
                    (function() {
                        (null !== e ? e : this).Lethargy = function() {
                            function t(t, e, r, n) {
                                this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != r ? 1 + Math.abs(r) : 1.1, this.delay = null != n ? n : 150, this.lastUpDeltas = function() {
                                    var t, e, r;
                                    for (r = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) r.push(null);
                                    return r
                                }.call(this), this.lastDownDeltas = function() {
                                    var t, e, r;
                                    for (r = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) r.push(null);
                                    return r
                                }.call(this), this.deltasTimestamp = function() {
                                    var t, e, r;
                                    for (r = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) r.push(null);
                                    return r
                                }.call(this)
                            }
                            return t.prototype.check = function(t) {
                                var e;
                                return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
                            }, t.prototype.isInertia = function(t) {
                                var e, r, n, i, o, s, a;
                                return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (n = e.slice(0, this.stability), r = e.slice(this.stability, 2 * this.stability), a = n.reduce((function(t, e) {
                                    return t + e
                                })), o = r.reduce((function(t, e) {
                                    return t + e
                                })), s = a / n.length, i = o / r.length, Math.abs(s) < Math.abs(i * this.tolerance) && this.sensitivity < Math.abs(i) && t)
                            }, t.prototype.showLastUpDeltas = function() {
                                return this.lastUpDeltas
                            }, t.prototype.showLastDownDeltas = function() {
                                return this.lastDownDeltas
                            }, t
                        }()
                    }).call(S)
                })),
                M = {
                    hasWheelEvent: "onwheel" in document,
                    hasMouseWheelEvent: "onmousewheel" in document,
                    hasTouch: "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
                    hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                    hasPointer: !!window.navigator.msPointerEnabled,
                    hasKeyDown: "onkeydown" in document,
                    isFirefox: navigator.userAgent.indexOf("Firefox") > -1
                },
                F = Object.prototype.toString,
                B = Object.prototype.hasOwnProperty;

            function L(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }
            var j = D.Lethargy,
                I = "virtualscroll",
                V = H,
                W = 37,
                z = 38,
                N = 39,
                G = 40,
                q = 32;

            function H(t) {
                ! function(t) {
                    if (!t) return console.warn("bindAll requires at least one argument.");
                    var e = Array.prototype.slice.call(arguments, 1);
                    if (0 === e.length)
                        for (var r in t) B.call(t, r) && "function" == typeof t[r] && "[object Function]" == F.call(t[r]) && e.push(r);
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        t[i] = L(t[i], t)
                    }
                }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = O({
                    mouseMultiplier: 1,
                    touchMultiplier: 2,
                    firefoxMultiplier: 15,
                    keyStep: 120,
                    preventTouch: !1,
                    unpreventTouchClass: "vs-touchmove-allowed",
                    limitInertia: !1,
                    useKeyboard: !0,
                    useTouch: !0
                }, t), this.options.limitInertia && (this._lethargy = new j), this._emitter = new P, this._event = {
                    y: 0,
                    x: 0,
                    deltaX: 0,
                    deltaY: 0
                }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
                    passive: this.options.passive
                })
            }

            function Y(t, e, r) {
                return (1 - r) * t + r * e
            }

            function X(t) {
                var e = {};
                if (window.getComputedStyle) {
                    var r = getComputedStyle(t),
                        n = r.transform || r.webkitTransform || r.mozTransform,
                        i = n.match(/^matrix3d\((.+)\)$/);
                    return i ? (e.x = i ? parseFloat(i[1].split(", ")[12]) : 0, e.y = i ? parseFloat(i[1].split(", ")[13]) : 0) : (i = n.match(/^matrix\((.+)\)$/), e.x = i ? parseFloat(i[1].split(", ")[4]) : 0, e.y = i ? parseFloat(i[1].split(", ")[5]) : 0), e
                }
            }

            function $(t) {
                for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
                return e
            }
            H.prototype._notify = function(t) {
                var e = this._event;
                e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(I, {
                    x: e.x,
                    y: e.y,
                    deltaX: e.deltaX,
                    deltaY: e.deltaY,
                    originalEvent: t
                })
            }, H.prototype._onWheel = function(t) {
                var e = this.options;
                if (!this._lethargy || !1 !== this._lethargy.check(t)) {
                    var r = this._event;
                    r.deltaX = t.wheelDeltaX || -1 * t.deltaX, r.deltaY = t.wheelDeltaY || -1 * t.deltaY, M.isFirefox && 1 == t.deltaMode && (r.deltaX *= e.firefoxMultiplier, r.deltaY *= e.firefoxMultiplier), r.deltaX *= e.mouseMultiplier, r.deltaY *= e.mouseMultiplier, this._notify(t)
                }
            }, H.prototype._onMouseWheel = function(t) {
                if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
                    var e = this._event;
                    e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t)
                }
            }, H.prototype._onTouchStart = function(t) {
                var e = t.targetTouches ? t.targetTouches[0] : t;
                this.touchStartX = e.pageX, this.touchStartY = e.pageY
            }, H.prototype._onTouchMove = function(t) {
                var e = this.options;
                e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
                var r = this._event,
                    n = t.targetTouches ? t.targetTouches[0] : t;
                r.deltaX = (n.pageX - this.touchStartX) * e.touchMultiplier, r.deltaY = (n.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = n.pageX, this.touchStartY = n.pageY, this._notify(t)
            }, H.prototype._onKeyDown = function(t) {
                var e = this._event;
                e.deltaX = e.deltaY = 0;
                var r = window.innerHeight - 40;
                switch (t.keyCode) {
                    case W:
                    case z:
                        e.deltaY = this.options.keyStep;
                        break;
                    case N:
                    case G:
                        e.deltaY = -this.options.keyStep;
                        break;
                    case t.shiftKey:
                        e.deltaY = r;
                        break;
                    case q:
                        e.deltaY = -r;
                        break;
                    default:
                        return
                }
                this._notify(t)
            }, H.prototype._bind = function() {
                M.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), M.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), M.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), M.hasPointer && M.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), M.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
            }, H.prototype._unbind = function() {
                M.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), M.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), M.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), M.hasPointer && M.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), M.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
            }, H.prototype.on = function(t, e) {
                this._emitter.on(I, t, e);
                var r = this._emitter.e;
                r && r[I] && 1 === r[I].length && this._bind()
            }, H.prototype.off = function(t, e) {
                this._emitter.off(I, t, e);
                var r = this._emitter.e;
                (!r[I] || r[I].length <= 0) && this._unbind()
            }, H.prototype.reset = function() {
                var t = this._event;
                t.x = 0, t.y = 0
            }, H.prototype.destroy = function() {
                this._emitter.off(), this._unbind()
            };
            var K = .1,
                Z = "function" === typeof Float32Array;

            function Q(t, e) {
                return 1 - 3 * e + 3 * t
            }

            function J(t, e) {
                return 3 * e - 6 * t
            }

            function tt(t) {
                return 3 * t
            }

            function et(t, e, r) {
                return ((Q(e, r) * t + J(e, r)) * t + tt(e)) * t
            }

            function rt(t, e, r) {
                return 3 * Q(e, r) * t * t + 2 * J(e, r) * t + tt(e)
            }

            function nt(t) {
                return t
            }
            var it = function(t, e, r, n) {
                    if (!(0 <= t && t <= 1 && 0 <= r && r <= 1)) throw new Error("bezier x values must be in [0, 1] range");
                    if (t === e && r === n) return nt;
                    for (var i = Z ? new Float32Array(11) : new Array(11), o = 0; o < 11; ++o) i[o] = et(o * K, t, r);

                    function s(e) {
                        for (var n = 0, o = 1; 10 !== o && i[o] <= e; ++o) n += K;
                        --o;
                        var s = n + (e - i[o]) / (i[o + 1] - i[o]) * K,
                            a = rt(s, t, r);
                        return a >= .001 ? function(t, e, r, n) {
                            for (var i = 0; i < 4; ++i) {
                                var o = rt(e, r, n);
                                if (0 === o) return e;
                                e -= (et(e, r, n) - t) / o
                            }
                            return e
                        }(e, s, t, r) : 0 === a ? s : function(t, e, r, n, i) {
                            var o, s, a = 0;
                            do {
                                (o = et(s = e + (r - e) / 2, n, i) - t) > 0 ? r = s : e = s
                            } while (Math.abs(o) > 1e-7 && ++a < 10);
                            return s
                        }(e, n, n + K, t, r)
                    }
                    return function(t) {
                        return 0 === t ? 0 : 1 === t ? 1 : et(s(t), e, n)
                    }
                },
                ot = 38,
                st = 40,
                at = 32,
                lt = 9,
                ut = 33,
                ct = 34,
                ht = 36,
                dt = 35,
                ft = function(t) {
                    u(r, t);
                    var e = p(r);

                    function r() {
                        var t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return n(this, r), history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), (t = e.call(this, i)).inertia && (t.lerp = .1 * t.inertia), t.isScrolling = !1, t.isDraggingScrollbar = !1, t.isTicking = !1, t.hasScrollTicking = !1, t.parallaxElements = {}, t.stop = !1, t.scrollbarContainer = i.scrollbarContainer, t.checkKey = t.checkKey.bind(d(t)), window.addEventListener("keydown", t.checkKey, !1), t
                    }
                    return o(r, [{
                        key: "init",
                        value: function() {
                            var t = this;
                            this.html.classList.add(this.smoothClass), this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction), this.instance = l({
                                delta: {
                                    x: this.initPosition.x,
                                    y: this.initPosition.y
                                },
                                scroll: {
                                    x: this.initPosition.x,
                                    y: this.initPosition.y
                                }
                            }, this.instance), this.vs = new V({
                                el: this.scrollFromAnywhere ? document : this.el,
                                mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4,
                                firefoxMultiplier: this.firefoxMultiplier,
                                touchMultiplier: this.touchMultiplier,
                                useKeyboard: !1,
                                passive: !0
                            }), this.vs.on((function(e) {
                                t.stop || t.isDraggingScrollbar || requestAnimationFrame((function() {
                                    t.updateDelta(e), t.isScrolling || t.startScrolling()
                                }))
                            })), this.setScrollLimit(), this.initScrollBar(), this.addSections(), this.addElements(), this.checkScroll(!0), this.transformElements(!0, !0), m(c(r.prototype), "init", this).call(this)
                        }
                    }, {
                        key: "setScrollLimit",
                        value: function() {
                            if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight, "horizontal" === this.direction) {
                                for (var t = 0, e = this.el.children, r = 0; r < e.length; r++) t += e[r].offsetWidth;
                                this.instance.limit.x = t - this.windowWidth
                            }
                        }
                    }, {
                        key: "startScrolling",
                        value: function() {
                            this.startScrollTs = Date.now(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
                        }
                    }, {
                        key: "stopScrolling",
                        value: function() {
                            cancelAnimationFrame(this.checkScrollRaf), this.startScrollTs = void 0, this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), this.scrollToRaf = null), this.isScrolling = !1, this.instance.scroll.y = Math.round(this.instance.scroll.y), this.html.classList.remove(this.scrollingClass)
                        }
                    }, {
                        key: "checkKey",
                        value: function(t) {
                            var e = this;
                            if (this.stop) t.keyCode == lt && requestAnimationFrame((function() {
                                e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0
                            }));
                            else {
                                switch (t.keyCode) {
                                    case lt:
                                        requestAnimationFrame((function() {
                                            e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0, e.scrollTo(document.activeElement, {
                                                offset: -window.innerHeight / 2
                                            })
                                        }));
                                        break;
                                    case ot:
                                        this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] -= 240);
                                        break;
                                    case st:
                                        this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] += 240);
                                        break;
                                    case ut:
                                        this.instance.delta[this.directionAxis] -= window.innerHeight;
                                        break;
                                    case ct:
                                        this.instance.delta[this.directionAxis] += window.innerHeight;
                                        break;
                                    case ht:
                                        this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                                        break;
                                    case dt:
                                        this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                                        break;
                                    case at:
                                        this.isActiveElementScrollSensitive() && (t.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
                                        break;
                                    default:
                                        return
                                }
                                this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]), this.stopScrolling(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
                            }
                        }
                    }, {
                        key: "isActiveElementScrollSensitive",
                        value: function() {
                            return !(document.activeElement instanceof HTMLInputElement) && !(document.activeElement instanceof HTMLTextAreaElement) && !(document.activeElement instanceof HTMLButtonElement) && !(document.activeElement instanceof HTMLSelectElement)
                        }
                    }, {
                        key: "checkScroll",
                        value: function() {
                            var t = this,
                                e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (e || this.isScrolling || this.isDraggingScrollbar) {
                                this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame((function() {
                                    return t.checkScroll()
                                })), this.hasScrollTicking = !0), this.updateScroll();
                                var n = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]),
                                    i = Date.now() - this.startScrollTs;
                                if (!this.animatingScroll && i > 100 && (n < .5 && 0 != this.instance.delta[this.directionAxis] || n < .5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(), Object.entries(this.sections).forEach((function(r) {
                                        var n = g(r, 2),
                                            i = (n[0], n[1]);
                                        i.persistent || t.instance.scroll[t.directionAxis] > i.offset[t.directionAxis] && t.instance.scroll[t.directionAxis] < i.limit[t.directionAxis] ? ("horizontal" === t.direction ? t.transform(i.el, -t.instance.scroll[t.directionAxis], 0) : t.transform(i.el, 0, -t.instance.scroll[t.directionAxis]), i.inView || (i.inView = !0, i.el.style.opacity = 1, i.el.style.pointerEvents = "all", i.el.setAttribute("data-".concat(t.name, "-section-inview"), ""))) : ((i.inView || e) && (i.inView = !1, i.el.style.opacity = 0, i.el.style.pointerEvents = "none", i.el.removeAttribute("data-".concat(t.name, "-section-inview"))), t.transform(i.el, 0, 0))
                                    })), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.detectElements(), this.transformElements(), this.hasScrollbar) {
                                    var o = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
                                    "horizontal" === this.direction ? this.transform(this.scrollbarThumb, o, 0) : this.transform(this.scrollbarThumb, 0, o)
                                }
                                m(c(r.prototype), "checkScroll", this).call(this), this.hasScrollTicking = !1
                            }
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.checkContext(), this.windowMiddle = {
                                x: this.windowWidth / 2,
                                y: this.windowHeight / 2
                            }, this.update()
                        }
                    }, {
                        key: "updateDelta",
                        value: function(t) {
                            var e, r = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
                            e = "both" === r ? t.deltaX + t.deltaY : "vertical" === r ? t.deltaY : "horizontal" === r ? t.deltaX : t.deltaY, this.instance.delta[this.directionAxis] -= e * this.multiplier, this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis])
                        }
                    }, {
                        key: "updateScroll",
                        value: function(t) {
                            this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = Y(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis])
                        }
                    }, {
                        key: "addDirection",
                        value: function() {
                            this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"), this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left")
                        }
                    }, {
                        key: "addSpeed",
                        value: function() {
                            this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
                        }
                    }, {
                        key: "initScrollBar",
                        value: function() {
                            if (this.scrollbar = document.createElement("span"), this.scrollbarThumb = document.createElement("span"), this.scrollbar.classList.add("".concat(this.scrollbarClass)), this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")), this.scrollbar.append(this.scrollbarThumb), this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar), this.getScrollBar = this.getScrollBar.bind(this), this.releaseScrollBar = this.releaseScrollBar.bind(this), this.moveScrollBar = this.moveScrollBar.bind(this), this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar), window.addEventListener("mouseup", this.releaseScrollBar), window.addEventListener("mousemove", this.moveScrollBar), this.hasScrollbar = !1, "horizontal" == this.direction) {
                                if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
                            } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                            this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                                x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                                y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                            }
                        }
                    }, {
                        key: "reinitScrollBar",
                        value: function() {
                            if (this.hasScrollbar = !1, "horizontal" == this.direction) {
                                if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
                            } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                            this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                                x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                                y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                            }
                        }
                    }, {
                        key: "destroyScrollBar",
                        value: function() {
                            this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar), window.removeEventListener("mouseup", this.releaseScrollBar), window.removeEventListener("mousemove", this.moveScrollBar), this.scrollbar.remove()
                        }
                    }, {
                        key: "getScrollBar",
                        value: function(t) {
                            this.isDraggingScrollbar = !0, this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass)
                        }
                    }, {
                        key: "releaseScrollBar",
                        value: function(t) {
                            this.isDraggingScrollbar = !1, this.isScrolling && this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass)
                        }
                    }, {
                        key: "moveScrollBar",
                        value: function(t) {
                            var e = this;
                            this.isDraggingScrollbar && requestAnimationFrame((function() {
                                var r = 100 * (t.clientX - e.scrollbarBCR.left) / e.scrollbarWidth * e.instance.limit.x / 100,
                                    n = 100 * (t.clientY - e.scrollbarBCR.top) / e.scrollbarHeight * e.instance.limit.y / 100;
                                n > 0 && n < e.instance.limit.y && (e.instance.delta.y = n), r > 0 && r < e.instance.limit.x && (e.instance.delta.x = r)
                            }))
                        }
                    }, {
                        key: "addElements",
                        value: function() {
                            var t = this;
                            this.els = {}, this.parallaxElements = {}, this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach((function(e, r) {
                                var n, i, o, s = $(e),
                                    a = Object.entries(t.sections).map((function(t) {
                                        var e = g(t, 2);
                                        e[0];
                                        return e[1]
                                    })).find((function(t) {
                                        return s.includes(t.el)
                                    })),
                                    l = e.dataset[t.name + "Class"] || t.class,
                                    u = "string" === typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "el" + r,
                                    c = e.dataset[t.name + "Repeat"],
                                    h = e.dataset[t.name + "Call"],
                                    d = e.dataset[t.name + "Position"],
                                    f = e.dataset[t.name + "Delay"],
                                    p = e.dataset[t.name + "Direction"],
                                    m = "string" === typeof e.dataset[t.name + "Sticky"],
                                    v = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10,
                                    y = "string" === typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                                    b = e.dataset[t.name + "Target"],
                                    w = (o = void 0 !== b ? document.querySelector("".concat(b)) : e).getBoundingClientRect();
                                null === a || a.inView ? (n = w.top + t.instance.scroll.y - X(o).y, i = w.left + t.instance.scroll.x - X(o).x) : (n = w.top - X(a.el).y - X(o).y, i = w.left - X(a.el).x - X(o).x);
                                var x = n + o.offsetHeight,
                                    S = i + o.offsetWidth,
                                    T = {
                                        x: (S - i) / 2 + i,
                                        y: (x - n) / 2 + n
                                    };
                                if (m) {
                                    var _ = e.getBoundingClientRect(),
                                        E = _.top,
                                        k = _.left,
                                        A = {
                                            x: k - i,
                                            y: E - n
                                        };
                                    n += window.innerHeight, i += window.innerWidth, x = E + o.offsetHeight - e.offsetHeight - A[t.directionAxis], T = {
                                        x: ((S = k + o.offsetWidth - e.offsetWidth - A[t.directionAxis]) - i) / 2 + i,
                                        y: (x - n) / 2 + n
                                    }
                                }
                                c = "false" != c && (void 0 != c || t.repeat);
                                var R = [0, 0];
                                if (y)
                                    if ("horizontal" === t.direction) {
                                        for (var C = 0; C < y.length; C++) "string" == typeof y[C] ? y[C].includes("%") ? R[C] = parseInt(y[C].replace("%", "") * t.windowWidth / 100) : R[C] = parseInt(y[C]) : R[C] = y[C];
                                        i += R[0], S -= R[1]
                                    } else {
                                        for (C = 0; C < y.length; C++) "string" == typeof y[C] ? y[C].includes("%") ? R[C] = parseInt(y[C].replace("%", "") * t.windowHeight / 100) : R[C] = parseInt(y[C]) : R[C] = y[C];
                                        n += R[0], x -= R[1]
                                    }
                                var O = {
                                    el: e,
                                    id: u,
                                    class: l,
                                    section: a,
                                    top: n,
                                    middle: T,
                                    bottom: x,
                                    left: i,
                                    right: S,
                                    offset: y,
                                    progress: 0,
                                    repeat: c,
                                    inView: !1,
                                    call: h,
                                    speed: v,
                                    delay: f,
                                    position: d,
                                    target: o,
                                    direction: p,
                                    sticky: m
                                };
                                t.els[u] = O, e.classList.contains(l) && t.setInView(t.els[u], u), (!1 !== v || m) && (t.parallaxElements[u] = O)
                            }))
                        }
                    }, {
                        key: "addSections",
                        value: function() {
                            var t = this;
                            this.sections = {};
                            var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                            0 === e.length && (e = [this.el]), e.forEach((function(e, r) {
                                var n = "string" === typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "section" + r,
                                    i = e.getBoundingClientRect(),
                                    o = {
                                        x: i.left - 1.5 * window.innerWidth - X(e).x,
                                        y: i.top - 1.5 * window.innerHeight - X(e).y
                                    },
                                    s = {
                                        x: o.x + i.width + 2 * window.innerWidth,
                                        y: o.y + i.height + 2 * window.innerHeight
                                    },
                                    a = "string" === typeof e.dataset[t.name + "Persistent"];
                                e.setAttribute("data-scroll-section-id", n);
                                var l = {
                                    el: e,
                                    offset: o,
                                    limit: s,
                                    inView: !1,
                                    persistent: a,
                                    id: n
                                };
                                t.sections[n] = l
                            }))
                        }
                    }, {
                        key: "transform",
                        value: function(t, e, r, n) {
                            var i;
                            if (n) {
                                var o = X(t),
                                    s = Y(o.x, e, n),
                                    a = Y(o.y, r, n);
                                i = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(s, ",").concat(a, ",0,1)")
                            } else i = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(r, ",0,1)");
                            t.style.webkitTransform = i, t.style.msTransform = i, t.style.transform = i
                        }
                    }, {
                        key: "transformElements",
                        value: function(t) {
                            var e = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = this.instance.scroll.x + this.windowWidth,
                                i = this.instance.scroll.y + this.windowHeight,
                                o = {
                                    x: this.instance.scroll.x + this.windowMiddle.x,
                                    y: this.instance.scroll.y + this.windowMiddle.y
                                };
                            Object.entries(this.parallaxElements).forEach((function(s) {
                                var a = g(s, 2),
                                    l = (a[0], a[1]),
                                    u = !1;
                                if (t && (u = 0), l.inView || r) switch (l.position) {
                                    case "top":
                                    case "left":
                                        u = e.instance.scroll[e.directionAxis] * -l.speed;
                                        break;
                                    case "elementTop":
                                        u = (i - l.top) * -l.speed;
                                        break;
                                    case "bottom":
                                        u = (e.instance.limit[e.directionAxis] - i + e.windowHeight) * l.speed;
                                        break;
                                    case "elementLeft":
                                        u = (n - l.left) * -l.speed;
                                        break;
                                    case "right":
                                        u = (e.instance.limit[e.directionAxis] - n + e.windowHeight) * l.speed;
                                        break;
                                    default:
                                        u = (o[e.directionAxis] - l.middle[e.directionAxis]) * -l.speed
                                }
                                l.sticky && (u = l.inView ? "horizontal" === e.direction ? e.instance.scroll.x - l.left + window.innerWidth : e.instance.scroll.y - l.top + window.innerHeight : "horizontal" === e.direction ? e.instance.scroll.x < l.left - window.innerWidth && e.instance.scroll.x < l.left - window.innerWidth / 2 ? 0 : e.instance.scroll.x > l.right && e.instance.scroll.x > l.right + 100 && l.right - l.left + window.innerWidth : e.instance.scroll.y < l.top - window.innerHeight && e.instance.scroll.y < l.top - window.innerHeight / 2 ? 0 : e.instance.scroll.y > l.bottom && e.instance.scroll.y > l.bottom + 100 && l.bottom - l.top + window.innerHeight), !1 !== u && ("horizontal" === l.direction || "horizontal" === e.direction && "vertical" !== l.direction ? e.transform(l.el, u, 0, !t && l.delay) : e.transform(l.el, 0, u, !t && l.delay))
                            }))
                        }
                    }, {
                        key: "scrollTo",
                        value: function(t) {
                            var e = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = parseInt(r.offset) || 0,
                                i = isNaN(parseInt(r.duration)) ? 1e3 : parseInt(r.duration),
                                o = r.easing || [.25, 0, .35, 1],
                                s = !!r.disableLerp,
                                a = !!r.callback && r.callback;
                            if (o = it.apply(void 0, v(o)), "string" === typeof t) {
                                if ("top" === t) t = 0;
                                else if ("bottom" === t) t = this.instance.limit.y;
                                else if ("left" === t) t = 0;
                                else if ("right" === t) t = this.instance.limit.x;
                                else if (!(t = document.querySelector(t))) return
                            } else if ("number" === typeof t) t = parseInt(t);
                            else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
                            if ("number" !== typeof t) {
                                var l = $(t).includes(this.el);
                                if (!l) return;
                                var u = t.getBoundingClientRect(),
                                    c = u.top,
                                    h = u.left,
                                    d = $(t),
                                    f = d.find((function(t) {
                                        return Object.entries(e.sections).map((function(t) {
                                            var e = g(t, 2);
                                            e[0];
                                            return e[1]
                                        })).find((function(e) {
                                            return e.el == t
                                        }))
                                    })),
                                    p = 0;
                                p = f ? X(f)[this.directionAxis] : -this.instance.scroll[this.directionAxis], n = "horizontal" === this.direction ? h + n - p : c + n - p
                            } else n = t + n;
                            var m = parseFloat(this.instance.delta[this.directionAxis]),
                                y = Math.max(0, Math.min(n, this.instance.limit[this.directionAxis])),
                                b = y - m,
                                w = function(t) {
                                    s ? "horizontal" === e.direction ? e.setScroll(m + b * t, e.instance.delta.y) : e.setScroll(e.instance.delta.x, m + b * t) : e.instance.delta[e.directionAxis] = m + b * t
                                };
                            this.animatingScroll = !0, this.stopScrolling(), this.startScrolling();
                            var x = Date.now(),
                                S = function t() {
                                    var r = (Date.now() - x) / i;
                                    r > 1 ? (w(1), e.animatingScroll = !1, 0 == i && e.update(), a && a()) : (e.scrollToRaf = requestAnimationFrame(t), w(o(r)))
                                };
                            S()
                        }
                    }, {
                        key: "update",
                        value: function() {
                            this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0)
                        }
                    }, {
                        key: "startScroll",
                        value: function() {
                            this.stop = !1
                        }
                    }, {
                        key: "stopScroll",
                        value: function() {
                            this.stop = !0
                        }
                    }, {
                        key: "setScroll",
                        value: function(t, e) {
                            this.instance = l(l({}, this.instance), {}, {
                                scroll: {
                                    x: t,
                                    y: e
                                },
                                delta: {
                                    x: t,
                                    y: e
                                },
                                speed: 0
                            })
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            m(c(r.prototype), "destroy", this).call(this), this.stopScrolling(), this.html.classList.remove(this.smoothClass), this.vs.destroy(), this.destroyScrollBar(), window.removeEventListener("keydown", this.checkKey, !1)
                        }
                    }]), r
                }(x),
                pt = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        n(this, t), this.options = e, Object.assign(this, w, e), this.smartphone = w.smartphone, e.smartphone && Object.assign(this.smartphone, e.smartphone), this.tablet = w.tablet, e.tablet && Object.assign(this.tablet, e.tablet), this.smooth || "horizontal" != this.direction || console.warn("\ud83d\udea8 `smooth:false` & `horizontal` direction are not yet compatible"), this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("\ud83d\udea8 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"), this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("\ud83d\udea8 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"), this.init()
                    }
                    return o(t, [{
                        key: "init",
                        value: function() {
                            if (this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint, this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint, this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new ft(this.options) : this.scroll = new E(this.options), this.scroll.init(), window.location.hash) {
                                var t = window.location.hash.slice(1, window.location.hash.length),
                                    e = document.getElementById(t);
                                e && this.scroll.scrollTo(e)
                            }
                        }
                    }, {
                        key: "update",
                        value: function() {
                            this.scroll.update()
                        }
                    }, {
                        key: "start",
                        value: function() {
                            this.scroll.startScroll()
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.scroll.stopScroll()
                        }
                    }, {
                        key: "scrollTo",
                        value: function(t, e) {
                            this.scroll.scrollTo(t, e)
                        }
                    }, {
                        key: "setScroll",
                        value: function(t, e) {
                            this.scroll.setScroll(t, e)
                        }
                    }, {
                        key: "on",
                        value: function(t, e) {
                            this.scroll.setEvents(t, e)
                        }
                    }, {
                        key: "off",
                        value: function(t, e) {
                            this.scroll.unsetEvents(t, e)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.scroll.destroy()
                        }
                    }]), t
                }(),
                mt = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        n(this, t), this.options = e, Object.assign(this, w, e), this.smartphone = w.smartphone, e.smartphone && Object.assign(this.smartphone, e.smartphone), this.tablet = w.tablet, e.tablet && Object.assign(this.tablet, e.tablet), this.init()
                    }
                    return o(t, [{
                        key: "init",
                        value: function() {
                            if (this.scroll = new E(this.options), this.scroll.init(), window.location.hash) {
                                var t = window.location.hash.slice(1, window.location.hash.length),
                                    e = document.getElementById(t);
                                e && this.scroll.scrollTo(e)
                            }
                        }
                    }, {
                        key: "update",
                        value: function() {
                            this.scroll.update()
                        }
                    }, {
                        key: "start",
                        value: function() {
                            this.scroll.startScroll()
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.scroll.stopScroll()
                        }
                    }, {
                        key: "scrollTo",
                        value: function(t, e) {
                            this.scroll.scrollTo(t, e)
                        }
                    }, {
                        key: "setScroll",
                        value: function(t, e) {
                            this.scroll.setScroll(t, e)
                        }
                    }, {
                        key: "on",
                        value: function(t, e) {
                            this.scroll.setEvents(t, e)
                        }
                    }, {
                        key: "off",
                        value: function(t, e) {
                            this.scroll.unsetEvents(t, e)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.scroll.destroy()
                        }
                    }]), t
                }();
            e.default = pt
        },
        6086: function(t) {
            "use strict";
            var e = Object.assign.bind(Object);
            t.exports = e, t.exports.default = t.exports
        },
        8453: function() {},
        6893: function(t, e, r) {
            "use strict";
            r.d(e, {
                bTu: function() {
                    return i
                }
            });
            var n = r(8357);

            function i(t) {
                return (0, n.w_)({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    },
                    child: [{
                        tag: "polyline",
                        attr: {
                            points: "6 9 12 15 18 9"
                        }
                    }]
                })(t)
            }
        },
        8357: function(t, e, r) {
            "use strict";
            r.d(e, {
                w_: function() {
                    return u
                }
            });
            var n = r(7294),
                i = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                o = n.createContext && n.createContext(i),
                s = function() {
                    return s = Object.assign || function(t) {
                        for (var e, r = 1, n = arguments.length; r < n; r++)
                            for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }, s.apply(this, arguments)
                },
                a = function(t, e) {
                    var r = {};
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
                    if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]])
                    }
                    return r
                };

            function l(t) {
                return t && t.map((function(t, e) {
                    return n.createElement(t.tag, s({
                        key: e
                    }, t.attr), l(t.child))
                }))
            }

            function u(t) {
                return function(e) {
                    return n.createElement(c, s({
                        attr: s({}, t.attr)
                    }, e), l(t.child))
                }
            }

            function c(t) {
                var e = function(e) {
                    var r, i = t.attr,
                        o = t.size,
                        l = t.title,
                        u = a(t, ["attr", "size", "title"]),
                        c = o || e.size || "1em";
                    return e.className && (r = e.className), t.className && (r = (r ? r + " " : "") + t.className), n.createElement("svg", s({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, e.attr, i, u, {
                        className: r,
                        style: s(s({
                            color: t.color || e.color
                        }, e.style), t.style),
                        height: c,
                        width: c,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), l && n.createElement("title", null, l), t.children)
                };
                return void 0 !== o ? n.createElement(o.Consumer, null, (function(t) {
                    return e(t)
                })) : e(i)
            }
        },
        8992: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LocomotiveScrollProvider = e.LocomotiveScrollContext = void 0;
            const n = r(655),
                i = r(5893),
                o = r(7294),
                s = r(9428),
                a = n.__importDefault(r(6388));

            function l({
                children: t,
                options: l,
                containerRef: u,
                watch: c,
                onUpdate: h,
                location: d,
                onLocationChange: f
            }) {
                const {
                    height: p
                } = (0, a.default)({
                    ref: u
                }), [m, g] = (0, o.useState)(!1), v = (0, o.useRef)(null), [y] = (0, s.useDebounce)(p, 100);
                return c || console.warn("react-locomotive-scroll: you did not add any props to watch. Scroll may have weird behaviours if the instance is not updated when the route changes"), (0, o.useEffect)((() => ((() => {
                    n.__awaiter(this, void 0, void 0, (function*() {
                        try {
                            const t = (yield Promise.resolve().then((() => n.__importStar(r(6267))))).default,
                                e = document.querySelector("[data-scroll-container]");
                            e || console.warn("react-locomotive-scroll: [data-scroll-container] dataset was not found. You likely forgot to add it which will prevent Locomotive Scroll to work."), v.current = new t(Object.assign({
                                el: null !== e && void 0 !== e ? e : void 0
                            }, l)), g(!0)
                        } catch (t) {
                            throw Error(`react-locomotive-scroll: ${t}`)
                        }
                    }))
                })(), () => {
                    var t;
                    null === (t = v.current) || void 0 === t || t.destroy(), g(!1)
                })), []), (0, o.useEffect)((() => {
                    v.current && (v.current.update(), h && h(v.current))
                }), c ? [...c, y] : [y]), (0, o.useEffect)((() => {
                    v.current && d && (v.current.update(), f && f(v.current))
                }), [d]), (0, i.jsx)(e.LocomotiveScrollContext.Provider, Object.assign({
                    value: {
                        scroll: v.current,
                        isReady: m
                    }
                }, {
                    children: t
                }))
            }
            e.LocomotiveScrollContext = (0, o.createContext)({
                scroll: null,
                isReady: !1
            }), e.LocomotiveScrollProvider = l, e.LocomotiveScrollContext.displayName = "LocomotiveScrollContext", l.displayName = "LocomotiveScrollProvider"
        },
        8075: function(t, e, r) {
            "use strict";
            e.lh = e.a5 = void 0;
            var n = r(8992);
            Object.defineProperty(e, "a5", {
                enumerable: !0,
                get: function() {
                    return n.LocomotiveScrollProvider
                }
            });
            var i = r(6781);
            Object.defineProperty(e, "lh", {
                enumerable: !0,
                get: function() {
                    return i.useLocomotiveScroll
                }
            })
        },
        6781: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.useLocomotiveScroll = void 0;
            const n = r(7294),
                i = r(8992);

            function o() {
                const t = (0, n.useContext)(i.LocomotiveScrollContext);
                return void 0 === t && console.warn("react-locomotive-scroll: the context is missing. You may be using the hook without registering LocomotiveScrollProvider, or you may be using the hook in a component which is not wrapped by LocomotiveScrollProvider."), t
            }
            e.useLocomotiveScroll = o, o.displayName = "useLocomotiveScroll"
        },
        9920: function(t, e, r) {
            "use strict";
            r.d(e, {
                animated: function() {
                    return n.animated
                }
            });
            var n = r(1472);
            r.o(n, "useSpring") && r.d(e, {
                useSpring: function() {
                    return n.useSpring
                }
            })
        },
        7247: function(t, e, r) {
            "use strict";
            r.d(e, {
                Cg: function() {
                    return A
                },
                $_: function() {
                    return b
                },
                qC: function() {
                    return m
                },
                GQ: function() {
                    return S
                },
                bK: function() {
                    return g
                },
                FK: function() {
                    return P
                },
                Dh: function() {
                    return V
                }
            });
            var n = r(6086),
                i = r.n(n),
                o = function(t, e) {
                    var r = i()({}, t, e);
                    for (var n in t) {
                        var o;
                        t[n] && "object" === typeof e[n] && i()(r, ((o = {})[n] = i()(t[n], e[n]), o))
                    }
                    return r
                },
                s = {
                    breakpoints: [40, 52, 64].map((function(t) {
                        return t + "em"
                    }))
                },
                a = function(t) {
                    return "@media screen and (min-width: " + t + ")"
                },
                l = function(t, e) {
                    return u(e, t, t)
                },
                u = function(t, e, r, n, i) {
                    for (e = e && e.split ? e.split(".") : [e], n = 0; n < e.length; n++) t = t ? t[e[n]] : i;
                    return t === i ? r : t
                },
                c = function t(e) {
                    var r = {},
                        n = function(t) {
                            var n = {},
                                l = !1,
                                c = t.theme && t.theme.disableStyledSystemCache;
                            for (var f in t)
                                if (e[f]) {
                                    var p = e[f],
                                        m = t[f],
                                        g = u(t.theme, p.scale, p.defaults);
                                    if ("object" !== typeof m) i()(n, p(m, g, t));
                                    else {
                                        if (r.breakpoints = !c && r.breakpoints || u(t.theme, "breakpoints", s.breakpoints), Array.isArray(m)) {
                                            r.media = !c && r.media || [null].concat(r.breakpoints.map(a)), n = o(n, h(r.media, p, g, m, t));
                                            continue
                                        }
                                        null !== m && (n = o(n, d(r.breakpoints, p, g, m, t)), l = !0)
                                    }
                                }
                            return l && (n = function(t) {
                                var e = {};
                                return Object.keys(t).sort((function(t, e) {
                                    return t.localeCompare(e, void 0, {
                                        numeric: !0,
                                        sensitivity: "base"
                                    })
                                })).forEach((function(r) {
                                    e[r] = t[r]
                                })), e
                            }(n)), n
                        };
                    n.config = e, n.propNames = Object.keys(e), n.cache = r;
                    var l = Object.keys(e).filter((function(t) {
                        return "config" !== t
                    }));
                    return l.length > 1 && l.forEach((function(r) {
                        var i;
                        n[r] = t(((i = {})[r] = e[r], i))
                    })), n
                },
                h = function(t, e, r, n, o) {
                    var s = {};
                    return n.slice(0, t.length).forEach((function(n, a) {
                        var l, u = t[a],
                            c = e(n, r, o);
                        u ? i()(s, ((l = {})[u] = i()({}, s[u], c), l)) : i()(s, c)
                    })), s
                },
                d = function(t, e, r, n, o) {
                    var s = {};
                    for (var l in n) {
                        var u = t[l],
                            c = e(n[l], r, o);
                        if (u) {
                            var h, d = a(u);
                            i()(s, ((h = {})[d] = i()({}, s[d], c), h))
                        } else i()(s, c)
                    }
                    return s
                },
                f = function(t) {
                    var e = t.properties,
                        r = t.property,
                        n = t.scale,
                        i = t.transform,
                        o = void 0 === i ? l : i,
                        s = t.defaultScale;
                    e = e || [r];
                    var a = function(t, r, n) {
                        var i = {},
                            s = o(t, r, n);
                        if (null !== s) return e.forEach((function(t) {
                            i[t] = s
                        })), i
                    };
                    return a.scale = n, a.defaults = s, a
                },
                p = function(t) {
                    void 0 === t && (t = {});
                    var e = {};
                    return Object.keys(t).forEach((function(r) {
                        var n = t[r];
                        e[r] = !0 !== n ? "function" !== typeof n ? f(n) : n : f({
                            property: r,
                            scale: r
                        })
                    })), c(e)
                },
                m = function() {
                    for (var t = {}, e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    r.forEach((function(e) {
                        e && e.config && i()(t, e.config)
                    }));
                    var o = c(t);
                    return o
                },
                g = p({
                    width: {
                        property: "width",
                        scale: "sizes",
                        transform: function(t, e) {
                            return u(e, t, ! function(t) {
                                return "number" === typeof t && !isNaN(t)
                            }(t) || t > 1 ? t : 100 * t + "%")
                        }
                    },
                    height: {
                        property: "height",
                        scale: "sizes"
                    },
                    minWidth: {
                        property: "minWidth",
                        scale: "sizes"
                    },
                    minHeight: {
                        property: "minHeight",
                        scale: "sizes"
                    },
                    maxWidth: {
                        property: "maxWidth",
                        scale: "sizes"
                    },
                    maxHeight: {
                        property: "maxHeight",
                        scale: "sizes"
                    },
                    size: {
                        properties: ["width", "height"],
                        scale: "sizes"
                    },
                    overflow: !0,
                    overflowX: !0,
                    overflowY: !0,
                    display: !0,
                    verticalAlign: !0
                }),
                v = g,
                y = {
                    color: {
                        property: "color",
                        scale: "colors"
                    },
                    backgroundColor: {
                        property: "backgroundColor",
                        scale: "colors"
                    },
                    opacity: !0
                };
            y.bg = y.backgroundColor;
            var b = p(y),
                w = b,
                x = p({
                    fontFamily: {
                        property: "fontFamily",
                        scale: "fonts"
                    },
                    fontSize: {
                        property: "fontSize",
                        scale: "fontSizes",
                        defaultScale: [12, 14, 16, 20, 24, 32, 48, 64, 72]
                    },
                    fontWeight: {
                        property: "fontWeight",
                        scale: "fontWeights"
                    },
                    lineHeight: {
                        property: "lineHeight",
                        scale: "lineHeights"
                    },
                    letterSpacing: {
                        property: "letterSpacing",
                        scale: "letterSpacings"
                    },
                    textAlign: !0,
                    fontStyle: !0
                }),
                S = p({
                    alignItems: !0,
                    alignContent: !0,
                    justifyItems: !0,
                    justifyContent: !0,
                    flexWrap: !0,
                    flexDirection: !0,
                    flex: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    flexBasis: !0,
                    justifySelf: !0,
                    alignSelf: !0,
                    order: !0
                }),
                T = S,
                _ = {
                    space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
                },
                E = p({
                    gridGap: {
                        property: "gridGap",
                        scale: "space",
                        defaultScale: _.space
                    },
                    gridColumnGap: {
                        property: "gridColumnGap",
                        scale: "space",
                        defaultScale: _.space
                    },
                    gridRowGap: {
                        property: "gridRowGap",
                        scale: "space",
                        defaultScale: _.space
                    },
                    gridColumn: !0,
                    gridRow: !0,
                    gridAutoFlow: !0,
                    gridAutoColumns: !0,
                    gridAutoRows: !0,
                    gridTemplateColumns: !0,
                    gridTemplateRows: !0,
                    gridTemplateAreas: !0,
                    gridArea: !0
                }),
                k = {
                    border: {
                        property: "border",
                        scale: "borders"
                    },
                    borderWidth: {
                        property: "borderWidth",
                        scale: "borderWidths"
                    },
                    borderStyle: {
                        property: "borderStyle",
                        scale: "borderStyles"
                    },
                    borderColor: {
                        property: "borderColor",
                        scale: "colors"
                    },
                    borderRadius: {
                        property: "borderRadius",
                        scale: "radii"
                    },
                    borderTop: {
                        property: "borderTop",
                        scale: "borders"
                    },
                    borderTopLeftRadius: {
                        property: "borderTopLeftRadius",
                        scale: "radii"
                    },
                    borderTopRightRadius: {
                        property: "borderTopRightRadius",
                        scale: "radii"
                    },
                    borderRight: {
                        property: "borderRight",
                        scale: "borders"
                    },
                    borderBottom: {
                        property: "borderBottom",
                        scale: "borders"
                    },
                    borderBottomLeftRadius: {
                        property: "borderBottomLeftRadius",
                        scale: "radii"
                    },
                    borderBottomRightRadius: {
                        property: "borderBottomRightRadius",
                        scale: "radii"
                    },
                    borderLeft: {
                        property: "borderLeft",
                        scale: "borders"
                    },
                    borderX: {
                        properties: ["borderLeft", "borderRight"],
                        scale: "borders"
                    },
                    borderY: {
                        properties: ["borderTop", "borderBottom"],
                        scale: "borders"
                    },
                    borderTopWidth: {
                        property: "borderTopWidth",
                        scale: "borderWidths"
                    },
                    borderTopColor: {
                        property: "borderTopColor",
                        scale: "colors"
                    },
                    borderTopStyle: {
                        property: "borderTopStyle",
                        scale: "borderStyles"
                    }
                };
            k.borderTopLeftRadius = {
                property: "borderTopLeftRadius",
                scale: "radii"
            }, k.borderTopRightRadius = {
                property: "borderTopRightRadius",
                scale: "radii"
            }, k.borderBottomWidth = {
                property: "borderBottomWidth",
                scale: "borderWidths"
            }, k.borderBottomColor = {
                property: "borderBottomColor",
                scale: "colors"
            }, k.borderBottomStyle = {
                property: "borderBottomStyle",
                scale: "borderStyles"
            }, k.borderBottomLeftRadius = {
                property: "borderBottomLeftRadius",
                scale: "radii"
            }, k.borderBottomRightRadius = {
                property: "borderBottomRightRadius",
                scale: "radii"
            }, k.borderLeftWidth = {
                property: "borderLeftWidth",
                scale: "borderWidths"
            }, k.borderLeftColor = {
                property: "borderLeftColor",
                scale: "colors"
            }, k.borderLeftStyle = {
                property: "borderLeftStyle",
                scale: "borderStyles"
            }, k.borderRightWidth = {
                property: "borderRightWidth",
                scale: "borderWidths"
            }, k.borderRightColor = {
                property: "borderRightColor",
                scale: "colors"
            }, k.borderRightStyle = {
                property: "borderRightStyle",
                scale: "borderStyles"
            };
            var A = p(k),
                R = A,
                C = {
                    background: !0,
                    backgroundImage: !0,
                    backgroundSize: !0,
                    backgroundPosition: !0,
                    backgroundRepeat: !0
                };
            C.bgImage = C.backgroundImage, C.bgSize = C.backgroundSize, C.bgPosition = C.backgroundPosition, C.bgRepeat = C.backgroundRepeat;
            var O = p(C),
                U = {
                    space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
                },
                P = p({
                    position: !0,
                    zIndex: {
                        property: "zIndex",
                        scale: "zIndices"
                    },
                    top: {
                        property: "top",
                        scale: "space",
                        defaultScale: U.space
                    },
                    right: {
                        property: "right",
                        scale: "space",
                        defaultScale: U.space
                    },
                    bottom: {
                        property: "bottom",
                        scale: "space",
                        defaultScale: U.space
                    },
                    left: {
                        property: "left",
                        scale: "space",
                        defaultScale: U.space
                    }
                }),
                D = P,
                M = {
                    space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
                },
                F = function(t) {
                    return "number" === typeof t && !isNaN(t)
                },
                B = function(t, e) {
                    if (!F(t)) return u(e, t, t);
                    var r = t < 0,
                        n = Math.abs(t),
                        i = u(e, n, n);
                    return F(i) ? i * (r ? -1 : 1) : r ? "-" + i : i
                },
                L = {};
            L.margin = {
                margin: {
                    property: "margin",
                    scale: "space",
                    transform: B,
                    defaultScale: M.space
                },
                marginTop: {
                    property: "marginTop",
                    scale: "space",
                    transform: B,
                    defaultScale: M.space
                },
                marginRight: {
                    property: "marginRight",
                    scale: "space",
                    transform: B,
                    defaultScale: M.space
                },
                marginBottom: {
                    property: "marginBottom",
                    scale: "space",
                    transform: B,
                    defaultScale: M.space
                },
                marginLeft: {
                    property: "marginLeft",
                    scale: "space",
                    transform: B,
                    defaultScale: M.space
                },
                marginX: {
                    properties: ["marginLeft", "marginRight"],
                    scale: "space",
                    transform: B,
                    defaultScale: M.space
                },
                marginY: {
                    properties: ["marginTop", "marginBottom"],
                    scale: "space",
                    transform: B,
                    defaultScale: M.space
                }
            }, L.margin.m = L.margin.margin, L.margin.mt = L.margin.marginTop, L.margin.mr = L.margin.marginRight, L.margin.mb = L.margin.marginBottom, L.margin.ml = L.margin.marginLeft, L.margin.mx = L.margin.marginX, L.margin.my = L.margin.marginY, L.padding = {
                padding: {
                    property: "padding",
                    scale: "space",
                    defaultScale: M.space
                },
                paddingTop: {
                    property: "paddingTop",
                    scale: "space",
                    defaultScale: M.space
                },
                paddingRight: {
                    property: "paddingRight",
                    scale: "space",
                    defaultScale: M.space
                },
                paddingBottom: {
                    property: "paddingBottom",
                    scale: "space",
                    defaultScale: M.space
                },
                paddingLeft: {
                    property: "paddingLeft",
                    scale: "space",
                    defaultScale: M.space
                },
                paddingX: {
                    properties: ["paddingLeft", "paddingRight"],
                    scale: "space",
                    defaultScale: M.space
                },
                paddingY: {
                    properties: ["paddingTop", "paddingBottom"],
                    scale: "space",
                    defaultScale: M.space
                }
            }, L.padding.p = L.padding.padding, L.padding.pt = L.padding.paddingTop, L.padding.pr = L.padding.paddingRight, L.padding.pb = L.padding.paddingBottom, L.padding.pl = L.padding.paddingLeft, L.padding.px = L.padding.paddingX, L.padding.py = L.padding.paddingY;
            var j = p(L.margin),
                I = p(L.padding),
                V = m(j, I);
            p({
                boxShadow: {
                    property: "boxShadow",
                    scale: "shadows"
                },
                textShadow: {
                    property: "textShadow",
                    scale: "shadows"
                }
            });

            function W() {
                return W = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, W.apply(this, arguments)
            }
            var z = function(t, e, r, n, i) {
                    for (e = e && e.split ? e.split(".") : [e], n = 0; n < e.length; n++) t = t ? t[e[n]] : i;
                    return t === i ? r : t
                },
                N = [40, 52, 64].map((function(t) {
                    return t + "em"
                })),
                G = {
                    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
                    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
                },
                q = {
                    bg: "backgroundColor",
                    m: "margin",
                    mt: "marginTop",
                    mr: "marginRight",
                    mb: "marginBottom",
                    ml: "marginLeft",
                    mx: "marginX",
                    my: "marginY",
                    p: "padding",
                    pt: "paddingTop",
                    pr: "paddingRight",
                    pb: "paddingBottom",
                    pl: "paddingLeft",
                    px: "paddingX",
                    py: "paddingY"
                },
                H = {
                    marginX: ["marginLeft", "marginRight"],
                    marginY: ["marginTop", "marginBottom"],
                    paddingX: ["paddingLeft", "paddingRight"],
                    paddingY: ["paddingTop", "paddingBottom"],
                    size: ["width", "height"]
                },
                Y = {
                    color: "colors",
                    backgroundColor: "colors",
                    borderColor: "colors",
                    margin: "space",
                    marginTop: "space",
                    marginRight: "space",
                    marginBottom: "space",
                    marginLeft: "space",
                    marginX: "space",
                    marginY: "space",
                    padding: "space",
                    paddingTop: "space",
                    paddingRight: "space",
                    paddingBottom: "space",
                    paddingLeft: "space",
                    paddingX: "space",
                    paddingY: "space",
                    top: "space",
                    right: "space",
                    bottom: "space",
                    left: "space",
                    gridGap: "space",
                    gridColumnGap: "space",
                    gridRowGap: "space",
                    gap: "space",
                    columnGap: "space",
                    rowGap: "space",
                    fontFamily: "fonts",
                    fontSize: "fontSizes",
                    fontWeight: "fontWeights",
                    lineHeight: "lineHeights",
                    letterSpacing: "letterSpacings",
                    border: "borders",
                    borderTop: "borders",
                    borderRight: "borders",
                    borderBottom: "borders",
                    borderLeft: "borders",
                    borderWidth: "borderWidths",
                    borderStyle: "borderStyles",
                    borderRadius: "radii",
                    borderTopRightRadius: "radii",
                    borderTopLeftRadius: "radii",
                    borderBottomRightRadius: "radii",
                    borderBottomLeftRadius: "radii",
                    borderTopWidth: "borderWidths",
                    borderTopColor: "colors",
                    borderTopStyle: "borderStyles",
                    borderBottomWidth: "borderWidths",
                    borderBottomColor: "colors",
                    borderBottomStyle: "borderStyles",
                    borderLeftWidth: "borderWidths",
                    borderLeftColor: "colors",
                    borderLeftStyle: "borderStyles",
                    borderRightWidth: "borderWidths",
                    borderRightColor: "colors",
                    borderRightStyle: "borderStyles",
                    outlineColor: "colors",
                    boxShadow: "shadows",
                    textShadow: "shadows",
                    zIndex: "zIndices",
                    width: "sizes",
                    minWidth: "sizes",
                    maxWidth: "sizes",
                    height: "sizes",
                    minHeight: "sizes",
                    maxHeight: "sizes",
                    flexBasis: "sizes",
                    size: "sizes",
                    fill: "colors",
                    stroke: "colors"
                },
                X = function(t, e) {
                    if ("number" !== typeof e || e >= 0) return z(t, e, e);
                    var r = Math.abs(e),
                        n = z(t, r, r);
                    return "string" === typeof n ? "-" + n : -1 * n
                },
                $ = ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "top", "bottom", "left", "right"].reduce((function(t, e) {
                    var r;
                    return W({}, t, ((r = {})[e] = X, r))
                }), {}),
                K = function t(e) {
                    return function(r) {
                        void 0 === r && (r = {});
                        var n = W({}, G, {}, r.theme || r),
                            i = {},
                            o = function(t) {
                                return function(e) {
                                    var r = {},
                                        n = z(e, "breakpoints", N),
                                        i = [null].concat(n.map((function(t) {
                                            return "@media screen and (min-width: " + t + ")"
                                        })));
                                    for (var o in t) {
                                        var s = "function" === typeof t[o] ? t[o](e) : t[o];
                                        if (null != s)
                                            if (Array.isArray(s))
                                                for (var a = 0; a < s.slice(0, i.length).length; a++) {
                                                    var l = i[a];
                                                    l ? (r[l] = r[l] || {}, null != s[a] && (r[l][o] = s[a])) : r[o] = s[a]
                                                } else r[o] = s
                                    }
                                    return r
                                }
                            }("function" === typeof e ? e(n) : e)(n);
                        for (var s in o) {
                            var a = o[s],
                                l = "function" === typeof a ? a(n) : a;
                            if ("variant" !== s)
                                if (l && "object" === typeof l) i[s] = t(l)(n);
                                else {
                                    var u = z(q, s, s),
                                        c = z(Y, u),
                                        h = z(n, c, z(n, u, {})),
                                        d = z($, u, z)(h, l, l);
                                    if (H[u])
                                        for (var f = H[u], p = 0; p < f.length; p++) i[f[p]] = d;
                                    else i[u] = d
                                }
                            else i = W({}, i, {}, t(z(n, l))(n))
                        }
                        return i
                    }
                },
                Z = function(t) {
                    var e, r, n = t.scale,
                        i = t.prop,
                        o = void 0 === i ? "variant" : i,
                        s = t.variants,
                        a = void 0 === s ? {} : s,
                        l = t.key;
                    r = Object.keys(a).length ? function(t, e, r) {
                        return K(u(e, t, null))(r.theme)
                    } : function(t, e) {
                        return u(e, t, null)
                    }, r.scale = n || l, r.defaults = a;
                    var h = ((e = {})[o] = r, e);
                    return c(h)
                };
            Z({
                key: "buttons"
            }), Z({
                key: "textStyles",
                prop: "textStyle"
            }), Z({
                key: "colorStyles",
                prop: "colors"
            }), v.width, v.height, v.minWidth, v.minHeight, v.maxWidth, v.maxHeight, v.size, v.verticalAlign, v.display, v.overflow, v.overflowX, v.overflowY, w.opacity, x.fontSize, x.fontFamily, x.fontWeight, x.lineHeight, x.textAlign, x.fontStyle, x.letterSpacing, T.alignItems, T.alignContent, T.justifyItems, T.justifyContent, T.flexWrap, T.flexDirection, T.flex, T.flexGrow, T.flexShrink, T.flexBasis, T.justifySelf, T.alignSelf, T.order, E.gridGap, E.gridColumnGap, E.gridRowGap, E.gridColumn, E.gridRow, E.gridAutoFlow, E.gridAutoColumns, E.gridAutoRows, E.gridTemplateColumns, E.gridTemplateRows, E.gridTemplateAreas, E.gridArea, R.borderWidth, R.borderStyle, R.borderColor, R.borderTop, R.borderRight, R.borderBottom, R.borderLeft, R.borderRadius, O.backgroundImage, O.backgroundSize, O.backgroundPosition, O.backgroundRepeat, D.zIndex, D.top, D.right, D.bottom, D.left
        },
        655: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                __assign: function() {
                    return o
                },
                __asyncDelegator: function() {
                    return x
                },
                __asyncGenerator: function() {
                    return w
                },
                __asyncValues: function() {
                    return S
                },
                __await: function() {
                    return b
                },
                __awaiter: function() {
                    return c
                },
                __classPrivateFieldGet: function() {
                    return A
                },
                __classPrivateFieldIn: function() {
                    return C
                },
                __classPrivateFieldSet: function() {
                    return R
                },
                __createBinding: function() {
                    return d
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return f
                },
                __extends: function() {
                    return i
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return k
                },
                __importStar: function() {
                    return E
                },
                __makeTemplateObject: function() {
                    return T
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return l
                },
                __read: function() {
                    return m
                },
                __rest: function() {
                    return s
                },
                __spread: function() {
                    return g
                },
                __spreadArray: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return p
                }
            });
            var n = function(t, e) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                }, n(t, e)
            };

            function i(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function r() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            }
            var o = function() {
                return o = Object.assign || function(t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                        for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }, o.apply(this, arguments)
            };

            function s(t, e) {
                var r = {};
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
                if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]])
                }
                return r
            }

            function a(t, e, r, n) {
                var i, o = arguments.length,
                    s = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
                if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) s = Reflect.decorate(t, e, r, n);
                else
                    for (var a = t.length - 1; a >= 0; a--)(i = t[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, r, s) : i(e, r)) || s);
                return o > 3 && s && Object.defineProperty(e, r, s), s
            }

            function l(t, e) {
                return function(r, n) {
                    e(r, n, t)
                }
            }

            function u(t, e) {
                if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(t, e)
            }

            function c(t, e, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function s(t) {
                        try {
                            l(n.next(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(t) {
                        try {
                            l(n.throw(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(s, a)
                    }
                    l((n = n.apply(t, e || [])).next())
                }))
            }

            function h(t, e) {
                var r, n, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, n = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (a) {
                                o = [6, a], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }
            var d = Object.create ? function(t, e, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(e, r);
                i && !("get" in i ? !e.__esModule : i.writable || i.configurable) || (i = {
                    enumerable: !0,
                    get: function() {
                        return e[r]
                    }
                }), Object.defineProperty(t, n, i)
            } : function(t, e, r, n) {
                void 0 === n && (n = r), t[n] = e[r]
            };

            function f(t, e) {
                for (var r in t) "default" === r || Object.prototype.hasOwnProperty.call(e, r) || d(e, t, r)
            }

            function p(t) {
                var e = "function" === typeof Symbol && Symbol.iterator,
                    r = e && t[e],
                    n = 0;
                if (r) return r.call(t);
                if (t && "number" === typeof t.length) return {
                    next: function() {
                        return t && n >= t.length && (t = void 0), {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function m(t, e) {
                var r = "function" === typeof Symbol && t[Symbol.iterator];
                if (!r) return t;
                var n, i, o = r.call(t),
                    s = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = o.next()).done;) s.push(n.value)
                } catch (a) {
                    i = {
                        error: a
                    }
                } finally {
                    try {
                        n && !n.done && (r = o.return) && r.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return s
            }

            function g() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(m(arguments[e]));
                return t
            }

            function v() {
                for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
                var n = Array(t),
                    i = 0;
                for (e = 0; e < r; e++)
                    for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++) n[i] = o[s];
                return n
            }

            function y(t, e, r) {
                if (r || 2 === arguments.length)
                    for (var n, i = 0, o = e.length; i < o; i++) !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
                return t.concat(n || Array.prototype.slice.call(e))
            }

            function b(t) {
                return this instanceof b ? (this.v = t, this) : new b(t)
            }

            function w(t, e, r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, i = r.apply(t, e || []),
                    o = [];
                return n = {}, s("next"), s("throw"), s("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n;

                function s(t) {
                    i[t] && (n[t] = function(e) {
                        return new Promise((function(r, n) {
                            o.push([t, e, r, n]) > 1 || a(t, e)
                        }))
                    })
                }

                function a(t, e) {
                    try {
                        (r = i[t](e)).value instanceof b ? Promise.resolve(r.value.v).then(l, u) : c(o[0][2], r)
                    } catch (n) {
                        c(o[0][3], n)
                    }
                    var r
                }

                function l(t) {
                    a("next", t)
                }

                function u(t) {
                    a("throw", t)
                }

                function c(t, e) {
                    t(e), o.shift(), o.length && a(o[0][0], o[0][1])
                }
            }

            function x(t) {
                var e, r;
                return e = {}, n("next"), n("throw", (function(t) {
                    throw t
                })), n("return"), e[Symbol.iterator] = function() {
                    return this
                }, e;

                function n(n, i) {
                    e[n] = t[n] ? function(e) {
                        return (r = !r) ? {
                            value: b(t[n](e)),
                            done: "return" === n
                        } : i ? i(e) : e
                    } : i
                }
            }

            function S(t) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var e, r = t[Symbol.asyncIterator];
                return r ? r.call(t) : (t = p(t), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
                    return this
                }, e);

                function n(r) {
                    e[r] = t[r] && function(e) {
                        return new Promise((function(n, i) {
                            (function(t, e, r, n) {
                                Promise.resolve(n).then((function(e) {
                                    t({
                                        value: e,
                                        done: r
                                    })
                                }), e)
                            })(n, i, (e = t[r](e)).done, e.value)
                        }))
                    }
                }
            }

            function T(t, e) {
                return Object.defineProperty ? Object.defineProperty(t, "raw", {
                    value: e
                }) : t.raw = e, t
            }
            var _ = Object.create ? function(t, e) {
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e
                })
            } : function(t, e) {
                t.default = e
            };

            function E(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && d(e, t, r);
                return _(e, t), e
            }

            function k(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function A(t, e, r, n) {
                if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                if ("function" === typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t)
            }

            function R(t, e, r, n, i) {
                if ("m" === n) throw new TypeError("Private method is not writable");
                if ("a" === n && !i) throw new TypeError("Private accessor was defined without a setter");
                if ("function" === typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === n ? i.call(t, r) : i ? i.value = r : e.set(t, r), r
            }

            function C(t, e) {
                if (null === e || "object" !== typeof e && "function" !== typeof e) throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" === typeof t ? e === t : t.has(e)
            }
        },
        9428: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(8440);
            e.useDebounce = n.default;
            var i = r(3443);
            e.useDebouncedCallback = i.default;
            var o = r(8523);
            e.useThrottledCallback = o.default
        },
        8440: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(7294),
                i = r(3443);

            function o(t, e) {
                return t === e
            }

            function s(t) {
                return "function" === typeof t ? function() {
                    return t
                } : t
            }
            e.default = function(t, e, r) {
                var a = r && r.equalityFn || o,
                    l = function(t) {
                        var e = n.useState(s(t)),
                            r = e[0],
                            i = e[1];
                        return [r, n.useCallback((function(t) {
                            return i(s(t))
                        }), [])]
                    }(t),
                    u = l[0],
                    c = l[1],
                    h = i.default(n.useCallback((function(t) {
                        return c(t)
                    }), [c]), e, r),
                    d = n.useRef(t);
                return n.useEffect((function() {
                    a(d.current, t) || (h(t), d.current = t)
                }), [t, h, a]), [u, {
                    cancel: h.cancel,
                    isPending: h.isPending,
                    flush: h.flush
                }]
            }
        },
        3443: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(7294);
            e.default = function(t, e, r) {
                var i = this,
                    o = n.useRef(null),
                    s = n.useRef(0),
                    a = n.useRef(null),
                    l = n.useRef([]),
                    u = n.useRef(),
                    c = n.useRef(),
                    h = n.useRef(t),
                    d = n.useRef(!0);
                h.current = t;
                var f = !e && 0 !== e && "undefined" !== typeof window;
                if ("function" !== typeof t) throw new TypeError("Expected a function");
                e = +e || 0;
                var p = !!(r = r || {}).leading,
                    m = !("trailing" in r) || !!r.trailing,
                    g = "maxWait" in r,
                    v = g ? Math.max(+r.maxWait || 0, e) : null;
                n.useEffect((function() {
                    return d.current = !0,
                        function() {
                            d.current = !1
                        }
                }), []);
                var y = n.useMemo((function() {
                    var t = function(t) {
                            var e = l.current,
                                r = u.current;
                            return l.current = u.current = null, s.current = t, c.current = h.current.apply(r, e)
                        },
                        r = function(t, e) {
                            f && cancelAnimationFrame(a.current), a.current = f ? requestAnimationFrame(t) : setTimeout(t, e)
                        },
                        n = function(t) {
                            if (!d.current) return !1;
                            var r = t - o.current,
                                n = t - s.current;
                            return !o.current || r >= e || r < 0 || g && n >= v
                        },
                        y = function(e) {
                            return a.current = null, m && l.current ? t(e) : (l.current = u.current = null, c.current)
                        },
                        b = function() {
                            var t = Date.now();
                            if (n(t)) return y(t);
                            if (d.current) {
                                var i = t - o.current,
                                    a = t - s.current,
                                    l = e - i,
                                    u = g ? Math.min(l, v - a) : l;
                                r(b, u)
                            }
                        },
                        w = function() {
                            for (var h = [], f = 0; f < arguments.length; f++) h[f] = arguments[f];
                            var m = Date.now(),
                                v = n(m);
                            if (l.current = h, u.current = i, o.current = m, v) {
                                if (!a.current && d.current) return s.current = o.current, r(b, e), p ? t(o.current) : c.current;
                                if (g) return r(b, e), t(o.current)
                            }
                            return a.current || r(b, e), c.current
                        };
                    return w.cancel = function() {
                        a.current && (f ? cancelAnimationFrame(a.current) : clearTimeout(a.current)), s.current = 0, l.current = o.current = u.current = a.current = null
                    }, w.isPending = function() {
                        return !!a.current
                    }, w.flush = function() {
                        return a.current ? y(Date.now()) : c.current
                    }, w
                }), [p, g, e, v, m, f]);
                return y
            }
        },
        8523: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(3443);
            e.default = function(t, e, r) {
                var i = void 0 === r ? {} : r,
                    o = i.leading,
                    s = void 0 === o || o,
                    a = i.trailing,
                    l = void 0 === a || a;
                return n.default(t, e, {
                    maxWait: e,
                    leading: s,
                    trailing: l
                })
            }
        },
        6388: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(7294);
            e.default = function(t) {
                void 0 === t && (t = {});
                var e = (0, n.useRef)(null),
                    r = t.onResize,
                    i = (0, n.useRef)(void 0);
                i.current = r;
                var o = (0, n.useRef)(),
                    s = t.ref || e,
                    a = (0, n.useState)({
                        width: void 0,
                        height: void 0
                    }),
                    l = a[0],
                    u = a[1],
                    c = (0, n.useRef)({
                        width: void 0,
                        height: void 0
                    });
                return (0, n.useEffect)((function() {
                    o.current || (o.current = new ResizeObserver((function(t) {
                        if (Array.isArray(t) && t.length) {
                            var e = t[0],
                                r = Math.round(e.contentRect.width),
                                n = Math.round(e.contentRect.height);
                            if (c.current.width !== r || c.current.height !== n) {
                                var o = {
                                    width: r,
                                    height: n
                                };
                                i.current ? i.current(o) : (c.current.width = r, c.current.height = n, u(o))
                            }
                        }
                    })))
                }), []), (0, n.useEffect)((function() {
                    if ("object" === typeof s && null !== s && s.current instanceof Element) {
                        var t = s.current;
                        return o.current.observe(t),
                            function() {
                                return o.current.unobserve(t)
                            }
                    }
                }), [s]), (0, n.useMemo)((function() {
                    return {
                        ref: s,
                        width: l.width,
                        height: l.height
                    }
                }), [s, l ? l.width : null, l ? l.height : null])
            }
        },
        1485: function(t, e, r) {
            "use strict";
            r.d(e, {
                iP: function() {
                    return s
                }
            });
            var n = r(7294);
            var i = "undefined" !== typeof window ? n.useLayoutEffect : n.useEffect;
            var o = function(t, e, r, o) {
                const s = (0, n.useRef)(e);
                i((() => {
                    s.current = e
                }), [e]), (0, n.useEffect)((() => {
                    const e = r ? .current || window;
                    if (!e || !e.addEventListener) return;
                    const n = t => s.current(t);
                    return e.addEventListener(t, n, o), () => {
                        e.removeEventListener(t, n)
                    }
                }), [t, r, o])
            };
            var s = function() {
                const [t, e] = (0, n.useState)({
                    width: 0,
                    height: 0
                }), r = () => {
                    e({
                        width: window.innerWidth,
                        height: window.innerHeight
                    })
                };
                return o("resize", r), i((() => {
                    r()
                }), []), t
            }
        },
        425: function(t, e, r) {
            "use strict";
            r.d(e, {
                sj: function() {
                    return w
                }
            });
            Symbol(), Symbol();
            const n = Symbol(),
                i = Object.getPrototypeOf,
                o = new WeakMap,
                s = t => t && (o.has(t) ? o.get(t) : i(t) === Object.prototype || i(t) === Array.prototype),
                a = (t, e = !0) => {
                    o.set(t, e)
                },
                l = Symbol("VERSION"),
                u = Symbol("LISTENERS"),
                c = Symbol("SNAPSHOT"),
                h = Symbol("HANDLER"),
                d = Symbol("PROMISE_RESULT"),
                f = Symbol("PROMISE_ERROR"),
                p = new WeakSet;
            const m = t => "object" === typeof t && null !== t,
                g = t => m(t) && !p.has(t) && (Array.isArray(t) || !(Symbol.iterator in t)) && !(t instanceof WeakMap) && !(t instanceof WeakSet) && !(t instanceof Error) && !(t instanceof Number) && !(t instanceof Date) && !(t instanceof String) && !(t instanceof RegExp) && !(t instanceof ArrayBuffer),
                v = new WeakMap;
            let y = 1;
            const b = new WeakMap;

            function w(t = {}) {
                if (!m(t)) throw new Error("object required");
                const e = v.get(t);
                if (e) return e;
                let r = y;
                const i = new Set,
                    o = (t, e = ++y) => {
                        r !== e && (r = e, i.forEach((r => r(t, e))))
                    },
                    x = new Map,
                    S = t => {
                        let e = x.get(t);
                        return e || (e = (e, r) => {
                            const n = [...e];
                            n[1] = [t, ...n[1]], o(n, r)
                        }, x.set(t, e)), e
                    },
                    T = t => {
                        const e = x.get(t);
                        return x.delete(t), e
                    },
                    _ = Array.isArray(t) ? [] : Object.create(Object.getPrototypeOf(t)),
                    E = {
                        get: (t, e, n) => e === l ? r : e === u ? i : e === c ? ((t, e) => {
                            const n = b.get(e);
                            if ((null == n ? void 0 : n[0]) === r) return n[1];
                            const i = Array.isArray(t) ? [] : Object.create(Object.getPrototypeOf(t));
                            return a(i, !0), b.set(e, [r, i]), Reflect.ownKeys(t).forEach((r => {
                                const n = Reflect.get(t, r, e);
                                if (p.has(n)) a(n, !1), i[r] = n;
                                else if (n instanceof Promise)
                                    if (d in n) i[r] = n[d];
                                    else {
                                        const t = n[f] || n;
                                        Object.defineProperty(i, r, {
                                            get() {
                                                if (d in n) return n[d];
                                                throw t
                                            }
                                        })
                                    }
                                else(null == n ? void 0 : n[u]) ? i[r] = n[c] : i[r] = n
                            })), Object.freeze(i), i
                        })(t, n) : e === h ? E : Reflect.get(t, e, n),
                        deleteProperty(t, e) {
                            const r = Reflect.get(t, e),
                                n = null == r ? void 0 : r[u];
                            n && n.delete(T(e));
                            const i = Reflect.deleteProperty(t, e);
                            return i && o(["delete", [e], r]), i
                        },
                        is: Object.is,
                        canProxy: g,
                        set(t, e, r, i) {
                            var a;
                            const l = Reflect.has(t, e),
                                c = Reflect.get(t, e, i);
                            if (l && this.is(c, r)) return !0;
                            const h = null == c ? void 0 : c[u];
                            let p;
                            return h && h.delete(T(e)), m(r) && (r = (t => s(t) && t[n] || null)(r) || r), (null == (a = Object.getOwnPropertyDescriptor(t, e)) ? void 0 : a.set) ? p = r : r instanceof Promise ? p = r.then((t => (p[d] = t, o(["resolve", [e], t]), t))).catch((t => {
                                p[f] = t, o(["reject", [e], t])
                            })) : (null == r ? void 0 : r[u]) ? (p = r, p[u].add(S(e))) : this.canProxy(r) ? (p = w(r), p[u].add(S(e))) : p = r, Reflect.set(t, e, p, i), o(["set", [e], r, c]), !0
                        }
                    },
                    k = new Proxy(_, E);
                return v.set(t, k), Reflect.ownKeys(t).forEach((e => {
                    const r = Object.getOwnPropertyDescriptor(t, e);
                    r.get || r.set ? Object.defineProperty(_, e, r) : k[e] = t[e]
                })), k
            }
        },
        2673: function(t, e, r) {
            "use strict";
            r.d(e, {
                D: function() {
                    return h
                }
            });
            var n = r(7294);
            const i = r(1688).useSyncExternalStore;
            var o = r(2161),
                s = r(9886),
                a = r(81),
                l = r(3989);
            class u extends l.l {
                constructor(t, e) {
                    super(), this.client = t, this.setOptions(e), this.bindMethods(), this.updateResult()
                }
                bindMethods() {
                    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                }
                setOptions(t) {
                    const e = this.options;
                    this.options = this.client.defaultMutationOptions(t), (0, o.VS)(e, this.options) || this.client.getMutationCache().notify({
                        type: "observerOptionsUpdated",
                        mutation: this.currentMutation,
                        observer: this
                    })
                }
                onUnsubscribe() {
                    var t;
                    this.listeners.length || (null == (t = this.currentMutation) || t.removeObserver(this))
                }
                onMutationUpdate(t) {
                    this.updateResult();
                    const e = {
                        listeners: !0
                    };
                    "success" === t.type ? e.onSuccess = !0 : "error" === t.type && (e.onError = !0), this.notify(e)
                }
                getCurrentResult() {
                    return this.currentResult
                }
                reset() {
                    this.currentMutation = void 0, this.updateResult(), this.notify({
                        listeners: !0
                    })
                }
                mutate(t, e) {
                    return this.mutateOptions = e, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, { ...this.options,
                        variables: "undefined" !== typeof t ? t : this.options.variables
                    }), this.currentMutation.addObserver(this), this.currentMutation.execute()
                }
                updateResult() {
                    const t = this.currentMutation ? this.currentMutation.state : (0, s.R)(),
                        e = { ...t,
                            isLoading: "loading" === t.status,
                            isSuccess: "success" === t.status,
                            isError: "error" === t.status,
                            isIdle: "idle" === t.status,
                            mutate: this.mutate,
                            reset: this.reset
                        };
                    this.currentResult = e
                }
                notify(t) {
                    a.V.batch((() => {
                        var e, r, n, i;
                        if (this.mutateOptions)
                            if (t.onSuccess) null == (e = (r = this.mutateOptions).onSuccess) || e.call(r, this.currentResult.data, this.currentResult.variables, this.currentResult.context), null == (n = (i = this.mutateOptions).onSettled) || n.call(i, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context);
                            else if (t.onError) {
                            var o, s, a, l;
                            null == (o = (s = this.mutateOptions).onError) || o.call(s, this.currentResult.error, this.currentResult.variables, this.currentResult.context), null == (a = (l = this.mutateOptions).onSettled) || a.call(l, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context)
                        }
                        t.listeners && this.listeners.forEach((t => {
                            t(this.currentResult)
                        }))
                    }))
                }
            }
            var c = r(5945);

            function h(t, e, r) {
                const s = (0, o.lV)(t, e, r),
                    l = (0, c.NL)({
                        context: s.context
                    }),
                    [h] = n.useState((() => new u(l, s)));
                n.useEffect((() => {
                    h.setOptions(s)
                }), [h, s]);
                const f = i(n.useCallback((t => h.subscribe(a.V.batchCalls(t))), [h]), (() => h.getCurrentResult()), (() => h.getCurrentResult())),
                    p = n.useCallback(((t, e) => {
                        h.mutate(t, e).catch(d)
                    }), [h]);
                if (f.error && (m = h.options.useErrorBoundary, g = [f.error], "function" === typeof m ? m(...g) : m)) throw f.error;
                var m, g;
                return { ...f,
                    mutate: p,
                    mutateAsync: f.mutate
                }
            }

            function d() {}
        },
        196: function(t, e, r) {
            "use strict";

            function n(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }
            r.d(e, {
                Z: function() {
                    return It
                }
            });
            const {
                toString: i
            } = Object.prototype, {
                getPrototypeOf: o
            } = Object, s = (a = Object.create(null), t => {
                const e = i.call(t);
                return a[e] || (a[e] = e.slice(8, -1).toLowerCase())
            });
            var a;
            const l = t => (t = t.toLowerCase(), e => s(e) === t),
                u = t => e => typeof e === t,
                {
                    isArray: c
                } = Array,
                h = u("undefined");
            const d = l("ArrayBuffer");
            const f = u("string"),
                p = u("function"),
                m = u("number"),
                g = t => null !== t && "object" === typeof t,
                v = t => {
                    if ("object" !== s(t)) return !1;
                    const e = o(t);
                    return null === e || e === Object.prototype
                },
                y = l("Date"),
                b = l("File"),
                w = l("Blob"),
                x = l("FileList"),
                S = l("URLSearchParams");

            function T(t, e, {
                allOwnKeys: r = !1
            } = {}) {
                if (null === t || "undefined" === typeof t) return;
                let n, i;
                if ("object" !== typeof t && (t = [t]), c(t))
                    for (n = 0, i = t.length; n < i; n++) e.call(null, t[n], n, t);
                else {
                    const i = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
                        o = i.length;
                    let s;
                    for (n = 0; n < o; n++) s = i[n], e.call(null, t[s], s, t)
                }
            }
            const _ = (E = "undefined" !== typeof Uint8Array && o(Uint8Array), t => E && t instanceof E);
            var E;
            const k = l("HTMLFormElement"),
                A = (({
                    hasOwnProperty: t
                }) => (e, r) => t.call(e, r))(Object.prototype),
                R = l("RegExp"),
                C = (t, e) => {
                    const r = Object.getOwnPropertyDescriptors(t),
                        n = {};
                    T(r, ((r, i) => {
                        !1 !== e(r, i, t) && (n[i] = r)
                    })), Object.defineProperties(t, n)
                };
            var O = {
                isArray: c,
                isArrayBuffer: d,
                isBuffer: function(t) {
                    return null !== t && !h(t) && null !== t.constructor && !h(t.constructor) && p(t.constructor.isBuffer) && t.constructor.isBuffer(t)
                },
                isFormData: t => {
                    const e = "[object FormData]";
                    return t && ("function" === typeof FormData && t instanceof FormData || i.call(t) === e || p(t.toString) && t.toString() === e)
                },
                isArrayBufferView: function(t) {
                    let e;
                    return e = "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && d(t.buffer), e
                },
                isString: f,
                isNumber: m,
                isBoolean: t => !0 === t || !1 === t,
                isObject: g,
                isPlainObject: v,
                isUndefined: h,
                isDate: y,
                isFile: b,
                isBlob: w,
                isRegExp: R,
                isFunction: p,
                isStream: t => g(t) && p(t.pipe),
                isURLSearchParams: S,
                isTypedArray: _,
                isFileList: x,
                forEach: T,
                merge: function t() {
                    const e = {},
                        r = (r, n) => {
                            v(e[n]) && v(r) ? e[n] = t(e[n], r) : v(r) ? e[n] = t({}, r) : c(r) ? e[n] = r.slice() : e[n] = r
                        };
                    for (let n = 0, i = arguments.length; n < i; n++) arguments[n] && T(arguments[n], r);
                    return e
                },
                extend: (t, e, r, {
                    allOwnKeys: i
                } = {}) => (T(e, ((e, i) => {
                    r && p(e) ? t[i] = n(e, r) : t[i] = e
                }), {
                    allOwnKeys: i
                }), t),
                trim: t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
                stripBOM: t => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
                inherits: (t, e, r, n) => {
                    t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
                        value: e.prototype
                    }), r && Object.assign(t.prototype, r)
                },
                toFlatObject: (t, e, r, n) => {
                    let i, s, a;
                    const l = {};
                    if (e = e || {}, null == t) return e;
                    do {
                        for (i = Object.getOwnPropertyNames(t), s = i.length; s-- > 0;) a = i[s], n && !n(a, t, e) || l[a] || (e[a] = t[a], l[a] = !0);
                        t = !1 !== r && o(t)
                    } while (t && (!r || r(t, e)) && t !== Object.prototype);
                    return e
                },
                kindOf: s,
                kindOfTest: l,
                endsWith: (t, e, r) => {
                    t = String(t), (void 0 === r || r > t.length) && (r = t.length), r -= e.length;
                    const n = t.indexOf(e, r);
                    return -1 !== n && n === r
                },
                toArray: t => {
                    if (!t) return null;
                    if (c(t)) return t;
                    let e = t.length;
                    if (!m(e)) return null;
                    const r = new Array(e);
                    for (; e-- > 0;) r[e] = t[e];
                    return r
                },
                forEachEntry: (t, e) => {
                    const r = (t && t[Symbol.iterator]).call(t);
                    let n;
                    for (;
                        (n = r.next()) && !n.done;) {
                        const r = n.value;
                        e.call(t, r[0], r[1])
                    }
                },
                matchAll: (t, e) => {
                    let r;
                    const n = [];
                    for (; null !== (r = t.exec(e));) n.push(r);
                    return n
                },
                isHTMLForm: k,
                hasOwnProperty: A,
                hasOwnProp: A,
                reduceDescriptors: C,
                freezeMethods: t => {
                    C(t, ((e, r) => {
                        const n = t[r];
                        p(n) && (e.enumerable = !1, "writable" in e ? e.writable = !1 : e.set || (e.set = () => {
                            throw Error("Can not read-only method '" + r + "'")
                        }))
                    }))
                },
                toObjectSet: (t, e) => {
                    const r = {},
                        n = t => {
                            t.forEach((t => {
                                r[t] = !0
                            }))
                        };
                    return c(t) ? n(t) : n(String(t).split(e)), r
                },
                toCamelCase: t => t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, (function(t, e, r) {
                    return e.toUpperCase() + r
                })),
                noop: () => {},
                toFiniteNumber: (t, e) => (t = +t, Number.isFinite(t) ? t : e)
            };

            function U(t, e, r, n, i) {
                Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), i && (this.response = i)
            }
            O.inherits(U, Error, {
                toJSON: function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code,
                        status: this.response && this.response.status ? this.response.status : null
                    }
                }
            });
            const P = U.prototype,
                D = {};
            ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((t => {
                D[t] = {
                    value: t
                }
            })), Object.defineProperties(U, D), Object.defineProperty(P, "isAxiosError", {
                value: !0
            }), U.from = (t, e, r, n, i, o) => {
                const s = Object.create(P);
                return O.toFlatObject(t, s, (function(t) {
                    return t !== Error.prototype
                }), (t => "isAxiosError" !== t)), U.call(s, t.message, e, r, n, i), s.cause = t, s.name = t.name, o && Object.assign(s, o), s
            };
            var M = U,
                F = r(6230),
                B = r(8764).lW;

            function L(t) {
                return O.isPlainObject(t) || O.isArray(t)
            }

            function j(t) {
                return O.endsWith(t, "[]") ? t.slice(0, -2) : t
            }

            function I(t, e, r) {
                return t ? t.concat(e).map((function(t, e) {
                    return t = j(t), !r && e ? "[" + t + "]" : t
                })).join(r ? "." : "") : e
            }
            const V = O.toFlatObject(O, {}, null, (function(t) {
                return /^is[A-Z]/.test(t)
            }));
            var W = function(t, e, r) {
                if (!O.isObject(t)) throw new TypeError("target must be an object");
                e = e || new(F || FormData);
                const n = (r = O.toFlatObject(r, {
                        metaTokens: !0,
                        dots: !1,
                        indexes: !1
                    }, !1, (function(t, e) {
                        return !O.isUndefined(e[t])
                    }))).metaTokens,
                    i = r.visitor || c,
                    o = r.dots,
                    s = r.indexes,
                    a = (r.Blob || "undefined" !== typeof Blob && Blob) && ((l = e) && O.isFunction(l.append) && "FormData" === l[Symbol.toStringTag] && l[Symbol.iterator]);
                var l;
                if (!O.isFunction(i)) throw new TypeError("visitor must be a function");

                function u(t) {
                    if (null === t) return "";
                    if (O.isDate(t)) return t.toISOString();
                    if (!a && O.isBlob(t)) throw new M("Blob is not supported. Use a Buffer instead.");
                    return O.isArrayBuffer(t) || O.isTypedArray(t) ? a && "function" === typeof Blob ? new Blob([t]) : B.from(t) : t
                }

                function c(t, r, i) {
                    let a = t;
                    if (t && !i && "object" === typeof t)
                        if (O.endsWith(r, "{}")) r = n ? r : r.slice(0, -2), t = JSON.stringify(t);
                        else if (O.isArray(t) && function(t) {
                            return O.isArray(t) && !t.some(L)
                        }(t) || O.isFileList(t) || O.endsWith(r, "[]") && (a = O.toArray(t))) return r = j(r), a.forEach((function(t, n) {
                        !O.isUndefined(t) && e.append(!0 === s ? I([r], n, o) : null === s ? r : r + "[]", u(t))
                    })), !1;
                    return !!L(t) || (e.append(I(i, r, o), u(t)), !1)
                }
                const h = [],
                    d = Object.assign(V, {
                        defaultVisitor: c,
                        convertValue: u,
                        isVisitable: L
                    });
                if (!O.isObject(t)) throw new TypeError("data must be an object");
                return function t(r, n) {
                    if (!O.isUndefined(r)) {
                        if (-1 !== h.indexOf(r)) throw Error("Circular reference detected in " + n.join("."));
                        h.push(r), O.forEach(r, (function(r, o) {
                            !0 === (!O.isUndefined(r) && i.call(e, r, O.isString(o) ? o.trim() : o, n, d)) && t(r, n ? n.concat(o) : [o])
                        })), h.pop()
                    }
                }(t), e
            };

            function z(t) {
                const e = {
                    "!": "%21",
                    "'": "%27",
                    "(": "%28",
                    ")": "%29",
                    "~": "%7E",
                    "%20": "+",
                    "%00": "\0"
                };
                return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, (function(t) {
                    return e[t]
                }))
            }

            function N(t, e) {
                this._pairs = [], t && W(t, this, e)
            }
            const G = N.prototype;
            G.append = function(t, e) {
                this._pairs.push([t, e])
            }, G.toString = function(t) {
                const e = t ? function(e) {
                    return t.call(this, e, z)
                } : z;
                return this._pairs.map((function(t) {
                    return e(t[0]) + "=" + e(t[1])
                }), "").join("&")
            };
            var q = N;

            function H(t) {
                return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }

            function Y(t, e, r) {
                if (!e) return t;
                const n = t.indexOf("#"); - 1 !== n && (t = t.slice(0, n));
                const i = r && r.encode || H,
                    o = O.isURLSearchParams(e) ? e.toString() : new q(e, r).toString(i);
                return o && (t += (-1 === t.indexOf("?") ? "?" : "&") + o), t
            }
            var X = class {
                    constructor() {
                        this.handlers = []
                    }
                    use(t, e, r) {
                        return this.handlers.push({
                            fulfilled: t,
                            rejected: e,
                            synchronous: !!r && r.synchronous,
                            runWhen: r ? r.runWhen : null
                        }), this.handlers.length - 1
                    }
                    eject(t) {
                        this.handlers[t] && (this.handlers[t] = null)
                    }
                    clear() {
                        this.handlers && (this.handlers = [])
                    }
                    forEach(t) {
                        O.forEach(this.handlers, (function(e) {
                            null !== e && t(e)
                        }))
                    }
                },
                $ = {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                },
                K = "undefined" !== typeof URLSearchParams ? URLSearchParams : q,
                Z = FormData;
            const Q = (() => {
                let t;
                return ("undefined" === typeof navigator || "ReactNative" !== (t = navigator.product) && "NativeScript" !== t && "NS" !== t) && ("undefined" !== typeof window && "undefined" !== typeof document)
            })();
            var J = {
                isBrowser: !0,
                classes: {
                    URLSearchParams: K,
                    FormData: Z,
                    Blob: Blob
                },
                isStandardBrowserEnv: Q,
                protocols: ["http", "https", "file", "blob", "url", "data"]
            };
            var tt = function(t) {
                function e(t, r, n, i) {
                    let o = t[i++];
                    const s = Number.isFinite(+o),
                        a = i >= t.length;
                    if (o = !o && O.isArray(n) ? n.length : o, a) return O.hasOwnProp(n, o) ? n[o] = [n[o], r] : n[o] = r, !s;
                    n[o] && O.isObject(n[o]) || (n[o] = []);
                    return e(t, r, n[o], i) && O.isArray(n[o]) && (n[o] = function(t) {
                        const e = {},
                            r = Object.keys(t);
                        let n;
                        const i = r.length;
                        let o;
                        for (n = 0; n < i; n++) o = r[n], e[o] = t[o];
                        return e
                    }(n[o])), !s
                }
                if (O.isFormData(t) && O.isFunction(t.entries)) {
                    const r = {};
                    return O.forEachEntry(t, ((t, n) => {
                        e(function(t) {
                            return O.matchAll(/\w+|\[(\w*)]/g, t).map((t => "[]" === t[0] ? "" : t[1] || t[0]))
                        }(t), n, r, 0)
                    })), r
                }
                return null
            };
            var et = J.isStandardBrowserEnv ? {
                write: function(t, e, r, n, i, o) {
                    const s = [];
                    s.push(t + "=" + encodeURIComponent(e)), O.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), O.isString(n) && s.push("path=" + n), O.isString(i) && s.push("domain=" + i), !0 === o && s.push("secure"), document.cookie = s.join("; ")
                },
                read: function(t) {
                    const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                    return e ? decodeURIComponent(e[3]) : null
                },
                remove: function(t) {
                    this.write(t, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            };

            function rt(t, e) {
                return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) ? function(t, e) {
                    return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
                }(t, e) : e
            }
            var nt = J.isStandardBrowserEnv ? function() {
                const t = /(msie|trident)/i.test(navigator.userAgent),
                    e = document.createElement("a");
                let r;

                function n(r) {
                    let n = r;
                    return t && (e.setAttribute("href", n), n = e.href), e.setAttribute("href", n), {
                        href: e.href,
                        protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
                        host: e.host,
                        search: e.search ? e.search.replace(/^\?/, "") : "",
                        hash: e.hash ? e.hash.replace(/^#/, "") : "",
                        hostname: e.hostname,
                        port: e.port,
                        pathname: "/" === e.pathname.charAt(0) ? e.pathname : "/" + e.pathname
                    }
                }
                return r = n(window.location.href),
                    function(t) {
                        const e = O.isString(t) ? n(t) : t;
                        return e.protocol === r.protocol && e.host === r.host
                    }
            }() : function() {
                return !0
            };

            function it(t, e, r) {
                M.call(this, null == t ? "canceled" : t, M.ERR_CANCELED, e, r), this.name = "CanceledError"
            }
            O.inherits(it, M, {
                __CANCEL__: !0
            });
            var ot = it;
            const st = O.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
            const at = Symbol("internals"),
                lt = Symbol("defaults");

            function ut(t) {
                return t && String(t).trim().toLowerCase()
            }

            function ct(t) {
                return !1 === t || null == t ? t : String(t)
            }

            function ht(t, e, r, n) {
                return O.isFunction(n) ? n.call(this, e, r) : O.isString(e) ? O.isString(n) ? -1 !== e.indexOf(n) : O.isRegExp(n) ? n.test(e) : void 0 : void 0
            }

            function dt(t, e) {
                e = e.toLowerCase();
                const r = Object.keys(t);
                let n, i = r.length;
                for (; i-- > 0;)
                    if (n = r[i], e === n.toLowerCase()) return n;
                return null
            }

            function ft(t, e) {
                t && this.set(t), this[lt] = e || null
            }
            Object.assign(ft.prototype, {
                set: function(t, e, r) {
                    const n = this;

                    function i(t, e, r) {
                        const i = ut(e);
                        if (!i) throw new Error("header name must be a non-empty string");
                        const o = dt(n, i);
                        (!o || !0 === r || !1 !== n[o] && !1 !== r) && (t = O.isArray(t) ? t.map(ct) : ct(t), n[o || e] = t)
                    }
                    return O.isPlainObject(t) ? O.forEach(t, ((t, r) => {
                        i(t, r, e)
                    })) : i(e, t, r), this
                },
                get: function(t, e) {
                    if (!(t = ut(t))) return;
                    const r = dt(this, t);
                    if (r) {
                        const t = this[r];
                        if (!e) return t;
                        if (!0 === e) return function(t) {
                            const e = Object.create(null),
                                r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                            let n;
                            for (; n = r.exec(t);) e[n[1]] = n[2];
                            return e
                        }(t);
                        if (O.isFunction(e)) return e.call(this, t, r);
                        if (O.isRegExp(e)) return e.exec(t);
                        throw new TypeError("parser must be boolean|regexp|function")
                    }
                },
                has: function(t, e) {
                    if (t = ut(t)) {
                        const r = dt(this, t);
                        return !(!r || e && !ht(0, this[r], r, e))
                    }
                    return !1
                },
                delete: function(t, e) {
                    const r = this;
                    let n = !1;

                    function i(t) {
                        if (t = ut(t)) {
                            const i = dt(r, t);
                            !i || e && !ht(0, r[i], i, e) || (delete r[i], n = !0)
                        }
                    }
                    return O.isArray(t) ? t.forEach(i) : i(t), n
                },
                clear: function() {
                    return Object.keys(this).forEach(this.delete.bind(this))
                },
                normalize: function(t) {
                    const e = this,
                        r = {};
                    return O.forEach(this, ((n, i) => {
                        const o = dt(r, i);
                        if (o) return e[o] = ct(n), void delete e[i];
                        const s = t ? function(t) {
                            return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ((t, e, r) => e.toUpperCase() + r))
                        }(i) : String(i).trim();
                        s !== i && delete e[i], e[s] = ct(n), r[s] = !0
                    })), this
                },
                toJSON: function() {
                    const t = Object.create(null);
                    return O.forEach(Object.assign({}, this[lt] || null, this), ((e, r) => {
                        null != e && !1 !== e && (t[r] = O.isArray(e) ? e.join(", ") : e)
                    })), t
                }
            }), Object.assign(ft, {
                from: function(t) {
                    return O.isString(t) ? new this((t => {
                        const e = {};
                        let r, n, i;
                        return t && t.split("\n").forEach((function(t) {
                            i = t.indexOf(":"), r = t.substring(0, i).trim().toLowerCase(), n = t.substring(i + 1).trim(), !r || e[r] && st[r] || ("set-cookie" === r ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n)
                        })), e
                    })(t)) : t instanceof this ? t : new this(t)
                },
                accessor: function(t) {
                    const e = (this[at] = this[at] = {
                            accessors: {}
                        }).accessors,
                        r = this.prototype;

                    function n(t) {
                        const n = ut(t);
                        e[n] || (! function(t, e) {
                            const r = O.toCamelCase(" " + e);
                            ["get", "set", "has"].forEach((n => {
                                Object.defineProperty(t, n + r, {
                                    value: function(t, r, i) {
                                        return this[n].call(this, e, t, r, i)
                                    },
                                    configurable: !0
                                })
                            }))
                        }(r, t), e[n] = !0)
                    }
                    return O.isArray(t) ? t.forEach(n) : n(t), this
                }
            }), ft.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]), O.freezeMethods(ft.prototype), O.freezeMethods(ft);
            var pt = ft;
            var mt = function(t, e) {
                t = t || 10;
                const r = new Array(t),
                    n = new Array(t);
                let i, o = 0,
                    s = 0;
                return e = void 0 !== e ? e : 1e3,
                    function(a) {
                        const l = Date.now(),
                            u = n[s];
                        i || (i = l), r[o] = a, n[o] = l;
                        let c = s,
                            h = 0;
                        for (; c !== o;) h += r[c++], c %= t;
                        if (o = (o + 1) % t, o === s && (s = (s + 1) % t), l - i < e) return;
                        const d = u && l - u;
                        return d ? Math.round(1e3 * h / d) : void 0
                    }
            };

            function gt(t, e) {
                let r = 0;
                const n = mt(50, 250);
                return i => {
                    const o = i.loaded,
                        s = i.lengthComputable ? i.total : void 0,
                        a = o - r,
                        l = n(a);
                    r = o;
                    const u = {
                        loaded: o,
                        total: s,
                        progress: s ? o / s : void 0,
                        bytes: a,
                        rate: l || void 0,
                        estimated: l && s && o <= s ? (s - o) / l : void 0
                    };
                    u[e ? "download" : "upload"] = !0, t(u)
                }
            }

            function vt(t) {
                return new Promise((function(e, r) {
                    let n = t.data;
                    const i = pt.from(t.headers).normalize(),
                        o = t.responseType;
                    let s;

                    function a() {
                        t.cancelToken && t.cancelToken.unsubscribe(s), t.signal && t.signal.removeEventListener("abort", s)
                    }
                    O.isFormData(n) && J.isStandardBrowserEnv && i.setContentType(!1);
                    let l = new XMLHttpRequest;
                    if (t.auth) {
                        const e = t.auth.username || "",
                            r = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                        i.set("Authorization", "Basic " + btoa(e + ":" + r))
                    }
                    const u = rt(t.baseURL, t.url);

                    function c() {
                        if (!l) return;
                        const n = pt.from("getAllResponseHeaders" in l && l.getAllResponseHeaders());
                        ! function(t, e, r) {
                            const n = r.config.validateStatus;
                            r.status && n && !n(r.status) ? e(new M("Request failed with status code " + r.status, [M.ERR_BAD_REQUEST, M.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r)) : t(r)
                        }((function(t) {
                            e(t), a()
                        }), (function(t) {
                            r(t), a()
                        }), {
                            data: o && "text" !== o && "json" !== o ? l.response : l.responseText,
                            status: l.status,
                            statusText: l.statusText,
                            headers: n,
                            config: t,
                            request: l
                        }), l = null
                    }
                    if (l.open(t.method.toUpperCase(), Y(u, t.params, t.paramsSerializer), !0), l.timeout = t.timeout, "onloadend" in l ? l.onloadend = c : l.onreadystatechange = function() {
                            l && 4 === l.readyState && (0 !== l.status || l.responseURL && 0 === l.responseURL.indexOf("file:")) && setTimeout(c)
                        }, l.onabort = function() {
                            l && (r(new M("Request aborted", M.ECONNABORTED, t, l)), l = null)
                        }, l.onerror = function() {
                            r(new M("Network Error", M.ERR_NETWORK, t, l)), l = null
                        }, l.ontimeout = function() {
                            let e = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
                            const n = t.transitional || $;
                            t.timeoutErrorMessage && (e = t.timeoutErrorMessage), r(new M(e, n.clarifyTimeoutError ? M.ETIMEDOUT : M.ECONNABORTED, t, l)), l = null
                        }, J.isStandardBrowserEnv) {
                        const e = (t.withCredentials || nt(u)) && t.xsrfCookieName && et.read(t.xsrfCookieName);
                        e && i.set(t.xsrfHeaderName, e)
                    }
                    void 0 === n && i.setContentType(null), "setRequestHeader" in l && O.forEach(i.toJSON(), (function(t, e) {
                        l.setRequestHeader(e, t)
                    })), O.isUndefined(t.withCredentials) || (l.withCredentials = !!t.withCredentials), o && "json" !== o && (l.responseType = t.responseType), "function" === typeof t.onDownloadProgress && l.addEventListener("progress", gt(t.onDownloadProgress, !0)), "function" === typeof t.onUploadProgress && l.upload && l.upload.addEventListener("progress", gt(t.onUploadProgress)), (t.cancelToken || t.signal) && (s = e => {
                        l && (r(!e || e.type ? new ot(null, t, l) : e), l.abort(), l = null)
                    }, t.cancelToken && t.cancelToken.subscribe(s), t.signal && (t.signal.aborted ? s() : t.signal.addEventListener("abort", s)));
                    const h = function(t) {
                        const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
                        return e && e[1] || ""
                    }(u);
                    h && -1 === J.protocols.indexOf(h) ? r(new M("Unsupported protocol " + h + ":", M.ERR_BAD_REQUEST, t)) : l.send(n || null)
                }))
            }
            const yt = {
                http: vt,
                xhr: vt
            };
            var bt = t => {
                    if (O.isString(t)) {
                        const e = yt[t];
                        if (!t) throw Error(O.hasOwnProp(t) ? `Adapter '${t}' is not available in the build` : `Can not resolve adapter '${t}'`);
                        return e
                    }
                    if (!O.isFunction(t)) throw new TypeError("adapter is not a function");
                    return t
                },
                wt = r(4155);
            const xt = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            const St = {
                transitional: $,
                adapter: function() {
                    let t;
                    return "undefined" !== typeof XMLHttpRequest ? t = bt("xhr") : "undefined" !== typeof wt && "process" === O.kindOf(wt) && (t = bt("http")), t
                }(),
                transformRequest: [function(t, e) {
                    const r = e.getContentType() || "",
                        n = r.indexOf("application/json") > -1,
                        i = O.isObject(t);
                    i && O.isHTMLForm(t) && (t = new FormData(t));
                    if (O.isFormData(t)) return n && n ? JSON.stringify(tt(t)) : t;
                    if (O.isArrayBuffer(t) || O.isBuffer(t) || O.isStream(t) || O.isFile(t) || O.isBlob(t)) return t;
                    if (O.isArrayBufferView(t)) return t.buffer;
                    if (O.isURLSearchParams(t)) return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
                    let o;
                    if (i) {
                        if (r.indexOf("application/x-www-form-urlencoded") > -1) return function(t, e) {
                            return W(t, new J.classes.URLSearchParams, Object.assign({
                                visitor: function(t, e, r, n) {
                                    return J.isNode && O.isBuffer(t) ? (this.append(e, t.toString("base64")), !1) : n.defaultVisitor.apply(this, arguments)
                                }
                            }, e))
                        }(t, this.formSerializer).toString();
                        if ((o = O.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                            const e = this.env && this.env.FormData;
                            return W(o ? {
                                "files[]": t
                            } : t, e && new e, this.formSerializer)
                        }
                    }
                    return i || n ? (e.setContentType("application/json", !1), function(t, e, r) {
                        if (O.isString(t)) try {
                            return (e || JSON.parse)(t), O.trim(t)
                        } catch (n) {
                            if ("SyntaxError" !== n.name) throw n
                        }
                        return (r || JSON.stringify)(t)
                    }(t)) : t
                }],
                transformResponse: [function(t) {
                    const e = this.transitional || St.transitional,
                        r = e && e.forcedJSONParsing,
                        n = "json" === this.responseType;
                    if (t && O.isString(t) && (r && !this.responseType || n)) {
                        const r = !(e && e.silentJSONParsing) && n;
                        try {
                            return JSON.parse(t)
                        } catch (i) {
                            if (r) {
                                if ("SyntaxError" === i.name) throw M.from(i, M.ERR_BAD_RESPONSE, this, null, this.response);
                                throw i
                            }
                        }
                    }
                    return t
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                env: {
                    FormData: J.classes.FormData,
                    Blob: J.classes.Blob
                },
                validateStatus: function(t) {
                    return t >= 200 && t < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            O.forEach(["delete", "get", "head"], (function(t) {
                St.headers[t] = {}
            })), O.forEach(["post", "put", "patch"], (function(t) {
                St.headers[t] = O.merge(xt)
            }));
            var Tt = St;

            function _t(t, e) {
                const r = this || Tt,
                    n = e || r,
                    i = pt.from(n.headers);
                let o = n.data;
                return O.forEach(t, (function(t) {
                    o = t.call(r, o, i.normalize(), e ? e.status : void 0)
                })), i.normalize(), o
            }

            function Et(t) {
                return !(!t || !t.__CANCEL__)
            }

            function kt(t) {
                if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new ot
            }

            function At(t) {
                kt(t), t.headers = pt.from(t.headers), t.data = _t.call(t, t.transformRequest);
                return (t.adapter || Tt.adapter)(t).then((function(e) {
                    return kt(t), e.data = _t.call(t, t.transformResponse, e), e.headers = pt.from(e.headers), e
                }), (function(e) {
                    return Et(e) || (kt(t), e && e.response && (e.response.data = _t.call(t, t.transformResponse, e.response), e.response.headers = pt.from(e.response.headers))), Promise.reject(e)
                }))
            }

            function Rt(t, e) {
                e = e || {};
                const r = {};

                function n(t, e) {
                    return O.isPlainObject(t) && O.isPlainObject(e) ? O.merge(t, e) : O.isPlainObject(e) ? O.merge({}, e) : O.isArray(e) ? e.slice() : e
                }

                function i(r) {
                    return O.isUndefined(e[r]) ? O.isUndefined(t[r]) ? void 0 : n(void 0, t[r]) : n(t[r], e[r])
                }

                function o(t) {
                    if (!O.isUndefined(e[t])) return n(void 0, e[t])
                }

                function s(r) {
                    return O.isUndefined(e[r]) ? O.isUndefined(t[r]) ? void 0 : n(void 0, t[r]) : n(void 0, e[r])
                }

                function a(r) {
                    return r in e ? n(t[r], e[r]) : r in t ? n(void 0, t[r]) : void 0
                }
                const l = {
                    url: o,
                    method: o,
                    data: o,
                    baseURL: s,
                    transformRequest: s,
                    transformResponse: s,
                    paramsSerializer: s,
                    timeout: s,
                    timeoutMessage: s,
                    withCredentials: s,
                    adapter: s,
                    responseType: s,
                    xsrfCookieName: s,
                    xsrfHeaderName: s,
                    onUploadProgress: s,
                    onDownloadProgress: s,
                    decompress: s,
                    maxContentLength: s,
                    maxBodyLength: s,
                    beforeRedirect: s,
                    transport: s,
                    httpAgent: s,
                    httpsAgent: s,
                    cancelToken: s,
                    socketPath: s,
                    responseEncoding: s,
                    validateStatus: a
                };
                return O.forEach(Object.keys(t).concat(Object.keys(e)), (function(t) {
                    const e = l[t] || i,
                        n = e(t);
                    O.isUndefined(n) && e !== a || (r[t] = n)
                })), r
            }
            const Ct = "1.0.0",
                Ot = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach(((t, e) => {
                Ot[t] = function(r) {
                    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t
                }
            }));
            const Ut = {};
            Ot.transitional = function(t, e, r) {
                function n(t, e) {
                    return "[Axios v1.0.0] Transitional option '" + t + "'" + e + (r ? ". " + r : "")
                }
                return (r, i, o) => {
                    if (!1 === t) throw new M(n(i, " has been removed" + (e ? " in " + e : "")), M.ERR_DEPRECATED);
                    return e && !Ut[i] && (Ut[i] = !0, console.warn(n(i, " has been deprecated since v" + e + " and will be removed in the near future"))), !t || t(r, i, o)
                }
            };
            var Pt = {
                assertOptions: function(t, e, r) {
                    if ("object" !== typeof t) throw new M("options must be an object", M.ERR_BAD_OPTION_VALUE);
                    const n = Object.keys(t);
                    let i = n.length;
                    for (; i-- > 0;) {
                        const o = n[i],
                            s = e[o];
                        if (s) {
                            const e = t[o],
                                r = void 0 === e || s(e, o, t);
                            if (!0 !== r) throw new M("option " + o + " must be " + r, M.ERR_BAD_OPTION_VALUE)
                        } else if (!0 !== r) throw new M("Unknown option " + o, M.ERR_BAD_OPTION)
                    }
                },
                validators: Ot
            };
            const Dt = Pt.validators;
            class Mt {
                constructor(t) {
                    this.defaults = t, this.interceptors = {
                        request: new X,
                        response: new X
                    }
                }
                request(t, e) {
                    "string" === typeof t ? (e = e || {}).url = t : e = t || {};
                    const r = (e = Rt(this.defaults, e)).transitional;
                    void 0 !== r && Pt.assertOptions(r, {
                        silentJSONParsing: Dt.transitional(Dt.boolean),
                        forcedJSONParsing: Dt.transitional(Dt.boolean),
                        clarifyTimeoutError: Dt.transitional(Dt.boolean)
                    }, !1), e.method = (e.method || this.defaults.method || "get").toLowerCase();
                    const n = e.headers && O.merge(e.headers.common, e.headers[e.method]);
                    n && O.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                        delete e.headers[t]
                    })), e.headers = new pt(e.headers, n);
                    const i = [];
                    let o = !0;
                    this.interceptors.request.forEach((function(t) {
                        "function" === typeof t.runWhen && !1 === t.runWhen(e) || (o = o && t.synchronous, i.unshift(t.fulfilled, t.rejected))
                    }));
                    const s = [];
                    let a;
                    this.interceptors.response.forEach((function(t) {
                        s.push(t.fulfilled, t.rejected)
                    }));
                    let l, u = 0;
                    if (!o) {
                        const t = [At.bind(this), void 0];
                        for (t.unshift.apply(t, i), t.push.apply(t, s), l = t.length, a = Promise.resolve(e); u < l;) a = a.then(t[u++], t[u++]);
                        return a
                    }
                    l = i.length;
                    let c = e;
                    for (u = 0; u < l;) {
                        const t = i[u++],
                            e = i[u++];
                        try {
                            c = t(c)
                        } catch (h) {
                            e.call(this, h);
                            break
                        }
                    }
                    try {
                        a = At.call(this, c)
                    } catch (h) {
                        return Promise.reject(h)
                    }
                    for (u = 0, l = s.length; u < l;) a = a.then(s[u++], s[u++]);
                    return a
                }
                getUri(t) {
                    return Y(rt((t = Rt(this.defaults, t)).baseURL, t.url), t.params, t.paramsSerializer)
                }
            }
            O.forEach(["delete", "get", "head", "options"], (function(t) {
                Mt.prototype[t] = function(e, r) {
                    return this.request(Rt(r || {}, {
                        method: t,
                        url: e,
                        data: (r || {}).data
                    }))
                }
            })), O.forEach(["post", "put", "patch"], (function(t) {
                function e(e) {
                    return function(r, n, i) {
                        return this.request(Rt(i || {}, {
                            method: t,
                            headers: e ? {
                                "Content-Type": "multipart/form-data"
                            } : {},
                            url: r,
                            data: n
                        }))
                    }
                }
                Mt.prototype[t] = e(), Mt.prototype[t + "Form"] = e(!0)
            }));
            var Ft = Mt;
            class Bt {
                constructor(t) {
                    if ("function" !== typeof t) throw new TypeError("executor must be a function.");
                    let e;
                    this.promise = new Promise((function(t) {
                        e = t
                    }));
                    const r = this;
                    this.promise.then((t => {
                        if (!r._listeners) return;
                        let e = r._listeners.length;
                        for (; e-- > 0;) r._listeners[e](t);
                        r._listeners = null
                    })), this.promise.then = t => {
                        let e;
                        const n = new Promise((t => {
                            r.subscribe(t), e = t
                        })).then(t);
                        return n.cancel = function() {
                            r.unsubscribe(e)
                        }, n
                    }, t((function(t, n, i) {
                        r.reason || (r.reason = new ot(t, n, i), e(r.reason))
                    }))
                }
                throwIfRequested() {
                    if (this.reason) throw this.reason
                }
                subscribe(t) {
                    this.reason ? t(this.reason) : this._listeners ? this._listeners.push(t) : this._listeners = [t]
                }
                unsubscribe(t) {
                    if (!this._listeners) return;
                    const e = this._listeners.indexOf(t); - 1 !== e && this._listeners.splice(e, 1)
                }
                static source() {
                    let t;
                    return {
                        token: new Bt((function(e) {
                            t = e
                        })),
                        cancel: t
                    }
                }
            }
            var Lt = Bt;
            const jt = function t(e) {
                const r = new Ft(e),
                    i = n(Ft.prototype.request, r);
                return O.extend(i, Ft.prototype, r, {
                    allOwnKeys: !0
                }), O.extend(i, r, null, {
                    allOwnKeys: !0
                }), i.create = function(r) {
                    return t(Rt(e, r))
                }, i
            }(Tt);
            jt.Axios = Ft, jt.CanceledError = ot, jt.CancelToken = Lt, jt.isCancel = Et, jt.VERSION = Ct, jt.toFormData = W, jt.AxiosError = M, jt.Cancel = jt.CanceledError, jt.all = function(t) {
                return Promise.all(t)
            }, jt.spread = function(t) {
                return function(e) {
                    return t.apply(null, e)
                }
            }, jt.isAxiosError = function(t) {
                return O.isObject(t) && !0 === t.isAxiosError
            }, jt.formToJSON = t => tt(O.isHTMLForm(t) ? new FormData(t) : t);
            var It = jt
        },
        415: function(t, e, r) {
            "use strict";
            r.d(e, {
                E: function() {
                    return _s
                }
            });
            var n = r(7294);
            const i = (0, n.createContext)({
                    transformPagePoint: t => t,
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                o = (0, n.createContext)({});
            const s = (0, n.createContext)(null),
                a = "undefined" !== typeof document,
                l = a ? n.useLayoutEffect : n.useEffect,
                u = (0, n.createContext)({
                    strict: !1
                });

            function c(t, e, r, a) {
                const c = (0, n.useContext)(o).visualElement,
                    h = (0, n.useContext)(u),
                    d = (0, n.useContext)(s),
                    f = (0, n.useContext)(i).reducedMotion,
                    p = (0, n.useRef)(void 0);
                a = a || h.renderer, !p.current && a && (p.current = a(t, {
                    visualState: e,
                    parent: c,
                    props: r,
                    presenceId: d ? d.id : void 0,
                    blockInitialAnimation: !!d && !1 === d.initial,
                    reducedMotionConfig: f
                }));
                const m = p.current;
                return l((() => {
                    m && m.syncRender()
                })), (0, n.useEffect)((() => {
                    m && m.animationState && m.animationState.animateChanges()
                })), l((() => () => m && m.notifyUnmount()), []), m
            }

            function h(t) {
                return "object" === typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function d(t) {
                return "string" === typeof t || Array.isArray(t)
            }

            function f(t) {
                return "object" === typeof t && "function" === typeof t.start
            }
            const p = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

            function m(t) {
                return f(t.animate) || p.some((e => d(t[e])))
            }

            function g(t) {
                return Boolean(m(t) || t.variants)
            }

            function v(t) {
                const {
                    initial: e,
                    animate: r
                } = function(t, e) {
                    if (m(t)) {
                        const {
                            initial: e,
                            animate: r
                        } = t;
                        return {
                            initial: !1 === e || d(e) ? e : void 0,
                            animate: d(r) ? r : void 0
                        }
                    }
                    return !1 !== t.inherit ? e : {}
                }(t, (0, n.useContext)(o));
                return (0, n.useMemo)((() => ({
                    initial: e,
                    animate: r
                })), [y(e), y(r)])
            }

            function y(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            const b = t => ({
                    isEnabled: e => t.some((t => !!e[t]))
                }),
                w = {
                    measureLayout: b(["layout", "layoutId", "drag"]),
                    animation: b(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
                    exit: b(["exit"]),
                    drag: b(["drag", "dragControls"]),
                    focus: b(["whileFocus"]),
                    hover: b(["whileHover", "onHoverStart", "onHoverEnd"]),
                    tap: b(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
                    pan: b(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
                    inView: b(["whileInView", "onViewportEnter", "onViewportLeave"])
                };

            function x(t) {
                const e = (0, n.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
            const S = {
                hasAnimatedSinceResize: !0,
                hasEverUpdated: !1
            };
            let T = 1;
            const _ = (0, n.createContext)({});
            class E extends n.Component {
                getSnapshotBeforeUpdate() {
                    const {
                        visualElement: t,
                        props: e
                    } = this.props;
                    return t && t.setProps(e), null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }
            const k = (0, n.createContext)({}),
                A = Symbol.for("motionComponentSymbol");

            function R({
                preloadedFeatures: t,
                createVisualElement: e,
                projectionNodeConstructor: r,
                useRender: s,
                useVisualState: l,
                Component: d
            }) {
                t && function(t) {
                    for (const e in t) "projectionNodeConstructor" === e ? w.projectionNodeConstructor = t[e] : w[e].Component = t[e]
                }(t);
                const f = (0, n.forwardRef)((function(f, p) {
                    const m = { ...(0, n.useContext)(i),
                            ...f,
                            layoutId: C(f)
                        },
                        {
                            isStatic: g
                        } = m;
                    let y = null;
                    const b = v(f),
                        _ = g ? void 0 : x((() => {
                            if (S.hasEverUpdated) return T++
                        })),
                        A = l(f, g);
                    if (!g && a) {
                        b.visualElement = c(d, A, m, e);
                        const i = (0, n.useContext)(u).strict,
                            o = (0, n.useContext)(k);
                        b.visualElement && (y = b.visualElement.loadFeatures(m, i, t, _, r || w.projectionNodeConstructor, o))
                    }
                    return n.createElement(E, {
                        visualElement: b.visualElement,
                        props: m
                    }, y, n.createElement(o.Provider, {
                        value: b
                    }, s(d, f, _, function(t, e, r) {
                        return (0, n.useCallback)((n => {
                            n && t.mount && t.mount(n), e && (n ? e.mount(n) : e.unmount()), r && ("function" === typeof r ? r(n) : h(r) && (r.current = n))
                        }), [e])
                    }(A, b.visualElement, p), A, g, b.visualElement)))
                }));
                return f[A] = d, f
            }

            function C({
                layoutId: t
            }) {
                const e = (0, n.useContext)(_).id;
                return e && void 0 !== t ? e + "-" + t : t
            }

            function O(t) {
                function e(e, r = {}) {
                    return R(t(e, r))
                }
                if ("undefined" === typeof Proxy) return e;
                const r = new Map;
                return new Proxy(e, {
                    get: (t, n) => (r.has(n) || r.set(n, e(n)), r.get(n))
                })
            }
            const U = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];

            function P(t) {
                return "string" === typeof t && !t.includes("-") && !!(U.indexOf(t) > -1 || /[A-Z]/.test(t))
            }
            const D = {};
            const M = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                F = new Set(M);

            function B(t, {
                layout: e,
                layoutId: r
            }) {
                return F.has(t) || t.startsWith("origin") || (e || void 0 !== r) && (!!D[t] || "opacity" === t)
            }
            const L = t => !!(null === t || void 0 === t ? void 0 : t.getVelocity),
                j = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                I = (t, e) => M.indexOf(t) - M.indexOf(e);

            function V(t) {
                return t.startsWith("--")
            }
            const W = (t, e) => e && "number" === typeof t ? e.transform(t) : t,
                z = (t, e) => r => Math.max(Math.min(r, e), t),
                N = t => t % 1 ? Number(t.toFixed(5)) : t,
                G = /(-)?([\d]*\.?[\d])+/g,
                q = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                H = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function Y(t) {
                return "string" === typeof t
            }
            const X = t => ({
                    test: e => Y(e) && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                $ = X("deg"),
                K = X("%"),
                Z = X("px"),
                Q = X("vh"),
                J = X("vw"),
                tt = Object.assign(Object.assign({}, K), {
                    parse: t => K.parse(t) / 100,
                    transform: t => K.transform(100 * t)
                }),
                et = {
                    test: t => "number" === typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                rt = Object.assign(Object.assign({}, et), {
                    transform: z(0, 1)
                }),
                nt = Object.assign(Object.assign({}, et), {
                    default: 1
                }),
                it = { ...et,
                    transform: Math.round
                },
                ot = {
                    borderWidth: Z,
                    borderTopWidth: Z,
                    borderRightWidth: Z,
                    borderBottomWidth: Z,
                    borderLeftWidth: Z,
                    borderRadius: Z,
                    radius: Z,
                    borderTopLeftRadius: Z,
                    borderTopRightRadius: Z,
                    borderBottomRightRadius: Z,
                    borderBottomLeftRadius: Z,
                    width: Z,
                    maxWidth: Z,
                    height: Z,
                    maxHeight: Z,
                    size: Z,
                    top: Z,
                    right: Z,
                    bottom: Z,
                    left: Z,
                    padding: Z,
                    paddingTop: Z,
                    paddingRight: Z,
                    paddingBottom: Z,
                    paddingLeft: Z,
                    margin: Z,
                    marginTop: Z,
                    marginRight: Z,
                    marginBottom: Z,
                    marginLeft: Z,
                    rotate: $,
                    rotateX: $,
                    rotateY: $,
                    rotateZ: $,
                    scale: nt,
                    scaleX: nt,
                    scaleY: nt,
                    scaleZ: nt,
                    skew: $,
                    skewX: $,
                    skewY: $,
                    distance: Z,
                    translateX: Z,
                    translateY: Z,
                    translateZ: Z,
                    x: Z,
                    y: Z,
                    z: Z,
                    perspective: Z,
                    transformPerspective: Z,
                    opacity: rt,
                    originX: tt,
                    originY: tt,
                    originZ: Z,
                    zIndex: it,
                    fillOpacity: rt,
                    strokeOpacity: rt,
                    numOctaves: it
                };

            function st(t, e, r, n) {
                const {
                    style: i,
                    vars: o,
                    transform: s,
                    transformKeys: a,
                    transformOrigin: l
                } = t;
                a.length = 0;
                let u = !1,
                    c = !1,
                    h = !0;
                for (const d in e) {
                    const t = e[d];
                    if (V(d)) {
                        o[d] = t;
                        continue
                    }
                    const r = ot[d],
                        n = W(t, r);
                    if (F.has(d)) {
                        if (u = !0, s[d] = n, a.push(d), !h) continue;
                        t !== (r.default || 0) && (h = !1)
                    } else d.startsWith("origin") ? (c = !0, l[d] = n) : i[d] = n
                }
                if (e.transform || (u || n ? i.transform = function({
                        transform: t,
                        transformKeys: e
                    }, {
                        enableHardwareAcceleration: r = !0,
                        allowTransformNone: n = !0
                    }, i, o) {
                        let s = "";
                        e.sort(I);
                        for (const a of e) s += `${j[a]||a}(${t[a]}) `;
                        return r && !t.z && (s += "translateZ(0)"), s = s.trim(), o ? s = o(t, i ? "" : s) : n && i && (s = "none"), s
                    }(t, r, h, n) : i.transform && (i.transform = "none")), c) {
                    const {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: r = 0
                    } = l;
                    i.transformOrigin = `${t} ${e} ${r}`
                }
            }
            const at = () => ({
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {}
            });

            function lt(t, e, r) {
                for (const n in e) L(e[n]) || B(n, r) || (t[n] = e[n])
            }

            function ut(t, e, r) {
                const i = {};
                return lt(i, t.style || {}, t), Object.assign(i, function({
                    transformTemplate: t
                }, e, r) {
                    return (0, n.useMemo)((() => {
                        const n = {
                            style: {},
                            transform: {},
                            transformKeys: [],
                            transformOrigin: {},
                            vars: {}
                        };
                        return st(n, e, {
                            enableHardwareAcceleration: !r
                        }, t), Object.assign({}, n.vars, n.style)
                    }), [e])
                }(t, e, r)), t.transformValues ? t.transformValues(i) : i
            }

            function ct(t, e, r) {
                const n = {},
                    i = ut(t, e, r);
                return t.drag && !1 !== t.dragListener && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), n.style = i, n
            }
            const ht = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

            function dt(t) {
                return ht.has(t)
            }
            let ft = t => !dt(t);
            try {
                (pt = require("@emotion/is-prop-valid").default) && (ft = t => t.startsWith("on") ? !dt(t) : pt(t))
            } catch (Es) {}
            var pt;

            function mt(t, e, r) {
                return "string" === typeof t ? t : Z.transform(e + r * t)
            }
            const gt = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                vt = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function yt(t, {
                attrX: e,
                attrY: r,
                originX: n,
                originY: i,
                pathLength: o,
                pathSpacing: s = 1,
                pathOffset: a = 0,
                ...l
            }, u, c) {
                st(t, l, u, c), t.attrs = t.style, t.style = {};
                const {
                    attrs: h,
                    style: d,
                    dimensions: f
                } = t;
                h.transform && (f && (d.transform = h.transform), delete h.transform), f && (void 0 !== n || void 0 !== i || d.transform) && (d.transformOrigin = function(t, e, r) {
                    return `${mt(e,t.x,t.width)} ${mt(r,t.y,t.height)}`
                }(f, void 0 !== n ? n : .5, void 0 !== i ? i : .5)), void 0 !== e && (h.x = e), void 0 !== r && (h.y = r), void 0 !== o && function(t, e, r = 1, n = 0, i = !0) {
                    t.pathLength = 1;
                    const o = i ? gt : vt;
                    t[o.offset] = Z.transform(-n);
                    const s = Z.transform(e),
                        a = Z.transform(r);
                    t[o.array] = `${s} ${a}`
                }(h, o, s, a, !1)
            }
            const bt = () => ({
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {},
                attrs: {}
            });

            function wt(t, e) {
                const r = (0, n.useMemo)((() => {
                    const r = {
                        style: {},
                        transform: {},
                        transformKeys: [],
                        transformOrigin: {},
                        vars: {},
                        attrs: {}
                    };
                    return yt(r, e, {
                        enableHardwareAcceleration: !1
                    }, t.transformTemplate), { ...r.attrs,
                        style: { ...r.style
                        }
                    }
                }), [e]);
                if (t.style) {
                    const e = {};
                    lt(e, t.style, t), r.style = { ...e,
                        ...r.style
                    }
                }
                return r
            }

            function xt(t = !1) {
                return (e, r, i, o, {
                    latestValues: s
                }, a) => {
                    const l = (P(e) ? wt : ct)(r, s, a),
                        u = function(t, e, r) {
                            const n = {};
                            for (const i in t)(ft(i) || !0 === r && dt(i) || !e && !dt(i) || t.draggable && i.startsWith("onDrag")) && (n[i] = t[i]);
                            return n
                        }(r, "string" === typeof e, t),
                        c = { ...u,
                            ...l,
                            ref: o
                        };
                    return i && (c["data-projection-id"] = i), (0, n.createElement)(e, c)
                }
            }
            const St = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

            function Tt(t, {
                style: e,
                vars: r
            }, n, i) {
                Object.assign(t.style, e, i && i.getProjectionStyles(n));
                for (const o in r) t.style.setProperty(o, r[o])
            }
            const _t = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);

            function Et(t, e, r, n) {
                Tt(t, e, void 0, n);
                for (const i in e.attrs) t.setAttribute(_t.has(i) ? i : St(i), e.attrs[i])
            }

            function kt(t) {
                const {
                    style: e
                } = t, r = {};
                for (const n in e)(L(e[n]) || B(n, t)) && (r[n] = e[n]);
                return r
            }

            function At(t) {
                const e = kt(t);
                for (const r in t)
                    if (L(t[r])) {
                        e["x" === r || "y" === r ? "attr" + r.toUpperCase() : r] = t[r]
                    }
                return e
            }

            function Rt(t, e, r, n = {}, i = {}) {
                return "function" === typeof e && (e = e(void 0 !== r ? r : t.custom, n, i)), "string" === typeof e && (e = t.variants && t.variants[e]), "function" === typeof e && (e = e(void 0 !== r ? r : t.custom, n, i)), e
            }
            const Ct = t => Array.isArray(t),
                Ot = t => Ct(t) ? t[t.length - 1] || 0 : t;

            function Ut(t) {
                const e = L(t) ? t.get() : t;
                return r = e, Boolean(r && "object" === typeof r && r.mix && r.toValue) ? e.toValue() : e;
                var r
            }
            const Pt = t => (e, r) => {
                const i = (0, n.useContext)(o),
                    a = (0, n.useContext)(s),
                    l = () => function({
                        scrapeMotionValuesFromProps: t,
                        createRenderState: e,
                        onMount: r
                    }, n, i, o) {
                        const s = {
                            latestValues: Dt(n, i, o, t),
                            renderState: e()
                        };
                        return r && (s.mount = t => r(n, t, s)), s
                    }(t, e, i, a);
                return r ? l() : x(l)
            };

            function Dt(t, e, r, n) {
                const i = {},
                    o = n(t);
                for (const d in o) i[d] = Ut(o[d]);
                let {
                    initial: s,
                    animate: a
                } = t;
                const l = m(t),
                    u = g(t);
                e && u && !l && !1 !== t.inherit && (void 0 === s && (s = e.initial), void 0 === a && (a = e.animate));
                let c = !!r && !1 === r.initial;
                c = c || !1 === s;
                const h = c ? a : s;
                if (h && "boolean" !== typeof h && !f(h)) {
                    (Array.isArray(h) ? h : [h]).forEach((e => {
                        const r = Rt(t, e);
                        if (!r) return;
                        const {
                            transitionEnd: n,
                            transition: o,
                            ...s
                        } = r;
                        for (const t in s) {
                            let e = s[t];
                            if (Array.isArray(e)) {
                                e = e[c ? e.length - 1 : 0]
                            }
                            null !== e && (i[t] = e)
                        }
                        for (const t in n) i[t] = n[t]
                    }))
                }
                return i
            }
            const Mt = {
                    useVisualState: Pt({
                        scrapeMotionValuesFromProps: At,
                        createRenderState: bt,
                        onMount: (t, e, {
                            renderState: r,
                            latestValues: n
                        }) => {
                            try {
                                r.dimensions = "function" === typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                            } catch (i) {
                                r.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            yt(r, n, {
                                enableHardwareAcceleration: !1
                            }, t.transformTemplate), Et(e, r)
                        }
                    })
                },
                Ft = {
                    useVisualState: Pt({
                        scrapeMotionValuesFromProps: kt,
                        createRenderState: at
                    })
                };
            var Bt;

            function Lt(t, e, r, n = {
                passive: !0
            }) {
                return t.addEventListener(e, r, n), () => t.removeEventListener(e, r)
            }

            function jt(t, e, r, i) {
                (0, n.useEffect)((() => {
                    const n = t.current;
                    if (r && n) return Lt(n, e, r, i)
                }), [t, e, r, i])
            }

            function It(t) {
                return "undefined" !== typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
            }

            function Vt(t) {
                return !!t.touches
            }! function(t) {
                t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit"
            }(Bt || (Bt = {}));
            const Wt = {
                pageX: 0,
                pageY: 0
            };

            function zt(t, e = "page") {
                const r = t.touches[0] || t.changedTouches[0] || Wt;
                return {
                    x: r[e + "X"],
                    y: r[e + "Y"]
                }
            }

            function Nt(t, e = "page") {
                return {
                    x: t[e + "X"],
                    y: t[e + "Y"]
                }
            }

            function Gt(t, e = "page") {
                return {
                    point: Vt(t) ? zt(t, e) : Nt(t, e)
                }
            }
            const qt = (t, e = !1) => {
                    const r = e => t(e, Gt(e));
                    return e ? (n = r, t => {
                        const e = t instanceof MouseEvent;
                        (!e || e && 0 === t.button) && n(t)
                    }) : r;
                    var n
                },
                Ht = {
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointercancel: "mousecancel",
                    pointerover: "mouseover",
                    pointerout: "mouseout",
                    pointerenter: "mouseenter",
                    pointerleave: "mouseleave"
                },
                Yt = {
                    pointerdown: "touchstart",
                    pointermove: "touchmove",
                    pointerup: "touchend",
                    pointercancel: "touchcancel"
                };

            function Xt(t) {
                return a && null === window.onpointerdown ? t : a && null === window.ontouchstart ? Yt[t] : a && null === window.onmousedown ? Ht[t] : t
            }

            function $t(t, e, r, n) {
                return Lt(t, Xt(e), qt(r, "pointerdown" === e), n)
            }

            function Kt(t, e, r, n) {
                return jt(t, Xt(e), r && qt(r, "pointerdown" === e), n)
            }

            function Zt(t) {
                let e = null;
                return () => {
                    const r = () => {
                        e = null
                    };
                    return null === e && (e = t, r)
                }
            }
            const Qt = Zt("dragHorizontal"),
                Jt = Zt("dragVertical");

            function te(t) {
                let e = !1;
                if ("y" === t) e = Jt();
                else if ("x" === t) e = Qt();
                else {
                    const t = Qt(),
                        r = Jt();
                    t && r ? e = () => {
                        t(), r()
                    } : (t && t(), r && r())
                }
                return e
            }

            function ee() {
                const t = te(!0);
                return !t || (t(), !1)
            }

            function re(t, e, r) {
                return (n, i) => {
                    It(n) && !ee() && (t.animationState && t.animationState.setActive(Bt.Hover, e), r && r(n, i))
                }
            }
            const ne = (t, e) => !!e && (t === e || ne(t, e.parentElement));

            function ie(t) {
                return (0, n.useEffect)((() => () => t()), [])
            }
            const oe = (t, e) => r => e(t(r)),
                se = (...t) => t.reduce(oe);
            var ae = r(4155);
            const le = ("undefined" === typeof ae || ae.env, "production"),
                ue = new Set;
            const ce = new WeakMap,
                he = new WeakMap,
                de = t => {
                    const e = ce.get(t.target);
                    e && e(t)
                },
                fe = t => {
                    t.forEach(de)
                };

            function pe(t, e, r) {
                const n = function({
                    root: t,
                    ...e
                }) {
                    const r = t || document;
                    he.has(r) || he.set(r, {});
                    const n = he.get(r),
                        i = JSON.stringify(e);
                    return n[i] || (n[i] = new IntersectionObserver(fe, {
                        root: t,
                        ...e
                    })), n[i]
                }(e);
                return ce.set(t, r), n.observe(t), () => {
                    ce.delete(t), n.unobserve(t)
                }
            }
            const me = {
                some: 0,
                all: 1
            };

            function ge(t, e, r, {
                root: i,
                margin: o,
                amount: s = "some",
                once: a
            }) {
                (0, n.useEffect)((() => {
                    if (!t) return;
                    const n = {
                        root: null === i || void 0 === i ? void 0 : i.current,
                        rootMargin: o,
                        threshold: "number" === typeof s ? s : me[s]
                    };
                    return pe(r.getInstance(), n, (t => {
                        const {
                            isIntersecting: n
                        } = t;
                        if (e.isInView === n) return;
                        if (e.isInView = n, a && !n && e.hasEnteredView) return;
                        n && (e.hasEnteredView = !0), r.animationState && r.animationState.setActive(Bt.InView, n);
                        const i = r.getProps(),
                            o = n ? i.onViewportEnter : i.onViewportLeave;
                        o && o(t)
                    }))
                }), [t, i, o, s])
            }

            function ve(t, e, r, {
                fallback: i = !0
            }) {
                (0, n.useEffect)((() => {
                    var n, o;
                    t && i && ("production" !== le && (n = "IntersectionObserver not available on this device. whileInView animations will trigger on mount.", !1 || ue.has(n) || (console.warn(n), o && console.warn(o), ue.add(n))), requestAnimationFrame((() => {
                        e.hasEnteredView = !0;
                        const {
                            onViewportEnter: t
                        } = r.getProps();
                        t && t(null), r.animationState && r.animationState.setActive(Bt.InView, !0)
                    })))
                }), [t])
            }
            const ye = t => e => (t(e), null),
                be = {
                    inView: ye((function({
                        visualElement: t,
                        whileInView: e,
                        onViewportEnter: r,
                        onViewportLeave: i,
                        viewport: o = {}
                    }) {
                        const s = (0, n.useRef)({
                            hasEnteredView: !1,
                            isInView: !1
                        });
                        let a = Boolean(e || r || i);
                        o.once && s.current.hasEnteredView && (a = !1), ("undefined" === typeof IntersectionObserver ? ve : ge)(a, s.current, t, o)
                    })),
                    tap: ye((function({
                        onTap: t,
                        onTapStart: e,
                        onTapCancel: r,
                        whileTap: i,
                        visualElement: o
                    }) {
                        const s = t || e || r || i,
                            a = (0, n.useRef)(!1),
                            l = (0, n.useRef)(null),
                            u = {
                                passive: !(e || t || r || p)
                            };

                        function c() {
                            l.current && l.current(), l.current = null
                        }

                        function h() {
                            return c(), a.current = !1, o.animationState && o.animationState.setActive(Bt.Tap, !1), !ee()
                        }

                        function d(e, n) {
                            h() && (ne(o.getInstance(), e.target) ? t && t(e, n) : r && r(e, n))
                        }

                        function f(t, e) {
                            h() && r && r(t, e)
                        }

                        function p(t, r) {
                            c(), a.current || (a.current = !0, l.current = se($t(window, "pointerup", d, u), $t(window, "pointercancel", f, u)), o.animationState && o.animationState.setActive(Bt.Tap, !0), e && e(t, r))
                        }
                        Kt(o, "pointerdown", s ? p : void 0, u), ie(c)
                    })),
                    focus: ye((function({
                        whileFocus: t,
                        visualElement: e
                    }) {
                        const {
                            animationState: r
                        } = e;
                        jt(e, "focus", t ? () => {
                            r && r.setActive(Bt.Focus, !0)
                        } : void 0), jt(e, "blur", t ? () => {
                            r && r.setActive(Bt.Focus, !1)
                        } : void 0)
                    })),
                    hover: ye((function({
                        onHoverStart: t,
                        onHoverEnd: e,
                        whileHover: r,
                        visualElement: n
                    }) {
                        Kt(n, "pointerenter", t || r ? re(n, !0, t) : void 0, {
                            passive: !t
                        }), Kt(n, "pointerleave", e || r ? re(n, !1, e) : void 0, {
                            passive: !e
                        })
                    }))
                };

            function we() {
                const t = (0, n.useContext)(s);
                if (null === t) return [!0, null];
                const {
                    isPresent: e,
                    onExitComplete: r,
                    register: i
                } = t, o = (0, n.useId)();
                (0, n.useEffect)((() => i(o)), []);
                return !e && r ? [!1, () => r && r(o)] : [!0]
            }

            function xe(t, e) {
                if (!Array.isArray(e)) return !1;
                const r = e.length;
                if (r !== t.length) return !1;
                for (let n = 0; n < r; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
            var Se = r(655);
            const Te = (t, e, r) => Math.min(Math.max(r, t), e),
                _e = .001;

            function Ee({
                duration: t = 800,
                bounce: e = .25,
                velocity: r = 0,
                mass: n = 1
            }) {
                let i, o, s = 1 - e;
                s = Te(.05, 1, s), t = Te(.01, 10, t / 1e3), s < 1 ? (i = e => {
                    const n = e * s,
                        i = n * t,
                        o = n - r,
                        a = ke(e, s),
                        l = Math.exp(-i);
                    return _e - o / a * l
                }, o = e => {
                    const n = e * s * t,
                        o = n * r + r,
                        a = Math.pow(s, 2) * Math.pow(e, 2) * t,
                        l = Math.exp(-n),
                        u = ke(Math.pow(e, 2), s);
                    return (-i(e) + _e > 0 ? -1 : 1) * ((o - a) * l) / u
                }) : (i = e => Math.exp(-e * t) * ((e - r) * t + 1) - .001, o = e => Math.exp(-e * t) * (t * t * (r - e)));
                const a = function(t, e, r) {
                    let n = r;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n
                }(i, o, 5 / t);
                if (t *= 1e3, isNaN(a)) return {
                    stiffness: 100,
                    damping: 10,
                    duration: t
                }; {
                    const e = Math.pow(a, 2) * n;
                    return {
                        stiffness: e,
                        damping: 2 * s * Math.sqrt(n * e),
                        duration: t
                    }
                }
            }

            function ke(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            const Ae = ["duration", "bounce"],
                Re = ["stiffness", "damping", "mass"];

            function Ce(t, e) {
                return e.some((e => void 0 !== t[e]))
            }

            function Oe(t) {
                var {
                    from: e = 0,
                    to: r = 1,
                    restSpeed: n = 2,
                    restDelta: i
                } = t, o = (0, Se.__rest)(t, ["from", "to", "restSpeed", "restDelta"]);
                const s = {
                    done: !1,
                    value: e
                };
                let {
                    stiffness: a,
                    damping: l,
                    mass: u,
                    velocity: c,
                    duration: h,
                    isResolvedFromDuration: d
                } = function(t) {
                    let e = Object.assign({
                        velocity: 0,
                        stiffness: 100,
                        damping: 10,
                        mass: 1,
                        isResolvedFromDuration: !1
                    }, t);
                    if (!Ce(t, Re) && Ce(t, Ae)) {
                        const r = Ee(t);
                        e = Object.assign(Object.assign(Object.assign({}, e), r), {
                            velocity: 0,
                            mass: 1
                        }), e.isResolvedFromDuration = !0
                    }
                    return e
                }(o), f = Ue, p = Ue;

                function m() {
                    const t = c ? -c / 1e3 : 0,
                        n = r - e,
                        o = l / (2 * Math.sqrt(a * u)),
                        s = Math.sqrt(a / u) / 1e3;
                    if (void 0 === i && (i = Math.min(Math.abs(r - e) / 100, .4)), o < 1) {
                        const e = ke(s, o);
                        f = i => {
                            const a = Math.exp(-o * s * i);
                            return r - a * ((t + o * s * n) / e * Math.sin(e * i) + n * Math.cos(e * i))
                        }, p = r => {
                            const i = Math.exp(-o * s * r);
                            return o * s * i * (Math.sin(e * r) * (t + o * s * n) / e + n * Math.cos(e * r)) - i * (Math.cos(e * r) * (t + o * s * n) - e * n * Math.sin(e * r))
                        }
                    } else if (1 === o) f = e => r - Math.exp(-s * e) * (n + (t + s * n) * e);
                    else {
                        const e = s * Math.sqrt(o * o - 1);
                        f = i => {
                            const a = Math.exp(-o * s * i),
                                l = Math.min(e * i, 300);
                            return r - a * ((t + o * s * n) * Math.sinh(l) + e * n * Math.cosh(l)) / e
                        }
                    }
                }
                return m(), {
                    next: t => {
                        const e = f(t);
                        if (d) s.done = t >= h;
                        else {
                            const o = 1e3 * p(t),
                                a = Math.abs(o) <= n,
                                l = Math.abs(r - e) <= i;
                            s.done = a && l
                        }
                        return s.value = s.done ? r : e, s
                    },
                    flipTarget: () => {
                        c = -c, [e, r] = [r, e], m()
                    }
                }
            }
            Oe.needsInterpolation = (t, e) => "string" === typeof t || "string" === typeof e;
            const Ue = t => 0,
                Pe = (t, e, r) => {
                    const n = e - t;
                    return 0 === n ? 1 : (r - t) / n
                },
                De = (t, e, r) => -r * t + r * e + t,
                Me = (t, e) => r => Boolean(Y(r) && H.test(r) && r.startsWith(t) || e && Object.prototype.hasOwnProperty.call(r, e)),
                Fe = (t, e, r) => n => {
                    if (!Y(n)) return n;
                    const [i, o, s, a] = n.match(G);
                    return {
                        [t]: parseFloat(i),
                        [e]: parseFloat(o),
                        [r]: parseFloat(s),
                        alpha: void 0 !== a ? parseFloat(a) : 1
                    }
                },
                Be = z(0, 255),
                Le = Object.assign(Object.assign({}, et), {
                    transform: t => Math.round(Be(t))
                }),
                je = {
                    test: Me("rgb", "red"),
                    parse: Fe("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: r,
                        alpha: n = 1
                    }) => "rgba(" + Le.transform(t) + ", " + Le.transform(e) + ", " + Le.transform(r) + ", " + N(rt.transform(n)) + ")"
                };
            const Ie = {
                    test: Me("#"),
                    parse: function(t) {
                        let e = "",
                            r = "",
                            n = "",
                            i = "";
                        return t.length > 5 ? (e = t.substr(1, 2), r = t.substr(3, 2), n = t.substr(5, 2), i = t.substr(7, 2)) : (e = t.substr(1, 1), r = t.substr(2, 1), n = t.substr(3, 1), i = t.substr(4, 1), e += e, r += r, n += n, i += i), {
                            red: parseInt(e, 16),
                            green: parseInt(r, 16),
                            blue: parseInt(n, 16),
                            alpha: i ? parseInt(i, 16) / 255 : 1
                        }
                    },
                    transform: je.transform
                },
                Ve = {
                    test: Me("hsl", "hue"),
                    parse: Fe("hue", "saturation", "lightness"),
                    transform: ({
                        hue: t,
                        saturation: e,
                        lightness: r,
                        alpha: n = 1
                    }) => "hsla(" + Math.round(t) + ", " + K.transform(N(e)) + ", " + K.transform(N(r)) + ", " + N(rt.transform(n)) + ")"
                };

            function We(t, e, r) {
                return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
            }

            function ze({
                hue: t,
                saturation: e,
                lightness: r,
                alpha: n
            }) {
                t /= 360, r /= 100;
                let i = 0,
                    o = 0,
                    s = 0;
                if (e /= 100) {
                    const n = r < .5 ? r * (1 + e) : r + e - r * e,
                        a = 2 * r - n;
                    i = We(a, n, t + 1 / 3), o = We(a, n, t), s = We(a, n, t - 1 / 3)
                } else i = o = s = r;
                return {
                    red: Math.round(255 * i),
                    green: Math.round(255 * o),
                    blue: Math.round(255 * s),
                    alpha: n
                }
            }
            const Ne = (t, e, r) => {
                    const n = t * t,
                        i = e * e;
                    return Math.sqrt(Math.max(0, r * (i - n) + n))
                },
                Ge = [Ie, je, Ve],
                qe = t => Ge.find((e => e.test(t))),
                He = t => `'${t}' is not an animatable color. Use the equivalent color code instead.`,
                Ye = (t, e) => {
                    let r = qe(t),
                        n = qe(e);
                    He(t), He(e);
                    let i = r.parse(t),
                        o = n.parse(e);
                    r === Ve && (i = ze(i), r = je), n === Ve && (o = ze(o), n = je);
                    const s = Object.assign({}, i);
                    return t => {
                        for (const e in s) "alpha" !== e && (s[e] = Ne(i[e], o[e], t));
                        return s.alpha = De(i.alpha, o.alpha, t), r.transform(s)
                    }
                },
                Xe = {
                    test: t => je.test(t) || Ie.test(t) || Ve.test(t),
                    parse: t => je.test(t) ? je.parse(t) : Ve.test(t) ? Ve.parse(t) : Ie.parse(t),
                    transform: t => Y(t) ? t : t.hasOwnProperty("red") ? je.transform(t) : Ve.transform(t)
                },
                $e = "${c}",
                Ke = "${n}";

            function Ze(t) {
                "number" === typeof t && (t = `${t}`);
                const e = [];
                let r = 0;
                const n = t.match(q);
                n && (r = n.length, t = t.replace(q, $e), e.push(...n.map(Xe.parse)));
                const i = t.match(G);
                return i && (t = t.replace(G, Ke), e.push(...i.map(et.parse))), {
                    values: e,
                    numColors: r,
                    tokenised: t
                }
            }

            function Qe(t) {
                return Ze(t).values
            }

            function Je(t) {
                const {
                    values: e,
                    numColors: r,
                    tokenised: n
                } = Ze(t), i = e.length;
                return t => {
                    let e = n;
                    for (let n = 0; n < i; n++) e = e.replace(n < r ? $e : Ke, n < r ? Xe.transform(t[n]) : N(t[n]));
                    return e
                }
            }
            const tr = t => "number" === typeof t ? 0 : t;
            const er = {
                    test: function(t) {
                        var e, r, n, i;
                        return isNaN(t) && Y(t) && (null !== (r = null === (e = t.match(G)) || void 0 === e ? void 0 : e.length) && void 0 !== r ? r : 0) + (null !== (i = null === (n = t.match(q)) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0) > 0
                    },
                    parse: Qe,
                    createTransformer: Je,
                    getAnimatableNone: function(t) {
                        const e = Qe(t);
                        return Je(t)(e.map(tr))
                    }
                },
                rr = t => "number" === typeof t;

            function nr(t, e) {
                return rr(t) ? r => De(t, e, r) : Xe.test(t) ? Ye(t, e) : ar(t, e)
            }
            const ir = (t, e) => {
                    const r = [...t],
                        n = r.length,
                        i = t.map(((t, r) => nr(t, e[r])));
                    return t => {
                        for (let e = 0; e < n; e++) r[e] = i[e](t);
                        return r
                    }
                },
                or = (t, e) => {
                    const r = Object.assign(Object.assign({}, t), e),
                        n = {};
                    for (const i in r) void 0 !== t[i] && void 0 !== e[i] && (n[i] = nr(t[i], e[i]));
                    return t => {
                        for (const e in n) r[e] = n[e](t);
                        return r
                    }
                };

            function sr(t) {
                const e = er.parse(t),
                    r = e.length;
                let n = 0,
                    i = 0,
                    o = 0;
                for (let s = 0; s < r; s++) n || "number" === typeof e[s] ? n++ : void 0 !== e[s].hue ? o++ : i++;
                return {
                    parsed: e,
                    numNumbers: n,
                    numRGB: i,
                    numHSL: o
                }
            }
            const ar = (t, e) => {
                    const r = er.createTransformer(e),
                        n = sr(t),
                        i = sr(e);
                    return n.numHSL === i.numHSL && n.numRGB === i.numRGB && n.numNumbers >= i.numNumbers ? se(ir(n.parsed, i.parsed), r) : r => `${r>0?e:t}`
                },
                lr = (t, e) => r => De(t, e, r);

            function ur(t, e, r) {
                const n = [],
                    i = r || ("number" === typeof(o = t[0]) ? lr : "string" === typeof o ? Xe.test(o) ? Ye : ar : Array.isArray(o) ? ir : "object" === typeof o ? or : void 0);
                var o;
                const s = t.length - 1;
                for (let a = 0; a < s; a++) {
                    let r = i(t[a], t[a + 1]);
                    if (e) {
                        const t = Array.isArray(e) ? e[a] : e;
                        r = se(t, r)
                    }
                    n.push(r)
                }
                return n
            }

            function cr(t, e, {
                clamp: r = !0,
                ease: n,
                mixer: i
            } = {}) {
                const o = t.length;
                e.length, !n || !Array.isArray(n) || n.length, t[0] > t[o - 1] && (t = [].concat(t), e = [].concat(e), t.reverse(), e.reverse());
                const s = ur(e, n, i),
                    a = 2 === o ? function([t, e], [r]) {
                        return n => r(Pe(t, e, n))
                    }(t, s) : function(t, e) {
                        const r = t.length,
                            n = r - 1;
                        return i => {
                            let o = 0,
                                s = !1;
                            if (i <= t[0] ? s = !0 : i >= t[n] && (o = n - 1, s = !0), !s) {
                                let e = 1;
                                for (; e < r && !(t[e] > i || e === n); e++);
                                o = e - 1
                            }
                            const a = Pe(t[o], t[o + 1], i);
                            return e[o](a)
                        }
                    }(t, s);
                return r ? e => a(Te(t[0], t[o - 1], e)) : a
            }
            const hr = t => e => 1 - t(1 - e),
                dr = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                fr = t => e => e * e * ((t + 1) * e - t),
                pr = t => t,
                mr = (gr = 2, t => Math.pow(t, gr));
            var gr;
            const vr = hr(mr),
                yr = dr(mr),
                br = t => 1 - Math.sin(Math.acos(t)),
                wr = hr(br),
                xr = dr(wr),
                Sr = fr(1.525),
                Tr = hr(Sr),
                _r = dr(Sr),
                Er = (t => {
                    const e = fr(t);
                    return t => (t *= 2) < 1 ? .5 * e(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })(1.525),
                kr = t => {
                    if (1 === t || 0 === t) return t;
                    const e = t * t;
                    return t < .36363636363636365 ? 7.5625 * e : t < .7272727272727273 ? 9.075 * e - 9.9 * t + 3.4 : t < .9 ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255 : 10.8 * t * t - 20.52 * t + 10.72
                },
                Ar = hr(kr);

            function Rr(t, e) {
                return t.map((() => e || yr)).splice(0, t.length - 1)
            }

            function Cr({
                from: t = 0,
                to: e = 1,
                ease: r,
                offset: n,
                duration: i = 300
            }) {
                const o = {
                        done: !1,
                        value: t
                    },
                    s = Array.isArray(e) ? e : [t, e],
                    a = function(t, e) {
                        return t.map((t => t * e))
                    }(n && n.length === s.length ? n : function(t) {
                        const e = t.length;
                        return t.map(((t, r) => 0 !== r ? r / (e - 1) : 0))
                    }(s), i);

                function l() {
                    return cr(a, s, {
                        ease: Array.isArray(r) ? r : Rr(s, r)
                    })
                }
                let u = l();
                return {
                    next: t => (o.value = u(t), o.done = t >= i, o),
                    flipTarget: () => {
                        s.reverse(), u = l()
                    }
                }
            }
            const Or = {
                keyframes: Cr,
                spring: Oe,
                decay: function({
                    velocity: t = 0,
                    from: e = 0,
                    power: r = .8,
                    timeConstant: n = 350,
                    restDelta: i = .5,
                    modifyTarget: o
                }) {
                    const s = {
                        done: !1,
                        value: e
                    };
                    let a = r * t;
                    const l = e + a,
                        u = void 0 === o ? l : o(l);
                    return u !== l && (a = u - e), {
                        next: t => {
                            const e = -a * Math.exp(-t / n);
                            return s.done = !(e > i || e < -i), s.value = s.done ? u : u + e, s
                        },
                        flipTarget: () => {}
                    }
                }
            };
            const Ur = 1 / 60 * 1e3,
                Pr = "undefined" !== typeof performance ? () => performance.now() : () => Date.now(),
                Dr = "undefined" !== typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout((() => t(Pr())), Ur);
            let Mr = !0,
                Fr = !1,
                Br = !1;
            const Lr = {
                    delta: 0,
                    timestamp: 0
                },
                jr = ["read", "update", "preRender", "render", "postRender"],
                Ir = jr.reduce(((t, e) => (t[e] = function(t) {
                    let e = [],
                        r = [],
                        n = 0,
                        i = !1,
                        o = !1;
                    const s = new WeakSet,
                        a = {
                            schedule: (t, o = !1, a = !1) => {
                                const l = a && i,
                                    u = l ? e : r;
                                return o && s.add(t), -1 === u.indexOf(t) && (u.push(t), l && i && (n = e.length)), t
                            },
                            cancel: t => {
                                const e = r.indexOf(t); - 1 !== e && r.splice(e, 1), s.delete(t)
                            },
                            process: l => {
                                if (i) o = !0;
                                else {
                                    if (i = !0, [e, r] = [r, e], r.length = 0, n = e.length, n)
                                        for (let r = 0; r < n; r++) {
                                            const n = e[r];
                                            n(l), s.has(n) && (a.schedule(n), t())
                                        }
                                    i = !1, o && (o = !1, a.process(l))
                                }
                            }
                        };
                    return a
                }((() => Fr = !0)), t)), {}),
                Vr = jr.reduce(((t, e) => {
                    const r = Ir[e];
                    return t[e] = (t, e = !1, n = !1) => (Fr || qr(), r.schedule(t, e, n)), t
                }), {}),
                Wr = jr.reduce(((t, e) => (t[e] = Ir[e].cancel, t)), {}),
                zr = jr.reduce(((t, e) => (t[e] = () => Ir[e].process(Lr), t)), {}),
                Nr = t => Ir[t].process(Lr),
                Gr = t => {
                    Fr = !1, Lr.delta = Mr ? Ur : Math.max(Math.min(t - Lr.timestamp, 40), 1), Lr.timestamp = t, Br = !0, jr.forEach(Nr), Br = !1, Fr && (Mr = !1, Dr(Gr))
                },
                qr = () => {
                    Fr = !0, Mr = !0, Br || Dr(Gr)
                },
                Hr = () => Lr;
            var Yr = Vr;

            function Xr(t, e, r = 0) {
                return t - e - r
            }
            const $r = t => {
                const e = ({
                    delta: e
                }) => t(e);
                return {
                    start: () => Yr.update(e, !0),
                    stop: () => Wr.update(e)
                }
            };

            function Kr(t) {
                var e, r, {
                        from: n,
                        autoplay: i = !0,
                        driver: o = $r,
                        elapsed: s = 0,
                        repeat: a = 0,
                        repeatType: l = "loop",
                        repeatDelay: u = 0,
                        onPlay: c,
                        onStop: h,
                        onComplete: d,
                        onRepeat: f,
                        onUpdate: p
                    } = t,
                    m = (0, Se.__rest)(t, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
                let g, v, y, {
                        to: b
                    } = m,
                    w = 0,
                    x = m.duration,
                    S = !1,
                    T = !0;
                const _ = function(t) {
                    if (Array.isArray(t.to)) return Cr;
                    if (Or[t.type]) return Or[t.type];
                    const e = new Set(Object.keys(t));
                    return e.has("ease") || e.has("duration") && !e.has("dampingRatio") ? Cr : e.has("dampingRatio") || e.has("stiffness") || e.has("mass") || e.has("damping") || e.has("restSpeed") || e.has("restDelta") ? Oe : Cr
                }(m);
                (null === (r = (e = _).needsInterpolation) || void 0 === r ? void 0 : r.call(e, n, b)) && (y = cr([0, 100], [n, b], {
                    clamp: !1
                }), n = 0, b = 100);
                const E = _(Object.assign(Object.assign({}, m), {
                    from: n,
                    to: b
                }));

                function k() {
                    w++, "reverse" === l ? (T = w % 2 === 0, s = function(t, e, r = 0, n = !0) {
                        return n ? Xr(e + -t, e, r) : e - (t - e) + r
                    }(s, x, u, T)) : (s = Xr(s, x, u), "mirror" === l && E.flipTarget()), S = !1, f && f()
                }

                function A(t) {
                    if (T || (t = -t), s += t, !S) {
                        const t = E.next(Math.max(0, s));
                        v = t.value, y && (v = y(v)), S = T ? t.done : s <= 0
                    }
                    null === p || void 0 === p || p(v), S && (0 === w && (null !== x && void 0 !== x || (x = s)), w < a ? function(t, e, r, n) {
                        return n ? t >= e + r : t <= -r
                    }(s, x, u, T) && k() : (g.stop(), d && d()))
                }
                return i && (null === c || void 0 === c || c(), g = o(A), g.start()), {
                    stop: () => {
                        null === h || void 0 === h || h(), g.stop()
                    }
                }
            }

            function Zr(t, e) {
                return e ? t * (1e3 / e) : 0
            }
            const Qr = t => 1e3 * t,
                Jr = (t, e) => 1 - 3 * e + 3 * t,
                tn = (t, e) => 3 * e - 6 * t,
                en = t => 3 * t,
                rn = (t, e, r) => ((Jr(e, r) * t + tn(e, r)) * t + en(e)) * t,
                nn = (t, e, r) => 3 * Jr(e, r) * t * t + 2 * tn(e, r) * t + en(e);
            const on = .1;

            function sn(t, e, r, n) {
                if (t === e && r === n) return pr;
                const i = new Float32Array(11);
                for (let s = 0; s < 11; ++s) i[s] = rn(s * on, t, r);

                function o(e) {
                    let n = 0,
                        o = 1;
                    for (; 10 !== o && i[o] <= e; ++o) n += on;
                    --o;
                    const s = n + (e - i[o]) / (i[o + 1] - i[o]) * on,
                        a = nn(s, t, r);
                    return a >= .001 ? function(t, e, r, n) {
                        for (let i = 0; i < 8; ++i) {
                            const i = nn(e, r, n);
                            if (0 === i) return e;
                            e -= (rn(e, r, n) - t) / i
                        }
                        return e
                    }(e, s, t, r) : 0 === a ? s : function(t, e, r, n, i) {
                        let o, s, a = 0;
                        do {
                            s = e + (r - e) / 2, o = rn(s, n, i) - t, o > 0 ? r = s : e = s
                        } while (Math.abs(o) > 1e-7 && ++a < 10);
                        return s
                    }(e, n, n + on, t, r)
                }
                return t => 0 === t || 1 === t ? t : rn(o(t), e, n)
            }
            const an = {
                    linear: pr,
                    easeIn: mr,
                    easeInOut: yr,
                    easeOut: vr,
                    circIn: br,
                    circInOut: xr,
                    circOut: wr,
                    backIn: Sr,
                    backInOut: _r,
                    backOut: Tr,
                    anticipate: Er,
                    bounceIn: Ar,
                    bounceInOut: t => t < .5 ? .5 * (1 - kr(1 - 2 * t)) : .5 * kr(2 * t - 1) + .5,
                    bounceOut: kr
                },
                ln = t => {
                    if (Array.isArray(t)) {
                        t.length;
                        const [e, r, n, i] = t;
                        return sn(e, r, n, i)
                    }
                    return "string" === typeof t ? an[t] : t
                },
                un = (t, e) => "zIndex" !== t && (!("number" !== typeof e && !Array.isArray(e)) || !("string" !== typeof e || !er.test(e) || e.startsWith("url("))),
                cn = () => ({
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                }),
                hn = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                dn = () => ({
                    type: "keyframes",
                    ease: "linear",
                    duration: .3
                }),
                fn = t => ({
                    type: "keyframes",
                    duration: .8,
                    values: t
                }),
                pn = {
                    x: cn,
                    y: cn,
                    z: cn,
                    rotate: cn,
                    rotateX: cn,
                    rotateY: cn,
                    rotateZ: cn,
                    scaleX: hn,
                    scaleY: hn,
                    scale: hn,
                    opacity: dn,
                    backgroundColor: dn,
                    color: dn,
                    default: hn
                },
                mn = (t, e) => {
                    let r;
                    return r = Ct(e) ? fn : pn[t] || pn.default, {
                        to: e,
                        ...r(e)
                    }
                },
                gn = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function vn(t) {
                let [e, r] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                const [n] = r.match(G) || [];
                if (!n) return t;
                const i = r.replace(n, "");
                let o = gn.has(e) ? 1 : 0;
                return n !== r && (o *= 100), e + "(" + o + i + ")"
            }
            const yn = /([a-z-]*)\(.*?\)/g,
                bn = Object.assign(Object.assign({}, er), {
                    getAnimatableNone: t => {
                        const e = t.match(yn);
                        return e ? e.map(vn).join(" ") : t
                    }
                }),
                wn = { ...ot,
                    color: Xe,
                    backgroundColor: Xe,
                    outlineColor: Xe,
                    fill: Xe,
                    stroke: Xe,
                    borderColor: Xe,
                    borderTopColor: Xe,
                    borderRightColor: Xe,
                    borderBottomColor: Xe,
                    borderLeftColor: Xe,
                    filter: bn,
                    WebkitFilter: bn
                },
                xn = t => wn[t];

            function Sn(t, e) {
                var r;
                let n = xn(t);
                return n !== bn && (n = er), null === (r = n.getAnimatableNone) || void 0 === r ? void 0 : r.call(n, e)
            }
            const Tn = !1;
            let _n = !1;

            function En({
                ease: t,
                times: e,
                yoyo: r,
                flip: n,
                loop: i,
                ...o
            }) {
                const s = { ...o
                };
                return e && (s.offset = e), o.duration && (s.duration = Qr(o.duration)), o.repeatDelay && (s.repeatDelay = Qr(o.repeatDelay)), t && (s.ease = (t => Array.isArray(t) && "number" !== typeof t[0])(t) ? t.map(ln) : ln(t)), "tween" === o.type && (s.type = "keyframes"), (r || i || n) && (_n = !0, r ? s.repeatType = "reverse" : i ? s.repeatType = "loop" : n && (s.repeatType = "mirror"), s.repeat = i || r || n || o.repeat), "spring" !== o.type && (s.type = "keyframes"), s
            }

            function kn(t, e, r) {
                return Array.isArray(e.to) && void 0 === t.duration && (t.duration = .8),
                    function(t) {
                        Array.isArray(t.to) && null === t.to[0] && (t.to = [...t.to], t.to[0] = t.from)
                    }(e),
                    function({
                        when: t,
                        delay: e,
                        delayChildren: r,
                        staggerChildren: n,
                        staggerDirection: i,
                        repeat: o,
                        repeatType: s,
                        repeatDelay: a,
                        from: l,
                        ...u
                    }) {
                        return !!Object.keys(u).length
                    }(t) || (t = { ...t,
                        ...mn(r, e.to)
                    }), { ...e,
                        ...En(t)
                    }
            }

            function An(t, e, r, n, i) {
                const o = On(n, t) || {};
                let s = void 0 !== o.from ? o.from : e.get();
                const a = un(t, r);
                "none" === s && a && "string" === typeof r ? s = Sn(t, r) : Rn(s) && "string" === typeof r ? s = Cn(r) : !Array.isArray(r) && Rn(r) && "string" === typeof s && (r = Cn(s));
                const l = un(t, s);
                return l && a && !1 !== o.type ? function() {
                    const n = {
                        from: s,
                        to: r,
                        velocity: e.getVelocity(),
                        onComplete: i,
                        onUpdate: t => e.set(t)
                    };
                    return "inertia" === o.type || "decay" === o.type ? function({
                        from: t = 0,
                        velocity: e = 0,
                        min: r,
                        max: n,
                        power: i = .8,
                        timeConstant: o = 750,
                        bounceStiffness: s = 500,
                        bounceDamping: a = 10,
                        restDelta: l = 1,
                        modifyTarget: u,
                        driver: c,
                        onUpdate: h,
                        onComplete: d,
                        onStop: f
                    }) {
                        let p;

                        function m(t) {
                            return void 0 !== r && t < r || void 0 !== n && t > n
                        }

                        function g(t) {
                            return void 0 === r ? n : void 0 === n || Math.abs(r - t) < Math.abs(n - t) ? r : n
                        }

                        function v(t) {
                            null === p || void 0 === p || p.stop(), p = Kr(Object.assign(Object.assign({}, t), {
                                driver: c,
                                onUpdate: e => {
                                    var r;
                                    null === h || void 0 === h || h(e), null === (r = t.onUpdate) || void 0 === r || r.call(t, e)
                                },
                                onComplete: d,
                                onStop: f
                            }))
                        }

                        function y(t) {
                            v(Object.assign({
                                type: "spring",
                                stiffness: s,
                                damping: a,
                                restDelta: l
                            }, t))
                        }
                        if (m(t)) y({
                            from: t,
                            velocity: e,
                            to: g(t)
                        });
                        else {
                            let n = i * e + t;
                            "undefined" !== typeof u && (n = u(n));
                            const s = g(n),
                                a = s === r ? -1 : 1;
                            let c, h;
                            const d = t => {
                                c = h, h = t, e = Zr(t - c, Hr().delta), (1 === a && t > s || -1 === a && t < s) && y({
                                    from: t,
                                    to: s,
                                    velocity: e
                                })
                            };
                            v({
                                type: "decay",
                                from: t,
                                velocity: e,
                                timeConstant: o,
                                power: i,
                                restDelta: l,
                                modifyTarget: u,
                                onUpdate: m(n) ? d : void 0
                            })
                        }
                        return {
                            stop: () => null === p || void 0 === p ? void 0 : p.stop()
                        }
                    }({ ...n,
                        ...o
                    }) : Kr({ ...kn(o, n, t),
                        onUpdate: t => {
                            n.onUpdate(t), o.onUpdate && o.onUpdate(t)
                        },
                        onComplete: () => {
                            n.onComplete(), o.onComplete && o.onComplete()
                        }
                    })
                } : function() {
                    const t = Ot(r);
                    return e.set(t), i(), o.onUpdate && o.onUpdate(t), o.onComplete && o.onComplete(), {
                        stop: () => {}
                    }
                }
            }

            function Rn(t) {
                return 0 === t || "string" === typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
            }

            function Cn(t) {
                return "number" === typeof t ? 0 : Sn("", t)
            }

            function On(t, e) {
                return t[e] || t.default || t
            }

            function Un(t, e, r, n = {}) {
                return Tn && (n = {
                    type: !1
                }), e.start((i => {
                    let o, s;
                    const a = An(t, e, r, n, i),
                        l = function(t, e) {
                            var r, n;
                            return null !== (n = null !== (r = (On(t, e) || {}).delay) && void 0 !== r ? r : t.delay) && void 0 !== n ? n : 0
                        }(n, t),
                        u = () => s = a();
                    return l ? o = window.setTimeout(u, Qr(l)) : u(), () => {
                        clearTimeout(o), s && s.stop()
                    }
                }))
            }
            const Pn = t => /^0[^.\s]+$/.test(t);

            function Dn(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function Mn(t, e) {
                const r = t.indexOf(e);
                r > -1 && t.splice(r, 1)
            }
            class Fn {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return Dn(this.subscriptions, t), () => Mn(this.subscriptions, t)
                }
                notify(t, e, r) {
                    const n = this.subscriptions.length;
                    if (n)
                        if (1 === n) this.subscriptions[0](t, e, r);
                        else
                            for (let i = 0; i < n; i++) {
                                const n = this.subscriptions[i];
                                n && n(t, e, r)
                            }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
            class Bn {
                constructor(t) {
                    var e;
                    this.version = "7.5.2", this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new Fn, this.velocityUpdateSubscribers = new Fn, this.renderSubscribers = new Fn, this.canTrackVelocity = !1, this.updateAndNotify = (t, e = !0) => {
                        this.prev = this.current, this.current = t;
                        const {
                            delta: r,
                            timestamp: n
                        } = Hr();
                        this.lastUpdated !== n && (this.timeDelta = r, this.lastUpdated = n, Yr.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.updateSubscribers.notify(this.current), this.velocityUpdateSubscribers.getSize() && this.velocityUpdateSubscribers.notify(this.getVelocity()), e && this.renderSubscribers.notify(this.current)
                    }, this.scheduleVelocityCheck = () => Yr.postRender(this.velocityCheck), this.velocityCheck = ({
                        timestamp: t
                    }) => {
                        t !== this.lastUpdated && (this.prev = this.current, this.velocityUpdateSubscribers.notify(this.getVelocity()))
                    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = (e = this.current, !isNaN(parseFloat(e)))
                }
                onChange(t) {
                    return this.updateSubscribers.add(t)
                }
                clearListeners() {
                    this.updateSubscribers.clear()
                }
                onRenderRequest(t) {
                    return t(this.get()), this.renderSubscribers.add(t)
                }
                attach(t) {
                    this.passiveEffect = t
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                get() {
                    return this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    return this.canTrackVelocity ? Zr(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                }
                start(t) {
                    return this.stop(), new Promise((e => {
                        this.hasAnimated = !0, this.stopAnimation = t(e)
                    })).then((() => this.clearAnimation()))
                }
                stop() {
                    this.stopAnimation && this.stopAnimation(), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.stopAnimation
                }
                clearAnimation() {
                    this.stopAnimation = null
                }
                destroy() {
                    this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop()
                }
            }

            function Ln(t) {
                return new Bn(t)
            }
            const jn = t => e => e.test(t),
                In = [et, Z, K, $, J, Q, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                Vn = t => In.find(jn(t)),
                Wn = [...In, Xe, er],
                zn = t => Wn.find(jn(t));

            function Nn(t, e, r) {
                const n = t.getProps();
                return Rt(n, e, void 0 !== r ? r : n.custom, function(t) {
                    const e = {};
                    return t.forEachValue(((t, r) => e[r] = t.get())), e
                }(t), function(t) {
                    const e = {};
                    return t.forEachValue(((t, r) => e[r] = t.getVelocity())), e
                }(t))
            }

            function Gn(t, e, r) {
                t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, Ln(r))
            }

            function qn(t, e) {
                const r = Nn(t, e);
                let {
                    transitionEnd: n = {},
                    transition: i = {},
                    ...o
                } = r ? t.makeTargetAnimatable(r, !1) : {};
                o = { ...o,
                    ...n
                };
                for (const s in o) {
                    Gn(t, s, Ot(o[s]))
                }
            }

            function Hn(t, e) {
                if (!e) return;
                return (e[t] || e.default || e).from
            }

            function Yn(t) {
                return Boolean(L(t) && t.add)
            }

            function Xn(t, e, r = {}) {
                var n;
                const i = Nn(t, e, r.custom);
                let {
                    transition: o = t.getDefaultTransition() || {}
                } = i || {};
                r.transitionOverride && (o = r.transitionOverride);
                const s = i ? () => $n(t, i, r) : () => Promise.resolve(),
                    a = (null === (n = t.variantChildren) || void 0 === n ? void 0 : n.size) ? (n = 0) => {
                        const {
                            delayChildren: i = 0,
                            staggerChildren: s,
                            staggerDirection: a
                        } = o;
                        return function(t, e, r = 0, n = 0, i = 1, o) {
                            const s = [],
                                a = (t.variantChildren.size - 1) * n,
                                l = 1 === i ? (t = 0) => t * n : (t = 0) => a - t * n;
                            return Array.from(t.variantChildren).sort(Kn).forEach(((t, n) => {
                                s.push(Xn(t, e, { ...o,
                                    delay: r + l(n)
                                }).then((() => t.notifyAnimationComplete(e))))
                            })), Promise.all(s)
                        }(t, e, i + n, s, a, r)
                    } : () => Promise.resolve(),
                    {
                        when: l
                    } = o;
                if (l) {
                    const [t, e] = "beforeChildren" === l ? [s, a] : [a, s];
                    return t().then(e)
                }
                return Promise.all([s(), a(r.delay)])
            }

            function $n(t, e, {
                delay: r = 0,
                transitionOverride: n,
                type: i
            } = {}) {
                var o;
                let {
                    transition: s = t.getDefaultTransition(),
                    transitionEnd: a,
                    ...l
                } = t.makeTargetAnimatable(e);
                const u = t.getValue("willChange");
                n && (s = n);
                const c = [],
                    h = i && (null === (o = t.animationState) || void 0 === o ? void 0 : o.getState()[i]);
                for (const d in l) {
                    const e = t.getValue(d),
                        n = l[d];
                    if (!e || void 0 === n || h && Zn(h, d)) continue;
                    let i = {
                        delay: r,
                        ...s
                    };
                    t.shouldReduceMotion && F.has(d) && (i = { ...i,
                        type: !1,
                        delay: 0
                    });
                    let o = Un(d, e, n, i);
                    Yn(u) && (u.add(d), o = o.then((() => u.remove(d)))), c.push(o)
                }
                return Promise.all(c).then((() => {
                    a && qn(t, a)
                }))
            }

            function Kn(t, e) {
                return t.sortNodePosition(e)
            }

            function Zn({
                protectedKeys: t,
                needsAnimating: e
            }, r) {
                const n = t.hasOwnProperty(r) && !0 !== e[r];
                return e[r] = !1, n
            }
            const Qn = [Bt.Animate, Bt.InView, Bt.Focus, Bt.Hover, Bt.Tap, Bt.Drag, Bt.Exit],
                Jn = [...Qn].reverse(),
                ti = Qn.length;

            function ei(t) {
                return e => Promise.all(e.map((({
                    animation: e,
                    options: r
                }) => function(t, e, r = {}) {
                    let n;
                    if (t.notifyAnimationStart(e), Array.isArray(e)) {
                        const i = e.map((e => Xn(t, e, r)));
                        n = Promise.all(i)
                    } else if ("string" === typeof e) n = Xn(t, e, r);
                    else {
                        const i = "function" === typeof e ? Nn(t, e, r.custom) : e;
                        n = $n(t, i, r)
                    }
                    return n.then((() => t.notifyAnimationComplete(e)))
                }(t, e, r))))
            }

            function ri(t) {
                let e = ei(t);
                const r = {
                    [Bt.Animate]: ii(!0),
                    [Bt.InView]: ii(),
                    [Bt.Hover]: ii(),
                    [Bt.Tap]: ii(),
                    [Bt.Drag]: ii(),
                    [Bt.Focus]: ii(),
                    [Bt.Exit]: ii()
                };
                let n = !0;
                const i = (e, r) => {
                    const n = Nn(t, r);
                    if (n) {
                        const {
                            transition: t,
                            transitionEnd: r,
                            ...i
                        } = n;
                        e = { ...e,
                            ...i,
                            ...r
                        }
                    }
                    return e
                };

                function o(o, s) {
                    var a;
                    const l = t.getProps(),
                        u = t.getVariantContext(!0) || {},
                        c = [],
                        h = new Set;
                    let p = {},
                        m = 1 / 0;
                    for (let e = 0; e < ti; e++) {
                        const g = Jn[e],
                            v = r[g],
                            y = null !== (a = l[g]) && void 0 !== a ? a : u[g],
                            b = d(y),
                            w = g === s ? v.isActive : null;
                        !1 === w && (m = e);
                        let x = y === u[g] && y !== l[g] && b;
                        if (x && n && t.manuallyAnimateOnMount && (x = !1), v.protectedKeys = { ...p
                            }, !v.isActive && null === w || !y && !v.prevProp || f(y) || "boolean" === typeof y) continue;
                        const S = ni(v.prevProp, y);
                        let T = S || g === s && v.isActive && !x && b || e > m && b;
                        const _ = Array.isArray(y) ? y : [y];
                        let E = _.reduce(i, {});
                        !1 === w && (E = {});
                        const {
                            prevResolvedValues: k = {}
                        } = v, A = { ...k,
                            ...E
                        }, R = t => {
                            T = !0, h.delete(t), v.needsAnimating[t] = !0
                        };
                        for (const t in A) {
                            const e = E[t],
                                r = k[t];
                            p.hasOwnProperty(t) || (e !== r ? Ct(e) && Ct(r) ? !xe(e, r) || S ? R(t) : v.protectedKeys[t] = !0 : void 0 !== e ? R(t) : h.add(t) : void 0 !== e && h.has(t) ? R(t) : v.protectedKeys[t] = !0)
                        }
                        v.prevProp = y, v.prevResolvedValues = E, v.isActive && (p = { ...p,
                            ...E
                        }), n && t.blockInitialAnimation && (T = !1), T && !x && c.push(..._.map((t => ({
                            animation: t,
                            options: {
                                type: g,
                                ...o
                            }
                        }))))
                    }
                    if (h.size) {
                        const e = {};
                        h.forEach((r => {
                            const n = t.getBaseTarget(r);
                            void 0 !== n && (e[r] = n)
                        })), c.push({
                            animation: e
                        })
                    }
                    let g = Boolean(c.length);
                    return n && !1 === l.initial && !t.manuallyAnimateOnMount && (g = !1), n = !1, g ? e(c) : Promise.resolve()
                }
                return {
                    animateChanges: o,
                    setActive: function(e, n, i) {
                        var s;
                        if (r[e].isActive === n) return Promise.resolve();
                        null === (s = t.variantChildren) || void 0 === s || s.forEach((t => {
                            var r;
                            return null === (r = t.animationState) || void 0 === r ? void 0 : r.setActive(e, n)
                        })), r[e].isActive = n;
                        const a = o(i, e);
                        for (const t in r) r[t].protectedKeys = {};
                        return a
                    },
                    setAnimateFunction: function(r) {
                        e = r(t)
                    },
                    getState: () => r
                }
            }

            function ni(t, e) {
                return "string" === typeof e ? e !== t : !!Array.isArray(e) && !xe(e, t)
            }

            function ii(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            const oi = {
                    animation: ye((({
                        visualElement: t,
                        animate: e
                    }) => {
                        t.animationState || (t.animationState = ri(t)), f(e) && (0, n.useEffect)((() => e.subscribe(t)), [e])
                    })),
                    exit: ye((t => {
                        const {
                            custom: e,
                            visualElement: r
                        } = t, [i, o] = we(), a = (0, n.useContext)(s);
                        (0, n.useEffect)((() => {
                            r.isPresent = i;
                            const t = r.animationState && r.animationState.setActive(Bt.Exit, !i, {
                                custom: a && a.custom || e
                            });
                            t && !i && t.then(o)
                        }), [i])
                    }))
                },
                si = t => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
                ai = t => si(t) && t.hasOwnProperty("z"),
                li = (t, e) => Math.abs(t - e);

            function ui(t, e) {
                if (rr(t) && rr(e)) return li(t, e);
                if (si(t) && si(e)) {
                    const r = li(t.x, e.x),
                        n = li(t.y, e.y),
                        i = ai(t) && ai(e) ? li(t.z, e.z) : 0;
                    return Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2) + Math.pow(i, 2))
                }
            }
            class ci {
                constructor(t, e, {
                    transformPagePoint: r
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                            if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
                            const t = fi(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                r = ui(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!e && !r) return;
                            const {
                                point: n
                            } = t, {
                                timestamp: i
                            } = Hr();
                            this.history.push({ ...n,
                                timestamp: i
                            });
                            const {
                                onStart: o,
                                onMove: s
                            } = this.handlers;
                            e || (o && o(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), s && s(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = hi(e, this.transformPagePoint), It(t) && 0 === t.buttons ? this.handlePointerUp(t, e) : Yr.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            const {
                                onEnd: r,
                                onSessionEnd: n
                            } = this.handlers, i = fi(hi(e, this.transformPagePoint), this.history);
                            this.startEvent && r && r(t, i), n && n(t, i)
                        }, Vt(t) && t.touches.length > 1) return;
                    this.handlers = e, this.transformPagePoint = r;
                    const n = hi(Gt(t), this.transformPagePoint),
                        {
                            point: i
                        } = n,
                        {
                            timestamp: o
                        } = Hr();
                    this.history = [{ ...i,
                        timestamp: o
                    }];
                    const {
                        onSessionStart: s
                    } = e;
                    s && s(t, fi(n, this.history)), this.removeListeners = se($t(window, "pointermove", this.handlePointerMove), $t(window, "pointerup", this.handlePointerUp), $t(window, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), Wr.update(this.updatePoint)
                }
            }

            function hi(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function di(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function fi({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: di(t, mi(e)),
                    offset: di(t, pi(e)),
                    velocity: gi(e, .1)
                }
            }

            function pi(t) {
                return t[0]
            }

            function mi(t) {
                return t[t.length - 1]
            }

            function gi(t, e) {
                if (t.length < 2) return {
                    x: 0,
                    y: 0
                };
                let r = t.length - 1,
                    n = null;
                const i = mi(t);
                for (; r >= 0 && (n = t[r], !(i.timestamp - n.timestamp > Qr(e)));) r--;
                if (!n) return {
                    x: 0,
                    y: 0
                };
                const o = (i.timestamp - n.timestamp) / 1e3;
                if (0 === o) return {
                    x: 0,
                    y: 0
                };
                const s = {
                    x: (i.x - n.x) / o,
                    y: (i.y - n.y) / o
                };
                return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
            }

            function vi(t) {
                return t.max - t.min
            }

            function yi(t, e = 0, r = .01) {
                return ui(t, e) < r
            }

            function bi(t, e, r, n = .5) {
                t.origin = n, t.originPoint = De(e.min, e.max, t.origin), t.scale = vi(r) / vi(e), (yi(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = De(r.min, r.max, t.origin) - t.originPoint, (yi(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function wi(t, e, r, n) {
                bi(t.x, e.x, r.x, null === n || void 0 === n ? void 0 : n.originX), bi(t.y, e.y, r.y, null === n || void 0 === n ? void 0 : n.originY)
            }

            function xi(t, e, r) {
                t.min = r.min + e.min, t.max = t.min + vi(e)
            }

            function Si(t, e, r) {
                t.min = e.min - r.min, t.max = t.min + vi(e)
            }

            function Ti(t, e, r) {
                Si(t.x, e.x, r.x), Si(t.y, e.y, r.y)
            }

            function _i(t, e, r) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0
                }
            }

            function Ei(t, e) {
                let r = e.min - t.min,
                    n = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([r, n] = [n, r]), {
                    min: r,
                    max: n
                }
            }
            const ki = .35;

            function Ai(t, e, r) {
                return {
                    min: Ri(t, e),
                    max: Ri(t, r)
                }
            }

            function Ri(t, e) {
                var r;
                return "number" === typeof t ? t : null !== (r = t[e]) && void 0 !== r ? r : 0
            }

            function Ci(t) {
                return [t("x"), t("y")]
            }

            function Oi({
                top: t,
                left: e,
                right: r,
                bottom: n
            }) {
                return {
                    x: {
                        min: e,
                        max: r
                    },
                    y: {
                        min: t,
                        max: n
                    }
                }
            }

            function Ui(t) {
                return void 0 === t || 1 === t
            }

            function Pi({
                scale: t,
                scaleX: e,
                scaleY: r
            }) {
                return !Ui(t) || !Ui(e) || !Ui(r)
            }

            function Di(t) {
                return Pi(t) || Mi(t.x) || Mi(t.y) || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function Mi(t) {
                return t && "0%" !== t
            }

            function Fi(t, e, r) {
                return r + e * (t - r)
            }

            function Bi(t, e, r, n, i) {
                return void 0 !== i && (t = Fi(t, i, n)), Fi(t, r, n) + e
            }

            function Li(t, e = 0, r = 1, n, i) {
                t.min = Bi(t.min, e, r, n, i), t.max = Bi(t.max, e, r, n, i)
            }

            function ji(t, {
                x: e,
                y: r
            }) {
                Li(t.x, e.translate, e.scale, e.originPoint), Li(t.y, r.translate, r.scale, r.originPoint)
            }

            function Ii(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function Vi(t, e, [r, n, i]) {
                const o = void 0 !== e[i] ? e[i] : .5,
                    s = De(t.min, t.max, o);
                Li(t, e[r], e[n], s, e.scale)
            }
            const Wi = ["x", "scaleX", "originX"],
                zi = ["y", "scaleY", "originY"];

            function Ni(t, e) {
                Vi(t.x, e, Wi), Vi(t.y, e, zi)
            }

            function Gi(t, e) {
                return Oi(function(t, e) {
                    if (!e) return t;
                    const r = e({
                            x: t.left,
                            y: t.top
                        }),
                        n = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: r.y,
                        left: r.x,
                        bottom: n.y,
                        right: n.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            const qi = new WeakMap;
            class Hi {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    }, this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    if (!1 === this.visualElement.isPresent) return;
                    this.panSession = new ci(t, {
                        onSessionStart: t => {
                            this.stopAnimation(), e && this.snapToCursor(Gt(t, "page").point)
                        },
                        onStart: (t, e) => {
                            var r;
                            const {
                                drag: n,
                                dragPropagation: i,
                                onDragStart: o
                            } = this.getProps();
                            (!n || i || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = te(n), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Ci((t => {
                                var e, r;
                                let n = this.getAxisMotionValue(t).get() || 0;
                                if (K.test(n)) {
                                    const i = null === (r = null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === r ? void 0 : r.actual[t];
                                    if (i) {
                                        n = vi(i) * (parseFloat(n) / 100)
                                    }
                                }
                                this.originPoint[t] = n
                            })), null === o || void 0 === o || o(t, e), null === (r = this.visualElement.animationState) || void 0 === r || r.setActive(Bt.Drag, !0))
                        },
                        onMove: (t, e) => {
                            const {
                                dragPropagation: r,
                                dragDirectionLock: n,
                                onDirectionLock: i,
                                onDrag: o
                            } = this.getProps();
                            if (!r && !this.openGlobalLock) return;
                            const {
                                offset: s
                            } = e;
                            if (n && null === this.currentDirection) return this.currentDirection = function(t, e = 10) {
                                let r = null;
                                Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x");
                                return r
                            }(s), void(null !== this.currentDirection && (null === i || void 0 === i || i(this.currentDirection)));
                            this.updateAxis("x", e.point, s), this.updateAxis("y", e.point, s), this.visualElement.syncRender(), null === o || void 0 === o || o(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e)
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    })
                }
                stop(t, e) {
                    const r = this.isDragging;
                    if (this.cancel(), !r) return;
                    const {
                        velocity: n
                    } = e;
                    this.startAnimation(n);
                    const {
                        onDragEnd: i
                    } = this.getProps();
                    null === i || void 0 === i || i(t, e)
                }
                cancel() {
                    var t, e;
                    this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0;
                    const {
                        dragPropagation: r
                    } = this.getProps();
                    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(Bt.Drag, !1)
                }
                updateAxis(t, e, r) {
                    const {
                        drag: n
                    } = this.getProps();
                    if (!r || !Yi(t, n, this.currentDirection)) return;
                    const i = this.getAxisMotionValue(t);
                    let o = this.originPoint[t] + r[t];
                    this.constraints && this.constraints[t] && (o = function(t, {
                        min: e,
                        max: r
                    }, n) {
                        return void 0 !== e && t < e ? t = n ? De(e, t, n.min) : Math.max(t, e) : void 0 !== r && t > r && (t = n ? De(r, t, n.max) : Math.min(t, r)), t
                    }(o, this.constraints[t], this.elastic[t])), i.set(o)
                }
                resolveConstraints() {
                    const {
                        dragConstraints: t,
                        dragElastic: e
                    } = this.getProps(), {
                        layout: r
                    } = this.visualElement.projection || {}, n = this.constraints;
                    t && h(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !r) && function(t, {
                        top: e,
                        left: r,
                        bottom: n,
                        right: i
                    }) {
                        return {
                            x: _i(t.x, r, i),
                            y: _i(t.y, e, n)
                        }
                    }(r.actual, t), this.elastic = function(t = ki) {
                        return !1 === t ? t = 0 : !0 === t && (t = ki), {
                            x: Ai(t, "left", "right"),
                            y: Ai(t, "top", "bottom")
                        }
                    }(e), n !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && Ci((t => {
                        this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            const r = {};
                            return void 0 !== e.min && (r.min = e.min - t.min), void 0 !== e.max && (r.max = e.max - t.min), r
                        }(r.actual[t], this.constraints[t]))
                    }))
                }
                resolveRefConstraints() {
                    const {
                        dragConstraints: t,
                        onMeasureDragConstraints: e
                    } = this.getProps();
                    if (!t || !h(t)) return !1;
                    const r = t.current,
                        {
                            projection: n
                        } = this.visualElement;
                    if (!n || !n.layout) return !1;
                    const i = function(t, e, r) {
                        const n = Gi(t, r),
                            {
                                scroll: i
                            } = e;
                        return i && (Ii(n.x, i.x), Ii(n.y, i.y)), n
                    }(r, n.root, this.visualElement.getTransformPagePoint());
                    let o = function(t, e) {
                        return {
                            x: Ei(t.x, e.x),
                            y: Ei(t.y, e.y)
                        }
                    }(n.layout.actual, i);
                    if (e) {
                        const t = e(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(o));
                        this.hasMutatedConstraints = !!t, t && (o = Oi(t))
                    }
                    return o
                }
                startAnimation(t) {
                    const {
                        drag: e,
                        dragMomentum: r,
                        dragElastic: n,
                        dragTransition: i,
                        dragSnapToOrigin: o,
                        onDragTransitionEnd: s
                    } = this.getProps(), a = this.constraints || {}, l = Ci((s => {
                        var l;
                        if (!Yi(s, e, this.currentDirection)) return;
                        let u = null !== (l = null === a || void 0 === a ? void 0 : a[s]) && void 0 !== l ? l : {};
                        o && (u = {
                            min: 0,
                            max: 0
                        });
                        const c = n ? 200 : 1e6,
                            h = n ? 40 : 1e7,
                            d = {
                                type: "inertia",
                                velocity: r ? t[s] : 0,
                                bounceStiffness: c,
                                bounceDamping: h,
                                timeConstant: 750,
                                restDelta: 1,
                                restSpeed: 10,
                                ...i,
                                ...u
                            };
                        return this.startAxisValueAnimation(s, d)
                    }));
                    return Promise.all(l).then(s)
                }
                startAxisValueAnimation(t, e) {
                    return Un(t, this.getAxisMotionValue(t), 0, e)
                }
                stopAnimation() {
                    Ci((t => this.getAxisMotionValue(t).stop()))
                }
                getAxisMotionValue(t) {
                    var e, r;
                    const n = "_drag" + t.toUpperCase(),
                        i = this.visualElement.getProps()[n];
                    return i || this.visualElement.getValue(t, null !== (r = null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) && void 0 !== r ? r : 0)
                }
                snapToCursor(t) {
                    Ci((e => {
                        const {
                            drag: r
                        } = this.getProps();
                        if (!Yi(e, r, this.currentDirection)) return;
                        const {
                            projection: n
                        } = this.visualElement, i = this.getAxisMotionValue(e);
                        if (n && n.layout) {
                            const {
                                min: r,
                                max: o
                            } = n.layout.actual[e];
                            i.set(t[e] - De(r, o, .5))
                        }
                    }))
                }
                scalePositionWithinConstraints() {
                    var t;
                    const {
                        drag: e,
                        dragConstraints: r
                    } = this.getProps(), {
                        projection: n
                    } = this.visualElement;
                    if (!h(r) || !n || !this.constraints) return;
                    this.stopAnimation();
                    const i = {
                        x: 0,
                        y: 0
                    };
                    Ci((t => {
                        const e = this.getAxisMotionValue(t);
                        if (e) {
                            const r = e.get();
                            i[t] = function(t, e) {
                                let r = .5;
                                const n = vi(t),
                                    i = vi(e);
                                return i > n ? r = Pe(e.min, e.max - n, t.min) : n > i && (r = Pe(t.min, t.max - i, e.min)), Te(0, 1, r)
                            }({
                                min: r,
                                max: r
                            }, this.constraints[t])
                        }
                    }));
                    const {
                        transformTemplate: o
                    } = this.visualElement.getProps();
                    this.visualElement.getInstance().style.transform = o ? o({}, "") : "none", null === (t = n.root) || void 0 === t || t.updateScroll(), n.updateLayout(), this.resolveConstraints(), Ci((t => {
                        if (!Yi(t, e, null)) return;
                        const r = this.getAxisMotionValue(t),
                            {
                                min: n,
                                max: o
                            } = this.constraints[t];
                        r.set(De(n, o, i[t]))
                    }))
                }
                addListeners() {
                    var t;
                    qi.set(this.visualElement, this);
                    const e = $t(this.visualElement.getInstance(), "pointerdown", (t => {
                            const {
                                drag: e,
                                dragListener: r = !0
                            } = this.getProps();
                            e && r && this.start(t)
                        })),
                        r = () => {
                            const {
                                dragConstraints: t
                            } = this.getProps();
                            h(t) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: n
                        } = this.visualElement,
                        i = n.addEventListener("measure", r);
                    n && !n.layout && (null === (t = n.root) || void 0 === t || t.updateScroll(), n.updateLayout()), r();
                    const o = Lt(window, "resize", (() => this.scalePositionWithinConstraints())),
                        s = n.addEventListener("didUpdate", (({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (Ci((e => {
                                const r = this.getAxisMotionValue(e);
                                r && (this.originPoint[e] += t[e].translate, r.set(r.get() + t[e].translate))
                            })), this.visualElement.syncRender())
                        }));
                    return () => {
                        o(), e(), i(), null === s || void 0 === s || s()
                    }
                }
                getProps() {
                    const t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: r = !1,
                            dragPropagation: n = !1,
                            dragConstraints: i = !1,
                            dragElastic: o = ki,
                            dragMomentum: s = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: r,
                        dragPropagation: n,
                        dragConstraints: i,
                        dragElastic: o,
                        dragMomentum: s
                    }
                }
            }

            function Yi(t, e, r) {
                return (!0 === e || e === t) && (null === r || r === t)
            }
            const Xi = {
                    pan: ye((function({
                        onPan: t,
                        onPanStart: e,
                        onPanEnd: r,
                        onPanSessionStart: o,
                        visualElement: s
                    }) {
                        const a = t || e || r || o,
                            l = (0, n.useRef)(null),
                            {
                                transformPagePoint: u
                            } = (0, n.useContext)(i),
                            c = {
                                onSessionStart: o,
                                onStart: e,
                                onMove: t,
                                onEnd: (t, e) => {
                                    l.current = null, r && r(t, e)
                                }
                            };
                        (0, n.useEffect)((() => {
                            null !== l.current && l.current.updateHandlers(c)
                        })), Kt(s, "pointerdown", a && function(t) {
                            l.current = new ci(t, c, {
                                transformPagePoint: u
                            })
                        }), ie((() => l.current && l.current.end()))
                    })),
                    drag: ye((function(t) {
                        const {
                            dragControls: e,
                            visualElement: r
                        } = t, i = x((() => new Hi(r)));
                        (0, n.useEffect)((() => e && e.subscribe(i)), [i, e]), (0, n.useEffect)((() => i.addListeners()), [i])
                    }))
                },
                $i = {
                    current: null
                },
                Ki = {
                    current: !1
                };
            const Zi = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "LayoutAnimationStart", "SetAxisTarget", "Unmount"];
            const Qi = Object.keys(w),
                Ji = Qi.length,
                to = ({
                    treeType: t = "",
                    build: e,
                    getBaseTarget: r,
                    makeTargetAnimatable: i,
                    measureViewportBox: o,
                    render: s,
                    readValueFromInstance: l,
                    removeValueFromRenderState: u,
                    sortNodePosition: c,
                    scrapeMotionValuesFromProps: f
                }) => ({
                    parent: p,
                    props: v,
                    presenceId: y,
                    blockInitialAnimation: b,
                    visualState: x,
                    reducedMotionConfig: S
                }, T = {}) => {
                    let _ = !1;
                    const {
                        latestValues: E,
                        renderState: k
                    } = x;
                    let A;
                    const R = function() {
                            const t = Zi.map((() => new Fn)),
                                e = {},
                                r = {
                                    clearAllListeners: () => t.forEach((t => t.clear())),
                                    updatePropListeners: t => {
                                        Zi.forEach((n => {
                                            var i;
                                            const o = "on" + n,
                                                s = t[o];
                                            null === (i = e[n]) || void 0 === i || i.call(e), s && (e[n] = r[o](s))
                                        }))
                                    }
                                };
                            return t.forEach(((t, e) => {
                                r["on" + Zi[e]] = e => t.add(e), r["notify" + Zi[e]] = (...e) => t.notify(...e)
                            })), r
                        }(),
                        C = new Map,
                        O = new Map;
                    let U = {};
                    const P = { ...E
                    };
                    let D;

                    function M() {
                        A && _ && (F(), s(A, k, v.style, N.projection))
                    }

                    function F() {
                        e(N, k, E, T, v)
                    }

                    function B() {
                        R.notifyUpdate(E)
                    }

                    function j(t, e) {
                        const r = e.onChange((e => {
                                E[t] = e, v.onUpdate && Yr.update(B, !1, !0)
                            })),
                            n = e.onRenderRequest(N.scheduleRender);
                        O.set(t, (() => {
                            r(), n()
                        }))
                    }
                    const {
                        willChange: I,
                        ...V
                    } = f(v);
                    for (const t in V) {
                        const e = V[t];
                        void 0 !== E[t] && L(e) && (e.set(E[t], !1), Yn(I) && I.add(t))
                    }
                    if (v.values)
                        for (const t in v.values) {
                            const e = v.values[t];
                            void 0 !== E[t] && L(e) && e.set(E[t])
                        }
                    const W = m(v),
                        z = g(v),
                        N = {
                            treeType: t,
                            current: null,
                            depth: p ? p.depth + 1 : 0,
                            parent: p,
                            children: new Set,
                            presenceId: y,
                            shouldReduceMotion: null,
                            variantChildren: z ? new Set : void 0,
                            isVisible: void 0,
                            manuallyAnimateOnMount: Boolean(null === p || void 0 === p ? void 0 : p.isMounted()),
                            blockInitialAnimation: b,
                            isMounted: () => Boolean(A),
                            mount(t) {
                                _ = !0, A = N.current = t, N.projection && N.projection.mount(t), z && p && !W && (D = null === p || void 0 === p ? void 0 : p.addVariantChild(N)), C.forEach(((t, e) => j(e, t))), Ki.current || function() {
                                    if (Ki.current = !0, a)
                                        if (window.matchMedia) {
                                            const t = window.matchMedia("(prefers-reduced-motion)"),
                                                e = () => $i.current = t.matches;
                                            t.addListener(e), e()
                                        } else $i.current = !1
                                }(), N.shouldReduceMotion = "never" !== S && ("always" === S || $i.current), null === p || void 0 === p || p.children.add(N), N.setProps(v)
                            },
                            unmount() {
                                var t;
                                null === (t = N.projection) || void 0 === t || t.unmount(), Wr.update(B), Wr.render(M), O.forEach((t => t())), null === D || void 0 === D || D(), null === p || void 0 === p || p.children.delete(N), R.clearAllListeners(), A = void 0, _ = !1
                            },
                            loadFeatures(t, e, r, i, o, s) {
                                const a = [];
                                for (let l = 0; l < Ji; l++) {
                                    const e = Qi[l],
                                        {
                                            isEnabled: r,
                                            Component: i
                                        } = w[e];
                                    r(t) && i && a.push((0, n.createElement)(i, {
                                        key: e,
                                        ...t,
                                        visualElement: N
                                    }))
                                }
                                if (!N.projection && o) {
                                    N.projection = new o(i, N.getLatestValues(), p && p.projection);
                                    const {
                                        layoutId: e,
                                        layout: r,
                                        drag: n,
                                        dragConstraints: a,
                                        layoutScroll: l
                                    } = t;
                                    N.projection.setOptions({
                                        layoutId: e,
                                        layout: r,
                                        alwaysMeasureLayout: Boolean(n) || a && h(a),
                                        visualElement: N,
                                        scheduleRender: () => N.scheduleRender(),
                                        animationType: "string" === typeof r ? r : "both",
                                        initialPromotionConfig: s,
                                        layoutScroll: l
                                    })
                                }
                                return a
                            },
                            addVariantChild(t) {
                                var e;
                                const r = N.getClosestVariantNode();
                                if (r) return null === (e = r.variantChildren) || void 0 === e || e.add(t), () => r.variantChildren.delete(t)
                            },
                            sortNodePosition: e => c && t === e.treeType ? c(N.getInstance(), e.getInstance()) : 0,
                            getClosestVariantNode: () => z ? N : null === p || void 0 === p ? void 0 : p.getClosestVariantNode(),
                            getLayoutId: () => v.layoutId,
                            getInstance: () => A,
                            getStaticValue: t => E[t],
                            setStaticValue: (t, e) => E[t] = e,
                            getLatestValues: () => E,
                            setVisibility(t) {
                                N.isVisible !== t && (N.isVisible = t, N.scheduleRender())
                            },
                            makeTargetAnimatable: (t, e = !0) => i(N, t, v, e),
                            measureViewportBox: () => o(A, v),
                            addValue(t, e) {
                                N.hasValue(t) && N.removeValue(t), C.set(t, e), E[t] = e.get(), j(t, e)
                            },
                            removeValue(t) {
                                var e;
                                C.delete(t), null === (e = O.get(t)) || void 0 === e || e(), O.delete(t), delete E[t], u(t, k)
                            },
                            hasValue: t => C.has(t),
                            getValue(t, e) {
                                if (v.values && v.values[t]) return v.values[t];
                                let r = C.get(t);
                                return void 0 === r && void 0 !== e && (r = Ln(e), N.addValue(t, r)), r
                            },
                            forEachValue: t => C.forEach(t),
                            readValue: t => void 0 !== E[t] ? E[t] : l(A, t, T),
                            setBaseTarget(t, e) {
                                P[t] = e
                            },
                            getBaseTarget(t) {
                                if (r) {
                                    const e = r(v, t);
                                    if (void 0 !== e && !L(e)) return e
                                }
                                return P[t]
                            },
                            ...R,
                            build: () => (F(), k),
                            scheduleRender() {
                                Yr.render(M, !1, !0)
                            },
                            syncRender: M,
                            setProps(t) {
                                (t.transformTemplate || v.transformTemplate) && N.scheduleRender(), v = t, R.updatePropListeners(t), U = function(t, e, r) {
                                    const {
                                        willChange: n
                                    } = e;
                                    for (const i in e) {
                                        const o = e[i],
                                            s = r[i];
                                        if (L(o)) t.addValue(i, o), Yn(n) && n.add(i);
                                        else if (L(s)) t.addValue(i, Ln(o)), Yn(n) && n.remove(i);
                                        else if (s !== o)
                                            if (t.hasValue(i)) {
                                                const e = t.getValue(i);
                                                !e.hasAnimated && e.set(o)
                                            } else {
                                                const e = t.getStaticValue(i);
                                                t.addValue(i, Ln(void 0 !== e ? e : o))
                                            }
                                    }
                                    for (const i in r) void 0 === e[i] && t.removeValue(i);
                                    return e
                                }(N, f(v), U)
                            },
                            getProps: () => v,
                            getVariant: t => {
                                var e;
                                return null === (e = v.variants) || void 0 === e ? void 0 : e[t]
                            },
                            getDefaultTransition: () => v.transition,
                            getTransformPagePoint: () => v.transformPagePoint,
                            getVariantContext(t = !1) {
                                if (t) return null === p || void 0 === p ? void 0 : p.getVariantContext();
                                if (!W) {
                                    const t = (null === p || void 0 === p ? void 0 : p.getVariantContext()) || {};
                                    return void 0 !== v.initial && (t.initial = v.initial), t
                                }
                                const e = {};
                                for (let r = 0; r < ro; r++) {
                                    const t = eo[r],
                                        n = v[t];
                                    (d(n) || !1 === n) && (e[t] = n)
                                }
                                return e
                            }
                        };
                    return N
                },
                eo = ["initial", ...Qn],
                ro = eo.length;

            function no(t) {
                return "string" === typeof t && t.startsWith("var(--")
            }
            const io = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function oo(t, e, r = 1) {
                const [n, i] = function(t) {
                    const e = io.exec(t);
                    if (!e) return [, ];
                    const [, r, n] = e;
                    return [r, n]
                }(t);
                if (!n) return;
                const o = window.getComputedStyle(e).getPropertyValue(n);
                return o ? o.trim() : no(i) ? oo(i, e, r + 1) : i
            }
            const so = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                ao = t => so.has(t),
                lo = (t, e) => {
                    t.set(e, !1), t.set(e)
                },
                uo = t => t === et || t === Z;
            var co;
            ! function(t) {
                t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
            }(co || (co = {}));
            const ho = (t, e) => parseFloat(t.split(", ")[e]),
                fo = (t, e) => (r, {
                    transform: n
                }) => {
                    if ("none" === n || !n) return 0;
                    const i = n.match(/^matrix3d\((.+)\)$/);
                    if (i) return ho(i[1], e); {
                        const e = n.match(/^matrix\((.+)\)$/);
                        return e ? ho(e[1], t) : 0
                    }
                },
                po = new Set(["x", "y", "z"]),
                mo = M.filter((t => !po.has(t)));
            const go = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: r = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(r),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: r = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(r),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: fo(4, 13),
                    y: fo(5, 14)
                },
                vo = (t, e, r = {}, n = {}) => {
                    e = { ...e
                    }, n = { ...n
                    };
                    const i = Object.keys(e).filter(ao);
                    let o = [],
                        s = !1;
                    const l = [];
                    if (i.forEach((i => {
                            const a = t.getValue(i);
                            if (!t.hasValue(i)) return;
                            let u = r[i],
                                c = Vn(u);
                            const h = e[i];
                            let d;
                            if (Ct(h)) {
                                const t = h.length,
                                    e = null === h[0] ? 1 : 0;
                                u = h[e], c = Vn(u);
                                for (let r = e; r < t; r++) d ? Vn(h[r]) : (d = Vn(h[r]), d === c || uo(c) && uo(d))
                            } else d = Vn(h);
                            if (c !== d)
                                if (uo(c) && uo(d)) {
                                    const t = a.get();
                                    "string" === typeof t && a.set(parseFloat(t)), "string" === typeof h ? e[i] = parseFloat(h) : Array.isArray(h) && d === Z && (e[i] = h.map(parseFloat))
                                } else(null === c || void 0 === c ? void 0 : c.transform) && (null === d || void 0 === d ? void 0 : d.transform) && (0 === u || 0 === h) ? 0 === u ? a.set(d.transform(u)) : e[i] = c.transform(h) : (s || (o = function(t) {
                                    const e = [];
                                    return mo.forEach((r => {
                                        const n = t.getValue(r);
                                        void 0 !== n && (e.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0))
                                    })), e.length && t.syncRender(), e
                                }(t), s = !0), l.push(i), n[i] = void 0 !== n[i] ? n[i] : e[i], lo(a, h))
                        })), l.length) {
                        const r = l.indexOf("height") >= 0 ? window.pageYOffset : null,
                            i = ((t, e, r) => {
                                const n = e.measureViewportBox(),
                                    i = e.getInstance(),
                                    o = getComputedStyle(i),
                                    {
                                        display: s
                                    } = o,
                                    a = {};
                                "none" === s && e.setStaticValue("display", t.display || "block"), r.forEach((t => {
                                    a[t] = go[t](n, o)
                                })), e.syncRender();
                                const l = e.measureViewportBox();
                                return r.forEach((r => {
                                    const n = e.getValue(r);
                                    lo(n, a[r]), t[r] = go[r](l, o)
                                })), t
                            })(e, t, l);
                        return o.length && o.forEach((([e, r]) => {
                            t.getValue(e).set(r)
                        })), t.syncRender(), a && null !== r && window.scrollTo({
                            top: r
                        }), {
                            target: i,
                            transitionEnd: n
                        }
                    }
                    return {
                        target: e,
                        transitionEnd: n
                    }
                };

            function yo(t, e, r, n) {
                return (t => Object.keys(t).some(ao))(e) ? vo(t, e, r, n) : {
                    target: e,
                    transitionEnd: n
                }
            }
            const bo = (t, e, r, n) => {
                const i = function(t, { ...e
                }, r) {
                    const n = t.getInstance();
                    if (!(n instanceof Element)) return {
                        target: e,
                        transitionEnd: r
                    };
                    r && (r = { ...r
                    }), t.forEachValue((t => {
                        const e = t.get();
                        if (!no(e)) return;
                        const r = oo(e, n);
                        r && t.set(r)
                    }));
                    for (const i in e) {
                        const t = e[i];
                        if (!no(t)) continue;
                        const o = oo(t, n);
                        o && (e[i] = o, r && void 0 === r[i] && (r[i] = t))
                    }
                    return {
                        target: e,
                        transitionEnd: r
                    }
                }(t, e, n);
                return yo(t, e = i.target, r, n = i.transitionEnd)
            };
            const wo = {
                    treeType: "dom",
                    readValueFromInstance(t, e) {
                        if (F.has(e)) {
                            const t = xn(e);
                            return t && t.default || 0
                        } {
                            const n = (r = t, window.getComputedStyle(r)),
                                i = (V(e) ? n.getPropertyValue(e) : n[e]) || 0;
                            return "string" === typeof i ? i.trim() : i
                        }
                        var r
                    },
                    sortNodePosition: (t, e) => 2 & t.compareDocumentPosition(e) ? 1 : -1,
                    getBaseTarget(t, e) {
                        var r;
                        return null === (r = t.style) || void 0 === r ? void 0 : r[e]
                    },
                    measureViewportBox: (t, {
                        transformPagePoint: e
                    }) => Gi(t, e),
                    resetTransform(t, e, r) {
                        const {
                            transformTemplate: n
                        } = r;
                        e.style.transform = n ? n({}, "") : "none", t.scheduleRender()
                    },
                    restoreTransform(t, e) {
                        t.style.transform = e.style.transform
                    },
                    removeValueFromRenderState(t, {
                        vars: e,
                        style: r
                    }) {
                        delete e[t], delete r[t]
                    },
                    makeTargetAnimatable(t, {
                        transition: e,
                        transitionEnd: r,
                        ...n
                    }, {
                        transformValues: i
                    }, o = !0) {
                        let s = function(t, e, r) {
                            var n;
                            const i = {};
                            for (const o in t) {
                                const t = Hn(o, e);
                                i[o] = void 0 !== t ? t : null === (n = r.getValue(o)) || void 0 === n ? void 0 : n.get()
                            }
                            return i
                        }(n, e || {}, t);
                        if (i && (r && (r = i(r)), n && (n = i(n)), s && (s = i(s))), o) {
                            ! function(t, e, r) {
                                var n, i;
                                const o = Object.keys(e).filter((e => !t.hasValue(e))),
                                    s = o.length;
                                if (s)
                                    for (let a = 0; a < s; a++) {
                                        const s = o[a],
                                            l = e[s];
                                        let u = null;
                                        Array.isArray(l) && (u = l[0]), null === u && (u = null !== (i = null !== (n = r[s]) && void 0 !== n ? n : t.readValue(s)) && void 0 !== i ? i : e[s]), void 0 !== u && null !== u && ("string" === typeof u && (/^\-?\d*\.?\d+$/.test(u) || Pn(u)) ? u = parseFloat(u) : !zn(u) && er.test(l) && (u = Sn(s, l)), t.addValue(s, Ln(u)), void 0 === r[s] && (r[s] = u), t.setBaseTarget(s, u))
                                    }
                            }(t, n, s);
                            const e = bo(t, n, s, r);
                            r = e.transitionEnd, n = e.target
                        }
                        return {
                            transition: e,
                            transitionEnd: r,
                            ...n
                        }
                    },
                    scrapeMotionValuesFromProps: kt,
                    build(t, e, r, n, i) {
                        void 0 !== t.isVisible && (e.style.visibility = t.isVisible ? "visible" : "hidden"), st(e, r, n, i.transformTemplate)
                    },
                    render: Tt
                },
                xo = to(wo),
                So = to({ ...wo,
                    getBaseTarget: (t, e) => t[e],
                    readValueFromInstance(t, e) {
                        var r;
                        return F.has(e) ? (null === (r = xn(e)) || void 0 === r ? void 0 : r.default) || 0 : (e = _t.has(e) ? e : St(e), t.getAttribute(e))
                    },
                    scrapeMotionValuesFromProps: At,
                    build(t, e, r, n, i) {
                        yt(e, r, n, i.transformTemplate)
                    },
                    render: Et
                }),
                To = (t, e) => P(t) ? So(e, {
                    enableHardwareAcceleration: !1
                }) : xo(e, {
                    enableHardwareAcceleration: !0
                });

            function _o(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            const Eo = {
                    correct: (t, e) => {
                        if (!e.target) return t;
                        if ("string" === typeof t) {
                            if (!Z.test(t)) return t;
                            t = parseFloat(t)
                        }
                        return `${_o(t,e.target.x)}% ${_o(t,e.target.y)}%`
                    }
                },
                ko = "_$css",
                Ao = {
                    correct: (t, {
                        treeScale: e,
                        projectionDelta: r
                    }) => {
                        const n = t,
                            i = t.includes("var("),
                            o = [];
                        i && (t = t.replace(io, (t => (o.push(t), ko))));
                        const s = er.parse(t);
                        if (s.length > 5) return n;
                        const a = er.createTransformer(t),
                            l = "number" !== typeof s[0] ? 1 : 0,
                            u = r.x.scale * e.x,
                            c = r.y.scale * e.y;
                        s[0 + l] /= u, s[1 + l] /= c;
                        const h = De(u, c, .5);
                        "number" === typeof s[2 + l] && (s[2 + l] /= h), "number" === typeof s[3 + l] && (s[3 + l] /= h);
                        let d = a(s);
                        if (i) {
                            let t = 0;
                            d = d.replace(ko, (() => {
                                const e = o[t];
                                return t++, e
                            }))
                        }
                        return d
                    }
                };
            class Ro extends n.Component {
                componentDidMount() {
                    const {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: r,
                        layoutId: n
                    } = this.props, {
                        projection: i
                    } = t;
                    var o;
                    o = Co, Object.assign(D, o), i && (e.group && e.group.add(i), r && r.register && n && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", (() => {
                        this.safeToRemove()
                    })), i.setOptions({ ...i.options,
                        onExitComplete: () => this.safeToRemove()
                    })), S.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    const {
                        layoutDependency: e,
                        visualElement: r,
                        drag: n,
                        isPresent: i
                    } = this.props, o = r.projection;
                    return o ? (o.isPresent = i, n || t.layoutDependency !== e || void 0 === e ? o.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? o.promote() : o.relegate() || Yr.postRender((() => {
                        var t;
                        (null === (t = o.getStack()) || void 0 === t ? void 0 : t.members.length) || this.safeToRemove()
                    }))), null) : null
                }
                componentDidUpdate() {
                    const {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
                }
                componentWillUnmount() {
                    const {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: r
                    } = this.props, {
                        projection: n
                    } = t;
                    n && (n.scheduleCheckAfterUnmount(), (null === e || void 0 === e ? void 0 : e.group) && e.group.remove(n), (null === r || void 0 === r ? void 0 : r.deregister) && r.deregister(n))
                }
                safeToRemove() {
                    const {
                        safeToRemove: t
                    } = this.props;
                    null === t || void 0 === t || t()
                }
                render() {
                    return null
                }
            }
            const Co = {
                    borderRadius: { ...Eo,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: Eo,
                    borderTopRightRadius: Eo,
                    borderBottomLeftRadius: Eo,
                    borderBottomRightRadius: Eo,
                    boxShadow: Ao
                },
                Oo = {
                    measureLayout: function(t) {
                        const [e, r] = we(), i = (0, n.useContext)(_);
                        return n.createElement(Ro, { ...t,
                            layoutGroup: i,
                            switchLayoutGroup: (0, n.useContext)(k),
                            isPresent: e,
                            safeToRemove: r
                        })
                    }
                };
            const Uo = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                Po = Uo.length,
                Do = t => "string" === typeof t ? parseFloat(t) : t,
                Mo = t => "number" === typeof t || Z.test(t);

            function Fo(t, e) {
                var r;
                return null !== (r = t[e]) && void 0 !== r ? r : t.borderRadius
            }
            const Bo = jo(0, .5, wr),
                Lo = jo(.5, .95, pr);

            function jo(t, e, r) {
                return n => n < t ? 0 : n > e ? 1 : r(Pe(t, e, n))
            }

            function Io(t, e) {
                t.min = e.min, t.max = e.max
            }

            function Vo(t, e) {
                Io(t.x, e.x), Io(t.y, e.y)
            }

            function Wo(t, e, r, n, i) {
                return t = Fi(t -= e, 1 / r, n), void 0 !== i && (t = Fi(t, 1 / i, n)), t
            }

            function zo(t, e, [r, n, i], o, s) {
                ! function(t, e = 0, r = 1, n = .5, i, o = t, s = t) {
                    K.test(e) && (e = parseFloat(e), e = De(s.min, s.max, e / 100) - s.min);
                    if ("number" !== typeof e) return;
                    let a = De(o.min, o.max, n);
                    t === o && (a -= e), t.min = Wo(t.min, e, r, a, i), t.max = Wo(t.max, e, r, a, i)
                }(t, e[r], e[n], e[i], e.scale, o, s)
            }
            const No = ["x", "scaleX", "originX"],
                Go = ["y", "scaleY", "originY"];

            function qo(t, e, r, n) {
                zo(t.x, e, No, null === r || void 0 === r ? void 0 : r.x, null === n || void 0 === n ? void 0 : n.x), zo(t.y, e, Go, null === r || void 0 === r ? void 0 : r.y, null === n || void 0 === n ? void 0 : n.y)
            }

            function Ho(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function Yo(t) {
                return Ho(t.x) && Ho(t.y)
            }

            function Xo(t, e) {
                return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
            }

            function $o(t) {
                return vi(t.x) / vi(t.y)
            }
            class Ko {
                constructor() {
                    this.members = []
                }
                add(t) {
                    Dn(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if (Mn(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        const t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    const e = this.members.findIndex((e => t === e));
                    if (0 === e) return !1;
                    let r;
                    for (let n = e; n >= 0; n--) {
                        const t = this.members[n];
                        if (!1 !== t.isPresent) {
                            r = t;
                            break
                        }
                    }
                    return !!r && (this.promote(r), !0)
                }
                promote(t, e) {
                    var r;
                    const n = this.lead;
                    if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
                        n.instance && n.scheduleRender(), t.scheduleRender(), t.resumeFrom = n, e && (t.resumeFrom.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues, t.snapshot.isShared = !0), (null === (r = t.root) || void 0 === r ? void 0 : r.isUpdating) && (t.isLayoutDirty = !0);
                        const {
                            crossfade: i
                        } = t.options;
                        !1 === i && n.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach((t => {
                        var e, r, n, i, o;
                        null === (r = (e = t.options).onExitComplete) || void 0 === r || r.call(e), null === (o = null === (n = t.resumingFrom) || void 0 === n ? void 0 : (i = n.options).onExitComplete) || void 0 === o || o.call(i)
                    }))
                }
                scheduleRender() {
                    this.members.forEach((t => {
                        t.instance && t.scheduleRender(!1)
                    }))
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function Zo(t, e, r) {
                let n = `translate3d(${t.x.translate/e.x}px, ${t.y.translate/e.y}px, 0) `;
                if (n += `scale(${1/e.x}, ${1/e.y}) `, r) {
                    const {
                        rotate: t,
                        rotateX: e,
                        rotateY: i
                    } = r;
                    t && (n += `rotate(${t}deg) `), e && (n += `rotateX(${e}deg) `), i && (n += `rotateY(${i}deg) `)
                }
                return n += `scale(${t.x.scale*e.x}, ${t.y.scale*e.y})`, "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" === n ? "none" : n
            }
            const Qo = (t, e) => t.depth - e.depth;
            class Jo {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    Dn(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    Mn(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(Qo), this.isDirty = !1, this.children.forEach(t)
                }
            }
            const ts = ["", "X", "Y", "Z"];

            function es({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: r,
                checkIsScrollRoot: n,
                resetTransform: i
            }) {
                return class {
                    constructor(t, r = {}, n = (null === e || void 0 === e ? void 0 : e())) {
                        this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.nodes.forEach(ls), this.nodes.forEach(us)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.id = t, this.latestValues = r, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
                        for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new Jo)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new Fn), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        const r = this.eventHandlers.get(t);
                        null === r || void 0 === r || r.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    registerPotentialNode(t, e) {
                        this.potentialNodes.set(t, e)
                    }
                    mount(e, r = !1) {
                        var n;
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        const {
                            layoutId: i,
                            layout: o,
                            visualElement: s
                        } = this.options;
                        if (s && !s.getInstance() && s.mount(e), this.root.nodes.add(this), null === (n = this.parent) || void 0 === n || n.children.add(this), this.id && this.root.potentialNodes.delete(this.id), r && (o || i) && (this.isLayoutDirty = !0), t) {
                            let r;
                            const n = () => this.root.updateBlockedByResize = !1;
                            t(e, (() => {
                                this.root.updateBlockedByResize = !0, clearTimeout(r), r = window.setTimeout(n, 250), S.hasAnimatedSinceResize && (S.hasAnimatedSinceResize = !1, this.nodes.forEach(as))
                            }))
                        }
                        i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && s && (i || o) && this.addEventListener("didUpdate", (({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: r,
                            layout: n
                        }) => {
                            var i, o, a, l, u;
                            if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
                            const c = null !== (o = null !== (i = this.options.transition) && void 0 !== i ? i : s.getDefaultTransition()) && void 0 !== o ? o : ms,
                                {
                                    onLayoutAnimationStart: h,
                                    onLayoutAnimationComplete: d
                                } = s.getProps(),
                                f = !this.targetLayout || !Xo(this.targetLayout, n) || r,
                                p = !e && r;
                            if ((null === (a = this.resumeFrom) || void 0 === a ? void 0 : a.instance) || p || e && (f || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, p);
                                const e = { ...On(c, "layout"),
                                    onPlay: h,
                                    onComplete: d
                                };
                                s.shouldReduceMotion && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || 0 !== this.animationProgress || this.finishAnimation(), this.isLead() && (null === (u = (l = this.options).onExitComplete) || void 0 === u || u.call(l));
                            this.targetLayout = n
                        }))
                    }
                    unmount() {
                        var t, e;
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, Wr.preRender(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        var t;
                        return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
                    }
                    startUpdate() {
                        var t;
                        this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(cs))
                    }
                    willUpdate(t = !0) {
                        var e, r, n;
                        if (this.root.isUpdateBlocked()) return void(null === (r = (e = this.options).onExitComplete) || void 0 === r || r.call(e));
                        if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let a = 0; a < this.path.length; a++) {
                            const t = this.path[a];
                            t.shouldResetTransform = !0, t.updateScroll()
                        }
                        const {
                            layoutId: i,
                            layout: o
                        } = this.options;
                        if (void 0 === i && !o) return;
                        const s = null === (n = this.options.visualElement) || void 0 === n ? void 0 : n.getProps().transformTemplate;
                        this.prevTransformTemplateValue = null === s || void 0 === s ? void 0 : s(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    didUpdate() {
                        if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(os);
                        this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(gs), this.potentialNodes.clear()), this.nodes.forEach(ss), this.nodes.forEach(rs), this.nodes.forEach(ns), this.clearAllSnapshots(), zr.update(), zr.preRender(), zr.render())
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(is), this.sharedNodes.forEach(hs)
                    }
                    scheduleUpdateProjection() {
                        Yr.preRender(this.updateProjection, !1, !0)
                    }
                    scheduleCheckAfterUnmount() {
                        Yr.postRender((() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        }))
                    }
                    updateSnapshot() {
                        if (this.snapshot || !this.instance) return;
                        const t = this.measure(),
                            e = this.removeTransform(this.removeElementScroll(t));
                        ys(e), this.snapshot = {
                            measured: t,
                            layout: e,
                            latestValues: {}
                        }
                    }
                    updateLayout() {
                        var t;
                        if (!this.instance) return;
                        if (this.updateScroll(), (!this.options.alwaysMeasureLayout || !this.isLead()) && !this.isLayoutDirty) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let n = 0; n < this.path.length; n++) {
                                this.path[n].updateScroll()
                            }
                        const e = this.measure();
                        ys(e);
                        const r = this.layout;
                        this.layout = {
                            measured: e,
                            actual: this.removeElementScroll(e)
                        }, this.layoutCorrected = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), null === (t = this.options.visualElement) || void 0 === t || t.notifyLayoutMeasure(this.layout.actual, null === r || void 0 === r ? void 0 : r.actual)
                    }
                    updateScroll() {
                        this.options.layoutScroll && this.instance && (this.isScrollRoot = n(this.instance), this.scroll = r(this.instance))
                    }
                    resetTransform() {
                        var t;
                        if (!i) return;
                        const e = this.isLayoutDirty || this.shouldResetTransform,
                            r = this.projectionDelta && !Yo(this.projectionDelta),
                            n = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
                            o = null === n || void 0 === n ? void 0 : n(this.latestValues, ""),
                            s = o !== this.prevTransformTemplateValue;
                        e && (r || Di(this.latestValues) || s) && (i(this.instance, o), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure() {
                        const {
                            visualElement: t
                        } = this.options;
                        if (!t) return {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        const e = t.measureViewportBox(),
                            {
                                scroll: r
                            } = this.root;
                        return r && (Ii(e.x, r.x), Ii(e.y, r.y)), e
                    }
                    removeElementScroll(t) {
                        const e = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        Vo(e, t);
                        for (let r = 0; r < this.path.length; r++) {
                            const n = this.path[r],
                                {
                                    scroll: i,
                                    options: o,
                                    isScrollRoot: s
                                } = n;
                            if (n !== this.root && i && o.layoutScroll) {
                                if (s) {
                                    Vo(e, t);
                                    const {
                                        scroll: r
                                    } = this.root;
                                    r && (Ii(e.x, -r.x), Ii(e.y, -r.y))
                                }
                                Ii(e.x, i.x), Ii(e.y, i.y)
                            }
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        const r = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        Vo(r, t);
                        for (let n = 0; n < this.path.length; n++) {
                            const t = this.path[n];
                            !e && t.options.layoutScroll && t.scroll && t !== t.root && Ni(r, {
                                x: -t.scroll.x,
                                y: -t.scroll.y
                            }), Di(t.latestValues) && Ni(r, t.latestValues)
                        }
                        return Di(this.latestValues) && Ni(r, this.latestValues), r
                    }
                    removeTransform(t) {
                        var e;
                        const r = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        Vo(r, t);
                        for (let n = 0; n < this.path.length; n++) {
                            const t = this.path[n];
                            if (!t.instance) continue;
                            if (!Di(t.latestValues)) continue;
                            Pi(t.latestValues) && t.updateSnapshot();
                            const i = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            };
                            Vo(i, t.measure()), qo(r, t.latestValues, null === (e = t.snapshot) || void 0 === e ? void 0 : e.layout, i)
                        }
                        return Di(this.latestValues) && qo(r, this.latestValues), r
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection()
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    resolveTargetDelta() {
                        var t;
                        const {
                            layout: e,
                            layoutId: r
                        } = this.options;
                        var n, i, o;
                        this.layout && (e || r) && (this.targetDelta || this.relativeTarget || (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, this.relativeTargetOrigin = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, Ti(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), Vo(this.relativeTarget, this.relativeTargetOrigin))), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, this.targetWithTransforms = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (n = this.target, i = this.relativeTarget, o = this.relativeParent.target, xi(n.x, i.x, o.x), xi(n.y, i.y, o.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : Vo(this.target, this.layout.actual), ji(this.target, this.targetDelta)) : Vo(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, this.relativeTargetOrigin = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, Ti(this.relativeTargetOrigin, this.target, this.relativeParent.target), Vo(this.relativeTarget, this.relativeTargetOrigin)))))
                    }
                    getClosestProjectingParent() {
                        if (this.parent && !Di(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    calcProjection() {
                        var t;
                        const {
                            layout: e,
                            layoutId: r
                        } = this.options;
                        if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !e && !r) return;
                        const n = this.getLead();
                        Vo(this.layoutCorrected, this.layout.actual),
                            function(t, e, r, n = !1) {
                                var i, o;
                                const s = r.length;
                                if (!s) return;
                                let a, l;
                                e.x = e.y = 1;
                                for (let u = 0; u < s; u++) a = r[u], l = a.projectionDelta, "contents" !== (null === (o = null === (i = a.instance) || void 0 === i ? void 0 : i.style) || void 0 === o ? void 0 : o.display) && (n && a.options.layoutScroll && a.scroll && a !== a.root && Ni(t, {
                                    x: -a.scroll.x,
                                    y: -a.scroll.y
                                }), l && (e.x *= l.x.scale, e.y *= l.y.scale, ji(t, l)), n && Di(a.latestValues) && Ni(t, a.latestValues))
                            }(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== n);
                        const {
                            target: i
                        } = n;
                        if (!i) return;
                        this.projectionDelta || (this.projectionDelta = {
                            x: {
                                translate: 0,
                                scale: 1,
                                origin: 0,
                                originPoint: 0
                            },
                            y: {
                                translate: 0,
                                scale: 1,
                                origin: 0,
                                originPoint: 0
                            }
                        }, this.projectionDeltaWithTransform = {
                            x: {
                                translate: 0,
                                scale: 1,
                                origin: 0,
                                originPoint: 0
                            },
                            y: {
                                translate: 0,
                                scale: 1,
                                origin: 0,
                                originPoint: 0
                            }
                        });
                        const o = this.treeScale.x,
                            s = this.treeScale.y,
                            a = this.projectionTransform;
                        wi(this.projectionDelta, this.layoutCorrected, i, this.latestValues), this.projectionTransform = Zo(this.projectionDelta, this.treeScale), this.projectionTransform === a && this.treeScale.x === o && this.treeScale.y === s || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", i))
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        var e, r, n;
                        null === (r = (e = this.options).scheduleRender) || void 0 === r || r.call(e), t && (null === (n = this.getStack()) || void 0 === n || n.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(t, e = !1) {
                        var r;
                        const n = this.snapshot,
                            i = (null === n || void 0 === n ? void 0 : n.latestValues) || {},
                            o = { ...this.latestValues
                            },
                            s = {
                                x: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                },
                                y: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                }
                            };
                        this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
                        const a = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            },
                            l = null === n || void 0 === n ? void 0 : n.isShared,
                            u = ((null === (r = this.getStack()) || void 0 === r ? void 0 : r.members.length) || 0) <= 1,
                            c = Boolean(l && !u && !0 === this.options.crossfade && !this.path.some(ps));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            var r;
                            const n = e / 1e3;
                            var h, d, f, p;
                            ds(s.x, t.x, n), ds(s.y, t.y, n), this.setTargetDelta(s), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (r = this.relativeParent) || void 0 === r ? void 0 : r.layout) && (Ti(a, this.layout.actual, this.relativeParent.layout.actual), h = this.relativeTarget, d = this.relativeTargetOrigin, f = a, p = n, fs(h.x, d.x, f.x, p), fs(h.y, d.y, f.y, p)), l && (this.animationValues = o, function(t, e, r, n, i, o) {
                                var s, a, l, u;
                                i ? (t.opacity = De(0, null !== (s = r.opacity) && void 0 !== s ? s : 1, Bo(n)), t.opacityExit = De(null !== (a = e.opacity) && void 0 !== a ? a : 1, 0, Lo(n))) : o && (t.opacity = De(null !== (l = e.opacity) && void 0 !== l ? l : 1, null !== (u = r.opacity) && void 0 !== u ? u : 1, n));
                                for (let c = 0; c < Po; c++) {
                                    const i = `border${Uo[c]}Radius`;
                                    let o = Fo(e, i),
                                        s = Fo(r, i);
                                    void 0 === o && void 0 === s || (o || (o = 0), s || (s = 0), 0 === o || 0 === s || Mo(o) === Mo(s) ? (t[i] = Math.max(De(Do(o), Do(s), n), 0), (K.test(s) || K.test(o)) && (t[i] += "%")) : t[i] = s)
                                }(e.rotate || r.rotate) && (t.rotate = De(e.rotate || 0, r.rotate || 0, n))
                            }(o, i, this.latestValues, n, c, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                        }, this.mixTargetDelta(0)
                    }
                    startAnimation(t) {
                        var e, r;
                        this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (r = this.resumingFrom.currentAnimation) || void 0 === r || r.stop()), this.pendingAnimation && (Wr.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Yr.update((() => {
                            S.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, r = {}) {
                                const n = L(t) ? t : Ln(t);
                                return Un("", n, e, r), {
                                    stop: () => n.stop(),
                                    isAnimating: () => n.isAnimating()
                                }
                            }(0, 1e3, { ...t,
                                onUpdate: e => {
                                    var r;
                                    this.mixTargetDelta(e), null === (r = t.onUpdate) || void 0 === r || r.call(t, e)
                                },
                                onComplete: () => {
                                    var e;
                                    null === (e = t.onComplete) || void 0 === e || e.call(t), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        }))
                    }
                    completeAnimation() {
                        var t;
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        var t;
                        this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        const t = this.getLead();
                        let {
                            targetWithTransforms: e,
                            target: r,
                            layout: n,
                            latestValues: i
                        } = t;
                        if (e && r && n) {
                            if (this !== t && this.layout && n && bs(this.options.animationType, this.layout.actual, n.actual)) {
                                r = this.target || {
                                    x: {
                                        min: 0,
                                        max: 0
                                    },
                                    y: {
                                        min: 0,
                                        max: 0
                                    }
                                };
                                const e = vi(this.layout.actual.x);
                                r.x.min = t.target.x.min, r.x.max = r.x.min + e;
                                const n = vi(this.layout.actual.y);
                                r.y.min = t.target.y.min, r.y.max = r.y.min + n
                            }
                            Vo(e, r), Ni(e, i), wi(this.projectionDeltaWithTransform, this.layoutCorrected, e, i)
                        }
                    }
                    registerSharedNode(t, e) {
                        var r, n, i;
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new Ko);
                        this.sharedNodes.get(t).add(e), e.promote({
                            transition: null === (r = e.options.initialPromotionConfig) || void 0 === r ? void 0 : r.transition,
                            preserveFollowOpacity: null === (i = null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.shouldPreserveFollowOpacity) || void 0 === i ? void 0 : i.call(n, e)
                        })
                    }
                    isLead() {
                        const t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        const {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        const {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        const {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: r
                    } = {}) {
                        const n = this.getStack();
                        n && n.promote(this, r), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        const t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetRotation() {
                        const {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1;
                        const r = {};
                        for (let n = 0; n < ts.length; n++) {
                            const i = "rotate" + ts[n];
                            t.getStaticValue(i) && (e = !0, r[i] = t.getStaticValue(i), t.setStaticValue(i, 0))
                        }
                        if (e) {
                            null === t || void 0 === t || t.syncRender();
                            for (const e in r) t.setStaticValue(e, r[e]);
                            t.scheduleRender()
                        }
                    }
                    getProjectionStyles(t = {}) {
                        var e, r, n;
                        const i = {};
                        if (!this.instance || this.isSVG) return i;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        i.visibility = "";
                        const o = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
                        if (this.needsReset) return this.needsReset = !1, i.opacity = "", i.pointerEvents = Ut(t.pointerEvents) || "", i.transform = o ? o(this.latestValues, "") : "none", i;
                        const s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            const e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = Ut(t.pointerEvents) || ""), this.hasProjected && !Di(this.latestValues) && (e.transform = o ? o({}, "") : "none", this.hasProjected = !1), e
                        }
                        const a = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), i.transform = Zo(this.projectionDeltaWithTransform, this.treeScale, a), o && (i.transform = o(a, i.transform));
                        const {
                            x: l,
                            y: u
                        } = this.projectionDelta;
                        i.transformOrigin = `${100*l.origin}% ${100*u.origin}% 0`, s.animationValues ? i.opacity = s === this ? null !== (n = null !== (r = a.opacity) && void 0 !== r ? r : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : i.opacity = s === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0;
                        for (const c in D) {
                            if (void 0 === a[c]) continue;
                            const {
                                correct: t,
                                applyTo: e
                            } = D[c], r = t(a[c], s);
                            if (e) {
                                const t = e.length;
                                for (let n = 0; n < t; n++) i[e[n]] = r
                            } else i[c] = r
                        }
                        return this.options.layoutId && (i.pointerEvents = s === this ? Ut(t.pointerEvents) || "" : "none"), i
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach((t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        })), this.root.nodes.forEach(os), this.root.sharedNodes.clear()
                    }
                }
            }

            function rs(t) {
                t.updateLayout()
            }

            function ns(t) {
                var e, r, n;
                const i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    const {
                        actual: e,
                        measured: r
                    } = t.layout, {
                        animationType: n
                    } = t.options;
                    "size" === n ? Ci((t => {
                        const r = i.isShared ? i.measured[t] : i.layout[t],
                            n = vi(r);
                        r.min = e[t].min, r.max = r.min + n
                    })) : bs(n, i.layout, e) && Ci((t => {
                        const r = i.isShared ? i.measured[t] : i.layout[t],
                            n = vi(e[t]);
                        r.max = r.min + n
                    }));
                    const o = {
                        x: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        },
                        y: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        }
                    };
                    wi(o, e, i.layout);
                    const s = {
                        x: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        },
                        y: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        }
                    };
                    i.isShared ? wi(s, t.applyTransform(r, !0), i.measured) : wi(s, e, i.layout);
                    const a = !Yo(o);
                    let l = !1;
                    if (!t.resumeFrom && (t.relativeParent = t.getClosestProjectingParent(), t.relativeParent && !t.relativeParent.resumeFrom)) {
                        const {
                            snapshot: r,
                            layout: n
                        } = t.relativeParent;
                        if (r && n) {
                            const t = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            };
                            Ti(t, i.layout, r.layout);
                            const o = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            };
                            Ti(o, e, n.actual), Xo(t, o) || (l = !0)
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: i,
                        delta: s,
                        layoutDelta: o,
                        hasLayoutChanged: a,
                        hasRelativeTargetChanged: l
                    })
                } else t.isLead() && (null === (n = (r = t.options).onExitComplete) || void 0 === n || n.call(r));
                t.options.transition = void 0
            }

            function is(t) {
                t.clearSnapshot()
            }

            function os(t) {
                t.clearMeasurements()
            }

            function ss(t) {
                const {
                    visualElement: e
                } = t.options;
                (null === e || void 0 === e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notifyBeforeLayoutMeasure(), t.resetTransform()
            }

            function as(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
            }

            function ls(t) {
                t.resolveTargetDelta()
            }

            function us(t) {
                t.calcProjection()
            }

            function cs(t) {
                t.resetRotation()
            }

            function hs(t) {
                t.removeLeadSnapshot()
            }

            function ds(t, e, r) {
                t.translate = De(e.translate, 0, r), t.scale = De(e.scale, 1, r), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function fs(t, e, r, n) {
                t.min = De(e.min, r.min, n), t.max = De(e.max, r.max, n)
            }

            function ps(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            const ms = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function gs(t, e) {
                let r = t.root;
                for (let i = t.path.length - 1; i >= 0; i--)
                    if (Boolean(t.path[i].instance)) {
                        r = t.path[i];
                        break
                    }
                const n = (r && r !== t.root ? r.instance : document).querySelector(`[data-projection-id="${e}"]`);
                n && t.mount(n, !0)
            }

            function vs(t) {
                t.min = Math.round(t.min), t.max = Math.round(t.max)
            }

            function ys(t) {
                vs(t.x), vs(t.y)
            }

            function bs(t, e, r) {
                return "position" === t || "preserve-aspect" === t && ! function(t, e, r = .1) {
                    return ui(t, e) <= r
                }($o(e), $o(r), .2)
            }
            const ws = es({
                    attachResizeListener: (t, e) => Lt(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                xs = {
                    current: void 0
                },
                Ss = es({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!xs.current) {
                            const t = new ws(0, {});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), xs.current = t
                        }
                        return xs.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
                }),
                Ts = { ...oi,
                    ...be,
                    ...Xi,
                    ...Oo
                },
                _s = O(((t, e) => function(t, {
                    forwardMotionProps: e = !1
                }, r, n, i) {
                    return { ...P(t) ? Mt : Ft,
                        preloadedFeatures: r,
                        useRender: xt(e),
                        createVisualElement: n,
                        projectionNodeConstructor: i,
                        Component: t
                    }
                }(t, e, Ts, To, Ss)))
        },
        2587: function(t, e, r) {
            "use strict";

            function n(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            r.d(e, {
                Z: function() {
                    return n
                }
            })
        },
        6864: function(t, e, r) {
            "use strict";

            function n() {
                return n = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, n.apply(this, arguments)
            }
            r.d(e, {
                Z: function() {
                    return n
                }
            })
        },
        6835: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return i
                }
            });
            var n = r(2937);

            function i(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            s = !0,
                            a = !1;
                        try {
                            for (r = r.call(t); !(s = (n = r.next()).done) && (o.push(n.value), !e || o.length !== e); s = !0);
                        } catch (l) {
                            a = !0, i = l
                        } finally {
                            try {
                                s || null == r.return || r.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || (0, n.Z)(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        },
        7812: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return o
                }
            });
            var n = r(2587);
            var i = r(2937);

            function o(t) {
                return function(t) {
                    if (Array.isArray(t)) return (0, n.Z)(t)
                }(t) || function(t) {
                    if ("undefined" !== typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || (0, i.Z)(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        },
        2937: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return i
                }
            });
            var n = r(2587);

            function i(t, e) {
                if (t) {
                    if ("string" === typeof t) return (0, n.Z)(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? (0, n.Z)(t, e) : void 0
                }
            }
        },
        7536: function(t, e, r) {
            "use strict";
            r.d(e, {
                bc: function() {
                    return W
                },
                cI: function() {
                    return Rt
                }
            });
            var n = r(7294),
                i = t => "checkbox" === t.type,
                o = t => t instanceof Date,
                s = t => null == t;
            const a = t => "object" === typeof t;
            var l = t => !s(t) && !Array.isArray(t) && a(t) && !o(t),
                u = t => l(t) && t.target ? i(t.target) ? t.target.checked : t.target.value : t,
                c = (t, e) => t.has((t => t.substring(0, t.search(/\.\d+(\.|$)/)) || t)(e)),
                h = t => Array.isArray(t) ? t.filter(Boolean) : [],
                d = t => void 0 === t,
                f = (t, e, r) => {
                    if (!e || !l(t)) return r;
                    const n = h(e.split(/[,[\].]+?/)).reduce(((t, e) => s(t) ? t : t[e]), t);
                    return d(n) || n === t ? d(t[e]) ? r : t[e] : n
                };
            const p = "blur",
                m = "focusout",
                g = "change",
                v = "onBlur",
                y = "onChange",
                b = "onSubmit",
                w = "onTouched",
                x = "all",
                S = "max",
                T = "min",
                _ = "maxLength",
                E = "minLength",
                k = "pattern",
                A = "required",
                R = "validate",
                C = n.createContext(null),
                O = () => n.useContext(C);
            var U = (t, e, r, n = !0) => {
                    const i = {};
                    for (const o in t) Object.defineProperty(i, o, {
                        get: () => {
                            const i = o;
                            return e[i] !== x && (e[i] = !n || x), r && (r[i] = !0), t[i]
                        }
                    });
                    return i
                },
                P = t => l(t) && !Object.keys(t).length,
                D = (t, e, r) => {
                    const {
                        name: n,
                        ...i
                    } = t;
                    return P(i) || Object.keys(i).length >= Object.keys(e).length || Object.keys(i).find((t => e[t] === (!r || x)))
                },
                M = t => Array.isArray(t) ? t : [t],
                F = (t, e, r) => r && e ? t === e : !t || !e || t === e || M(t).some((t => t && (t.startsWith(e) || e.startsWith(t))));

            function B(t) {
                const e = n.useRef(t);
                e.current = t, n.useEffect((() => {
                    const r = !t.disabled && e.current.subject.subscribe({
                        next: e.current.callback
                    });
                    return () => (t => {
                        t && t.unsubscribe()
                    })(r)
                }), [t.disabled])
            }
            var L = t => "string" === typeof t,
                j = (t, e, r, n) => {
                    const i = Array.isArray(t);
                    return L(t) ? (n && e.watch.add(t), f(r, t)) : i ? t.map((t => (n && e.watch.add(t), f(r, t)))) : (n && (e.watchAll = !0), r)
                },
                I = t => "function" === typeof t,
                V = t => {
                    for (const e in t)
                        if (I(t[e])) return !0;
                    return !1
                };

            function W(t) {
                const e = O(),
                    {
                        name: r,
                        control: i = e.control,
                        shouldUnregister: o
                    } = t,
                    s = c(i._names.array, r),
                    a = function(t) {
                        const e = O(),
                            {
                                control: r = e.control,
                                name: i,
                                defaultValue: o,
                                disabled: s,
                                exact: a
                            } = t || {},
                            u = n.useRef(i);
                        u.current = i;
                        const c = n.useCallback((t => {
                            if (F(u.current, t.name, a)) {
                                const e = j(u.current, r._names, t.values || r._formValues);
                                f(d(u.current) || l(e) && !V(e) ? { ...e
                                } : Array.isArray(e) ? [...e] : d(e) ? o : e)
                            }
                        }), [r, a, o]);
                        B({
                            disabled: s,
                            subject: r._subjects.watch,
                            callback: c
                        });
                        const [h, f] = n.useState(d(o) ? r._getWatch(i) : o);
                        return n.useEffect((() => {
                            r._removeUnmounted()
                        })), h
                    }({
                        control: i,
                        name: r,
                        defaultValue: f(i._formValues, r, f(i._defaultValues, r, t.defaultValue)),
                        exact: !0
                    }),
                    h = function(t) {
                        const e = O(),
                            {
                                control: r = e.control,
                                disabled: i,
                                name: o,
                                exact: s
                            } = t || {},
                            [a, l] = n.useState(r._formState),
                            u = n.useRef({
                                isDirty: !1,
                                dirtyFields: !1,
                                touchedFields: !1,
                                isValidating: !1,
                                isValid: !1,
                                errors: !1
                            }),
                            c = n.useRef(o),
                            h = n.useRef(!0);
                        return c.current = o, B({
                            disabled: i,
                            callback: n.useCallback((t => h.current && F(c.current, t.name, s) && D(t, u.current) && l({ ...r._formState,
                                ...t
                            })), [r, s]),
                            subject: r._subjects.state
                        }), n.useEffect((() => (h.current = !0, () => {
                            h.current = !1
                        })), []), U(a, r._proxyFormState, u.current, !1)
                    }({
                        control: i,
                        name: r
                    }),
                    m = n.useRef(i.register(r, { ...t.rules,
                        value: a
                    }));
                return n.useEffect((() => {
                    const t = (t, e) => {
                        const r = f(i._fields, t);
                        r && (r._f.mount = e)
                    };
                    return t(r, !0), () => {
                        const e = i._options.shouldUnregister || o;
                        (s ? e && !i._stateFlags.action : e) ? i.unregister(r): t(r, !1)
                    }
                }), [r, i, s, o]), {
                    field: {
                        name: r,
                        value: a,
                        onChange: n.useCallback((t => {
                            m.current.onChange({
                                target: {
                                    value: u(t),
                                    name: r
                                },
                                type: g
                            })
                        }), [r]),
                        onBlur: n.useCallback((() => {
                            m.current.onBlur({
                                target: {
                                    value: f(i._formValues, r),
                                    name: r
                                },
                                type: p
                            })
                        }), [r, i]),
                        ref: n.useCallback((t => {
                            const e = f(i._fields, r);
                            t && e && t.focus && (e._f.ref = {
                                focus: () => t.focus(),
                                select: () => t.select(),
                                setCustomValidity: e => t.setCustomValidity(e),
                                reportValidity: () => t.reportValidity()
                            })
                        }), [r, i._fields])
                    },
                    formState: h,
                    fieldState: Object.defineProperties({}, {
                        invalid: {
                            get: () => !!f(h.errors, r)
                        },
                        isDirty: {
                            get: () => !!f(h.dirtyFields, r)
                        },
                        isTouched: {
                            get: () => !!f(h.touchedFields, r)
                        },
                        error: {
                            get: () => f(h.errors, r)
                        }
                    })
                }
            }
            var z = (t, e, r, n, i) => e ? { ...r[t],
                    types: { ...r[t] && r[t].types ? r[t].types : {},
                        [n]: i || !0
                    }
                } : {},
                N = t => /^\w*$/.test(t),
                G = t => h(t.replace(/["|']|\]/g, "").split(/\.|\[/));

            function q(t, e, r) {
                let n = -1;
                const i = N(e) ? [e] : G(e),
                    o = i.length,
                    s = o - 1;
                for (; ++n < o;) {
                    const e = i[n];
                    let o = r;
                    if (n !== s) {
                        const r = t[e];
                        o = l(r) || Array.isArray(r) ? r : isNaN(+i[n + 1]) ? {} : []
                    }
                    t[e] = o, t = t[e]
                }
                return t
            }
            const H = (t, e, r) => {
                for (const n of r || Object.keys(t)) {
                    const r = f(t, n);
                    if (r) {
                        const {
                            _f: t,
                            ...n
                        } = r;
                        if (t && e(t.name)) {
                            if (t.ref.focus && d(t.ref.focus())) break;
                            if (t.refs) {
                                t.refs[0].focus();
                                break
                            }
                        } else l(n) && H(n, e)
                    }
                }
            };
            var Y = (t, e, r) => !r && (e.watchAll || e.watch.has(t) || [...e.watch].some((e => t.startsWith(e) && /^\.\w+/.test(t.slice(e.length))))),
                X = (t, e, r) => {
                    const n = h(f(t, r));
                    return q(n, "root", e[r]), q(t, r, n), t
                },
                $ = t => "boolean" === typeof t,
                K = t => "file" === t.type,
                Z = t => L(t) || n.isValidElement(t),
                Q = t => "radio" === t.type,
                J = t => t instanceof RegExp;
            const tt = {
                    value: !1,
                    isValid: !1
                },
                et = {
                    value: !0,
                    isValid: !0
                };
            var rt = t => {
                if (Array.isArray(t)) {
                    if (t.length > 1) {
                        const e = t.filter((t => t && t.checked && !t.disabled)).map((t => t.value));
                        return {
                            value: e,
                            isValid: !!e.length
                        }
                    }
                    return t[0].checked && !t[0].disabled ? t[0].attributes && !d(t[0].attributes.value) ? d(t[0].value) || "" === t[0].value ? et : {
                        value: t[0].value,
                        isValid: !0
                    } : et : tt
                }
                return tt
            };
            const nt = {
                isValid: !1,
                value: null
            };
            var it = t => Array.isArray(t) ? t.reduce(((t, e) => e && e.checked && !e.disabled ? {
                isValid: !0,
                value: e.value
            } : t), nt) : nt;

            function ot(t, e, r = "validate") {
                if (Z(t) || Array.isArray(t) && t.every(Z) || $(t) && !t) return {
                    type: r,
                    message: Z(t) ? t : "",
                    ref: e
                }
            }
            var st = t => l(t) && !J(t) ? t : {
                    value: t,
                    message: ""
                },
                at = async (t, e, r, n, o) => {
                    const {
                        ref: a,
                        refs: u,
                        required: c,
                        maxLength: h,
                        minLength: d,
                        min: f,
                        max: p,
                        pattern: m,
                        validate: g,
                        name: v,
                        valueAsNumber: y,
                        mount: b,
                        disabled: w
                    } = t._f;
                    if (!b || w) return {};
                    const x = u ? u[0] : a,
                        C = t => {
                            n && x.reportValidity && (x.setCustomValidity($(t) ? "" : t || " "), x.reportValidity())
                        },
                        O = {},
                        U = Q(a),
                        D = i(a),
                        M = U || D,
                        F = (y || K(a)) && !a.value || "" === e || Array.isArray(e) && !e.length,
                        B = z.bind(null, v, r, O),
                        j = (t, e, r, n = _, i = E) => {
                            const o = t ? e : r;
                            O[v] = {
                                type: t ? n : i,
                                message: o,
                                ref: a,
                                ...B(t ? n : i, o)
                            }
                        };
                    if (o ? !Array.isArray(e) || !e.length : c && (!M && (F || s(e)) || $(e) && !e || D && !rt(u).isValid || U && !it(u).isValid)) {
                        const {
                            value: t,
                            message: e
                        } = Z(c) ? {
                            value: !!c,
                            message: c
                        } : st(c);
                        if (t && (O[v] = {
                                type: A,
                                message: e,
                                ref: x,
                                ...B(A, e)
                            }, !r)) return C(e), O
                    }
                    if (!F && (!s(f) || !s(p))) {
                        let t, n;
                        const i = st(p),
                            o = st(f);
                        if (s(e) || isNaN(e)) {
                            const r = a.valueAsDate || new Date(e);
                            L(i.value) && (t = r > new Date(i.value)), L(o.value) && (n = r < new Date(o.value))
                        } else {
                            const r = a.valueAsNumber || +e;
                            s(i.value) || (t = r > i.value), s(o.value) || (n = r < o.value)
                        }
                        if ((t || n) && (j(!!t, i.message, o.message, S, T), !r)) return C(O[v].message), O
                    }
                    if ((h || d) && !F && (L(e) || o && Array.isArray(e))) {
                        const t = st(h),
                            n = st(d),
                            i = !s(t.value) && e.length > t.value,
                            o = !s(n.value) && e.length < n.value;
                        if ((i || o) && (j(i, t.message, n.message), !r)) return C(O[v].message), O
                    }
                    if (m && !F && L(e)) {
                        const {
                            value: t,
                            message: n
                        } = st(m);
                        if (J(t) && !e.match(t) && (O[v] = {
                                type: k,
                                message: n,
                                ref: a,
                                ...B(k, n)
                            }, !r)) return C(n), O
                    }
                    if (g)
                        if (I(g)) {
                            const t = ot(await g(e), x);
                            if (t && (O[v] = { ...t,
                                    ...B(R, t.message)
                                }, !r)) return C(t.message), O
                        } else if (l(g)) {
                        let t = {};
                        for (const n in g) {
                            if (!P(t) && !r) break;
                            const i = ot(await g[n](e), x, n);
                            i && (t = { ...i,
                                ...B(n, i.message)
                            }, C(i.message), r && (O[v] = t))
                        }
                        if (!P(t) && (O[v] = {
                                ref: x,
                                ...t
                            }, !r)) return O
                    }
                    return C(!0), O
                };
            var lt = "undefined" !== typeof window && "undefined" !== typeof window.HTMLElement && "undefined" !== typeof document;

            function ut(t) {
                let e;
                const r = Array.isArray(t);
                if (t instanceof Date) e = new Date(t);
                else if (t instanceof Set) e = new Set(t);
                else {
                    if (lt && (t instanceof Blob || t instanceof FileList) || !r && !l(t)) return t;
                    e = r ? [] : {};
                    for (const r in t) {
                        if (I(t[r])) {
                            e = t;
                            break
                        }
                        e[r] = ut(t[r])
                    }
                }
                return e
            }
            var ct = t => ({
                isOnSubmit: !t || t === b,
                isOnBlur: t === v,
                isOnChange: t === y,
                isOnAll: t === x,
                isOnTouch: t === w
            });

            function ht(t) {
                for (const e in t)
                    if (!d(t[e])) return !1;
                return !0
            }

            function dt(t, e) {
                const r = N(e) ? [e] : G(e),
                    n = 1 == r.length ? t : function(t, e) {
                        const r = e.slice(0, -1).length;
                        let n = 0;
                        for (; n < r;) t = d(t) ? n++ : t[e[n++]];
                        return t
                    }(t, r),
                    i = r[r.length - 1];
                let o;
                n && delete n[i];
                for (let s = 0; s < r.slice(0, -1).length; s++) {
                    let e, n = -1;
                    const i = r.slice(0, -(s + 1)),
                        a = i.length - 1;
                    for (s > 0 && (o = t); ++n < i.length;) {
                        const r = i[n];
                        e = e ? e[r] : t[r], a === n && (l(e) && P(e) || Array.isArray(e) && ht(e)) && (o ? delete o[r] : delete t[r]), o = e
                    }
                }
                return t
            }

            function ft() {
                let t = [];
                return {
                    get observers() {
                        return t
                    },
                    next: e => {
                        for (const r of t) r.next(e)
                    },
                    subscribe: e => (t.push(e), {
                        unsubscribe: () => {
                            t = t.filter((t => t !== e))
                        }
                    }),
                    unsubscribe: () => {
                        t = []
                    }
                }
            }
            var pt = t => s(t) || !a(t);

            function mt(t, e) {
                if (pt(t) || pt(e)) return t === e;
                if (o(t) && o(e)) return t.getTime() === e.getTime();
                const r = Object.keys(t),
                    n = Object.keys(e);
                if (r.length !== n.length) return !1;
                for (const i of r) {
                    const r = t[i];
                    if (!n.includes(i)) return !1;
                    if ("ref" !== i) {
                        const t = e[i];
                        if (o(r) && o(t) || l(r) && l(t) || Array.isArray(r) && Array.isArray(t) ? !mt(r, t) : r !== t) return !1
                    }
                }
                return !0
            }
            var gt = t => {
                    const e = t ? t.ownerDocument : 0;
                    return t instanceof(e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement)
                },
                vt = t => "select-multiple" === t.type,
                yt = t => gt(t) && t.isConnected;

            function bt(t, e = {}) {
                const r = Array.isArray(t);
                if (l(t) || r)
                    for (const n in t) Array.isArray(t[n]) || l(t[n]) && !V(t[n]) ? (e[n] = Array.isArray(t[n]) ? [] : {}, bt(t[n], e[n])) : s(t[n]) || (e[n] = !0);
                return e
            }

            function wt(t, e, r) {
                const n = Array.isArray(t);
                if (l(t) || n)
                    for (const i in t) Array.isArray(t[i]) || l(t[i]) && !V(t[i]) ? d(e) || pt(r[i]) ? r[i] = Array.isArray(t[i]) ? bt(t[i], []) : { ...bt(t[i])
                    } : wt(t[i], s(e) ? {} : e[i], r[i]) : r[i] = !mt(t[i], e[i]);
                return r
            }
            var xt = (t, e) => wt(t, e, bt(e)),
                St = (t, {
                    valueAsNumber: e,
                    valueAsDate: r,
                    setValueAs: n
                }) => d(t) ? t : e ? "" === t || s(t) ? NaN : +t : r && L(t) ? new Date(t) : n ? n(t) : t;

            function Tt(t) {
                const e = t.ref;
                if (!(t.refs ? t.refs.every((t => t.disabled)) : e.disabled)) return K(e) ? e.files : Q(e) ? it(t.refs).value : vt(e) ? [...e.selectedOptions].map((({
                    value: t
                }) => t)) : i(e) ? rt(t.refs).value : St(d(e.value) ? t.ref.value : e.value, t)
            }
            var _t = t => d(t) ? void 0 : J(t) ? t.source : l(t) ? J(t.value) ? t.value.source : t.value : t;

            function Et(t, e, r) {
                const n = f(t, r);
                if (n || N(r)) return {
                    error: n,
                    name: r
                };
                const i = r.split(".");
                for (; i.length;) {
                    const n = i.join("."),
                        o = f(e, n),
                        s = f(t, n);
                    if (o && !Array.isArray(o) && r !== n) return {
                        name: r
                    };
                    if (s && s.type) return {
                        name: n,
                        error: s
                    };
                    i.pop()
                }
                return {
                    name: r
                }
            }
            const kt = {
                mode: b,
                reValidateMode: y,
                shouldFocusError: !0
            };

            function At(t = {}) {
                let e, r = { ...kt,
                        ...t
                    },
                    n = {
                        isDirty: !1,
                        isValidating: !1,
                        dirtyFields: {},
                        isSubmitted: !1,
                        submitCount: 0,
                        touchedFields: {},
                        isSubmitting: !1,
                        isSubmitSuccessful: !1,
                        isValid: !1,
                        errors: {}
                    },
                    a = {},
                    l = ut(r.defaultValues) || {},
                    g = r.shouldUnregister ? {} : ut(l),
                    v = {
                        action: !1,
                        mount: !1,
                        watch: !1
                    },
                    y = {
                        mount: new Set,
                        unMount: new Set,
                        array: new Set,
                        watch: new Set
                    },
                    b = 0,
                    w = {};
                const S = {
                        isDirty: !1,
                        dirtyFields: !1,
                        touchedFields: !1,
                        isValidating: !1,
                        isValid: !1,
                        errors: !1
                    },
                    T = {
                        watch: ft(),
                        array: ft(),
                        state: ft()
                    },
                    _ = ct(r.mode),
                    E = ct(r.reValidateMode),
                    k = r.criteriaMode === x,
                    A = async t => {
                        let e = !1;
                        return S.isValid && (e = r.resolver ? P((await U()).errors) : await D(a, !0), t || e === n.isValid || (n.isValid = e, T.state.next({
                            isValid: e
                        }))), e
                    },
                    R = (t, e, r, n) => {
                        const i = f(a, t);
                        if (i) {
                            const o = f(g, t, d(r) ? f(l, t) : r);
                            d(o) || n && n.defaultChecked || e ? q(g, t, e ? o : Tt(i._f)) : V(t, o), v.mount && A()
                        }
                    },
                    C = (t, e, r, i, o) => {
                        let s = !1;
                        const a = {
                                name: t
                            },
                            u = f(n.touchedFields, t);
                        if (S.isDirty) {
                            const t = n.isDirty;
                            n.isDirty = a.isDirty = F(), s = t !== a.isDirty
                        }
                        if (S.dirtyFields && (!r || i)) {
                            const r = f(n.dirtyFields, t);
                            mt(f(l, t), e) ? dt(n.dirtyFields, t) : q(n.dirtyFields, t, !0), a.dirtyFields = n.dirtyFields, s = s || r !== f(n.dirtyFields, t)
                        }
                        return r && !u && (q(n.touchedFields, t, r), a.touchedFields = n.touchedFields, s = s || S.touchedFields && u !== r), s && o && T.state.next(a), s ? a : {}
                    },
                    O = async (r, i, o, s) => {
                        const a = f(n.errors, r),
                            l = S.isValid && n.isValid !== i;
                        var u;
                        if (t.delayError && o ? (u = () => ((t, e) => {
                                q(n.errors, t, e), T.state.next({
                                    errors: n.errors
                                })
                            })(r, o), e = t => {
                                clearTimeout(b), b = window.setTimeout(u, t)
                            }, e(t.delayError)) : (clearTimeout(b), e = null, o ? q(n.errors, r, o) : dt(n.errors, r)), (o ? !mt(a, o) : a) || !P(s) || l) {
                            const t = { ...s,
                                ...l ? {
                                    isValid: i
                                } : {},
                                errors: n.errors,
                                name: r
                            };
                            n = { ...n,
                                ...t
                            }, T.state.next(t)
                        }
                        w[r]--, S.isValidating && !Object.values(w).some((t => t)) && (T.state.next({
                            isValidating: !1
                        }), w = {})
                    },
                    U = async t => r.resolver ? await r.resolver({ ...g
                    }, r.context, ((t, e, r, n) => {
                        const i = {};
                        for (const o of t) {
                            const t = f(e, o);
                            t && q(i, o, t._f)
                        }
                        return {
                            criteriaMode: r,
                            names: [...t],
                            fields: i,
                            shouldUseNativeValidation: n
                        }
                    })(t || y.mount, a, r.criteriaMode, r.shouldUseNativeValidation)) : {},
                    D = async (t, e, i = {
                        valid: !0
                    }) => {
                        for (const o in t) {
                            const s = t[o];
                            if (s) {
                                const {
                                    _f: t,
                                    ...o
                                } = s;
                                if (t) {
                                    const o = y.array.has(t.name),
                                        a = await at(s, f(g, t.name), k, r.shouldUseNativeValidation, o);
                                    if (a[t.name] && (i.valid = !1, e)) break;
                                    !e && (f(a, t.name) ? o ? X(n.errors, a, t.name) : q(n.errors, t.name, a[t.name]) : dt(n.errors, t.name))
                                }
                                o && await D(o, e, i)
                            }
                        }
                        return i.valid
                    },
                    F = (t, e) => (t && e && q(g, t, e), !mt(Z(), l)),
                    B = (t, e, r) => {
                        const n = { ...v.mount ? g : d(e) ? l : L(t) ? {
                                [t]: e
                            } : e
                        };
                        return j(t, y, n, r)
                    },
                    V = (t, e, r = {}) => {
                        const n = f(a, t);
                        let o = e;
                        if (n) {
                            const r = n._f;
                            r && (!r.disabled && q(g, t, St(e, r)), o = lt && gt(r.ref) && s(e) ? "" : e, vt(r.ref) ? [...r.ref.options].forEach((t => t.selected = o.includes(t.value))) : r.refs ? i(r.ref) ? r.refs.length > 1 ? r.refs.forEach((t => !t.disabled && (t.checked = Array.isArray(o) ? !!o.find((e => e === t.value)) : o === t.value))) : r.refs[0] && (r.refs[0].checked = !!o) : r.refs.forEach((t => t.checked = t.value === o)) : K(r.ref) ? r.ref.value = "" : (r.ref.value = o, r.ref.type || T.watch.next({
                                name: t
                            })))
                        }(r.shouldDirty || r.shouldTouch) && C(t, o, r.shouldTouch, r.shouldDirty, !0), r.shouldValidate && G(t)
                    },
                    W = (t, e, r) => {
                        for (const n in e) {
                            const i = e[n],
                                s = `${t}.${n}`,
                                l = f(a, s);
                            !y.array.has(t) && pt(i) && (!l || l._f) || o(i) ? V(s, i, r) : W(s, i, r)
                        }
                    },
                    z = (t, e, r = {}) => {
                        const i = f(a, t),
                            o = y.array.has(t),
                            u = ut(e);
                        q(g, t, u), o ? (T.array.next({
                            name: t,
                            values: g
                        }), (S.isDirty || S.dirtyFields) && r.shouldDirty && (n.dirtyFields = xt(l, g), T.state.next({
                            name: t,
                            dirtyFields: n.dirtyFields,
                            isDirty: F(t, u)
                        }))) : !i || i._f || s(u) ? V(t, u, r) : W(t, u, r), Y(t, y) && T.state.next({}), T.watch.next({
                            name: t
                        })
                    },
                    N = async t => {
                        const i = t.target;
                        let o = i.name;
                        const s = f(a, o);
                        if (s) {
                            let c, h;
                            const d = i.type ? Tt(s._f) : u(t),
                                v = t.type === p || t.type === m,
                                b = !((l = s._f).mount && (l.required || l.min || l.max || l.maxLength || l.minLength || l.pattern || l.validate)) && !r.resolver && !f(n.errors, o) && !s._f.deps || ((t, e, r, n, i) => !i.isOnAll && (!r && i.isOnTouch ? !(e || t) : (r ? n.isOnBlur : i.isOnBlur) ? !t : !(r ? n.isOnChange : i.isOnChange) || t))(v, f(n.touchedFields, o), n.isSubmitted, E, _),
                                x = Y(o, y, v);
                            q(g, o, d), v ? (s._f.onBlur && s._f.onBlur(t), e && e(0)) : s._f.onChange && s._f.onChange(t);
                            const S = C(o, d, v, !1),
                                R = !P(S) || x;
                            if (!v && T.watch.next({
                                    name: o,
                                    type: t.type
                                }), b) return R && T.state.next({
                                name: o,
                                ...x ? {} : S
                            });
                            if (!v && x && T.state.next({}), w[o] = (w[o], 1), T.state.next({
                                    isValidating: !0
                                }), r.resolver) {
                                const {
                                    errors: t
                                } = await U([o]), e = Et(n.errors, a, o), r = Et(t, a, e.name || o);
                                c = r.error, o = r.name, h = P(t)
                            } else c = (await at(s, f(g, o), k, r.shouldUseNativeValidation))[o], h = await A(!0);
                            s._f.deps && G(s._f.deps), O(o, h, c, S)
                        }
                        var l
                    },
                    G = async (t, e = {}) => {
                        let i, o;
                        const s = M(t);
                        if (T.state.next({
                                isValidating: !0
                            }), r.resolver) {
                            const e = await (async t => {
                                const {
                                    errors: e
                                } = await U();
                                if (t)
                                    for (const r of t) {
                                        const t = f(e, r);
                                        t ? q(n.errors, r, t) : dt(n.errors, r)
                                    } else n.errors = e;
                                return e
                            })(d(t) ? t : s);
                            i = P(e), o = t ? !s.some((t => f(e, t))) : i
                        } else t ? (o = (await Promise.all(s.map((async t => {
                            const e = f(a, t);
                            return await D(e && e._f ? {
                                [t]: e
                            } : e)
                        })))).every(Boolean), (o || n.isValid) && A()) : o = i = await D(a);
                        return T.state.next({ ...!L(t) || S.isValid && i !== n.isValid ? {} : {
                                name: t
                            },
                            ...r.resolver ? {
                                isValid: i
                            } : {},
                            errors: n.errors,
                            isValidating: !1
                        }), e.shouldFocus && !o && H(a, (t => f(n.errors, t)), t ? s : y.mount), o
                    },
                    Z = t => {
                        const e = { ...l,
                            ...v.mount ? g : {}
                        };
                        return d(t) ? e : L(t) ? f(e, t) : t.map((t => f(e, t)))
                    },
                    J = (t, e) => ({
                        invalid: !!f((e || n).errors, t),
                        isDirty: !!f((e || n).dirtyFields, t),
                        isTouched: !!f((e || n).touchedFields, t),
                        error: f((e || n).errors, t)
                    }),
                    tt = (t, e = {}) => {
                        for (const i of t ? M(t) : y.mount) y.mount.delete(i), y.array.delete(i), f(a, i) && (e.keepValue || (dt(a, i), dt(g, i)), !e.keepError && dt(n.errors, i), !e.keepDirty && dt(n.dirtyFields, i), !e.keepTouched && dt(n.touchedFields, i), !r.shouldUnregister && !e.keepDefaultValue && dt(l, i));
                        T.watch.next({}), T.state.next({ ...n,
                            ...e.keepDirty ? {
                                isDirty: F()
                            } : {}
                        }), !e.keepIsValid && A()
                    },
                    et = (t, e = {}) => {
                        let n = f(a, t);
                        const o = $(e.disabled);
                        return q(a, t, {
                            _f: { ...n && n._f ? n._f : {
                                    ref: {
                                        name: t
                                    }
                                },
                                name: t,
                                mount: !0,
                                ...e
                            }
                        }), y.mount.add(t), n ? o && q(g, t, e.disabled ? void 0 : f(g, t, Tt(n._f))) : R(t, !0, e.value), { ...o ? {
                                disabled: e.disabled
                            } : {},
                            ...r.shouldUseNativeValidation ? {
                                required: !!e.required,
                                min: _t(e.min),
                                max: _t(e.max),
                                minLength: _t(e.minLength),
                                maxLength: _t(e.maxLength),
                                pattern: _t(e.pattern)
                            } : {},
                            name: t,
                            onChange: N,
                            onBlur: N,
                            ref: o => {
                                if (o) {
                                    et(t, e), n = f(a, t);
                                    const r = d(o.value) && o.querySelectorAll && o.querySelectorAll("input,select,textarea")[0] || o,
                                        s = (t => Q(t) || i(t))(r),
                                        u = n._f.refs || [];
                                    if (s ? u.find((t => t === r)) : r === n._f.ref) return;
                                    q(a, t, {
                                        _f: { ...n._f,
                                            ...s ? {
                                                refs: [...u.filter(yt), r, ...Array.isArray(f(l, t)) ? [{}] : []],
                                                ref: {
                                                    type: r.type,
                                                    name: t
                                                }
                                            } : {
                                                ref: r
                                            }
                                        }
                                    }), R(t, !1, void 0, r)
                                } else n = f(a, t, {}), n._f && (n._f.mount = !1), (r.shouldUnregister || e.shouldUnregister) && (!c(y.array, t) || !v.action) && y.unMount.add(t)
                            }
                        }
                    };
                return {
                    control: {
                        register: et,
                        unregister: tt,
                        getFieldState: J,
                        _executeSchema: U,
                        _getWatch: B,
                        _getDirty: F,
                        _updateValid: A,
                        _removeUnmounted: () => {
                            for (const t of y.unMount) {
                                const e = f(a, t);
                                e && (e._f.refs ? e._f.refs.every((t => !yt(t))) : !yt(e._f.ref)) && tt(t)
                            }
                            y.unMount = new Set
                        },
                        _updateFieldArray: (t, e = [], r, i, o = !0, s = !0) => {
                            if (i && r) {
                                if (v.action = !0, s && Array.isArray(f(a, t))) {
                                    const e = r(f(a, t), i.argA, i.argB);
                                    o && q(a, t, e)
                                }
                                if (S.errors && s && Array.isArray(f(n.errors, t))) {
                                    const e = r(f(n.errors, t), i.argA, i.argB);
                                    o && q(n.errors, t, e), ((t, e) => {
                                        !h(f(t, e)).length && dt(t, e)
                                    })(n.errors, t)
                                }
                                if (S.touchedFields && s && Array.isArray(f(n.touchedFields, t))) {
                                    const e = r(f(n.touchedFields, t), i.argA, i.argB);
                                    o && q(n.touchedFields, t, e)
                                }
                                S.dirtyFields && (n.dirtyFields = xt(l, g)), T.state.next({
                                    isDirty: F(t, e),
                                    dirtyFields: n.dirtyFields,
                                    errors: n.errors,
                                    isValid: n.isValid
                                })
                            } else q(g, t, e)
                        },
                        _getFieldArray: e => h(f(v.mount ? g : l, e, t.shouldUnregister ? f(l, e, []) : [])),
                        _subjects: T,
                        _proxyFormState: S,
                        get _fields() {
                            return a
                        },
                        get _formValues() {
                            return g
                        },
                        get _stateFlags() {
                            return v
                        },
                        set _stateFlags(t) {
                            v = t
                        },
                        get _defaultValues() {
                            return l
                        },
                        get _names() {
                            return y
                        },
                        set _names(t) {
                            y = t
                        },
                        get _formState() {
                            return n
                        },
                        set _formState(t) {
                            n = t
                        },
                        get _options() {
                            return r
                        },
                        set _options(t) {
                            r = { ...r,
                                ...t
                            }
                        }
                    },
                    trigger: G,
                    register: et,
                    handleSubmit: (t, e) => async i => {
                        i && (i.preventDefault && i.preventDefault(), i.persist && i.persist());
                        let o = !0,
                            s = ut(g);
                        T.state.next({
                            isSubmitting: !0
                        });
                        try {
                            if (r.resolver) {
                                const {
                                    errors: t,
                                    values: e
                                } = await U();
                                n.errors = t, s = e
                            } else await D(a);
                            P(n.errors) ? (T.state.next({
                                errors: {},
                                isSubmitting: !0
                            }), await t(s, i)) : (e && await e({ ...n.errors
                            }, i), r.shouldFocusError && H(a, (t => f(n.errors, t)), y.mount))
                        } catch (l) {
                            throw o = !1, l
                        } finally {
                            n.isSubmitted = !0, T.state.next({
                                isSubmitted: !0,
                                isSubmitting: !1,
                                isSubmitSuccessful: P(n.errors) && o,
                                submitCount: n.submitCount + 1,
                                errors: n.errors
                            })
                        }
                    },
                    watch: (t, e) => I(t) ? T.watch.subscribe({
                        next: r => t(B(void 0, e), r)
                    }) : B(t, e, !0),
                    setValue: z,
                    getValues: Z,
                    reset: (e, r = {}) => {
                        const i = e || l,
                            o = ut(i),
                            s = e && !P(e) ? o : l;
                        if (r.keepDefaultValues || (l = i), !r.keepValues) {
                            if (r.keepDirtyValues)
                                for (const t of y.mount) f(n.dirtyFields, t) ? q(s, t, f(g, t)) : z(t, f(s, t));
                            else {
                                if (lt && d(e))
                                    for (const t of y.mount) {
                                        const e = f(a, t);
                                        if (e && e._f) {
                                            const t = Array.isArray(e._f.refs) ? e._f.refs[0] : e._f.ref;
                                            try {
                                                if (gt(t)) {
                                                    t.closest("form").reset();
                                                    break
                                                }
                                            } catch (u) {}
                                        }
                                    }
                                a = {}
                            }
                            g = t.shouldUnregister ? r.keepDefaultValues ? ut(l) : {} : o, T.array.next({
                                values: s
                            }), T.watch.next({
                                values: s
                            })
                        }
                        y = {
                            mount: new Set,
                            unMount: new Set,
                            array: new Set,
                            watch: new Set,
                            watchAll: !1,
                            focus: ""
                        }, v.mount = !S.isValid || !!r.keepIsValid, v.watch = !!t.shouldUnregister, T.state.next({
                            submitCount: r.keepSubmitCount ? n.submitCount : 0,
                            isDirty: r.keepDirty || r.keepDirtyValues ? n.isDirty : !(!r.keepDefaultValues || mt(e, l)),
                            isSubmitted: !!r.keepIsSubmitted && n.isSubmitted,
                            dirtyFields: r.keepDirty || r.keepDirtyValues ? n.dirtyFields : r.keepDefaultValues && e ? xt(l, e) : {},
                            touchedFields: r.keepTouched ? n.touchedFields : {},
                            errors: r.keepErrors ? n.errors : {},
                            isSubmitting: !1,
                            isSubmitSuccessful: !1
                        })
                    },
                    resetField: (t, e = {}) => {
                        f(a, t) && (d(e.defaultValue) ? z(t, f(l, t)) : (z(t, e.defaultValue), q(l, t, e.defaultValue)), e.keepTouched || dt(n.touchedFields, t), e.keepDirty || (dt(n.dirtyFields, t), n.isDirty = e.defaultValue ? F(t, f(l, t)) : F()), e.keepError || (dt(n.errors, t), S.isValid && A()), T.state.next({ ...n
                        }))
                    },
                    clearErrors: t => {
                        t ? M(t).forEach((t => dt(n.errors, t))) : n.errors = {}, T.state.next({
                            errors: n.errors
                        })
                    },
                    unregister: tt,
                    setError: (t, e, r) => {
                        const i = (f(a, t, {
                            _f: {}
                        })._f || {}).ref;
                        q(n.errors, t, { ...e,
                            ref: i
                        }), T.state.next({
                            name: t,
                            errors: n.errors,
                            isValid: !1
                        }), r && r.shouldFocus && i && i.focus && i.focus()
                    },
                    setFocus: (t, e = {}) => {
                        const r = f(a, t)._f,
                            n = r.refs ? r.refs[0] : r.ref;
                        n.focus(), e.shouldSelect && n.select()
                    },
                    getFieldState: J
                }
            }

            function Rt(t = {}) {
                const e = n.useRef(),
                    [r, i] = n.useState({
                        isDirty: !1,
                        isValidating: !1,
                        dirtyFields: {},
                        isSubmitted: !1,
                        submitCount: 0,
                        touchedFields: {},
                        isSubmitting: !1,
                        isSubmitSuccessful: !1,
                        isValid: !1,
                        errors: {}
                    });
                e.current ? e.current.control._options = t : e.current = { ...At(t),
                    formState: r
                };
                const o = e.current.control,
                    s = n.useCallback((t => {
                        D(t, o._proxyFormState, !0) && (o._formState = { ...o._formState,
                            ...t
                        }, i({ ...o._formState
                        }))
                    }), [o]);
                return B({
                    subject: o._subjects.state,
                    callback: s
                }), n.useEffect((() => {
                    o._stateFlags.mount || (o._proxyFormState.isValid && o._updateValid(), o._stateFlags.mount = !0), o._stateFlags.watch && (o._stateFlags.watch = !1, o._subjects.state.next({})), o._removeUnmounted()
                })), e.current.formState = U(r, o._proxyFormState), e.current
            }
        }
    }
]);