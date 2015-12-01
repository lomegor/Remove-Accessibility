/**
 Copyright 2012 Sebastian Ventura
 Copyright 2012 Meng Zhuo
 Copyright 2015 Mario Sanchez Prada
 This file is part of Remove Accessibility.

 Remove Accessibility is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 Foobar is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with Remove Accessibility.  If not, see <http://www.gnu.org/licenses/>.
**/

const Lang = imports.lang;
const Main = imports.ui.main;

const A11yStatusIconHelper = new Lang.Class({
    Name: 'A11yStatusIconHelper',

    _init: function() {
        // Get a reference to the right accessibility icon.
        let a11yElement = null;
        if (typeof Main.panel._statusArea === 'undefined') {
            a11yElement = Main.panel.statusArea.a11y;
        } else {
            a11yElement = Main.panel._statusArea.a11y;
        }

        // The ClutterActor representing the icon in the panel.
        this._iconActor = a11yElement.actor;

        // Id for the handler used to connect to GSetting's signals.
        this._handlerId = 0;
    },

    _onIconVisibilityChanged: function(actor) {
        if (actor.is_visible()) {
            actor.hide();
        }
    },

    hideA11yElement: function() {
        // Monitor changes to the icon's visibilty, so that we
        // ensure the icon always keeps hidden, no-matter-what.
        this._handlerId = this._iconActor.connect('notify::visible',
                                                  Lang.bind(this, this._onIconVisibilityChanged));
        this._iconActor.hide();
    },

    restoreA11yElement: function() {
        if (this._handlerId) {
            this._iconActor.disconnect(this._handlerId);
            this._handlerId = 0;
        }
        this._iconActor.show();
    }
});

let _a11yHelper = null;

function init() {
}

function enable() {
    _a11yHelper = new A11yStatusIconHelper();
    _a11yHelper.hideA11yElement();
}

function disable() {
    _a11yHelper.restoreA11yElement();
}
