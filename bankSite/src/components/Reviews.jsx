import ReviewCard from "./ReviewCard";
import { feedback } from "../constants";

const Reviews = () => (
  <section id="reviews" className="mt-10">
    <div className="md:flex md:flex-row flex-col ">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        {" "}
        What people are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className='w-full'>
      <p className="max-w-[470px] mt-5 flex">
        Everything you need to accept card payments and groq your business
        anywhere on the plannet
      </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((feed) => (
        <ReviewCard key={feed.id} {...feed} />  
      ))}
    </div>
  </section>
);

export default Reviews;
