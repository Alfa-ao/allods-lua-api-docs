# raid.GetLeaderHelpers

Возвращает уникальные идентификаторы помощников лидера рейда.

[<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-UniqueId) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-UniqueId) <Badge type="warning" text="Process" />

## Описание

```lua
raid.GetLeaderHelpers(): table | nil
```

Функция возвращает таблицу, содержащую уникальные идентификаторы помощников лидера рейда. Таблица может быть пустой в случае отсутствия помощников.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица, содержащая уникальные идентификаторы помощников лидера рейда.

## Примеры

### Получение списка помощников
```lua
local leaderHelpers = raid.GetLeaderHelpers()
```

## Смотрите также

- [UniqueId](/api/types/LuaApi.md)