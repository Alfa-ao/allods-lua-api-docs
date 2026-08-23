# wheelOfLoot.GetInfo

Возвращает данные запрашиваемого колеса лута.

## Описание

```lua
wheelOfLoot.GetInfo( id: number ): table
```

Функция извлекает и возвращает данные запрашиваемого колеса лута.

## Список параметров

- **`id`** (`number`) - идентификатор колеса лута.

## Возвращаемые значения

Возвращает `table` - данные колёса лута.

- **`sysName`** (`string`) - служебное название.
- **`lifeTime`** (`number`) - локальное время в ms, когда колесо автоматически разролится.
- **`price`** (`number`) - текущая цена разрола.
- **`rollsCount`** (`number`) - текущее количество разролов.
- **`maxRollsCount`** (`number`) - максимальное количество разролов.
- **`itemPriceId`** (`ObjectId`) - идентификатор предмета, который тратится на разрол.
- **`wheelId`** (`number`) - идентификатор колеса лута.
- **`isLoginEvent`** (`boolean`) - `true`, если это колесо лута логин-ивента.
- **`isManual`** (`boolean`) - `true`, если награду можно выбирать.

## Примеры

### Получение информации о колесе лута

```lua
local wheelIds = wheelOfLoot.GetList()
local wheelInfo = wheelOfLoot.GetInfo( wheelIds[0] )
```

## Смотрите также

- [wheelOfLoot.GetList](/api/category/wheelOfLoot/function.wheelOfLoot.GetList.md)