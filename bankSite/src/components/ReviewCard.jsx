import { quotes } from "../assets";
const ReviewCard = ({ key, content, name, title, img }) => (
  <div className="flex flex-col justify-between py-12 px-10 rounded-[20px] max-w-[340px] md:mr-10 sm:mr-5 mr-0 my-5">
    <img src={quotes} className="w-[42px] h-[27px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
      {content}
    </p>
    <div className="flex flex-row">
      <img src={img} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <p className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</p>
        <p className='font-poppins font-semibold text-[16px] leading-[24px]'>{title}</p>
      </div>
    </div>
  </div>
);

export default ReviewCard;
