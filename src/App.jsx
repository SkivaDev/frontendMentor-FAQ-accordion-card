import data from './data.json'

function App() {

  return (
    <div className="max-w-[920px] bg-white bg-[url('./assets/images/bg-pattern-desktop.svg')] bg-no-repeat bg-1260/66 rounded-[22px] grid grid-cols-2 gap-24">
      {/* <div className="w-[460px] relative">
        <div className="bg-[url('./assets/images/illustration-woman-online-desktop.svg')] h-full bg-no-repeat bg-[690%]"></div>
        <img src="./assets/images/illustration-box-desktop.svg" alt="box" className="absolute top-[41%] left-[-22.5%]" />
      </div> */}
      <div className="grid place-content-center relative md:mb-0 mb-[2px]">
        <div className="md:absolute relative md:w-full md:h-full md:place-content-center md:overflow-hidden ">
          <div className="md:absolute translate-x-[-60%] translate-y-[-32%]">
            <img src="./assets/images/illustration-woman-online-desktop.svg" alt="bg-picture" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:pt-[64px] md:pb-[67px] md:pr-[98px] md:pl-[16px]">
        <h1 className="text-[32px] leading-[40px] font-bold mb-[36px] md:text-left text-center text-[hsl(238,29%,16%)]">FAQ</h1>
        <div className="h-full flex flex-col">
          {data.map((item, i) => (
            <div className='w-[350px] border-b border-gray-300 pb-[17px] mb-[18px]'>
              <div className="flex justify-between items-center">
                <h3 className="font-normal text-[hsl(237,12%,33%)] text-[14px]">{item.question}</h3>
                <img src="./assets/images/icon-arrow-down.svg" alt="icon-arrow" className='w-[12px] h-full' />
              </div>
              <div className="hidden w-[350px]">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
