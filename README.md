# Настройка Webpack

Сделал очень удобную настройку webpack для многостраничного сайта
Сейчас в проекте нет папок scripts, styles и assets, вместо них есть папки pages, common и global

pages - Папка в которой хранятся файлы страниц 
Страница выглядит в виде папки с файлами index.pug script.js и style.scss
Необходимо чтобы скрипты импортировали любой файл scss, даже пустой, для включения стилей на страницу
Сам файл определяет поведение страницы (на высоком уровне), рекомендуется не прописывать поведение отдельных компонентов, а использовать для этого папку common

common - Папка для компонентов,
Компонент рекомендуется делать в виде папки с файлами *.js *.scss и ресурсы изображений и тд.
Поведение, рекомендуется прописывать в виде класса, конструктор которого принимает объект DOM-узла, так вы делаете его универсальным, незвисимым и решаете проблему пересечения одинаковых имён переменных

global - глобальные стили, шрифты, миксины. Требуется доработка.