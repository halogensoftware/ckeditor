/*
Copyright (c) 2003-2010, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.plugins.add('halogencheckspelling', {
    init: function (a) {
        var b = 'halogencheckspellingcmd';
        a.ui.addButton(b, {
            label: a.lang.wsc.toolbar,
            icon: this.path + 'spell-check.gif',
            click: function (c) {
                var d = false,
                    e = CKEDITOR.basePath,
                    f = CKEDITOR.basePath.replace('/ckeditor', ''),
                    g = f + 'util/spellChecker_cfg_function.jsp';
                CKEDITOR.scriptLoader.load(g, function (m) {
                    if (m) d = true;
                }, this, false);
                var h = f + 'css/spellChecker.css',
                    i = document.getElementById(h);
                if (i == null) {
                    var j = new CKEDITOR.dom.element('link');
                    j.setAttributes({
                        rel: 'stylesheet',
                        type: 'text/css',
                        href: h,
                        id: h
                    });
                    j.appendTo(CKEDITOR.document.getHead());
                }
                var k = null;
                if ($('languages')) k = HALOGEN_TO_SPELL_CHECKER_LANGUAGE_MAP[$('languages').options[$('languages').selectedIndex].value];
                else k = CK_EDITOR_TO_SPELL_CHECKER_LANGUAGE_MAP[a.config.language]; if (!k) {
                    alert('SpellChecker: Unsupported language!');
                    return;
                }
                var h = CKEDITOR.basePath.replace('/common/ckeditor/', ''),
                    l = function () {
                        if (d) {
                            var m = getSpellCheckerConfig();
                            m.url = h;
                            m.language = k;
                            m.elements = [a.name];
                            var n = new HalogenSpellChecker(m);
                            n.show();
                        } else setTimeout(l, 100);
                    };
                l();
            }
        });
    }
});