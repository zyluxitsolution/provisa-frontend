import React, { useState } from "react";
import { Calendar, Loader } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import SectionHeader from "../components/website/section-header";
import { Button } from "../components/ui/button";
import { supabase } from "../supabaseclient";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Appointment() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();

  const [isCreating, setIsCreating] = useState<boolean>(false);

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    setIsCreating(true);
    const {
      data: success_data,
      error,
      status,
    } = await supabase
      .from("Appointment")
      .insert([{ ...data, status: "pending" }])
      .select();

    if (error) {
      toast.error(
        error.details ||
          "An error occurred during appointment book. Please try again."
      );
      console.error("Failed to send message:", error.message);
      setIsCreating(false);
      return;
    }

    if (status === 201 && success_data) {
      reset();
      setIsCreating(false);
      toast.success("Appointment booked successfully");
      return;
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with options
  }, []);

  return (
    <div
      className="w-full md:w-8/12 mx-auto space-y-20 px-4 md:px-0"
      data-aos="zoom-out"
    >
      <section>
        <SectionHeader
          title="Appointment Form"
          heading="Book an Appointment"
          description="Please fill   out the form below to book an appointment with us. We will get back to you as soon as possible"
        />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
            <div>
              <label className="font-medium text-gray-700">Full Name</label>
              <input
                placeholder="Kumar Shrestha"
                type="text"
                className="globalinput"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <span className="text-[12px] text-primary-600">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="font-medium text-gray-700">Email Address</label>
              <input
                placeholder="example@gmail.com"
                type="text"
                className="globalinput"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-[12px] text-primary-600">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="font-medium text-gray-700">Phone Number</label>
              <input
                placeholder="7494730303"
                type="number"
                className="globalinput"
                {...register("phone", {
                  required: true,
                  minLength: 10,
                  maxLength: 10,
                })}
              />
              {errors.phone && (
                <span className="text-[12px] text-primary-600">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="font-medium text-gray-700">Address</label>
              <input
                placeholder="Kadadhari Kathmandu"
                type="text"
                className="globalinput"
                {...register("address", { required: true })}
              />
              {errors.address && (
                <span className="text-[12px] text-primary-600">
                  This field is required
                </span>
              )}
            </div>

            {/* Education Details */}
            <div>
              <label className="font-medium text-gray-700">
                Select Your Latest Educational Qualification
              </label>
              <select
                className="globalinput"
                {...register("latestEducation", { required: true })}
              >
                <option value="">---Select Education Level---</option>
                <option value="SLC">SLC</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
                <option value="PhD">PhD</option>
              </select>
              {errors.latestEducation && (
                <span className="text-[12px] text-primary-600">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="font-medium text-gray-700">
                Select Subject
              </label>
              <select
                className="globalinput"
                {...register("subject", { required: true })}
              >
                <option value="">---Select Subject---</option>
                <option value="Science">Science</option>
                <option value="Management">Management</option>
                <option value="Humanities">Humanities</option>
                <option value="Engineering">Engineering</option>
                <option value="Medical">Medical</option>
              </select>
              {errors.subject && (
                <span className="text-[12px] text-primary-600">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="font-medium text-gray-700">
                Select Your Passed Year
              </label>
              <input
                type="date"
                className="globalinput"
                {...register("passedYear", { required: true })}
              />
              {errors.passedYear && (
                <span className="text-[12px] text-primary-600">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="font-medium text-gray-700">
                Enter Your Percentage or GPA
              </label>
              <input
                type="number"
                className="globalinput"
                {...register("gpa", { required: true })}
              />
              {errors.gpa && (
                <span className="text-[12px] text-primary-600">
                  This field is required
                </span>
              )}
            </div>

            {/* Abroad Study */}
            <div>
              <label className="font-medium text-gray-700">
                Where Do You Want To Go?
              </label>
              <select
                className="globalinput"
                {...register("destinationCountry", { required: true })}
              >
                <option value="">---Select Country---</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Europe">Europe</option>
                <option value="Japan">Japan</option>
              </select>
              {errors.destinationCountry && (
                <span className="text-[12px] text-primary-600">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="font-medium text-gray-700">
                Which Test Preparation Do You Want To Enroll?
              </label>
              <select
                className="globalinput"
                {...register("testPreparation", { required: true })}
              >
                <option value="">---Select Courses---</option>
                <option value="IELTS">IELTS</option>
                <option value="TOEFL">TOEFL</option>
                <option value="GRE">GRE</option>
                <option value="GMAT">GMAT</option>
                <option value="SAT">SAT</option>
                <option value="PTE">PTE</option>
              </select>
              {errors.testPreparation && (
                <span className="text-[12px] text-primary-600">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="font-medium text-gray-700">
                Which Course Do You Want To Enroll?
              </label>
              <select
                className="globalinput"
                {...register("course", { required: true })}
              >
                <option value="">---Select Courses---</option>
                <option value="Diploma">Diploma</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
                <option value="PhD">PhD</option>
                <option value="Post Graduate Diploma">
                  Post Graduate Diploma
                </option>
                <option value="Certificate">Certificate</option>
                <option value="Vocational">Vocational</option>
                <option value="Others">Others</option>
              </select>
              {errors.course && (
                <span className="text-[12px] text-primary-600">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="font-medium text-gray-700">
                Have you been to “Professional Visa and Education Services”
                before?
              </label>
              <div className="flex items-center space-x-4">
                <label>
                  <input
                    type="radio"
                    value="Yes"
                    {...register("visitedBefore", { required: true })}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    value="No"
                    {...register("visitedBefore", { required: true })}
                  />
                  No
                </label>
              </div>
              {errors.visitedBefore && (
                <span className="text-[12px] text-primary-600">
                  This field is required
                </span>
              )}
            </div>

            {/* Booking */}
            <div>
              <label className="font-medium text-gray-700">
                Select Appointment Date
              </label>
              <input
                type="date"
                className="globalinput"
                {...register("appointmentDate", { required: true })}
              />
              {errors.appointmentDate && (
                <span className="text-[12px] text-primary-600">
                  This field is required
                </span>
              )}
            </div>

            {/* Existing fields */}
          </div>

          <div>
            <label className="font-medium text-gray-700">Message</label>
            <textarea
              placeholder="I am interested in the IELTS class, please let me know when the class starts."
              className="globalinput h-40"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-[12px] text-primary-600">
                This field is required
              </span>
            )}
          </div>

          <Button className="float-end flex items-center gap-1">
            {isCreating ? (
              <Loader size={16} className="animate-spin" />
            ) : (
              <Calendar size={16} />
            )}{" "}
            Book an Appointment
          </Button>
        </form>
      </section>
    </div>
  );
}
