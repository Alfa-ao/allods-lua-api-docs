# raid.SwapMembers

Меняет местами двух членов отряда в разных группах.

[<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-UniqueId) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-UniqueId) <Badge type="warning" text="Process" />

## Описание

```lua
raid.SwapMembers( playerId1: UniqueId, playerId2: UniqueId )
```

Производит обмен позициями между двумя участниками отряда из разных групп.

## Список параметров

- **`playerId1`** (`UniqueId`) - Кросс-серверный постоянный идентификатор участника отряда.

- **`playerId2`** (`UniqueId`) - Кросс-серверный постоянный идентификатор участника отряда.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Обмен участниками отряда

```lua
raid.SwapMembers( playerId1, playerId2 )
```