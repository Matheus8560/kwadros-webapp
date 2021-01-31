import { NotificationManager } from 'react-notifications';

export const Notifications = (type, message, title=null) => {
	switch (type) {
		case 'info':
			return NotificationManager.info(message, '', 3000);
		case 'success':
			return NotificationManager.success(message, '', 3000);
		case 'warning':
			return NotificationManager.warning(message, '', 3000);
		case 'error':
			return (
				NotificationManager.error(message, '', 3000)
			);
		default:
			return (
				NotificationManager.error(message, 'Click aqui!', 5000, () => {
					alert('callback');
				})
			);
	}
	
}
