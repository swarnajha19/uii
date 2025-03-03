const LogsPage = () => {
    const columns = [
      { name: "Model ID", key: "modelId" },
      { name: "Public Model Name", key: "publicModelName" },
      { name: "Provider", key: "provider" },
      { name: "LLM Model Name", key: "llmModelName" },
      { name: "Created At", key: "createdAt" },
      { name: "Status", key: "status" },
      { name: "Created By", key: "createdBy" },
      { name: "Total Cost", key: "totalCost" },
    ]
  
    // Sample data - empty for now
    const logs = []
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Logs</h1>
  
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {logs.length > 0 ? (
                logs.map((log) => (
                  <tr key={log.modelId}>
                    {columns.map((column) => (
                      <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {log[column.key]}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="px-6 py-8 text-center text-sm text-gray-500">
                    No models found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  export default LogsPage
  
  