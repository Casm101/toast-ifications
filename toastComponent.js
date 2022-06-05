/************************
 Toast-ifications (toast notification component library).

 Toast-ifications v1.0
 Created: 25-04-2022

 Toast component.
*/


// Sample object to use || feel free to copy and paste
let toastSampleObj = {
    notificationType: 		'error',
	notificationAction:		'none',
	title:					'Workout Completed!',
	message:				'You have Successfully completed your workout, congrats! Keep up the good work!',
	messageExtended:		false,
	theme:					'dark',
	time:					'2022-02-04 0:35:00',
	icon:					'notifications-outline',
	animated:				true,
	autodelete:				false
};

// Declaration of toast notification component, render with care ♥
class ToastNotification {

    constructor(paramsObj) {

        this.notificationType 	= paramsObj.notificationType	|| 'info';
		this.notificationAction	= paramsObj.notificationAction	|| 'none';
		this.title 				= paramsObj.title				|| 'Something happened';
		this.message 			= paramsObj.message				|| `Here's some more specific information on what happened`;
		this.messageExtended	= paramsObj.messageExtended		|| false;
		this.theme				= paramsObj.theme				|| 'light';
		this.time				= new Date(paramsObj.time)	 	|| new Date();
		this.icon				= paramsObj.icon				|| 'bicycle';
		this.animated			= paramsObj.animated			|| false;
		this.autodelete			= paramsObj.autodelete			|| false;
    }

	timeSinceNotification() {

		const currentTime = new Date();
		const timeDiff = currentTime - this.time;

		const minutesDiff = Math.floor(timeDiff / 1000 / 60);
		const hoursDiff = Math.floor(timeDiff / 1000 / 60 / 60);
		const daysDiff = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
		const monthsDiff = Math.floor(timeDiff / 1000 / 60 / 60 / 24 / 30);

		let word;

		if (minutesDiff < 60 ) {

			let word = minutesDiff == 1 ? 'minute' : 'minutes';
			return `${minutesDiff} ${word} ago`;
		}

		if (1 <= hoursDiff && hoursDiff < 24) {

			let word = hoursDiff == 1 ? 'hour' : 'hours';
			return `${hoursDiff} ${word} ago`;
		}

		if (1 <= daysDiff && daysDiff < 30) {

			let word = daysDiff == 1 ? 'day' : 'days';
			return `${daysDiff} ${word} ago`;
		}

		if (1 <= monthsDiff) {

			let word = monthsDiff == 1 ? 'month' : 'months';
			return `${monthsDiff} ${word} ago`;
		}
	}

	enableAnimations() {

		if (this.animated) return 'animations-enabled';
		if (!this.animated) return 'animations-dissabled';
	}

	autoDelete() {

		if (this.autodelete) return `auto-delete="${this.autodelete}"`;
		return '';
	}

    getHtml() {

        return `
			<div class="toastNotification notification_${this.notificationType} ${this.enableAnimations()}" ${this.autoDelete()}>

				<div class="notification_icon">
					<ion-icon name="${this.icon}"></ion-icon>
				</div>

				<div class="notification_text">
					<p class="text_title">${this.title}</p>
					<p class="text_message">${this.message}</p>
					<p class="text_time">${this.timeSinceNotification()}</p>
				</div>

				<div class="notification_close">
					<ion-icon name="close" onclick="this.closest('.toastNotification').remove()"></ion-icon>
				</div>

				<div class="notification_timeout"></div>
			</div>
        `;
    }
}


// Check for the creation of a toast notification
const observer = new MutationObserver((change) => {

  change[0].addedNodes.forEach( newNode => {

	  if (newNode.tagName == 'DIV' && newNode.classList.contains('toastNotification') && newNode.getAttribute('auto-delete')) {

		  console.log(newNode);
		  newNode.querySelector('.notification_timeout').style = `animation: ${newNode.getAttribute('auto-delete')/1000}s ease-in reduceWidth`;
		  setTimeout( () => {
			  newNode.closest('.toastNotification').outerHTML = '';
		  }, newNode.getAttribute('auto-delete'));
	  }
  });
});

observer.observe(document.querySelector('html'), {attributes: true, childList: true, subtree: true,});

document.querySelector('html').insertAdjacentHTML('beforeend', new ToastNotification(toastSampleObj).getHtml());
