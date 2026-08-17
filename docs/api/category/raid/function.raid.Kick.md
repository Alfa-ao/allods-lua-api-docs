# raid.Kick

Исключает указанного игрока из рейда.

[<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-UniqueId) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-UniqueId) <Badge type="warning" text="Process" />

## Описание

```lua
raid.Kick( playerId: UniqueId )
```
Инициирует процесс исключения игрока из рейда.

## Список параметров

- **`playerId`** (`UniqueId`) - Уникальный постоянный идентификатор игрока.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Исключение игрока из рейда
```lua
raid.Kick( playerId )
```