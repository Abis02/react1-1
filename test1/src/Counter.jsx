/*import React, { useEffect, useState } from "react"

export default function Counter(props) {
    const [isOnline, setIsOnline] = useState(null)

    function handleStatusChange(status) {
        setIsOnline(status.setIsOnline)
    }

    useEffect(() => {
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange)
        return () => {
            ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange)
        //document.title = `총 ${count}번 클릭했습니다.`
        }
    })

    if (isOnline == null) {
        return '대기 중...'
    }
    return isOnline ? '온라인' : '오프라인'
}*/