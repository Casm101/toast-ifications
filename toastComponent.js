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
			<div class="toastNotification">



			</div>
        `;
    }
}


//componentRender_append(new ToastNotification(filterBarObj).getHtml(), '.tempTester');
document.querySelector('.tempTester').classList.remove('hidden');
