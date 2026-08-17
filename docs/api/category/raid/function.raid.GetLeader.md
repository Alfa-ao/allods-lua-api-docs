# raid.GetLeader

Возвращает уникальный идентификатор лидера рейда.

[<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-UniqueId) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-UniqueId) <Badge type="warning" text="Process" />

## Описание

```lua
raid.GetLeader(): UniqueId
```

Функция возвращает уникальный идентификатор лидера рейда.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `UniqueId` - уникальный идентификатор лидера рейда.

## Примеры

### Получение идентификатора лидера
```lua
local leader = raid.GetLeader()
```

## Смотрите также

- [UniqueId](/api/types/LuaApi.md)