export default function intro() {
  return (
    <>
      <section class="hero-firstsection">
        <div class="w-full flex justify-center  mt-5">
        <img class=" h-64  w-64   rounded-t-[150px] rounded-bl-[150px]" src="p.jpg"/>
        </div>

        <div class="hero-leftsection ">
          <div class="hero-buttondiv">
            <p class=" first-letter:text-xl  text-center pb-0 p-10 ">
              Hi, My name is purushotham and I am a passionate
            </p>
            <div class="anitext relative justify-center h-16 inline-flex w-full pt-0 p-3 text-[15px]">
              <ul class="dynamictext absolute -top-7">
                <li>
                  <span class="font-extrabold ">web designer</span>
                </li>
                <li>
                  <span class="font-extrabold ">graphic designer</span>
                </li>
                <li>
                  <span class="font-extrabold ">logo designer</span>
                </li>
                <li>
                  <span class="font-extrabold ">brand identity</span>
                </li>
              </ul>
            </div>
            <div class="flex justify-center ">
              <a href="www.google.com">
                <button className="border-2 w-28 bg-black text-white rounded-full p-2.5 text-[10px] hover:bg-white hover:text-black">
                  Download Resume
                </button>
              </a>
              <a href="https://github.com/purushotham847">
                <button className="border-2 w-28 bg-black text-white rounded-full p-2.5 text-[10px] hover:bg-white hover:text-black">
                  Visit Github
                </button>
              </a>
            </div>
            <div class="flex justify-center  pt-2">
              <a class="mr-3 " href="https://twitter.com/Purushotham_007">
                <img class="w-8 h-8" src="/twitter.png" />
              </a>
              <a href="https://www.linkedin.com/in/purushotham-bm-63543822a/">
                <img id="aboutsection" class="w-8 h-8" src="/linkedin.png" />
              </a>
            </div>
          </div>
        </div>
      </section >
    </>
  );
}
