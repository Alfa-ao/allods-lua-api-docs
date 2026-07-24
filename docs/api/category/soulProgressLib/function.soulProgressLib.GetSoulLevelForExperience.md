# soulProgressLib.GetSoulLevelForExperience
Рассчитывает уровень души на основе значения опыта.

## Описание
```lua
soulProgressLib.GetSoulLevelForExperience( value: number ): number
```
Функция рассчитывает уровень души на основе переданного значения опыта.

## Список параметров
- **`value`** (`number`) - Значение опыта, для которого необходимо рассчитать уровень души.

## Возвращаемые значения
Возвращает `number` - уровень души.

## Примеры
### Расчет уровня души
```lua
local value = soulProgressLib.GetCurrentExperience()
local level = soulProgressLib.GetSoulLevelForExperience( value )
```
::: info Описание примера
В примере сначала получается текущее значение опыта с помощью `soulProgressLib.GetCurrentExperience()`, после чего рассчитывается соответствующий уровень души.
:::

## Смотрите также
- [soulProgressLib.GetExperienceBySoulLevel](function.soulProgressLib.GetExperienceBySoulLevel)