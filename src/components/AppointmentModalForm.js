"use client"
import { useEffect, useState } from "react";
import ApiService from "../controller/apiService";
import { useBlogData } from "../controller/blogDataContext";

const AppointmentModalForm = ({ modal, close }) => {
  const [doctors, setDoctors] = useState();
  const [specDoctors, setSpecDoctors] = useState();
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState();
  const [availableTimes, setAvailableTimes] = useState();

  const doctorsData = useBlogData()?.doctors;

  const handleSpecialityChange = (e) => {
    const spec = Number(e.target.value);
    // const filteredDoctors = doctors.filter(
    //   (doctor) => doctor.speciality === spec
    // );
     const filteredDoctors = doctors
    setSpecDoctors(filteredDoctors);
    handleInputChange(e);
  };
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === "appointmentDate") {
      const dateParts = value.split("-");
      const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
      value = formattedDate;
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [formData, setFormData] = useState({
    preferredDoctor: "62b590d1c9b6fa449205202c", // doctor
    preferredDepartment: 0, // speciality
    appointmentDate: "", // date
    selectedDate: selectedDate,
    appointmentTime: "", // time
    pastconsultation: "", // message
    patientName: "", // name
    patientGender: "", // gender
    patientAge: "", // age
    location: "", // location
    patientEmail: "", // email
    patientMobile: "", // phone
  });
  useEffect(() => {
    if (doctorsData) {
      const doctorNames = doctorsData?.map((doctor) => ({
        name: `${doctor.firstName} ${doctor.lastName}`,
        value: doctor._id,
        speciality: Number(doctor.department),
      }));
      setDoctors(doctorNames);
      setSpecDoctors(doctorNames);
    }
  }, [doctorsData]);
  useEffect(() => {
    const fetchAndSetBookedAppointments = async () => {
      try {
        const bookedAppointments = await bookedSlots();
        const availableTimeSlots = times.filter(
          (time) => !bookedAppointments?.bookedslots?.includes(time)
        );
        setAvailableTimes(availableTimeSlots);
      } catch (error) {
        setError(error);
      }
    };
    if (formData.appointmentDate) fetchAndSetBookedAppointments();
  }, [formData.appointmentDate]);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const submitResponse = await ApiService.post(
        "submitappointment",
        formData
      );
      if (submitResponse.data.result.status === 200) {
        window.alert(submitResponse.data.result.message);
        setFormData({
          preferredDoctor: "62b590d1c9b6fa449205202c", // doctor
          preferredDepartment: 0, // speciality
          appointmentDate: "", // date
          selectedDate: "",
          appointmentTime: "", // time
          pastconsultation: "", // message
          patientName: "", // name
          patientGender: "", // gender
          patientAge: "", // age
          location: "", // location
          patientEmail: "", // email
          patientMobile: "", // phone
          // doctorid: doctorid,
        });
        close();
      } else window.alert("form not submitted");
    } catch (error) {
      setError(error);
    }
  };
  const currentDate = new Date();
  const selDate = new Date(selectedDate);
  const isToday =
    selDate.getDate() === currentDate.getDate() &&
    selDate.getMonth() === currentDate.getMonth() &&
    selDate.getFullYear() === currentDate.getFullYear();

  const selectedHour = isToday ? currentDate.getHours() : 0;
  const selectedMinute = isToday ? currentDate.getMinutes() : 0;

  // Generate an array of times from the selected hour onwards
  const times = [];
  const startHour = 10; // Start hour (9 AM)
  const endHour = 17; // End hour (6 PM)

  for (let hour = startHour; hour <= endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      let period = "am";
      let hour12 = hour;
      if (hour >= 12) {
        period = "pm";
        hour12 -= 12;
      }
      if (hour12 === 0) {
        hour12 = 12; // 12:00 AM should be displayed as 12:00 PM
      }
      const time = `${hour12
        .toString()
        .padStart(2, "0")}:${minute.toString().padStart(2, "0")} ${period}`;
      // Check if the time is in the future
      if (
        !isToday || // Include all times if selected date is not today
        hour > selectedHour ||
        (hour === selectedHour && minute >= selectedMinute)
      ) {
        times.push(time);
      }
    }
  }

  const bookedSlots = async () => {
    try {
      const response = await ApiService.post("getbookedslots", {
        date: formData.appointmentDate,
      });
      return response.data; // Assuming the data is in the format [{ date: 'YYYY-MM-DD', time: 'HH:mm' }, ...]
    } catch (error) {
      console.error("Error fetching booked appointments:", error);
      return [];
    }
  };

  return (
    <div className={!modal ? "max-w-5xl m-auto md:p-8 px-8 py-4" : ""}>
      <form onSubmit={submitForm} className="text-black">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-2 max-sm:text-xs">
          {/* Left Column */}
          <div className="md:space-y-4 space-y-2">
            <select
              name="preferredDepartment"
              value={formData.preferredDepartment}
              onChange={handleSpecialityChange}
              className="w-full border p-2 rounded "
              required
            >
              <option value="">-Select Speciality-</option>
                     <option value="1"> Joint Replacement</option>
                      <option value="2"> General Orthopedics </option>
                      <option value="3"> Sports Medicine </option>
                      <option value="4"> Robotic Knee Replacement </option>
              {/* Add more options */}
            </select>
            <select
              name="preferredDoctor"
              value={formData.preferredDoctor}
              onChange={handleInputChange}
              className="w-full border p-2 rounded "
            >
              {doctors?.map((doctor) => {
                return (
                  <option
                    key={doctor.value}
                    id={doctor.value}
                    value={doctor.value}
                  >
                    {"DR. " + doctor.name}
                  </option>
                );
              })}
            </select>
            <input
              id="appointmentDate"
              type="date"
              name="appointmentDate"
              value={formData.selectedDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split("T")[0]}
              className="w-full border p-2 rounded "
              required
            />
            <select
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleInputChange}
              className="w-full border p-2 rounded grid grid-cols-3"
              required
              disabled={!formData.appointmentDate} // Disable if no date selected
            >
              {!formData.appointmentDate && ( // Render only if no date selected
                <option value="">Please select a date first</option>
              )}
              <option value="">Please select a appointment time</option>

              {availableTimes?.map((time) => (
                <option
                  key={time}
                  value={time}
                  style={{
                    width: "calc(100% / 3)",
                    display: "inline-block",
                    boxSizing: "border-box",
                  }}
                >
                  {time}
                </option>
              ))}
            </select>

            <textarea
              name="pastconsultation"
              value={formData.pastconsultation}
              onChange={handleInputChange}
              placeholder="Message"
              className="w-full border p-2 rounded "
            ></textarea>
          </div>
          <div className="md:space-y-4 space-y-2">
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full border p-2 rounded "
              required
            />

            <select
              name="patientGender"
              value={formData.patientGender}
              onChange={handleInputChange}
              className="w-full border p-2 rounded "
            >
              <option value="">-Select Gender-</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input
              type="number"
              name="patientAge"
              value={formData.patientAge}
              onChange={handleInputChange}
              placeholder="Age"
              maxLength={2}
              className="w-full border p-2 rounded "
            />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Location"
              className="w-full border p-2 rounded "
            />
            <input
              type="email"
              name="patientEmail"
              value={formData.patientEmail}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full border p-2 rounded "
            />
            <input
              type="tel"
              name="patientMobile"
              value={formData.patientMobile}
              onChange={handleInputChange}
              placeholder="Phone No"
              className="w-full border p-2 rounded "
              required
            />
          </div>
        </div>

        <div className={` justify-end mt-3 ${!modal ? "flex" : "hidden"}`}>
          <button
            id="submitFormButton"
            // onClick={submitForm}
            className="btn-theme px-12 py-2"
          >
            Submit
          </button>
          <div className={`${modal ? "flex" : "hidden"} justify-end mt-3`}>
                <button
                  // onClick={onClose}
                  className="border px-12 border-black rounded-lg hover:bg-gray-300 py-2 rounded mr-4 text-sm"
                >
                  Close
                </button>
                <button
                //  onClick={handleSubmit}
                 className="btn-theme px-12 py-2">
                  Submit
                </button>
              </div>
        </div>
      </form>
    </div>
  );
};

export default AppointmentModalForm;
