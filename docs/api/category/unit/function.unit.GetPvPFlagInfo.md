# unit.GetPvPFlagInfo

Возвращает информацию о PvP-флаге юнита.

## Описание

```lua
unit.GetPvPFlagInfo( unitId: ObjectId ): table
```

Функция извлекает и возвращает таблицу с информацией о текущем состоянии PvP-флага указанного юнита.

::: warning Замечание
При изменении статуса PvP-флага приходит событие `EVENT_UNIT_PVP_FLAG_CHANGED`.
:::

## Список параметров

- **`unitId`** (`ObjectId`) - Уникальный идентификатор юнита.

## Возвращаемые значения

Возвращает `table` - таблицу с параметрами PvP-флага:

- **`isOn`** (`boolean`) - Статус PvP-флага.

- **`serverFlag`** (`boolean` | `nil`) - Только для игроков. Значение `true`, если PvP выставлено сервером.

- **`playerFlag`** (`boolean` | `nil`) - Только для игроков. Значение `true`, если PvP выставлено игроком.

- **`timeLeft`** (`table` | `nil`) - Только для игроков. Время, оставшееся до истечения PvP-флага. Присутствует, если флаг выставлен временно, иначе `nil`.

    - `h` (`number`) - Количество часов.

    - `m` (`number`) - Количество минут.

    - `s` (`number`) - Количество секунд.

    - `overallMs` (`number`) - Общее время в миллисекундах.

## Примеры

### Проверка статуса PvP-флага

```lua
local pvp = unit.GetPvPFlagInfo( unitId )
if pvp.isOn then
    if unit.IsPlayer( unitId ) then
        local serverPvP = pvp.serverFlag
    end
end
```

::: info Описание примера
В примере запрашивается информация о PvP-флаге юнита. Если флаг включен, дополнительно проверяется, является ли юнит игроком с помощью `unit.IsPlayer`. Для игроков извлекается значение флага, установленного сервером.
:::

## Смотрите также

- [EVENT_UNIT_PVP_FLAG_CHANGED](../events/unit#event-unit-pvp-flag-changed)
- [unit.IsPlayer](function.unit.IsPlayer)