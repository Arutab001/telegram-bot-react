'use client'
import { useEffect, useState } from 'react'
import axios from "axios";

export default function TelegramAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        checkAuth();
        authenticateUser();
    }, [])

    const checkAuth = async () => {
        const response = await fetch('/api/session')
        if (response.ok) {
            setIsAuthenticated(true)
        }
    }

    const authenticateUser = async () => {
        const WebApp = (await import('@twa-dev/sdk')).default
        WebApp.ready()
        const initData = WebApp.initData
        if (initData) {
            try {
                const response = await axios.get(`/auth?${initData.toString()}`)

                //if (response.o) {
                //    setIsAuthenticated(true)
                //    router.refresh()
                console.log("CHECK");
                console.log(response.data.access_token);
                return response.data.access_token
            } catch (error) {
                console.error('Error during authentication:', error)
                setIsAuthenticated(false)
            }
        }
    }

    return (
        <></>
    )
}