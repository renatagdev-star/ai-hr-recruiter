import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_BASE = "http://localhost:8000";

const FollowupPage = () => {
  const { token } = useParams();
  const [data, setData] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/followup/${token}`)
      .then((r) => r.json())
      .then((d) => {
        setData(d);
        setAnswers(d.questions.map(() => ""));
      });
  }, [token]);

  const submit = async () => {
    await fetch(`${API_BASE}/followup/${token}/answers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers }),
    });
    setSubmitted(true);
  };

  if (!data) return <div>Loading...</div>;
  if (submitted) return <div className="page-title">Thank you for your answers!</div>;

  return (
    <>
      <div className="page-title">Follow-up Questions</div>
      <div className="page-subtitle">Hi {data.full_name}, please answer the questions below.</div>

      <div className="card">
        {data.questions.map((q, i) => (
          <div key={i} style={{ marginBottom: 20 }}>
            <b>{i + 1}. {q}</b>
            <textarea
              style={{ marginTop: 8 }}
              value={answers[i]}
              onChange={(e) => {
                const a = [...answers];
                a[i] = e.target.value;
                setAnswers(a);
              }}
            />
          </div>
        ))}

        <button className="button-primary" onClick={submit}>Submit Answers</button>
      </div>
    </>
  );
};

export default FollowupPage;
