# questionLib.Cancel
Извещает сервер, что ответа на вопрос не будет.

## Описание

```lua
questionLib.Cancel( questionId: ObjectId )
```

Функция отправляет на сервер уведомление об отсутствии ответа на указанный вопрос.

## Список параметров

- **`questionId`** (`ObjectId`) - Идентификатор вопроса, должен быть одним из списка, получаемого посредством функции `questionLib.GetQuestions()`.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Отмена ответа на вопрос

```lua
questionLib.Cancel( questionId )
```

## Смотрите также

- [questionLib.GetQuestions()](function.questionLib.GetQuestions)
- [questionLib.SendData()](function.questionLib.SendData)