import { useState, useEffect } from "react";

export default function UserStatus (props) {
    const [isOnline, setIsOnline] = useState(null)

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline)
        }



        ServerAPI.subscibeUserStatus(props.user.id, handleStatusChange)
    })
}