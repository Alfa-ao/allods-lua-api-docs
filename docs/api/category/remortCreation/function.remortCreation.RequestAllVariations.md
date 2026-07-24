# remortCreation.RequestAllVariations
Запрашивает информацию о вариациях персонажей с сервера.

## Описание
```lua
remortCreation.RequestAllVariations()
```
Функция возвращает информацию о вариациях персонажей с сервера асинхронно через событие `EVENT_REMORT_VARIATIONS_INFO_CHANGED`.

::: tip Совет
Функция реализована на стороне пользовательского интерфейса.
:::

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Запрос вариаций персонажей
```lua
remortCreation.RequestAllVariations()
```

## Смотрите также
- [EVENT_REMORT_VARIATIONS_INFO_CHANGED](events.remort#event-remort-variations-info-changed)