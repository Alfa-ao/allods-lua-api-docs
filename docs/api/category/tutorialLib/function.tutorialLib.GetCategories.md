# tutorialLib.GetCategories
Возвращает все категории обучения.

## Описание

```lua
tutorialLib.GetCategories(): table | nil
```

Функция возвращает список всех категорий обучения.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` | `nil` - список категорий обучения, индексирован с 1. Содержит элементы типа `TutorialCategoryId`.

## Примеры

### Получение информации о первой категории
```lua
local tutorialCategoryInfo = tutorialLib.GetCategoryInfo( tutorialLib.GetCategories()[1] )
```

## Смотрите также

- [tutorialLib.GetCategoryInfo](function.tutorialLib.GetCategoryInfo)