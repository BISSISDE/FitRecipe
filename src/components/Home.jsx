import React, { useState } from "react";
import "./Home.css";
import headerimg from "../assets/image-removebg-preview (6).png";
import ai from "../assets/chat-bot.png";
function Home() {
  const testimonials = [
    {
      quote:
        "«Наконец-то я чувствую себя сильной, энергичной и здоровой благодаря персональному плану питания!»",
      description:
        "До FitRecipe я постоянно чувствовала усталость и не знала, что есть, чтобы достичь своих целей. С персональным планом я поняла, что нужно моему организму. Блюда были не только полезными, но и вкусными и простыми в приготовлении. Теперь я просыпаюсь полной энергии и мотивации продолжать!",
      author: "– Айгерим Б.",
    },
    {
      quote: "«Сбросил 10 кг за 3 месяца и набрал мышечную массу без стресса.»",
      description:
        "Я пробовал десятки диет, но ничего не помогало. FitRecipe всё изменил. Пошаговые планы, списки покупок и вкусные белковые рецепты сделали процесс лёгким. Не нужно было считать каждую калорию — просто следовал плану. Результаты превзошли все ожидания!",
      author: "– Даурен К.",
    },
    {
      quote: "«Больше не нужно гадать, что съесть. Энергия вернулась!»",
      description:
        "Как занятая мама, у меня не было времени изучать планы питания или считать макросы. FitRecipe упростил питание. Приложение предлагало еженедельные планы с учётом моего образа жизни и целей, а также помогло сэкономить на продуктах. Я никогда не чувствовала себя такой организованной и энергичной.",
      author: "– Алия С.",
    },
  ];
  

  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <main className="main">
      <div className="TopMain">
        <div className="card">
          <h2 className="title">
            FitRecipe — Персональный подбор питания по вашей цели.
          </h2>
          <p className="subtitle">
            Получайте рекомендации и рецепты, соответствующие вашему образу
            жизни — будь то похудение, набор массы, веганство и не только.
          </p>
          <hr className="line" />
          <p className="quote1">
            “Я нашёл идеальные блюда для набора массы без лишнего поиска.
            FitRecipe делает питание простым и вкусным.”
            <br />
            <span className="author">– Арман С.</span>
          </p>
          <button className="cta-button">Начать подбор →</button>
        </div>
      </div>
      <div className="testimonial-section">
        <img
          src="https://cdn-icons-png.flaticon.com/128/11033/11033816.png"
          alt=""
        />
        <div className="testimonial-slider">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`testimonial-card ${i === index ? "active" : ""}`}
            >
              <p className="quote">{testimonial.quote}</p>
              <p className="description">{testimonial.description}</p>
              <p className="author">{testimonial.author}</p>
            </div>
          ))}
        </div>
        <button className="arrow left" onClick={prevTestimonial}>
          &#8592;
        </button>
        <button className="arrow right" onClick={nextTestimonial}>
          &#8594;
        </button>
      </div>
      <div className="nutrition-container">
        <div className="nutrition-grid">
          {/* Left Box */}
          <div className="nutrition-left-box">
            <div className="nutrition-left-bg" />
            <h2 className="nutrition-title">
              Индивидуальный подбор питания под вашу цель
            </h2>
            <h3 className="nutrition-title">
              Здоровый образ жизни начинается с правильных рецептов
            </h3>
            <p className="nutrition-text">
              FitRecipe помогает найти блюда, которые соответствуют именно вашей
              цели — будь то похудение, набор массы, кето или вегетарианство.
              Настройте фильтры, выберите ингредиенты, и мы предложим рецепты,
              которые подойдут вам идеально.
            </p>
            <p className="nutrition-highlight">
              Начните путь к своему здоровому рациону прямо сейчас 🌿
            </p>
          </div>

          {/* Right Steps */}
          <div className="nutrition-steps">
            <div>
              <h4 className="nutrition-step-title">1. Выбор цели</h4>
              <hr />
              <p className="nutrition-step-text">
                Укажите, чего вы хотите достичь: похудеть, набрать массу, вести
                здоровый образ жизни, соблюдать веганство, кето и т.д.
              </p>
            </div>
            <div>
              <h4 className="nutrition-step-title">2. Подбор рецептов</h4>
              <hr />
              <p className="nutrition-step-text">
                Используйте фильтры по калориям, типу приёма пищи, времени
                приготовления и наличию ингредиентов.
              </p>
            </div>
            <div>
              <h4 className="nutrition-step-title">3. План питания</h4>
              <hr />
              <p className="nutrition-step-text">
                Добавляйте рецепты в персональный план, сохраняйте,
                просматривайте или скачивайте в PDF.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="clinical-section">
        <h2>Почему FitRecipe — это надёжно и эффективно</h2>
        <div className="cards">
          <div className="card2">
            <div className="icon">
              <img
                className="icon-img2"
                src="https://cdn-icons-png.flaticon.com/512/9888/9888054.png"
                alt=""
              />
            </div>
            <div className="card-title">Интеллектуальный подбор рецептов</div>
            <div className="card-desc">
              Умные фильтры и система подбора подбирают блюда в соответствии с
              вашим рационом, потребностями и доступными ингредиентами — легко и
              удобно.
            </div>
          </div>

          <div className="card2">
            <div className="icon">
              <img
                className="icon-img"
                src="https://static.tildacdn.com/tild3038-6238-4932-b835-393634383939/_332x.png"
                alt=""
              />
            </div>
            <div className="card-title">
              Основано на нутрициологической базе
            </div>
            <div className="card-desc">
              FitRecipe создан на основе научных принципов питания. Все рецепты
              и рекомендации составлены с учётом современных диетологических
              подходов и целей пользователя.
            </div>
          </div>

          <div className="card2">
            <div className="icon">
              <img
                className="icon-img2"
                src="https://cdn-icons-png.flaticon.com/512/18289/18289971.png"
                alt=""
              />
            </div>
            <div className="card-title">Эффективность и результат</div>
            <div className="card-desc">
              Пользователи отмечают улучшение пищевых привычек и достижение
              целей — от снижения веса до перехода на осознанное питание.
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="background-circles"></div>
        <h1 className="title2">Полезные рецепты для ваших целей</h1>

        <div className="awards-list">
          <div className="award-item">
            <div className="award-icon">
              <span>
                <img
                  src="https://teplotoriya.ru/up/catalogadvantage/image/image%20(6).svg"
                  alt="Пользователи"
                />
              </span>
            </div>
            <p className="award-text">Больше 20 000 рецептов на любой вкус</p>
          </div>

          <div className="award-item">
            <div className="award-icon">
              <span>
                <img
                  src="https://teplotoriya.ru/up/catalogadvantage/image/image%20(6).svg"
                  alt="Качество"
                />
              </span>
            </div>
            <p className="award-text">
              Подробные инструкции и полезная информация
            </p>
          </div>

          <div className="award-item">
            <div className="award-icon">
              <span>
                <img
                  src="https://teplotoriya.ru/up/catalogadvantage/image/image%20(6).svg"
                  alt="Удобство"
                />
              </span>
            </div>
            <p className="award-text">Удобный подбор под ваши цели</p>
          </div>
        </div>

        <button className="button">
          Начать подбор <span>→</span>
        </button>
      </div>
      <div className="container2">
        <h1 className="title">Как работает умное питание</h1>
        <p className="subtitle">
          Персональный рацион — в любое время, в любом месте, под вашу цель.
        </p>

        <div className="steps">
          {/* Step 1 */}
          <div className="step">
            <img
              src="https://static.showit.co/200/VZnim1jURmaB1Ho-wh7X9Q/shared/match.png"
              alt="Match with a registered dietitian"
              className="step-image"
            />
            <p className="step-text">
              Подберите идеальный рацион под свою цель
            </p>
          </div>

          {/* Step 2 */}
          <div className="step">
            <img
              src="https://static.showit.co/200/mUBiprNaRSWWd4kPUOlVDw/shared/verification.png"
              alt="Verify your insurance coverage"
              className="step-image"
            />
            <p className="step-text">Отслеживайте прогресс</p>
          </div>

          {/* Step 3 */}
          <div className="step">
            <img
              src="https://static.showit.co/200/dq8lSKINSFew7cVb_NAwFw/shared/one_on_one.png"
              alt="Meet your RD one-on-one virtually"
              className="step-image"
            />
            <p className="step-text">Делитесь с друзьями</p>
          </div>

          {/* Step 4 */}
          <div className="step">
            <img
              src="https://cdn-icons-png.freepik.com/512/211/211940.png"
              alt="Use our app for ongoing support"
              className="step-image"
            />
            <p className="step-text">Соберите личный план питания </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
