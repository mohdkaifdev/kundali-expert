import React, { useState, useEffect } from "react";
import {
  listAvatars,
  listVoices,
  generateVideo,
  getVideoStatus,
} from "../services/HeygenService";

export default function HeygenVideoGenerator() {
  const [text, setText] = useState("");
  const [avatars, setAvatars] = useState([]);
  const [voices, setVoices] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [selectedVoice, setSelectedVoice] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [gifUrl, setGifUrl] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Fallback defaults
  const DEFAULT_AVATAR_ID = "651c0e52d95f5c001b63c1b8";
  const DEFAULT_VOICE_ID = "8fda3e21f8e04e2ab1f4477d8a9fa5d9";

  // ✅ Load Avatars & Voices
  useEffect(() => {
    async function fetchData() {
      try {
        const avatarRes = await listAvatars();
        const voiceRes = await listVoices();

        console.log("Avatar API Response:", avatarRes);
        console.log("Voice API Response:", voiceRes);

        // ✅ Try both response formats
        const avatarList =
          avatarRes?.data?.avatars ||
          avatarRes?.data?.data?.avatars ||
          avatarRes?.avatars ||
          [];
        const voiceList =
          voiceRes?.data?.voices ||
          voiceRes?.data?.data?.voices ||
          voiceRes?.voices ||
          [];

        setAvatars(avatarList);
        setVoices(voiceList);

        if (avatarList.length > 0)
          setSelectedAvatar(avatarList[0].avatar_id || avatarList[0].id);
        if (voiceList.length > 0)
          setSelectedVoice(voiceList[0].voice_id || voiceList[0].id);
      } catch (err) {
        console.error("Error loading avatars/voices:", err);
        alert("Failed to load avatars or voices. Check your backend API.");
      }
    }
    fetchData();
  }, []);

  // ✅ Generate video
  const handleGenerate = async () => {
    if (!text.trim()) {
      alert("Please enter text to generate video.");
      return;
    }

    setLoading(true);
    setVideoUrl("");
    setGifUrl("");

    const avatarId = selectedAvatar || DEFAULT_AVATAR_ID;
    const voiceId = selectedVoice || DEFAULT_VOICE_ID;

    try {
      const res = await generateVideo({
        avatar_id: avatarId,
        voice_id: voiceId,
        input_text: text,
      });

      console.log("Generate Video Response:", res);

      const videoId =
        res?.data?.video_id || res?.data?.data?.video_id || res?.data?.id;

      if (!videoId) throw new Error("No video_id returned");

      // ✅ Poll until video completes
      const pollVideo = async () => {
        const statusRes = await getVideoStatus(videoId);
        const data = statusRes?.data?.data || statusRes?.data;

        if (data?.gif_url) setGifUrl(data.gif_url);

        if (data?.status === "completed" && data?.video_url) {
          setVideoUrl(data.video_url);
          setLoading(false);
        } else if (data?.status === "failed") {
          alert("Video generation failed.");
          setLoading(false);
        } else {
          setTimeout(pollVideo, 4000);
        }
      };

      pollVideo();
    } catch (err) {
      console.error("Video generation error:", err);
      alert("Failed to generate video.");
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-3">🎬 HeyGen AI Video Generator</h2>
{/* 
{gifUrl && (
  <div className="mt-4">
    <h5>GIF Preview</h5>
    <img
      src={gifUrl}
      alt="GIF Preview"
      style={{ maxWidth: "100%", borderRadius: 10 }}
    />
  </div>
)} 
*/}

      {videoUrl && (
        <div className="mt-4">
          <h5>Final Video</h5>
          <video
            controls
            style={{ maxWidth: "100%", borderRadius: 10 }}
            src={videoUrl}
          ></video>
        </div>
      )}
      <textarea
        className="form-control mb-3"
        rows="3"
        placeholder="Enter your text to generate video..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div className="d-flex justify-content-center gap-2 mb-3">
        <select
          className="form-select w-auto"
          value={selectedAvatar}
          onChange={(e) => setSelectedAvatar(e.target.value)}
        >
          <option value="">Select Avatar</option>
          {avatars.map((a) => (
            <option key={a.avatar_id || a.id} value={a.avatar_id || a.id}>
              {a.avatar_name || a.name}
            </option>
          ))}
        </select>

        <select
          className="form-select w-auto"
          value={selectedVoice}
          onChange={(e) => setSelectedVoice(e.target.value)}
        >
          <option value="">Select Voice</option>
          {voices.map((v) => (
            <option key={v.voice_id || v.id} value={v.voice_id || v.id}>
              {v.name}
            </option>
          ))}
        </select>
      </div>

      <button
        className="btn btn-primary"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Video"}
      </button>

      
    </div>
  );
}
