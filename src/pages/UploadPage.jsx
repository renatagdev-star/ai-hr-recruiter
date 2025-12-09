import React, { useState } from "react";

const API_BASE = "http://localhost:8000";

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!file || !jobDescription.trim()) {
      setError("Please upload a CV and provide a job description.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("job_description", jobDescription);

    setLoading(true);
    const resp = await fetch(`${API_BASE}/candidates/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await resp.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <>
      <div className="page-title">Upload Candidate</div>
      <div className="page-subtitle">AI will parse the CV, rank the candidate and send follow-ups.</div>

      <div className="card">
        <div className="card-title">Job Description</div>

        <textarea
          placeholder="Paste job description..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />

        <div className="card-title" style={{ marginTop: 20 }}>CV Upload</div>

        <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} />

        {error && <div style={{ color: "red", marginTop: 10 }}>{error}</div>}

        <button className="button-primary" onClick={handleSubmit} disabled={loading}>
          {loading ? "Processing..." : "Upload & Rank"}
        </button>
      </div>

      {result && (
        <div className="card">
          <div className="card-title">AI Result</div>

          <p><b>ID:</b> {result.id}</p>
          <p><b>Score:</b> {result.evaluation?.score}</p>
          <p><b>Recommendation:</b> {result.evaluation?.recommendation}</p>
          <p><b>Status:</b> <span className="status-pill">{result.status}</span></p>
        </div>
      )}
    </>
  );
};

export default UploadPage;
