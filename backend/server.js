const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "sk_V2_hgu_klmGzXJEUDi_SXF7Dpf33nAQgBDuavqR8xu9p4ccZAMa";
const HEYGEN_API = "https://api.heygen.com";

// ✅ Get Avatars
app.get("/api/avatars", async (req, res) => {
  try {
    const response = await axios.get(`${HEYGEN_API}/v2/avatars`, {
      headers: { "X-Api-Key": API_KEY },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching avatars:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// ✅ Get Voices
app.get("/api/voices", async (req, res) => {
  try {
    const response = await axios.get(`${HEYGEN_API}/v2/voices`, {
      headers: { "X-Api-Key": API_KEY },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching voices:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// ✅ Generate Video

app.post("/api/video/generate", async (req, res) => {
  try {
    const payload = {
      ...req.body,
      resolution: "480p", // ✅ force free plan resolution
       dimension: {
        width: 854,
        height: 480,
      },
    };

    const response = await axios.post(`${HEYGEN_API}/v2/video/generate`, payload, {
      headers: { "X-Api-Key": API_KEY, "Content-Type": "application/json" },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error generating video:", error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || error.message });
  }
});
// ✅ Check Video Status (correct version)
app.get("/api/video/status/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `${HEYGEN_API}/v1/video_status.get?video_id=${req.params.id}`,
      {
        headers: { "X-Api-Key": API_KEY },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error checking video status:", error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));
