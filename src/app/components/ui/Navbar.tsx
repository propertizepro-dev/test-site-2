import Link from "next/link";
import Image from "next/image";
import Separator from "./Separator";

export default function Navbar() {
  return (
    <div className="flex w-full justify-center py-6 bg-stone-900 font-bebas">
      <div className="flex max-w-6xl justify-between items-center w-full text-white text-2xl">
        <Link href="/">
          <div className="flex gap-2 items-center">
            <Image src="/house-logo-3.webp" alt="Company Logo" width={75} height={75}/>
            <p>Company Name</p>
          </div>
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="/buying">Buying</Link>
          <Separator />
          <Link href="/selling">Selling</Link>
          <Separator />
          <Link href="/listings">Listings</Link>
          <Separator />
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}``