import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import '../js/bootstrap_js_files.js'
import '../packs/application.scss'
import "@fortawesome/fontawesome-free/css/all.css"

import "trix"
import "@rails/actiontext"

window.jQuery = $;
window.$ = $;

global.toastr = require("toastr")

Rails.start()
Turbolinks.start()
ActiveStorage.start()
