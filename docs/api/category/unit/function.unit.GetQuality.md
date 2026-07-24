# unit.GetQuality

Возвращает числовое значение элитности указанного юнита.

## Описание

```lua
unit.GetQuality( unitId: ObjectId ): number
```

Функция возвращает числовое значение, определяющее элитность юнита. Для игровых персонажей всегда возвращает значение `UNIT_QUALITY_COMMON`.

## Список параметров

- **`unitId`** (`ObjectId`) - Уникальный идентификатор юнита. Значение не может быть `nil`.

## Возвращаемые значения

Возвращает `number`(`UNIT_QUALITY_*`) - Элитность юнита. Для игроков возвращает `UNIT_QUALITY_COMMON`.

::: info Перечисление
- **`UNIT_QUALITY_COMMON`**

- **`UNIT_QUALITY_ELITE`**

- **`UNIT_QUALITY_FLAVOR_ELITE`**

- **`UNIT_QUALITY_MINI_BOSS`**

- **`UNIT_QUALITY_BOSS`**

- **`UNIT_QUALITY_RAID_BOSS`**

- **`UNIT_QUALITY_RAID_ELITE`**

- **`UNIT_QUALITY_CRITTER`**
:::

## Примеры

### Получение элитности юнита

```lua
local quality = unit.GetQuality( unitId )
```