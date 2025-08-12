import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Filter.css";
import PageHeader from "./PageHeader.jsx";
import "./LoseWeight.css";
import translations from "../translishions/translations.js";

export default function AIRecipePage() {
  const [language, setLanguage] = useState("kk");
  const t = translations[language];

  const [calories, setCalories] = useState(500);
  const [mealType, setMealType] = useState(t.meals[0]);
  const [difficulty, setDifficulty] = useState(t.difficulties[0]);
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState("");

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    setMealType(translations[newLang].meals[0]);
    setDifficulty(translations[newLang].difficulties[0]);
  };

  const fetchAIRecipe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setRecipe("");

    const prompt = `
Менің тоңазытқымда бар заттар: ${ingredients}.
Маған шеф-повардың деңгейінде, ең пайдалы, нақты әрі түсінікті рецепт жасаңыз.
Рецептте тағамның аты, қажетті ингредиенттер мен әр қадамды қысқаша, бірақ толық әрі түсінікті етіп жазыңыз.
Рецепттің калориясы шамамен ${calories}, тағам түрі - ${mealType}, дайындалу қиындығы - ${difficulty}.
Қосымша талаптар: ${comments || "Ешқандай қосымша талап жоқ"}.
Жауапты таза әрі кәсіби тілмен, дұрыс әрі мәнді ақпаратпен ғана беріңіз.

My fridge contains: ${ingredients}.
Make a recipe like a top chef, very clear, practical, and detailed but concise.
Include the dish name, ingredients, and step-by-step cooking instructions.
Calories about ${calories}, meal type is ${mealType}, difficulty level is ${difficulty}.
Additional requirements: ${comments || "No additional requirements"}.
Please provide a professional, clear, and useful response.

В моем холодильнике есть: ${ingredients}.
Приготовь рецепт как шеф-повар — максимально полезный, понятный и точный.
Укажи название блюда, ингредиенты и краткие, но полные шаги приготовления.
Калорийность около ${calories}, тип блюда — ${mealType}, уровень сложности — ${difficulty}.
Дополнительные требования: ${comments || "Нет дополнительных требований"}.
Пожалуйста, дай профессиональный, ясный и полезный ответ.

Жауап беріңіз тілде: ${
      language === "kk"
        ? "қазақша"
        : language === "ru"
        ? "по-русски"
        : "in English"
    }.
Тек рецепт атауы мен негізгі қадамдарды қосыңыз.
`;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDU6uYQWRaqSHQxlHTofXNCqba5H6bdyLQ`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
        }
      );
      const data = await response.json();
      const result =
        data.candidates?.[0]?.content?.parts?.[0]?.text || "No recipe found.";
      setRecipe(result);
    } catch (error) {
      setRecipe("❌ Қате пайда болды. Қайтадан көріңіз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHeader />
      <div className="filterPart">
        <div className="recipeFinder">
          <div className="languageSelectContainer">
            <select
              onChange={handleLanguageChange}
              value={language}
              className="languageSelect"
            >
              <option value="kk">🇰🇿 Қазақша</option>
              <option value="ru">🇷🇺 Русский</option>
              <option value="en">🇬🇧 English</option>
            </select>
          </div>

          <h1 className="recipeTitle">🍽️ {t.title}</h1>

          <form onSubmit={fetchAIRecipe} className="recipeForm">
            <label className="formGroup">
              🔥 {t.calories}: <strong>{calories}</strong>
              <input
                type="range"
                min="100"
                max="1000"
                step="50"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                className="rangeInput"
              />
            </label>

            <label className="formGroup">
              🍲 {t.mealType}:
              <select
                value={mealType}
                onChange={(e) => setMealType(e.target.value)}
                className="selectInput"
              >
                {t.meals.map((meal) => (
                  <option key={meal} value={meal}>
                    {meal}
                  </option>
                ))}
              </select>
            </label>

            <label className="formGroup">
              🎯 {t.difficulty}:
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="selectInput"
              >
                {t.difficulties.map((diff) => (
                  <option key={diff} value={diff}>
                    {diff}
                  </option>
                ))}
              </select>
            </label>

            <label className="formGroup">
              🧺 {t.ingredients}:
              <input
                type="text"
                placeholder={t.placeholder}
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                className="textInput"
              />
            </label>

            <label className="formGroup">
              💬 {t.comments || "Қосымша талаптар"}:
              <input
                type="text"
                placeholder={
                  t.commentsPlaceholder ||
                  "Мысалы: белок көп, аллергияға болмайды..."
                }
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="textInput"
              />
            </label>

            <button type="submit" disabled={loading} className="submitButton">
              {loading ? "🤖 " + t.searching : "🔍 " + t.search}
            </button>
          </form>

          {recipe && (
            <div className="recipeResult">
              <h2>📄 {t.result}</h2>
              <div className="recipeText">
                <ReactMarkdown>{recipe}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
