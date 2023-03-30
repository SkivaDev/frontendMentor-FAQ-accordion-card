import data from './data.json'

function App() {

  return (
    <div className="w-[920px] h-[509px] bg-white bg-[url('./assets/images/bg-pattern-desktop.svg')] bg-no-repeat bg-[1260%] [65%] rounded-[30px] grid grid-cols-2 gap-24">
      <div className="w-400 relative">
        <div className="bg-[url('./assets/images/illustration-woman-online-desktop.svg')] h-full bg-no-repeat bg-[120%]"></div>
        <img src="./assets/images/illustration-box-desktop.svg" alt="box" className="absolute top-[42%] left-[-25%]" />
      </div>
      <div className="flex flex-col flex-1 mt-[65px]">
        <h1 className="text-4xl font-bold">FAQ</h1>
        <div className="h-full flex flex-col">
          {data.map((item, i) => (
            <div className='w-[350px] border-b border-gray-300'>
              <div className="flex justify-between">
                <h3 className="font-normal text-[hsl(237,12%,33%)] my-3">{item.question}</h3>
                <img src="./assets/images/icon-arrow-down.svg" alt="icon-arrow" className='w-[10px] h-[10px]' />
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
