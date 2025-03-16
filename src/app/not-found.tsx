import Link from 'next/link'
 
export default async function NotFound() {
  
  return (
    <div className="not-found">
      <h2>404 - Aradığınız sayfa bulunamadı</h2>
      <Link href="/">Ana sayfaya gidin </Link>
    </div>
  )
}