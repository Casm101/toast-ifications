/************************
 CorzzoFit v2 by Marweblous.

 CorzzoFit v2.0
 Created: 25-04-2022

 Toast component.
*/


// Sample object to use || feel free to copy and paste
let toastSampleObj = {
    notificationType: 		'success',
	notificationAction:		'none',
	title:					'Workout Completed!',
	message:				'You have Successfully completed your workout, congrats! Keep up the good work!',
	messageExtended:		false,
	theme:					'light'
};

// Declaration of filter bar component, render with care ♥
class ToastNotification {

    constructor(paramsObj) {

        this.notificationType 	= paramsObj.notificationType	|| 'info';
		this.notificationAction	= paramsObj.notificationAction	|| 'none';
		this.title 				= paramsObj.title				|| 'Something happened';
		this.message 			= paramsObj.message				|| `Here's some more specific information on what happened`;
		this.messageExtended	= paramsObj.messageExtended		|| false;
		this.theme				= paramsObj.theme				|| 'light';
    }

    getHtml() {

        return `
			<div class="toastNotification notification_success">

				<div class="notification_icon">
					<ion-icon name="bicycle"></ion-icon>
				</div>

				<div class="notification_text">
					<p class="text_title">Workout Completed!</p>
					<p class="text_message">You have Successfully completed your workout, congrats! Keep up the good work!</p>
					<p class="text_time">5 minutes ago</p>
				</div>

				<div class="notification_close">
					<ion-icon name="close" onclick="this.closest('.toastNotification').remove()"></ion-icon>
				</div>

			</div>
        `;
    }
}


//componentRender_append(new ToastNotification(filterBarObj).getHtml(), '.tempTester');
document.querySelector('.tempTester').classList.remove('hidden');
