import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const request = async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Fetch Error")
            } 

            const data = await response.json();

            setData(data);
        } catch (error) {
            console.error(error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    

    useEffect(() => {
        if (url) request();
    }, [url])

    return {data, error, loading}
}