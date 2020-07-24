import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Home({ stars }) {
    const router = useRouter()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
            await new Promise(r => {
                setTimeout(() => {
                    r()
                }, 2000);
            })
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])
    function login() {
        fetch("/api/login").then(async r => {
            console.log(r)
        })
    }

    return (
        <div>
            <h1>Hello nextjs 2.0</h1>
            {stars}
            <div>{loading ? "cargando..." : ""}</div>
            <button onClick={login}>login</button>
        </div>
    )
}

Home.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
}