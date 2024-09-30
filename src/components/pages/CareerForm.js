import { IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import ApiService from "../../controller/apiService";

const CareerForm = ({ careerid }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formResponse, setFormResponse] = useState(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [formData, setFormData] = useState({
    myfile: null, // doctor
    name: "", // name
    phonenumber: "", // phone
    email: "", // email
    qualification: "", // speciality
    totalexp: "", // time
    location: "", // location
    careerid: careerid, // careerid
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      careerid: careerid,
    }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      myfile: file,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("myfile", formData.myfile);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phonenumber", formData.phonenumber);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("qualification", formData.qualification);
      formDataToSend.append("totalexp", formData.totalexp);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("careerid", formData.careerid);

      const submitResponse = await ApiService.post(
        "saveapplication",
        formDataToSend
      );
      setFormResponse(submitResponse.data.result);

      if (submitResponse.status === 200) {
        window.alert("form submitted successfully");
        closeModal();
        setFormData({
          myfile: null,
          name: "",
          phonenumber: "",
          email: "",
          qualification: "",
          totalexp: "",
          location: "",
          careerid: careerid,
        });
      } else {
        window.alert("Form not submitted");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-end">
      <button onClick={openModal} className="btn-primary px-4 text-sm">
        Apply Now
      </button>

      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* Modal */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            ></span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-lg w-full">
              {/* Close button */}
              <div className="flex justify-end">
                <button onClick={closeModal} type="button">
                  <IconX
                    className="bg-highlight text-white p-2 rounded-lg"
                    size={48}
                  />
                </button>
              </div>
              <h3 className="text-center text-theme text-xl font-semibold">
                Career Form
              </h3>
              {/* Form fields */}
              <form className="p-6 text-xs">
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="tel"
                    id="phonenumber"
                    name="phonenumber"
                    value={formData.phonenumber}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="qualification"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    placeholder="Qualification"
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="totalexp"
                    name="totalexp"
                    value={formData.totalexp}
                    onChange={handleInputChange}
                    placeholder="Total Experience"
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Location"
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="file"
                    id="myfile"
                    name="myfile"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>
                {/* Submit button */}
                <div className="flex justify-end">
                  <button
                    onClick={submitForm}
                    className="btn-primary text-xs flex justify-end px-8"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerForm;
