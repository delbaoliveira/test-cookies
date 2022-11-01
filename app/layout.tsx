import "./globals.css"
import { cookies } from "next/headers"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nextCookies = cookies()
  const theme = nextCookies.get("theme")?.value || "0"
  const _cookies = cookies()
  const cartCount = _cookies.get("_cart_count")?.value || "0"

  console.log(
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    cartCount,
  )

  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
