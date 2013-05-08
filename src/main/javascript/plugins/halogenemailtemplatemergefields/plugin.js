/*
Copyright (c) 2003-2010, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.plugins.add('halogenemailtemplatemergefields', {
    requires: ['richcombo'],
    init: function (a) {
        var b = a.config,
            c = a.lang.format,
            d = '',
            e = 120,
            f = 120;
        a.ui.addRichCombo('halogenemailtemplatemergefields', {
            label: CKEDITOR.lang.insertTags ? CKEDITOR.lang.insertTags : 'Insert tags',
            title: CKEDITOR.lang.insertTags ? CKEDITOR.lang.insertTags : 'Insert tags',
            voiceLabel: CKEDITOR.lang.insertTags ? CKEDITOR.lang.insertTags : 'Insert tags',
            className: 'cke_format',
            multiSelect: false,
            panel: {
                css: [b.contentsCss, CKEDITOR.getUrl(CKEDITOR.skin.path() + 'editor.css')],
                voiceLabel: c.panelVoiceLabel
            },
            init: function () {
                var i = this;
                var g = a.config;
                if (g && g.tokenselector && g.tokenselector.init) g.tokenselector.init.call(i, i, a);
                else {
                    i.startGroup('Tags');                    
                    for (var h = 0; h < g.totalTags; h++) i.add(g.tags[h][0], unescape(g.tags[h][1]), unescape(g.tags[h][2]));
                }
            },
            onClick: function (g, h) {
                a.focus();
                a.fire('saveSnapshot');
                a.insertHtml(unescape(g));
                a.fire('saveSnapshot');
                CKEDITOR.tools.setTimeout(function () {
                    this.unmarkAll();
                    this.setValue('');
                }, 0, this);
            },
            onOpen: function () {
                var q = this;
                if (q._ && q._.panel && q._.panel.element && q._.panel.element.$) {
                    var g = q._.panel.element.$,
                        h = g.getElementsByTagName('IFRAME');
                    if (h) {
                        h = h[0];
                        if (d.length == 0) {
                            var i = h.contentDocument || h.contentWindow.document;
                            for (var j in q._.list._.items) {
                                var k = i.getElementById(q._.list._.items[j]),
                                    l = k.innerText || k.textContent;
                                if (d.length < l.length) d = l + 20;
                            }
                            var m = h.parentNode,
                                n = document.createElement('div'),
                                o = {
                                    position: 'absolute',
                                    visibility: 'hidden',
                                    overflow: 'scroll'
                                };
                            for (var p in o) n.style[p] = o[p];
                            n.appendChild(document.createTextNode(d));
                            m.appendChild(n);
                            e = n.offsetWidth + Math.max(0, n.offsetWidth - n.clientWidth);
                            m.removeChild(n);
                        }
                        h.parentNode.style.width = Math.max(f, e) + 'px';
                    }
                }
            }
        });
    }
});