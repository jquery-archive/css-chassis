module.exports = {
    css: [ "//cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-desktop-dark.css",
    "//cdnjs.cloudflare.com/ajax/libs/topcoat-icons/0.2.0/font/icomatic.css" ],
    button: {
        generator: function( options ) {
            var button = "<button class='topcoat-button"+ options.size + options.state+ "' >";
            if ( options.icon ) {
                button = button + "<span class='topcoat-icon icomatic'>" + options.icon + "</span>";
            }
            return button + " Button </button>";
        },
        variations: {
            size: [
                "",
                "--large",
            ],

            state: [
                "",
                "--cta",
                "--quiet",

            ],
            icon: [
                false,
                "location",
                "home",
                "alert"
            ]

        }
    },

};
