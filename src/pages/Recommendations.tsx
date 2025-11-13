import React, { useEffect, useState } from "react";
import "./Recommendations.css";
import { getRecommendations } from "../queries/fetchRecommendations";

interface Recommendation {
  name: string;
  title: string;
  date: string;
  image: { url: string };
  quote: string;
  body: string;
}

const Recommendations: React.FC = () => {
  const [recs, setRecs] = useState<Recommendation[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getRecommendations();
      setRecs(data);
    }
    fetchData();
  }, []);

  if (recs.length === 0) return <div>Loading...</div>;

  return (
    <div className="recommendations-container">
      <h2 className="recommendations-title">Professional Recommendations</h2>

      <div className="recommendations-grid">
        {recs.map((rec, index) => (
          <div key={index} className="recommendation-card">
            <div className="recommendation-header">
              <img
                src={rec.image.url}
                alt={rec.name}
                className="recommendation-avatar"
              />
              <div>
                <h3 className="rec-name">{rec.name}</h3>
                <p className="rec-title">{rec.title}</p>
                <p className="rec-date">{rec.date}</p>
              </div>
            </div>
            <blockquote className="rec-quote">“{rec.quote}”</blockquote>
            <p className="rec-body">{rec.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
