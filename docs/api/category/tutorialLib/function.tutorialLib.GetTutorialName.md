# tutorialLib.GetTutorialName

Возвращает отображаемое название обучения.

## Описание

```lua
tutorialLib.GetTutorialName( id: TutorialId ): WString | nil
```

Функция извлекает и возвращает текстовое название обучения по его уникальному идентификатору.

## Список параметров

- **`id`** (`TutorialId`) - Идентификатор обучения.

## Возвращаемые значения

Возвращает `WString` | `nil` - Отображаемое название обучения или `nil`, если обучение не найдено.

## Примеры

### Получение названия обучения по системному имени

```lua
local testTutorialName = tutorialLib.GetTutorialName( tutorialLib.GetTutorialBySysName( "test" ) )
```

## Смотрите также

- [tutorialLib.GetTutorialBySysName](/api/category/tutorialLib/function.tutorialLib.GetTutorialBySysName.md)