# guild.DistributeTabard

Выдает знак отличия в награду члену гильдии главного игрока.

## Описание

```lua
guild.DistributeTabard( memberId: ObjectId, tabardType: number | ENUM_TabardType_... )
```

Выдача знака отличия в награду члену гильдии главного игрока.

## Список параметров

- **`memberId`** (`ObjectId`) - Идентификатор члена гильдии.

- **`tabardType`** (`number` | `ENUM_TabardType_...`) - Тип знака отличия.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Выдача знака отличия

```lua
guild.DistributeTabard( memberId, ENUM_TabardType_Champion )
```

## Смотрите также

- [ENUM_TabardType_...](#)