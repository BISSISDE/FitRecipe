import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const { user, logout } = useAuth();
  const [name, setName] = useState(() => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find((u) => u.email === user?.email);
    return found?.name || "";
  });
  const [newPass, setNewPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [msg, setMsg] = useState("");
  const [nameMsg, setNameMsg] = useState("");
  const navigate = useNavigate();

  const handleSaveName = () => {
    if (!name.trim()) {
      setNameMsg("Имя не должно быть пустым!");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const idx = users.findIndex((u) => u.email === user.email);
    if (idx !== -1) {
      users[idx].name = name;
      localStorage.setItem("users", JSON.stringify(users));
      setNameMsg("Ваше имя успешно сохранено!");
    } else {
      setNameMsg("Ошибка! Пользователь не найден.");
    }
    setTimeout(() => setNameMsg(""), 2000);
  };

  const handleChangePass = () => {
    if (newPass.length < 6) {
      setMsg("Новый пароль слишком короткий!");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const idx = users.findIndex((u) => u.email === user.email);
    if (idx !== -1) {
      users[idx].password = newPass;
      localStorage.setItem("users", JSON.stringify(users));
      setMsg("Пароль успешно изменён!");
      setNewPass("");
    } else {
      setMsg("Ошибка! Пользователь не найден.");
    }
    setTimeout(() => setMsg(""), 2000);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) return <div>Загрузка...</div>;

  return (
    <div className="profile_container">
      <h2>Профиль</h2>

      <div className="profile_field">
        <div className="profile_label">Email:</div>
        <div>{user.email}</div>
      </div>

      <div className="profile_field">
        <div className="profile_label">Ваше имя:</div>
        <input
          type="text"
          value={name}
          className="profile_input"
          onChange={(e) => setName(e.target.value)}
        />
        <button className="profile_button" onClick={handleSaveName}>
          Сохранить
        </button>
        {nameMsg && (
          <div
            className="profile_message"
            style={{
              color: nameMsg.includes("успешно") ? "lightgreen" : "tomato",
            }}
          >
            {nameMsg}
          </div>
        )}
      </div>

      <div className="profile_field">
        <div className="profile_label">Новый пароль:</div>
        <div className="pass_container">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Новый пароль"
            value={newPass}
            className="profile_input"
            onChange={(e) => setNewPass(e.target.value)}
          />
          <span
            className="pass_eye"
            onClick={() => setShowPass((v) => !v)}
            title={showPass ? "Скрыть" : "Показать"}
          >
            {showPass ? "🙈" : "👁️"}
          </span>
        </div>
        <button className="profile_button" onClick={handleChangePass}>
          Изменить
        </button>
        {msg && (
          <div
            className="profile_message"
            style={{ color: msg.includes("успешно") ? "lightgreen" : "tomato" }}
          >
            {msg}
          </div>
        )}
      </div>

      <button className="profile_button profile_logout" onClick={handleLogout}>
        Выйти
      </button>
    </div>
  );
}
