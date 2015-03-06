module.exports = {
    css: [
    "//cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-mobile-dark.css",
    "//cdnjs.cloudflare.com/ajax/libs/topcoat-icons/0.2.0/font/icomatic.css"
    ],
    button: {
        generator: function( options ) {
            // We need to check whether its a normal button or icon button, as markup and type differs
            if ( options.type=="text" ) {

                var button = "<button class='topcoat-button"+ options.size + options.state+ "' >";
                if ( options.icon ) {
                    button = button + "<span class='topcoat-icon icomatic'>" + options.icon
                        + "</span>";
                }
                return button + " Button </button>";
            }
            else {
                //If it is a Icon button we need to always add icon
                if ( !options.icon ) {
                    options.icon = ""
                }

                //Icon Buttons donot support the cta button type, hence check and remove it
                if( options.state === '--cta' ) {
                    options.state=''
                }

                var button = "<button class='topcoat-icon-button"+ options.size +
                    options.state+ "' >" + "<span class='topcoat-icon" + options.size +
                    options.state + " icomatic'>" + options.icon + "</span></button>";

                return button ;

            }
        },
        variations: {
            type: [
                "text",
                "icon",
            ],

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
