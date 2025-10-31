import image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <>
    <div className="flex justify-center  items-center flex-col text-black gap-3 h-[30vh] px-5 md:px-0 text-xs md:text-base">
      <div className="flex mt-12">
         <img  src="/cup.png" alt="Fund yourself" className=" mt-32 w-[60px] h-[60px] rounded-full  object-cover   " />
        <div className=" font-bold text-black  mt-36 text-3xl md:text-5xl">Buy Me a Chai</div>
      </div>
      <p className="text-center md:text-left text-black text-xl font-medium">A crowdfunding platform for creators.Get funded by your fans and followers.Start now!</p>
      <p className="text-center md:text-left text-black text-xl font-medium">A place where your fans can buy you a chai.Unleash the power of your fans and get your projects funded.</p>
      <div>
        <Link href={"/login"}>
       <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
Start Here
</span>
</button></Link>
 <Link href={"/about"}>
<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
Read More
</span>
</button></Link>
      </div>
    </div>
    <div className="bg-blue-950 mt-36  h-[2px]">
    </div>
    <div className="container mx-auto py-16 px-10">
      <h2 className="text-3xl text-black mb-5 font-bold text-center">Your Fans can buy you a chai</h2>
      <div className="flex justify-around gap-5">
        <div className="item space-y-3 flex flex-col items-center justify-center">
  <img  src="/fund3.jpg" alt="Fund yourself" className="w-[150px] h-[150px] rounded-full  object-cover  border-4 border-blue-950 border-solid " />
  <p className="font-bold text-lg text-center text-black leading-none">Fans want to help</p>
  <p className=" font-medium text-black  text-center">Your fans are available for you to help</p>
</div>
<div className="item space-y-3 flex flex-col items-center justify-center">
  <img  src="/contribute.avif" alt="Fund yourself" className="w-[150px] h-[150px] rounded-full object-cover  border-4 border-blue-950 border-solid " />
  <p className="font-bold text-lg text-center text-black leading-none">Fans want to contribute</p>
  <p className=" font-medium  text-black text-center">Your fans are wiling to contribute financially </p>
</div>
<div className="item space-y-3 flex flex-col items-center justify-center">
  <img  src="/collaborate.jpeg" alt="Fund yourself" className="w-[150px] h-[150px] rounded-full object-cover   border-4 border-blue-950 border-solid " />
  <p className="font-bold text-lg text-center leading-none">Fans want to collaborate</p>
  <p className=" font-medium  text-center">Your fans are ready to collaborate with you </p>
</div>
      </div>
    </div>

 <div className="bg-blue-950  h-[2px]">
    </div>

    <div className="container mx-auto py-16 flex flex-col items-center justify-center">
      <h2 className="text-3xl text-black mb-5  font-bold text-center">Learn more about us </h2>
      <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
      <iframe className="w-full h-full" src="https://www.youtube.com/embed/voF1plqqZJA?si=HM8ApsMaJmigDAej" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
    </>
  );
}
