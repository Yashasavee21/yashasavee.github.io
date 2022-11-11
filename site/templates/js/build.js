var anim = {
    init: function() {}
};
$(document).ready(anim.init);
var helper = {
        init: function() {},
        headerScroll: function(e, i, t) {
            var s = $(window),
                o = $(e);
            s.scrollTop() >= t ? o.addClass(i) : o.removeClass(i), s.on("scroll", function() {
                s.scrollTop() > t ? o.addClass(i) : o.removeClass(i)
            })
        },
        playVideo: function(e) {
            $(".play_JS").on("click", function() {
                var e = $(this),
                    i = $(this).find("video");
                i.get(0).paused ? ($(this).find(".video-overlay").addClass("faded"), $(i).get(0).play()) : (i.get(0).pause(), i.get(0).currentTime = 0, e.find(".video-overlay").removeClass("faded")), i.get(0).addEventListener("webkitendfullscreen", function() {
                    e.find(".video-overlay").removeClass("faded"), i.get(0).currentTime = 0
                })
            })
        },
        open: function(t, s, o, n, a) {
            $(document).mouseup(function(e) {
                if ($(e.target).is(t) || $(e.target).is(n)) $(s).hasClass(o) ? ($(s).removeClass(o), a && $(a).removeClass("opened")) : ($(s).addClass(o), a && $(a).addClass("opened"));
                else {
                    var i = $(s);
                    i.is(e.target) || 0 !== i.has(e.target).length || (i.removeClass("opened"), a && $(a).removeClass("opened"))
                }
            })
        },
        toggleElem: function(e, t, s, i, o) {
            e = $(e), t = $(t);
            o && $(document).mouseup(function(e) {
                var i = t;
                i.is(e.target) || 0 !== i.has(e.target).length || i.removeClass(s)
            }), e.on("click", function() {
                t.hasClass(s) ? (t.removeClass(s), i && e.removeClass(i)) : (t.addClass(s), i && e.addClass(i))
            })
        },
        scroller: function(e, t, s) {
            var i = $(e),
                o = $("html, body");
            i.on("click", function(e) {
                var i = this.hash;
                if (i && this.href.slice(0, -i.length - 1) == location.href.slice(0, -location.hash.length - 1)) return o.animate({
                    scrollTop: $(i).offset().top - t
                }, "normal", function() {
                    location.hash = i
                }), s
            })
        },
        scrollTo: function(e, i, t, s) {
            var o = $(e),
                n = $("html, body");
            o.on("click", function(e) {
                var i = $(this).attr("href");
                return n.animate({
                    scrollTop: $(i).offset().top - t
                }, "normal", function() {}), s
            })
        },
        checkHash: function(e) {
            if (window.location.hash) {
                var i = window.location.hash.substring(1);
                if (i == e) return i
            }
        },
        scrollOnLoad: function(e, i) {
            window.location.hash && window.location.hash.substring(1) == e && $("html, body").animate({
                scrollTop: $(i).offset().top - 140
            }, "1", function() {})
        }
    },
    plugin = {
        init: function() {}
    };
$(document).ready(plugin.init);
var app = {
    init: function() {
        helper.open(".open-menu, .open-menu span", ".menu", "opened", ".menu-close", "body, html"), helper.headerScroll("header", "scroll", "5"), app.slider(), app.share(), app.bodyLoad(), app.addClasses(), app.heroTransition(), app.mouseFollow(), app.threeShowcaseItems(), app.filters(), app.particles(), app.videos(), app.heroBg(), app.scrDown()
    },
    scrDown: function() {
        $(".m_scroll_arrows").on("click", function() {
            var e = $(window).scrollTop();
            $("html, body").animate({
                scrollTop: e + 750
            })
        })
    },
    videos: function() {
        $(".showcase .more").on("click", function() {
            var e = $(this).attr("href");
            return window.location.href = e, !1
        });
        var e = $('[data-remodal-target="video"]'),
            t = $(".remodal-video");
        e.on("click", function() {
            var e = $(this).attr("data-video"),
                i = $(this).attr("data-poster");
            t.attr("poster", i), t.attr("src", e)
        }), $(document).on("closed", ".remodal", function(e) {
            t.attr("poster", ""), t.attr("src", "")
        })
    },
    heroBg: function() {
        var s = 0,
            o = 0,
            i = 0,
            t = 0,
            n = .04;
        $(window).on("mousemove click", function(e) {
                var i = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX)),
                    t = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
                s = 20 * i / 100, o = 10 * t / 100
            }),
            function e() {
                translate = "translate(" + -(i += (s - i) * n) + "px, " + -(t += (o - t) * n) + "px)", $("footer .shape:nth-of-type(1), footer .shape:nth-of-type(2), footer .shape:nth-of-type(3)").css({
                    "-webit-transform": translate,
                    "-moz-transform": translate,
                    transform: translate
                }), window.requestAnimationFrame(e)
            }()
    },
    particles: function() {
        new Rellax(".rellax", {
            speed: 0,
            center: !0,
            round: !0,
            vertical: !0
        });
        var e = document.getElementsByClassName("thumbnail");
        new simpleParallax(e);
        new Rellax(".rellax")
    },
    threeShowcaseItems: function() {
        var e = $(".card.item").length / 2;
        $(".card.item").eq(Math.floor(e) - 1).addClass("second");
        var i = Math.floor($(".second").nextAll().length / 2);
        $(".second").nextAll().eq(i).addClass("third")
    },
    filters: function() {
        $(".showcase-filters p").on("click", function() {
            $(".showcase-filters p").removeClass("active"), $(this).addClass("active"), $(".item").hide(), "All" == $(this).text() && $(".item").each(function() {
                $(this).fadeIn(900)
            }), $('[data-filter*="' + $(this).text() + '"]').each(function() {
                $(this).fadeIn(900)
            })
        })
    },
    mouseFollow: function() {
        var i = 0,
            t = 0,
            e = 0,
            s = 0;
        $(document).mousemove(function(e) {
            i = e.pageX, t = e.pageY
        });
        setInterval(function() {
            e += (i - e) / 12, s += (t - s) / 12, $(".dot").css({
                left: e + "px",
                top: s + "px"
            })
        }, 30)
    },
    heroTransition: function() {
        setTimeout(function() {
            $(".hero-loader").addClass("hide")
        }, 100), $("#hero .link a").on("click", function(e) {
            $("html, body").animate({
                scrollTop: 0
            }, "fast");
            var i = $(this).attr("href");
            e.preventDefault(), $("#hero .link").addClass("hide"), $("#hero canvas").fadeOut().addClass("loaded"), $("#hero .hero-logo").addClass("loaded"), $("html").addClass("overflow"), setTimeout(function() {
                window.location = i
            }, 2e3)
        })
    },
    addClasses: function() {
        setTimeout(function() {
            $("#hero .link, .blue-shape").addClass("active"), $("#hero-bg").addClass("active")
        }, 3e3)
    },
    bodyLoad: function() {
        setTimeout(function() {
            $("body").removeClass("loaded")
        }, 400)
    },
    share: function() {
        $("#share").jsSocials({
            shares: ["facebook", "twitter", "linkedin"]
        })
    },
    slider: function() {
        $(".testimonials-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            fade: !1,
            touchEnabled: !0,
            asNavFor: ".testimonials-nav"
        }), $(".testimonials-nav").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: ".testimonials-slider",
            dots: !1,
            centerMode: !1,
            focusOnSelect: !0,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: !0,
                    dots: !1,
                    arrows: !1
                }
            }]
        })
    }
};

function hexToRgb(e) {
    e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, i, t, s) {
        return i + i + t + t + s + s
    });
    var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return i ? {
        r: parseInt(i[1], 16),
        g: parseInt(i[2], 16),
        b: parseInt(i[3], 16)
    } : null
}

function clamp(e, i, t) {
    return Math.min(Math.max(e, i), t)
}

function isInArray(e, i) {
    return -1 < i.indexOf(e)
}
$(document).ready(app.init),
    function(n, a) {
        function r(e, i) {
            var t = a(e);
            t.data(l, this), this._$element = t, this.shares = [], this._init(i), this._render()
        }

        function t(e, i) {
            return a.isFunction(e) ? e.apply(i, a.makeArray(arguments).slice(2)) : e
        }
        var l = "JSSocials",
            s = /(\.(jpeg|png|gif|bmp|svg)$|^data:image\/(jpeg|png|gif|bmp|svg\+xml);base64)/i,
            i = /(&?[a-zA-Z0-9]+=)?\{([a-zA-Z0-9]+)\}/g,
            e = {
                G: 1e9,
                M: 1e6,
                K: 1e3
            },
            o = {};
        r.prototype = {
            url: "",
            text: "",
            shareIn: "blank",
            showLabel: function(e) {
                return !1 === this.showCount ? e > this.smallScreenWidth : e >= this.largeScreenWidth
            },
            showCount: function(e) {
                return !(e <= this.smallScreenWidth) || "inside"
            },
            smallScreenWidth: 640,
            largeScreenWidth: 1024,
            resizeTimeout: 200,
            elementClass: "jssocials",
            sharesClass: "jssocials-shares",
            shareClass: "jssocials-share",
            shareButtonClass: "jssocials-share-button",
            shareLinkClass: "jssocials-share-link",
            shareLogoClass: "jssocials-share-logo",
            shareLabelClass: "jssocials-share-label",
            shareLinkCountClass: "jssocials-share-link-count",
            shareCountBoxClass: "jssocials-share-count-box",
            shareCountClass: "jssocials-share-count",
            shareZeroCountClass: "jssocials-share-no-count",
            _init: function(e) {
                this._initDefaults(), a.extend(this, e), this._initShares(), this._attachWindowResizeCallback()
            },
            _initDefaults: function() {
                this.url = n.location.href, this.text = a.trim(a("meta[name=description]").attr("content") || a("title").text())
            },
            _initShares: function() {
                this.shares = a.map(this.shares, a.proxy(function(e) {
                    "string" == typeof e && (e = {
                        share: e
                    });
                    var i = e.share && o[e.share];
                    if (!i && !e.renderer) throw Error("Share '" + e.share + "' is not found");
                    return a.extend({
                        url: this.url,
                        text: this.text
                    }, i, e)
                }, this))
            },
            _attachWindowResizeCallback: function() {
                a(n).on("resize", a.proxy(this._windowResizeHandler, this))
            },
            _detachWindowResizeCallback: function() {
                a(n).off("resize", this._windowResizeHandler)
            },
            _windowResizeHandler: function() {
                (a.isFunction(this.showLabel) || a.isFunction(this.showCount)) && (n.clearTimeout(this._resizeTimer), this._resizeTimer = setTimeout(a.proxy(this.refresh, this), this.resizeTimeout))
            },
            _render: function() {
                this._clear(), this._defineOptionsByScreen(), this._$element.addClass(this.elementClass), this._$shares = a("<div>").addClass(this.sharesClass).appendTo(this._$element), this._renderShares()
            },
            _defineOptionsByScreen: function() {
                this._screenWidth = a(n).width(), this._showLabel = t(this.showLabel, this, this._screenWidth), this._showCount = t(this.showCount, this, this._screenWidth)
            },
            _renderShares: function() {
                a.each(this.shares, a.proxy(function(e, i) {
                    this._renderShare(i)
                }, this))
            },
            _renderShare: function(e) {
                (a.isFunction(e.renderer) ? a(e.renderer()) : this._createShare(e)).addClass(this.shareClass).addClass(e.share ? "jssocials-share-" + e.share : "").addClass(e.css).appendTo(this._$shares)
            },
            _createShare: function(e) {
                var i = a("<div>"),
                    t = this._createShareLink(e).appendTo(i);
                if (this._showCount) {
                    var s = "inside" === this._showCount,
                        o = s ? t : a("<div>").addClass(this.shareCountBoxClass).appendTo(i);
                    o.addClass(s ? this.shareLinkCountClass : this.shareCountBoxClass), this._renderShareCount(e, o)
                }
                return i
            },
            _createShareLink: function(t) {
                var s = this._getShareStrategy(t).call(t, {
                    shareUrl: this._getShareUrl(t)
                });
                return s.addClass(this.shareLinkClass).append(this._createShareLogo(t)), this._showLabel && s.append(this._createShareLabel(t)), a.each(this.on || {}, function(e, i) {
                    a.isFunction(i) && s.on(e, a.proxy(i, t))
                }), s
            },
            _getShareStrategy: function(e) {
                var i = d[e.shareIn || this.shareIn];
                if (!i) throw Error("Share strategy '" + this.shareIn + "' not found");
                return i
            },
            _getShareUrl: function(e) {
                var i = t(e.shareUrl, e);
                return this._formatShareUrl(i, e)
            },
            _createShareLogo: function(e) {
                var i = e.logo,
                    t = s.test(i) ? a("<img>").attr("src", e.logo) : a("<i>").addClass(i);
                return t.addClass(this.shareLogoClass), t
            },
            _createShareLabel: function(e) {
                return a("<span>").addClass(this.shareLabelClass).text(e.label)
            },
            _renderShareCount: function(e, i) {
                var t = a("<span>").addClass(this.shareCountClass);
                i.addClass(this.shareZeroCountClass).append(t), this._loadCount(e).done(a.proxy(function(e) {
                    e && (i.removeClass(this.shareZeroCountClass), t.text(e))
                }, this))
            },
            _loadCount: function(i) {
                var t = a.Deferred(),
                    e = this._getCountUrl(i);
                if (!e) return t.resolve(0).promise();
                var s = a.proxy(function(e) {
                    t.resolve(this._getCountValue(e, i))
                }, this);
                return a.getJSON(e).done(s).fail(function() {
                    a.get(e).done(s).fail(function() {
                        t.resolve(0)
                    })
                }), t.promise()
            },
            _getCountUrl: function(e) {
                var i = t(e.countUrl, e);
                return this._formatShareUrl(i, e)
            },
            _getCountValue: function(e, i) {
                var t = (a.isFunction(i.getCount) ? i.getCount(e) : e) || 0;
                return "string" == typeof t ? t : this._formatNumber(t)
            },
            _formatNumber: function(t) {
                return a.each(e, function(e, i) {
                    return i <= t ? (t = parseFloat((t / i).toFixed(2)) + e, !1) : void 0
                }), t
            },
            _formatShareUrl: function(e, o) {
                return e.replace(i, function(e, i, t) {
                    var s = o[t] || "";
                    return s ? (i || "") + n.encodeURIComponent(s) : ""
                })
            },
            _clear: function() {
                n.clearTimeout(this._resizeTimer), this._$element.empty()
            },
            _passOptionToShares: function(t, s) {
                var o = this.shares;
                a.each(["url", "text"], function(e, i) {
                    i === t && a.each(o, function(e, i) {
                        i[t] = s
                    })
                })
            },
            _normalizeShare: function(i) {
                return a.isNumeric(i) ? this.shares[i] : "string" == typeof i ? a.grep(this.shares, function(e) {
                    return e.share === i
                })[0] : i
            },
            refresh: function() {
                this._render()
            },
            destroy: function() {
                this._clear(), this._detachWindowResizeCallback(), this._$element.removeClass(this.elementClass).removeData(l)
            },
            option: function(e, i) {
                return 1 === arguments.length ? this[e] : (this[e] = i, this._passOptionToShares(e, i), void this.refresh())
            },
            shareOption: function(e, i, t) {
                return e = this._normalizeShare(e), 2 === arguments.length ? e[i] : (e[i] = t, void this.refresh())
            }
        }, a.fn.jsSocials = function(s) {
            var o = a.makeArray(arguments).slice(1),
                n = this;
            return this.each(function() {
                var e, i = a(this),
                    t = i.data(l);
                if (t)
                    if ("string" == typeof s) {
                        if (void 0 !== (e = t[s].apply(t, o)) && e !== t) return n = e, !1
                    } else t._detachWindowResizeCallback(), t._init(s), t._render();
                else new r(i, s)
            }), n
        };
        var d = {
            popup: function(e) {
                return a("<a>").attr("href", "#").on("click", function() {
                    return n.open(e.shareUrl, null, "width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0"), !1
                })
            },
            blank: function(e) {
                return a("<a>").attr({
                    target: "_blank",
                    href: e.shareUrl
                })
            },
            self: function(e) {
                return a("<a>").attr({
                    target: "_self",
                    href: e.shareUrl
                })
            }
        };
        n.jsSocials = {
            Socials: r,
            shares: o,
            shareStrategies: d,
            setDefaults: function(e) {
                var i;
                a.isPlainObject(e) ? i = r.prototype : (i = o[e], e = arguments[1] || {}), a.extend(i, e)
            }
        }
    }(window, jQuery),
    function(e, i, t) {
        i.extend(t.shares, {
            email: {
                label: "E-mail",
                logo: "fa fa-at",
                shareUrl: "mailto:{to}?subject={text}&body={url}",
                countUrl: "",
                shareIn: "self"
            },
            twitter: {
                label: "Tweet",
                logo: "fa fa-twitter",
                shareUrl: "https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",
                countUrl: ""
            },
            facebook: {
                label: "Like",
                logo: "fa fa-facebook",
                shareUrl: "https://facebook.com/sharer/sharer.php?u={url}",
                countUrl: "https://graph.facebook.com/?id={url}",
                getCount: function(e) {
                    return e.share && e.share.share_count || 0
                }
            },
            vkontakte: {
                label: "Like",
                logo: "fa fa-vk",
                shareUrl: "https://vk.com/share.php?url={url}&title={title}&description={text}",
                countUrl: "https://vk.com/share.php?act=count&index=1&url={url}",
                getCount: function(e) {
                    return parseInt(e.slice(15, -2).split(", ")[1])
                }
            },
            googleplus: {
                label: "+1",
                logo: "fa fa-google",
                shareUrl: "https://plus.google.com/share?url={url}",
                countUrl: ""
            },
            linkedin: {
                label: "Share",
                logo: "fa fa-linkedin",
                shareUrl: "https://www.linkedin.com/shareArticle?mini=true&url={url}",
                countUrl: "https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",
                getCount: function(e) {
                    return e.count
                }
            },
            pinterest: {
                label: "Pin it",
                logo: "fa fa-pinterest",
                shareUrl: "https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",
                countUrl: "https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",
                getCount: function(e) {
                    return e.count
                }
            },
            stumbleupon: {
                label: "Share",
                logo: "fa fa-stumbleupon",
                shareUrl: "http://www.stumbleupon.com/submit?url={url}&title={title}",
                countUrl: "https://cors-anywhere.herokuapp.com/https://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}",
                getCount: function(e) {
                    return e.result.views
                }
            },
            telegram: {
                label: "Telegram",
                logo: "fa fa-paper-plane",
                shareUrl: "tg://msg?text={url} {text}",
                countUrl: "",
                shareIn: "self"
            },
            whatsapp: {
                label: "WhatsApp",
                logo: "fa fa-whatsapp",
                shareUrl: "whatsapp://send?text={url} {text}",
                countUrl: "",
                shareIn: "self"
            },
            line: {
                label: "LINE",
                logo: "fa fa-comment",
                shareUrl: "http://line.me/R/msg/text/?{text} {url}",
                countUrl: ""
            },
            viber: {
                label: "Viber",
                logo: "fa fa-volume-control-phone",
                shareUrl: "viber://forward?text={url} {text}",
                countUrl: "",
                shareIn: "self"
            },
            pocket: {
                label: "Pocket",
                logo: "fa fa-get-pocket",
                shareUrl: "https://getpocket.com/save?url={url}&title={title}",
                countUrl: ""
            },
            messenger: {
                label: "Share",
                logo: "fa fa-commenting",
                shareUrl: "fb-messenger://share?link={url}",
                countUrl: "",
                shareIn: "self"
            }
        })
    }(window, jQuery, window.jsSocials),
    function(o, n, e, a) {
        function r(e, i, t) {
            return null === i ? e : (void 0 === t && (t = .5), t * e + (1 - t) * i)
        }
        var s = "parallaxify",
            t = {
                positionProperty: "position",
                horizontalParallax: !0,
                verticalParallax: !0,
                parallaxBackgrounds: !0,
                parallaxElements: !0,
                responsive: !1,
                useMouseMove: !0,
                useGyroscope: !0,
                alphaFilter: .9,
                motionType: "natural",
                mouseMotionType: "gaussian",
                inputPriority: "mouse",
                motionAngleX: 80,
                motionAngleY: 80,
                adjustBasePosition: !0,
                alphaPosition: .05
            },
            i = {
                position: {
                    setLeft: function(e, i) {
                        e.css("left", i)
                    },
                    setTop: function(e, i) {
                        e.css("top", i)
                    }
                },
                transform: {
                    setPosition: function(e, i, t, s, o) {
                        e[0].style[c] = "translate3d(" + (i - t) + "px, " + (s - o) + "px, 0)"
                    }
                }
            },
            l = [],
            d = {
                linear: function(e, i) {
                    return e <= -i ? 1 : i <= e ? -1 : -e / i
                },
                natural: function(e, i) {
                    return e <= -i ? 1 : i <= e ? -1 : (l["n" + i] === a && (l["n" + i] = Math.tan(.01745 * i)), -Math.tan(.01745 * e) / l["n" + i])
                },
                performance: function(e, i) {
                    return e <= -i ? 1 : i <= e ? -1 : (l["p" + i] === a && (l["p" + i] = i / 90 + 4.2 * Math.pow(i / 90, 7)), -(e / 90 + 4.2 * Math.pow(e / 90, 7)) / l["p" + i])
                },
                gaussian: function(e, i) {
                    return 1 - 2 * function(e, i) {
                        return 1 / (1 + Math.exp(-.07056 * i * (3 ^ e) - 1.5976 * i * e))
                    }(e / 90, 135 / i)
                }
            },
            c = function() {
                var e, i = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                    t = o("script")[0].style,
                    s = "";
                for (e in t)
                    if (i.test(e)) {
                        s = e.match(i)[0];
                        break
                    }
                return "WebkitOpacity" in t && (s = "Webkit"), "KhtmlOpacity" in t && (s = "Khtml"),
                    function(e) {
                        return s + (0 < s.length ? e.charAt(0).toUpperCase() + e.slice(1) : e)
                    }
            }()("transform"),
            p = o("<div />", {
                style: "background:#fff"
            }).css("background-position-x") !== a,
            u = p ? function(e, i, t) {
                e.css({
                    "background-position-x": i,
                    "background-position-y": t
                })
            } : function(e, i, t) {
                e.css("background-position", i + " " + t)
            },
            h = p ? function(e) {
                return [e.css("background-position-x"), e.css("background-position-y")]
            } : function(e) {
                return e.css("background-position").split(" ")
            },
            f = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame || n.msRequestAnimationFrame || function(e) {
                setTimeout(e, 1e3 / 30)
            };

        function v(e, i) {
            this.element = e, this.options = o.extend({}, t, i), this._defaults = t, this._name = s, this.init()
        }
        v.prototype = {
            init: function() {
                this.options.name = s + "_" + Math.floor(1e9 * Math.random()), this.tilt = {
                    beta: 0,
                    gamma: 0
                }, this._defineElements(), this._defineGetters(), this._defineSetters(), this._detectMobile(), this._detectMotionType(), this._detectViewport(), this._handleWindowLoadAndResize(), this.refresh({
                    firstLoad: !0
                }), this._startAnimation()
            },
            _defineElements: function() {
                this.$element = this.element === e.body || this.element === n ? o("body") : o(this.element), this.$viewportElement = o(n)
            },
            _defineGetters: function() {
                var i = d[this.options.motionType],
                    t = d[this.options.mouseMotionType];
                this._getMoveHorizontal = function() {
                    if (this.useMouseMove && null !== this.clientX && this.clientX !== this.oldClientX) return t(this.options.motionAngleX * (1 - 2 * this.clientX / this.viewportWidth), this.options.motionAngleX);
                    if (this.useSensor && null !== this.beta && null !== this.gamma) {
                        var e = this.tilt;
                        return this.viewportLandscape ? this.viewportFlipped ? i(-e.beta, this.options.motionAngleX) : i(e.beta, this.options.motionAngleX) : this.viewportFlipped ? i(-e.gamma, this.options.motionAngleX) : i(e.gamma, this.options.motionAngleX)
                    }
                    return this.useSensor = !1, t(this.options.motionAngleX * (1 - 2 * this.oldClientX / this.viewportWidth), this.options.motionAngleX)
                }, this._getMoveVertical = function() {
                    if (this.options.useMouseMove && null !== this.clientY && this.clientY !== this.oldClientY) return t(this.options.motionAngleY * (1 - 2 * this.clientY / this.viewportHeight), this.options.motionAngleY);
                    if (this.useSensor && null !== this.beta && null !== this.gamma) {
                        var e = this.tilt;
                        return this.viewportLandscape ? this.viewportFlipped ? i(-e.gamma, this.options.motionAngleY) : i(e.gamma, this.options.motionAngleY) : this.viewportFlipped ? i(-e.beta, this.options.motionAngleY) : i(e.beta, this.options.motionAngleY)
                    }
                    return this.useSensor = !1, t(this.options.motionAngleY * (1 - 2 * this.oldClientY / this.viewportHeight), this.options.motionAngleY)
                }
            },
            _defineSetters: function() {
                var n = this,
                    a = i[n.options.positionProperty];
                this._setPosition = a.setPosition || function(e, i, t, s, o) {
                    n.options.horizontalParallax && a.setLeft(e, i, t), n.options.verticalParallax && a.setTop(e, s, o)
                }
            },
            refresh: function(e) {
                e && e.firstLoad || this._reset(), this._findElements(), this._findBackgrounds(), e && e.firstLoad && /WebKit/.test(navigator.userAgent) && o(n).on("load", function() {
                    var e = o("body");
                    oldLeft = e.scrollLeft(), oldTop = e.scrollTop(), e.scrollLeft(oldLeft + 1), e.scrollTop(oldTop + 1), e.scrollLeft(oldLeft), e.scrollTop(oldTop)
                })
            },
            _detectViewport: function() {
                this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.useSensor && (this.viewportFlipped = 180 === n.orientation, this.viewportLandscape = 90 === Math.abs(n.orientation))
            },
            _detectMobile: function() {
                var e = navigator.userAgent || navigator.vendor || n.opera;
                this.isMobile = /(bb\d+|meego).+mobile|android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|playbook|plucker|pocket|psp|series(4|6)0|silk|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
            },
            _detectMotionType: function() {
                this.useSensor = !1, this.useSensorWebkit = !1, this.useSensorMoz = !1, this.useMouseMove = !1, this.options.useGyroscope && (this.isMobile || "gyroscope" === this.options.inputPriority) && (this.useSensorWebkit = n.DeviceOrientationEvent !== a, this.useSensorMoz = n.OrientationEvent !== a, this.useSensor = this.useSensorWebkit || this.useSensorMoz), this.options.useMouseMove && !this.isMobile && (this.useMouseMove = this.$viewportElement.mousemove !== a)
            },
            _findElements: function() {
                var t = this;
                if (this.elements !== a)
                    for (var e = this.elements.length - 1; 0 <= e; e--) this.elements[e].$element.data("parallaxify-ElementIsActive", a);
                this.elements = [], this.options.parallaxElements && this.$element.find("[data-parallaxify-range],[data-parallaxify-range-x],[data-parallaxify-range-y]").each(function(e) {
                    var i = o(this);
                    if (i.data("parallaxify-ElementIsActive")) {
                        if (i.data("parallaxify-ElementIsActive") !== this) return
                    } else i.data("parallaxify-ElementIsActive", this);
                    i.data("parralaxify-originalLeft") ? (i.css("left", i.data("parallaxify-originalLeft")), i.css("top", i.data("parallaxify-originalTop"))) : (i.data("parallaxify-originalLeft", i.css("left")), i.data("parallaxify-originalTop", i.css("top"))), t.elements.push({
                        $element: i,
                        originalPositionLeft: i.position().left,
                        originalPositionTop: i.position().top,
                        parallaxDistanceX: i.data("parallaxify-range-x") !== a ? i.data("parallaxify-range-x") : i.data("parallaxify-range") !== a ? i.data("parallaxify-range") : 0,
                        parallaxDistanceY: i.data("parallaxify-range-y") !== a ? i.data("parallaxify-range-y") : i.data("parallaxify-range") !== a ? i.data("parallaxify-range") : 0,
                        width: i.outerWidth(!0),
                        height: i.outerHeight(!0)
                    })
                })
            },
            _findBackgrounds: function() {
                var e, t = this;
                this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-parallaxify-background-range],[data-parallaxify-background-range-x],[data-parallaxify-background-range-y]"), (this.$element.data("parallaxify-background-range") || this.$element.data("parallaxify-background-range-x") || this.$element.data("parallaxify-background-range-y")) && (e = e.add(this.$element)), e.each(function() {
                    var e = o(this),
                        i = h(e);
                    if (e.data("parallaxify-backgroundIsActive")) {
                        if (e.data("parallaxify-backgroundIsActive") !== this) return
                    } else e.data("parallaxify-backgroundIsActive", this);
                    e.data("parralaxify-backgroundOriginalLeft") ? u(e, e.data("parallaxify-backgroundOriginalLeft"), e.data("parallaxify-backgroundOriginalTop")) : (e.data("parallaxify-backgroundOriginalLeft", i[0]), e.data("parallaxify-backgroundOriginalTop", i[1])), t.backgrounds.push({
                        $element: e,
                        originalValueLeft: i[0],
                        originalValueTop: i[1],
                        originalBackgroundPositionLeft: isNaN(parseInt(i[0], 10)) ? 0 : parseInt(i[0], 10),
                        originalBackgroundPositionTop: isNaN(parseInt(i[1], 10)) ? 0 : parseInt(i[1], 10),
                        originalPositionLeft: e.position().left,
                        originalPositionTop: e.position().top,
                        parallaxDistanceX: e.data("parallaxify-background-range-x") !== a ? e.data("parallaxify-background-range-x") : e.data("parallaxify-background-range") !== a ? e.data("parallaxify-background-range") : 0,
                        parallaxDistanceY: e.data("parallaxify-background-range-y") !== a ? e.data("parallaxify-background-range-y") : e.data("parallaxify-background-range") !== a ? e.data("parallaxify-background-range") : 0
                    })
                }))
            },
            _reset: function() {
                var e, i, t, s, o;
                for (o = this.elements.length - 1; 0 <= o; o--) i = (e = this.elements[o]).$element.data("parallaxify-originalLeft"), t = e.$element.data("parallaxify-originalTop"), this._setPosition(e.$element, i, i, t, t), e.$element.data("parallaxify-originalLeft", null).data("parallaxify-originalLeft", null).data("parallaxify-elementIsActive", null).data("parallaxify-backgroundIsActive", null);
                for (o = this.backgrounds.length - 1; 0 <= o; o--)(s = this.backgrounds[o]).$element.data("parallaxify-backgroundOriginalLeft", null).data("parallaxify-backgroundOriginalTop", null).data("parallaxify-backgroundIsActive", null), u(s.$element, s.originalValueLeft, s.originalValueTop)
            },
            destroy: function() {
                this._reset(), this.useMouseMove && this.$viewportElement.unbind("mousemove." + this.name), this.useSensorWebkit && n.removeEventListener("deviceorientation", this._handleSensorWebkit, !1), this.useSensorMoz && n.removeEventListener("MozOrientation", this._handleSensorMoz, !1), o(n).unbind("load." + this.name).unbind("resize." + this.name).unbind("orientationchange." + this.name)
            },
            _processSensorData: function() {
                if (this.useSensor) {
                    var e = this.beta,
                        i = this.gamma,
                        t = 0,
                        s = 0;
                    90 < e && (e -= 180), 180 < i && (i -= 360), this.initialBeta === a && null !== e && (this.initialBeta = e, this.useSensor && "gyroscope" === this.options.inputPriority && (this.useMouseMove = !1, this.useMouseMove && this.$viewportElement.unbind("mousemove." + this.name))), this.initialGamma === a && null !== i && (this.initialGamma = i, this.useSensor && "gyroscope" === this.options.inputPriority && (this.useMouseMove = !1, this.useMouseMove && this.$viewportElement.unbind("mousemove." + this.name))), this.options.adjustBasePosition && this.initialGamma !== a && this.initialBeta !== a && (i - this.initialGamma < -180 ? this.initialGamma = r(i + 360, this.initialGamma, this.options.alphaPosition) : 180 < i - this.initialGamma ? this.initialGamma = r(i - 360, this.initialGamma, this.options.alphaPosition) : this.initialGamma = r(i, this.initialGamma, this.options.alphaPosition), e - this.initialBeta < -90 ? this.initialBeta = r(e + 180, this.initialBeta, this.options.alphaPosition) : 90 < e - this.initialBeta ? this.initialBeta = r(e - 180, this.initialBeta, this.options.alphaPosition) : this.initialBeta = r(e, this.initialBeta, this.options.alphaPosition)), 100 < (t = this.initialBeta !== a ? e - this.initialBeta : e) ? t -= 180 : t < -100 && (t += 180), 200 < (s = this.initialGamma !== a ? i - this.initialGamma : i) ? s -= 360 : s < -200 && (s += 360), t = r(t, this.tilt.beta, this.options.alphaFilter), s = r(s, this.tilt.gamma, this.options.alphaFilter), this.tilt.beta = t, this.tilt.gamma = s
                }
            },
            _repositionElements: function() {
                var e, i, t, s, o, n, a, r = this._getMoveHorizontal(),
                    l = this._getMoveVertical();
                if (this.currentMoveHorizontal !== r || this.currentMoveVertical !== l || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                    for (this.currentMoveHorizontal = r, this.currentMoveVertical = l, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, a = this.elements.length - 1; 0 <= a; a--) e = this.elements[a], o = this.options.horizontalParallax ? Math.floor(r * e.parallaxDistanceX / 2) + e.originalPositionLeft : e.originalPositionLeft, n = this.options.verticalParallax ? Math.floor(l * e.parallaxDistanceY / 2) + e.originalPositionTop : e.originalPositionTop, this._setPosition(e.$element, o, e.originalPositionLeft, n, e.originalPositionTop);
                    for (a = this.backgrounds.length - 1; 0 <= a; a--) i = this.backgrounds[a], t = this.options.horizontalParallax ? Math.floor(r * i.parallaxDistanceX / 2) + i.originalBackgroundPositionLeft + "px" : i.originalValueLeft, s = this.options.verticalParallax ? Math.floor(l * i.parallaxDistanceY / 2) + i.originalBackgroundPositionTop + "px" : i.originalValueTop, u(i.$element, t, s)
                }
            },
            _handleWindowLoadAndResize: function() {
                var e = this,
                    i = o(n);
                e.options.responsive && i.bind("load." + this.name, function() {
                    e.refresh()
                }), i.bind("resize." + this.name, function() {
                    e._detectViewport(), e.options.responsive && e.refresh()
                }), i.bind("orientationchange." + this.name, function() {
                    e._detectViewport(), e.options.responsive && e.refresh()
                })
            },
            _startAnimation: function() {
                var i = this,
                    e = !1;
                this.beta = 0, this.gamma = 0, this.clientX = this.oldClientX = Math.round(i.viewportWidth / 2), this.clientY = this.oldClientY = Math.round(i.viewportHeight / 2);

                function t() {
                    i._processSensorData(), i._repositionElements(), e = !1
                }

                function s() {
                    e || (f(t), e = !0)
                }
                this._handleSensorWebkit = function(e) {
                    i.gamma = e.gamma, i.beta = e.beta, s()
                }, this._handleSensorMoz = function(e) {
                    i.gamma = 180 * e.x, i.beta = -90 * e.y, s()
                }, this._handleMouseMove = function(e) {
                    i.oldClientX = i.clientX, i.oldClientY = i.clientY, e.clientX !== a ? i.clientX = e.clientX : i.clientX = e.pageX, e.clientY !== a ? i.clientY = e.clientY : i.clientY = e.pageY, s()
                }, this.useSensorWebkit ? n.addEventListener("deviceorientation", i._handleSensorWebkit, !1) : this.useSensorMoz && n.addEventListener("MozOrientation", i._handleSensorMoz, !1), this.useMouseMove && this.$viewportElement.bind("mousemove." + this.name, i._handleMouseMove), s()
            }
        }, o.fn[s] = function(i) {
            var t = arguments;
            return i === a || "object" == typeof i ? this.each(function() {
                o.data(this, "plugin_" + s) || o.data(this, "plugin_" + s, new v(this, i))
            }) : "string" == typeof i && "_" !== i[0] && "init" !== i ? this.each(function() {
                var e = o.data(this, "plugin_" + s);
                e instanceof v && "function" == typeof e[i] && e[i].apply(e, Array.prototype.slice.call(t, 1)), "destroy" === i && o.data(this, "plugin_" + s, null)
            }) : void 0
        }, o[s] = function(e) {
            var i = o(n);
            return i[s].apply(i, Array.prototype.slice.call(arguments, 0))
        }, o[s].positionProperty = i, o[s].motionType = d, n[s] = v
    }(jQuery, this, document);
var pJS = function(e, i) {
    var t = document.querySelector("#" + e + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: t,
            w: t.offsetWidth,
            h: t.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3e3,
                    rotateY: 3e3
                }
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: .4
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var h = this.pJS;
    i && Object.deepExtend(h, i), h.tmp.obj = {
        size_value: h.particles.size.value,
        size_anim_speed: h.particles.size.anim.speed,
        move_speed: h.particles.move.speed,
        line_linked_distance: h.particles.line_linked.distance,
        line_linked_width: h.particles.line_linked.width,
        mode_grab_distance: h.interactivity.modes.grab.distance,
        mode_bubble_distance: h.interactivity.modes.bubble.distance,
        mode_bubble_size: h.interactivity.modes.bubble.size,
        mode_repulse_distance: h.interactivity.modes.repulse.distance
    }, h.fn.retinaInit = function() {
        h.retina_detect && 1 < window.devicePixelRatio ? (h.canvas.pxratio = window.devicePixelRatio, h.tmp.retina = !0) : (h.canvas.pxratio = 1, h.tmp.retina = !1), h.canvas.w = h.canvas.el.offsetWidth * h.canvas.pxratio, h.canvas.h = h.canvas.el.offsetHeight * h.canvas.pxratio, h.particles.size.value = h.tmp.obj.size_value * h.canvas.pxratio, h.particles.size.anim.speed = h.tmp.obj.size_anim_speed * h.canvas.pxratio, h.particles.move.speed = h.tmp.obj.move_speed * h.canvas.pxratio, h.particles.line_linked.distance = h.tmp.obj.line_linked_distance * h.canvas.pxratio, h.interactivity.modes.grab.distance = h.tmp.obj.mode_grab_distance * h.canvas.pxratio, h.interactivity.modes.bubble.distance = h.tmp.obj.mode_bubble_distance * h.canvas.pxratio, h.particles.line_linked.width = h.tmp.obj.line_linked_width * h.canvas.pxratio, h.interactivity.modes.bubble.size = h.tmp.obj.mode_bubble_size * h.canvas.pxratio, h.interactivity.modes.repulse.distance = h.tmp.obj.mode_repulse_distance * h.canvas.pxratio
    }, h.fn.canvasInit = function() {
        h.canvas.ctx = h.canvas.el.getContext("2d")
    }, h.fn.canvasSize = function() {
        h.canvas.el.width = h.canvas.w, h.canvas.el.height = h.canvas.h, h && h.interactivity.events.resize && window.addEventListener("resize", function() {
            h.canvas.w = h.canvas.el.offsetWidth, h.canvas.h = h.canvas.el.offsetHeight, h.tmp.retina && (h.canvas.w *= h.canvas.pxratio, h.canvas.h *= h.canvas.pxratio), h.canvas.el.width = h.canvas.w, h.canvas.el.height = h.canvas.h, h.particles.move.enable || (h.fn.particlesEmpty(), h.fn.particlesCreate(), h.fn.particlesDraw(), h.fn.vendors.densityAutoParticles()), h.fn.vendors.densityAutoParticles()
        })
    }, h.fn.canvasPaint = function() {
        h.canvas.ctx.fillRect(0, 0, h.canvas.w, h.canvas.h)
    }, h.fn.canvasClear = function() {
        h.canvas.ctx.clearRect(0, 0, h.canvas.w, h.canvas.h)
    }, h.fn.particle = function(e, i, t) {
        if (this.radius = (h.particles.size.random ? Math.random() : 1) * h.particles.size.value, h.particles.size.anim.enable && (this.size_status = !1, this.vs = h.particles.size.anim.speed / 100, h.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = t ? t.x : Math.random() * h.canvas.w, this.y = t ? t.y : Math.random() * h.canvas.h, this.x > h.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > h.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), h.particles.move.bounce && h.fn.vendors.checkOverlap(this, t), this.color = {}, "object" == typeof e.value)
            if (e.value instanceof Array) {
                var s = e.value[Math.floor(Math.random() * h.particles.color.value.length)];
                this.color.rgb = hexToRgb(s)
            } else null != e.value.r && null != e.value.g && null != e.value.b && (this.color.rgb = {
                r: e.value.r,
                g: e.value.g,
                b: e.value.b
            }), null != e.value.h && null != e.value.s && null != e.value.l && (this.color.hsl = {
                h: e.value.h,
                s: e.value.s,
                l: e.value.l
            });
        else "random" == e.value ? this.color.rgb = {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
        } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (h.particles.opacity.random ? Math.random() : 1) * h.particles.opacity.value, h.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = h.particles.opacity.anim.speed / 100, h.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var o = {};
        switch (h.particles.move.direction) {
            case "top":
                o = {
                    x: 0,
                    y: -1
                };
                break;
            case "top-right":
                o = {
                    x: .5,
                    y: -.5
                };
                break;
            case "right":
                o = {
                    x: 1,
                    y: -0
                };
                break;
            case "bottom-right":
                o = {
                    x: .5,
                    y: .5
                };
                break;
            case "bottom":
                o = {
                    x: 0,
                    y: 1
                };
                break;
            case "bottom-left":
                o = {
                    x: -.5,
                    y: 1
                };
                break;
            case "left":
                o = {
                    x: -1,
                    y: 0
                };
                break;
            case "top-left":
                o = {
                    x: -.5,
                    y: -.5
                };
                break;
            default:
                o = {
                    x: 0,
                    y: 0
                }
        }
        h.particles.move.straight ? (this.vx = o.x, this.vy = o.y, h.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = o.x + Math.random() - .5, this.vy = o.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
        var n = h.particles.shape.type;
        if ("object" == typeof n) {
            if (n instanceof Array) {
                var a = n[Math.floor(Math.random() * n.length)];
                this.shape = a
            }
        } else this.shape = n;
        if ("image" == this.shape) {
            var r = h.particles.shape;
            this.img = {
                src: r.image.src,
                ratio: r.image.width / r.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == h.tmp.img_type && null != h.tmp.source_svg && (h.fn.vendors.createSvgImg(this), h.tmp.pushing && (this.img.loaded = !1))
        }
    }, h.fn.particle.prototype.draw = function() {
        var e = this;
        if (null != e.radius_bubble) var i = e.radius_bubble;
        else i = e.radius;
        if (null != e.opacity_bubble) var t = e.opacity_bubble;
        else t = e.opacity;
        if (e.color.rgb) var s = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + t + ")";
        else s = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + t + ")";
        switch (h.canvas.ctx.fillStyle = s, h.canvas.ctx.beginPath(), e.shape) {
            case "circle":
                h.canvas.ctx.arc(e.x, e.y, i, 0, 2 * Math.PI, !1);
                break;
            case "edge":
                h.canvas.ctx.rect(e.x - i, e.y - i, 2 * i, 2 * i);
                break;
            case "triangle":
                h.fn.vendors.drawShape(h.canvas.ctx, e.x - i, e.y + i / 1.66, 2 * i, 3, 2);
                break;
            case "polygon":
                h.fn.vendors.drawShape(h.canvas.ctx, e.x - i / (h.particles.shape.polygon.nb_sides / 3.5), e.y - i / .76, 2.66 * i / (h.particles.shape.polygon.nb_sides / 3), h.particles.shape.polygon.nb_sides, 1);
                break;
            case "star":
                h.fn.vendors.drawShape(h.canvas.ctx, e.x - 2 * i / (h.particles.shape.polygon.nb_sides / 4), e.y - i / 1.52, 2 * i * 2.66 / (h.particles.shape.polygon.nb_sides / 3), h.particles.shape.polygon.nb_sides, 2);
                break;
            case "image":
                if ("svg" == h.tmp.img_type) var o = e.img.obj;
                else o = h.tmp.img_obj;
                o && h.canvas.ctx.drawImage(o, e.x - i, e.y - i, 2 * i, 2 * i / e.img.ratio)
        }
        h.canvas.ctx.closePath(), 0 < h.particles.shape.stroke.width && (h.canvas.ctx.strokeStyle = h.particles.shape.stroke.color, h.canvas.ctx.lineWidth = h.particles.shape.stroke.width, h.canvas.ctx.stroke()), h.canvas.ctx.fill()
    }, h.fn.particlesCreate = function() {
        for (var e = 0; e < h.particles.number.value; e++) h.particles.array.push(new h.fn.particle(h.particles.color, h.particles.opacity.value))
    }, h.fn.particlesUpdate = function() {
        for (var e = 0; e < h.particles.array.length; e++) {
            var i = h.particles.array[e];
            if (h.particles.move.enable) {
                var t = h.particles.move.speed / 2;
                i.x += i.vx * t, i.y += i.vy * t
            }
            if (h.particles.opacity.anim.enable && (1 == i.opacity_status ? (i.opacity >= h.particles.opacity.value && (i.opacity_status = !1), i.opacity += i.vo) : (i.opacity <= h.particles.opacity.anim.opacity_min && (i.opacity_status = !0), i.opacity -= i.vo), i.opacity < 0 && (i.opacity = 0)), h.particles.size.anim.enable && (1 == i.size_status ? (i.radius >= h.particles.size.value && (i.size_status = !1), i.radius += i.vs) : (i.radius <= h.particles.size.anim.size_min && (i.size_status = !0), i.radius -= i.vs), i.radius < 0 && (i.radius = 0)), "bounce" == h.particles.move.out_mode) var s = {
                x_left: i.radius,
                x_right: h.canvas.w,
                y_top: i.radius,
                y_bottom: h.canvas.h
            };
            else s = {
                x_left: -i.radius,
                x_right: h.canvas.w + i.radius,
                y_top: -i.radius,
                y_bottom: h.canvas.h + i.radius
            };
            switch (i.x - i.radius > h.canvas.w ? (i.x = s.x_left, i.y = Math.random() * h.canvas.h) : i.x + i.radius < 0 && (i.x = s.x_right, i.y = Math.random() * h.canvas.h), i.y - i.radius > h.canvas.h ? (i.y = s.y_top, i.x = Math.random() * h.canvas.w) : i.y + i.radius < 0 && (i.y = s.y_bottom, i.x = Math.random() * h.canvas.w), h.particles.move.out_mode) {
                case "bounce":
                    i.x + i.radius > h.canvas.w ? i.vx = -i.vx : i.x - i.radius < 0 && (i.vx = -i.vx), i.y + i.radius > h.canvas.h ? i.vy = -i.vy : i.y - i.radius < 0 && (i.vy = -i.vy)
            }
            if (isInArray("grab", h.interactivity.events.onhover.mode) && h.fn.modes.grabParticle(i), (isInArray("bubble", h.interactivity.events.onhover.mode) || isInArray("bubble", h.interactivity.events.onclick.mode)) && h.fn.modes.bubbleParticle(i), (isInArray("repulse", h.interactivity.events.onhover.mode) || isInArray("repulse", h.interactivity.events.onclick.mode)) && h.fn.modes.repulseParticle(i), h.particles.line_linked.enable || h.particles.move.attract.enable)
                for (var o = e + 1; o < h.particles.array.length; o++) {
                    var n = h.particles.array[o];
                    h.particles.line_linked.enable && h.fn.interact.linkParticles(i, n), h.particles.move.attract.enable && h.fn.interact.attractParticles(i, n), h.particles.move.bounce && h.fn.interact.bounceParticles(i, n)
                }
        }
    }, h.fn.particlesDraw = function() {
        h.canvas.ctx.clearRect(0, 0, h.canvas.w, h.canvas.h), h.fn.particlesUpdate();
        for (var e = 0; e < h.particles.array.length; e++) {
            h.particles.array[e].draw()
        }
    }, h.fn.particlesEmpty = function() {
        h.particles.array = []
    }, h.fn.particlesRefresh = function() {
        cancelRequestAnimFrame(h.fn.checkAnimFrame), cancelRequestAnimFrame(h.fn.drawAnimFrame), h.tmp.source_svg = void 0, h.tmp.img_obj = void 0, h.tmp.count_svg = 0, h.fn.particlesEmpty(), h.fn.canvasClear(), h.fn.vendors.start()
    }, h.fn.interact.linkParticles = function(e, i) {
        var t = e.x - i.x,
            s = e.y - i.y,
            o = Math.sqrt(t * t + s * s);
        if (o <= h.particles.line_linked.distance) {
            var n = h.particles.line_linked.opacity - o / (1 / h.particles.line_linked.opacity) / h.particles.line_linked.distance;
            if (0 < n) {
                var a = h.particles.line_linked.color_rgb_line;
                h.canvas.ctx.strokeStyle = "rgba(" + a.r + "," + a.g + "," + a.b + "," + n + ")", h.canvas.ctx.lineWidth = h.particles.line_linked.width, h.canvas.ctx.beginPath(), h.canvas.ctx.moveTo(e.x, e.y), h.canvas.ctx.lineTo(i.x, i.y), h.canvas.ctx.stroke(), h.canvas.ctx.closePath()
            }
        }
    }, h.fn.interact.attractParticles = function(e, i) {
        var t = e.x - i.x,
            s = e.y - i.y;
        if (Math.sqrt(t * t + s * s) <= h.particles.line_linked.distance) {
            var o = t / (1e3 * h.particles.move.attract.rotateX),
                n = s / (1e3 * h.particles.move.attract.rotateY);
            e.vx -= o, e.vy -= n, i.vx += o, i.vy += n
        }
    }, h.fn.interact.bounceParticles = function(e, i) {
        var t = e.x - i.x,
            s = e.y - i.y;
        Math.sqrt(t * t + s * s) <= e.radius + i.radius && (e.vx = -e.vx, e.vy = -e.vy, i.vx = -i.vx, i.vy = -i.vy)
    }, h.fn.modes.pushParticles = function(e, i) {
        h.tmp.pushing = !0;
        for (var t = 0; t < e; t++) h.particles.array.push(new h.fn.particle(h.particles.color, h.particles.opacity.value, {
            x: i ? i.pos_x : Math.random() * h.canvas.w,
            y: i ? i.pos_y : Math.random() * h.canvas.h
        })), t == e - 1 && (h.particles.move.enable || h.fn.particlesDraw(), h.tmp.pushing = !1)
    }, h.fn.modes.removeParticles = function(e) {
        h.particles.array.splice(0, e), h.particles.move.enable || h.fn.particlesDraw()
    }, h.fn.modes.bubbleParticle = function(r) {
        function e() {
            r.opacity_bubble = r.opacity, r.radius_bubble = r.radius
        }

        function i(e, i, t, s, o) {
            if (e != i)
                if (h.tmp.bubble_duration_end) {
                    if (null != t) a = e + (e - (s - c * (s - e) / h.interactivity.modes.bubble.duration)), "size" == o && (r.radius_bubble = a), "opacity" == o && (r.opacity_bubble = a)
                } else if (d <= h.interactivity.modes.bubble.distance) {
                if (null != t) var n = t;
                else n = s;
                if (n != e) {
                    var a = s - c * (s - e) / h.interactivity.modes.bubble.duration;
                    "size" == o && (r.radius_bubble = a), "opacity" == o && (r.opacity_bubble = a)
                }
            } else "size" == o && (r.radius_bubble = void 0), "opacity" == o && (r.opacity_bubble = void 0)
        }
        if (h.interactivity.events.onhover.enable && isInArray("bubble", h.interactivity.events.onhover.mode)) {
            var t = r.x - h.interactivity.mouse.pos_x,
                s = r.y - h.interactivity.mouse.pos_y,
                o = 1 - (d = Math.sqrt(t * t + s * s)) / h.interactivity.modes.bubble.distance;
            if (d <= h.interactivity.modes.bubble.distance) {
                if (0 <= o && "mousemove" == h.interactivity.status) {
                    if (h.interactivity.modes.bubble.size != h.particles.size.value)
                        if (h.interactivity.modes.bubble.size > h.particles.size.value) {
                            0 <= (a = r.radius + h.interactivity.modes.bubble.size * o) && (r.radius_bubble = a)
                        } else {
                            var n = r.radius - h.interactivity.modes.bubble.size,
                                a = r.radius - n * o;
                            r.radius_bubble = 0 < a ? a : 0
                        }
                    if (h.interactivity.modes.bubble.opacity != h.particles.opacity.value)
                        if (h.interactivity.modes.bubble.opacity > h.particles.opacity.value) {
                            (l = h.interactivity.modes.bubble.opacity * o) > r.opacity && l <= h.interactivity.modes.bubble.opacity && (r.opacity_bubble = l)
                        } else {
                            var l;
                            (l = r.opacity - (h.particles.opacity.value - h.interactivity.modes.bubble.opacity) * o) < r.opacity && l >= h.interactivity.modes.bubble.opacity && (r.opacity_bubble = l)
                        }
                }
            } else e();
            "mouseleave" == h.interactivity.status && e()
        } else if (h.interactivity.events.onclick.enable && isInArray("bubble", h.interactivity.events.onclick.mode)) {
            if (h.tmp.bubble_clicking) {
                t = r.x - h.interactivity.mouse.click_pos_x, s = r.y - h.interactivity.mouse.click_pos_y;
                var d = Math.sqrt(t * t + s * s),
                    c = ((new Date).getTime() - h.interactivity.mouse.click_time) / 1e3;
                c > h.interactivity.modes.bubble.duration && (h.tmp.bubble_duration_end = !0), c > 2 * h.interactivity.modes.bubble.duration && (h.tmp.bubble_clicking = !1, h.tmp.bubble_duration_end = !1)
            }
            h.tmp.bubble_clicking && (i(h.interactivity.modes.bubble.size, h.particles.size.value, r.radius_bubble, r.radius, "size"), i(h.interactivity.modes.bubble.opacity, h.particles.opacity.value, r.opacity_bubble, r.opacity, "opacity"))
        }
    }, h.fn.modes.repulseParticle = function(s) {
        if (h.interactivity.events.onhover.enable && isInArray("repulse", h.interactivity.events.onhover.mode) && "mousemove" == h.interactivity.status) {
            var e = s.x - h.interactivity.mouse.pos_x,
                i = s.y - h.interactivity.mouse.pos_y,
                t = Math.sqrt(e * e + i * i),
                o = e / t,
                n = i / t,
                a = clamp(1 / (l = h.interactivity.modes.repulse.distance) * (-1 * Math.pow(t / l, 2) + 1) * l * 100, 0, 50),
                r = {
                    x: s.x + o * a,
                    y: s.y + n * a
                };
            "bounce" == h.particles.move.out_mode ? (0 < r.x - s.radius && r.x + s.radius < h.canvas.w && (s.x = r.x), 0 < r.y - s.radius && r.y + s.radius < h.canvas.h && (s.y = r.y)) : (s.x = r.x, s.y = r.y)
        } else if (h.interactivity.events.onclick.enable && isInArray("repulse", h.interactivity.events.onclick.mode))
            if (h.tmp.repulse_finish || (h.tmp.repulse_count++, h.tmp.repulse_count == h.particles.array.length && (h.tmp.repulse_finish = !0)), h.tmp.repulse_clicking) {
                var l = Math.pow(h.interactivity.modes.repulse.distance / 6, 3),
                    d = h.interactivity.mouse.click_pos_x - s.x,
                    c = h.interactivity.mouse.click_pos_y - s.y,
                    p = d * d + c * c,
                    u = -l / p * 1;
                p <= l && function() {
                    var e = Math.atan2(c, d);
                    if (s.vx = u * Math.cos(e), s.vy = u * Math.sin(e), "bounce" == h.particles.move.out_mode) {
                        var i = s.x + s.vx,
                            t = s.y + s.vy;
                        i + s.radius > h.canvas.w ? s.vx = -s.vx : i - s.radius < 0 && (s.vx = -s.vx), t + s.radius > h.canvas.h ? s.vy = -s.vy : t - s.radius < 0 && (s.vy = -s.vy)
                    }
                }()
            } else 0 == h.tmp.repulse_clicking && (s.vx = s.vx_i, s.vy = s.vy_i)
    }, h.fn.modes.grabParticle = function(e) {
        if (h.interactivity.events.onhover.enable && "mousemove" == h.interactivity.status) {
            var i = e.x - h.interactivity.mouse.pos_x,
                t = e.y - h.interactivity.mouse.pos_y,
                s = Math.sqrt(i * i + t * t);
            if (s <= h.interactivity.modes.grab.distance) {
                var o = h.interactivity.modes.grab.line_linked.opacity - s / (1 / h.interactivity.modes.grab.line_linked.opacity) / h.interactivity.modes.grab.distance;
                if (0 < o) {
                    var n = h.particles.line_linked.color_rgb_line;
                    h.canvas.ctx.strokeStyle = "rgba(" + n.r + "," + n.g + "," + n.b + "," + o + ")", h.canvas.ctx.lineWidth = h.particles.line_linked.width, h.canvas.ctx.beginPath(), h.canvas.ctx.moveTo(e.x, e.y), h.canvas.ctx.lineTo(h.interactivity.mouse.pos_x, h.interactivity.mouse.pos_y), h.canvas.ctx.stroke(), h.canvas.ctx.closePath()
                }
            }
        }
    }, h.fn.vendors.eventsListeners = function() {
        "window" == h.interactivity.detect_on ? h.interactivity.el = window : h.interactivity.el = h.canvas.el, (h.interactivity.events.onhover.enable || h.interactivity.events.onclick.enable) && (h.interactivity.el.addEventListener("mousemove", function(e) {
            if (h.interactivity.el == window) var i = e.clientX,
                t = e.clientY;
            else i = e.offsetX || e.clientX, t = e.offsetY || e.clientY;
            h.interactivity.mouse.pos_x = i, h.interactivity.mouse.pos_y = t, h.tmp.retina && (h.interactivity.mouse.pos_x *= h.canvas.pxratio, h.interactivity.mouse.pos_y *= h.canvas.pxratio), h.interactivity.status = "mousemove"
        }), h.interactivity.el.addEventListener("mouseleave", function(e) {
            h.interactivity.mouse.pos_x = null, h.interactivity.mouse.pos_y = null, h.interactivity.status = "mouseleave"
        })), h.interactivity.events.onclick.enable && h.interactivity.el.addEventListener("click", function() {
            if (h.interactivity.mouse.click_pos_x = h.interactivity.mouse.pos_x, h.interactivity.mouse.click_pos_y = h.interactivity.mouse.pos_y, h.interactivity.mouse.click_time = (new Date).getTime(), h.interactivity.events.onclick.enable) switch (h.interactivity.events.onclick.mode) {
                case "push":
                    h.particles.move.enable ? h.fn.modes.pushParticles(h.interactivity.modes.push.particles_nb, h.interactivity.mouse) : 1 == h.interactivity.modes.push.particles_nb ? h.fn.modes.pushParticles(h.interactivity.modes.push.particles_nb, h.interactivity.mouse) : 1 < h.interactivity.modes.push.particles_nb && h.fn.modes.pushParticles(h.interactivity.modes.push.particles_nb);
                    break;
                case "remove":
                    h.fn.modes.removeParticles(h.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    h.tmp.bubble_clicking = !0;
                    break;
                case "repulse":
                    h.tmp.repulse_clicking = !0, h.tmp.repulse_count = 0, h.tmp.repulse_finish = !1, setTimeout(function() {
                        h.tmp.repulse_clicking = !1
                    }, 1e3 * h.interactivity.modes.repulse.duration)
            }
        })
    }, h.fn.vendors.densityAutoParticles = function() {
        if (h.particles.number.density.enable) {
            var e = h.canvas.el.width * h.canvas.el.height / 1e3;
            h.tmp.retina && (e /= 2 * h.canvas.pxratio);
            var i = e * h.particles.number.value / h.particles.number.density.value_area,
                t = h.particles.array.length - i;
            t < 0 ? h.fn.modes.pushParticles(Math.abs(t)) : h.fn.modes.removeParticles(t)
        }
    }, h.fn.vendors.checkOverlap = function(e, i) {
        for (var t = 0; t < h.particles.array.length; t++) {
            var s = h.particles.array[t],
                o = e.x - s.x,
                n = e.y - s.y;
            Math.sqrt(o * o + n * n) <= e.radius + s.radius && (e.x = i ? i.x : Math.random() * h.canvas.w, e.y = i ? i.y : Math.random() * h.canvas.h, h.fn.vendors.checkOverlap(e))
        }
    }, h.fn.vendors.createSvgImg = function(n) {
        var e = h.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function(e, i, t, s) {
                if (n.color.rgb) var o = "rgba(" + n.color.rgb.r + "," + n.color.rgb.g + "," + n.color.rgb.b + "," + n.opacity + ")";
                else o = "hsla(" + n.color.hsl.h + "," + n.color.hsl.s + "%," + n.color.hsl.l + "%," + n.opacity + ")";
                return o
            }),
            i = new Blob([e], {
                type: "image/svg+xml;charset=utf-8"
            }),
            t = window.URL || window.webkitURL || window,
            s = t.createObjectURL(i),
            o = new Image;
        o.addEventListener("load", function() {
            n.img.obj = o, n.img.loaded = !0, t.revokeObjectURL(s), h.tmp.count_svg++
        }), o.src = s
    }, h.fn.vendors.destroypJS = function() {
        cancelAnimationFrame(h.fn.drawAnimFrame), t.remove(), pJSDom = null
    }, h.fn.vendors.drawShape = function(e, i, t, s, o, n) {
        var a = o * n,
            r = o / n,
            l = 180 * (r - 2) / r,
            d = Math.PI - Math.PI * l / 180;
        e.save(), e.beginPath(), e.translate(i, t), e.moveTo(0, 0);
        for (var c = 0; c < a; c++) e.lineTo(s, 0), e.translate(s, 0), e.rotate(d);
        e.fill(), e.restore()
    }, h.fn.vendors.exportImg = function() {
        window.open(h.canvas.el.toDataURL("image/png"), "_blank")
    }, h.fn.vendors.loadImg = function(e) {
        if (h.tmp.img_error = void 0, "" != h.particles.shape.image.src)
            if ("svg" == e) {
                var i = new XMLHttpRequest;
                i.open("GET", h.particles.shape.image.src), i.onreadystatechange = function(e) {
                    4 == i.readyState && (200 == i.status ? (h.tmp.source_svg = e.currentTarget.response, h.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), h.tmp.img_error = !0))
                }, i.send()
            } else {
                var t = new Image;
                t.addEventListener("load", function() {
                    h.tmp.img_obj = t, h.fn.vendors.checkBeforeDraw()
                }), t.src = h.particles.shape.image.src
            }
        else console.log("Error pJS - No image.src"), h.tmp.img_error = !0
    }, h.fn.vendors.draw = function() {
        "image" == h.particles.shape.type ? "svg" == h.tmp.img_type ? h.tmp.count_svg >= h.particles.number.value ? (h.fn.particlesDraw(), h.particles.move.enable ? h.fn.drawAnimFrame = requestAnimFrame(h.fn.vendors.draw) : cancelRequestAnimFrame(h.fn.drawAnimFrame)) : h.tmp.img_error || (h.fn.drawAnimFrame = requestAnimFrame(h.fn.vendors.draw)) : null != h.tmp.img_obj ? (h.fn.particlesDraw(), h.particles.move.enable ? h.fn.drawAnimFrame = requestAnimFrame(h.fn.vendors.draw) : cancelRequestAnimFrame(h.fn.drawAnimFrame)) : h.tmp.img_error || (h.fn.drawAnimFrame = requestAnimFrame(h.fn.vendors.draw)) : (h.fn.particlesDraw(), h.particles.move.enable ? h.fn.drawAnimFrame = requestAnimFrame(h.fn.vendors.draw) : cancelRequestAnimFrame(h.fn.drawAnimFrame))
    }, h.fn.vendors.checkBeforeDraw = function() {
        "image" == h.particles.shape.type ? "svg" == h.tmp.img_type && null == h.tmp.source_svg ? h.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(h.tmp.checkAnimFrame), h.tmp.img_error || (h.fn.vendors.init(), h.fn.vendors.draw())) : (h.fn.vendors.init(), h.fn.vendors.draw())
    }, h.fn.vendors.init = function() {
        h.fn.retinaInit(), h.fn.canvasInit(), h.fn.canvasSize(), h.fn.canvasPaint(), h.fn.particlesCreate(), h.fn.vendors.densityAutoParticles(), h.particles.line_linked.color_rgb_line = hexToRgb(h.particles.line_linked.color)
    }, h.fn.vendors.start = function() {
        isInArray("image", h.particles.shape.type) ? (h.tmp.img_type = h.particles.shape.image.src.substr(h.particles.shape.image.src.length - 3), h.fn.vendors.loadImg(h.tmp.img_type)) : h.fn.vendors.checkBeforeDraw()
    }, h.fn.vendors.eventsListeners(), h.fn.vendors.start()
};
Object.deepExtend = function(e, i) {
        for (var t in i) i[t] && i[t].constructor && i[t].constructor === Object ? (e[t] = e[t] || {}, arguments.callee(e[t], i[t])) : e[t] = i[t];
        return e
    }, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }, window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, window.pJSDom = [], window.particlesJS = function(e, i) {
        "string" != typeof e && (i = e, e = "particles-js"), e = e || "particles-js";
        var t = document.getElementById(e),
            s = "particles-js-canvas-el",
            o = t.getElementsByClassName(s);
        if (o.length)
            for (; 0 < o.length;) t.removeChild(o[0]);
        var n = document.createElement("canvas");
        n.className = s, n.style.width = "100%", n.style.height = "100%", null != document.getElementById(e).appendChild(n) && pJSDom.push(new pJS(e, i))
    }, window.particlesJS.load = function(t, e, s) {
        var o = new XMLHttpRequest;
        o.open("GET", e), o.onreadystatechange = function(e) {
            if (4 == o.readyState)
                if (200 == o.status) {
                    var i = JSON.parse(e.currentTarget.response);
                    window.particlesJS(t, i), s && s()
                } else console.log("Error pJS - XMLHttpRequest status: " + o.status), console.log("Error pJS - File config not found")
        }, o.send()
    },
    function(i, t) {
        "function" == typeof define && define.amd ? define(["js/jquery"], function(e) {
            return t(i, e)
        }) : "object" == typeof exports ? t(i, require("js/jquery")) : t(i, i.jQuery || i.Zepto)
    }(this, function(e, a) {
        "use strict";
        var i, s, t, n = "remodal",
            o = e.REMODAL_GLOBALS && e.REMODAL_GLOBALS.NAMESPACE || n,
            r = a.map(["animationstart", "webkitAnimationStart", "MSAnimationStart", "oAnimationStart"], function(e) {
                return e + "." + o
            }).join(" "),
            l = a.map(["animationend", "webkitAnimationEnd", "MSAnimationEnd", "oAnimationEnd"], function(e) {
                return e + "." + o
            }).join(" "),
            d = a.extend({
                hashTracking: !0,
                closeOnConfirm: !0,
                closeOnCancel: !0,
                closeOnEscape: !0,
                closeOnOutsideClick: !0,
                modifier: "",
                appendTo: null
            }, e.REMODAL_GLOBALS && e.REMODAL_GLOBALS.DEFAULTS),
            c = {
                CLOSING: "closing",
                CLOSED: "closed",
                OPENING: "opening",
                OPENED: "opened"
            },
            p = "confirmation",
            u = "cancellation",
            h = void 0 !== (i = document.createElement("div").style).animationName || void 0 !== i.WebkitAnimationName || void 0 !== i.MozAnimationName || void 0 !== i.msAnimationName || void 0 !== i.OAnimationName,
            f = /iPad|iPhone|iPod/.test(navigator.platform);

        function v(e) {
            if (h && "none" === e.css("animation-name") && "none" === e.css("-webkit-animation-name") && "none" === e.css("-moz-animation-name") && "none" === e.css("-o-animation-name") && "none" === e.css("-ms-animation-name")) return 0;
            var i, t, s, o, n = e.css("animation-duration") || e.css("-webkit-animation-duration") || e.css("-moz-animation-duration") || e.css("-o-animation-duration") || e.css("-ms-animation-duration") || "0s",
                a = e.css("animation-delay") || e.css("-webkit-animation-delay") || e.css("-moz-animation-delay") || e.css("-o-animation-delay") || e.css("-ms-animation-delay") || "0s",
                r = e.css("animation-iteration-count") || e.css("-webkit-animation-iteration-count") || e.css("-moz-animation-iteration-count") || e.css("-o-animation-iteration-count") || e.css("-ms-animation-iteration-count") || "1";
            for (n = n.split(", "), a = a.split(", "), r = r.split(", "), o = 0, t = n.length, i = Number.NEGATIVE_INFINITY; o < t; o++) i < (s = parseFloat(n[o]) * parseInt(r[o], 10) + parseFloat(a[o])) && (i = s);
            return i
        }

        function m() {
            if (a(document.body).height() <= a(window).height()) return 0;
            var e, i, t = document.createElement("div"),
                s = document.createElement("div");
            return t.style.visibility = "hidden", t.style.width = "100px", document.body.appendChild(t), e = t.offsetWidth, t.style.overflow = "scroll", s.style.width = "100%", t.appendChild(s), i = s.offsetWidth, t.parentNode.removeChild(t), e - i
        }

        function g() {
            if (!f) {
                var e, i, t = a("html"),
                    s = k("is-locked");
                t.hasClass(s) && (i = a(document.body), e = parseInt(i.css("padding-right"), 10) - m(), i.css("padding-right", e + "px"), t.removeClass(s))
            }
        }

        function y(e, i, t, s) {
            var o = k("is", i),
                n = [k("is", c.CLOSING), k("is", c.OPENING), k("is", c.CLOSED), k("is", c.OPENED)].join(" ");
            e.$bg.removeClass(n).addClass(o), e.$overlay.removeClass(n).addClass(o), e.$wrapper.removeClass(n).addClass(o), e.$modal.removeClass(n).addClass(o), e.state = i, t || e.$modal.trigger({
                type: i,
                reason: s
            }, [{
                reason: s
            }])
        }

        function w(e, i, t) {
            function s(e) {
                e.target === this && n++
            }

            function o(e) {
                e.target === this && 0 == --n && (a.each(["$bg", "$overlay", "$wrapper", "$modal"], function(e, i) {
                    t[i].off(r + " " + l)
                }), i())
            }
            var n = 0;
            a.each(["$bg", "$overlay", "$wrapper", "$modal"], function(e, i) {
                t[i].on(r, s).on(l, o)
            }), e(), 0 === v(t.$bg) && 0 === v(t.$overlay) && 0 === v(t.$wrapper) && 0 === v(t.$modal) && (a.each(["$bg", "$overlay", "$wrapper", "$modal"], function(e, i) {
                t[i].off(r + " " + l)
            }), i())
        }

        function b(t) {
            t.state !== c.CLOSED && (a.each(["$bg", "$overlay", "$wrapper", "$modal"], function(e, i) {
                t[i].off(r + " " + l)
            }), t.$bg.removeClass(t.settings.modifier), t.$overlay.removeClass(t.settings.modifier).hide(), t.$wrapper.hide(), g(), y(t, c.CLOSED, !0))
        }

        function k() {
            for (var e = o, i = 0; i < arguments.length; ++i) e += "-" + arguments[i];
            return e
        }

        function S() {
            var e, i, t = location.hash.replace("#", "");
            if (t) {
                try {
                    i = a("[data-" + n + '-id="' + t + '"]')
                } catch (e) {}
                i && i.length && (e = a[n].lookup[i.data(n)]) && e.settings.hashTracking && e.open()
            } else s && s.state === c.OPENED && s.settings.hashTracking && s.close()
        }

        function T(e, i) {
            var t = a(document.body),
                s = this;
            s.settings = a.extend({}, d, i), s.index = a[n].lookup.push(s) - 1, s.state = c.CLOSED, s.$overlay = a("." + k("overlay")), null !== s.settings.appendTo && s.settings.appendTo.length && (t = a(s.settings.appendTo)), s.$overlay.length || (s.$overlay = a("<div>").addClass(k("overlay") + " " + k("is", c.CLOSED)).hide(), t.append(s.$overlay)), s.$bg = a("." + k("bg")).addClass(k("is", c.CLOSED)), s.$modal = e.addClass(o + " " + k("is-initialized") + " " + s.settings.modifier + " " + k("is", c.CLOSED)).attr("tabindex", "-1"), s.$wrapper = a("<div>").addClass(k("wrapper") + " " + s.settings.modifier + " " + k("is", c.CLOSED)).hide().append(s.$modal), t.append(s.$wrapper), s.$wrapper.on("click." + o, "[data-" + n + '-action="close"]', function(e) {
                e.preventDefault(), s.close()
            }), s.$wrapper.on("click." + o, "[data-" + n + '-action="cancel"]', function(e) {
                e.preventDefault(), s.$modal.trigger(u), s.settings.closeOnCancel && s.close(u)
            }), s.$wrapper.on("click." + o, "[data-" + n + '-action="confirm"]', function(e) {
                e.preventDefault(), s.$modal.trigger(p), s.settings.closeOnConfirm && s.close(p)
            }), s.$wrapper.on("click." + o, function(e) {
                a(e.target).hasClass(k("wrapper")) && s.settings.closeOnOutsideClick && s.close()
            })
        }
        T.prototype.open = function() {
            var e, i = this;
            i.state !== c.OPENING && i.state !== c.CLOSING && ((e = i.$modal.attr("data-" + n + "-id")) && i.settings.hashTracking && (t = a(window).scrollTop(), location.hash = e), s && s !== i && b(s), s = i, function() {
                if (!f) {
                    var e, i, t = a("html"),
                        s = k("is-locked");
                    t.hasClass(s) || (i = a(document.body), e = parseInt(i.css("padding-right"), 10) + m(), i.css("padding-right", e + "px"), t.addClass(s))
                }
            }(), i.$bg.addClass(i.settings.modifier), i.$overlay.addClass(i.settings.modifier).show(), i.$wrapper.show().scrollTop(0), i.$modal.focus(), w(function() {
                y(i, c.OPENING)
            }, function() {
                y(i, c.OPENED)
            }, i))
        }, T.prototype.close = function(e) {
            var i = this;
            i.state !== c.OPENING && i.state !== c.CLOSING && (i.settings.hashTracking && i.$modal.attr("data-" + n + "-id") === location.hash.substr(1) && (location.hash = "", a(window).scrollTop(t)), w(function() {
                y(i, c.CLOSING, !1, e)
            }, function() {
                i.$bg.removeClass(i.settings.modifier), i.$overlay.removeClass(i.settings.modifier).hide(), i.$wrapper.hide(), g(), y(i, c.CLOSED, !1, e)
            }, i))
        }, T.prototype.getState = function() {
            return this.state
        }, T.prototype.destroy = function() {
            var e = a[n].lookup;
            b(this), this.$wrapper.remove(), delete e[this.index], 0 === a.grep(e, function(e) {
                return !!e
            }).length && (this.$overlay.remove(), this.$bg.removeClass(k("is", c.CLOSING) + " " + k("is", c.OPENING) + " " + k("is", c.CLOSED) + " " + k("is", c.OPENED)))
        }, a[n] = {
            lookup: []
        }, a.fn[n] = function(t) {
            var s, o;
            return this.each(function(e, i) {
                null == (o = a(i)).data(n) ? (s = new T(o, t), o.data(n, s.index), s.settings.hashTracking && o.attr("data-" + n + "-id") === location.hash.substr(1) && s.open()) : s = a[n].lookup[o.data(n)]
            }), s
        }, a(document).ready(function() {
            a(document).on("click", "[data-" + n + "-target]", function(e) {
                e.preventDefault();
                var i = e.currentTarget.getAttribute("data-" + n + "-target"),
                    t = a("[data-" + n + '-id="' + i + '"]');
                a[n].lookup[t.data(n)].open()
            }), a(document).find("." + o).each(function(e, i) {
                var t = a(i),
                    s = t.data(n + "-options");
                s ? ("string" == typeof s || s instanceof String) && (s = function(e) {
                    var i, t, s, o, n = {};
                    for (o = 0, t = (i = (e = e.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",")).split(",")).length; o < t; o++) i[o] = i[o].split(":"), ("string" == typeof(s = i[o][1]) || s instanceof String) && (s = "true" === s || "false" !== s && s), ("string" == typeof s || s instanceof String) && (s = isNaN(s) ? s : +s), n[i[o][0]] = s;
                    return n
                }(s)) : s = {}, t[n](s)
            }), a(document).on("keydown." + o, function(e) {
                s && s.settings.closeOnEscape && s.state === c.OPENED && 27 === e.keyCode && s.close()
            }), a(window).on("hashchange." + o, S)
        })
    }),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["js/jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("js/jquery")) : e(jQuery)
    }(function(d) {
        "use strict";
        var o, a = window.Slick || {};
        (o = 0, a = function(e, i) {
            var t, s = this;
            s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: d(e),
                appendDots: d(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, i) {
                    return d('<button type="button" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, s.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, d.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = d(e), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, t = d(e).data("slick") || {}, s.options = d.extend({}, s.defaults, i, t), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = d.proxy(s.autoPlay, s), s.autoPlayClear = d.proxy(s.autoPlayClear, s), s.autoPlayIterator = d.proxy(s.autoPlayIterator, s), s.changeSlide = d.proxy(s.changeSlide, s), s.clickHandler = d.proxy(s.clickHandler, s), s.selectHandler = d.proxy(s.selectHandler, s), s.setPosition = d.proxy(s.setPosition, s), s.swipeHandler = d.proxy(s.swipeHandler, s), s.dragHandler = d.proxy(s.dragHandler, s), s.keyHandler = d.proxy(s.keyHandler, s), s.instanceUid = o++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
        }).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, a.prototype.addSlide = a.prototype.slickAdd = function(e, i, t) {
            var s = this;
            if ("boolean" == typeof i) t = i, i = null;
            else if (i < 0 || i >= s.slideCount) return !1;
            s.unload(), "number" == typeof i ? 0 === i && 0 === s.$slides.length ? d(e).appendTo(s.$slideTrack) : t ? d(e).insertBefore(s.$slides.eq(i)) : d(e).insertAfter(s.$slides.eq(i)) : !0 === t ? d(e).prependTo(s.$slideTrack) : d(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, i) {
                d(i).attr("data-slick-index", e)
            }), s.$slidesCache = s.$slides, s.reinit()
        }, a.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: i
                }, e.options.speed)
            }
        }, a.prototype.animateSlide = function(e, i) {
            var t = {},
                s = this;
            s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
                left: e
            }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({
                top: e
            }, s.options.speed, s.options.easing, i) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), d({
                animStart: s.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function(e) {
                    e = Math.ceil(e), !1 === s.options.vertical ? t[s.animType] = "translate(" + e + "px, 0px)" : t[s.animType] = "translate(0px," + e + "px)", s.$slideTrack.css(t)
                },
                complete: function() {
                    i && i.call()
                }
            })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? t[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : t[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(t), i && setTimeout(function() {
                s.disableTransition(), i.call()
            }, s.options.speed))
        }, a.prototype.getNavTarget = function() {
            var e = this.options.asNavFor;
            return e && null !== e && (e = d(e).not(this.$slider)), e
        }, a.prototype.asNavFor = function(i) {
            var e = this.getNavTarget();
            null !== e && "object" == typeof e && e.each(function() {
                var e = d(this).slick("getSlick");
                e.unslicked || e.slideHandler(i, !0)
            })
        }, a.prototype.applyTransition = function(e) {
            var i = this,
                t = {};
            !1 === i.options.fade ? t[i.transitionType] = i.transformType + " " + i.options.speed + "ms " + i.options.cssEase : t[i.transitionType] = "opacity " + i.options.speed + "ms " + i.options.cssEase, !1 === i.options.fade ? i.$slideTrack.css(t) : i.$slides.eq(e).css(t)
        }, a.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, a.prototype.autoPlayClear = function() {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, a.prototype.autoPlayIterator = function() {
            var e = this,
                i = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (i = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(i))
        }, a.prototype.buildArrows = function() {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = d(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = d(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, a.prototype.buildDots = function() {
            var e, i, t = this;
            if (!0 === t.options.dots) {
                for (t.$slider.addClass("slick-dotted"), i = d("<ul />").addClass(t.options.dotsClass), e = 0; e <= t.getDotCount(); e += 1) i.append(d("<li />").append(t.options.customPaging.call(this, t, e)));
                t.$dots = i.appendTo(t.options.appendDots), t.$dots.find("li").first().addClass("slick-active")
            }
        }, a.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
                d(i).attr("data-slick-index", e).data("originalStyling", d(i).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? d('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), d("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, a.prototype.buildRows = function() {
            var e, i, t, s, o, n, a, r = this;
            if (s = document.createDocumentFragment(), n = r.$slider.children(), 1 < r.options.rows) {
                for (a = r.options.slidesPerRow * r.options.rows, o = Math.ceil(n.length / a), e = 0; e < o; e++) {
                    var l = document.createElement("div");
                    for (i = 0; i < r.options.rows; i++) {
                        var d = document.createElement("div");
                        for (t = 0; t < r.options.slidesPerRow; t++) {
                            var c = e * a + (i * r.options.slidesPerRow + t);
                            n.get(c) && d.appendChild(n.get(c))
                        }
                        l.appendChild(d)
                    }
                    s.appendChild(l)
                }
                r.$slider.empty().append(s), r.$slider.children().children().children().css({
                    width: 100 / r.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, a.prototype.checkResponsive = function(e, i) {
            var t, s, o, n = this,
                a = !1,
                r = n.$slider.width(),
                l = window.innerWidth || d(window).width();
            if ("window" === n.respondTo ? o = l : "slider" === n.respondTo ? o = r : "min" === n.respondTo && (o = Math.min(l, r)), n.options.responsive && n.options.responsive.length && null !== n.options.responsive) {
                for (t in s = null, n.breakpoints) n.breakpoints.hasOwnProperty(t) && (!1 === n.originalSettings.mobileFirst ? o < n.breakpoints[t] && (s = n.breakpoints[t]) : o > n.breakpoints[t] && (s = n.breakpoints[t]));
                null !== s ? null !== n.activeBreakpoint ? s === n.activeBreakpoint && !i || (n.activeBreakpoint = s, "unslick" === n.breakpointSettings[s] ? n.unslick(s) : (n.options = d.extend({}, n.originalSettings, n.breakpointSettings[s]), !0 === e && (n.currentSlide = n.options.initialSlide), n.refresh(e)), a = s) : (n.activeBreakpoint = s, "unslick" === n.breakpointSettings[s] ? n.unslick(s) : (n.options = d.extend({}, n.originalSettings, n.breakpointSettings[s]), !0 === e && (n.currentSlide = n.options.initialSlide), n.refresh(e)), a = s) : null !== n.activeBreakpoint && (n.activeBreakpoint = null, n.options = n.originalSettings, !0 === e && (n.currentSlide = n.options.initialSlide), n.refresh(e), a = s), e || !1 === a || n.$slider.trigger("breakpoint", [n, a])
            }
        }, a.prototype.changeSlide = function(e, i) {
            var t, s, o = this,
                n = d(e.currentTarget);
            switch (n.is("a") && e.preventDefault(), n.is("li") || (n = n.closest("li")), t = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
                case "previous":
                    s = 0 == t ? o.options.slidesToScroll : o.options.slidesToShow - t, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - s, !1, i);
                    break;
                case "next":
                    s = 0 == t ? o.options.slidesToScroll : t, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + s, !1, i);
                    break;
                case "index":
                    var a = 0 === e.data.index ? 0 : e.data.index || n.index() * o.options.slidesToScroll;
                    o.slideHandler(o.checkNavigable(a), !1, i), n.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, a.prototype.checkNavigable = function(e) {
            var i, t;
            if (t = 0, e > (i = this.getNavigableIndexes())[i.length - 1]) e = i[i.length - 1];
            else
                for (var s in i) {
                    if (e < i[s]) {
                        e = t;
                        break
                    }
                    t = i[s]
                }
            return e
        }, a.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && (d("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", d.proxy(e.interrupt, e, !0)).off("mouseleave.slick", d.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), d(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().off("click.slick", e.selectHandler), d(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), d(window).off("resize.slick.slick-" + e.instanceUid, e.resize), d("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), d(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
        }, a.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", d.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", d.proxy(e.interrupt, e, !1))
        }, a.prototype.cleanUpRows = function() {
            var e;
            1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
        }, a.prototype.clickHandler = function(e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, a.prototype.destroy = function(e) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), d(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                d(this).attr("style", d(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
        }, a.prototype.disableTransition = function(e) {
            var i = {};
            i[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(i) : this.$slides.eq(e).css(i)
        }, a.prototype.fadeSlide = function(e, i) {
            var t = this;
            !1 === t.cssTransitions ? (t.$slides.eq(e).css({
                zIndex: t.options.zIndex
            }), t.$slides.eq(e).animate({
                opacity: 1
            }, t.options.speed, t.options.easing, i)) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 1,
                zIndex: t.options.zIndex
            }), i && setTimeout(function() {
                t.disableTransition(e), i.call()
            }, t.options.speed))
        }, a.prototype.fadeSlideOut = function(e) {
            var i = this;
            !1 === i.cssTransitions ? i.$slides.eq(e).animate({
                opacity: 0,
                zIndex: i.options.zIndex - 2
            }, i.options.speed, i.options.easing) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 0,
                zIndex: i.options.zIndex - 2
            }))
        }, a.prototype.filterSlides = a.prototype.slickFilter = function(e) {
            var i = this;
            null !== e && (i.$slidesCache = i.$slides, i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.filter(e).appendTo(i.$slideTrack), i.reinit())
        }, a.prototype.focusHandler = function() {
            var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(e) {
                e.stopImmediatePropagation();
                var i = d(this);
                setTimeout(function() {
                    t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
                }, 0)
            })
        }, a.prototype.getCurrent = a.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, a.prototype.getDotCount = function() {
            var e = this,
                i = 0,
                t = 0,
                s = 0;
            if (!0 === e.options.infinite)
                if (e.slideCount <= e.options.slidesToShow) ++s;
                else
                    for (; i < e.slideCount;) ++s, i = t + e.options.slidesToScroll, t += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) s = e.slideCount;
            else if (e.options.asNavFor)
                for (; i < e.slideCount;) ++s, i = t + e.options.slidesToScroll, t += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else s = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return s - 1
        }, a.prototype.getLeft = function(e) {
            var i, t, s, o, n = this,
                a = 0;
            return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, o = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? o = -1.5 : 1 === n.options.slidesToShow && (o = -2)), a = t * n.options.slidesToShow * o), n.slideCount % n.options.slidesToScroll != 0 && e + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (a = e > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (e - n.slideCount)) * n.slideWidth * -1, (n.options.slidesToShow - (e - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, n.slideCount % n.options.slidesToScroll * t * -1))) : e + n.options.slidesToShow > n.slideCount && (n.slideOffset = (e + n.options.slidesToShow - n.slideCount) * n.slideWidth, a = (e + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (a = n.slideOffset = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), i = !1 === n.options.vertical ? e * n.slideWidth * -1 + n.slideOffset : e * t * -1 + a, !0 === n.options.variableWidth && (s = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(e) : n.$slideTrack.children(".slick-slide").eq(e + n.options.slidesToShow), i = !0 === n.options.rtl ? s[0] ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, !0 === n.options.centerMode && (s = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(e) : n.$slideTrack.children(".slick-slide").eq(e + n.options.slidesToShow + 1), i = !0 === n.options.rtl ? s[0] ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, i += (n.$list.width() - s.outerWidth()) / 2)), i
        }, a.prototype.getOption = a.prototype.slickGetOption = function(e) {
            return this.options[e]
        }, a.prototype.getNavigableIndexes = function() {
            var e, i = this,
                t = 0,
                s = 0,
                o = [];
            for (e = !1 === i.options.infinite ? i.slideCount : (t = -1 * i.options.slidesToScroll, s = -1 * i.options.slidesToScroll, 2 * i.slideCount); t < e;) o.push(t), t = s + i.options.slidesToScroll, s += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
            return o
        }, a.prototype.getSlick = function() {
            return this
        }, a.prototype.getSlideCount = function() {
            var t, s, o = this;
            return s = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(e, i) {
                if (i.offsetLeft - s + d(i).outerWidth() / 2 > -1 * o.swipeLeft) return t = i, !1
            }), Math.abs(d(t).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, a.prototype.goTo = a.prototype.slickGoTo = function(e, i) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, i)
        }, a.prototype.init = function(e) {
            var i = this;
            d(i.$slider).hasClass("slick-initialized") || (d(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, a.prototype.initADA = function() {
            var t = this,
                s = Math.ceil(t.slideCount / t.options.slidesToShow),
                o = t.getNavigableIndexes().filter(function(e) {
                    return 0 <= e && e < t.slideCount
                });
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(e) {
                var i = o.indexOf(e);
                d(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + t.instanceUid + e,
                    tabindex: -1
                }), -1 !== i && d(this).attr({
                    "aria-describedby": "slick-slide-control" + t.instanceUid + i
                })
            }), t.$dots.attr("role", "tablist").find("li").each(function(e) {
                var i = o[e];
                d(this).attr({
                    role: "presentation"
                }), d(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + t.instanceUid + e,
                    "aria-controls": "slick-slide" + t.instanceUid + i,
                    "aria-label": e + 1 + " of " + s,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(t.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var e = t.currentSlide, i = e + t.options.slidesToShow; e < i; e++) t.$slides.eq(e).attr("tabindex", 0);
            t.activateADA()
        }, a.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
        }, a.prototype.initDotEvents = function() {
            var e = this;
            !0 === e.options.dots && (d("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && d("li", e.$dots).on("mouseenter.slick", d.proxy(e.interrupt, e, !0)).on("mouseleave.slick", d.proxy(e.interrupt, e, !1))
        }, a.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", d.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", d.proxy(e.interrupt, e, !1)))
        }, a.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), d(document).on(e.visibilityChange, d.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().on("click.slick", e.selectHandler), d(window).on("orientationchange.slick.slick-" + e.instanceUid, d.proxy(e.orientationChange, e)), d(window).on("resize.slick.slick-" + e.instanceUid, d.proxy(e.resize, e)), d("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), d(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), d(e.setPosition)
        }, a.prototype.initUI = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, a.prototype.keyHandler = function(e) {
            var i = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === i.options.accessibility ? i.changeSlide({
                data: {
                    message: !0 === i.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === i.options.accessibility && i.changeSlide({
                data: {
                    message: !0 === i.options.rtl ? "previous" : "next"
                }
            }))
        }, a.prototype.lazyLoad = function() {
            function e(e) {
                d("img[data-lazy]", e).each(function() {
                    var e = d(this),
                        i = d(this).attr("data-lazy"),
                        t = d(this).attr("data-srcset"),
                        s = d(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                        o = document.createElement("img");
                    o.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            t && (e.attr("srcset", t), s && e.attr("sizes", s)), e.attr("src", i).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), n.$slider.trigger("lazyLoaded", [n, e, i])
                        })
                    }, o.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, i])
                    }, o.src = i
                })
            }
            var i, t, s, n = this;
            if (!0 === n.options.centerMode ? s = !0 === n.options.infinite ? (t = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (t = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (t = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(t + n.options.slidesToShow), !0 === n.options.fade && (0 < t && t--, s <= n.slideCount && s++)), i = n.$slider.find(".slick-slide").slice(t, s), "anticipated" === n.options.lazyLoad)
                for (var o = t - 1, a = s, r = n.$slider.find(".slick-slide"), l = 0; l < n.options.slidesToScroll; l++) o < 0 && (o = n.slideCount - 1), i = (i = i.add(r.eq(o))).add(r.eq(a)), o--, a++;
            e(i), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
        }, a.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, a.prototype.next = a.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, a.prototype.orientationChange = function() {
            this.checkResponsive(), this.setPosition()
        }, a.prototype.pause = a.prototype.slickPause = function() {
            this.autoPlayClear(), this.paused = !0
        }, a.prototype.play = a.prototype.slickPlay = function() {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, a.prototype.postSlide = function(e) {
            var i = this;
            i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && d(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
        }, a.prototype.prev = a.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, a.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, a.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var i, t, s, o, n, a = this,
                r = d("img[data-lazy]", a.$slider);
            r.length ? (i = r.first(), t = i.attr("data-lazy"), s = i.attr("data-srcset"), o = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (n = document.createElement("img")).onload = function() {
                s && (i.attr("srcset", s), o && i.attr("sizes", o)), i.attr("src", t).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, t]), a.progressiveLazyLoad()
            }, n.onerror = function() {
                e < 3 ? setTimeout(function() {
                    a.progressiveLazyLoad(e + 1)
                }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, t]), a.progressiveLazyLoad())
            }, n.src = t) : a.$slider.trigger("allImagesLoaded", [a])
        }, a.prototype.refresh = function(e) {
            var i, t, s = this;
            t = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > t && (s.currentSlide = t), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), i = s.currentSlide, s.destroy(!0), d.extend(s, s.initials, {
                currentSlide: i
            }), s.init(), e || s.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, a.prototype.registerBreakpoints = function() {
            var e, i, t, s = this,
                o = s.options.responsive || null;
            if ("array" === d.type(o) && o.length) {
                for (e in s.respondTo = s.options.respondTo || "window", o)
                    if (t = s.breakpoints.length - 1, o.hasOwnProperty(e)) {
                        for (i = o[e].breakpoint; 0 <= t;) s.breakpoints[t] && s.breakpoints[t] === i && s.breakpoints.splice(t, 1), t--;
                        s.breakpoints.push(i), s.breakpointSettings[i] = o[e].settings
                    }
                s.breakpoints.sort(function(e, i) {
                    return s.options.mobileFirst ? e - i : i - e
                })
            }
        }, a.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, a.prototype.resize = function() {
            var e = this;
            d(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = d(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, a.prototype.removeSlide = a.prototype.slickRemove = function(e, i, t) {
            var s = this;
            if (e = "boolean" == typeof e ? !0 === (i = e) ? 0 : s.slideCount - 1 : !0 === i ? --e : e, s.slideCount < 1 || e < 0 || e > s.slideCount - 1) return !1;
            s.unload(), !0 === t ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(e).remove(), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slidesCache = s.$slides, s.reinit()
        }, a.prototype.setCSS = function(e) {
            var i, t, s = this,
                o = {};
            !0 === s.options.rtl && (e = -e), i = "left" == s.positionProp ? Math.ceil(e) + "px" : "0px", t = "top" == s.positionProp ? Math.ceil(e) + "px" : "0px", o[s.positionProp] = e, !1 === s.transformsEnabled || (!(o = {}) === s.cssTransitions ? o[s.animType] = "translate(" + i + ", " + t + ")" : o[s.animType] = "translate3d(" + i + ", " + t + ", 0px)"), s.$slideTrack.css(o)
        }, a.prototype.setDimensions = function() {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var i = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - i)
        }, a.prototype.setFade = function() {
            var t, s = this;
            s.$slides.each(function(e, i) {
                t = s.slideWidth * e * -1, !0 === s.options.rtl ? d(i).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: s.options.zIndex - 2,
                    opacity: 0
                }) : d(i).css({
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: s.options.zIndex - 2,
                    opacity: 0
                })
            }), s.$slides.eq(s.currentSlide).css({
                zIndex: s.options.zIndex - 1,
                opacity: 1
            })
        }, a.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", i)
            }
        }, a.prototype.setOption = a.prototype.slickSetOption = function() {
            var e, i, t, s, o, n = this,
                a = !1;
            if ("object" === d.type(arguments[0]) ? (t = arguments[0], a = arguments[1], o = "multiple") : "string" === d.type(arguments[0]) && (s = arguments[1], a = arguments[2], "responsive" === (t = arguments[0]) && "array" === d.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) n.options[t] = s;
            else if ("multiple" === o) d.each(t, function(e, i) {
                n.options[e] = i
            });
            else if ("responsive" === o)
                for (i in s)
                    if ("array" !== d.type(n.options.responsive)) n.options.responsive = [s[i]];
                    else {
                        for (e = n.options.responsive.length - 1; 0 <= e;) n.options.responsive[e].breakpoint === s[i].breakpoint && n.options.responsive.splice(e, 1), e--;
                        n.options.responsive.push(s[i])
                    }
            a && (n.unload(), n.reinit())
        }, a.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, a.prototype.setProps = function() {
            var e = this,
                i = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === i.WebkitTransition && void 0 === i.MozTransition && void 0 === i.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== i.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (e.animType = !1)), void 0 !== i.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === i.perspectiveProperty && void 0 === i.MozPerspective && (e.animType = !1)), void 0 !== i.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (e.animType = !1)), void 0 !== i.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === i.msTransform && (e.animType = !1)), void 0 !== i.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, a.prototype.setSlideClasses = function(e) {
            var i, t, s, o, n = this;
            if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(e).addClass("slick-current"), !0 === n.options.centerMode) {
                var a = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                i = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i <= e && e <= n.slideCount - 1 - i ? n.$slides.slice(e - i + a, e + i + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = n.options.slidesToShow + e, t.slice(s - i + 1 + a, s + i + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : e === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(e).addClass("slick-center")
            } else 0 <= e && e <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(e, e + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (o = n.slideCount % n.options.slidesToShow, s = !0 === n.options.infinite ? n.options.slidesToShow + e : e, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - e < n.options.slidesToShow ? t.slice(s - (n.options.slidesToShow - o), s + o).addClass("slick-active").attr("aria-hidden", "false") : t.slice(s, s + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
        }, a.prototype.setupInfinite = function() {
            var e, i, t, s = this;
            if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (i = null, s.slideCount > s.options.slidesToShow)) {
                for (t = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - t; e -= 1) i = e - 1, d(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < t + s.slideCount; e += 1) i = e, d(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    d(this).attr("id", "")
                })
            }
        }, a.prototype.interrupt = function(e) {
            e || this.autoPlay(), this.interrupted = e
        }, a.prototype.selectHandler = function(e) {
            var i = d(e.target).is(".slick-slide") ? d(e.target) : d(e.target).parents(".slick-slide"),
                t = parseInt(i.attr("data-slick-index"));
            t = t || 0, this.slideCount <= this.options.slidesToShow ? this.slideHandler(t, !1, !0) : this.slideHandler(t)
        }, a.prototype.slideHandler = function(e, i, t) {
            var s, o, n, a, r, l = null,
                d = this;
            if (i = i || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e))
                if (!1 === i && d.asNavFor(e), s = e, l = d.getLeft(s), a = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? a : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (s = d.currentSlide, !0 !== t ? d.animateSlide(a, function() {
                    d.postSlide(s)
                }) : d.postSlide(s));
                else if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (s = d.currentSlide, !0 !== t ? d.animateSlide(a, function() {
                d.postSlide(s)
            }) : d.postSlide(s));
            else {
                if (d.options.autoplay && clearInterval(d.autoPlayTimer), o = s < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + s : s >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : s - d.slideCount : s, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, o]), n = d.currentSlide, d.currentSlide = o, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (r = (r = d.getNavTarget()).slick("getSlick")).slideCount <= r.options.slidesToShow && r.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== t ? (d.fadeSlideOut(n), d.fadeSlide(o, function() {
                    d.postSlide(o)
                })) : d.postSlide(o), void d.animateHeight();
                !0 !== t ? d.animateSlide(l, function() {
                    d.postSlide(o)
                }) : d.postSlide(o)
            }
        }, a.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, a.prototype.swipeDirection = function() {
            var e, i, t, s, o = this;
            return e = o.touchObject.startX - o.touchObject.curX, i = o.touchObject.startY - o.touchObject.curY, t = Math.atan2(i, e), (s = Math.round(180 * t / Math.PI)) < 0 && (s = 360 - Math.abs(s)), s <= 45 && 0 <= s ? !1 === o.options.rtl ? "left" : "right" : s <= 360 && 315 <= s ? !1 === o.options.rtl ? "left" : "right" : 135 <= s && s <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= s && s <= 135 ? "down" : "up" : "vertical"
        }, a.prototype.swipeEnd = function(e) {
            var i, t, s = this;
            if (s.dragging = !1, s.swiping = !1, s.scrolling) return s.scrolling = !1;
            if (s.interrupted = !1, s.shouldClick = !(10 < s.touchObject.swipeLength), void 0 === s.touchObject.curX) return !1;
            if (!0 === s.touchObject.edgeHit && s.$slider.trigger("edge", [s, s.swipeDirection()]), s.touchObject.swipeLength >= s.touchObject.minSwipe) {
                switch (t = s.swipeDirection()) {
                    case "left":
                    case "down":
                        i = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(), s.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        i = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(), s.currentDirection = 1
                }
                "vertical" != t && (s.slideHandler(i), s.touchObject = {}, s.$slider.trigger("swipe", [s, t]))
            } else s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide), s.touchObject = {})
        }, a.prototype.swipeHandler = function(e) {
            var i = this;
            if (!(!1 === i.options.swipe || "ontouchend" in document && !1 === i.options.swipe || !1 === i.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (i.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, i.touchObject.minSwipe = i.listWidth / i.options.touchThreshold, !0 === i.options.verticalSwiping && (i.touchObject.minSwipe = i.listHeight / i.options.touchThreshold), e.data.action) {
                case "start":
                    i.swipeStart(e);
                    break;
                case "move":
                    i.swipeMove(e);
                    break;
                case "end":
                    i.swipeEnd(e)
            }
        }, a.prototype.swipeMove = function(e) {
            var i, t, s, o, n, a, r = this;
            return n = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!r.dragging || r.scrolling || n && 1 !== n.length) && (i = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== n ? n[0].pageX : e.clientX, r.touchObject.curY = void 0 !== n ? n[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), a = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2))), !r.options.verticalSwiping && !r.swiping && 4 < a ? !(r.scrolling = !0) : (!0 === r.options.verticalSwiping && (r.touchObject.swipeLength = a), t = r.swipeDirection(), void 0 !== e.originalEvent && 4 < r.touchObject.swipeLength && (r.swiping = !0, e.preventDefault()), o = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), s = r.touchObject.swipeLength, (r.touchObject.edgeHit = !1) === r.options.infinite && (0 === r.currentSlide && "right" === t || r.currentSlide >= r.getDotCount() && "left" === t) && (s = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = i + s * o : r.swipeLeft = i + s * (r.$list.height() / r.listWidth) * o, !0 === r.options.verticalSwiping && (r.swipeLeft = i + s * o), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))))
        }, a.prototype.swipeStart = function(e) {
            var i, t = this;
            if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return !(t.touchObject = {});
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (i = e.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== i ? i.pageX : e.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== i ? i.pageY : e.clientY, t.dragging = !0
        }, a.prototype.unfilterSlides = a.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, a.prototype.unload = function() {
            var e = this;
            d(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, a.prototype.unslick = function(e) {
            this.$slider.trigger("unslick", [this, e]), this.destroy()
        }, a.prototype.updateArrows = function() {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, a.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, a.prototype.visibility = function() {
            this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
        }, d.fn.slick = function() {
            var e, i, t = this,
                s = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                n = t.length;
            for (e = 0; e < n; e++)
                if ("object" == typeof s || void 0 === s ? t[e].slick = new a(t[e], s) : i = t[e].slick[s].apply(t[e].slick, o), void 0 !== i) return i;
            return t
        }
    }),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(d) {
        "use strict";
        var o, a = window.Slick || {};
        (o = 0, a = function(e, i) {
            var t, s = this;
            s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: d(e),
                appendDots: d(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, i) {
                    return d('<button type="button" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, s.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, d.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = d(e), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, t = d(e).data("slick") || {}, s.options = d.extend({}, s.defaults, i, t), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = d.proxy(s.autoPlay, s), s.autoPlayClear = d.proxy(s.autoPlayClear, s), s.autoPlayIterator = d.proxy(s.autoPlayIterator, s), s.changeSlide = d.proxy(s.changeSlide, s), s.clickHandler = d.proxy(s.clickHandler, s), s.selectHandler = d.proxy(s.selectHandler, s), s.setPosition = d.proxy(s.setPosition, s), s.swipeHandler = d.proxy(s.swipeHandler, s), s.dragHandler = d.proxy(s.dragHandler, s), s.keyHandler = d.proxy(s.keyHandler, s), s.instanceUid = o++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
        }).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, a.prototype.addSlide = a.prototype.slickAdd = function(e, i, t) {
            var s = this;
            if ("boolean" == typeof i) t = i, i = null;
            else if (i < 0 || i >= s.slideCount) return !1;
            s.unload(), "number" == typeof i ? 0 === i && 0 === s.$slides.length ? d(e).appendTo(s.$slideTrack) : t ? d(e).insertBefore(s.$slides.eq(i)) : d(e).insertAfter(s.$slides.eq(i)) : !0 === t ? d(e).prependTo(s.$slideTrack) : d(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, i) {
                d(i).attr("data-slick-index", e)
            }), s.$slidesCache = s.$slides, s.reinit()
        }, a.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: i
                }, e.options.speed)
            }
        }, a.prototype.animateSlide = function(e, i) {
            var t = {},
                s = this;
            s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
                left: e
            }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({
                top: e
            }, s.options.speed, s.options.easing, i) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), d({
                animStart: s.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function(e) {
                    e = Math.ceil(e), !1 === s.options.vertical ? t[s.animType] = "translate(" + e + "px, 0px)" : t[s.animType] = "translate(0px," + e + "px)", s.$slideTrack.css(t)
                },
                complete: function() {
                    i && i.call()
                }
            })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? t[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : t[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(t), i && setTimeout(function() {
                s.disableTransition(), i.call()
            }, s.options.speed))
        }, a.prototype.getNavTarget = function() {
            var e = this.options.asNavFor;
            return e && null !== e && (e = d(e).not(this.$slider)), e
        }, a.prototype.asNavFor = function(i) {
            var e = this.getNavTarget();
            null !== e && "object" == typeof e && e.each(function() {
                var e = d(this).slick("getSlick");
                e.unslicked || e.slideHandler(i, !0)
            })
        }, a.prototype.applyTransition = function(e) {
            var i = this,
                t = {};
            !1 === i.options.fade ? t[i.transitionType] = i.transformType + " " + i.options.speed + "ms " + i.options.cssEase : t[i.transitionType] = "opacity " + i.options.speed + "ms " + i.options.cssEase, !1 === i.options.fade ? i.$slideTrack.css(t) : i.$slides.eq(e).css(t)
        }, a.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, a.prototype.autoPlayClear = function() {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, a.prototype.autoPlayIterator = function() {
            var e = this,
                i = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (i = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(i))
        }, a.prototype.buildArrows = function() {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = d(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = d(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, a.prototype.buildDots = function() {
            var e, i, t = this;
            if (!0 === t.options.dots) {
                for (t.$slider.addClass("slick-dotted"), i = d("<ul />").addClass(t.options.dotsClass), e = 0; e <= t.getDotCount(); e += 1) i.append(d("<li />").append(t.options.customPaging.call(this, t, e)));
                t.$dots = i.appendTo(t.options.appendDots), t.$dots.find("li").first().addClass("slick-active")
            }
        }, a.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
                d(i).attr("data-slick-index", e).data("originalStyling", d(i).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? d('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), d("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, a.prototype.buildRows = function() {
            var e, i, t, s, o, n, a, r = this;
            if (s = document.createDocumentFragment(), n = r.$slider.children(), 1 < r.options.rows) {
                for (a = r.options.slidesPerRow * r.options.rows, o = Math.ceil(n.length / a), e = 0; e < o; e++) {
                    var l = document.createElement("div");
                    for (i = 0; i < r.options.rows; i++) {
                        var d = document.createElement("div");
                        for (t = 0; t < r.options.slidesPerRow; t++) {
                            var c = e * a + (i * r.options.slidesPerRow + t);
                            n.get(c) && d.appendChild(n.get(c))
                        }
                        l.appendChild(d)
                    }
                    s.appendChild(l)
                }
                r.$slider.empty().append(s), r.$slider.children().children().children().css({
                    width: 100 / r.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, a.prototype.checkResponsive = function(e, i) {
            var t, s, o, n = this,
                a = !1,
                r = n.$slider.width(),
                l = window.innerWidth || d(window).width();
            if ("window" === n.respondTo ? o = l : "slider" === n.respondTo ? o = r : "min" === n.respondTo && (o = Math.min(l, r)), n.options.responsive && n.options.responsive.length && null !== n.options.responsive) {
                for (t in s = null, n.breakpoints) n.breakpoints.hasOwnProperty(t) && (!1 === n.originalSettings.mobileFirst ? o < n.breakpoints[t] && (s = n.breakpoints[t]) : o > n.breakpoints[t] && (s = n.breakpoints[t]));
                null !== s ? null !== n.activeBreakpoint ? s === n.activeBreakpoint && !i || (n.activeBreakpoint = s, "unslick" === n.breakpointSettings[s] ? n.unslick(s) : (n.options = d.extend({}, n.originalSettings, n.breakpointSettings[s]), !0 === e && (n.currentSlide = n.options.initialSlide), n.refresh(e)), a = s) : (n.activeBreakpoint = s, "unslick" === n.breakpointSettings[s] ? n.unslick(s) : (n.options = d.extend({}, n.originalSettings, n.breakpointSettings[s]), !0 === e && (n.currentSlide = n.options.initialSlide), n.refresh(e)), a = s) : null !== n.activeBreakpoint && (n.activeBreakpoint = null, n.options = n.originalSettings, !0 === e && (n.currentSlide = n.options.initialSlide), n.refresh(e), a = s), e || !1 === a || n.$slider.trigger("breakpoint", [n, a])
            }
        }, a.prototype.changeSlide = function(e, i) {
            var t, s, o = this,
                n = d(e.currentTarget);
            switch (n.is("a") && e.preventDefault(), n.is("li") || (n = n.closest("li")), t = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
                case "previous":
                    s = 0 == t ? o.options.slidesToScroll : o.options.slidesToShow - t, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - s, !1, i);
                    break;
                case "next":
                    s = 0 == t ? o.options.slidesToScroll : t, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + s, !1, i);
                    break;
                case "index":
                    var a = 0 === e.data.index ? 0 : e.data.index || n.index() * o.options.slidesToScroll;
                    o.slideHandler(o.checkNavigable(a), !1, i), n.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, a.prototype.checkNavigable = function(e) {
            var i, t;
            if (t = 0, e > (i = this.getNavigableIndexes())[i.length - 1]) e = i[i.length - 1];
            else
                for (var s in i) {
                    if (e < i[s]) {
                        e = t;
                        break
                    }
                    t = i[s]
                }
            return e
        }, a.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && (d("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", d.proxy(e.interrupt, e, !0)).off("mouseleave.slick", d.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), d(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().off("click.slick", e.selectHandler), d(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), d(window).off("resize.slick.slick-" + e.instanceUid, e.resize), d("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), d(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
        }, a.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", d.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", d.proxy(e.interrupt, e, !1))
        }, a.prototype.cleanUpRows = function() {
            var e;
            1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
        }, a.prototype.clickHandler = function(e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, a.prototype.destroy = function(e) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), d(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                d(this).attr("style", d(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
        }, a.prototype.disableTransition = function(e) {
            var i = {};
            i[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(i) : this.$slides.eq(e).css(i)
        }, a.prototype.fadeSlide = function(e, i) {
            var t = this;
            !1 === t.cssTransitions ? (t.$slides.eq(e).css({
                zIndex: t.options.zIndex
            }), t.$slides.eq(e).animate({
                opacity: 1
            }, t.options.speed, t.options.easing, i)) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 1,
                zIndex: t.options.zIndex
            }), i && setTimeout(function() {
                t.disableTransition(e), i.call()
            }, t.options.speed))
        }, a.prototype.fadeSlideOut = function(e) {
            var i = this;
            !1 === i.cssTransitions ? i.$slides.eq(e).animate({
                opacity: 0,
                zIndex: i.options.zIndex - 2
            }, i.options.speed, i.options.easing) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 0,
                zIndex: i.options.zIndex - 2
            }))
        }, a.prototype.filterSlides = a.prototype.slickFilter = function(e) {
            var i = this;
            null !== e && (i.$slidesCache = i.$slides, i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.filter(e).appendTo(i.$slideTrack), i.reinit())
        }, a.prototype.focusHandler = function() {
            var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(e) {
                e.stopImmediatePropagation();
                var i = d(this);
                setTimeout(function() {
                    t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
                }, 0)
            })
        }, a.prototype.getCurrent = a.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, a.prototype.getDotCount = function() {
            var e = this,
                i = 0,
                t = 0,
                s = 0;
            if (!0 === e.options.infinite)
                if (e.slideCount <= e.options.slidesToShow) ++s;
                else
                    for (; i < e.slideCount;) ++s, i = t + e.options.slidesToScroll, t += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) s = e.slideCount;
            else if (e.options.asNavFor)
                for (; i < e.slideCount;) ++s, i = t + e.options.slidesToScroll, t += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else s = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return s - 1
        }, a.prototype.getLeft = function(e) {
            var i, t, s, o, n = this,
                a = 0;
            return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, o = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? o = -1.5 : 1 === n.options.slidesToShow && (o = -2)), a = t * n.options.slidesToShow * o), n.slideCount % n.options.slidesToScroll != 0 && e + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (a = e > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (e - n.slideCount)) * n.slideWidth * -1, (n.options.slidesToShow - (e - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, n.slideCount % n.options.slidesToScroll * t * -1))) : e + n.options.slidesToShow > n.slideCount && (n.slideOffset = (e + n.options.slidesToShow - n.slideCount) * n.slideWidth, a = (e + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (a = n.slideOffset = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), i = !1 === n.options.vertical ? e * n.slideWidth * -1 + n.slideOffset : e * t * -1 + a, !0 === n.options.variableWidth && (s = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(e) : n.$slideTrack.children(".slick-slide").eq(e + n.options.slidesToShow), i = !0 === n.options.rtl ? s[0] ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, !0 === n.options.centerMode && (s = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(e) : n.$slideTrack.children(".slick-slide").eq(e + n.options.slidesToShow + 1), i = !0 === n.options.rtl ? s[0] ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, i += (n.$list.width() - s.outerWidth()) / 2)), i
        }, a.prototype.getOption = a.prototype.slickGetOption = function(e) {
            return this.options[e]
        }, a.prototype.getNavigableIndexes = function() {
            var e, i = this,
                t = 0,
                s = 0,
                o = [];
            for (e = !1 === i.options.infinite ? i.slideCount : (t = -1 * i.options.slidesToScroll, s = -1 * i.options.slidesToScroll, 2 * i.slideCount); t < e;) o.push(t), t = s + i.options.slidesToScroll, s += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
            return o
        }, a.prototype.getSlick = function() {
            return this
        }, a.prototype.getSlideCount = function() {
            var t, s, o = this;
            return s = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(e, i) {
                if (i.offsetLeft - s + d(i).outerWidth() / 2 > -1 * o.swipeLeft) return t = i, !1
            }), Math.abs(d(t).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, a.prototype.goTo = a.prototype.slickGoTo = function(e, i) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, i)
        }, a.prototype.init = function(e) {
            var i = this;
            d(i.$slider).hasClass("slick-initialized") || (d(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, a.prototype.initADA = function() {
            var t = this,
                s = Math.ceil(t.slideCount / t.options.slidesToShow),
                o = t.getNavigableIndexes().filter(function(e) {
                    return 0 <= e && e < t.slideCount
                });
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(e) {
                var i = o.indexOf(e);
                d(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + t.instanceUid + e,
                    tabindex: -1
                }), -1 !== i && d(this).attr({
                    "aria-describedby": "slick-slide-control" + t.instanceUid + i
                })
            }), t.$dots.attr("role", "tablist").find("li").each(function(e) {
                var i = o[e];
                d(this).attr({
                    role: "presentation"
                }), d(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + t.instanceUid + e,
                    "aria-controls": "slick-slide" + t.instanceUid + i,
                    "aria-label": e + 1 + " of " + s,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(t.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var e = t.currentSlide, i = e + t.options.slidesToShow; e < i; e++) t.$slides.eq(e).attr("tabindex", 0);
            t.activateADA()
        }, a.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
        }, a.prototype.initDotEvents = function() {
            var e = this;
            !0 === e.options.dots && (d("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && d("li", e.$dots).on("mouseenter.slick", d.proxy(e.interrupt, e, !0)).on("mouseleave.slick", d.proxy(e.interrupt, e, !1))
        }, a.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", d.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", d.proxy(e.interrupt, e, !1)))
        }, a.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), d(document).on(e.visibilityChange, d.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().on("click.slick", e.selectHandler), d(window).on("orientationchange.slick.slick-" + e.instanceUid, d.proxy(e.orientationChange, e)), d(window).on("resize.slick.slick-" + e.instanceUid, d.proxy(e.resize, e)), d("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), d(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), d(e.setPosition)
        }, a.prototype.initUI = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, a.prototype.keyHandler = function(e) {
            var i = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === i.options.accessibility ? i.changeSlide({
                data: {
                    message: !0 === i.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === i.options.accessibility && i.changeSlide({
                data: {
                    message: !0 === i.options.rtl ? "previous" : "next"
                }
            }))
        }, a.prototype.lazyLoad = function() {
            function e(e) {
                d("img[data-lazy]", e).each(function() {
                    var e = d(this),
                        i = d(this).attr("data-lazy"),
                        t = d(this).attr("data-srcset"),
                        s = d(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                        o = document.createElement("img");
                    o.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            t && (e.attr("srcset", t), s && e.attr("sizes", s)), e.attr("src", i).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), n.$slider.trigger("lazyLoaded", [n, e, i])
                        })
                    }, o.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, i])
                    }, o.src = i
                })
            }
            var i, t, s, n = this;
            if (!0 === n.options.centerMode ? s = !0 === n.options.infinite ? (t = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (t = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (t = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(t + n.options.slidesToShow), !0 === n.options.fade && (0 < t && t--, s <= n.slideCount && s++)), i = n.$slider.find(".slick-slide").slice(t, s), "anticipated" === n.options.lazyLoad)
                for (var o = t - 1, a = s, r = n.$slider.find(".slick-slide"), l = 0; l < n.options.slidesToScroll; l++) o < 0 && (o = n.slideCount - 1), i = (i = i.add(r.eq(o))).add(r.eq(a)), o--, a++;
            e(i), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
        }, a.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, a.prototype.next = a.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, a.prototype.orientationChange = function() {
            this.checkResponsive(), this.setPosition()
        }, a.prototype.pause = a.prototype.slickPause = function() {
            this.autoPlayClear(), this.paused = !0
        }, a.prototype.play = a.prototype.slickPlay = function() {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, a.prototype.postSlide = function(e) {
            var i = this;
            i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && d(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
        }, a.prototype.prev = a.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, a.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, a.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var i, t, s, o, n, a = this,
                r = d("img[data-lazy]", a.$slider);
            r.length ? (i = r.first(), t = i.attr("data-lazy"), s = i.attr("data-srcset"), o = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (n = document.createElement("img")).onload = function() {
                s && (i.attr("srcset", s), o && i.attr("sizes", o)), i.attr("src", t).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, t]), a.progressiveLazyLoad()
            }, n.onerror = function() {
                e < 3 ? setTimeout(function() {
                    a.progressiveLazyLoad(e + 1)
                }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, t]), a.progressiveLazyLoad())
            }, n.src = t) : a.$slider.trigger("allImagesLoaded", [a])
        }, a.prototype.refresh = function(e) {
            var i, t, s = this;
            t = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > t && (s.currentSlide = t), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), i = s.currentSlide, s.destroy(!0), d.extend(s, s.initials, {
                currentSlide: i
            }), s.init(), e || s.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, a.prototype.registerBreakpoints = function() {
            var e, i, t, s = this,
                o = s.options.responsive || null;
            if ("array" === d.type(o) && o.length) {
                for (e in s.respondTo = s.options.respondTo || "window", o)
                    if (t = s.breakpoints.length - 1, o.hasOwnProperty(e)) {
                        for (i = o[e].breakpoint; 0 <= t;) s.breakpoints[t] && s.breakpoints[t] === i && s.breakpoints.splice(t, 1), t--;
                        s.breakpoints.push(i), s.breakpointSettings[i] = o[e].settings
                    }
                s.breakpoints.sort(function(e, i) {
                    return s.options.mobileFirst ? e - i : i - e
                })
            }
        }, a.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, a.prototype.resize = function() {
            var e = this;
            d(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = d(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, a.prototype.removeSlide = a.prototype.slickRemove = function(e, i, t) {
            var s = this;
            if (e = "boolean" == typeof e ? !0 === (i = e) ? 0 : s.slideCount - 1 : !0 === i ? --e : e, s.slideCount < 1 || e < 0 || e > s.slideCount - 1) return !1;
            s.unload(), !0 === t ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(e).remove(), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slidesCache = s.$slides, s.reinit()
        }, a.prototype.setCSS = function(e) {
            var i, t, s = this,
                o = {};
            !0 === s.options.rtl && (e = -e), i = "left" == s.positionProp ? Math.ceil(e) + "px" : "0px", t = "top" == s.positionProp ? Math.ceil(e) + "px" : "0px", o[s.positionProp] = e, !1 === s.transformsEnabled || (!(o = {}) === s.cssTransitions ? o[s.animType] = "translate(" + i + ", " + t + ")" : o[s.animType] = "translate3d(" + i + ", " + t + ", 0px)"), s.$slideTrack.css(o)
        }, a.prototype.setDimensions = function() {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var i = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - i)
        }, a.prototype.setFade = function() {
            var t, s = this;
            s.$slides.each(function(e, i) {
                t = s.slideWidth * e * -1, !0 === s.options.rtl ? d(i).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: s.options.zIndex - 2,
                    opacity: 0
                }) : d(i).css({
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: s.options.zIndex - 2,
                    opacity: 0
                })
            }), s.$slides.eq(s.currentSlide).css({
                zIndex: s.options.zIndex - 1,
                opacity: 1
            })
        }, a.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", i)
            }
        }, a.prototype.setOption = a.prototype.slickSetOption = function() {
            var e, i, t, s, o, n = this,
                a = !1;
            if ("object" === d.type(arguments[0]) ? (t = arguments[0], a = arguments[1], o = "multiple") : "string" === d.type(arguments[0]) && (s = arguments[1], a = arguments[2], "responsive" === (t = arguments[0]) && "array" === d.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) n.options[t] = s;
            else if ("multiple" === o) d.each(t, function(e, i) {
                n.options[e] = i
            });
            else if ("responsive" === o)
                for (i in s)
                    if ("array" !== d.type(n.options.responsive)) n.options.responsive = [s[i]];
                    else {
                        for (e = n.options.responsive.length - 1; 0 <= e;) n.options.responsive[e].breakpoint === s[i].breakpoint && n.options.responsive.splice(e, 1), e--;
                        n.options.responsive.push(s[i])
                    }
            a && (n.unload(), n.reinit())
        }, a.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, a.prototype.setProps = function() {
            var e = this,
                i = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === i.WebkitTransition && void 0 === i.MozTransition && void 0 === i.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== i.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (e.animType = !1)), void 0 !== i.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === i.perspectiveProperty && void 0 === i.MozPerspective && (e.animType = !1)), void 0 !== i.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (e.animType = !1)), void 0 !== i.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === i.msTransform && (e.animType = !1)), void 0 !== i.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, a.prototype.setSlideClasses = function(e) {
            var i, t, s, o, n = this;
            if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(e).addClass("slick-current"), !0 === n.options.centerMode) {
                var a = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                i = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i <= e && e <= n.slideCount - 1 - i ? n.$slides.slice(e - i + a, e + i + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = n.options.slidesToShow + e, t.slice(s - i + 1 + a, s + i + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : e === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(e).addClass("slick-center")
            } else 0 <= e && e <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(e, e + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (o = n.slideCount % n.options.slidesToShow, s = !0 === n.options.infinite ? n.options.slidesToShow + e : e, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - e < n.options.slidesToShow ? t.slice(s - (n.options.slidesToShow - o), s + o).addClass("slick-active").attr("aria-hidden", "false") : t.slice(s, s + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
        }, a.prototype.setupInfinite = function() {
            var e, i, t, s = this;
            if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (i = null, s.slideCount > s.options.slidesToShow)) {
                for (t = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - t; e -= 1) i = e - 1, d(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < t + s.slideCount; e += 1) i = e, d(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    d(this).attr("id", "")
                })
            }
        }, a.prototype.interrupt = function(e) {
            e || this.autoPlay(), this.interrupted = e
        }, a.prototype.selectHandler = function(e) {
            var i = d(e.target).is(".slick-slide") ? d(e.target) : d(e.target).parents(".slick-slide"),
                t = parseInt(i.attr("data-slick-index"));
            t = t || 0, this.slideCount <= this.options.slidesToShow ? this.slideHandler(t, !1, !0) : this.slideHandler(t)
        }, a.prototype.slideHandler = function(e, i, t) {
            var s, o, n, a, r, l = null,
                d = this;
            if (i = i || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e))
                if (!1 === i && d.asNavFor(e), s = e, l = d.getLeft(s), a = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? a : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (s = d.currentSlide, !0 !== t ? d.animateSlide(a, function() {
                    d.postSlide(s)
                }) : d.postSlide(s));
                else if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (s = d.currentSlide, !0 !== t ? d.animateSlide(a, function() {
                d.postSlide(s)
            }) : d.postSlide(s));
            else {
                if (d.options.autoplay && clearInterval(d.autoPlayTimer), o = s < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + s : s >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : s - d.slideCount : s, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, o]), n = d.currentSlide, d.currentSlide = o, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (r = (r = d.getNavTarget()).slick("getSlick")).slideCount <= r.options.slidesToShow && r.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== t ? (d.fadeSlideOut(n), d.fadeSlide(o, function() {
                    d.postSlide(o)
                })) : d.postSlide(o), void d.animateHeight();
                !0 !== t ? d.animateSlide(l, function() {
                    d.postSlide(o)
                }) : d.postSlide(o)
            }
        }, a.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, a.prototype.swipeDirection = function() {
            var e, i, t, s, o = this;
            return e = o.touchObject.startX - o.touchObject.curX, i = o.touchObject.startY - o.touchObject.curY, t = Math.atan2(i, e), (s = Math.round(180 * t / Math.PI)) < 0 && (s = 360 - Math.abs(s)), s <= 45 && 0 <= s ? !1 === o.options.rtl ? "left" : "right" : s <= 360 && 315 <= s ? !1 === o.options.rtl ? "left" : "right" : 135 <= s && s <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= s && s <= 135 ? "down" : "up" : "vertical"
        }, a.prototype.swipeEnd = function(e) {
            var i, t, s = this;
            if (s.dragging = !1, s.swiping = !1, s.scrolling) return s.scrolling = !1;
            if (s.interrupted = !1, s.shouldClick = !(10 < s.touchObject.swipeLength), void 0 === s.touchObject.curX) return !1;
            if (!0 === s.touchObject.edgeHit && s.$slider.trigger("edge", [s, s.swipeDirection()]), s.touchObject.swipeLength >= s.touchObject.minSwipe) {
                switch (t = s.swipeDirection()) {
                    case "left":
                    case "down":
                        i = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(), s.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        i = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(), s.currentDirection = 1
                }
                "vertical" != t && (s.slideHandler(i), s.touchObject = {}, s.$slider.trigger("swipe", [s, t]))
            } else s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide), s.touchObject = {})
        }, a.prototype.swipeHandler = function(e) {
            var i = this;
            if (!(!1 === i.options.swipe || "ontouchend" in document && !1 === i.options.swipe || !1 === i.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (i.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, i.touchObject.minSwipe = i.listWidth / i.options.touchThreshold, !0 === i.options.verticalSwiping && (i.touchObject.minSwipe = i.listHeight / i.options.touchThreshold), e.data.action) {
                case "start":
                    i.swipeStart(e);
                    break;
                case "move":
                    i.swipeMove(e);
                    break;
                case "end":
                    i.swipeEnd(e)
            }
        }, a.prototype.swipeMove = function(e) {
            var i, t, s, o, n, a, r = this;
            return n = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!r.dragging || r.scrolling || n && 1 !== n.length) && (i = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== n ? n[0].pageX : e.clientX, r.touchObject.curY = void 0 !== n ? n[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), a = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2))), !r.options.verticalSwiping && !r.swiping && 4 < a ? !(r.scrolling = !0) : (!0 === r.options.verticalSwiping && (r.touchObject.swipeLength = a), t = r.swipeDirection(), void 0 !== e.originalEvent && 4 < r.touchObject.swipeLength && (r.swiping = !0, e.preventDefault()), o = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), s = r.touchObject.swipeLength, (r.touchObject.edgeHit = !1) === r.options.infinite && (0 === r.currentSlide && "right" === t || r.currentSlide >= r.getDotCount() && "left" === t) && (s = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = i + s * o : r.swipeLeft = i + s * (r.$list.height() / r.listWidth) * o, !0 === r.options.verticalSwiping && (r.swipeLeft = i + s * o), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))))
        }, a.prototype.swipeStart = function(e) {
            var i, t = this;
            if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return !(t.touchObject = {});
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (i = e.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== i ? i.pageX : e.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== i ? i.pageY : e.clientY, t.dragging = !0
        }, a.prototype.unfilterSlides = a.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, a.prototype.unload = function() {
            var e = this;
            d(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, a.prototype.unslick = function(e) {
            this.$slider.trigger("unslick", [this, e]), this.destroy()
        }, a.prototype.updateArrows = function() {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, a.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, a.prototype.visibility = function() {
            this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
        }, d.fn.slick = function() {
            var e, i, t = this,
                s = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                n = t.length;
            for (e = 0; e < n; e++)
                if ("object" == typeof s || void 0 === s ? t[e].slick = new a(t[e], s) : i = t[e].slick[s].apply(t[e].slick, o), void 0 !== i) return i;
            return t
        }
    });