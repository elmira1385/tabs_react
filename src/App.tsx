import { useState } from "react";

function App() {
  const[active,setactive]=useState<"history"|"vision"|"goal">("history")
  
  const tabs={
   history:{
    Title:"History",
    Content:"I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up."
   },
   vision:{
    Title:"Vision",
    Content:"Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal."
   },
   goal:{
    Title:"Goals",
    Content:"Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones."
   }
   
  }

  return (
    <div className="h-full flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[40px] font-semibold">About</p>
        <p className="text-[16px] text-[#617d98]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          aperiam!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <img
          className="w-[570px] h-[320px] rounded-xl"
          src="./src/assets/imag/hero-bcg.1486d4061cd0252b9a21.jpeg"
          alt=""
        />
        <div className="flex flex-col w-[573px] gap-6 bg-white rounded-xl">
          <div className="flex ">
            <button onClick={()=>{setactive("history")} } className={` ${active==="history"?"bg-white text-black":"bg-[#dae2ec] hover:bg-[#ebf7ff] hover:text-[#49a6e9]"} px-[61px] py-3 text-[16px] tracking-[0.25rem] rounded-tl-xl `} >
              History
            </button>
            <button onClick={()=>{setactive("vision")}} className={` ${active==="vision"?"bg-white text-black":"bg-[#dae2ec] hover:bg-[#ebf7ff] hover:text-[#49a6e9]"} px-[61px] py-3 text-[16px] tracking-[0.25rem]`} >
              Vision
            </button>
            <button onClick={()=>{setactive("goal")}} className={` ${active==="goal"?"bg-white text-black":"bg-[#dae2ec] hover:bg-[#ebf7ff] hover:text-[#49a6e9]"} px-[61px] py-3 text-[16px] tracking-[0.25rem] rounded-tr-xl`} >
              Goals
            </button>
          </div>
          <div className="flex flex-col justify-center gap-2 px-8 py-3">
            <p className="text-[16px] tracking-[0.25rem] font-semibold">{tabs[active].Title}</p>
            <p className="text-[16px] text-[#617d98]">
              {tabs[active].Content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
