# tutorialLib.GetCategoryContent

Возвращает идентификаторы всех обучений в заданной категории.

## Описание

```lua
tutorialLib.GetCategoryContent( id: TutorialCategoryId ): table | nil
```

Функция возвращает список идентификаторов, исключая обучения, не прошедшие проверки по `requiredContentKeys` и `excludeContentKeys`.

## Список параметров

- **`id`** (`TutorialCategoryId`) - Идентификатор категории обучения.

## Возвращаемые значения

Возвращает `table` | `nil`.

Таблица содержит идентификаторы (`TutorialId`) обучения в категории. Индексация элементов начинается с 1.

## Примеры

### Получение содержимого категории

```lua
local tutorialIds = tutorialLib.GetCategoryContent( tutorialLib.GetCategories()[ 1 ] )
```

## Смотрите также

- [tutorialLib.GetCategories](/api/category/tutorialLib/function.tutorialLib.GetCategories.md)