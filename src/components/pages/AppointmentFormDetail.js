// AppointmentFormDetail.js
import {
  IconCalendarFilled,
  IconChevronRight,
  IconClockHour3,
  IconPhoneFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import ApiService from "../../controller/apiService";
import AppointmentFormDetailInput from "../AppointmentFormDetailInput";

const AppointmentFormDetail = ({ details }) => {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [selectedDate, setSelectedDate] = useState();
  const [availableTimes, setAvailableTimes] = useState();

  const [formData, setFormData] = useState({
    appointmentDate: "", // date
    appointmentTime: "", // time
    selectedDate: selectedDate,
    pastconsultation: "", // message
    patientName: "", // name
    patientGender: "", // gender
    patientAge: "", // age
    location: "", // location
    patientEmail: "", // email
    patientMobile: "", // phone
    preferredDoctor: "62b590d1c9b6fa449205202c"
  });
  useEffect(() => {}, [formData]);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitResponse = await ApiService.post(
        "submitappointment",
        formData
      );
      if (submitResponse.status === 200) {
        window.alert(submitResponse.data.result.message);
        setFormData({
          preferredDoctor: "62b590d1c9b6fa449205202c", // doctor
          preferredDepartment: "", // speciality
          appointmentDate: "", // date
          appointmentTime: "", // time
          selectedDate: "",
          pastconsultation: "", // message
          patientName: "", // name
          patientGender: "", // gender
          patientAge: "", // age
          location: "", // location
          patientEmail: "", // email
          patientMobile: "", // phone
          // doctorid: doctorid,
        });
      } else window.alert("form not submitted");
      // Handle response
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchAndSetBookedAppointments = async () => {
      try {
        const bookedAppointments = await bookedSlots();
        const availableTimeSlots = times.filter(
          (time) => !bookedAppointments?.bookedslots?.includes(time)
        );
        setAvailableTimes(availableTimeSlots);
      } catch (error) {
        console.log(error);
      }
    };
    if (formData.appointmentDate) fetchAndSetBookedAppointments();
  }, [formData.appointmentDate]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      preferredDoctor: "62b590d1c9b6fa449205202c", // doctor
      preferredDepartment: details?.department,
    });
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
    <div className=" bg-white rounded-xl md:shadow-md">
      <div className="p-5">
        <h1 className="font-semibold text-center mb-4 text-xl">
          Book an Appointment
        </h1>
        <form
          className="space-y-3 text-gray-700 max-sm:text-sm"
          onSubmit={handleFormSubmit}
        >
          <AppointmentFormDetailInput
            Icon={IconUserFilled}
            type="text"
            placeholder="Name"
            value={formData.patientName}
            handleChange={handleChange}
            name={"patientName"}
            required={true}
          />
          <AppointmentFormDetailInput
            Icon={IconPhoneFilled}
            type="tel"
            placeholder="Phone Number"
            value={formData.patientMobile}
            name={"patientMobile"}
            handleChange={handleChange}
            required={true}
          />
          <AppointmentFormDetailInput
            Icon={IconCalendarFilled}
            type="date"
            placeholder="Appointment Date"
            value={formData.appointmentDate}
            name={"appointmentDate"}
            handleChange={handleChange}
            id={"appointmentDate"}
            required={true}
          />
          {/* <AppointmentFormDetailInput
            Icon={IconClockHour3}
            type="time"
            placeholder="Appointment Time"
            value={formData.appointmentTime}
            name={"appointmentTime"}
            handleChange={handleChange}
          /> */}
          <div className="p-1 flex">
            <div className="w-full relative">
              <select
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleChange}
                className="size-full w-full outline-0 p-2 grid grid-cols-3 border-b border-black text-sm"
                required
                disabled={!formData.appointmentDate} // Disable if no date selected
              >
                {!formData.appointmentDate && ( // Render only if no date selected
                  <option value="">Please select a date first</option>
                )}
                  <option value="">Please select a Appointment time</option>
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
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-theme-gradient2 text-white px-6 py-2 rounded-lg flex items-center">Submit <IconChevronRight className="border rounded-full md:px-5 px-3 max-sm:py-1 md:h-8 h-6 md:ms-5 ms-2" size={60}></IconChevronRight> </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentFormDetail;
