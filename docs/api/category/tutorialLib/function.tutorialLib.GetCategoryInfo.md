# tutorialLib.GetCategoryInfo
Возвращает информацию о категории обучения.

## Описание

```lua
tutorialLib.GetCategoryInfo( id: TutorialCategoryId ): table
```
Извлекает и возвращает детальную информацию о заданной категории обучения.

## Список параметров

- **`id`** (`TutorialCategoryId`) - Идентификатор категории обучения.

## Возвращаемые значения

Возвращает `table` - таблица с информацией о категории обучения:

- **`name`** (`WString`) - Имя категории.

- **`sysName`** (`string`) - Системное имя категории.

- **`isHidden`** (`boolean`) - Является ли категория скрытой.

## Примеры

### Получение информации о категории
```lua
local tutorialCategoryInfo = tutorialLib.GetCategoryInfo( tutorialLib.GetCategories()[1] )
```

## Смотрите также

- [tutorialLib.GetCategories](function.tutorialLib.GetCategories)