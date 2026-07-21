# hangar.GetSkinInfo

Извлекает информацию о скине корпуса корабля.

## Описание

```lua
hangar.GetSkinInfo( skinId: ShipSkinId ): table|nil
```

Функция возвращает таблицу с информацией о скине корпуса корабля. Если идентификатор `skinId` имеет корректный тип, возвращается таблица, содержащая название, описание и иконку скина. В противном случае функция возвращает `nil`.

## Список параметров

- **`skinId`** (`ShipSkinId`) - Идентификатор скина корпуса корабля.

## Возвращаемые значения

Возвращает `table` или `nil`.

При успешном получении информации возвращается таблица со следующими полями:

- **`name`** (`WString`) - Название скина (локализованное).

- **`description`** (`WString`) - Описание скина (локализованное).

- **`image`** (`TextureId`) - Иконка скина (только для UIState).

## Примеры

### Получение информации о первом доступном скине

```lua
local skins = hangar.GetAvailableSkins()
if skins and skins[0] then
    local skinInfo = hangar.GetSkinInfo( skins[0] )
end
```

::: info Описание примера
В примере запрашивается список доступных скинов. При наличии хотя бы одного элемента в списке извлекается информация о нулевом скине посредством вызова `hangar.GetSkinInfo`.
:::

## Смотрите также

- [hangar.GetActiveShipSkin](function.hangar.GetActiveShipSkin)
- [hangar.GetAvailableSkins](function.hangar.GetAvailableSkins)