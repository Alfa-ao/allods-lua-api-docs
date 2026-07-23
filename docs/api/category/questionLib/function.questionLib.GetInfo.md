# questionLib.GetInfo
Выдает информацию о вопросе с соответствующим идентификатором, на который в данный момент ожидается ответ от игрока.

## Описание
```lua
questionLib.GetInfo( questionId: ObjectId ): table | nil
```
Функция возвращает информацию о вопросе с соответствующим идентификатором, на который в данный момент ожидается ответ от игрока, в виде таблицы или `nil`, если информация отсутствует.

## Список параметров
- **`questionId`** (`ObjectId`) - идентификатор вопроса, должен быть одним из списка, получаемого посредством `questionLib.GetQuestions()`.

## Возвращаемые значения
Возвращает `table` | `nil` - таблицу с информацией о вопросе или `nil`, если информация отсутствует.

- **`id`** (`ObjectId`) - идентификатор вопроса.

- **`isObserver`** (`boolean`) - если `true`, то игрок не участвует в голосовании, а только наблюдает за его ходом.

- **`type`** (`string`) - идентификатор типа вопроса.

- **`showResults`** (`number`(`ENUM_Question_ShowResultsType_*`)) - как нужно отображать результаты голосования.

- **`clientData`** (`table` | `nil`) - `nil`, если нет информации; иначе таблица, аналогичная полю `values` события `EVENT_CLIENT_MESSAGE`.

- **`questionData`** (`table`) - описание данных из ресурса вопроса. Таблица с полями:

- `questionCustomData` (`table` | `nil`) - `nil`, если нет информации, иначе таблица, формат которой зависит от типа вопроса (см. `CategoryQuestionType`).

- **`remainingTimeMs`** (`number` | `nil`) - время в миллисекундах, оставшееся до потери вопросом актуальности; `nil`, если ограничения по времени нет.

- **`endTimeMs`** (`number` | `nil`) - дата окончания опроса в миллисекундах.

- **`results`** (`table` | `nil`) - результат опроса ("кто как проголосовал?"), представляет собой массив (индексация начинается с 1), каждый элемент которого таблица с полями:

- `playerId` (`ObjectId` | `nil`) - идентификатор игрока, если есть.

- `playerName` (`WString` | `nil`) - имя игрока, если есть (голосование может быть анонимным).

- `clientData` (`table`) - таблица, аналогичная полю `values` события `EVENT_CLIENT_MESSAGE`.

## Примеры
### Получение информации о вопросе
```lua
local questions = questionLib.GetQuestions()
if questions[0] then
    local question = questionLib.GetInfo( questions[0] )
end
```

::: info Описание примера
В примере сначала получается список доступных вопросов. Затем проверяется наличие первого элемента в списке, и если он существует, извлекается подробная информация о нем.
:::

## Смотрите также
- [EVENT_CLIENT_MESSAGE](../events#event-client-message)
- [questionLib.GetQuestions](function.questionLib.GetQuestions)
- [questionLib.SendData](function.questionLib.SendData)
- [EVENT_QUESTION_ADDED](../events#event-question-added)
- [EVENT_QUESTION_REMOVED](../events#event-question-removed)
- [ENUM_Question_ShowResultsType](../enums#enum-question-showresultstype)