const AddModelForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-2xl font-bold mb-6">Add new model</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium">
            Provider
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            name="provider"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            UseLLM Model Name(s)
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            name="useLLMModelNames"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="mt-1 text-sm text-gray-500">
            Actual model name used for making llm.complete() call. We
            load-balance models with the same public name
          </p>
        </div>

        <div>
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
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            OpenAI Organization ID
          </label>
          <input
            type="text"
            name="openAIOrganizationID"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            API Key
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="password"
            name="apiKey"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold">Advanced Settings</h3>

          <div>
            <label className="block mb-2 text-sm font-medium">Team</label>
            <input
              type="text"
              name="team"
              placeholder="Search or select a team"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Custom Pricing
            </label>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="useInPassThroughRoutes"
                name="useInPassThroughRoutes"
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

          <div>
            <label className="block mb-2 text-sm font-medium">
              UseLLM Params
            </label>
            <input
              type="text"
              name="useLLMParams"
              defaultValue={'{ "rpm": 100, "timeout":0, "stream_timeout":0 }'}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
            />
          </div>
        </div>

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
  );
};

export default AddModelForm;
