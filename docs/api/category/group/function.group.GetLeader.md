# group.GetLeader

Возвращает уникальный идентификатор лидера группы.

[<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-UniqueId) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-UniqueId) <Badge type="warning" text="Process" />

## Описание

```lua
group.GetLeader(): UniqueId
```

Функция возвращает уникальный идентификатор лидера группы.

::: warning Замечание
Группа должна существовать.
:::

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `UniqueId` - уникальный идентификатор лидера.

## Примеры

### Получение идентификатора лидера

```lua
local leader = group.GetLeader()
```

## Смотрите также

- [UniqueId](/api/types/LuaApi.md)