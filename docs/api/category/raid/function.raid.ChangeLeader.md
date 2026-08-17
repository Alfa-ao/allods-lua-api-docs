# raid.ChangeLeader

Назначает нового лидера рейда.

[<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-UniqueId) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-UniqueId) <Badge type="warning" text="Process" />

## Описание

```lua
raid.ChangeLeader( uniqueId: UniqueId )
```

Функция отправляет запрос на назначение указанного участника отряда новым лидером рейда.

## Список параметров

- **`uniqueId`** (`UniqueId`) - Идентификатор участника отряда, назначаемого новым лидером.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Назначение нового лидера рейда

```lua
raid.ChangeLeader( playerId )
```