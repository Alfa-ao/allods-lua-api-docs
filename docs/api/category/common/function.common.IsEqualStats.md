# common.IsEqualStats
Проверяет соответствие двух характеристик друг другу на основе их идентификаторов.

## Описание
```lua
common.IsEqualStats( firstStatId: SpecialStatId | ENUM_InnateStats, secondStatId: SpecialStatId | ENUM_InnateStats ): boolean
```
Функция сравнивает два идентификатора характеристик и определяет, влияют ли они на один и тот же базовый параметр. Поддерживается сравнение идентификаторов типа `SpecialStatId` и значений перечисления `ENUM_InnateStats_*` в любых комбинациях.

## Список параметров
- **`firstStatId`** (`SpecialStatId` | `ENUM_InnateStats`)
Идентификатор первой сравниваемой характеристики. Может принимать значения из перечисления `ENUM_InnateStats_*` или являться специальным идентификатором `SpecialStatId`.
- **`secondStatId`** (`SpecialStatId` | `ENUM_InnateStats`)
Идентификатор второй сравниваемой характеристики. Допускаются те же типы значений, что и для первого параметра.

## Возвращаемые значения
`boolean` — `true`, если обе характеристики влияют на один и тот же параметр; `false`, если характеристики влияют на разные параметры.

## Примеры
### Сравнение специальной характеристики и базового стата
```lua
local isEqualStats = common.IsEqualStats( specialStatId, ENUM_InnateStats_Vitality )
```

## Смотрите также
- [ENUM_InnateStats_*](enums.innatestats)