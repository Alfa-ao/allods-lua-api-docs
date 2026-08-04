# soulProgressLib.GetExperienceBySoulLevel

Рассчитывает количество опыта для достижения заданного уровня души.

## Описание

```lua
soulProgressLib.GetExperienceBySoulLevel( level: number ): number
```

Функция рассчитывает количество опыта, необходимое для достижения заданного уровня души.

## Список параметров

- **`level`** (`number`) - Уровень души, для которого рассчитывается необходимое количество опыта.

## Возвращаемые значения

Возвращает `number` - количество опыта, необходимое для достижения заданного уровня души.

## Примеры

### Получение количества опыта для уровня души

```lua
local value = soulProgressLib.GetExperienceBySoulLevel( level )
```

## Смотрите также

- [soulProgressLib.GetSoulLevelForExperience](/api/category/soulProgressLib/function.soulProgressLib.GetSoulLevelForExperience.md)