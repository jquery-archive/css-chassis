<script>{
	"title": "Chassis SCSS Style Guide"
}</script>

This page outlines the style guide for SCSS for the jQuery Chassis project.

## Comments

SCSS comments should follow the valid CSS comment guidelines outlined in the jQuery contribute CSS style guide.

```scss
/* Good single line comment */

/*
* Good example of a multi-line comment.
* If your comment takes up multiple lines, please do this.
*/
```

## Cascading

Avoid cascading as often as possible and follow the `BEM` naming conventions. If cascading is necessary avoid cascading selectors that are more than 3 selectors long.

```scss
/* 
* Example without BEM using cascading 
* (Please avoid this)
*/
.login {
	.submit {
		.disabled {

		}
	}
}

/* Good example using BEM */
.login {
	/* Block */
	&__submit {
		/* Element */
		&--disabled {
			/* Modifier */
		}
	}
}
```

## Rule Order

To keep CSS consistant and easy to navigate please use the following order for each rule:

1. scoped variables
2. @extend
3. @include
4. regular styles
	- Sort declarations based on type such as padding/margin, position/top/right/bottom/left etc.
5. pseudo classes and elements
6. media queries
7. nested selectors / BEM Elements / BEM Modifiers

## Breakpoints

Breakpoints should be named using variables. They should be identified by relative size not by a specific device size. This way the values are easily configurable for the user.

```scss
/* Yes */
$breakpoint-xs: 400px;
$breakpoint-sm: 768px;
$breakpoint-md: 920px;
$breakpoint-lg: 1200px;

/* No */
$iphone: 320px;
$ipad: 768px;
```

## Media Queries

Media Queries should always use the predefined breakpoints mentioned above. When adding multiple media queries to a selector sort them from smallest to largest.

```scss
.button {
	font-weight: 100;
	@media (min-width: $breakpoint-sm) {
		font-weight: normal;
	}
	@media (min-width: $breakpoint-md) {
		font-weight: bold;
	}
}
```

## Mobile First

All responsive styles should be written using mobile first design. In the example below the initial definition of .button's font size is for small devices and then using a min width media query the originial style is overwritten for larger devices.

```scss
.button {
	font-size: $small-font-size;
	@media (min-width: $breakpoint-md) {
		font-size: $medium-font-size;
	}
	@media (min-width: $breakpoint-lg) {
		font-size: $large-font-size;
	}
}
```

## @extend / Placeholder Selectors

In general using @extend should be avoided. When using @extend placeholder selectors should be used in favor of regular selectors. [This article](http://www.smashingmagazine.com/2015/05/extending-in-sass-without-mess/) goes over some tips and explains good use cases for @extend. Mixins are also a great way to avoid @extend and will work inside media queries unlike @extend.

## Magic Numbers

[Magic Numbers](https://css-tricks.com/magic-numbers-in-css/) should be avoided but if used should include a comment stating what it is for and why it's needed.

## Accessibility

- Define :focus, :active and :hover for hover states on links and buttons
- :active and :focus should also be styled for form elements such as input, textarea and select
- Use unitless definitions for line-height to better support users who increase their font size
- Colors selected should have a high enough contrast for color blind users
