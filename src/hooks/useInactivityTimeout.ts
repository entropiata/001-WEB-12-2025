import { useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface UseInactivityTimeoutOptions {
    timeout: number; // in milliseconds
    onTimeout: () => void;
    enabled?: boolean;
}

/**
 * Custom hook to detect user inactivity and trigger a timeout action
 * 
 * @param timeout - Inactivity timeout in milliseconds
 * @param onTimeout - Callback function to execute when timeout occurs
 * @param enabled - Whether the timeout is enabled (default: true)
 * 
 * @example
 * useInactivityTimeout({
 *   timeout: 20 * 60 * 1000, // 20 minutes
 *   onTimeout: () => handleLogout(),
 *   enabled: true
 * });
 */
export function useInactivityTimeout({
    timeout,
    onTimeout,
    enabled = true
}: UseInactivityTimeoutOptions) {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const lastActivityRef = useRef<number>(Date.now());

    const resetTimer = useCallback(() => {
        // Clear existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Update last activity timestamp
        lastActivityRef.current = Date.now();

        // Set new timeout
        if (enabled) {
            timeoutRef.current = setTimeout(() => {
                onTimeout();
            }, timeout);
        }
    }, [timeout, onTimeout, enabled]);

    useEffect(() => {
        if (!enabled) {
            return;
        }

        // Events that indicate user activity
        const events = [
            'mousedown',
            'mousemove',
            'keypress',
            'scroll',
            'touchstart',
            'click',
        ];

        // Throttle the reset timer to avoid excessive calls
        let throttleTimeout: NodeJS.Timeout | null = null;
        const throttledResetTimer = () => {
            if (!throttleTimeout) {
                throttleTimeout = setTimeout(() => {
                    resetTimer();
                    throttleTimeout = null;
                }, 1000); // Throttle to once per second
            }
        };

        // Add event listeners
        events.forEach((event) => {
            window.addEventListener(event, throttledResetTimer);
        });

        // Initialize timer
        resetTimer();

        // Cleanup
        return () => {
            events.forEach((event) => {
                window.removeEventListener(event, throttledResetTimer);
            });
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            if (throttleTimeout) {
                clearTimeout(throttleTimeout);
            }
        };
    }, [resetTimer, enabled]);

    return {
        resetTimer,
        getLastActivity: () => lastActivityRef.current,
        getRemainingTime: () => {
            const elapsed = Date.now() - lastActivityRef.current;
            return Math.max(0, timeout - elapsed);
        }
    };
}

/**
 * Hook specifically for admin session timeout
 * Automatically logs out admin after 20 minutes of inactivity
 */
export function useAdminSessionTimeout() {
    const navigate = useNavigate();

    const handleTimeout = useCallback(() => {
        // Clear admin token
        localStorage.removeItem('adminToken');

        // Show notification (optional - can be enhanced with toast)
        console.log('Session expired due to inactivity');

        // Redirect to login
        navigate('/admin/login', {
            replace: true,
            state: { message: 'Your session has expired due to inactivity. Please login again.' }
        });
    }, [navigate]);

    const { resetTimer, getRemainingTime } = useInactivityTimeout({
        timeout: 20 * 60 * 1000, // 20 minutes in milliseconds
        onTimeout: handleTimeout,
        enabled: true
    });

    return {
        resetTimer,
        getRemainingTime,
        timeoutMinutes: 20
    };
}
