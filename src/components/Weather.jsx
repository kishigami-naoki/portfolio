import { useState, useEffect } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("osaka");
  const cities = {
    osaka: { lat: 34.7, lon: 135.5 },
    tokyo: { lat: 35.6, lon: 139.7 },
    sapporo: { lat: 43.0, lon: 141.3 },
  };
  const getWeatherIcon = (code) => {
    if (code === 0) return "☀️";
    if (code <= 2) return "🌤";
    if (code === 3) return "☁️";
    if (code >= 61) return "🌧";
    return "❓";
  };
  const getWeatherText = (code) => {
    if (code === 0) return "快晴";
    if (code <= 2) return "晴れ";
    if (code === 3) return "曇り";
    if (code >= 61) return "雨";
    return "不明";
  };
  const getWeatherBg = (code) => {
    if (code === 0) return "#60a5fa"; // 晴れ（青）
    if (code <= 2) return "#93c5fd"; // 晴れ
    if (code === 3) return "#9ca3af"; // 曇り
    if (code >= 61) return "#6b7280"; // 雨
    return "#e5e7eb";
  };

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const { lat, lon } = cities[city];
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
      );
      if (!res.ok) {
        throw new Error("サーバーエラーです");
      }
      const data = await res.json();
      setWeather(data.current_weather);
    } catch (err) {
      if (err.message === "サーバーエラーです") {
        setError("時間をおいて再試行してください");
      } else {
        setError("予期せぬエラー");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div>
      <h2>天気アプリ</h2>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="osaka">大阪</option>
        <option value="tokyo">東京</option>
        <option value="sapporo">札幌</option>
      </select>
      {loading && <p>読み込み中...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && (
        <div
          className="weather-box"
          style={{ background: getWeatherBg(weather.weathercode) }}
        >
          <p className="weather-icon">
            天気:{getWeatherIcon(weather.weathercode)}
          </p>
          <p>{getWeatherText(weather.weathercode)}</p>
          <p>気温: {weather.temperature}℃</p>
          <p>風速: {weather.windspeed}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
