# 🍞 Toast-ifications


## Table of Contents

* [About the Project](./readme.md/#about-the-project)
  * [Built With](./readme.md/#built-with)
* [Getting Started](./readme.md/#getting-started)
  * [Vanilla Javascript](./readme.md/#vanillajs)
  * [ReactJS](./readme.md/#reactjs)
* [Option Examples](./readme.md/#option-examples)
* [Roadmap](./readme.md/#roadmap)
* [Author](./readme.md/#author)

## About the project
Toastifications is a toast notification component library, for create simple and elegant notifications for your web based site or application.

### Tech Stack

**VanillaJS:** Vanilla JS, SCSS (CSS preprocessor), HTML

**ReactJS:** React.JS, Vite (dev testing), SCSS (CSS preprocessor), HTML



## GettingStarted

Toastifications is currently availible for VanillaJS and ReactJS, more framework supposrt is comming soon! To get started find your corresponding framework below:

### 🍦 Vanilla JS

#### Installation

Install toast-ifications by linking the script and style files in your project.

```html
<script src="./toastComponent.js" charset="utf-8" defer></script>
<link rel="stylesheet" href="./toastStyle.css">
```

#### Usage

To get started you need to init the `ToastNotification` class and set some options.

```javascript
new ToastNotification({notificationType: 'info', message: 'Hello World'}).render();
```


### ⚛️ React JS

#### Installation

Install toast-ifications by importing the componet file into your project.

```javascript
import ToastNotification from './components/toastNotification';
```

#### Usage

To get started you need to init the `ToastNotification` class and set some options.

```javascript
<ToastNotification notificationData={{notificationType: 'info', message: 'Hello World'}}/>
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

## Roadmap

- Improved responsive design

- Angular and Vue support

- Better documentation


## Author

- [@casm101](https://www.github.com/casm101)
