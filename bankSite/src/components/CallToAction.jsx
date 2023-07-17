import Button from "./Button"

const CallToAction = () => {
  return (
    <section className='flex justify-around items-center rounded-[20px]  bg-gray-700 sm:p-5 p-0 mt-10'>
      <div className='m-8'>
        <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
          Let's try our service now!
        </h2>
        <p className='max-w-[470px]'>
          Everything you need to accept card payments and grow your business anywhere on the planet
        </p>
      </div>
      <div className='sm:pr-0 pr-5'>
      <Button />
      </div>
    </section>
  )
}

export default CallToAction