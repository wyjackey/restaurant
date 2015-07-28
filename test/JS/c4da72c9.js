!function ()
{
    var a = function ()
    {
        "use strict";
        var a, b = function (a)
        {
            var b, c = "", d = _.escape; Array.prototype.join;
            return c += '<section class="rst-drawer-rating group"><div class="rating-point"><strong class="point">' + d(a.total.rating) + '</strong><span class="comment">' + d(a.total.total) + '人评价</span></div><ul class="rating-diagram">', _.each(a.ratingDetail, function (d) { c += null == (b = a.starTpl(d)) ? "" : b }), c += "</ul></section>"
        }; return a = b
    }(), b = function ()
    {
        "use strict"; var a, b = function (a)
        {
            var b = "", c = _.escape; Array.prototype.join; b += '<li><i class="icon-star s' + c(a.star) + '"></i><span class="rating-stars">'; for (var d = a.star, e = 5 - a.star; d > 0; d--) b += '<i class="glyph-rating-star">&#9733;</i>'; for (; e > 0; e--) b += '<i class="glyph-rating-star off">&#9733;</i>';
            return b += '</span><span class="bar" style="width: ' + c(a.width) + ';"></span>' + c(a.percent) + "%</li>"
        }; return a = b
    }(), c = function () { "use strict"; var a, b = function (a) { var b, c = ""; _.escape; return c += '<section class="rst-drawer-comment comment_wrap"><h4 class="rst-drawer-cheader">用户评价<span class="rst-drawer-checkbox"><input id="comment_type_cb" class="checkbox" type="checkbox" checked/><label for="comment_type_cb">有内容的评价</label></span></h4>' + (null == (b = a.commentContent) ? "" : b) + '<p class="rst-drawer-helper hide c_l_t">加载中…</p></section>' }; return a = b }(), d = function ()
    {
        "use strict"; function a(a, b) { this.values = a, this.init(b) } var b; return a.prototype.init = function ()
        {
            this.setDefaults(),
            this.values.star = Math.round(2 * this.values.rating)
        },
            a.prototype.setDefaults = function ()
            {
                _.defaults(this.values, { id: _.uniqueId("comment"), rating_text: "", rating: 0, image: "", photo: "" })
            }, b = a
    }(), e = function ()
    {
        "use strict"; var a, b = function (a)
        {
            var b = "", c = _.escape; Array.prototype.join;
            return b += '<a id="rst_cmt_close" class="rst-drawer-close">&times;</a><div class="rst-drawer-dish"><h3 class="dish-name" title="' + c(a.name) + '">', b += a.name.length > 12 ? c(a.name.substr(0, 11)) + "&hellip;" : c(a.name), b += '<a class="dish-favor favor_btn ', a.isFavor && (b += "ui_favored"), b += '">&hearts;</a></h3><p class="dish-intro">' + c(a.description) + "</p></div>"
        }; return a = b
    }(), f = function (a)
    {
        "use strict"; function b(a) { this.id = null, this.food = a, this.events = {}, this.init() }
        var c, d = a, e = Eleme.Common.Evt, f = Eleme.Common.PubSub,
            g = { favorBtnSelector: ".favor_btn", openLoginPanelTopic: "openLoginPanel" };
        return $.extend(b.prototype, e), b.prototype.tagName = "header",
            b.prototype.className = "rst-drawer-header eleme_view", b.prototype.type = "food_comment_view", b.prototype.init = function () { this.id = this.type + "_" + Eleme.View.uuid++, this.listenTo(this.food, "favorStateChange.commentFood", $.proxy(this.favorStateHandler, this)), Eleme.View.views[this.id] = this }, b.prototype.$el = function ()
            {
                return $("#" + this.id)
            }, b.prototype.favorFood = function () { ELEME.authed ? this.food.favor() : f.publish(g.openLoginPanelTopic) }, b.prototype.render = function (a)
            {
                return a.begin(this.tagName), a.setId(this.id).setClass(this.className),
                    a.pushOpenTag(), a.push(d($.extend({}, this.food.values))), a.pushCloseTag(), this
            }, b.prototype.favorStateHandler = function ()
            {
                this.food.values.isFavor ? this.$el().find(g.favorBtnSelector).addClass("ui_favored") : this.$el().find(g.favorBtnSelector).removeClass("ui_favored")
            }, b.prototype.destroy = function ()
            {
                this.stopListening(this.food, "favorStateChange.commentFood"), this.$el().off().remove()
            }, c = b
    }(e), g = function ()
    {
        "use strict"; var a, b = function (a) { var b = "", c = _.escape; Array.prototype.join; return b += '<p class="rdcmt-info">' + c(a.username) + " " + c(a.ratedAt) + '<i class="icon-d-star s' + c(a.star) + '"></i></p>', "" !== a.photo && (b += '<img class="rdcmt-img comment_image" src="' + c(ELEME.fussHost + a.photo) + '?w=40&h=40" alt="' + c(a.username) + " " + c(a.star) + '" />'), b += '<p class="rdcmt-text">' + c(a.ratingText) + "</p>" };
        return a = b
    }(), h = function (a)
    {
        "use strict"; function b(a, b)
        {
            this.id = null, this.parentView = null, this.viewing = !1, this.comment = a, this.init(b)
        } var c, d = a, e = { imgSelector: ".comment_image", imgViewingClass: "ui_zoomout" };
        return b.prototype.className = "rst-drawer-citem eleme_view", b.prototype.tagName = "li",
            b.prototype.type = "comment_view", b.prototype.init = function ()
            {
                this.id = this.type + "_" + Eleme.View.uuid++, Eleme.View.views[this.id] = this
            }, b.prototype.$el = function () { return $("#" + this.id) }, b.prototype.render = function (a)
            {
                a.setId(this.id), a.setClass(this.className), a.begin(this.tagName), a.pushOpenTag(),
                a.push(d(this.comment.values)), a.pushCloseTag()
            }, b.prototype.viewImage = function ()
            {
                this.viewing ? (this.$el().find(e.imgSelector).removeClass(e.imgViewingClass), this.viewing = !1,
                this.parentView.trigger("hideImage")) : (this.$el().find(e.imgSelector).addClass(e.imgViewingClass),
                this.viewing = !0, this.parentView.trigger("showImage", this))
            }, b.prototype.destroy = function () { this.$el().remove() }, c = b
    }(g), i = function (a, b, c, d, e, f)
    {
        "use strict"; function g(a)
        {
            this.commentViews = [],
                this.currentFood = null, this.currentFoodView = null, this.$el = null, this.showAnim = null,
            this.isLoading = !1, this.commentsEnd = !1, this.commentType = "content", this.pageCount = 1, this.init(a)
        } function h(a)
        {
            var b = $(a.target), c = b.closest(".eleme_view").attr("id"), d = Eleme.View.views[c];
            return d
        } var i, j = a, k = b, l = c, m = d, n = e, o = f, p = Eleme.Common.Evt, q = Eleme.Common.Http,
            r = Eleme.Common.PubSub, s = Eleme.Common.RenderBuffer, t = { showTopic: "showSlide", commentTypeSelector: "#comment_type_cb", closeTipSelector: "#rst_cmt_close", gallerySelector: ".slide_gallery", galleryCloseBtnSelector: ".gallery_close_btn", galleryImgSelector: ".gallery_img", commentContainerSelector: ".r_d_w", commentContentSelector: ".slide_content_wrap", commentMaskSelector: ".s_r_m", commentListSelector: ".c_l", commentImgSelector: ".comment_image", favorBtnSelector: ".favor_btn", loadTipSelector: ".c_l_t", commentContainerTpl: "", commentListContainerTpl: '<ul class="c_l"></ul>', noCommentTpl: '<p class="rst-drawer-helper">还没有人评价过这道美食</p>', noTextCommentTpl: '<p class="rst-drawer-helper">无有内容的评价</p>', maxFetchComment: 20, exitCommentKey: 27 }; return $.extend(g.prototype, p), g.prototype.init = function () { this.$el = $(t.commentContainerSelector), this.on("showImage", $.proxy(this.showCommentImage, this)), this.on("hideImage", $.proxy(this.hideCommentImage, this)), this.subscribeTopic(), this.bindEvents() }, g.prototype.subscribeTopic = function () { r.subscribe(t.showTopic, function (a) { var b = this; a && (this.parseFoodInfo(a), this.pageCount = 1, this.commentsEnd = !1, this.isLoading = !1, this.commentType = "content", this.fetchComment({ foodId: this.currentFood.values.id, page: this.pageCount }, { commentType: this.commentType }).then(function (a) { b.initRender(a) }), this.show()) }, this) }, g.prototype.bindEvents = function () { var a = this; $(document).on("click.mask", t.commentMaskSelector + "," + t.closeTipSelector, function () { return a.showAnim && (a.showAnim.stop(), a.showAnim = null), a.hide(), !1 }), this.$el.on("change", t.commentTypeSelector, function (b) { var c, d = $(b.target); c = d.is(":checked") ? "content" : "all", ga("send", "event", "restaurant", "toggleCommentType"), a.changeCommentType(c) }).on("click", t.commentImgSelector, function (a) { h(a).viewImage() }).on("click", t.favorBtnSelector, function (a) { h(a).favorFood() }).on("click", t.galleryCloseBtnSelector, function (b) { a._hideCommentImage() }) }, g.prototype.initRender = function (a) { var b = "", c = this.computeRating(a.ratings), d = new s, e = new s; 0 === this.currentFood.values.commentTotal ? b = t.noCommentTpl : ("undefined" != typeof c && this.renderRating(c, d), a.comments = a.comments || [], a.comments.length ? this.renderComments(this.parseComments(a.comments), e) : e.push(t.noTextCommentTpl), d.push(l({ commentContent: e.buffer })), b = d.buffer), this.$el.find(t.commentContentSelector).append(b) }, g.prototype.fetchComment = function (a, b) { var c = this, d = { page: a.page }, e = "http://" + ELEME.mainHost + "/food/" + a.foodId + "/rating"; return "content" === b.commentType ? d.has_text = 1 : "all" === b.commentType && (d.has_text = 0), q.request({ type: "get", url: e, data: d, dataType: "jsonp" }).then(function (a) { return c.isLoading = !1, a.comments.length > 0 && c.pageCount++, a.comments.length < t.maxFetchComment && (c.commentsEnd = !0), a }) }, g.prototype.parseFoodInfo = function (a) { var b = new s; this.currentFood = a, this.currentFoodView = new n(this.currentFood), this.currentFoodView.render(b), this.$el.find(t.commentContentSelector).append(b.buffer) }, g.prototype.computeRating = function (a) { var b, c, d, e, f = [], g = 0, h = 0, i = [], j = {}; for (c in a) "number" == typeof (c - 1) && (i[c - 1] = a[c], g += window.parseInt(c, 10) * a[c], h += a[c]); if (this.currentFood.values.ratingTotal = g, this.currentFood.values.commentTotal = h, 0 !== h) { for (d = (window.parseInt(g / h * 10, 10) / 10).toFixed(1), j = { total: h, rating: d, star: Math.round(2 * d) }, b = i.length; b--;) e = i[b] / h, f.push({ star: b + 1, percent: (100 * e).toFixed(1), width: 80 * e + "px" }); return { total: j, ratingDetail: f } } }, g.prototype.renderRating = function (a, b) { a.starTpl = k, b.push(j(a)) }, g.prototype.parseComments = function (a) { var b, c, d, e, f = []; for (b = 0, c = a.length; c > b; b++) d = new m(a[b]), e = new o(d), e.parentView = this, f.push(e); return this.commentViews = this.commentViews.concat(f), f }, g.prototype.renderComments = function (a, b) { b.setClass("c_l"), b.begin("ul"), b.pushOpenTag(), this._renderComments(a, b), b.pushCloseTag() }, g.prototype._renderComments = function (a, b) { _.each(a, function (a) { a.render(b) }) }, g.prototype.showCommentImage = function (a) { var b = a.comment.values, c = this.$el.find(t.gallerySelector); _.each(this.commentViews, function (b) { b.viewing && b.id !== a.id && b.viewImage() }), c.find(t.galleryImgSelector).attr({ src: ELEME.fussHost + b.photo + "?h=500&w=500", alt: _.escape(b.username) + " " + _.escape(b.ratedAt) }).end().removeClass("ui_hide") }, g.prototype.hideCommentImage = function () { var a = this.$el.find(t.gallerySelector); a.addClass("ui_hide").find(t.galleryImgSelector).attr({ src: "", alt: "" }) }, g.prototype._hideCommentImage = function () { var a = _.find(this.commentViews, function (a) { return a.viewing }); a.viewImage() }, g.prototype.loadMore = function () { if (!this.isLoading && !this.commentsEnd) { var a = this, b = this.$el.find(t.loadTipSelector); b.removeClass("hide"), this.fetchComment({ foodId: this.currentFood.values.id, page: this.pageCount }, { commentType: this.commentType }).then(function (c) { var d = new s; a._renderComments(a.parseComments(c.comments), d), a.$el.find(t.commentListSelector).append(d.buffer), b.addClass("hide") }), this.isLoading = !0 } }, g.prototype.checkBottom = function () { var a = this.$el.find(t.commentContentSelector), b = a.scrollTop(), c = a[0].scrollHeight; c - b < $(window).height() + 100 && this.loadMore() }, g.prototype.show = function () { var a = this; this.showAnim = $(t.commentMaskSelector).fadeIn({ complete: function () { a.showAnim = null } }), $(document).on("keydown.slide", function (b) { b.keyCode === t.exitCommentKey && (a.showAnim && (a.showAnim.stop(), a.showAnim = null), a.hide()) }), $(document.body).addClass("ui_no_scroll"), this.$el.addClass("ui_slide_in").find(t.commentContentSelector).on("scroll.slide", $.proxy(this.checkBottom, this)) }, g.prototype.hide = function () { if (!this.hideAnim) { var a = this; this.hideAnim = $(t.commentMaskSelector).fadeOut({ complete: function () { a._destroyAll(), a.hideAnim = null } }), this.$el.off("scroll.slide").removeClass("ui_slide_in"), this.hideCommentImage(), $(document).off("keydown.slide"), $(document.body).removeClass("ui_no_scroll") } }, g.prototype.changeCommentType = function (a) { if (this.currentFood) { var b = this; this.commentType = a || "all", this.pageCount = 1, this.isLoading = !0, this.commentsEnd = !1, this.fetchComment({ foodId: this.currentFood.values.id, page: this.pageCount }, { commentType: this.commentType }).then(function (a) { var c = new s; "all" === b.commentType || a.comments.length ? b._renderComments(b.parseComments(a.comments), c) : c.push(t.noTextCommentTpl), b.$el.find(t.commentListSelector).empty().append(c.buffer) }) } }, g.prototype._destroyAll = function () { this._destroyComment(), this.currentFood = null, this.currentFoodView && (this.currentFoodView.destroy(), this.currentFoodView = null), this.$el.find(t.commentContentSelector).empty() }, g.prototype._destroyComment = function () { _.each(this.commentViews, function (a) { a.destroy() }), this.commentViews.length = 0 }, i = g
    }(a, b, c, d, f, h), j = function ()
    {
        "use strict"; var a, b = function (a)
        {
            var b = "", c = _.escape;
            Array.prototype.join; if (b += '<h2 class="menu_title rst-menu-title" title="' + c(a.categ) + '">', a.isActivity) { if (b += '<span class="is-activity">' + c(a.categ) + "</span>", a.activityType && "secKill" === a.activityType) b += '<i class="icon-rst-badge half-price" title="周二半价"></i>'; else if (a.activityIcons.length > 0) { var d = a.activityIcons[0]; b += "" !== d.url ? '<img class="icon-rst-badge" src="' + c(ELEME.fussHost + d.url) + '" title="' + c(d.desc) + '" />' : '<i class="icon-rst-badge default-activity" title="促销活动"></i>' } } else b += c(a.categ); return b += "</h2>", a.isActivity ? (b += '<p class="rst-menu-desc" title="' + c(a.description) + '"><span class="activity-desc">' + c(a.activityName), "" !== a.activityDescription && (b += "：" + c(a.activityDescription)), b += "</span>", "" !== a.description && (b += '<span class="divider">&#12288;|&#12288;</span>' + c(a.description)), b += "</p>") : "" !== a.description && (b += '<p class="rst-menu-desc" title="' + c(a.description) + '">' + c(a.description) + "</p>"), b
        }; return a = b
    }(), k = function ()
    {
        "use strict"; function a(a, b) { this.values = a, this.events = {}, this.init(b) }
        var b, c = Eleme.Common.Evt, d = Eleme.Common.PubSub, e = Eleme.Common.Http, f = {
            basketSyncSuccessTopic: "basketSyncSuccess", favorFoodUpdateTopic: "favorFoodUpdate",
            invalidBasketCode: 1002
        }; return $.extend(a.prototype, c), a.prototype.init = function ()
        {
            this.buildSearchIndex(), this.setDefaults(),
            this.values.star = Math.round(2 * this.values.rating), "" !== this.values.img && (this.values.isImgFood = !0)
        }, a.prototype.buildSearchIndex = function ()
        {
            this.values.searchIndex = this.values.name,
                this.values.pinyinName && (this.values.searchIndex += this.values.pinyinName)
        }, a.prototype.setDefaults = function () { _.defaults(this.values, { basket: {}, isFavor: !1 }), this.values.activityImages && (this.values.activityImages = this.values.activityImages.slice(0, 1)), this.values.description = $.trim(this.values.description) }, a.prototype.favor = function () { var a, b, c; this.values.isFavor ? (a = "unfavor", b = { url: "/" + this.values.id + "/unfavor" }, c = this.unFavorHandler) : (a = "favor", b = { url: "/" + this.values.id + "/favor" }, c = this.favorHandler), this.sync(a, b).then($.proxy(c, this)) }, a.prototype.sync = function (a, b) { var c = b.payload || {}, d = { favor: { url: "/food" + b.url, type: "get" }, unfavor: { url: "/food" + b.url, type: "get" }, add: { url: "/cart/add" + b.url, type: "get" } }, f = "//" + ELEME.mainHost + d[a].url, g = d[a].type; if (!f) throw new Error("invalid food sync"); return e.request({ type: g, url: f, data: c, dataType: "jsonp" }) }, a.prototype.addToBasket = function (a) { a = a || {}; var b = { num: 1 }, c = a.basketId || 0, d = a.mainFoodId || 0; a.force && (b.forced = 1), this.values.basket[c] || (this.values.basket[c] = 0), this.sync("add", { url: "/" + c + "/" + d + "/" + this.values.id, payload: b }).then($.proxy(this.addToBasketHandler, this), $.proxy(this.addFoodFailureHandler, this)) }, a.prototype.addFoodFailureHandler = function (a) { a && a.code === f.invalidBasketCode && this.trigger("invalidBasket") }, a.prototype.addToBasketHandler = function (a) { d.publish(f.basketSyncSuccessTopic, a) }, a.prototype.favorHandler = function (a) { a.success && (this.values.isFavor = !0, this.trigger("favorStateChange.commentFood"), this.trigger("favorStateChange.food"), d.publish(f.favorFoodUpdateTopic, this, { favor: !0 })) }, a.prototype.unFavorHandler = function (a) { a.success && (this.values.isFavor = !1, this.trigger("favorStateChange.commentFood"), this.trigger("favorStateChange.food"), d.publish(f.favorFoodUpdateTopic, this, { favor: !1 })) }, b = a
    }(), l = function ()
    {
        "use strict"; function a()
        {
            return $('<div class="modal-wrap modal_wrap"><div class="modal-backdrop modal_backdrop"></div></div>')
        }
        var b, c = {
            modalWrapSelector: ".modal_wrap", modalBackdropSelector: ".modal_backdrop",
            modalContentSelector: ".modal_content"
        }, d = {
            showModal: function (b)
            {
                var c = a(); $(document.body).addClass("ui_no_scroll"),
                    c.append(b).appendTo(this.$el)
            }, hideModal: function ()
            {
                $(document.body).removeClass("ui_no_scroll"),
                    this.$el.find(c.modalWrapSelector).remove()
            }
        }; return b = d
    }(), m = function ()
    {
        "use strict"; var a; void 0 === Date.now && (Date.now = function ()
        {
            return (new Date).valueOf()
        }); var b = b || function ()
        {
            var a = []; return {
                REVISION: "13", getAll: function ()
                {
                    return a
                }, removeAll: function () { a = [] }, add: function (b) { a.push(b) }, remove: function (b)
                {
                    b = a.indexOf(b), -1 !== b && a.splice(b, 1)
                }, update: function (b)
                {
                    if (0 === a.length) return !1; for (var c = 0,
                        b = void 0 !== b ? b : "undefined" != typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now() ;
                        c < a.length;) a[c].update(b) ? c++ : a.splice(c, 1); return !0
                }
            }
        }(); return b.Tween = function (a)
        {
            var c, d = {}, e = {}, f = {}, g = 1e3, h = 0, i = !1, j = !1,
                k = 0, l = null, m = b.Easing.Linear.None, n = b.Interpolation.Linear, o = [], p = null, q = !1,
                r = null, s = null, t = null; for (c in a) d[c] = parseFloat(a[c], 10); this.to = function (a, b)
                {
                    return void 0 !== b && (g = b), e = a, this
                }, this.start = function (c)
                {
                    b.add(this), j = !0, q = !1,
                        l = void 0 !== c ? c : "undefined" != typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(), l += k; for (var g in e)
                    {
                            if (e[g] instanceof Array)
                            {
                                if (0 === e[g].length) continue; e[g] = [a[g]].concat(e[g])
                            } d[g] = a[g], !1 == d[g] instanceof Array && (d[g] *= 1), f[g] = d[g] || 0
                        } return this
                }, this.stop = function ()
                {
                    return j ? (b.remove(this), j = !1, null !== t && t.call(a),
                        this.stopChainedTweens(), this) : this
                }, this.stopChainedTweens = function () { for (var a = 0, b = o.length; b > a; a++) o[a].stop() }, this.delay = function (a) { return k = a, this }, this.repeat = function (a) { return h = a, this }, this.yoyo = function (a) { return i = a, this }, this.easing = function (a) { return m = a, this }, this.interpolation = function (a) { return n = a, this }, this.chain = function () { return o = arguments, this }, this.onStart = function (a) { return p = a, this }, this.onUpdate = function (a) { return r = a, this }, this.onComplete = function (a) { return s = a, this }, this.onStop = function (a) { return t = a, this }, this.update = function (b) { var c; if (l > b) return !0; !1 === q && (null !== p && p.call(a), q = !0); var j = (b - l) / g, j = j > 1 ? 1 : j, t = m(j); for (c in e) { var u = d[c] || 0, v = e[c]; v instanceof Array ? a[c] = n(v, t) : ("string" == typeof v && (v = u + parseFloat(v, 10)), "number" == typeof v && (a[c] = u + (v - u) * t)) } if (null !== r && r.call(a, t), 1 == j) { if (!(h > 0)) { for (null !== s && s.call(a), c = 0, j = o.length; j > c; c++) o[c].start(b); return !1 } isFinite(h) && h--; for (c in f) "string" == typeof e[c] && (f[c] += parseFloat(e[c], 10)), i && (j = f[c], f[c] = e[c], e[c] = j), d[c] = f[c]; l = b + k } return !0 }
        }, b.Easing = {
            Linear: { None: function (a) { return a } }, Quadratic: {
                In: function (a)
                {
                    return a * a
                }, Out: function (a) { return a * (2 - a) }, InOut: function (a)
                {
                    return 1 > (a *= 2) ? .5 * a * a : -.5 * (--a * (a - 2) - 1)
                }
            }, Cubic: {
                In: function (a) { return a * a * a }, Out: function (a)
                {
                    return --a * a * a + 1
                }, InOut: function (a) { return 1 > (a *= 2) ? .5 * a * a * a : .5 * ((a -= 2) * a * a + 2) }
            }, Quartic: {
                In: function (a) { return a * a * a * a }, Out: function (a)
                {
                    return 1 - --a * a * a * a
                }, InOut: function (a) { return 1 > (a *= 2) ? .5 * a * a * a * a : -.5 * ((a -= 2) * a * a * a - 2) }
            }, Quintic: {
                In: function (a) { return a * a * a * a * a }, Out: function (a)
                {
                    return --a * a * a * a * a + 1
                }, InOut: function (a)
                {
                    return 1 > (a *= 2) ? .5 * a * a * a * a * a : .5 * ((a -= 2) * a * a * a * a + 2)
                }
            }, Sinusoidal: {
                In: function (a) { return 1 - Math.cos(a * Math.PI / 2) }, Out: function (a)
                {
                    return Math.sin(a * Math.PI / 2)
                }, InOut: function (a) { return .5 * (1 - Math.cos(Math.PI * a)) }
            }, Exponential: {
                In: function (a) { return 0 === a ? 0 : Math.pow(1024, a - 1) }, Out: function (a)
                {
                    return 1 === a ? 1 : 1 - Math.pow(2, -10 * a)
                }, InOut: function (a)
                {
                    return 0 === a ? 0 : 1 === a ? 1 : 1 > (a *= 2) ? .5 * Math.pow(1024, a - 1) : .5 * (-Math.pow(2, -10 * (a - 1)) + 2)
                }
            }, Circular: {
                In: function (a) { return 1 - Math.sqrt(1 - a * a) }, Out: function (a)
                {
                    return Math.sqrt(1 - --a * a)
                }, InOut: function (a)
                {
                    return 1 > (a *= 2) ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                }
            }, Elastic: {
                In: function (a)
                {
                    var b, c = .1;
                    return 0 === a ? 0 : 1 === a ? 1 : (!c || 1 > c ? (c = 1, b = .1) : b = .4 * Math.asin(1 / c) / (2 * Math.PI), -(c * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a - b) * Math.PI / .4)))
                }, Out: function (a)
                {
                    var b, c = .1;
                    return 0 === a ? 0 : 1 === a ? 1 : (!c || 1 > c ? (c = 1, b = .1) : b = .4 * Math.asin(1 / c) / (2 * Math.PI), c * Math.pow(2, -10 * a) * Math.sin(2 * (a - b) * Math.PI / .4) + 1)
                }, InOut: function (a)
                {
                    var b, c = .1;
                    return 0 === a ? 0 : 1 === a ? 1 : (!c || 1 > c ? (c = 1, b = .1) : b = .4 * Math.asin(1 / c) / (2 * Math.PI), 1 > (a *= 2) ? -.5 * c * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a - b) * Math.PI / .4) : .5 * c * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (a - b) * Math.PI / .4) + 1)
                }
            }, Back: {
                In: function (a) { return a * a * (2.70158 * a - 1.70158) }, Out: function (a)
                {
                    return --a * a * (2.70158 * a + 1.70158) + 1
                }, InOut: function (a)
                {
                    return 1 > (a *= 2) ? .5 * a * a * (3.5949095 * a - 2.5949095) : .5 * ((a -= 2) * a * (3.5949095 * a + 2.5949095) + 2)
                }
            }, Bounce: {
                In: function (a) { return 1 - b.Easing.Bounce.Out(1 - a) }, Out: function (a)
                {
                    return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                }, InOut: function (a)
                {
                    return .5 > a ? .5 * b.Easing.Bounce.In(2 * a) : .5 * b.Easing.Bounce.Out(2 * a - 1) + .5
                }
            }
        }, b.Interpolation = {
            Linear: function (a, c)
            {
                var d = a.length - 1, e = d * c,
                    f = Math.floor(e), g = b.Interpolation.Utils.Linear;
                return 0 > c ? g(a[0], a[1], e) : c > 1 ? g(a[d], a[d - 1], d - e) : g(a[f], a[f + 1 > d ? d : f + 1],
                    e - f)
            }, Bezier: function (a, c)
            {
                var d, e = 0, f = a.length - 1,
                    g = Math.pow, h = b.Interpolation.Utils.Bernstein;
                for (d = 0; f >= d; d++) e += g(1 - c, f - d) * g(c, d) * a[d] * h(f, d);
                return e
            }, CatmullRom: function (a, c)
            {
                var d = a.length - 1, e = d * c, f = Math.floor(e), g = b.Interpolation.Utils.CatmullRom;
                return a[0] === a[d] ? (0 > c && (f = Math.floor(e = d * (1 + c))), g(a[(f - 1 + d) % d], a[f],
                    a[(f + 1) % d], a[(f + 2) % d], e - f)) : 0 > c ? a[0] - (g(a[0],
                    a[0], a[1], a[1], -e) - a[0]) : c > 1 ? a[d] - (g(a[d], a[d], a[d - 1],
                    a[d - 1], e - d) - a[d]) : g(a[f ? f - 1 : 0], a[f], a[f + 1 > d ? d : f + 1],
                    a[f + 2 > d ? d : f + 2], e - f)
            }, Utils: {
                Linear: function (a, b, c) { return (b - a) * c + a }, Bernstein: function (a, c)
                {
                    var d = b.Interpolation.Utils.Factorial; return d(a) / d(c) / d(a - c)
                }, Factorial: function ()
                {
                    var a = [1]; return function (b)
                    {
                        var c, d = 1; if (a[b])
                            return a[b]; for (c = b; c > 1; c--) d *= c; return a[b] = d
                    }
                }(), CatmullRom: function (a, b, c, d, e)
                {
                    var a = .5 * (c - a), d = .5 * (d - b),
                        f = e * e; return (2 * b - 2 * c + a + d) * e * f + (-3 * b + 3 * c - 2 * a - d) * f + a * e + b
                }
            }
        }, a = b
    }(), n = function ()
    {
        "use strict"; var a, b = function (a)
        {
            for (var b = "", c = _.escape, d = (Array.prototype.join, a.mainFoods.length) ;
                d--;) b += '<span class="dish single_main_food" data-foodid="' + c(a.mainFoods[d].id) + '">' + c(a.mainFoods[d].name) + "</span>";
            return b
        }; return a = b
    }(), o = function ()
    {
        "use strict"; var a, b = function (a)
        {
            var b, c = "", d = _.escape; Array.prototype.join;
            return a.isImgFood ? (c += '<a class="dish-favor favor_btn ', a.isFavor && (c += "ui_favored"),
                c += '" title="收藏">&hearts;</a><a class="rst-d-img-wrapper food_img"><img class="rst-d-img" src="' + d(a.img) + '" alt="' + d(a.name) + '" />',
                a.activityImages && a.activityImages.length > 0 && "" !== a.activityImages[0] && (c += '<img class="activity-badge" src="' + d(ELEME.fussHost + a.activityImages[0]) + '" alt="data.activityIcons[0].desc" />'),
                "" !== a.description && (c += '<div class="rst-d-desc" title="' + d(a.description) + '">' + d(a.description) + "</div>"),
                c += '</a><div class="rst-d-img-dish"><a class="rst-d-name food_name" title="' + d(a.name) + '">' + d(a.name) + '</a><br><span class="rst-d-rating food_rating cmt_block"><i class="icon-d-star s' + d(a.star) + ' i_s"></i>',
                a.ratingCount > 0 && (c += "(" + (null == (b = a.ratingCount) ? "" : b) + ")"), c += "</span>",
                (a.attributes.length > 0 || a.sales > 0) && (c += '<br><span class="rst-d-sales cmt_block">',
                _.each(a.attributes, function (a) { c += '<i class="icon-rst-badge ' + d(a) + '"></i>' }),
                a.sales > 0 && (c += "月售" + (null == (b = a.sales) ? "" : b) + "份"), c += "</span>"),
                c += '<div class="rst-d-action r_d_a">',
                "rest" === ELEME.restaurantStatus ? c += '<div class="unavailable symbol-rmb">' + d(a.price) + '<br><span class="status">餐厅休息</span></div>' : 0 === a.stock ? c += '<div class="unavailable symbol-rmb">' + d(a.price) + '<br><span class="status">已售完</span></div>' : (c += '<div class="rst-d-act narrow act_btns"><a class="rst-d-act-add add_btn" title="点击饿一份" role="button"><span class="rst-d-act-glyph">&#xe017;</span><span class="price symbol-rmb">' + d(a.price) + '</span></a><a class="rst-d-act-toggle caret add_main_btn" role="button"></a></div>', (a.mustPayOnline || a.mustNewUser || a.originPrice) && (c += '<div class="rst-d-paytip">', a.originPrice && (c += '原价<span class="original-price symbol-rmb">' + d(a.originPrice) + "</span><br>"), a.mustPayOnline ? c += "限在线支付" : a.mustNewUser && (c += "限新用户"), c += "</div>")),
                c += "</div>", "rest" !== ELEME.restaurantStauts && a.stock > 0 && (c += '<div class="rst-d-note"><span class="rst-d-ordered dish_state ',
                a.inBasket || (c += "hide"), c += '">' + (null == (b = a.inBasket) ? "" : b) + "</span></div>"), c += "</div>") : (c += '<div class="rst-d-info"><p class="rst-d-main"><a class="dish-favor-flat favor_btn ',
                a.isFavor && (c += "ui_favored"), c += '" title="收藏">&hearts;</a><a class="rst-d-name food_name" title="' + d(a.name) + '">', c += a.name.length > 20 ? d(a.name.substr(0, 19)) + "&hellip;" : d(a.name), c += "</a>", a.activityImages && a.activityImages.length > 0 && "" !== a.activityImages[0] && (c += '<img class="activity-badge" src="' + d(ELEME.fussHost + a.activityImages[0]) + '" alt="data.activityIcons[0].desc" />'), _.each(a.attributes, function (a) { c += '<i class="icon-rst-badge ' + d(a) + '"></i>' }), c += "</p>", "" !== a.description && (c += '<p class="rst-d-desc" title="' + d(a.description) + '">' + d(a.description) + "</p>"), c += '</div><div class="rst-d-note">', "rest" !== ELEME.restaurantStauts && a.stock > 0 && (c += '<span class="rst-d-ordered dish_state ', a.inBasket || (c += "hide"), c += '">' + (null == (b = a.inBasket) ? "" : b) + "</span>"), c += '</div><div class="rst-d-action r_d_a">', "rest" === ELEME.restaurantStatus ? c += '<div class="unavailable symbol-rmb">' + d(a.price) + '<br><span class="status">餐厅休息</span></div>' : 0 === a.stock ? c += '<div class="unavailable symbol-rmb">' + d(a.price) + '<br><span class="status">已售完</span></div>' : (a.originPrice && (c += '<div class="rst-d-paytip oprice">原价<span class="original-price symbol-rmb">' + d(a.originPrice) + "</span></div>"), c += '<div class="rst-d-act act_btns"><a class="rst-d-act-add add_btn" title="点击饿一份" role="button"><span class="rst-d-act-glyph">&#xe017;</span><span class="price symbol-rmb">' + d(a.price) + '</span></a><a class="rst-d-act-toggle caret add_main_btn" role="button"></a></div>', a.mustPayOnline ? c += '<div class="rst-d-paytip">限在线支付</div>' : a.mustNewUser && (c += '<div class="rst-d-paytip">限新用户</div>')), c += '</div><div class="rst-d-status cmt_block"><span class="rst-d-rating food_rating"><i class="icon-d-star s' + d(a.star) + ' i_s"></i>', a.ratingCount > 0 && (c += "(" + (null == (b = a.ratingCount) ? "" : b) + ")"), c += "</span>", a.sales > 0 && (c += '<br><span class="rst-d-sales">月售' + (null == (b = a.sales) ? "" : b) + "份</span>"), c += "</div>"), c
        }; return a = b
    }(), p = function ()
    {
        "use strict"; var a, b = function (a)
        {
            var b = "", c = _.escape; return b += '<div id="clear_cart_panel" class="rst-hint-modal clear-cart"><p>篮子中已有「' + c(a.restaurantName) + "」的美食，清空篮子后才能加入「" + c(a.foodName) + '」</p><p class="btn-wrapper"><a id="cancel_clear_cart" class="ui-btn">再等等</a><a id="clear_cart" class="ui-btn btn-confirm">清空并添加</a></p></div>'
        }; return a = b
    }(), q = function (a, b, c, d, e)
    {
        "use strict"; function f(a)
        {
            a = a || {},
                this.id = null, this.food = a.food, this.events = {},
                this.buffer = null, this.init(a)
        } function g(a)
        {
            a = a || {},
        		this.content = a.content || [], this.childViews = [],
        		this.buffer = null, this.init()
        } function h(a) { h._super.call(this, a) } function i(a)
        {
            i._super.call(this, a)
        }
        var j = {}, k = a, l = b, m = c, n = d, o = e,
        p = Eleme.Common.Evt, q = Eleme.Common.Util, r = Eleme.Common.PubSub,
        s = {
            addMainBtnSelector: ".add_main_btn", mainFoodSelector: ".main-food",
            bookBtnSelector: ".favor_btn", menuSelector: ".main_food_panel",
            btnsSelector: ".act_btns", cartTipSelector: "#clear_cart_panel",
            basketStateSelector: ".dish_state",
            addFoodTopic: "addFoodToBasket", showMainFoodTopic: "showMainFood",
            showCommentTopic: "showSlide", getBasketInfoTopic: "getBasketInfo",
            addAnimEndTopic: "addAnimEnd", basketSyncSuccessTopic: "basketSyncSuccess",
            mainFoodMenuTpl: '<div class="rst-d-act-dropdown main_food_panel"><span class="helper">添加到以下菜品中</span></div>',
            elemClassName: "rst-dish-item", imgElemClassName: "rst-dish-img-item", bookStateClass: "ui_favored"
        };
        return $.extend(f.prototype, p, k), f.prototype.type = "food_view", f.prototype.tagName = "li",
        f.prototype.init = function ()
        {
            this.id = this.type + "_" + this.food.values.id, this.listenTo(this.food, "basketStateChange", this.basketStateHandler, this),
            this.listenTo(this.food, "favorStateChange.food", this.favorStateHandler, this),
            this.listenTo(this.food, "invalidBasket", this.showClearCartPanel, this),
            Eleme.View.views[this.id] = this
        }, f.prototype.$el = function ()
        {
            return $("#" + this.id)
        }, f.prototype.handleAdd = function (a)
        {
            var b = r.publish(s.getBasketInfoTopic); return b.restaurantId && b.restaurantId !== ELEME.restaurantId ? (this.showClearCartPanel(b),
            void a.stopPropagation()) : void this.addToBasket()
        }, f.prototype.handleAddMain = function (a)
        {
            var b, c; return b = r.publish(s.getBasketInfoTopic, ELEME.restaurantId),
             b.restaurantId && b.restaurantId !== ELEME.restaurantId ? (this.showClearCartPanel(b),
              void a.stopPropagation()) : (c = this.$el().find(s.menuSelector),
              c.length ? void (c.parent().hasClass("ui_open") && (c.parent().removeClass("ui_open"),
              c.remove())) : (this.clearMenu(), r.publish(s.showMainFoodTopic, $.proxy(this.showMainFoodPanel, this)),
              void a.stopPropagation()))
        }, f.prototype.showMainFoodPanel = function (a, b)
        {
            var c = $(s.mainFoodMenuTpl); c.append(m({ mainFoods: b })),
            this.$el().find(s.addMainBtnSelector).parent().append(c).addClass("ui_open")
        },
                             f.prototype.addToMainFood = function (a)
                             {
                                 this.addToBasket({ mainFoodId: a }),
                                 this.$el().find(s.mainFoodSelector).hide()
                             }, f.prototype.render = function (a)
                             {
                                 var b = this; Eleme.Common.optimizeImgUrl(ELEME.fussHost + this.makeImgSrc(), 240, 180).then(function (c)
                                 {
                                     var d = b.food.values; d.isImgFood && (d.img = c), b.buffer = a, a.begin(b.tagName),
                                     b.addPropertyToBuffer(a), a.pushOpenTag(), a.push(n(d)), a.pushCloseTag()
                                 })
                             },
                                     f.prototype.addPropertyToBuffer = function (a)
                                     {
                                         var b = this.food.values.isImgFood ? s.imgElemClassName : s.elemClassName,
                                         c = "";
                                         b === this.food.values.originPrice && (this.food.values.mustPayOnline || this.food.values.mustNewUser) && (c = " patch-height"),
                                         a.setId(this.id), a.setClass(b + c + " eleme_view")
                                     }, f.prototype.destroy = function ()
                                     {
                                         this.stopListening(this.food), this.$el().remove()
                                     }, f.prototype.makeImgSrc = function ()
                                     {
                                         return this.food.values.originImg || (this.food.values.originImg = this.food.values.img), this.food.values.originImg
                                     },
                                                f.prototype.showComment = function ()
                                                {
                                                    r.publish(s.showCommentTopic, this.food)
                                                }, f.prototype.favorFood = function ()
                                                {
                                                    this.food.favor()
                                                }, f.prototype.addToBasket = function (a)
                                                {
                                                    var b = this.$el().find(s.basketStateSelector);
                                                    return b.html("").removeClass("hide").addClass("loading"), r.publish(s.addFoodTopic,
                                                        $.proxy(this.food.addToBasket, this.food), a), this.addFoodAnim(), r.publish("addFoodToBasketAnim", this), this
                                                },
                                                                f.prototype.showClearCartPanel = function (a)
                                                                {
                                                                    a = a || {}; var b = this.$el().find(s.btnsSelector), c = this.$el().find(s.basketStateSelector),
                                                                    d = b.find(s.cartTipSelector);
                                                                    c.addClass("hide").removeClass("loading"), d.length || ($(document).find(s.cartTipSelector).remove(),
                                                                     a.foodName = this.food.values.name, a.restaurantName = a.restaurantName || "其他餐厅", b.append(o(a)))
                                                                },
                                                                     f.prototype.favorStateHandler = function ()
                                                                     {
                                                                         var a = this.$el().find(s.bookBtnSelector);
                                                                         this.food.values.isFavor ? a.addClass(s.bookStateClass) : a.removeClass(s.bookStateClass)
                                                                     },
                                                                        f.prototype.basketStateHandler = function ()
                                                                        {
                                                                            var a = this.$el().find(s.basketStateSelector); a.removeClass("loading").html(this.food.values.inBasket),
                                                                            0 === this.food.values.inBasket ? a.addClass("hide") : a.removeClass("hide")
                                                                        }, f.prototype.scrollToView = function (a)
                                                                        {
                                                                            var b = this.$el().offset().top; $("html, body").animate({ scrollTop: b - 42 + "px" }, { complete: a })
                                                                        },
                                                                            f.prototype.clearMenu = function ()
                                                                            {
                                                                                var a = $(s.menuSelector), b = a.parent(s.btnsSelector);
                                                                                b.hasClass("ui_open") && (b.removeClass("ui_open"), a.remove())
                                                                            },
                                                                                f.prototype.clearCartTipMenu = function ()
                                                                                {
                                                                                    this.$el().find(s.cartTipSelector).remove()
                                                                                }, f.prototype.addFoodAnim = function ()
                                                                                {
                                                                                    function a()
                                                                                    {
                                                                                        new l.Tween({ x: 0, y: 0, old: { x: 0, y: 0 } }).to({
                                                                                            x: [.6 * c.x, c.x],
                                                                                            y: [Math.min(-150, c.y - 100), c.y]
                                                                                        }, 700).interpolation(l.Interpolation.Bezier).easing(l.Easing.Quadratic.Out).onUpdate(function ()
                                                                                        {
                                                                                            i.css({ left: this.x + d.left + "px", top: this.y + d.top + "px" }),
                                                                                            this.old.x = this.x, this.old.y = this.y
                                                                                        }).onComplete(function ()
                                                                                        {
                                                                                            i.remove(), r.publish(s.addAnimEndTopic)
                                                                                        }).start()
                                                                                    } function b()
                                                                                    {
                                                                                        o(b), l.update()
                                                                                    } var c, d, e, f = $(window).scrollTop(), g = $(".current_basket_tile"),
                                                                                        h = g.offset(), i = $('<span id="anim_price_tip" class="rst-animate-tip">' + this.food.values.price + "</span>"),
                                                                                        j = this.$el().find(".act_btns"), k = j.offset(), m = j.width(), n = j.height();
                                                                                    r.subscribeOnce(s.basketSyncSuccessTopic, function ()
                                                                                    {
                                                                                        i.appendTo(document.body), d = {
                                                                                            left: k.left + m / 2 - i.outerWidth(!0) / 2,
                                                                                            top: k.top - f + n / 2 - i.outerHeight(!0) / 2
                                                                                        }, e = { left: h.left + g.width() / 2 - i.outerWidth(!0) / 2, top: h.top - f },
                                                                                        c = { x: e.left - d.left, y: e.top - d.top }, a(), b()
                                                                                    }, this);
                                                                                    var o = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (a) { window.setTimeout(a, 16) };
                                                                                    window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || function (a) { window.clearTimeout(a) }
                                                                                }, g.prototype.childViewClass = f, g.prototype.className = "", g.prototype.type = "plain_collection_view",
            g.prototype.init = function () { this.id = this.type + "_" + Eleme.View.uuid++, this.createChildView() },
            g.prototype.$el = function () { return $("#" + this.id) }, g.prototype.createChildView = function ()
            {

                var a, b, c; for (a = 0, b = this.content.length; b > a; a++) c = new this.childViewClass({ food: this.content[a] }), this.childViews.push(c); this.originChildViews = this.childViews
            }, g.prototype.render = function (a)
            {
                this.content.length > 0 && (this.buffer = a, a.begin("ul"),
                a.setId(this.id), a.setClass(this.className), a.pushOpenTag(),
                this._renderFood(this.childViews, a), a.pushCloseTag())
            }, g.prototype._renderFood = function (a, b)
            {
                var c, d; for (c = 0, d = a.length; d > c; c++) a[c].render(b)
            }, g.prototype.clearBuffer = function ()
            {
                this.buffer = null;
                for (var a = this.childViews.length; a--;) this.childViews[a].buffer = null
            },
            g.prototype.findByFoodId = function (a)
            {
                for (var b = this.childViews.length; b--;)
                    if (this.childViews[b].food.values.id === a)
                        return this.childViews[b]
            }, g.prototype._destroyFoodView = function ()
            {
                for (var a; a = this.childViews.pop() ;) delete Eleme.View.views[a.id], a.destroy()
            }, g.prototype.scrollFoodToView = function (a, b)
            {
                for (var c = this.childViews.length; c--;) if (a === this.childViews[c].food.values.id)
                {
                    this.childViews[c].scrollToView(b); break
                }
            }, g.prototype.sort = function (a, b)
            {
                var c; "default" === a ? this.childViews = this.originChildViews : this.childViews.length > 0 && (c = "desc" === b ? function (b)
                {
                    return -b.food.values[a]
                } : function (b)
                {
                    return b.food.values[a]
                }, this.childViews = _.sortBy(this.childViews, c))
            }, q.inherit(h, g), h.prototype.className = "rst-menu-img-list",
            q.inherit(i, g), i.prototype.className = "rst-menu-list", j.FoodView = f,
            j.FoodCollectionView = g, j.PlainFoodCollectionView = i, j.ImgFoodCollectionView = h, j
    }(l, m, n, o, p), r = function (a, b, c)
    {
        "use strict"; function d(a, b)
        {
            this.id = null, this.cate = a, this.childViews = [], this.buffer = null, this.active = !1, this.init(b)
        } var e, f = a, g = b, h = c.ImgFoodCollectionView, i = c.PlainFoodCollectionView,
            j = $("html, body"); return d.prototype.type = "cate_view",
                d.prototype.tagName = "section", d.prototype.className = "",
                d.prototype.init = function (a)
                {
                    a = a || {},
                        this.id = this.type + "_" + this.cate.categId,
                    this.cate.description = $.trim(this.cate.description),
                    this.cate.isActivity && this.cate.activityDescription && (this.cate.activityDescription = $.trim(this.cate.activityDescription)),
                    this.createFoodModel(), a.active && !this.active && this.activate(),
                    Eleme.View.views[this.id] = this
                }, d.prototype.$el = function ()
                {
                    return $("#" + this.id)
                }, d.prototype.activate = function ()
                {
                    this.makeFoodView(), this.active = !0
                }, d.prototype.createFoodModel = function ()
                {

                    var a, b, c, d, e = [], f = [], h = this.cate.foods.with_image || [],
                        i = this.cate.foods.without_image || [];
                    for (a = 0, c = h.length;
                        c > a; a++) h[a].activityImages = this.cate.activityImages || [],
                            h[a].mustPayOnline = this.cate.mustPayOnline,
                            h[a].mustNewUser = this.cate.mustNewUser, e.push(new g(h[a]));
                    for (b = 0, d = i.length; d > b; b++) i[b].activityImages = this.cate.activityImages || [],
                        i[b].mustPayOnline = this.cate.mustPayOnline, i[b].mustNewUser = this.cate.mustNewUser,
                        f.push(new g(i[b])); this.cate.foods.img = e, this.cate.foods.plain = f
                }, d.prototype.makeFoodView = function ()
                {
                    var a, b; a = new h({
                        content: this.cate.foods.img
                    }), b = new i({ content: this.cate.foods.plain }), this.childViews.push(a, b)
                }, d.prototype.render = function (a)
                {
                    return this.active ? (this.buffer = a, a.begin(this.tagName),
                        this.beforeRender(a), a.push($.trim(f(this.cate))), this.renderFood(a),
                        this.afterRender(a), this) : void 0
                }, d.prototype.beforeRender = function (a)
                {
                    this.addPropertyToBuffer(a), a.pushOpenTag()
                }, d.prototype.afterRender = function (a)
                {
                    a.pushCloseTag()
                }, d.prototype.addPropertyToBuffer = function (a)
                {
                    a.setId(this.id).setClass(this.className)
                }, d.prototype.renderFood = function (a)
                {
                    var b, c;
                    for (b = 0, c = this.childViews.length; c > b; b++) this.childViews[b].render(a)
                }, d.prototype.clearBuffer = function ()
                {
                    var a; for (this.buffer = null,
                        a = this.childViews.length; a--;) this.childViews[a].clearBuffer()
                }, d.prototype.scrollToView = function (a)
                {
                    var b = this.$el().offset().top; j.animate({ scrollTop: b + "px" }, { complete: a })
                }, d.prototype.scrollFoodToView = function (a, b)
                {
                    var c; for (c = this.childViews.length; c--;) this.childViews[c].scrollFoodToView(a, b)
                }, d.prototype.checkFoodById = function (a)
                {
                    var b = function (b) { return b.values.id === a }; return _.find(this.cate.foods.plain, b) || _.find(this.cate.foods.img, b)
                }, d.prototype.sort = function (a, b)
                {
                    var c;
                    for (c = this.childViews.length; c--;) this.childViews[c].sort(a, b)
                }, d.prototype.caculateHeight = function ()
                {
                    return 272 * (this.cate.foods.img.length % 3) + 60 * this.cate.foods.plain + 42
                }, e = d
    }(j, k, q), s = function ()
    {
        "use strict"; var a, b = function (a)
        {
            var b = "", c = _.escape;
            return b += '<div class="rst-hint-modal guest-fav modal_content login_tip"><p>' + c(a.hint) + '</p><p class="btn-wrapper"><a class="ui-btn cancel_login">稍后再说</a><a class="ui-btn btn-confirm" href="' + c(ELEME.formerBaseUrl) + '/login">登录</a></p></div>'
        }; return a = b
    }(), t = function (a, b)
    {
        "use strict"; function c(a)
        {
            this.$el = null, this.buffer = null, this.cates = [],
            this.cateViews = [], this.lastFoodsId = [], this.renderedIndex = 0,
            this.renderComplete = !1, this.init(a)
        } function d(a)
        {
            var b = $(a.target), c = b.closest(".eleme_view").attr("id"),
                d = Eleme.View.views[c]; return d
        } var e, f = a, g = Eleme.Common.PubSub,
            h = Eleme.Common.RenderBuffer,
            i = {
                rstMenus: "#rst_menus", cateName: ".cate_name", menuToolbar: "#menu_toolbar", toolbarText: "#toolbar_text",
                toolbarToggle: "#toolbar_toggle", toolbarDropdown: "#toolbar_dropdown",
                sortBtn: ".sort_btn", cateView: "#cate_view", menuTitle: ".menu_title",
                fixNav: "#toolbar_toggle", favorBtn: ".favor_btn", foodName: ".food_name",
                foodRating: ".food_rating", foodImg: ".food_img", addBtn: ".add_btn",
                addMainBtn: ".add_main_btn", clearCart: "#clear_cart", cancelClearCartSelector: "#cancel_clear_cart",
                menuSelector: ".main_food_panel", singleMainFood: ".single_main_food"
            },
        j = {
            menuFilterTopic: "filterFood", foodScrollTopic: "foodScroll",
            getBasketInfoTopic: "getBasketInfo", restaurantInfoDoneTopic: "restaurantInfoDone",
            basketSyncSuccessTopic: "basketSyncSuccess", favorFoodInitTopic: "favorFoodInit",
            basketInitTopic: "basketInit", openLoginPanelTopic: "openLoginPanel",
            cartTipSelector: "#clear_cart_panel"
        }, k = $(window), l = $(document), m = k.height(), n = l.height();
        return c.prototype.init = function ()
        {
            var a = this; this.$el = $(i.rstMenus), this.bindEvents(), this.subscribeTopic(),
            Eleme.Component.scrollspy("moreCate", {
                min: n - m - 500, onEnter: function (b)
                {

                    var c, d, e = 0; a.renderComplete || (c = a.getRenderRange(), d = a.cateViews.slice(c.min, c.max),
                    a.render(c), a.initCateScroollSpy(d), n = l.height(), b.min = n + e - m - 500)
                }
            })
        }, c.prototype.subscribeTopic = function ()
        {
            g.subscribe(j.foodScrollTopic, this.scrollFoodById, this),
            g.subscribe(j.basketSyncSuccessTopic, this.tagFoodView, this), g.subscribe(j.basketInitTopic,
                this.tagFoodView, this), g.subscribe(j.menuFilterTopic, function (a, b)
                {
                    if ("" === a.keyword) return void b.call(null, { food: [] });
                    for (var c, d, e, f = this.cates.length, g = [],
                        h = a.keyword; f--;) for (d = this.cates[f].foods, e = d.img.concat(d.plain),
                            c = e.length; c--;)
                            e[c].values.searchIndex && e[c].values.searchIndex.indexOf(h) > -1 && g.push(e[c].values);
                    g.length > 0 ? ga("send", "event", "topbarSearch", "hasResult", "inRestaurant",
                        g.length) : ga("send", "event", "topbarSearch", "noResult", "inRestaurant", 0),
                    b.call(null, { foods: g })
                }, this), g.subscribe(j.restaurantInfoDoneTopic, function (a)
                {
                    var b, c, d, e = [], f = a.favorFoodIds;
                    if (0 === f.length)
                        return void g.publish(j.favorFoodInitTopic, e);
                    for (b = f.length; b--;) for (c = this.cateViews.length; c--;)
                        if (d = this.cateViews[c].checkFoodById(f[b]))
                        {
                            d.values.isFavor = !0, d.trigger("favorStateChange.food"), e.push(d); break
                        } g.publish(j.favorFoodInitTopic, e)
                }, this)
        }, c.prototype.bindEvents = function ()
        {
            function a()
            {
                var a = $(i.menuSelector), b = a.parent(".rst-d-act");
                b.hasClass("ui_open") && (b.removeClass("ui_open"), a.remove())
            } function b() { var a = $(j.cartTipSelector); a.length > 0 && a.remove() } var c = this;
            l.on("click", a).on("click", b), this.$el.on("click", i.addBtn, function ()
            {
                ga("send", "event", "restaurant", "addFood", "fromNormal")
            }), this.$el.on("click", i.foodName, function ()
            {
                ga("send", "event", "restaurant", "showComment", "foodName")
            }), this.$el.on("click", i.foodImg, function ()
            {
                ga("send", "event", "restaurant", "showComment", "foodImage")
            }), this.$el.on("click", i.foodRating, function ()
            {
                ga("send", "event", "restaurant", "showComment", "foodRating")
            }), this.$el.on("click", i.fixNav, function ()
            {
                $(this).parent().hasClass("open") || ga("send", "event", "restaurant", "openFixCateNav")
            }), this.$el.on("click", i.cateName, function ()
            {
                var a = $(this).data("cateid"), b = "topNav";
                c.scrollFoodByCate(a),
                $(this).parents(i.toolbarDropdown).length && ($(i.toolbarToggle).trigger("click"), b = "fixNav"),
                ga("send", "event", "restaurant", "useCateNav", b), ga("send", "event", "foodCateNav", b)
            }), this.$el.on("click", i.sortBtn, function ()
            {
                var a = $(this), b = a.attr("data-sort");
                return "default" === b ? void (a.hasClass("ui_on") || (a.addClass("ui_on").
                    siblings().removeClass("ui_on ui_asc"), c.sort(b))) : void (a.hasClass("ui_on") ? a.hasClass("ui_asc") ? (a.removeClass("ui_asc"), c.sort(b, "desc")) : (a.addClass("ui_asc"), c.sort(b)) : "price" === b ? (a.addClass("ui_on ui_asc").siblings().removeClass("ui_on ui_asc"), c.sort(b)) : (a.addClass("ui_on").siblings().removeClass("ui_on ui_asc"), c.sort(b, "desc")))
            }), this.$el.on("click", i.favorBtn, function (a)
            {
                ELEME.authed ? d(a).favorFood() : g.publish(j.openLoginPanelTopic)
            }), this.$el.on("click", i.addBtn, function (a) { d(a).handleAdd(a) }),
            this.$el.on("click", i.addMainBtn, function (a) { d(a).handleAddMain(a) }),
            this.$el.on("click", ".food_name,.food_img,.cmt_block", function (a) { d(a).showComment() }),
            this.$el.on("click", i.cancelClearCartSelector, function (a) { d(a).clearCartTipMenu() }),
            this.$el.on("click", i.clearCart, function (a)
            {
                var b = d(a); b.addToBasket({ force: !0 }),
                    b.clearCartTipMenu()
            }), this.$el.on("click", i.singleMainFood, function (a)
            {
                var b = d(a), c = $(this).data("foodid");
                b.addToMainFood(c), b.clearMenu()
            })
        }, c.prototype.fetch = function () { this.parseMenuData(window.menu) }, c.prototype.parseMenuData = function (a)
        {
            var b, c = this; this.cates = a, this.addCateView(), this.checkFood(), b = _.filter(c.cateViews, function (a)
            {
                return a.active
            }), this.initScrollSpy(), this.initCateScroollSpy(b), k.trigger("scroll.scrollspy")
        }, c.prototype.addCateView = function ()
        {
            var a, b, c, d = {};
            for (a = 0, b = this.cates.length; b > a; a++) a <= window.menuRenderIndex ? d.active = !0 : d.active = !1,
                c = new f(this.cates[a], d), this.cateViews.push(c)
        }, c.prototype.render = function (a)
        {
            if (a)
            {
                var b, c, d = a.min, e = a.max, f = this.cateViews;
                for
                    (c = this.buffer = new h, b = d; e > b; b++) f[b].activate(),
                                                                                        f[b].render(c); for (this.$el.find(i.cateView).append($(c.buffer)), b = d;
                                                                                            e > b; b++) f[b].clearBuffer(); this.buffer = null
            }
        }, c.prototype.getRenderRange = function (a)
        {
            a = a || {}; var b, c, d, e, f = this.cateViews; for (b = 0, c = f.length; c > b; b++)
                if (!f[b].active) { d = b; break }
            return e = a.cateId ? Math.min(c, a.renderIndex + 1) : Math.min(c, d + 3),
                e === c && (this.renderComplete = !0), { min: d, max: e }
        }, c.prototype.initScrollSpy = function (a)
        {
            a = a || {}; var b, c, d = $(i.menuToolbar), e = $(i.toolbarText), f = this.cateViews[0];
            f && (b = $.trim(f.$el().find(i.menuTitle).text()), c = f.$el().find(i.menuTitle).html(),
            Eleme.Component.scrollspy("fixNav", "append", {
                min: d.offset().top, onEnter: function ()
                {
                    d.addClass("ui_fixed")
                }, onLeave: function () { d.removeClass("ui_fixed"), e.attr("title", b).html(c) }
            }))
        }, c.prototype.initCateScroollSpy = function (a, b)
        {
            b = b || {}; var c = $(i.toolbarText),
                d = $(i.toolbarDropdown); _.each(a, function (a)
                {
                    var b = a.$el().find(i.menuTitle),
                        e = b.html(), f = $.trim(b.text()), g = b.offset().top - 1, h = g + b.parent().height() - 1,
                        j = d.find("[data-cateid=" + a.cate.categId + "]");
                    Eleme.Component.scrollspy("cate", "append", {
                        min: g, max: h, onEnter: function ()
                        {
                            c.html(e).attr("title", f), j.addClass("ui_active")
                        }, onLeave: function () { j.removeClass("ui_active") }
                    }), b = g = h = null
                })
        }, c.prototype.sort = function (a, b)
        {
            var c, d, e, f, k, l;
            for (ga("send", "event", "restaurant", "sortFood", a), k = _.filter(this.cateViews, function (a)
            {
                return a.active
            }), e = this.buffer = new h("div"), e.setId("cate_view").setClass("rst-block"), e.pushOpenTag(),
            c = 0, d = k.length; d > c; c++) f = k[c], f.sort(a, b), f.render(e); e.pushCloseTag(),
            $(i.cateView).replaceWith(e.buffer), l = g.publish(j.getBasketInfoTopic), l && this.tagFoodView(l)
        }, c.prototype.tagFoodView = function (a)
        {
            function b(a)
            {
                var b;
                for (b = l.length; b--;) if (l[b].id === a.id) return void (l[b].quantity += a.quantity); return !0
            } function c(a, b, c)
            {
                var e, f, g, h;
                for (e = a.length; e--;) if (g = a[e].cate.foods.plain, f = a[e].cate.foods.img,
                    h = d(g.concat(f), b.id))
                {
                    h.values.inBasket = c ? 0 : b.quantity,
                    h.trigger("basketStateChange"); break
                }
            } function d(a, b)
            {
                return _.find(a, function (a)
                {
                    return a.values.id === b
                })
            } var e, f, g, h, i, j, k, l = []; for (j = _.flatten($.extend(!0, [], a.groups), !0),
                e = j.length; e--;) for (k = j[e].garnishes, g = j[e].id, b(j[e]) && l.push(j[e]),
                    f = k.length; f--;) b(k[f]) && l.push(k[f]); for (this.lastFoodsId || (this.lastFoodsId = []),
                        e = this.lastFoodsId.length; e--;) i = this.lastFoodsId[e], c(this.cateViews, i, !0);
            for (e = l.length; e--;) h = l[e], c(this.cateViews, h, !1); this.lastFoodsId = l
        }, c.prototype.scrollFoodByCate = function (a)
        {
            var b, c, d, e = this, f = this.cateViews;
            for (b = 0, c = f.length; c > b; b++) if (f[b].cate.categId === a)
                return void (f[b].active ? f[b].scrollToView() : (d = this.getRenderRange({
                    partial: !0, cateId: a,
                    renderIndex: b
                }), this.render(d), f[b].scrollToView(function ()
                {
                    var a = e.cateViews.slice(d.min, d.max);
                    e.initCateScroollSpy(a), k.trigger("scroll.scrollspy")
                })))
        }, c.prototype.scrollFoodById = function (a)
        {
            var b, c, d, e = this, f = this.cateViews;
            for (b = 0, c = f.length; c > b; b++) if (f[b].checkFoodById(a))
                return void (f[b].active ? f[b].scrollFoodToView(a) : (d = this.getRenderRange({ partial: !0, cateId: f[b].cate.categId, renderIndex: b }),
                    this.render(d), f[b].scrollFoodToView(a, function ()
                    {
                        var a = e.cateViews.slice(d.min, d.max);
                        e.initCateScroollSpy(a)
                    })))
        }, c.prototype.checkFood = function ()
        {
            var a, b, c = window.location.hash;
            if (!(c.length <= 1) && (b = c.substr(1).split("/"), "food" === b[0]))
            {
                if (a = window.parseInt(b[1], 10), this.scrollFoodById(a), "add" !== b[2]) return;
                $(window).on("load", function () { $("#food_view_" + b[1]).find(".add_btn").trigger("click") })
            }
        }, e = c
    }(r, s), u = function ()
    {
        "use strict"; function a(a) { this.values = a, this.init() }
        var b, c = Eleme.Common.PubSub, d = Eleme.Common.Http,
            e = { basketSyncSuccessTopic: "basketSyncSuccess", basketSyncFailureTopic: "basketSyncError" };
        return a.prototype.init = function () { this.setDefault() }, a.prototype.setDefault = function ()
        {
            _.defaults(this.values, { foods: [] })
        }, a.prototype.clear = function ()
        {
            var a = {}, b = "//" + ELEME.mainHost + "/cart/clear/" + this.values.id;
            d.request({ type: "get", url: b, data: a, dataType: "jsonp" }).done(function (a, b, d)
            {
                c.publish(e.basketSyncSuccessTopic, a, { basket: !0 })
            }).fail(function (a) { c.publish(e.basketSyncFailureTopic, a, { basket: !0 }) })
        }, b = a
    }(), v = function ()
    {
        "use strict"; function a(a) { this.values = a, this.init() } var b,
            c = Eleme.Common.PubSub, d = Eleme.Common.Http,
            e = { basketSyncSuccessTopic: "basketSyncSuccess", basketSyncErrorTopic: "baksetSyncError" };
        return a.prototype.init = function () { this.setDefaults() }, a.prototype.setDefaults = function ()
        {
            _.defaults(this.values, { isGarnish: !1, award: [] })
        }, a.prototype.sync = function (a, b)
        {
            var f = b.payload || {},
                g = {
                    increase: { url: "/cart/add", type: "get" }, decrease: { url: "/cart/decrease", type: "get" },
                    remove: { url: "/cart/delete", type: "get" }, set: { url: "/cart/set", type: "get" }
                }, h = "//" + ELEME.mainHost + g[a].url + b.url, i = b.option, j = g[a].type;
            if (!h) throw new Error("invalid sync method");
            d.request({
                type: j, url: h,
                data: f, dataType: "jsonp"
            }).done(function (a, b, d) { c.publish(e.basketSyncSuccessTopic, a, i) }).fail(function (a)
            {
                c.publish(e.basketSyncErrorTopic, a)
            })
        }, a.prototype.increase = function (a)
        {
            this.sync("increase", { url: this._buildUrl(), payload: { num: 1 }, option: a })
        }, a.prototype.decrease = function (a)
        {
            this.sync("decrease", { url: this._buildUrl(), payload: { num: -1 }, option: a })
        }, a.prototype.remove = function (a)
        {
            this.sync("remove", { url: this._buildUrl(), option: a })
        }, a.prototype.set = function (a, b)
        {
            this.sync("set", { url: this._buildUrl(), payload: { num: a }, option: b })
        }, a.prototype._buildUrl = function ()
        {
            return "/" + this.values.groupId + "/" + (this.values.parentFoodId || 0) + "/" + this.values.id
        }, b = a
    }(), w = function ()
    {
        "use strict"; var a, b = function (a)
        {
            var b = "", c = _.escape; Array.prototype.join;
            return b += '<div class="rcart-d-name">', a.isGarnish && (b += '<i class="icon-rst-badge garnish"></i>'),
                b += c(a.name) + '</div><div class="rcart-d-modify"><a class="rcart-d-act minus d_btn">-</a><input class="rcart-d-qty set_num_in" type="text" value="' + c(a.quantity) + '" /><a class="rcart-d-act add i_btn">+</a></div><div class="rcart-d-total symbol-rmb">' + c(a.price) + '</div><a class="rcart-d-del r_btn">&times;</a>'
        }; return a = b
    }(), x = function (a)
    {
        "use strict"; function b(a, b)
        {
            this.id = null, this.food = a, this.init(b)
        } var c, d = a, e = Eleme.Common.PubSub, f = { numInputSelector: ".set_num_in", removeBtnSelector: ".r_btn" };
        return b.prototype.tagName = "li", b.prototype.className = "rcart-dish eleme_view", b.prototype.init = function ()
        {
            this.food.values.isGarnish ? this.id = "basketfood_view_" + this.food.values.id : this.id = "basketfood_garnish_view_" + this.food.values.id, Eleme.View.views[this.id] = this
        }, b.prototype.$el = function () { return $("#" + this.id) }, b.prototype.render = function (a)
        {
            a.begin(this.tagName), a.setClass(this.className), a.setId(this.id),
                a.pushOpenTag(), a.push(d($.extend({}, this.food.values))), a.pushCloseTag()
        }, b.prototype.remove = function ()
        {
            var a = this.$el().find(f.removeBtnSelector);
            a.hasClass("loading") || (a.addClass("loading"), e.subscribeOnce(f.basketSyncSuccessTopic, function ()
            {
                a.removeClass("loading")
            }, this), this.food.remove({ basket: !0 }))
        }, b.prototype.increase = function () { this.food.increase({ basket: !0 }) }, b.prototype.decrease = function ()
        {
            this.food.decrease({ basket: !0 })
        }, b.prototype.set = function ()
        {
            var a = this.$el().find(f.numInputSelector), b = window.parseInt(a.val(), 10);
            this.food.set(b, { basket: !0 })
        }, b.prototype.toggleView = function () { this.$el().toggle() }, b.prototype.destroy = function ()
        {
            delete Eleme.View.views[this.id]
        }, c = b
    }(w), y = function (a, b)
    {
        "use strict"; function c(a, b) { this.id = null, this.basket = a, this.basketFoodViews = [], this.extraContent = "", this.open = !1, this.init(b) } var d, e = a, f = b, g = Eleme.Common.Evt, h = {
            emptyBasketHint: '<p class="rcart-empty">篮子是空的</p>',
            activitytemp: '<a class="rcart-activity" target="_black" href="http://ele.me/activity/xnbonus_2015" title="点击查看详情" style="display:none"></a>'
        }, i = $(window); return $.extend(c.prototype, g), c.prototype.tagName = "div",
            c.prototype.type = "basket_view", c.prototype.className = "rcart-list-wrapper eleme_view",
            c.prototype.init = function ()
            {
                this.id = this.type + "_" + Eleme.View.uuid++,
                    Eleme.View.views[this.id] = this, this.on("openChange", $.proxy(this.toggle, this)),
                this.generateViews()
            }, c.prototype.$el = function () { return $("#" + this.id) }, c.prototype.render = function (a)
            {
                var b = this.basket.values.id + 1, c = this.basket.values.foods; a.begin(this.tagName), this.addPropertyToBuffer(a), a.pushOpenTag(), c.length ? (-1 === $.inArray(ELEME.cityId, [35, 38, 42, 49, 50, 53, 66, 68, 81, 97, 105, 114, 119, 124, 127, 131, 135, 139, 143, 156, 157, 165, 173, 177, 220, 223, 243, 278, 286, 30, 73, 199, 219, 64, 72, 182]) && a.push(h.activitytemp), a.push('<h4 class="rcart-title">' + b + '号篮子 <a class="rcart-clear basket_clear_btn">[清空]</a></h4>'), this.renderFoods(a)) : a.push(h.emptyBasketHint), a.pushCloseTag()
            }, c.prototype.addPropertyToBuffer = function (a) { a.setId(this.id), a.setClass(this.className + " ui_c" + (this.basket.values.id + 1)) }, c.prototype.generateViews = function () { var a, b, c, d, g, h, i, j = this.basket.values.foods; for (a = j.length; a--;) for (d = new e(j[a]), d.values.groupId = this.basket.values.id, h = new f(d), this.basketFoodViews.push(h), c = j[a].garnishes, b = c.length; b--;) g = new e(c[b]), g.values.isGarnish = !0, g.values.groupId = d.values.groupId, g.values.parentFoodId = d.values.id, i = new f(g), this.basketFoodViews.push(i) }, c.prototype.renderFoods = function (a) { var b, c, d = this.basketFoodViews; for (a.begin("ul"), a.setClass("rcart-list basket_list"), a.setStyle("max-height: " + (i.height() - 205) + "px;"), a.pushOpenTag(), b = 0, c = d.length; c > b; b++) d[b].render(a); this.extraContent && a.push(this.extraContent), a.pushCloseTag() }, c.prototype.findByFoodId = function (a) { return _.find(this.basketFoodViews, function (b) { return b.id === a }) }, c.prototype.sync = function () { this.basket.sync() }, c.prototype.clearBasket = function () { this.basket.clear() }, c.prototype.toggle = function (a) { a = a || {}; var b; this.open ? (b = -this.$el().outerHeight(), this.$el().find(".rcart-activity").show(), a.anim ? this.$el().animate({ top: b }, 300) : this.$el().css({ top: b })) : (this.$el().animate({ top: "0px" }, 300), this.$el().find(".rcart-activity").hide()) }, c.prototype.remove = function () { this.$el().remove() }, c.prototype.destroy = function () { delete Eleme.View.views[this.id], _.each(this.basketFoodViews, function (a) { a.destroy() }), this.basketFoodViews.length = 0 }, d = c
    }(v, x), z = function () { "use strict"; var a, b = function (a) { var b, c = ""; _.escape; return c += '<div class="rcart-group"><a class="rcart-group-toggle switcher_toggle" data-toggle="bs-tooltip" title="展开篮子"></a><ul class="group basket_switcher">' + (null == (b = a.basketTiles) ? "" : b) + '</ul></div><div class="rcart-dock group basket_wrap">' + (null == (b = a.basketInfo) ? "" : b) + "</div>" + (null == (b = a.baskets) ? "" : b) }; return a = b }(), A = function () { "use strict"; var a, b = function (a) { var b = "", c = _.escape; return b += '<span class="rcart-info basket_food_info">' + c(a.num) + '份 <span class="symbol-rmb">' + c(a.price) + "</span></span>" }; return a = b }(), B = function () { "use strict"; var a, b = function (a) { var b = "", c = _.escape; Array.prototype.join; return b += '<li class="rcart-dish"><div class="rcart-d-name">' + c(a.name) + "</div>", a.showNum && (b += '<div class="rcart-d-modify">' + c(a.quantity) + "</div>"), b += '<div class="rcart-d-total symbol-rmb">' + c(a.price) + "</div></li>" }; return a = b }(), C = function () { "use strict"; var a, b = function (a) { var b, c = "", d = _.escape; Array.prototype.join; return c += '<a class="rcart-checkout c_c ', a.isBtnDisabled && (c += "disabled"), c += '" href="' + d(a.checkoutUrl) + '"', a.phoneOrder && (c += ' data-toggle="bs-modal" data-target="#modal_phone"'), c += ">", a.phoneOrder && (c += '<i class="glyph-tel"></i>'), c += null == (b = a.btnHint) ? "" : b, a.checkoutReady && (c += '<i class="glyph-bracket-right"></i>'), c += "</a>" }; return a = b }(), D = function () { "use strict"; var a, b = function (a) { var b = "", c = _.escape; Array.prototype.join; return b += '<div id="modal_phone" class="bs-modal fade" tabindex="-1" role="dialog" aria-hidden="true"><div class="bs-modal-dialog rst-phone-modal"><div class="bs-modal-content"><a class="bs-close" data-dismiss="bs-modal" aria-hidden="true">&times;</a><div class="bs-modal-body basket_content"><p class="phrst-notice">该餐厅当前只支持电话订餐，请拨打餐厅电话</p><p class="phrst-tel">' + c(a.basketsInfo.phone) + '</p><article><header class="phrst-header group"><span class="phrst-name">' + c(a.basketsInfo.restaurantName) + '</span><span class="phrst-cost symbol-rmb">' + c(a.basketsInfo.total) + "</span></header>", _.each(a.baskets, function (a, d, e) { b += '<div class="phrst-cart">', e.length > 1 && (b += '<h5 class="cart-no">' + c(d + 1) + "号篮子</h5>"), b += '<ul class="phrst-cart-list">', _.each(a, function (a, d, e) { b += '<li class="phrst-cart-item"><span>' + c(a.name) + '</span><span class="quantity symbol-times">' + c(a.quantity) + '</span><span class="price symbol-rmb">' + c(a.price) + "</span></li>", _.each(a.garnishes, function (a, d, e) { b += '<li class="phrst-cart-item"><span>' + c(a.name) + '</span><span class="quantity symbol-times">' + c(a.quantity) + '</span><span class="price symbol-rmb">' + c(a.price) + "</span></li>" }) }), b += "</ul></div>" }), b += "</article></div></div></div></div>" }; return a = b }(), E = function (a, b, c, d, e, f, g)
    {
        "use strict"; function h(a) { this.$el = null, this.baskets = [], this.basketsInfo = {}, this.basketViews = [], this.currentBasket = 0, this.isFirstFetch = !0, this.isCheckoutReady = !1, this.isCurrentViewOpen = !1, this.isSwitcherOpen = !1, this.init(a) } function i(a) { var b = $(a.target), c = b.closest(".eleme_view").attr("id"), d = Eleme.View.views[c]; return d } var j, k = a, l = b, m = c, n = d, o = e, p = f, q = g, r = Eleme.Common.Evt, s = Eleme.Common.Util, t = Eleme.Common.Http, u = Eleme.Common.PubSub, v = Eleme.Common.RenderBuffer, w = { basketSelector: "#rst_cart", basketWrapSelector: ".basket_wrap", basketSwitcherWrapSelector: ".basket_switcher", basketSwitcherTipSelector: ".switcher_toggle", basketTileSelector: ".single_tile", currentBasketTileSelector: ".current_basket_tile", cartCheckoutBtnSelector: ".c_c", checkoutModalSelector: "#modal_phone", showMainFoodTopic: "showMainFood", addFoodTopic: "addFoodToBasket", basketSyncSuccessTopic: "basketSyncSuccess", basketSyncErrorTopic: "basketSyncError", getBasketInfoTopic: "getBasketInfo", addAnimEndTopic: "addAnimEnd", basketInitTopic: "basketInit", userInfoDoneTopic: "userInfoDone", basketTipTpl: "<%- data.basketId %>号篮子(<%- data.basketNum %>)", basketTileTpl: '<li class="rcart-no single_tile <%- data.tileClass %>" data-basketId="<%- data.basketId %>" data-toggle="bs-tooltip"><%- data.basketId %></li>', emptyBtnHint: "篮子是空的哦", reachLimitBtnHint: "去买单", unreachLimitBtnHint: '还差 <span class="symbol-rmb"><%- data.plus %></span> 起送', basketDefaultNum: 6, basketClassPrefix: "ui_c", priceExtraList: [2, 3, 4, 5, 6, 7, 8, 9, 100, 101] }; return $.extend(h.prototype, r), h.prototype.init = function () { this.$el = $(w.basketSelector), this.subscribeTopic(), this.bindEvents(), this.on("switchChange", this.toggleBasketSwitcher, this) }, h.prototype.subscribeTopic = function () { u.subscribe(w.userInfoDoneTopic, function () { this.fetch() }, this), u.subscribe(w.getBasketInfoTopic, function () { return this.basketsInfo }, this), u.subscribe(w.addFoodTopic, function (a, b) { b = b || {}, b.basketId = this.currentBasket, a.call(null, b) }, this), u.subscribe(w.basketSyncSuccessTopic, function (a, b) { b = b || {}, "1" === a && (a = { quantity: 0, total: 0, groups: [], extras: [] }); var c, d = {}; this.parseCartData(a), b.basket && (this.clearPrevViews(), this.generateViews(), c = this.basketViews[this.currentBasket], this.render(), d.anim = this.isCurrentViewOpen ? !1 : !0, c.open = this.isCurrentViewOpen = !0, c.trigger("openChange", d), this.basketViews.length > 1 ? this.trigger("switchChange", { anim: !1 }) : 1 === this.basketViews.length && (this.isSwitcherOpen = !1)) }, this), u.subscribe(w.basketInitTopic, function (a) { this.parseCartData(a), this.clearPrevViews(), this.generateViews(), this.render(), this.isFirstFetch = !1 }, this), u.subscribe(w.addAnimEndTopic, function () { this.clearPrevViews(), this.generateViews(); var a = {}, b = this.basketViews[this.currentBasket]; this.render(), a.anim = this.isCurrentViewOpen ? !1 : !0, b.open = this.isCurrentViewOpen = !0, b.trigger("openChange", a), this.basketViews.length > 1 ? this.trigger("switchChange", { anim: !1 }) : 1 === this.basketViews.length && (this.isSwitcherOpen = !1) }, this), u.subscribe(w.basketSyncErrorTopic, function () { }, this), u.subscribe(w.showMainFoodTopic, function (a) { var b = this.baskets[this.currentBasket]; a.call(null, this.currentBasket, b) }, this) }, h.prototype.bindEvents = function ()
        {
            var a = this; this.$el.on("click", w.basketSwitcherTipSelector, function ()
            {
                a.isSwitcherOpen = !a.isSwitcherOpen, a.trigger("switchChange", { anim: !0 }),
                ga("send", "event", "restaurant", "basketSwitcher", a.isSwitcherOpen ? "open" : "close")
            }), this.$el.on("click", w.cartCheckoutBtnSelector, function (b)
            {
                a.isCheckoutReady ? (a.basketsInfo.phoneOrder && (b.preventDefault(), a.openCheckoutModal()),
                ga("send", "event", "checkoutOrigin", ELEME.route)) : b.preventDefault(), b.stopPropagation()
            }), this.$el.on("click", w.basketWrapSelector, function ()
            {
                var b = a.basketViews[a.currentBasket]; b.open = a.isCurrentViewOpen = !b.open,
                b.trigger("openChange", { anim: !0 })
            }), this.$el.on("mouseenter", w.basketSwitcherTipSelector, function ()
            {
                var a = $(this).parent().hasClass("ui_open") ? "关闭篮子" : "展开篮子"; $(this).attr("data-original-title", a)
            }), this.$el.on("mouseenter", w.basketTileSelector, function ()
            {
                var b, c, d, e, f, g = 0,
                    h = $(this).data("basketid"), i = a.baskets[h - 1], j = _.template(w.basketTipTpl); for (b = i.length; b--;) for (d = i[b], g += d.quantity, c = d.garnishes.length; c--;) e = d.garnishes[c], g += e.quantity; f = j({ basketId: h, basketNum: g }), $(this).attr("data-original-title", f)
            }), this.$el.on("click", w.basketTileSelector, function (b) { var c = $(b.target).data("basketid"); ga("send", "event", "restaurant", "basketChange", c), c -= 1, a.switchBasket(c) }), this.$el.on("mouseenter", w.basketWrapSelector, function () { 0 !== a.baskets[0].length && a.$el.find(w.basketSwitcherTipSelector).show() }), this.$el.on("mouseleave", w.basketWrapSelector, function (b) { $(b.relatedTarget).hasClass(w.basketSwitcherTipSelector.substr(1)) || a.$el.find(w.basketSwitcherWrapSelector).parent().hasClass("ui_open") || a.$el.find(w.basketSwitcherTipSelector).hide() }), this.$el.on("mouseleave", w.basketSwitcherTipSelector, function (b) { var c = $(b.target); a.$el.find(w.basketSwitcherWrapSelector).parent().hasClass("ui_open") || c.hide() }), $(window).on("resize", function ()
            {
                var a = $(window).height(), b = $(".single_basket.ui_open"); if ($(window).height() > 250 && ($(".single_basket").css("max-height", a - 155), b.length)) { var c = b.find(".basket_list").outerHeight(); b.css("top", c > a - 155 ? 155 - a : -c) }
            }), this.$el.on("click", ".basket_clear_btn", function (a) { i(a).clearBasket() }), this.$el.on("click", ".i_btn", function (a) { i(a).increase() }), this.$el.on("click", ".d_btn", function (a) { i(a).decrease() }), this.$el.on("click", ".r_btn", function (a) { i(a).remove() }), this.$el.on("change", ".set_num_in", function (a) { i(a).set() }), this.$el.tooltip({ selector: '[data-toggle="bs-tooltip"]', animation: !1, placement: "top", delay: { show: 700, hide: 0 }, container: "body" })
        }, h.prototype.fetch = function (a) { this.sync("fetch", { option: a }) }, h.prototype.parseCartData = function (a) { this.basketsInfo = $.extend(!0, {}, a), this.baskets = this.basketsInfo.groups, this.baskets.length < w.basketDefaultNum && this.baskets.push([]) }, h.prototype.render = function () { var a = "", b = {}; b.basketInfo = this.renderBasketInfo(), b.basketTiles = this.renderTile(), b.baskets = this.renderBasket(), a = m(b), this.$el.empty().html(a) }, h.prototype.rerenderBasket = function () { }, h.prototype.clearPrevViews = function () { _.each(this.basketViews, function (a) { a.destroy() }), this.basketViews.length = 0 }, h.prototype.generateViews = function () { var a, b, c, d; for (a = 0, b = this.baskets.length; b > a; a++) c = new k({ id: a, foods: this.baskets[a] }), d = new l(c), 0 === a && (d.extraContent = this.makeExtraContent()), this.basketViews.push(d) }, h.prototype.renderBasketInfo = function () { var a, b, c = this.currentBasket + 1, d = !1, e = !1, f = new v; return f.push('<i class="icon-rcart glyph-cart cart1 current_basket_tile ui_c' + c + '"></i>'), this.isCheckoutReady = !1, 0 === this.basketsInfo.total && 0 === this.basketsInfo.quantity ? (a = w.emptyBtnHint, e = !0) : (f.push(n({ num: this.basketsInfo.quantity, price: this.basketsInfo.total })), this.basketsInfo.total >= 0 && this.basketsInfo.deliverAmount < this.basketsInfo.restaurantDeliverAmount ? (a = _.template(w.unreachLimitBtnHint, { plus: s.add(this.basketsInfo.restaurantDeliverAmount, -this.basketsInfo.deliverAmount) }), e = !0) : this.basketsInfo.deliverAmount >= this.basketsInfo.restaurantDeliverAmount && (a = w.reachLimitBtnHint, d = !0, this.isCheckoutReady = !0)), b = { btnHint: a, isBtnDisabled: e, checkoutReady: d, phoneOrder: this.basketsInfo.phoneOrder, checkoutUrl: "http://" + ELEME.mainHost + "/cart/checkout" }, f.push(p(b)), f.buffer }, h.prototype.renderBasket = function () { var a, b, c = new v; for (a = 0, b = this.basketViews.length; b > a; a++) this.basketViews[a].render(c); return c.buffer }, h.prototype.makeExtraContent = function () { var a, b, c, d = "", e = this.basketsInfo.extras; for (a = 0, b = e.length; b > a; a++) (c = e[a]) && (_.contains(w.priceExtraList, c.category_id) ? c.showNum = !1 : c.showNum = !0, d += o(c)); return d }, h.prototype.renderTile = function () { var a, b, c = "", d = _.template(w.basketTileTpl), e = new v; for (a = this.baskets.length; a--;) b = 0 === this.baskets[a].length ? w.basketClassPrefix + (a + 1) + " empty" : w.basketClassPrefix + (a + 1), c += d({ basketId: a + 1, tileClass: b, basketNum: this.baskets[a].length }); return e.push(c), e.buffer }, h.prototype.toggleBasketSwitcher = function (a) { a = a || {}; var b = this.$el.find(w.basketTileSelector).width(), c = this.$el.find(w.basketSwitcherWrapSelector).parent(); this.isSwitcherOpen ? a.anim ? c.addClass("ui_open").animate({ left: -b * this.baskets.length }, 500) : c.addClass("ui_open").css("left", -b * this.baskets.length) : (a.anim ? c.removeClass("ui_open").animate({ left: 0 }, 500) : c.removeClass("ui_open").css("left", 0), this.$el.find(w.basketSwitcherTipSelector).hide()) }, h.prototype.switchBasket = function (a) { var b = this.currentBasket, c = this.$el.find(w.currentBasketTileSelector); a !== this.currentBasket && (this.currentBasket = a, c.removeClass(w.basketClassPrefix + (b + 1)).addClass(w.basketClassPrefix + (this.currentBasket + 1)), this.basketViews[b].open = !1, this.basketViews[b].trigger("openChange", { anim: !0 }), this.basketViews[this.currentBasket].open = !0, this.basketViews[this.currentBasket].trigger("openChange", { anim: !0 })) }, h.prototype.openCheckoutModal = function () { var a, b = this.baskets.slice(), c = $(w.checkoutModalSelector); b.pop(), a = q({ basketsInfo: this.basketsInfo, baskets: b }), c.length > 0 ? c.replaceWith(a) : $("body").append(a), c = $(w.checkoutModalSelector), c.modal("show") }, h.prototype.sync = function (a, b) { var c = { fetch: { url: "/cart", type: "get" } }, d = "//" + ELEME.mainHost + c[a].url, e = c[a].type; t.request({ type: e, url: d, data: b, dataType: "jsonp" }).done(function (b) { "fetch" === a ? u.publish(w.basketInitTopic, b) : u.publish(w.basketSyncSuccessTopic, b) }).fail(function (a) { }) }, j = h
    }(u, y, z, A, B, C, D), F = function ()
    {
        "use strict"; var a, b = function (a)
        {
            var b = "", c = _.escape; Array.prototype.join;
            return b += '<div class="rst-d-info"><p class="rst-d-main text-overflow"><a class="rst-d-name food_name" title="' + c(a.name) + '">' + c(a.name) + '</a></p></div><div class="rst-d-action r_d_a">',
            b += "rest" === ELEME.restaurantStatus ? '<div class="unavailable symbol-rmb">' + c(a.price) + '<br><span class="status">餐厅休息</span></div>' : 0 === a.stock ? '<div class="unavailable symbol-rmb">' + c(a.price) + '<br><span class="status">已售完</span></div>' : '<div class="rst-d-act narrow act_btns"><a class="rst-d-act-add add_btn" title="点击饿一份" role="button"><span class="rst-d-act-glyph">&#xe017;</span><span class="price symbol-rmb">' + c(a.price) + '</span></a><a class="rst-d-act-toggle caret add_main_btn" role="button"></a></div>', b += "</div>"
        }; return a = b
    }(), G = function (a, b)
    {
        "use strict"; function c(a) { this.id = null, this.food = a, this.init() }
        var d, e = a, f = b.FoodView; return $.extend(c.prototype, f.prototype), c.prototype.tagName = "li",
            c.prototype.type = "favor_view", c.prototype.className = "rst-aside-dish-item eleme_view",
            c.prototype.init = function ()
            {
                this.id = this.type + "_" + this.food.values.id,
                    Eleme.View.views[this.id] = this
            }, c.prototype.render = function (a)
            {
                a.begin(this.tagName), a.setId(this.id).setClass(this.className),
                    a.pushOpenTag(), a.push(e(this.food.values)), a.pushCloseTag()
            }, d = c
    }(F, q), H = function ()
    {
        "use strict"; var a, b = function (a)
        {
            var b, c = "", d = _.escape; Array.prototype.join;
            return c += '<div class="rst-d-info"><p class="rst-d-main text-overflow"><a class="rst-d-name food_name" title="' + d(a.name) + '">' + d(a.name) + '</a></p><span class="rst-d-rating food_rating"><i class="icon-d-star s' + d(a.star) + ' i_s"></i>', a.ratingCount > 0 && (c += "(" + (null == (b = a.ratingCount) ? "" : b) + ")"), c += '</span></div><div class="rst-d-action r_d_a">', c += "rest" === ELEME.restaurantStatus ? '<div class="unavailable symbol-rmb">' + d(a.price) + '<br><span class="status">餐厅休息</span></div>' : 0 === a.stock ? '<div class="unavailable symbol-rmb">' + d(a.price) + '<br><span class="status">已售完</span></div>' : '<div class="rst-d-act narrow act_btns"><a class="rst-d-act-add add_btn" title="点击饿一份" role="button"><span class="rst-d-act-glyph">&#xe017;</span><span class="price symbol-rmb">' + d(a.price) + '</span></a><a class="rst-d-act-toggle caret add_main_btn" role="button"></a></div>', c += "</div>"
        }; return a = b
    }(), I = function (a, b)
    {
        "use strict"; function c(a) { this.id = null, this.food = a, this.init() } var d, e = a,
            f = b.FoodView; return $.extend(c.prototype, f.prototype), c.prototype.tagName = "li",
                c.prototype.type = "reco_view", c.prototype.className = "rst-aside-dish-item eleme_view",
                c.prototype.init = function ()
                {
                    this.id = this.type + "_" + this.food.values.id,
                        Eleme.View.views[this.id] = this
                }, c.prototype.render = function (a)
                {
                    return a.begin(this.tagName),
                        a.setId(this.id).setClass(this.className), a.pushOpenTag(), a.push(e($.extend({},
                        this.food.values))), a.pushCloseTag(), this
                }, d = c
    }(H, q), J = function (a, b, c)
    {
        "use strict"; function d()
        {
            this.$el = null, this.favorFoodViews = [],
                this.events = {}, this.init()
        } function e(a)
        {
            var b = $(a.target), c = b.closest(".eleme_view").attr("id"), d = Eleme.View.views[c];
            return d
        } var f, g = a, h = b, i = c, j = Eleme.Common.Evt, k = Eleme.Common.PubSub, l = Eleme.Common.Http,
            m = Eleme.Common.RenderBuffer, n = {
                restaurantSelector: "#restaurant",
                restaurantAsideSelector: "#rst_aside", restaurantInfoPanelSelector: ".rst_info_panel",
                restaurantInfoHeaderSelector: ".rst_info_header", recommendFoodWrapSelector: "#weekly_ranking",
                restaurantDistanceSelector: ".rst_distance", restaurantDeliverAmountSelector: ".rst_deliver_amount",
                rstMapDistanceSelector: "#r_d_v", recoFoodContainerSelector: "#rec_food",
                favorFoodWrapSelector: "#favor_food", mapSelector: ".rst_map", headDistanceSelector: ".rst_head_distance",
                asideDistanceSelector: ".rst_aside_distance",
                asideCmtSelector: ".rst_aside_comment", headerCmtSelector: ".rst_header_comment",
                rstFixTipSelector: ".rst_fix_panel", addBtnSelector: ".add_btn",
                restaurantInfoDoneTopic: "restaurantInfoDone", favorFoodInitTopic: "favorFoodInit",
                favorFoodUpdateTopic: "favorFoodUpdate", userInfoDoneTopic: "userInfoDone",
                emptyFavorTip: '<div class="rst-aside-empty empty_favor"><i class="glyph-fav glyph-icon"></i>收藏过的美食在这里</div>',
                moreFavorTip: '<p class="rst-aside-more more_favor"><a class="more" href="' + ELEME.formerBaseUrl + '/profile/favor_food">查看更多收藏</a></p>',
                favorFoodHead: '<h3 class="rst-aside-title">我的收藏</h3>', userInfoUrl: "/" + ELEME.restaurantUrl + "/userinfo",
                maxFavorFood: 5
            }; return $.extend(d.prototype, j), d.prototype.init = function ()
            {
                this.$el = $(n.restaurantSelector),
                    this.subscribeTopic(), this.bindEvents(), this.renderRecommendFood(), $(function ()
                    {
                        var a = localStorage.getItem("PageDepth"); null !== a && (a = JSON.parse(a),
                        a.rst && a.depth && ga("send", "event", "PageDepth", "reach", a.rst, a.depth),
                        localStorage.removeItem("PageDepth"))
                    }), void function ()
                    {
                        var a = "MYFOOTPRINT", b = ELEME.restaurantId;
                        xLocalStorage.getItem(a, function (c)
                        {
                            try
                            {
                                if (c = JSON.parse(c || "[]"), !(c instanceof Array)) throw 0
                            } catch (d) { c = [] } for (var e = 0; e < c.length; e++) if (c[e] === b)
                            {
                                c.splice(e, 1); break
                            } c.unshift(ELEME.restaurantId), xLocalStorage.setItem(a, JSON.stringify(c))
                        })
                    }()
            }, d.prototype.subscribeTopic = function ()
            {
                k.subscribe(n.restaurantInfoDoneTopic, function (a)
                {
                    "undefined" != typeof a.csrfToken && (ELEME.csrfToken = a.csrfToken, delete a.csrfToken),
                    this.updateRestaurantInfo(a)
                }, this), k.subscribe(n.favorFoodInitTopic, function (a) { this.initFavorFood(a), this.initScrollSpy() },
                    this), k.subscribe(n.favorFoodUpdateTopic, function (a, b)
                    {
                        this.updateFavorFood(a, b), this.initScrollSpy({ flush: !0 })
                    }, this), k.subscribe(n.userInfoDoneTopic, function (a)
                    {
                        a.authenticated || (k.cancelSub(n.favorFoodInitTopic), k.cancelSub(n.favorFoodUpdateTopic),
                        this.$el.find(n.favorFoodWrapSelector).addClass("hide"), this.initScrollSpy({ flush: !0 }))
                    }, this)
            }, d.prototype.bindEvents = function ()
            {
                var a = this.$el.find(n.restaurantAsideSelector),
                    b = this.$el.find(n.restaurantInfoHeaderSelector); b.on("click", n.starSelector, function ()
                    {
                        ga("send", "event", "restaurant", "restaurantRating", "headerStar")
                    }), b.on("click", n.subStarSelector, function ()
                    {
                        ga("send", "event", "restaurant", "restaurantRating", "smallStar")
                    }), b.on("click", n.headerCmtSelector, function ()
                    {
                        ga("send", "event", "restaurant", "restaurantComment", "headerDropdown")
                    }), a.on("click", n.asideCmtSelector, function ()
                    {
                        ga("send", "event", "restaurant", "restaurantComment", "aside")
                    }), a.find(n.recoFoodContainerSelector).on("click", n.addBtnSelector, function ()
                    {
                        ga("send", "event", "restaurant", "addFood", "fromRecommendAside")
                    }), a.find(n.favorFoodWrapSelector).on("click", n.addBtnSelector, function ()
                    {
                        ga("send", "event", "restaurant", "addFood", "fromFavorAside")
                    }), a.on("click", ".food_name,.cmt_block", function (a)
                    {
                        e(a).showComment()
                    }).on("click", ".add_btn", function (a)
                    {
                        e(a).handleAdd(a)
                    }).on("click", ".add_main_btn", function (a)
                    {
                        e(a).handleAddMain(a)
                    }).on("click", ".single_main_food", function (a)
                    {
                        var b = e(a), c = $(this).data("foodid"); b.addToMainFood(c), b.clearMenu()
                    }).on("click", "#cancel_clear_cart", function (a)
                    {
                        e(a).clearCartTipMenu()
                    }).on("click", "#clear_cart", function (a)
                    {
                        var b = e(a); b.addToBasket({ force: !0 }), b.clearCartTipMenu()
                    }); var c, d = 0, f = $(window), g = f.height(); f.on("beforeunload", function ()
                    {
                        var a = { rst: ELEME.restaurantId, depth: Math.round((d + g) / g) };
                        localStorage.setItem("PageDepth", JSON.stringify(a))
                    }), f.on("scroll.pageDeep", function ()
                    {
                        c && (window.clearTimeout(c), c = null), c = window.setTimeout(function ()
                        {
                            d = Math.max(d, f.scrollTop())
                        }, 300)
                    })
            }, d.prototype.initScrollSpy = function (a)
            {
                a = a || {}; var b = this.$el.find(n.rstFixTipSelector),
                    c = this.$el.find(n.restaurantAsideSelector),
                    d = c.height() + c.offset().top; a.flush && Eleme.Component.scrollspy("rstFixTip", "flush"),
                Eleme.Component.scrollspy("rstFixTip", {
                    min: d, onEnter: function (a) { b.fadeIn(300) },
                    onLeave: function () { b.fadeOut(300) }
                })
            }, d.prototype.renderRecommendFood = function ()
            {
                var a, b, c, d, e, f = [], h = window.menu || [], j = this.$el.find(n.recommendFoodWrapSelector),
                    k = new m; for (a = h.length; a--;) f = f.concat(h[a].foods.without_image,
                        h[a].foods.with_image); if (c = _.chain(f).filter(function (a)
                        {
                            return 0 !== a.sales && a.price >= 8
                        }).sortBy("sales").reverse().first(5).value(), !(c.length < 5))
                        {
                            for (a = 0, b = c.length; b > a; a++) d = new g(c[a]), e = new i(d),
                                e.render(k); j.append($(k.buffer)),
                                k = null, this.$el.find(n.recoFoodContainerSelector).removeClass("hide")
                        }
            }, d.prototype.renderFavorFood = function (a)
            {
                var b, c, d;
                for (a = a || [], b = 0, c = a.length; c > b; b++) d = a[b],
                    this.updateFavorFood(d, { favor: !0 })
            }, d.prototype.initFavorFood = function (a)
            {
                a = a || []; var b, c, d;
                for (b = 0, c = a.length; c > b; b++) d = new h(a[b]), this.favorFoodViews.push(d);
                this.renderFavorFood()
            }, d.prototype.updateFavorFood = function (a, b)
            {
                var c, d, e, f = [], g = a.values.id; if (b.favor) e = new h(a), this.favorFoodViews.push(e);
                else
                {
                    for 
                    (c = 0, d = this.favorFoodViews.length;
                    d > c; c++) this.favorFoodViews[c].food.values.id !== g && f.push(this.favorFoodViews[c]);
                    this.favorFoodViews = f
                } this.renderFavorFood()
            }, d.prototype.renderFavorFood = function ()
            {
                var a = new m("section"); a.setClass("rst-block").setId("favor_food"), a.pushOpenTag(),
                a.push(n.favorFoodHead),
                0 === this.favorFoodViews.length ? a.push(n.emptyFavorTip) : (this._renderFavorFood(a),
                this.favorFoodViews.length > 5 && a.push(n.moreFavorTip)),
                a.pushCloseTag(), this.$el.find(n.favorFoodWrapSelector).replaceWith(a.buffer)
            }, d.prototype._renderFavorFood = function (a)
            {
                var b, c; for (a.begin("ul"),
                    a.setClass("rst-aside-menu-list favor_list"), a.pushOpenTag(), b = 0,
                    c = Math.min(this.favorFoodViews.length, 5) ; c > b; b++) this.favorFoodViews[b].render(a);
                a.pushCloseTag()
            }, d.prototype.updateRestaurantInfo = function (a)
            {
                a.distance && this.$el.find(n.rstMapDistanceSelector).html(a.distance),
                this.$el.find(n.restaurantDeliverAmountSelector).text(a.deliverAmount),
                this.$el.find(n.mapSelector).attr("src", a.mapUrl)
            }, d.prototype.addFeedback = function (a)
            {
                var b = "http://" + ELEME.mainHost + n.feedbackUrl,
                    c = $.trim($(n.feedbackInputSelector).val());
                return a.preventDefault(),
                    "" === c ? void $(n.feedbackErrorSelector).html("亲爱的用户，您还没有添加反馈意见").removeClass("hide") : ($(n.submitFeedbackSelector).html("正在提交"),
                    void l.request({ url: b, type: "get", dataType: "jsonp", data: { content: c } }).done(function (a, b, c)
                    {
                        $(n.feedbackModalSelector).modal("hide"), $(n.feedbackInputSelector).val(""),
                        $(n.feedbackErrorSelector).html("").addClass("hide"), $(n.submitFeedbackSelector).html("提交")
                    }).fail(function (a)
                    {
                        $(n.feedbackErrorSelector).html(a.msg).removeClass("hide"),
                            $(n.submitFeedbackSelector).html("提交")
                    }))
            }, f = d
    }(k, G, I), K = function ()
    {
        "use strict"; function a(a)
        {
            this.values = a || {},
                this.events = {}, this.init()
        } var b, c = Eleme.Common.Evt, d = Eleme.Common.Http;
        return $.extend(a.prototype, c), a.prototype.init = function ()
        {
            this.setDefaults()
        }, a.prototype.setDefaults = function ()
        {
            _.defaults(this.values, {
                favored: !1, distance: "", deliver_amount: 0
            })
        }, a.prototype.favor = function ()
        {
            this.sync("favor", {}).then($.proxy(this.favorHandler, this))
        }, a.prototype.unFavor = function () { this.sync("unfavor", {}).then($.proxy(this.unFavorHandler, this)) },
            a.prototype.favorHandler = function (a)
            {
                a.success && (this.values.favored = !0,
                    this.trigger("favorStateChange"))
            }, a.prototype.unFavorHandler = function (a)
            {
                a.success && (this.values.favored = !1,
                    this.trigger("favorStateChange"))
            }, a.prototype.sync = function (a, b)
            {
                var c, e, f = b || {},
                    g = { favor: { url: "/favor", type: "post" }, unfavor: { url: "/unfavor", type: "post" } };
                return e = g[a].type, c = "//" + window.location.host + ELEME.baseUrl + "/" + ELEME.restaurantUrl + g[a].url, d.request({ type: e, url: c, data: f })
            }, b = a
    }(), L = function ()
    {
        "use strict"; var a, b = function (a)
        {
            var b = "",
                c = _.escape;
            return b += '<a class="btn-last-page" href="' + c(a.backUrl) + '"><i class="glyph-back"></i>返回</a>'
        }; return a = b
    }(), M = function (a, b)
    {
        "use strict"; function c()
        {
            this.restaurant = new e, this.init()
        } var d, e = a, f = b, g = Eleme.Common.Evt, h = Eleme.Common.Http, i = Eleme.Common.PubSub,
            j = {
                headerWrapSelector: ".rst_header_con", favorBtnSelector: "#rst_fav", mapSelector: ".rst_map",
                restaurantDeliverAmountSelector: ".rst_deliver_amount", restaurantInfoPanelSelector: ".rst_info_panel",
                headDistanceSelector: ".rst_head_distance", restaurantDistanceSelector: ".rst_distance",
                restaurantInfoDoneTopic: "restaurantInfoDone", userInfoDoneTopic: "userInfoDone",
                openLoginPanelTopic: "openLoginPanel", userInfoUrl: "/" + ELEME.restaurantUrl + "/userinfo"
            }; return $.extend(c.prototype, g), c.prototype.init = function ()
            {
                this.$el = $(j.headerWrapSelector),
                    this.listenTo(this.restaurant, "favorStateChange", $.proxy(this.favorStateHandler, this)),
                this.bindEvents(), this.subscribeTopic()
            }, c.prototype.bindEvents = function ()
            {
                var a = this; this.$el.on("click", j.favorBtnSelector,
                    function (b)
                    {
                        ELEME.authed ? a.restaurant.values.favored ? a.restaurant.unFavor() : a.restaurant.favor() : i.publish(j.openLoginPanelTopic)
                    }), this.$el.on("click", j.favorBtnSelector, function ()
                    {
                        ga("send", "event", "restaurant", "favorRestaurant")
                    })
            }, c.prototype.subscribeTopic = function ()
            {
                i.subscribeOnce(j.restaurantInfoDoneTopic, function (a)
                {
                    this.updateRestaurantInfo(a)
                }, this), i.subscribeOnce(j.userInfoDoneTopic, function (a)
                {
                    this.fetchRstInfo(), this.addBackIcon(a.geohash)
                }, this)
            }, c.prototype.fetchRstInfo = function ()
            {
                var a = ELEME.baseUrl + j.userInfoUrl; h.request({
                    type: "get", url: a, cache: !1
                }).done(function (a, b, c) { i.publish(j.restaurantInfoDoneTopic, a) }).fail(function (a) { })
            }, c.prototype.updateRestaurantInfo = function (a)
            {
                this.restaurant.values = a,
                this.restaurant.values.distance ? this.$el.find(j.restaurantDistanceSelector).html(this.restaurant.values.distance) : this.$el.find(j.headDistanceSelector).addClass("hide"),
                this.$el.find(j.mapSelector).attr("src", a.mapUrl),
                this.$el.find(j.restaurantDeliverAmountSelector).html(this.restaurant.values.deliverAmount),
                this.$el.find(j.restaurantInfoPanelSelector).show(), this.favorStateHandler()
            }, c.prototype.addBackIcon = function (a)
            {
                var b;
                b = a ? ELEME.isRestaurantPremium ? "http://" + ELEME.rootHost + "/premium/" + a : "http://" + ELEME.rootHost + "/place/" + a : "http://" + ELEME.rootHost,
                this.$el.prepend(f({ backUrl: b }))
            }, c.prototype.favorStateHandler = function ()
            {
                var a, b = this.$el.find(j.favorBtnSelector),
                    c = b.find("span"); this.restaurant.values.favored ? (a = c.data("faved"),
                b.addClass("ui_faved"), c.text(a)) : (a = c.data("unfaved"), b.removeClass("ui_faved"), c.text(a))
            }, d = c
    }(K, L), N = function ()
    {
        "use strict"; function a() { this.$el = null, this.active = !1, this.init() } var b,
            c = Eleme.Common.PubSub, d = {
                loginModalSelector: "#modal_iLogin", iframeSelector: ".login_frame",
                openLoginPanelTopic: "openLoginPanel"
            }; return a.prototype.init = function ()
            {
                this.$el = $(d.loginModalSelector), this.bindEvents(),
                    this.subscribeTopic()
            }, a.prototype.bindEvents = function ()
            {
                this.$el.on("hidden.bs.modal", $.proxy(this.hide, this)),
                    this.$el.on("shown.bs.modal", $.proxy(this.setPage, this)), $(window).on("message.login",
                    $.proxy(this.handleMsg, this))
            }, a.prototype.subscribeTopic = function ()
            {
                c.subscribe(d.openLoginPanelTopic, function ()
                {
                    window.open("//" + ELEME.accountHost + "/login", "_blank")
                }, this)
            }, a.prototype.open = function () { this.$el.modal("show") }, a.prototype.hide = function ()
            {
                this.active = !1
            }, a.prototype.setPage = function ()
            {
                var a = this.$el.find(d.iframeSelector), b = this.getPageUrl();
                a.attr("src", b)
            }, a.prototype.getPageUrl = function ()
            {
                return "https://account." + ELEME.rootHost + ELEME.baseUrl + "/ilogin"
            }, a.prototype.handleMsg = function (a)
            {
                var b = a.originalEvent.origin, c = a.originalEvent.data;
                b === "https://account." + ELEME.rootHost && "string" == typeof c && (c = JSON.parse(c), c.success && this.handleSuccess())
            }, a.prototype.handleSuccess = function () { window.location.reload(!0) }, b = a
    }(); !function (a, b, c, d, e, f)
    {
        "use strict"; var g = a, h = b, i = c, j = d, k = e, l = f;
        Eleme.View = { views: {}, uuid: 0 }; var m = (new g, new h); new i, new j, new k, new l;
        m.fetch(), $(document).ready(function () { $("img[data-srcset]").srcset() })
    }(i, t, E, J, M, N)
}();