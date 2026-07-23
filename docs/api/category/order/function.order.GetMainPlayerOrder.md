# order.GetMainPlayerOrder

Возвращает информацию об ордене.

## Описание

```lua
order.GetMainPlayerOrder(): number | nil
```

Функция возвращает порядковый номер ордена главного игрока.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `number` | `nil` - порядковый номер, или `nil`, если орден не определен.

## Примеры

### Получение порядкового номера ордена

```lua
local orderNumber = order.GetMainPlayerOrder()
if orderNumber then
    LogInfo( "Порядковый номер ордена: ", orderNumber )
end
```