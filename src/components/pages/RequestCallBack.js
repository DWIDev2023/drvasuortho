import { useEffect, useState } from "react";
import ApiService from "../../controller/apiService";
import { useBlogData } from "../../controller/blogDataContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RequestCallBack({ callBackOne }) {
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const doctorsData = useBlogData()?.doctors;
  useEffect(() => {
    setFilteredDoctors(doctorsData);
  }, [filteredDoctors, doctorsData]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const submitResponse = await ApiService.post("submitcontact", data);

      if (submitResponse.data.result.status === 200) {
        window.alert(submitResponse.data.result.message);
        window.location.reload();
      } else window.alert("form not submitted");
    } catch (error) {
      console.error(error);
    }
  };
  const round = callBackOne ? 'rounded-full' : 'rounded-xl'; 
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="mx-auto"
      >
        <div className={`grid grid-cols-1 gap-x-8 md:gap-y-6 gap-y-3 ${callBackOne ? 'lg:grid-cols-4 md:grid-cols-2' : 'md:grid-cols-2'}`}>
          <div>
            <input
              required
              placeholder="First Name"
              type="text"
              name="firstname"
              id="first-name"
              autoComplete="given-name"
              className={`block w-full ${round} border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600`}
            />
          </div>
          <div>
            <input
              required
              placeholder="Phone Number"
              type="tel"
              name="phonenumber"
              id="phone-number"
              autoComplete="tel"
              className={`block w-full ${round} border-0  py-3 px-3.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600`}
            />
          </div>
          <div>
            <input
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className={`block w-full ${round} border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600`}
            />
          </div>
          <div className="sm:col-span-2 hidden">
            <textarea
              name="message"
              id="message"
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600"
              defaultValue={"Requested a callback"}
              placeholder="message"
            />
          </div>
          <div>
            <button className={`hover:shadow-2xl hover:translate-x-1 btn-theme-gradient2 md:px-6 px-4 md:py-3 py-2 text-white ${round} font-light border-white border`}>Request A Call Back</button>
          </div>
        </div>
      </form>
    </div>
  );
}
