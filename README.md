
# 🍞 Toast-ifications

Toastifications is a Vanilla JS (expanding to your favorite frameworks soon!), toast notification style library, for create simple and elegant notifications for your web based site or application.

## Installation

Install toast-ifications by linking the script and style files in your project.

```html
<script src="./toastComponent.js" charset="utf-8" defer></script>
<link rel="stylesheet" href="./toastStyle.css">
```

## Usage

To get started you need to init the `ToastNotification` class and set some options.

```javascript
new ToastNotification({notificationType: 'info', message: 'Hello World'}).render();
```


## Option examples

Here is an exaple object to render a personalised component, none of the options are stctly required, but i do reccomend at least setting the `notificationType` and `message`.

The rest of the options, if not set, are set to default values.

```javascript
{
    notificationType: 		'error',
	notificationAction:		'none',
	title:					'Workout Completed!',
	message:				'You have Successfully completed your workout, congrats! Keep up the good work!',
	messageExtended:		false,
	theme:					'dark',
	time:					'2022-06-04 0:35:00',
	icon:					'hammer-outline',
	animated:				true,
	autodelete:				false
}
```


## Author

- [@casm101](https://www.github.com/casm101)
