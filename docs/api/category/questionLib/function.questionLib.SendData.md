# questionLib.SendData

Передает информацию об ответе на вопрос с заданным идентификатором, на который ожидается ответ от игрока.

## Описание

```lua
questionLib.SendData( questionId: ObjectId, result: table )
```

Функция формирует и отправляет запрос с данными ответа на вопрос. Структура и значения полей передаваемой таблицы определяются типом вопроса.

## Список параметров

- **`questionId`** (`ObjectId`) - Уникальный идентификатор вопроса, который должен присутствовать в списке, получаемом посредством функции `questionLib.GetQuestions`.

- **`result`** (`table`) - Таблица с информацией об ответе. Набор и значения полей зависят от типа вопроса, определяемого полем `type` функции `questionLib.GetInfo` и перечислением `CategoryQuestionType`.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Отправка ответа на вопрос

```lua
questionLib.SendData( questionId, result )
```

## Смотрите также

- [questionLib.GetQuestions](function.questionLib.GetQuestions)
- [questionLib.GetInfo](function.questionLib.GetInfo)
- [CategoryQuestionType](../constants#categoryquestiontype)