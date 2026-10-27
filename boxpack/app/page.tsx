export default function HomePage() {
  return (
    <>
      {/* ===== Шапка ===== */}
      <header className="bg-white">
        <div className="mx-auto flex max-w-[1000px] flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[20px] font-extrabold tracking-tight text-[#1a2a52]">
            BOXPACK
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-1 text-[13px] text-black">
            <a href="#services">Услуги</a>
            <a href="#steps">Как это работает</a>
            <a href="#video">Видеофиксация</a>
            <a href="#calc">Калькулятор</a>
            <a href="#cases">Кейсы</a>
            <a href="#contacts">Контакты</a>
          </nav>
        </div>
      </header>

      {/* ===== Первый экран ===== */}
      <section className="bg-[#1a2a52] text-white">
        <div className="mx-auto grid max-w-[1000px] gap-12 px-4 py-[68px] lg:grid-cols-[1fr_400px] lg:gap-x-16">
          {/* Левая часть: тексты, ссылка, кнопка, карточки с цифрами */}
          <div>
            <p className="px-3 text-[12px] text-white/90">
              Автоматизированный фулфилмент
            </p>

            <h1 className="mt-3 max-w-[480px] text-[48px] font-bold leading-[56px]">
              Фулфилмент, который держит сроки и репутацию
            </h1>

            <p className="mt-6 max-w-[500px] text-[15px] leading-[1.35] text-white/90">
              Автоматизированная упаковка, видеоконтроль каждого заказа и
              отправка в день поступления. Мы берем на себя хранение, сборку,
              маркировку и логистику.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-8">
              <a href="#calc" className="text-[13px] font-semibold">
                Рассчитать стоимость →
              </a>
              <a
                href="#contacts"
                className="rounded-lg border border-white/70 px-4 py-2.5 text-[12px] font-medium"
              >
                Получить консультацию
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-7">
              {/* Карточка 1 */}
              <div className="flex h-[82px] w-[136px] flex-col justify-center rounded-[10px] bg-white/10 px-3">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="white"
                  aria-hidden="true"
                >
                  <path d="M3 8l9-5 9 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8zm6 3v2h6v-2H9z" />
                </svg>
                <p className="mt-1.5 text-[13px] font-bold">5000+</p>
                <p className="mt-0.5 text-[9px] text-white/70">заказов в день</p>
              </div>

              {/* Карточка 2 */}
              <div className="flex h-[82px] w-[136px] flex-col justify-center rounded-[10px] bg-white/10 px-3">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="white"
                  aria-hidden="true"
                >
                  <path d="M12 2l8 3v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V5l8-3zm-1 13l6-6-1.4-1.4L11 12.2 8.4 9.6 7 11l4 4z" />
                </svg>
                <p className="mt-1.5 text-[13px] font-bold">99.8%</p>
                <p className="mt-0.5 text-[9px] text-white/70">точность сборки</p>
              </div>

              {/* Карточка 3 */}
              <div className="flex h-[82px] w-[136px] flex-col justify-center rounded-[10px] bg-white/10 px-3">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="white"
                  aria-hidden="true"
                >
                  <path d="M2 6h12v9H2V6zm12 3h4l4 4v2h-8V9zM6.5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
                <p className="mt-1.5 text-[13px] font-bold">FBO/FBS</p>
                <p className="mt-0.5 text-[9px] text-white/70">все маркетплейсы</p>
              </div>
            </div>
          </div>

          {/* Правая часть: место под видео */}
          <div
            id="video"
            className="flex h-[220px] w-full items-center justify-center rounded-xl bg-[#d1d5dc] lg:w-[400px]"
          >
            <p className="text-[10px] text-black">
              Видео автоматической упаковочной линии
            </p>
          </div>
        </div>
      </section>

      {/* ===== Как начать работать с нами ===== */}
      <section id="steps" className="bg-white pb-[75px] pt-16">
        <div className="mx-auto max-w-[1062px] px-4">
          <h2 className="text-center text-[24px] font-bold">
            Как начать работать с нами
          </h2>
          <p className="mx-auto mt-2 max-w-[520px] text-center text-[14px] text-[#222]">
            Подключение занимает всего несколько дней. Все процессы максимально
            автоматизированы.
          </p>

          <div className="mt-12 grid gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
            {/* Шаг 1 */}
            <div className="flex h-[162px] flex-col justify-center rounded-[10px] bg-[#f0f0f0] px-5 shadow-[0_2px_4px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[6px_8px_8px_rgba(0,0,0,0.25)]">
              <p className="text-xs font-bold">ШАГ 1</p>
              <h3 className="mt-2 text-xs font-semibold">Оставляете заявку</h3>
              <p className="mt-2 text-[10px] text-[#9a9a9a]">Через сайт или Telegram</p>
            </div>

            {/* Шаг 2 */}
            <div className="flex h-[162px] flex-col justify-center rounded-[10px] bg-[#f0f0f0] px-5 shadow-[0_2px_4px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[6px_8px_8px_rgba(0,0,0,0.25)]">
              <p className="text-xs font-bold">ШАГ 2</p>
              <h3 className="mt-2 text-xs font-semibold">Получаете расчет</h3>
              <p className="mt-2 text-[10px] text-[#9a9a9a]">Под ваш объем и формат работы</p>
            </div>

            {/* Шаг 3 */}
            <div className="flex h-[162px] flex-col justify-center rounded-[10px] bg-[#f0f0f0] px-5 shadow-[0_2px_4px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[6px_8px_8px_rgba(0,0,0,0.25)]">
              <p className="text-xs font-bold">ШАГ 3</p>
              <h3 className="mt-2 text-xs font-semibold">Подписываем договор</h3>
              <p className="mt-2 text-[10px] text-[#9a9a9a]">Через ЭДО</p>
            </div>

            {/* Шаг 4 */}
            <div className="flex h-[162px] flex-col justify-center rounded-[10px] bg-[#f0f0f0] px-5 shadow-[0_2px_4px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[6px_8px_8px_rgba(0,0,0,0.25)]">
              <p className="text-xs font-bold">ШАГ 4</p>
              <h3 className="mt-2 text-xs font-semibold">Привозите товар</h3>
              <p className="mt-2 text-[10px] text-[#9a9a9a]">От поставщика или транспортной компании</p>
            </div>

            {/* Шаг 5 */}
            <div className="flex h-[162px] flex-col justify-center rounded-[10px] bg-[#f0f0f0] px-5 shadow-[0_2px_4px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[6px_8px_8px_rgba(0,0,0,0.25)]">
              <p className="text-xs font-bold">ШАГ 5</p>
              <h3 className="mt-2 text-xs font-semibold">Автоматизированная упаковка</h3>
              <p className="mt-2 text-[10px] text-[#9a9a9a]">С видеофиксацией каждого этапа</p>
            </div>

            {/* Шаг 6 */}
            <div className="flex h-[162px] flex-col justify-center rounded-[10px] bg-[#f0f0f0] px-5 shadow-[0_2px_4px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[6px_8px_8px_rgba(0,0,0,0.25)]">
              <p className="text-xs font-bold">ШАГ 6</p>
              <h3 className="mt-2 text-xs font-semibold">Отправляем</h3>
              <p className="mt-2 text-[10px] text-[#9a9a9a]">На маркетплейсы по всей России</p>
            </div>

            {/* Шаг 7 */}
            <div className="flex h-[162px] flex-col justify-center rounded-[10px] bg-[#f0f0f0] px-5 shadow-[0_2px_4px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[6px_8px_8px_rgba(0,0,0,0.25)]">
              <p className="text-xs font-bold">ШАГ 7</p>
              <h3 className="mt-2 text-xs font-semibold">Получаете результат</h3>
              <p className="mt-2 text-[10px] text-[#9a9a9a]">Отчеты и прозрачная статистика</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Услуги фулфилмента ===== */}
      <section id="services" className="bg-[#f8f8f8] pb-[90px] pt-12">
        <div className="mx-auto max-w-[877px] px-4">
          <h2 className="text-center text-[24px] font-bold">Услуги фулфилмента</h2>
          <p className="mt-2 text-center text-[14px] text-[#222]">
            Полный цикл обработки товара от приемки до доставки
          </p>

          <div className="mt-12 grid gap-[25px] sm:grid-cols-2 lg:grid-cols-3">
            {/* Услуга 1 */}
            <div className="flex h-[165px] flex-col justify-center rounded-xl border-t-4 border-[#2cb5c8] bg-white px-6 shadow-[0_2px_4px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[6px_8px_8px_rgba(0,0,0,0.25)]">
              <h3 className="text-xs font-bold">Приемка и сортировка</h3>
              <p className="mt-2 text-[10px] leading-[1.3] text-[#b0b0b0]">
                Принимаем поставки любого объема и размещаем товар на адресное хранение.
              </p>
            </div>

            {/* Услуга 2 */}
            <div className="flex h-[165px] flex-col justify-center rounded-xl border-t-4 border-[#2cb5c8] bg-white px-6 shadow-[0_2px_4px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[6px_8px_8px_rgba(0,0,0,0.25)]">
              <h3 className="text-xs font-bold">Проверка на брак</h3>
              <p className="mt-2 text-[10px] leading-[1.3] text-[#b0b0b0]">
                Контроль качества перед отправкой покупателю.
              </p>
            </div>

            {/* Услуга 3 */}
            <div className="flex h-[165px] flex-col justify-center rounded-xl border-t-4 border-[#2cb5c8] bg-white px-6 shadow-[0_2px_4px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[6px_8px_8px_rgba(0,0,0,0.25)]">
              <h3 className="text-xs font-bold">Автоматизированная упаковка</h3>
              <p className="mt-2 text-[10px] leading-[1.3] text-[#b0b0b0]">
                Автоматические линии и видеоконтроль каждого заказа.
              </p>
            </div>

            {/* Услуга 4 */}
            <div className="flex h-[165px] flex-col justify-center rounded-xl border-t-4 border-[#2cb5c8] bg-white px-6 shadow-[0_2px_4px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[6px_8px_8px_rgba(0,0,0,0.25)]">
              <h3 className="text-xs font-bold">Сборка заказов</h3>
              <p className="mt-2 text-[10px] leading-[1.3] text-[#b0b0b0]">
                Быстрая комплектация заказов по данным маркетплейсов.
              </p>
            </div>

            {/* Услуга 5 */}
            <div className="flex h-[165px] flex-col justify-center rounded-xl border-t-4 border-[#2cb5c8] bg-white px-6 shadow-[0_2px_4px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[6px_8px_8px_rgba(0,0,0,0.25)]">
              <h3 className="text-xs font-bold">Отправка на маркетплейсы</h3>
              <p className="mt-2 text-[10px] leading-[1.3] text-[#b0b0b0]">
                FBO и FBS для всех крупных площадок.
              </p>
            </div>

            {/* Услуга 6 */}
            <div className="flex h-[165px] flex-col justify-center rounded-xl border-t-4 border-[#2cb5c8] bg-white px-6 shadow-[0_2px_4px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[6px_8px_8px_rgba(0,0,0,0.25)]">
              <h3 className="text-xs font-bold">Хранение товаров</h3>
              <p className="mt-2 text-[10px] leading-[1.3] text-[#b0b0b0]">
                Безопасное адресное хранение продукции.
              </p>
            </div>

            {/* Услуга 7 */}
            <div className="flex h-[165px] flex-col justify-center rounded-xl border-t-4 border-[#2cb5c8] bg-white px-6 shadow-[0_2px_4px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[6px_8px_8px_rgba(0,0,0,0.25)]">
              <h3 className="text-xs font-bold">Интеграции</h3>
              <p className="mt-2 text-[10px] leading-[1.3] text-[#b0b0b0]">
                Синхронизация с маркетплейсами и CRM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Почему выбирают BOXPACK ===== */}
      <section className="bg-[#1a2a52] pb-14 pt-8 text-white">
        <div className="mx-auto max-w-[943px] px-4">
          <h2 className="text-center text-[24px] font-bold">Почему выбирают BOXPACK</h2>

          <div className="mt-9 grid gap-[29px] sm:grid-cols-2 lg:grid-cols-4">
            {/* Причина 1 */}
            <div className="flex h-[141px] flex-col justify-end rounded-[10px] bg-white/10 p-5">
              <h3 className="text-sm font-bold">Скорость</h3>
              <p className="mt-1.5 text-[11px] leading-[1.3] text-white/80">
                До 20 000 товаров за смену и отправка день в день.
              </p>
            </div>
            
            {/* Причина 2 */}
            <div className="flex h-[141px] flex-col justify-end rounded-[10px] bg-white/10 p-5">
              <h3 className="text-sm font-bold">Точность</h3>
              <p className="mt-1.5 text-[11px] leading-[1.3] text-white/80">
                99.8% точность сборки благодаря автоматизации.
              </p>
            </div>

            {/* Причина 3 */}
            <div className="flex h-[141px] flex-col justify-end rounded-[10px] bg-white/10 p-5">
              <h3 className="text-sm font-bold">Надежность</h3>
              <p className="mt-1.5 text-[11px] leading-[1.3] text-white/80">
                Страхование товара и круглосуточный контроль.
              </p>
            </div>

            {/* Причина 4 */}
            <div className="flex h-[141px] flex-col justify-end rounded-[10px] bg-white/10 p-5">
              <h3 className="text-sm font-bold">Поддержка</h3>
              <p className="mt-1.5 text-[11px] leading-[1.3] text-white/80">
                Персональный менеджер и оперативная помощь.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}