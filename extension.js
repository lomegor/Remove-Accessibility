const Panel = imports.ui.main.panel;

function init() {}

function enable() {
  Panel._statusArea.a11y.actor.hide();
}

function disable() {
  Panel._statusArea.a11y.actor.show();
}
