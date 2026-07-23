# order.GetBonusVoitingList

Возвращает список бонусов для голосования.

## Описание

```lua
order.GetBonusVoitingList(): table | nil
```

Функция возвращает кэшированный список бонусов, доступных для голосования. Для обновления данных требуется вызов `order.RequestOrderInfo`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица с информацией о бонусах для голосования или `nil`, если данные отсутствуют.

- **`id`** (`OrderBonusId`) - идентификатор бонуса.

- **`name`** (`WString`) - название бонуса.

- **`description`** (`WString`) - описание бонуса.

- **`image`** (`TextureId`) - текстура с иконкой предмета.

- **`voteCount`** (`number`) - количество голосов.

- **`disabled`** (`boolean`) - признак доступности для голосования.

## Примеры

### Перебор списка бонусов для голосования

```lua
local bonusList = order.GetBonusVoitingList()

if bonusList then
    for i = 0, GetTableSize( bonusList ) - 1 do
        local bonus = bonusList[ i ]
        LogInfo( "Бонус: ", bonus.name, " | Голосов: ", bonus.voteCount, " | Доступен: ", tostring( not bonus.disabled ) )
    end
else
    LogInfo( "Данные о бонусах ещё не загружены. Вызовите order.RequestOrderInfo()." )
end
```

## Смотрите также

- [order.RequestOrderInfo](function.order.RequestOrderInfo)