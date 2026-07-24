# unit.GetOvertipCustomView
Возвращает настройку отображения овертипа юнита.

## Описание
```lua
unit.GetOvertipCustomView( unitId: ObjectId ): number
```
Функция возвращает настройку отображения овертипа юнита в виде значения перечисления `ENUM_MobWorld_OvertipCustomView`.

## Список параметров
- **`unitId`** (`ObjectId`) - Идентификатор юнита.

## Возвращаемые значения
Возвращает `number` (`ENUM_MobWorld_OvertipCustomView_*`) - настройка отображения овертипа юнита.

## Примеры
### Получение настройки отображения овертипа
```lua
local overtipCustomViewOption = unit.GetOvertipCustomView( unitId )
```

## Смотрите также

- [ENUM_MobWorld_OvertipCustomView](../constants#enum-mobworld-overtipcustomview)