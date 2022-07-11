import React from "react";
import { Typography, Checkbox } from "@material-ui/core";

const NotificationCheckbox = ({ isNotificationOn, setNotifications }) => {
    // Check if the browser doesn't support notifications
    if (!("Notification" in window)) {
        console.log("Ce navigateur ne prend pas en charge les notifications.");
        return null
    }

    const handleCheckboxChange = (e, checkboxValue) => {
        if (!isNotificationOn) {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    setNotifications(true);
                    console.log('notifications on')
                }
            });
        } else {
            setNotifications(false);
            console.log('notifications off')
        }
    };

    return (
        <Typography variant="caption" color="textSecondary">
            <Checkbox label="M'avertir lorsque les images sont générées" checked={isNotificationOn} onChange={handleCheckboxChange} />
            M avertir lorsque les images sont generees
        </Typography>
    )
}

export default NotificationCheckbox
