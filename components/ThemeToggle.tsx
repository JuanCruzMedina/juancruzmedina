'use client'

import { useState, useEffect } from 'react'
import { ThemeSwitch } from './ThemeSwitch'

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false)


    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="fixed bottom-6 right-6 z-50 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform">
            <div className="flex items-center justify-center">
                <ThemeSwitch />
            </div>
        </div>
    )
}