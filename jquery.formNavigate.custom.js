/**
 * jQuery.FormNavigate.js
 * jQuery Form onChange Navigate Confirmation plugin
 *
 * Copyright (c) 2012 Kévin Dunglas <kevin@les-tilleuls.coop>
 * Copyright (c) 2009 Law Ding Yong
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * See the LICENSE file for copying permission.
 */

// Global Variable for onChange Flag
var global_formNavigate = true;
(function ($) {
    $.fn.formNavigate = function(message) {
        window.onbeforeunload = function (event) {
            if (!global_formNavigate) {
                return message;
            }
        }
        
        $(':input', this).change(function() {
            global_formNavigate = false;
        });
        
        // To handle back button
        $(':input', this).keyup(function(){
            global_formNavigate = false;
        });
        
        $('input[type="submit"]', this).click(function(){
            global_formNavigate = true;
        });

        return this;
    }
})(jQuery);