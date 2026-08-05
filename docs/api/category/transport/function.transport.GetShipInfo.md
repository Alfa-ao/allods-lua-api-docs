# transport.GetShipInfo

Возвращает общую информацию о постороннем корабле по его идентификатору.

## Описание

```lua
transport.GetShipInfo( id: ObjectId ): table | nil
```

Функция извлекает и возвращает общую информацию о постороннем корабле по его идентификатору.

## Список параметров

- **`id`** (`ObjectId`) - Идентификатор транспорта.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица с информацией о корабле или `nil` при возникновении ошибки:

- **`name`** (`WString`) - Имя корабля.

- **`ownerName`** (`WString`) - Имя владельца корабля.

- **`ownerGuildName`** (`WString` | `nil`) - Имя гильдии владельца корабля, если он состоит в гильдии.

- **`gearScore`** (`number`) - Рейтинг корабля.

- **`techLevel`** (`number`) - Поколение корпуса корабля.

- **`quality`** (`number`) - Улучшения корпуса корабля за аномалии.

- **`isEnhanced`** (`boolean`) - Наличие 15% улучшения стойкости корпуса.

## Примеры

### Получение информации о корабле

```lua
local shipInfo = transport.GetShipInfo( id )
if shipInfo then
    LogInfo( shipInfo.gearScore )
end
```

## Смотрите также

- [EVENT_TRANSPORT_SHIP_INFO_CHANGED](/api/events/events.EVENT_TRANSPORT_.md#event-transport-ship-info-changed)