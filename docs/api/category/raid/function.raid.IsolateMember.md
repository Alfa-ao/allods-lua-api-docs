# raid.IsolateMember

Перемещает члена рейда в отдельную (новую) группу.

[<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-UniqueId) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-UniqueId) <Badge type="warning" text="Process" />

## Описание

```lua
raid.IsolateMember( uniqueId: UniqueId )
```

Функция перемещает члена рейда в отдельную (новую) группу.

## Список параметров

- **`uniqueId`** (`UniqueId`) - Уникальный постоянный идентификатор игрока - участника отряда.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Перемещение участника рейда

```lua
raid.IsolateMember( memberId )
```