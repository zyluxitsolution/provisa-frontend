import React, { useState, useEffect } from "react";
import { Loader, Send } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import SectionHeader from "../components/website/section-header";
import { Button } from "../components/ui/button";
import { supabase } from "../supabaseclient";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<any>();

  // Define a submit handler
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const onSubmit: SubmitHandler<any> = async (data: any) => {
    setIsCreating(true);
    const {
      data: success_data,
      error,
      status,
    } = await supabase
      .from("Inquiry")
      .insert([{ ...data, status: "pending" }])
      .select();

    if (error) {
      toast.error(
        error.details ||
          "An error occurred during message sent. Please try again."
      );
      console.error("Failed to send message:", error.message);
      setIsCreating(false);
      return;
    }

    if (status === 201 && success_data) {
      reset();
      setIsCreating(false);
      toast.success("Message sent successfully");
      return;
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with options
  }, []);
  return (
    <div
      className="w-full shadow-lg md:w-9/12 mx-auto space-y-20 px-4 md:px-10 py-4"
      data-aos="zoom-out"
    >
      <section>
        <SectionHeader
          title="Contact Us"
          heading="Let us know how we can help"
          description="Let’s Get Together! We’re here to quickly provide you with the info and services you need & answer any questions you may have."
        />

        <div className=" flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24 ">
          {contactMethods.map((item, idx) => (
            <div key={idx}>
              <h4 className="text-gray-800/90 text-lg font-medium">
                {item.title}
              </h4>
              <div className="mt-3 flex items-center gap-x-3">
                <div className="flex-none text-primary-600 animate-bounce duration-700">
                  {item.icon}
                </div>
                <p className="text-gray-600  tracking-wide leading-relaxed">
                  {item.contact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className=" flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24 mt-12">
          {nepaljungContactMethods.map((item, idx) => (
            <div key={idx}>
              <h4 className="text-gray-800/90 text-lg font-medium">
                {item.title}
              </h4>
              <div className="mt-3 flex items-center gap-x-3">
                <div className="flex-none text-primary-600 animate-bounce duration-700">{item.icon}</div>
                <p className="text-gray-600  tracking-wide leading-relaxed">
                  {item.contact}
                </p>
              </div>
            </div>
          ))}
        </div> */}
      </section>

      <section data-aos="fade-up" className="p-8 rounded-lg shadow-lg ">
        <SectionHeader
          title="Send us your doubts"
          heading="Do you have any questions?"
          description="We’re here to help and answer any questions you might have. We look forward to hearing from you! Please fill out the form or use the contact information below."
        />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-6">
          <div className="flex flex-col gap-y-6 sm:flex-row sm:gap-x-6">
            <div className="relative w-full">
              <label className="font-semibold">Full Name</label>
              <div className="relative mt-2">
                <input
                  placeholder="Kumar Shrestha"
                  type="text"
                  className="globalinput w-full p-3 pl-10 bg-white text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 "
                  {...register("fullName", { required: true })}
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              {errors.fullName && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="relative w-full">
              <label className="font-semibold">Email Address</label>
              <div className="relative mt-2">
                <input
                  placeholder="example@gmail.com"
                  type="email"
                  className="globalinput w-full p-3 pl-10 bg-white text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 "
                  {...register("email", { required: true })}
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-y-6 sm:flex-row sm:gap-x-6">
            <div className="relative w-full">
              <label className="font-semibold">Phone Number</label>
              <div className="relative mt-2">
                <input
                  placeholder="9864755749"
                  type="number"
                  className="globalinput w-full p-3 pl-10 bg-white text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 "
                  {...register("phone", {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                  })}
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <i className="fas fa-phone"></i>
                </span>
              </div>
              {errors.phone && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="relative w-full">
              <label className="font-semibold">Address</label>
              <div className="relative mt-2">
                <input
                  placeholder="Kadadhari Kathmandu"
                  type="text"
                  className="globalinput w-full p-3 pl-10 bg-white text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 "
                  {...register("address", { required: true })}
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
              </div>
              {errors.address && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
          </div>

          <div className="relative w-full">
            <label className="font-semibold">Subject</label>
            <div className="relative mt-2">
              <input
                placeholder="When does the IELTS class start?"
                type="text"
                className="globalinput w-full p-3 pl-10 bg-white text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 "
                {...register("subject", { required: true })}
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <i className="fas fa-info-circle"></i>
              </span>
            </div>
            {errors.subject && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div className="relative w-full">
            <label className="font-semibold">Message</label>
            <div className="relative mt-2">
              <textarea
                placeholder="I am interested in the IELTS class, please let me know when the class starts."
                className="globalinput w-full h-40 p-3 pl-10 bg-white text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 "
                {...register("message", { required: true })}
              />
              <span className="absolute left-3 top-3 text-gray-400">
                <i className="fas fa-comment-dots"></i>
              </span>
            </div>
            {errors.message && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div className=" w-full text-end">
            <Button className="w-full sm:w-auto px-6 py-3 mt-4 bg-gradient-to-r from-f4300b to-ffa726 text-white rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 right-0">
              {isCreating ? (
                <Loader size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
              <span className="ml-2">Send Message</span>
            </Button>
          </div>
        </form>
      </section>

      <section data-aos="zoom-in">
        <SectionHeader
          title="Visit us"
          heading="You can find us here"
          description="We are located in the heart of the city, you can visit us anytime."
        />

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28255.00685331858!2d85.30292003644288!3d27.721119025146855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a8ec4da4db%3A0x37d7aeb77add9ce0!2sProfessional%20Visa%20and%20Education%20Services%20Pvt.%20ltd%20(PROVISA%20NEPAL)!5e0!3m2!1sen!2snp!4v1718127656859!5m2!1sen!2snp"
          width="100%"
          height="450"
          loading="lazy"
          className=" border border-primary-600/30 rounded-md "
        />
      </section>
    </div>
  );
}

const contactMethods = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    contact: "Laxmi Plaza, Putalisadak, Padmodaya Mode, Kathmandu, Nepal",
    title: "Kathmandu Office",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
    contact: "+9779851101782,01-45318190 ",
    title: "Phone",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    contact: "admin@provisa.com.np",
    title: "Email",
  },
];

const nepaljungContactMethods = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    contact: "Laxmi Plaza, Putalisadak, Padmodaya Mode, Kathmandu, Nepal",
    title: "Nepalgunj Office",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
    contact: "+9779851101782",
    title: "Phone",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    contact: "admin@provisa.com.np",
    title: "Email",
  },
];
