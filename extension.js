/**
 Copyright 2012 Sebastian Ventura
 This file is part of Remove Accesibility.

 Remove Accesibility is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 Foobar is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with Remove Accesibility.  If not, see <http://www.gnu.org/licenses/>.
**/

const Panel = imports.ui.main.panel;

function init() {}

function enable() {
  Panel._statusArea.a11y.actor.hide();
}

function disable() {
  Panel._statusArea.a11y.actor.show();
}
