import React from 'react';
import { useState } from 'react';

// Import of style sheets and any required components
import './toastComponent_style.scss';

// Declaration of the toast component
class ToastNotification extends React.Component {

	// Set default values for notification
	constructor(props) {

		super(props);

        this.notificationType 	= props.notificationData?.notificationType		?? 'info';
		this.notificationAction	= props.notificationData?.notificationAction	?? 'none';
		this.title 				= props.notificationData?.title					?? 'Something happened';
		this.message 			= props.notificationData?.message				?? `Here's some more specific information on what happened`;
		this.messageExtended	= props.notificationData?.messageExtended		?? false;
		this.theme				= props.notificationData?.theme					?? 'light';
		this.time				= new Date(props.notificationData?.time)	 	?? new Date();
		this.icon				= props.notificationData?.icon					?? 'default';
		this.animated			= props.notificationData?.animated				?? false;
		this.autodelete			= props.notificationData?.autodelete			?? false;
		this.state.shouldRender = true;

		this.notificationClassName = `toastNotification notification_${this.notificationType}`;
    }

	// Declaration of init state
	state = { shouldRender: true };

	// Calculate passed time since notification creation
	timeSinceNotification() {

		const currentTime 	= new Date();
		const timeDiff 		= currentTime - this.time;

		const minutesDiff 	= Math.floor(timeDiff / 1000 / 60);
		const hoursDiff 	= Math.floor(timeDiff / 1000 / 60 / 60);
		const daysDiff 		= Math.floor(timeDiff / 1000 / 60 / 60 / 24);
		const monthsDiff 	= Math.floor(timeDiff / 1000 / 60 / 60 / 24 / 30);

		let word;

		if (minutesDiff < 60 ) {

			word = minutesDiff == 1 ? 'minute' : 'minutes';
			return `${minutesDiff} ${word} ago`;
		}

		if (1 <= hoursDiff && hoursDiff < 24) {

			word = hoursDiff == 1 ? 'hour' : 'hours';
			return `${hoursDiff} ${word} ago`;
		}

		if (1 <= daysDiff && daysDiff < 30) {

			word = daysDiff == 1 ? 'day' : 'days';
			return `${daysDiff} ${word} ago`;
		}

		if (1 <= monthsDiff) {

			word = monthsDiff == 1 ? 'month' : 'months';
			return `${monthsDiff} ${word} ago`;
		}
	}

	// Set given or default icon
	iconSetter() {

		if (this.icon != 'default') return this.icon;

		switch (this.notificationType) {
			case 'success': return 'checkmark-outline';
			case 'warning':	return 'warning-outline';
			case 'error':	return 'alert-outline';
			case 'info':	return 'information-circle-outline';
			default: 		return 'information-circle-outline';
		}
	}

	// Setting of animated icon
	enableAnimations() {

		if (this.animated) 	return 'enabled';
		if (!this.animated) 	return 'dissabled';
	}

	deleteElement() { this.setState({ shouldRender: false }); }

	// Set timeout 'till component self-destruct
	componentDidMount() {

		if (this.autodelete) {

			setTimeout( () => {
				this.deleteElement();
			}, this.autodelete * 1000);
		}
	}

	// Return completed component
	render () {

    	if (this.state.shouldRender === false) return null;

		return <div className={this.notificationClassName} animations={this.enableAnimations()}>
			<div className="notification_icon">
				<ion-icon name={this.iconSetter()} />
			</div>

			<div className="notification_text">
				<p className="text_title">{this.title}</p>
				<p className="text_message">{this.message}</p>
				<p className="text_time">{this.timeSinceNotification()}</p>
			</div>

			<div className="notification_close">
				<ion-icon name="close" onclick="this.closest('.toastNotification').remove()"></ion-icon>
			</div>

			<div className="notification_timeout" style={{animation: this.autodelete+ 's ease-in reduceWidth'}}></div>
		</div>
	}
};

export default ToastNotification;
