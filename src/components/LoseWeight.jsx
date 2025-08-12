import React, { useState, useEffect } from "react";
import "./LoseWeight.css";
import PageHeader from "./PageHeader";
export default function LoseWeight() {
  const [formData, setFormData] = useState({
    goal: "",
    diet: "",
    days: "",
    currentWeight: "",
    targetWeight: "",
    allergies: "",
    favorites: "",
    favoriteMealTime: "",
    language: "kk", // default: қазақша
  });
  const [mealTable, setMealTable] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("mealTable");
    if (saved) setMealTable(saved);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      goal,
      diet,
      days,
      currentWeight,
      targetWeight,
      allergies,
      favorites,
      favoriteMealTime,
      language,
    } = formData;

    if (!diet || !days || !currentWeight || !targetWeight) {
      alert("Please fill in all required fields!");
      return;
    }

    setLoading(true);

    let prompt = "";

    if (language === "kk") {
      prompt = `
Маған келесі параметрлер бойынша ${days} күндік тағам кестесін жасап бер:

- Мақсат: арықтау
- Диета түрі: ${diet}
- Қазіргі салмақ: ${currentWeight} кг
- Қалаған салмақ: ${targetWeight} кг
- Тағамдық аллергия: ${allergies || "жоқ"}
- Ұнататын тағамдар: ${favorites || "көрсетілмеген"}
- Таңдаулы ас мезгілі: ${favoriteMealTime || "барлық"}

Тек <table> қолданып тағам кестесін құр. Кестенің астына тек 1-2 сөйлемдік қысқа түсініктеме не ескерту жаз. Басқа ештеңе жазба.
`;
    } else if (language === "ru") {
      prompt = `
Составь мне таблицу питания на ${days} дней по следующим параметрам:

- Цель: похудение
- Диета: ${diet}
- Текущий вес: ${currentWeight} кг
- Желаемый вес: ${targetWeight} кг
- Аллергии: ${allergies || "нет"}
- Любимые продукты: ${favorites || "не указано"}
- Предпочтительное время приёма пищи: ${favoriteMealTime || "все"}

Создай только таблицу с помощью <table>. Под таблицей добавь 1-2 строки с кратким пояснением или предупреждением. Никакого кода, описаний или других элементов не добавляй.
`;
    } else {
      prompt = `
Create a ${days}-day meal plan based on the following:

- Goal: weight loss
- Diet type: ${diet}
- Current weight: ${currentWeight} kg
- Target weight: ${targetWeight} kg
- Food allergies: ${allergies || "none"}
- Favorite foods: ${favorites || "not specified"}
- Preferred meal time: ${favoriteMealTime || "all"}

Only generate a <table> with the meal plan. Below the table, write a very short (1-2 sentences) explanation or warning. Do not include any extra code or description.
`;
    }

    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAo_H2fkN00fjm-sQkU2t2EdNDeSlx9Zeg",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      }
    );

    const data = await res.json();
    const rawText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "Кесте табылмады.";
    setMealTable(rawText);
    setLoading(false);
  };

  const saveToLocal = () => {
    localStorage.setItem("mealTable", mealTable);
    alert("Кесте сақталды!");
  };

  return (
    <div>
      <div>
        <PageHeader/>
      </div>
      <div className="app-container">
        <h1 className="app-title">🌐 FitMeal — Многоязчный таблица еды</h1>

        <form onSubmit={handleSubmit} className="meal-form">
          <label>🌍 Тілді таңдаңыз / Choose language / Выберите язык:</label>
          <select
            name="language"
            onChange={handleChange}
            className="meal-select"
          >
            <option value="kk">Қазақша</option>
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>

          <div className="center-form">
            <div className="choose-container">
              <label className="meal-label erekshe">Тип диеты:</label>
              {[
                "☘️вегетарианский",
                "🥩мясоедленный",
                "🥑кето",
                "🥒веган",
                "🥬палео",
                "🕑проголодание по интервалам",
              ].map((diet) => (
                <label className="diet-item" key={diet}>
                  <input
                    type="radio"
                    name="diet"
                    value={diet}
                    onChange={handleChange}
                  />
                  {diet}
                </label>
              ))}
            </div>

            <div className="big-form-cont">
              <label className="meal-label">Текущий вес (кг):</label>
              <input
                type="number"
                name="currentWeight"
                onChange={handleChange}
                className="meal-input"
              />

              <label className="meal-label">Цель (кг):</label>
              <input
                className="meal-input"
                type="number"
                name="targetWeight"
                onChange={handleChange}
              />

              <label className="meal-label">Күн саны:</label>
              <input
                className="meal-input"
                type="number"
                name="days"
                onChange={handleChange}
              />

              <label className="meal-label">Аллергияңыз:</label>
              <input
                className="meal-input"
                type="text"
                name="allergies"
                onChange={handleChange}
              />

              <label className="meal-label">Ұнататын тағамдар:</label>
              <input
                className="meal-input"
                type="text"
                name="favorites"
                onChange={handleChange}
              />
            </div>
          </div>

          <label className="meal-label bottom-label">
            Таңдаулы ас мезгілі:
          </label>
          <select
            className="meal-select"
            name="favoriteMealTime"
            onChange={handleChange}
          >
            <option value="">Барлығы</option>
            <option value="таңғы ас">Таңғы ас</option>
            <option value="түскі ас">Түскі ас</option>
            <option value="кешкі ас">Кешкі ас</option>
          </select>

          <button class="btn">
            <svg
              height="24"
              width="24"
              fill="#FFFFFF"
              viewBox="0 0 24 24"
              data-name="Layer 1"
              id="Layer_1"
              class="sparkle"
            >
              <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
            </svg>

            <span class="text">Generate</span>
          </button>
        </form>

        {loading && <p>Кесте жасалып жатыр...</p>}

        {mealTable && (
          <div>
            <div
              className="meal-table"
              dangerouslySetInnerHTML={{ __html: mealTable }}
            />

            <button onClick={saveToLocal}>💾 Save</button>
          </div>
        )}
      </div>
    </div>
  );
}
