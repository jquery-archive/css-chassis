module.exports = {
    options: {
        clean: true
    },
    perf: {
        options:{
            destPrefix: "external/"
        },
         files: {
            "bootstrap/css/bootstrap.min.css": "bootstrap/dist/css/bootstrap.min.css",

            "bootstrap/fonts/": "bootstrap/dist/fonts/",

            "dijit/themes/claro/": "dijit/themes/claro",

            "foundation/css/foundation.css": "foundation/css/foundation.css",
            "foundation-icon-fonts/": "foundation-icon-fonts/",

            "jquery-mobile/css/themes/default/":
                "jquery-mobile/css/themes/default/",

            "jquery-ui/themes/base/": "jquery-ui/themes/base/",

            "kendo-ui/styles/kendo.common.min.css": "kendo-ui/styles/kendo.common.min.css",
            "kendo-ui/styles/kendo.default.min.css": "kendo-ui/styles/kendo.default.min.css",
            "kendo-ui/styles/kendo.mobile.all.min.css": "kendo-ui/styles/kendo.mobile.all.min.css",

            "semantic-ui/dist/": "semantic-ui/dist/",

            "topcoat/css/topcoat-mobile-dark.css": "topcoat/css/topcoat-mobile-dark.css",
            "topcoat-icons/font/": "topcoat-icons/font/",
            "topcoat/css/topcoat-desktop-dark.css":
                "topcoat/css/topcoat-desktop-dark.css"

         }
    }

}
