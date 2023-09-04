import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    age: "",
    highestEducation: "",
    studiedInstitute: "",
    course: "",
    experience: "",
    addmitedInstitute: "",
    studyProgram: "",
    currentCountry: "",
    futureGoals: "",
    listeningScore: "",
    readingScore: "",
    speakingScore: "",
    writingScore: "",
    tutionBoolean: "",
    gicBoolean: "",
    gicPay: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClear = (e) => {
    setFormData({
      email: "",
      fullName: "",
      age: "",
      highestEducation: "",
      studiedInstitute: "",
      course: "",
      experience: "",
      addmitedInstitute: "",
      studyProgram: "",
      currentCountry: "",
      futureGoals: "",
      listeningScore: "",
      readingScore: "",
      speakingScore: "",
      writingScore: "",
      tutionBoolean: "",
      gicBoolean: "",
      gicPay: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/submit-form", formData);
      setTimeout(() => {
        // Simulated success
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 3000, // Notification will automatically close after 3 seconds
          hideProgressBar: false,
        });

        // Clear form fields
        handleClear();
      }, 1000);
    } catch (error) {
      console.error(error);
      // Handle errors appropriately
    }
  };

  return (
    <div className="bg-gradient-to-r from-slate-500 from-10% via-gra via-30% to-blue-400 to-90% text-white shadow-lg rounded-lg p-8 mt-7 max-w-lg mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Effizient.</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg bg-indigo-200 text-black placeholder-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-1">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Your Full Name"
            className="w-full px-4 py-2 rounded-lg bg-indigo-200 text-black placeholder-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium mb-1">
            Age <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
            required
            placeholder="Your Age"
            className="w-full px-4 py-2 rounded-lg bg-indigo-200 text-black placeholder-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium mb-1">
            Highest Level of Education <span className="text-red-600">*</span>
          </label>
          <select
            type="select"
            name="highestEducation"
            id="highestEducation"
            value={formData.highestEducation}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-indigo-200 text-black placeholder-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
          >
            <option value="12">Garde 12</option>
            <option value="diploma">Diploma</option>
            <option value="bachelore">Bachelors Degree</option>
            <option value="ms">Masters Degree</option>
            <option value="phd">PhD</option>
          </select>
        </div>
        <div>
          <label htmlFor="Institute" className="block text-sm font-medium mb-1">
            Institute where you completed your highest level of education{" "}
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="studiedInstitute"
            id="fullName"
            value={formData.studiedInstitute}
            onChange={handleChange}
            required
            placeholder="Your answer"
            className="w-full px-4 py-2 rounded-lg bg-indigo-200 text-black placeholder-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-1">
            What did you study <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="course"
            id="course"
            value={formData.course}
            onChange={handleChange}
            required
            placeholder="Your answer"
            className="w-full px-4 py-2 rounded-lg bg-indigo-200 text-black placeholder-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <label
            htmlFor="experience"
            className="block text-sm font-medium mb-1"
          >
            Do you have any relevant work experience?{" "}
            <span className="text-red-600">*</span>
            <br />
            Write None if no work experience. Provide the following details if
            yes:
            <br />
            <br />
            1. Job Title
            <br />
            2. Company Name
            <br />
            3. Job duties
            <br />
            <br />
            <i>
              Sample Answer: I worked as a Sales Manager at Effizient
              Immigration Inc from Jan 2022 till Feb 2023. In this role, I
              managed sales operations, reaching out to leads, lead the outreach
              program, ensured meeting monthly targets.
            </i>
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Your answer"
            className="w-full px-4 py-2 rounded-lg bg-indigo-200 text-black placeholder-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <label
            htmlFor="addmitedInstitute"
            className="block text-sm font-medium mb-1"
          >
            What institute did you get admitted to in Canada?
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="addmitedInstitute"
            id="addmitedInstitute"
            value={formData.addmitedInstitute}
            onChange={handleChange}
            required
            placeholder="Your answer"
            className="w-full px-4 py-2 rounded-lg bg-indigo-200 text-black placeholder-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <label
            htmlFor="studyProgram"
            className="block text-sm font-medium mb-1"
          >
            What is your program of study in Canada?
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="studyProgram"
            id="studyProgram"
            value={formData.studyProgram}
            onChange={handleChange}
            required
            placeholder="Your answer"
            className="w-full px-4 py-2 rounded-lg bg-indigo-200 text-black placeholder-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <label
            htmlFor="currentCountry"
            className="block text-sm font-medium mb-1"
          >
            Which country are you applying from?{" "}
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="currentCountry"
            id="currentCountry"
            value={formData.currentCountry}
            onChange={handleChange}
            required
            placeholder="Your answer"
            className="w-full px-4 py-2 rounded-lg bg-indigo-200 text-black placeholder-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <label
            htmlFor="futureGoals"
            className="block text-sm font-medium mb-1"
          >
            What are your future goals? <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="futureGoals"
            id="futureGoals"
            value={formData.futureGoals}
            onChange={handleChange}
            required
            placeholder="Your answer"
            className="w-full px-4 py-2 rounded-lg bg-indigo-200 text-black placeholder-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <label
            htmlFor="listeningScore"
            className="block text-sm font-medium mb-1"
          >
            English Scores - Listening <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            name="listeningScore"
            id="listeningScore"
            value={formData.listeningScore}
            onChange={handleChange}
            required
            placeholder="Your answer"
            className="w-full px-4 py-2 rounded-lg bg-indigo-200 text-black placeholder-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <label
            htmlFor="readingScore"
            className="block text-sm font-medium mb-1"
          >
            English Scores - Reading
            <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            name="readingScore"
            id="readingScore"
            value={formData.readingScore}
            onChange={handleChange}
            required
            placeholder="Your answer"
            className="w-full px-4 py-2 rounded-lg bg-indigo-200 text-black placeholder-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <label
            htmlFor="speakingScore"
            className="block text-sm font-medium mb-1"
          >
            English Scores - Speaking
            <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            name="speakingScore"
            id="speakingScore"
            value={formData.speakingScore}
            onChange={handleChange}
            required
            placeholder="Your answer"
            className="w-full px-4 py-2 rounded-lg bg-indigo-200 text-black placeholder-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-1">
            English Scores - Writing
            <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            name="writingScore"
            id="writingScore"
            value={formData.writingScore}
            onChange={handleChange}
            required
            placeholder="Your answer"
            className="w-full px-4 py-2 rounded-lg bg-indigo-200 text-black placeholder-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <label
            htmlFor="tutionBoolean"
            className="block text-sm font-medium mb-1"
          >
            Did you pay your first year tuition?
            <span className="text-red-600">*</span>
          </label>
          <label>
            <input
              type="radio"
              name="tutionBoolean"
              value="yes"
              checked={formData.tutionBoolean === "yes"}
              onChange={handleChange}
            />{" "}
            Yes
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="tutionBoolean"
              value="no"
              checked={formData.tutionBoolean === "no"}
              onChange={handleChange}
            />{" "}
            No
          </label>
        </div>
        <div>
          <label
            htmlFor="gicBoolean"
            className="block text-sm font-medium mb-1"
          >
            How much tuition fee did you pay?
            <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            name="gicBoolean"
            id="gicBoolean"
            value={formData.gicBoolean}
            onChange={handleChange}
            required
            placeholder="Your answer"
            className="w-full px-4 py-2 rounded-lg bg-indigo-200 text-black placeholder-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div>
          <label htmlFor="gicPay" className="block text-sm font-medium mb-1">
            How much did you pay towards GIC?
            <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            name="gicPay"
            id="gicPay"
            value={formData.gicPay}
            onChange={handleChange}
            required
            placeholder="Your answer"
            className="w-full px-4 py-2 rounded-lg bg-indigo-200 text-black placeholder-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-auto py-2 px-4 pr-2 bg-gradient-to-r from-purple-500 to-purple-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg text-white font-semibold focus:outline-none focus:ring focus:ring-indigo-300"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="flex-auto py-2 px-4 pl-2 bg-gradient-to-r from-purple-500 to-purple-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg text-white font-semibold focus:outline-none focus:ring focus:ring-indigo-300"
          >
            Clear
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;
