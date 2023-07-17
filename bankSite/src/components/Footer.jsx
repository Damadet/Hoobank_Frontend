import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section id="aboutUs" className="flex flex-col  w-full">
    <div className="flex sm:flex-row flex-col sm:justify-between  justify-center items-center w-full mt-10">
      <div className="flex flex-col items-center sm:mr-20 mr-0">
        <div className="max-w-[190px]">
          <img src={logo} className="w-[100%] h-[100%]" />
        </div>
        <p className="max-w-[290px] mt-5">
          A new way to make payments easy, reliable and secure
        </p>
      </div>
      <div className="flex sm:justify-between justify-around sm:flex-row flex-col sm:mt-0 mt-6 w-full sm:ml-20 ml-0">
        {footerLinks.map((footer) => (
          <div key={footer.title}>
            <p className="font-bold font-poppins mt-2">{footer.title}</p>
            {footer.links.map((footerLink) => (
              <div key={footerLink.name}>{footerLink.name}</div>
            ))}
          </div>
        ))}
      </div>
    </div>

    <div className='border-t-[1px] sm:flex-row flex-col justify-center border-t-neutral-600 flex sm:justify-between mt-5'>
      <p className='mt-3'>Copyright 2021. All Rights Reserved.</p>
      <div className='flex flex-row mt-3'>
      {socialMedia.map((social) => (
        <div key={social.id} className='ml-4'>
          <img src={social.icon} />
      </div>
      ))}
      </div>
      
    </div>
  </section>
);

export default Footer;
