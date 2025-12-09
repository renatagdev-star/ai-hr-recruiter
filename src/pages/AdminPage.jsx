import React, { useEffect, useState } from "react";

const API_BASE = "http://localhost:8000";

const AdminPage = () => {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/admin/candidates`)
      .then((r) => r.json())
      .then((d) => setList(d.candidates));
  }, []);

  return (
    <>
      <div className="page-title">Admin Dashboard</div>
      <div className="page-subtitle">View candidates, evaluations and follow-up answers.</div>

      <div className="card">
        <div className="card-title">Candidates</div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name / Email</th>
              <th>Score</th>
              <th>Recommendation</th>
            </tr>
          </thead>

          <tbody>
            {list.map((c) => (
              <tr key={c.id} onClick={() => setSelected(c)} style={{ cursor: "pointer" }}>
                <td>{c.id}</td>
                <td>{c.full_name}<br /><span style={{ color: "#777" }}>{c.email}</span></td>
                <td>{c.score}</td>
                <td>{c.recommendation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && (
        <div className="card">
          <div className="card-title">Details</div>
          <p><b>Name:</b> {selected.full_name}</p>
          <p><b>Status:</b> {selected.status}</p>
          <p><b>Follow-up questions:</b></p>
          {selected.followup_questions?.map((q, i) => (
            <div key={i}>• {q}</div>
          ))}
          <p style={{ marginTop: 20 }}><b>Follow-up answers:</b></p>
          {selected.followup_answers?.map((a, i) => (
            <div key={i}>• {a}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default AdminPage;