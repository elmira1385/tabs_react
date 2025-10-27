
function App() {
  

  return (
    <div className="h-full flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[40px] font-semibold">About</p>
        <p className="text-[16px] text-[#617d98]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          aperiam!
        </p>
      </div>
      <div className="flex gap-15">
        <img
          className="w-[570px] h-[320px] rounded-md"
          src="./src/assets/imag/hero-bcg.1486d4061cd0252b9a21.jpeg"
          alt=""
        />
        <div className="flex flex-col w-[570px] gap-6">
          <div className="flex">
            <button className="px-8 py-2 text-[16px] tracking-[0.25rem]">
              History
            </button>
            <button className="px-8 py-2 text-[16px] tracking-[0.25rem] bg-[#dae2ec]">
              History
            </button>
            <button className="px-8 py-2 text-[16px] tracking-[0.25rem] bg-[#dae2ec]">
              History
            </button>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <p>history</p>
            <p>
              I'm baby wolf pickled schlitz try-hard normcore marfa man bun
              mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights.
              Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde
              try-hard, woke fixie banjo man bun. Small batch tumeric mustache
              tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade
              hoodie ugh chambray, craft beer pork belly flannel tacos
              single-origin coffee art party migas plaid pop-up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
