import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | undefined>();

    const activeHttpRequests = useRef<AbortController[]>([]);

    const sendRequest = useCallback(
        async (url: string, method = "GET", body: any = null, headers = {}) => {
            setIsLoading(true);
            const httpAbortCtrl = new AbortController();
            activeHttpRequests.current.push(httpAbortCtrl);

            try {
                const response = await fetch(url, {
                    method,
                    body: body ? JSON.stringify(body) : null,
                    headers: {
                        'Content-Type': 'application/json',
                        ...headers
                    },
                    signal: httpAbortCtrl.signal,
                    credentials: "include",
                });

                const responseData = await response.json();

                activeHttpRequests.current = activeHttpRequests.current.filter(
                    (reqCtrl) => reqCtrl !== httpAbortCtrl
                );

                if (!response.ok) {
                    throw new Error(responseData.message || 'Something went wrong!');
                }

                setIsLoading(false);
                return responseData;
            } catch (err) {
                if (err instanceof Error && err.name === "AbortError") {
                    return;
                }
                setError(err instanceof Error ? err.message : 'Something went wrong!');
                setIsLoading(false);
                throw err;
            }
        },
        []
    );

    const clearError = () => {
        setError(undefined);
    };

    useEffect(() => {
        return () => {
            activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
        };
    }, []);

    return { isLoading, error, sendRequest, clearError };
}; 