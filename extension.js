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

//const Lang = imports.lang;
//const Main = imports.ui.main;
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';

class A11yStatusIconHelper {
    constructor() {
        // Get a reference to the right accessibility icon.
        let a11yElement = null;
        if (typeof Main.panel._statusArea === 'undefined') {
            a11yElement = Main.panel.statusArea.a11y;
        } else {
            a11yElement = Main.panel._statusArea.a11y;
        }

        // The ClutterActor representing the icon in the panel.
        this._iconActor = a11yElement /* .actor */ ; // "usage of actor is deprecated"

        // Id for the handler used to connect to GSetting's signals.
        this._handlerId = 0;
    }

    _onIconVisibilityChanged(actor) {
        if (actor.is_visible()) {
            actor.hide();
        }
    }

    hideA11yElement() {
        // Monitor changes to the icon's visibilty, so that we
        // ensure the icon always keeps hidden, no-matter-what.
        this._handlerId = this._iconActor.connect('notify::visible',
                                                  (a) => this._onIconVisibilityChanged(a));
        this._iconActor.hide();
    }

    restoreA11yElement() {
        if (this._handlerId) {
            this._iconActor.disconnect(this._handlerId);
            this._handlerId = 0;
        }
        this._iconActor.show();
    }
};

let _a11yHelper = null;

export default class RemoveAccessibility extends Extension {
    enable() {
        _a11yHelper = new A11yStatusIconHelper();
    _a11yHelper.hideA11yElement();
    }

    disable() {
        _a11yHelper.restoreA11yElement();
    }
}
