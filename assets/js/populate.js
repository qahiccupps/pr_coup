const comment_field = document.getElementById("new_comment_field")
const comment_field_buttons_panel = document.getElementById("partial-new-comment-form-actions")

var btn = document.createElement("BUTTON")
var t = document.createTextNode("Inject Comment");
btn.appendChild(t);
btn.type="button"
comment_field_buttons_panel.appendChild(btn);
btn.onclick = function() {
  comment_field.value=`
Emma is awesome.

Dad is stinky! 🤪
`
}





