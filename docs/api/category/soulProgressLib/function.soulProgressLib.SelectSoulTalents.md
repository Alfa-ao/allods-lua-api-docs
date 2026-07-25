# soulProgressLib.SelectSoulTalents
Выбирает таланты души.

## Описание

```lua
soulProgressLib.SelectSoulTalents( talents: table )
```

Функция выполняет выбор талантов души на основе переданного списка идентификаторов узлов дерева.

## Список параметров

- **`talents`** (`table`) - Список идентификаторов выбранных талантов (узлов дерева талантов души). Содержит значения типа `number`.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Выбор талантов души
```lua
local talents = { 1, 2, 3 }
soulProgressLib.SelectSoulTalents( talents )
```

## Смотрите также

- [soulProgressLib.RerollSoulTalents](function.soulProgressLib.RerollSoulTalents)
- [EVENT_SOUL_PROGRESS_TALENTS_CHANGED](events#event-soul-progress-talents-changed)