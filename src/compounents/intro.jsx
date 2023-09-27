export default function intro() {
  return (
    <>
      <section class="hero-firstsection">
        <div class="w-full flex justify-center mt-5">
          <img class="rounded-full h-64  w-64 justify-center " src="p.jpg" />
        </div>

        <div class="hero-leftsection ">
          <div class="hero-buttondiv">
            <p
              class="flex first-letter:uppercase  text-center font-mono justify-center pb-0 p-10 "
              id="namespan"
            >
              {" "}
              Hi, My name is purushotham and I am a passionate{" "}
            </p>
            <div class="anitext flex relative justify-center h-16 inline-flex w-full pt-0 p-3 text-[15px]">
              <ul class="dynamictext absolute -top-7">
                <li>
                  <span>web designer</span>
                </li>
                <li>
                  <span>graphic designer</span>
                </li>
                <li>
                  <span>logo designer</span>
                </li>
                <li>
                  <span>brand identity</span>
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
                <img class="w-8 h-8" src="twitter.png" />
              </a>
              <a href="https://www.linkedin.com/in/purushotham-bm-63543822a/">
                <img class="w-8 h-8" src="linkedin.png" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
