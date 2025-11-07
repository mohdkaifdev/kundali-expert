import axios from "axios";

const heygen = axios.create({
  baseURL: "http://localhost:5000/api",
});

// ✅ Get available avatars
export async function listAvatars() {
  const res = await heygen.get("/avatars");
  return res.data;
}

// ✅ Get available voices
export async function listVoices() {
  const res = await heygen.get("/voices");
  return res.data;
}

// ✅ Generate talking avatar video
export async function generateVideo({ avatar_id, voice_id, input_text }) {
  const payload = {
    title: "AI Astrologer Session",
    video_inputs: [
      {
        character: { type: "avatar", avatar_id, avatar_style: "normal" },
        voice: { type: "text", input_text, voice_id },
        background: { type: "color", value: "#ffffff" },
      },
    ],
  };

  const res = await heygen.post("/video/generate", payload);
  return res.data;
}

// ✅ Check video status
export async function getVideoStatus(video_id) {
  const res = await heygen.get(`/video/status/${video_id}`);
  return res.data;
}
