# mentor.RefuseApprentice

Инициирует исключение ученика из списка подопечных главного персонажа.

## Описание

```lua
mentor.RefuseApprentice( mentorPlayerId: ObjectId )
```

Функция предпринимает попытку исключения ученика главного игрока из системы наставничества.

## Список параметров

- **`mentorPlayerId`** (`ObjectId`) - Идентификатор субъекта менторских взаимоотношений.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Исключение всех учеников

```lua
local apprentices = mentor.GetApprentices( mentorPlayerId )
for i, id in pairs( apprentices ) do
    mentor.RefuseApprentice( id )
end
```

::: info Описание примера
В примере извлекается список учеников, после чего в цикле для каждого идентификатора вызывается функция исключения из наставничества.
:::

## Смотрите также

- [mentor.GetApprentices](function.mentor.GetApprentices)