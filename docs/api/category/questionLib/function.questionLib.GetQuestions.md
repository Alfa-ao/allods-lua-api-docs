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

- [questionLib.GetInfo](/api/category/questionLib/function.questionLib.GetInfo.md)
- [questionLib.SendData](/api/category/questionLib/function.questionLib.SendData.md)
- [questionLib.Cancel](/api/category/questionLib/function.questionLib.Cancel.md)
- [EVENT_QUESTION_ADDED](/api/events/events.EVENT_QUESTION_.md#event-question-added)
- [EVENT_QUESTION_REMOVED](/api/events/events.EVENT_QUESTION_.md#event-question-removed)