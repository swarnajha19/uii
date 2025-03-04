"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const AddModelPages = ({ onBack }) => {
  const [formData, setFormData] = useState({
    provider: "",
    useLLMModelNames: "",
    publicName: "",
    useLLMModel: "",
    openAIOrganizationID: "",
    apiKey: "",
    team: "",
    useInPassThroughRoutes: false,
    useLLMParams: '{ "rpm": 100, "timeout":0, "stream_timeout":0 }',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your API
    alert("Model added successfully!");
    onBack(); // Go back to models list
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Models
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-8">Add new model</h1>

      <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
        <form onSubmit={handleSubmit}>
          {/* Provider */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">
              Provider
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="provider"
              value={formData.provider}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* UseLLM Model Name(s) */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">
              UseLLM Model Name(s)
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="useLLMModelNames"
              value={formData.useLLMModelNames}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="mt-1 text-sm text-gray-500">
              Actual model name used for making llm.complete() call. We
              load-balance models with the same public name
            </p>
          </div>

          {/* Model Mappings */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">
              Model Mappings
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="border border-gray-300 rounded-md p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Public Name
                  </label>
                  <input
                    type="text"
                    name="publicName"
                    value={formData.publicName}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    UseLLM Model
                  </label>
                  <input
                    type="text"
                    name="useLLMModel"
                    value={formData.useLLMModel}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* OpenAI Organization ID */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">
              OpenAI Organization ID
            </label>
            <input
              type="text"
              name="openAIOrganizationID"
              value={formData.openAIOrganizationID}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* API Key */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">
              API Key
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="password"
              name="apiKey"
              value={formData.apiKey}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Advanced Settings */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Advanced Settings</h2>

            {/* Team */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Team</label>
              <input
                type="text"
                name="team"
                value={formData.team}
                onChange={handleChange}
                placeholder="Search or select a team"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Custom Pricing */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                Custom Pricing
              </label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="useInPassThroughRoutes"
                  name="useInPassThroughRoutes"
                  checked={formData.useInPassThroughRoutes}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="useInPassThroughRoutes"
                  className="ml-2 text-sm text-gray-700"
                >
                  Use in pass through routes
                </label>
              </div>
            </div>

            {/* UseLLM Params */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                UseLLM Params
              </label>
              <input
                type="text"
                name="useLLMParams"
                value={formData.useLLMParams}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Model
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModelPages;
