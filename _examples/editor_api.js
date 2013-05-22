/**
 * 开发版本的文件导入
 */
(function (){
    var paths  = [
            'editor.js',
            'core/browser.js',
            'core/utils.js',
            'ui/widget.js',
            'ui/jq.extend.js',
            'ui/button.js',
            'ui/toolbar.js',
            'ui/dropmenu.js',
            'ui/splitbutton.js',
            'ui/popup.js',
            'ui/colorpicker.js',
            'ui/modal.js',
            'ui/tooltip.js',
        ],
        baseURL = '../_src/';
    for (var i=0,pi;pi = paths[i++];) {
        document.write('<script type="text/javascript" src="'+ baseURL + pi +'"></script>');
    }
})();
