import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const aboutCont = new AbortController();
        fetch(url, {signal: aboutCont.signal})
        .then(res => {
            if (!res.ok) {
                throw Error('Could Not Get Press Release From API')
            }
            return res.json();
        })
        .then (data => {
            setData(data.data);
            setLoading(false);
            setError(null);
        })
        .catch(err=>{
            if (err.name !== "AbortError") {
                setError(err.message);
                setLoading(false)
            }
        })
        return ()=>aboutCont.abort();
    }, [url])
  return {data, loading, error}
}

export default useFetch