(function(e,t){t.create("tinymce.plugins.HtmlEditorStylingHook",{init:function(t,n){var r=e("#"+t.editorId);if(r.length&&r.attr("data-mce-body-class")){t.settings.body_class=t.settings.body_class+" "+r.attr("data-mce-body-class")}},getInfo:function(){return{longname:"HtmlEditorStylingHook",author:"Loz Calver",authorurl:"https://github.com/kinglozzer",version:t.majorVersion+"."+t.minorVersion}}});t.PluginManager.add("htmleditorstylinghook",t.plugins.HtmlEditorStylingHook)})(jQuery,tinymce)