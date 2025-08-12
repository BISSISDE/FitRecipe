import React, { useState, useEffect } from "react";
import "./RecipeApp.css";
import PageHeader from "./PageHeader";
export const recipesData = [
  {
    id: 1,
    title: "Курица на гриле с овощами",
    image:
      "https://simply-delicious-food.com/wp-content/uploads/2019/04/30-minute-grilled-chicken-and-vegetables-3.jpg",
    steps: [
      "Нарежьте курицу кубиками.",
      "Обжарьте до золотистой корочки.",
      "Добавьте нарезанные овощи и готовьте 15 минут.",
      "Приправьте солью и перцем.",
    ],
    ingredients: [
      { name: "Курица", quantity: "500 г" },
      { name: "Морковь", quantity: "2 шт" },
      { name: "Болгарский перец", quantity: "1 шт" },
      { name: "Лук", quantity: "1 шт" },
      { name: "Соль", quantity: "по вкусу" },
    ],
    substitutes: [
      "Курицу можно заменить индейкой или тофу.",
      "Если нет болгарского перца — используйте кабачок.",
    ],
  },
  {
    id: 2,
    title: "Овсянка с фруктами",
    image:
      "https://healthyfitnessmeals.com/wp-content/uploads/2018/01/fruit-and-oatmeal-breakfast-bowl-5-SQUARE.jpg",
    steps: [
      "Закипятите воду или молоко.",
      "Добавьте овсянку и варите 5 минут.",
      "Добавьте нарезанные фрукты и мед.",
      "Перемешайте и подавайте теплым.",
    ],
    ingredients: [
      { name: "Овсянка", quantity: "100 г" },
      { name: "Вода/Молоко", quantity: "200 мл" },
      { name: "Фрукты (банан, яблоко)", quantity: "по вкусу" },
      { name: "Мед", quantity: "1 ст.л." },
    ],
    substitutes: [
      "Можно использовать растительное молоко (миндальное, соевое).",
      "Замените мед на кленовый сироп или агаву.",
    ],
  },
  {
    id: 3,
    title: "Спагетти Болоньезе",
    image:
      "https://img.taste.com.au/5qlr1PkR/taste/2016/11/spaghetti-bolognese-106560-1.jpeg",
    steps: [
      "Сварите спагетти до состояния аль денте.",
      "Обжарьте фарш с луком и чесноком.",
      "Добавьте томатный соус и тушите.",
      "Подавайте соус поверх спагетти.",
    ],
    ingredients: [
      { name: "Спагетти", quantity: "200 г" },
      { name: "Говяжий фарш", quantity: "300 г" },
      { name: "Томатный соус", quantity: "150 мл" },
      { name: "Лук", quantity: "1 шт" },
      { name: "Чеснок", quantity: "2 зубчика" },
    ],
    substitutes: [
      "Можно использовать индейку или грибы для вегетарианской версии.",
      "Полнозерновые спагетти для более полезного варианта.",
    ],
  },
  {
    id: 4,
    title: "Тост с авокадо",
    image:
      "https://www.livingchirpy.com/wp-content/uploads/2024/12/avocadoeggtoast.05.jpg",
    steps: [
      "Поджарьте хлеб.",
      "Разомните авокадо с лимонным соком и солью.",
      "Намажьте на тост и добавьте начинку.",
    ],
    ingredients: [
      { name: "Хлеб", quantity: "2 ломтика" },
      { name: "Авокадо", quantity: "1 шт" },
      { name: "Лимонный сок", quantity: "1 ч.л." },
      { name: "Соль", quantity: "по вкусу" },
    ],
    substitutes: [
      "Можно использовать ржаной или заквасочный хлеб.",
      "Добавьте яйцо пашот или помидоры.",
    ],
  },
  {
    id: 5,
    title: "Блины",
    image:
      "https://www.chelsea.co.nz/hubfs/New%20Recipe%20images/Sunday%20Pancakes%20Recipe%20NZ%20Chelsea%20Sugar.jpg",
    steps: [
      "Смешайте муку, молоко и яйцо в тесто.",
      "Вылейте на разогретую сковороду и обжарьте с двух сторон.",
      "Подавайте с сиропом или фруктами.",
    ],
    ingredients: [
      { name: "Мука", quantity: "150 г" },
      { name: "Молоко", quantity: "200 мл" },
      { name: "Яйцо", quantity: "1 шт" },
      { name: "Сахар", quantity: "1 ст.л." },
    ],
    substitutes: [
      "Используйте овсяную муку для безглютеновой версии.",
      "Замените сахар на мед.",
    ],
  },
  {
    id: 6,
    title: "Салат с тунцом",
    image:
      "https://www.lifeisbutadish.com/wp-content/uploads/2017/08/Simple-Tuna-Salad-6-1.jpg",
    steps: [
      "Слейте жидкость с тунца и выложите в миску.",
      "Порежьте овощи и добавьте к тунцу.",
      "Смешайте с майонезом или оливковым маслом.",
    ],
    ingredients: [
      { name: "Тунец консервированный", quantity: "1 банка" },
      { name: "Огурец", quantity: "1 шт" },
      { name: "Помидор", quantity: "1 шт" },
      { name: "Майонез", quantity: "2 ст.л." },
    ],
    substitutes: [
      "Можно заменить майонез на греческий йогурт.",
      "Добавьте вареное яйцо для дополнительного белка.",
    ],
  },
  {
    id: 7,
    title: "Овощной суп",
    image:
      "https://www.inspiredtaste.net/wp-content/uploads/2018/10/Homemade-Vegetable-Soup-Recipe-1-1200.jpg",
    steps: [
      "Нарежьте все овощи.",
      "Варите в воде или бульоне 25 минут.",
      "Приправьте и подавайте горячим.",
    ],
    ingredients: [
      { name: "Морковь", quantity: "2 шт" },
      { name: "Картофель", quantity: "2 шт" },
      { name: "Лук", quantity: "1 шт" },
      { name: "Вода/Бульон", quantity: "1 литр" },
    ],
    substitutes: [
      "Добавьте чечевицу для белка.",
      "Можно использовать замороженные овощи для быстроты.",
    ],
  },
  {
    id: 8,
    title: "Жареный рис с яйцом",
    image:
      "https://www.chinasichuanfood.com/wp-content/uploads/2013/08/egg-fried-rice-10.webp",
    steps: [
      "Обжарьте яйца на сковороде.",
      "Добавьте холодный рис и обжарьте.",
      "Смешайте с соевым соусом и овощами.",
    ],
    ingredients: [
      { name: "Приготовленный рис", quantity: "300 г" },
      { name: "Яйца", quantity: "2 шт" },
      { name: "Соевый соус", quantity: "2 ст.л." },
      { name: "Овощная смесь", quantity: "1 стакан" },
    ],
    substitutes: [
      "Используйте цветную капусту вместо риса для низкоуглеводного варианта.",
      "Добавьте курицу или креветки.",
    ],
  },
  {
    id: 9,
    title: "Фруктовый смузи",
    image:
      "https://www.pcrm.org/sites/default/files/Fantastic-Fruit-Smoothie.jpeg",
    steps: [
      "Добавьте фрукты, молоко/йогурт и мед в блендер.",
      "Взбейте до однородности.",
      "Подавайте охлажденным.",
    ],
    ingredients: [
      { name: "Банан", quantity: "1 шт" },
      { name: "Клубника", quantity: "1 стакан" },
      { name: "Молоко/Йогурт", quantity: "200 мл" },
      { name: "Мед", quantity: "1 ст.л." },
    ],
    substitutes: [
      "Используйте миндальное молоко для безлактозной версии.",
      "Добавьте овсянку для клетчатки.",
    ],
  },
  {
    id: 10,
    title: "Цезарь-ролл с курицей",
    image:
      "https://www.erinliveswhole.com/wp-content/uploads/2023/04/chicken-caesar-wraps-9.jpg",
    steps: [
      "Обжарьте курицу и нарежьте.",
      "Смешайте с салатом и соусом Цезарь.",
      "Заверните в тортилью и подавайте.",
    ],
    ingredients: [
      { name: "Куриная грудка", quantity: "150 г" },
      { name: "Салат", quantity: "1 стакан" },
      { name: "Тортилья", quantity: "1 большая" },
      { name: "Соус Цезарь", quantity: "2 ст.л." },
    ],
    substitutes: [
      "Используйте капусту вместо салата.",
      "Замените соус на йогуртовую заправку.",
    ],
  },
];

function RecipePage() {
  const [selectedId, setSelectedId] = useState(null);
  const [blackBg, setBlackBg] = useState(false);
  const [recipes, setRecipes] = useState(recipesData);
  const [showForm, setShowForm] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    image: "",
    steps: "",
    ingredients: "",
    substitutes: "",
  });

  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newRecipeToAdd = {
      ...newRecipe,
      id: Date.now(),
      steps: newRecipe.steps.split("\n"),
      ingredients: newRecipe.ingredients.split("\n").map((item) => {
        const [name, quantity] = item.split(" - ");
        return { name, quantity };
      }),
      substitutes: newRecipe.substitutes.split("\n"),
    };
    const updatedRecipes = [newRecipeToAdd, ...recipes];
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    setNewRecipe({
      title: "",
      image: "",
      steps: "",
      ingredients: "",
      substitutes: "",
    });
    setShowForm(false);
    setBlackBg(false);
  };

  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  const selectedRecipe = recipes.find((r) => r.id === selectedId);

  const handleClick = () => {
    setSelectedId(null);
    setBlackBg(false);
    setShowForm(false);
  };
  const showCard = (id) => {
    setSelectedId(id);
    setBlackBg(true);
  };
  const handleShow = () => {
    setShowForm(!showForm);
    setBlackBg(true);
  };
  const handleDelete = (id) => {
    const updated = recipes.filter((r) => r.id !== id);
    setRecipes(updated);
    localStorage.setItem("recipes", JSON.stringify(updated));
  };

  return (
    <>
      <PageHeader/>
      <main className="recipe-page">
        <div className="dau-container">
          <section className="about-food-sec">
            <div className="food-content">
              <h1>Что вы можете найти в нашем сайте?</h1>
              <p>
                Наш сайт полон на рецепты самых вкусных еды. Вы можете найти
                рецепт еды который вы хотели. у нас есть все что вы хотите.
                Остовайтесь с нами чтобы еще знать про секретных рецептах. Что
                бы вы не искали, мы поможем вам найти это! В нашем сайте вам
                открывается возможности на рецептах. И вы станете могущим
                сделать много вкусного!
              </p>
            </div>
            <div className="about-food-image">
              <img
                src="https://zira.uz/wp-content/uploads/2023/02/zhayma-1.jpg"
                alt=""
              />
            </div>
          </section>
          <section className="about-food-sec">
            <div className="about-food-image">
              <img
                src="https://www.gazeta.uz/media/img/2023/12/F1mVIz17019294837018_l.jpg"
                alt=""
              />
            </div>
            <div className="food-content">
              <h1>Что вы можете найти в нашем сайте?</h1>
              <p>
                Наш сайт полон на рецепты самых вкусных еды. Вы можете найти
                рецепт еды который вы хотели. у нас есть все что вы хотите.
                Остовайтесь с нами чтобы еще знать про секретных рецептах. Что
                бы вы не искали, мы поможем вам найти это! В нашем сайте вам
                открывается возможности на рецептах. И вы станете могущим
                сделать много вкусного!
              </p>
            </div>
          </section>
          <section className="about-food-sec">
            <div className="food-content">
              <h1>Что вы можете найти в нашем сайте?</h1>
              <p>
                Наш сайт полон на рецепты самых вкусных еды. Вы можете найти
                рецепт еды который вы хотели. у нас есть все что вы хотите.
                Остовайтесь с нами чтобы еще знать про секретных рецептах. Что
                бы вы не искали, мы поможем вам найти это! В нашем сайте вам
                открывается возможности на рецептах. И вы станете могущим
                сделать много вкусного!
              </p>
            </div>
            <div className="about-food-image">
              <img
                src="https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png"
                alt=""
              />
            </div>
          </section>
          ``
        </div>

        <section className="food-section">
          <h1 className="food-section-title">
            Обжарьте, запекайте и готовьте вкусные блюда с нами!
          </h1>
          <div className="food-container">
            <div className="food-card">
              <img
                src="https://www.tasteofhome.com/wp-content/uploads/2019/05/Fried-Ice-Cream-Dessert-Bars-_EXPS_SDJJ19_232652_B02_06_1b_rms-2.jpg"
                alt="Desserts"
                className="food-image"
              />
              <div className="food-label">ДЕССЕРТЫ</div>
            </div>
            <div className="food-card">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/bbq-protein-bowl-vertical-2-669579382b684.jpg?crop=0.782xw:0.626xh;0.0673xw,0.328xh&resize=640:*"
                alt="Most Popular"
                className="food-image"
              />
              <div className="food-label">ПОПУЛЯРНЫЕ</div>
            </div>
            <div className="food-card">
              <img
                src="https://www.tasteofhome.com/wp-content/uploads/2024/12/51-Date-Night-Dinner-Ideas-Made-to-Impress_TOHcom23_274697_DR_09_14_7b_FT.jpg"
                alt="Dinner"
                className="food-image"
              />
              <div className="food-label">УЖИНЫ</div>
            </div>
            <div className="food-card">
              <img
                src="https://s23209.pcdn.co/wp-content/uploads/2017/04/Breakfast-Meal-PrepIMG_6644edit.jpg"
                alt="Healthy"
                className="food-image"
              />
              <div className="food-label">ПОЛЕЗНЫЕ</div>
            </div>
          </div>
        </section>

        <div
          style={{
            margin: "20px auto",
            fontFamily: "Arial, sans-serif",
            padding: 20,
          }}
        >
          <h1
            style={{
              textAlign: "center",
              marginBottom: 30,
              fontSize: 50,
              fontFamily: "revert",
              fontWeight: 600,
            }}
          >
            Рецепты
          </h1>

          <div className="rc-app">
            <div className="btn-cont">
              <button className="cssbuttons-io-button" onClick={handleShow}>
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Добавить</span>
              </button>
            </div>

            {showForm && (
              <form className="rc-form" onSubmit={handleAdd}>
                <button onClick={handleClick} className="close-form-btn">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#00000026"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path>
                    </g>
                  </svg>
                </button>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={newRecipe.title}
                  onChange={handleChange}
                  required
                  className="rc-input"
                />
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  value={newRecipe.image}
                  onChange={handleChange}
                  required
                  className="rc-input"
                />
                <textarea
                  name="steps"
                  placeholder="Steps (each on a new line)"
                  value={newRecipe.steps}
                  onChange={handleChange}
                  required
                  className="rc-input"
                />
                <textarea
                  name="ingredients"
                  placeholder="Ingredients (e.g. Chicken - 500g)"
                  value={newRecipe.ingredients}
                  onChange={handleChange}
                  required
                  className="rc-input"
                />
                <textarea
                  name="substitutes"
                  placeholder="Substitutes (each on a new line)"
                  value={newRecipe.substitutes}
                  onChange={handleChange}
                  className="rc-input"
                />
                <button type="submit" className="rc-submit-btn">
                  Отправить
                </button>
              </form>
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              paddingLeft: "10%",
              paddingRight: "10%",
              gap: 20,
            }}
          >
            {recipes.map((recipe) => (
              <article
                key={recipe.id}
                className="recipe-card"
                onDoubleClick={() => handleDelete(recipe.id)}
              >
                <section
                  style={{
                    backgroundImage: `url(${recipe.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "200px",
                  }}
                  className="card__hero"
                >
                  <header className="card__hero-header">
                    <span>15 мин</span>
                    <div className="card__icon">
                      <svg
                        height={20}
                        width={20}
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </header>
                  <p className="card__job-title">{recipe.title}</p>
                </section>
                <footer className="card__footer">
                  <div className="card__job-summary">
                    <div className="card__job-icon">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M9 16H9.01M12 11H12.01M7 10H7.01M15 16H15.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C12 5.76142 13.7909 8 16 8C16 10.2091 18.2386 12 21 12Z"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                    <div className="card__job">
                      <p className="card__job-title erekshe-title">
                        {recipe.title.split(" ").slice(0, 2).join(" ")}
                        <br />
                        {recipe.title.split(" ").slice(2).join(" ")}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => showCard(recipe.id)}
                    className="card__btn"
                  >
                    Обзор
                  </button>
                </footer>
              </article>
            ))}
          </div>

          <div
            style={{
              position: "fixed",
              top: "0px",
              left: 0,
              width: "100%",
              height: "200%",
              background: "rgba(0, 0, 0, 0.77)",
              zIndex: 4,
              display: blackBg ? "block" : "none",
            }}
          ></div>
          {selectedRecipe && (
            <div class="cardochka">
              <button onClick={handleClick} className="close-btn">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#ffffff"
                      d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
                    ></path>
                  </g>
                </svg>
              </button>

              <div class="body">
                <div className="text">
                  <h2>{selectedRecipe.title}</h2>

                  <h3>Ингредиенты:</h3>
                  <ul>
                    {selectedRecipe.ingredients.map((item, i) => (
                      <li key={i}>
                        {item.name} — {item.quantity}
                      </li>
                    ))}
                  </ul>

                  <h3>Пошаговая инструкция:</h3>
                  <ol>
                    {selectedRecipe.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>

                  <h3>Подсказки по замене:</h3>
                  <ul>
                    {selectedRecipe.substitutes.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>

                  <div class="like-button">
                    <input class="on" id="heart" type="checkbox" />
                    <label class="like" for="heart">
                      <svg
                        class="like-icon"
                        fill-rule="nonzero"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"></path>
                      </svg>
                      <span class="like-text">Likes</span>
                    </label>
                    <span class="like-count one">68</span>
                    <span class="like-count two">69</span>
                  </div>
                </div>
                <span class="username">from: @Yaya12085</span>
                <div class="cardochka-footer">
                  <div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                        <g
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          id="SVGRepo_tracerCarrier"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            stroke-width="1.5"
                            d="M16 10H16.01M12 10H12.01M8 10H8.01M3 10C3 4.64706 5.11765 3 12 3C18.8824 3 21 4.64706 21 10C21 15.3529 18.8824 17 12 17C11.6592 17 11.3301 16.996 11.0124 16.9876L7 21V16.4939C4.0328 15.6692 3 13.7383 3 10Z"
                          ></path>{" "}
                        </g>
                      </svg>
                      18
                    </div>
                    <div>
                      <svg
                        fill="#000000"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="-2.5 0 32 32"
                      >
                        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                        <g
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          id="SVGRepo_tracerCarrier"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g id="icomoon-ignore"> </g>{" "}
                          <path
                            fill="#000000"
                            d="M0 10.284l0.505 0.36c0.089 0.064 0.92 0.621 2.604 0.621 0.27 0 0.55-0.015 0.836-0.044 3.752 4.346 6.411 7.472 7.060 8.299-1.227 2.735-1.42 5.808-0.537 8.686l0.256 0.834 7.63-7.631 8.309 8.309 0.742-0.742-8.309-8.309 7.631-7.631-0.834-0.255c-2.829-0.868-5.986-0.672-8.686 0.537-0.825-0.648-3.942-3.3-8.28-7.044 0.11-0.669 0.23-2.183-0.575-3.441l-0.352-0.549-8.001 8.001zM1.729 10.039l6.032-6.033c0.385 1.122 0.090 2.319 0.086 2.334l-0.080 0.314 0.245 0.214c7.409 6.398 8.631 7.39 8.992 7.546l-0.002 0.006 0.195 0.058 0.185-0.087c2.257-1.079 4.903-1.378 7.343-0.836l-13.482 13.481c-0.55-2.47-0.262-5.045 0.837-7.342l0.104-0.218-0.098-0.221-0.031 0.013c-0.322-0.632-1.831-2.38-7.498-8.944l-0.185-0.215-0.282 0.038c-0.338 0.045-0.668 0.069-0.981 0.069-0.595 0-1.053-0.083-1.38-0.176z"
                          >
                            {" "}
                          </path>{" "}
                        </g>
                      </svg>
                      7
                    </div>
                    <div>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            opacity="0.1"
                            d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z"
                            fill="#323232"
                          ></path>{" "}
                          <path
                            opacity="0.1"
                            d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
                            fill="#323232"
                          ></path>{" "}
                          <path
                            opacity="0.1"
                            d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z"
                            fill="#323232"
                          ></path>{" "}
                          <path
                            d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z"
                            stroke-width="2"
                          ></path>{" "}
                          <path
                            d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
                            stroke-width="2"
                          ></path>{" "}
                          <path
                            d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z"
                            stroke-width="2"
                          ></path>{" "}
                          <path
                            d="M8.7207 10.6397L15.0001 7.5"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M8.70605 13.353L15 16.5"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                      2
                    </div>
                  </div>

                  <div class="viewer">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                        <g
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          id="SVGRepo_tracerCarrier"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            stroke-width="2"
                            stroke="#ffffff"
                            d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"
                          ></path>{" "}
                          <path
                            stroke-linecap="round"
                            stroke-width="2"
                            stroke="#ffffff"
                            d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21"
                          ></path>{" "}
                        </g>
                      </svg>
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                        <g
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          id="SVGRepo_tracerCarrier"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            stroke-width="2"
                            stroke="#ffffff"
                            d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"
                          ></path>{" "}
                          <path
                            stroke-linecap="round"
                            stroke-width="2"
                            stroke="#ffffff"
                            d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21"
                          ></path>{" "}
                        </g>
                      </svg>
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                        <g
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          id="SVGRepo_tracerCarrier"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            stroke-width="2"
                            stroke="#ffffff"
                            d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"
                          ></path>{" "}
                          <path
                            stroke-linecap="round"
                            stroke-width="2"
                            stroke="#ffffff"
                            d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21"
                          ></path>{" "}
                        </g>
                      </svg>
                    </span>
                    <span>+20</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default RecipePage;
