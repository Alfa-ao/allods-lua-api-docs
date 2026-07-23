# questionLib.GetQuestions
Возвращает список вопросов, на которые в данный момент ожидается ответ от игрока.

## Описание
```lua
questionLib.GetQuestions(): table
```
Функция возвращает список идентификаторов вопросов, на которые в данный момент ожидается ответ от игрока.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `table` - список идентификаторов (`ObjectId`) вопросов, индексируется начиная с 0.

## Примеры
### Получение и проверка списка вопросов
```lua
local questions = questionLib.GetQuestions()
if questions[0] then
    local question = questionLib.GetInfo( questions[0] )
end
```
::: info Описание примера
В примере сначала извлекается список всех активных вопросов. Затем проверяется наличие хотя бы одного вопроса по индексу `0`. Если вопросы существуют, извлекается подробная информация о первом вопросе с помощью функции `questionLib.GetInfo`.
:::

## Смотрите также
- [questionLib.GetInfo](function.questionLib.GetInfo)
- [questionLib.SendData](function.questionLib.SendData)
- [questionLib.Cancel](function.questionLib.Cancel)
- [EVENT_QUESTION_ADDED](events.question#event-question-added)
- [EVENT_QUESTION_REMOVED](events.question#event-question-removed)