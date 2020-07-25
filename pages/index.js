import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// export default function Home({ stars }) {
//     const router = useRouter()

//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         async function loadUserFromCookies() {
//             await new Promise(r => {
//                 setTimeout(() => {
//                     r()
//                 }, 2000);
//             })
//             setLoading(false)
//         }
//         loadUserFromCookies()
//     }, [])
//     function login() {
//         fetch("/api/login").then(async r => {
//             console.log(r)
//         })
//     }

//     return (
//         <div>
//             <h1>Hello nextjs 2.0</h1>
//             {stars}
//             <div>{loading ? "cargando..." : ""}</div>
//             <button onClick={login}>login</button>
//         </div>
//     )
// }

// Home.getInitialProps = async (ctx) => {
//     const res = await fetch('https://api.github.com/repos/vercel/next.js')
//     const json = await res.json()
//     return { stars: json.stargazers_count }
// }

import Link from "next/link";
import { getLayout } from "../components/SiteLayout";

const Index = () => (
  <div className="mt-8 max-w-xl mx-auto px-8">
    <h1 className="text-center">
      <span className="block text-xl text-gray-600 leading-tight">
        Welcome to this
      </span>
      <span className="block text-5xl font-bold leading-none">
        Awesome Website
      </span>
    </h1>
    <div className="mt-12 text-center">
      <Link href="/account-settings/basic">
        <a className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg px-6 py-4 leading-tight">
          View account settings
        </a>
      </Link>
    </div>
  </div>
);

Index.getLayout = getLayout;

export default Index;
