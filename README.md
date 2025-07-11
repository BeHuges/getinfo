# getinfo ("https://dev2.getinfo.radugi.net")

## 📌 Тест-кейсы, которые автоматизировали:
- Проверка успешной авторизации с верным логином и паролем
- Возникновение ошибки при неверном логине и верном пароле
- Возникновение ошибки при верном логине и неверном пароле
- Проверяет наличие ссылки "Забыли пароль?" и переход на страницу восстановления
- Проверка доступности страницы "Компания", после успешной авторизации 
- Сравнение имени руководителя и имени пользователя в профиле

## ⚙️ Детали реализации:
- baseUrl вынесен в переменные конфига
- Переменные данные для авторизации вынесены в отдельный файл
- Добавлена кастомная функция для переиспользования в тестах
- Добавлено одно исключение в e2e.js 

## ⚠️ Как запустить:

## Локальный запуск тестов (из терминала)
1. Скачать проект.
2. Перейти в терминале в директорию проекта.
3. Выполнить команду: npx cypress run --spec cypress/e2e/login.cy.js --browser chrome 

Ожидаемый результат: получим отчет о прохождении тестов.

## Локальный запуск через Cypress UI
1. Скачать проект и открыть в терминале.
2. Перейти в директорию проекта.
3. В терминале в папке с проектом запустить npm install cypress -D (предварительно убедиться, что установлен node.js, проверка версии: node -v)
4. В терминале в папке с проектом запустить npx cypress open
5. Выбрать в Cypress UI E2E тестирование и браузер Google Chrome
6. Выбрать спеку login.cy.js

Ожидаемый результат: получим отчет о прохождении тестов.

## Автор: Виктор Карпов (telegram: @behuges)


