let myTextarea = document.querySelector('.text_val_add');

var editor = CodeMirror.fromTextArea(myTextarea, {
  lineNumbers: true,
    mode: "htmlmixed",
    theme: "material-darker",
});