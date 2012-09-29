/**
 Copyright 2012 Sebastian Ventura
 Copyright 2012 Meng Zhuo
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

const Main = imports.ui.main;

function init() {}

function enable() {
    Main.panel.statusArea.a11y.actor.hide();
}

function disable() {
    Main.panel.statusArea.a11y.actor.show();
}
