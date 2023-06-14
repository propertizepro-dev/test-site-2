import Heading from "./Heading";
import Button from "./Button";

export default function HeroSection() {
  return (
    <div className="w-full bg-stone-900 flex justify-center">
      <div className="w-full max-w-6xl flex gap-10 items-center py-10" style={{height: "calc(100dvh - 123px)"}}>
        <div className="w-1/2 flex flex-col gap-2">
          <Heading>
            {`Seamless and stress-free home buying and selling — that's what we
            deliver`}
          </Heading>
          <p className="text-zinc-100 text-2xl">{`Find the home you've been waiting for, or find the perfect buyer for your home. No matter what you need, we've got you covered.`}</p>
          <Button>Find Your Dream Home</Button>
        </div>
        <div className="flex flex-col items-start w-1/2 relative gap-2">
          <div className="flex gap-2">

            <div className="grow"><img className="h-28 w-auto object-contain rounded-2xl right-0" src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" /></div>
            <div className="grow"><img className="h-28 w-auto object-contain rounded-2xl" src="https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80" /></div>
            <div className="grow"><img className="h-28 w-auto object-contain rounded-2xl" src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" /></div>
            <div className="grow"><img className="h-28 w-auto object-contain rounded-2xl" src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" /></div>
            
            
          </div>
          <img className=" object-contain rounded-xl" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />

        </div>
      </div>
    </div>
  );
}

