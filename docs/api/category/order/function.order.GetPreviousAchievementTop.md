# order.GetPreviousAchievementTop

Возвращает описание лидера прошлого сезона по классу.

## Описание

```lua
order.GetPreviousAchievementTop( eventId: ObjectId ): table | nil
```

Функция извлекает и возвращает описание лидера прошлого сезона по классу. Для запроса актуальных данных с сервера необходимо предварительно использовать функции `order.RequestPrestigeAchivements` или `order.RequestRatingAchivements`.

## Список параметров

- **`eventId`** (`ObjectId`) - Идентификатор события.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица с данными о лидере прошлого сезона по классу или `nil` в случае отсутствия данных.

- **`name`** (`WString`) - Имя аватара.

- **`achievement`** (`number`) - Количество очков.

## Смотрите также

- [order.RequestPrestigeAchivements](function.order.RequestPrestigeAchivements)
- [order.RequestRatingAchivements](function.order.RequestRatingAchivements)