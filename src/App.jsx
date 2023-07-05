import { Card } from './Card'

function App() {

  return (
    <>
      <div className='w-full h-screen bg-white flex justify-center'>
        <div className='absolute top-[-80%] w-[1400px] h-[1400px] bg-[rgb(248,248,248)] rounded-[50%] flex justify-center'>
          <p className='absolute bottom-1/3 text-[rgb(114,114,114)] text-3xl'>What our customers say...</p>
        </div>
      </div>
      <div className='absolute left-0 right-0 m-auto bottom-20 w-9/12 h-4/6 z-5 flex justify-evenly gap-10'>
        <Card image="./public/image-daniel.jpg" name="Daniel Smith" title="Instagram CEO" paragraph='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempore impedit velit inventore."'/>
        <Card image="./public/image-jeanette.jpg" name="Jeanette Smith" title="Web Developer" paragraph='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempore impedit velit inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempore impedit velit inventore."' margin="mt-24"/>
        <Card image="./public/image-jonathan.jpg" name="Jonathan Smith" title="Software Designer" paragraph='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempore impedit velit inventore."'/>
        <Card image="./public/image-kira.jpg" name="Kira Smith" title="Cashier" paragraph='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempore impedit velit inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempore impedit velit inventore."' margin="mt-24"/>
      </div>
      <div class="custom-shape-divider-bottom-1688530819">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
    </>
    
  )
}

export default App
