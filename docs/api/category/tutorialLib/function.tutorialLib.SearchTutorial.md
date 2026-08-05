# tutorialLib.SearchTutorial
Инициирует поиск обучения, результат которого передается через событие EVENT_TUTORIAL_SEARCH_RESULT.

## Описание

```lua
tutorialLib.SearchTutorial( request: WString )
```
Поиск выполняется в обучениях по полям `name`, `text` и `shortText`, за исключением тех, что имеют значение поля `isUnlearnable` равное `true`. Также поиск выполняется по именам категорий, за исключением тех, что имеют значение поля `isHidden` равное `true`.

## Список параметров

- **`request`** (`WString`) - Строка запроса для поиска.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Базовый вызов функции
```lua
tutorialLib.SearchTutorial( inputWidget:GetText() )
```

## Смотрите также

- [EVENT_TUTORIAL_SEARCH_RESULT](/api/events/events.EVENT_TUTORIAL_.md#event-tutorial-search-result)