# avatar.GetRitualActivePreset
Возвращает идентификатор текущего активного набора ритуальных вещей.

## Описание

```lua
avatar.GetRitualActivePreset(): number
```

Функция возвращает числовой идентификатор текущего активного набора ритуальных вещей. Возвращаемое значение соответствует одному из элементов перечисления `DUMMY_TYPE`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения
`number` - идентификатор активного набора ритуальных вещей.

## Примеры

### Получение идентификатора активного набора
```lua
local activePreset = avatar.GetRitualActivePreset()
```

## Смотрите также

- [unit.GetRitualActivePreset](/api/category/unit/function.unit.GetRitualActivePreset.md)
- [DUMMY_TYPE_*](/api/constants/constants.DUMMY_TYPE.md)