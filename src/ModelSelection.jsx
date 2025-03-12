import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function ModelSelection() {
  // State for form fields
  const [formData, setFormData] = useState({
    team: "",
    project_name: "",
    project_id: "",
    model: "",
    model_version: "",
    start_date: "",
    end_date: "",
    requested_quota: "",
    quota_justification: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const virtualId = localStorage.getItem("virtual_id"); // Fetch virtual ID from localStorage
    if (!virtualId) {
      setMessage("❌ User not logged in!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8001/store_model_request/${virtualId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setMessage("✅ Model request stored successfully!");
        setFormData({
          team: "",
          project_name: "",
          project_id: "",
          model: "",
          model_version: "",
          start_date: "",
          end_date: "",
          requested_quota: "",
          quota_justification: "",
        });
      } else {
        setMessage("❌ Failed to store model request.");
      }
    } catch (error) {
      setMessage("❌ Error storing model request.");
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">MODEL SELECTION</h1>
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-200 rounded-md hover:bg-gray-50">
          <ArrowUpDown className="w-4 h-4" />
          <span>Sort</span>
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Select a Model</h2>

        {message && <p className="mb-4 text-center font-semibold">{message}</p>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {[
            { label: "Team", name: "team" },
            { label: "Project Name", name: "project_name" },
            { label: "Project ID", name: "project_id" },
            { label: "Model", name: "model" },
            { label: "Model Version", name: "model_version" },
            { label: "Start Date", name: "start_date" },
            { label: "End Date", name: "end_date" },
            { label: "Requested Quota", name: "requested_quota" },
            { label: "Quota Justification", name: "quota_justification" },
          ].map(({ label, name }) => (
            <div key={name}>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                {label}
              </label>
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={`Enter ${label}`}
                className="w-full p-2 border rounded-md"
                required={name !== "quota_justification"} // Optional field
              />
            </div>
          ))}

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Request Model"}
            </button>

            <Link to="/chatbot">
              <button
                type="button"
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Chatbot
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
