// TODO:
// - js2-mode
// - monospace font

interactive("fill-domain", "Fill the minibuffer with the current domain.",
  function (I) {
	      var field = I.minibuffer.input_element;
	      var paths = String(I.window.content.location).split('/');
	      var domain = paths[0] + "/" + paths[1] + "/" + paths[2] + "/";
	      field.value = domain;
});

interactive("tinyurl", "Create a TinyURL for the current URL",
  function(I) {
    I.window.content.location.href = 'http://tinyurl.com/create.php?url=' +
        encodeURIComponent(I.window.content.location.href);
});

define_key(minibuffer_keymap, kbd("/", MOD_CTRL), "fill-domain");

add_webjump("hub", "http://github.com/search?q=%s");
add_webjump("wikipedia", "http://www.google.com/search?q=wikipedia+%s&btnI=I'm Feeling Lucky");
add_delicious_webjumps ("technomancy");

url_remoting_fn = load_url_in_new_buffer;
url_completion_use_history = true;
can_kill_last_buffer = false;

register_user_stylesheet(
    "data:text/css,"+
        escape("#minibuffer, tree.completions, .mode-line { font-family: Inconsolata; font-size: 12pt; }"));


function killstyle () {
  var ss =
  window_watcher.activeWindow.buffers.current.browser
    .contentDocument.getElementsByTagName('style');
   for (i = ss.length; i >= 0; i--) {
     ss[i].parentNode.removeChild(ss[i]);
   }
 }