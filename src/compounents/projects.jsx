
import Comp from './comproject'

export default  function projects(){


   return(
<>
<div>

<h1 class="font-bold  text-center   text-4xl text-black ">Projects</h1>
<div className='grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 '>
<Comp img={'weather.png'}  title={'WEATHER APP'} des={"Weather app is weather forecasting application built using javascript.in this project Api is handled , data of all around the world is avaliable."} demo={ "https://weather-pq82t6eox-purushotham847.vercel.app/ "}  code={"https://github.com/purushotham847/weather_app" }/>

</div>
<div>
    <div><img src="" /></div>
</div>
</div>
</>
    )
}