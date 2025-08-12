import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validatePassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
}

const particles = [
  { top: "5%", left: "8%", size: 12, opacity: 0.25, delay: "0s" },
  { top: "10%", left: "15%", size: 14, opacity: 0.3, delay: "0.2s" },
  { top: "12%", left: "50%", size: 16, opacity: 0.2, delay: "0.4s" },
  { top: "20%", left: "70%", size: 18, opacity: 0.15, delay: "0.6s" },
  { top: "25%", left: "25%", size: 14, opacity: 0.28, delay: "0.8s" },
  { top: "30%", left: "70%", size: 18, opacity: 0.15, delay: "1s" },
  { top: "35%", left: "45%", size: 12, opacity: 0.25, delay: "1.2s" },
  { top: "40%", left: "30%", size: 20, opacity: 0.12, delay: "1.4s" },
  { top: "45%", left: "65%", size: 8, opacity: 0.22, delay: "1.6s" },
  { top: "50%", left: "80%", size: 16, opacity: 0.35, delay: "1.8s" },
  { top: "55%", left: "10%", size: 10, opacity: 0.18, delay: "2s" },
  { top: "60%", left: "40%", size: 14, opacity: 0.28, delay: "2.2s" },
  { top: "65%", left: "55%", size: 12, opacity: 0.3, delay: "2.4s" },
  { top: "70%", left: "20%", size: 16, opacity: 0.2, delay: "2.6s" },
  { top: "75%", left: "75%", size: 14, opacity: 0.22, delay: "2.8s" },
  { top: "80%", left: "45%", size: 18, opacity: 0.25, delay: "3s" },
  { top: "85%", left: "30%", size: 12, opacity: 0.18, delay: "3.2s" },
  { top: "90%", left: "70%", size: 16, opacity: 0.2, delay: "3.4s" },
  { top: "95%", left: "15%", size: 10, opacity: 0.15, delay: "3.6s" },
  { top: "15%", left: "80%", size: 20, opacity: 0.12, delay: "3.8s" },
];

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!validateEmail(email)) {
      setError("Email имеет неверный формат!");
      setLoading(false);
      return;
    }
    if (!validatePassword(password)) {
      setError("Пароль должен содержать минимум 6 символов, буквы и цифры!");
      setLoading(false);
      return;
    }
    if (password !== confirm) {
      setError("Пароли не совпадают!");
      setLoading(false);
      return;
    }

    try {
      const res = await register(email, password);
      if (res.success) {
        navigate("/");
      } else {
        setError(res.message);
      }
    } catch {
      setError("Произошла ошибка. Попробуйте снова.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          {particles.map((p, i) => (
            <div
              key={i}
              className="particle"
              style={{
                top: p.top,
                left: p.left,
                width: p.size + "px",
                height: p.size + "px",
                opacity: p.opacity,
                animationDelay: p.delay,
              }}
            />
          ))}

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />

          <div className="password-wrapper">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Пароль"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <span
              className="password-toggle"
              onClick={() => setShowPass((v) => !v)}
              title={showPass ? "Скрыть" : "Показать"}
            >
              {showPass ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="password-wrapper">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Подтвердите пароль"
              required
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              autoComplete="new-password"
            />
            <span
              className="password-toggle"
              onClick={() => setShowConfirm((v) => !v)}
              title={showConfirm ? "Скрыть" : "Показать"}
            >
              {showConfirm ? "🙈" : "👁️"}
            </span>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Регистрируем..." : "Зарегистрироваться"}
          </button>

          {error && <div className="error-msg">{error}</div>}
        </form>

        <p>
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </p>
      </div>
    </div>
  );
}
