import Navbar from "../components/ui/Navbar";
import Heading from "../components/ui/Heading";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex  flex-col items-center justify-between">
        <div className="bg-stone-900 w-full flex flex-col justify-center items-center" style={{minHeight: "calc(100dvh - 123px)"}}>
          <div className="max-w-6xl flex flex-col md:flex-row items-center gap-10 w-full text-zinc-100">
            <div className="md:w-1/2 flex flex-col gap-4">
              <div>
                <Heading>Ready to take the next step?</Heading>
                <p className="text-2xl">Reach out to us and one of our agents will be in touch with you soon.</p>
              </div>
              <form className="flex flex-col gap-4">
                <input placeholder="Name" className="bg-transparent py-4 px-2 border-2 border-white" ></input>
                <input placeholder="Email" className="bg-transparent py-4 px-2 border-2 border-white" ></input>
                <input placeholder="Phone Number" className="bg-transparent py-4 px-2 border-2 border-white" ></input>
                <Button>Get in Touch</Button>
              </form>
            </div>
            <div className="md:w-1/2">
              <img className="rounded-2xl" src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1546&q=80" />
            </div>

          </div>

        </div>
      </main>
    </>
  );
}
