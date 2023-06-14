import Image from 'next/image'
import Navbar from '../components/ui/Navbar'
import Heading from "../components/ui/Heading";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <>
    <Navbar />
      <main className="flex flex-col items-center justify-between">
        <div className="bg-stone-900 w-full flex flex-col justify-center items-center" style={{minHeight: "calc(100dvh - 123px)"}}>
          <div className="max-w-6xl flex flex-col md:flex-row items-center gap-10 w-full text-zinc-100">
            <div className="md:w-1/2 flex flex-col gap-4">
              <div>
                <Heading>Make finding your dream home easy</Heading>
                <p className="text-2xl">Reach out to us and one of our agents will be in touch with you soon.</p>
              </div>
              <form className="flex flex-col gap-4">
                <input placeholder="Name" className="bg-transparent py-4 px-2 border-2 border-white" ></input>
                <input placeholder="Email" className="bg-transparent py-4 px-2 border-2 border-white" ></input>
                <input placeholder="Phone Number" className="bg-transparent py-4 px-2 border-2 border-white" ></input>
                <Button>Find a home</Button>
              </form>
            </div>
            <div className="md:w-1/2">
              <img className="rounded-2xl object-cover h-[500px]" src="https://images.unsplash.com/photo-1618219740975-d40978bb7378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2200&q=80" />
            </div>

          </div>

        </div>
      </main>
    </>
  )
}
