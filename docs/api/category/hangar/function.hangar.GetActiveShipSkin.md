# hangar.GetActiveShipSkin

Возвращает идентификатор скина корпуса активного корабля главного игрока.

## Описание

```lua
hangar.GetActiveShipSkin(): ShipSkinId|nil
```

Функция возвращает идентификатор скина корпуса активного корабля главного игрока.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `ShipSkinId` | `nil` - идентификатор скина корпуса активного корабля. Если активного корабля нет, возвращается `nil`.

## Примеры

### Получение информации о скине

```lua
local skinId = hangar.GetActiveShipSkin()
if skinId then
    local activeSkinInfo = hangar.GetSkinInfo(hullId)
end
```

::: info Описание примера
В примере запрашивается идентификатор скина активного корабля. При его наличии извлекается подробная информация о скине с использованием функции `hangar.GetSkinInfo`.
:::

## Смотрите также

- [hangar.GetSkinInfo](function.hangar.GetSkinInfo)
- [hangar.GetAvailableSkins](function.hangar.GetAvailableSkins)
- [hangar.SwitchShipSkin](function.hangar.SwitchShipSkin)
- [EVENT_HANGAR_ACTIVE_SKIN_CHANGED](events.hangar#event-hangar-active-skin-changed)