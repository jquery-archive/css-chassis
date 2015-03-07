module.exports = {
    css: [
    "//cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-mobile-dark.css",
    "//cdnjs.cloudflare.com/ajax/libs/topcoat-icons/0.2.0/font/icomatic.css"
    ],
    button: {
        generator: function( options ) {
            var button = "<button class='";
            var icon = "";
            var buttonText = " Button";
            var buttonClass = 'topcoat' + options.type + '-button'+ options.size;

            //Icon Buttons donot support the cta button type
            if( options.type !== '-icon' || options.state !== '--cta' ) {
                buttonClass = buttonClass + options.state;
            }
            button = button + buttonClass + "'>";

            //Add icon only if it is a icon-button or there is an icon set
            if( options.icon !== "" || options.type === "-icon" ) {
                icon = "<span class='";
                iconClass="topcoat-icon";

                //If it is an icon button, add size to class and reset buttonText
                if( options.type === "-icon" ) {
                    buttonText = "";
                    iconClass = iconClass+options.size;
                }
                icon = icon + iconClass +" icomatic'>" + options.icon + "</span>";
            }
            return button + icon + buttonText + "</button>";
        },
        variations: {
            type: [
                "",
                "-icon",
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
                "",
                "location",
                "home",
                "alert"
            ]

        }
    },
};
