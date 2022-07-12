import './Playground.scss';
import ToastNotification from './components/toastNotification';


// Sample object to use || feel free to copy and paste
let toastSampleObj = {
    notificationType: 		'success',
	notificationAction:		'none',
	title:					'Workout Completed!',
	message:				'You have Successfully completed your workout, congrats! Keep up the good work!',
	messageExtended:		false,
	theme:					'dark',
	time:					'2022-06-04 0:35:00',
	icon:					'default',
	animated:				true,
	autodelete:				false
};

function Playground() {

	return (
		<div className="playgroundContainer">

			<ToastNotification notificationData={toastSampleObj} />

			<ToastNotification notificationData={{notificationType: 'warning'}} />

			<ToastNotification notificationData={{notificationType: 'error', animated: true}} />

			<ToastNotification notificationData={{notificationType: 'info'}} />

		</div>
	)
};

export default Playground;
