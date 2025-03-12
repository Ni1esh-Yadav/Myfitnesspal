import { useState } from "react";

const CsvUploaderWithGrafana = () => {
  const [file, setFile] = useState(null);
  const [timestampColumn, setTimestampColumn] = useState("");
  const [uploadId, setUploadId] = useState(null);
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files.length) {
      setFile(event.target.files[0]);
      setMessage("");
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a CSV file.");
      return;
    }
    if (!timestampColumn.trim()) {
      alert("Please specify the timestamp column.");
      return;
    }

    const formData = new FormData();
    formData.append("csvFile", file);
    formData.append("timestampColumn", timestampColumn);

    try {
      setUploading(true);
      setMessage("");

      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(`✅ Upload Successful! Upload ID: ${result.uploadId}`);
        setUploadId(result.uploadId);
      } else {
        setMessage(`❌ Upload Failed: ${result.error || "Unknown error"}`);
      }
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-slate-100 shadow-md rounded-lg p-6 mt-20 mb-10">
      <h1 className="py-2 text-red-500">
        NOTE: Some graphs are timeseries graph so your csv data should have a
        column name "timestamp" and You need to enter the column name below
      </h1>
      <h2 className="text-xl font-bold text-blue-600 mb-4">Upload CSV File</h2>

      <div className="flex flex-col">
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />

        {file && <p className="mt-3 text-gray-600">📁 {file.name}</p>}

        <input
          type="text"
          placeholder="Enter timestamp column name"
          value={timestampColumn}
          onChange={(e) => setTimestampColumn(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full mt-3"
        />

        <button
          onClick={handleUpload}
          disabled={uploading}
          className={`mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition ${
            uploading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>

        {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}

        {uploadId && (
          <div className="mt-6 w-full">
            <h3 className="text-lg font-bold text-blue-600 mb-2">
              Grafana Panel (Upload ID: {uploadId})
            </h3>
            <iframe
              src={`http://localhost:3000/d-solo/cefl6vm3nc0e8e/new?orgId=1&from=1741739868630&to=1741761468630&timezone=browser&var-uploadId=${uploadId}&var-query0=&editIndex=0&panelId=1&__feature.dashboardSceneSolo`}
              width="100%"
              height="300"
              frameborder="0"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default CsvUploaderWithGrafana;
