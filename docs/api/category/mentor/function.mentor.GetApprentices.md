# mentor.GetApprentices

Возвращает список учеников ментора.

## Описание

```lua
mentor.GetApprentices( mentorPlayerId: ObjectId ): table
```

Функция возвращает индексированную с 0 таблицу идентификаторов учеников указанного ментора.

## Список параметров

- **`mentorPlayerId`** (`ObjectId`) - Идентификатор субъекта менторских взаимоотношений.

## Возвращаемые значения

Возвращает `table` - индексированная с 0 таблица идентификаторов (`ObjectId`) субъектов менторских взаимоотношений.

## Примеры

### Получение списка учеников

```lua
local apprentices = mentor.GetApprentices( mentorPlayerId )
for i, id in pairs( apprentices ) do
    local info = mentor.GetPlayerInfo( id )
end
```

::: info Описание примера

В примере запрашивается список учеников для заданного ментора. Затем в цикле перебираются полученные идентификаторы, и для каждого извлекается подробная информация об игроке с помощью функции `mentor.GetPlayerInfo`.

:::

## Смотрите также

- [mentor.GetPlayerInfo](function.mentor.GetPlayerInfo)