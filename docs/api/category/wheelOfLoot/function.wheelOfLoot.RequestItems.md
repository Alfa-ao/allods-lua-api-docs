# wheelOfLoot.RequestItems

Запрашивает предметы указанного колеса.

## Описание

```lua
wheelOfLoot.RequestItems( id: number )
```

Функция выполняет запрос предметов указанного колеса. В ответ на него приходит событие `EVENT_WHEELOFLOOT_ITEMS`.

## Список параметров

- **`id`** (`number`) - Идентификатор колеса лута.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Запрос предметов колеса из списка

```lua
local wheelIds = wheelOfLoot.GetList()
wheelOfLoot.RequestItems( wheelIds[0] )
```

## Смотрите также

- [EVENT_WHEELOFLOOT_ITEMS](/api/events/events.EVENT_WHEELOFLOOT_.md#event-wheelofloot-items)
- [wheelOfLoot.GetList](/api/category/wheelOfLoot/function.wheelOfLoot.GetList.md)