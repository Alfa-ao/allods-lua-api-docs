# hangar.SwitchShipSkin

Меняет скин активного корпуса активного корабля главного игрока на заданный.

## Описание

```lua
hangar.SwitchShipSkin( skinId: ShipSkinId )
```

Функция производит смену скина активного корпуса активного корабля главного игрока на заданный. Скин должен присутствовать в списке, возвращаемом `hangar.GetAvailableSkins()`.

## Список параметров

- **`skinId`** (`ShipSkinId`) - идентификатор корпуса корабля.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Смена скина активного корабля

```lua
local skins = hangar.GetAvailableSkins()
if skins and skins[0] then
    hangar.SwitchShipSkin( skins[0] )
end
```

## Смотрите также

- [hangar.GetActiveShip](function.hangar.GetActiveShip)
- [hangar.GetActiveShipSkin](function.hangar.GetActiveShipSkin)
- [hangar.GetAvailableSkins](function.hangar.GetAvailableSkins)