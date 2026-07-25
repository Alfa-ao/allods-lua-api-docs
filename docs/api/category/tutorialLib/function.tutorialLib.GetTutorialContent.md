# tutorialLib.GetTutorialContent
Возвращает содержимое обучения и данные, необходимые для его отображения.

## Описание

```lua
tutorialLib.GetTutorialContent( id: TutorialId ): table | nil
```

Функция извлекает и возвращает содержимое обучения и данные, необходимые для его отображения.

## Список параметров

- **`id`** (`TutorialId` (`ResourceId`)) - Идентификатор обучения.

## Возвращаемые значения

Возвращает `table` | `nil` - таблицу с данными обучения или `nil`.

- **`name`** (`WString` | `nil`) - Отображаемое название обучения.

- **`text`** (`ValuedText` | `nil`) - Полный текст обучения.

- **`shortText`** (`ValuedText` | `nil`) - Короткий текст обучения.

- **`image`** (`TextureId` | `nil`) - Иллюстрация обучения.

- **`link`** (`ValuedText` | `nil`) - Внешняя ссылка на дополнительную информацию по обучению.

- **`bind`** (`table` | `nil`) - Таблица с полями бинда, если он задан в ресурсе.
    - `section` (`string`) - Имя секции.
    - `name` (`string`) - Имя бинда.

- **`popUps`** (`table` | `nil`) - Массив данных для всплывающих сообщений, индексирован с 1.
    - `text` (`ValuedText`) - Короткий текст всплывающего сообщения.
    - `target` (`string`) - Системное имя целевого виджета для всплывающего сообщения.

## Примеры

### Получение содержимого обучения
```lua
local testTutorialContent = tutorialLib.GetTutorialContent( tutorialLib.GetTutorialBySysName( "test" ) )
```

## Смотрите также

- [tutorialLib.GetTutorialBySysName](function.tutorialLib.GetTutorialBySysName)