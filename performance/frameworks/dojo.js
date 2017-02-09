module.exports = {
	css: [ "//ajax.googleapis.com/ajax/libs/dojo/1.10.3/dijit/themes/claro/claro.css" ],
	button: {
		generator: function( options ) {
			var button = "<span class='claro'><span class='dijit dijitReset " +
				"dijitInline dijitButton'>" +
				"<span class='dijitReset dijitInline dijitButtonNode'>" +
				"<span class='dijitReset dijitStretch dijitButtonContents'>" +
				"<span class='dijitReset dijitInline dijitIcon";

			// Show icon if Icon is set, or button type is only-icon
			if ( options.icon || options.type ) {
				button += " dijitEditorIcon dijitEditorIcon" + options.icon;
			} else {
				button += " dijitNoIcon";
			}

			button += "'></span>" +
				"<span class='dijitReset dijitToggleButtonIconChar'>●</span>" +
				"<span class='dijitReset dijitInline dijitButtonText ";

			// Check if Button text is to be displayed
			if ( options.type ) {
				button += " dijitDisplayNone";
			}

			button += " '>button</span></span></span>" +
				"<input type='button' value='' class='dijitOffScreen' " +
				"aria-hidden='true'></span></span>";
			return button;
		},
		variations: {
			type: [
				"",
				"icon-only"
			],

			icon: [
				"",
				"Cut",
				"Save",
				"Bold",
				"Underline",
				"Copy"
			]

		}
	},
	checkbox: {
		generator: function( options ) {
			var checkbox = "<span class='claro'><div class='dijit dijitReset" +
				" dijitInline dijitCheckBox",
				input = "<input type='checkbox' class='dijitReset dijitCheckBoxInput' ";
			if ( options.checked ) {
				checkbox += " dijitCheckBoxChecked dijitChecked";
				input += " checked='checked'";
			}
			if ( options.disabled ) {
				checkbox += " dijitCheckBoxDisabled dijitDisabled";
				input += " disabled=''";
			}
			if ( options.checked && options.disabled ) {
				checkbox += " dijitCheckBoxCheckedDisabled dijitCheckedDisabled";
			}
			return checkbox + "' >" + input + " />" + "</div><label>checkbox</label></span>";

		},
		variations: {
			checked: [
				false,
				true
			],
			disabled: [
				false,
				true
			]
		}
	}
};
