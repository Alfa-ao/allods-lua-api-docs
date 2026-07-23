# order.GetAchievements

Возвращает список достижений по идентификатору события.

## Описание

```lua
order.GetAchievements( eventId: ObjectId ): table | nil
```

Функция возвращает список достижений по указанному идентификатору события.

::: tip Совет
Для запроса данных с сервера необходимо использовать функции `order.RequestPrestigeAchivements()` и `order.RequestRatingAchivements()`.
:::

## Список параметров

- **`eventId`** (`ObjectId`) - Уникальный идентификатор события.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица с информацией о достижениях или `nil`, если данные отсутствуют.

- **`mainPlayerAchievement`** (`number`) - Достижение аватара по данной теме.

- **`achievements`** (`table` | `nil`) - Список достижений, индексированный с 1.

  - `position` (`number`) - Позиция аватара.

  - `name` (`WString`) - Имя аватара.

  - `guildName` (`WString`) - Название гильдии.

  - `shardName` (`WString`) - Название шарда.

  - `achievement` (`number`) - Количество очков.

  - `raceClass` (`table` | `nil`) - Информация о расе и классе персонажа (`LuaRaceClassInfoPart`).

  - `isMainPlayer` (`boolean`) - Флаг, указывающий, что аватар принадлежит главному игроку.

## Примеры

### Получение и обработка списка достижений

```lua
local achievements = order.GetAchievements( eventId )
if achievements then
    LogInfo( "Достижение главного игрока: ", achievements.mainPlayerAchievement )
    
    for i = 1, GetTableSize( achievements.achievements ) do
        local info = achievements.achievements[ i ]
        LogInfo( "Имя: ", info.name, " Очки: ", info.achievement )
    end
end
```

::: info Описание примера
В примере выполняется запрос достижений по идентификатору события. Если данные успешно получены, выводится достижение главного игрока. Затем происходит перебор списка достижений с помощью цикла, где для каждого элемента извлекается имя и количество очков.
:::

## Смотрите также

- [order.RequestPrestigeAchivements](function.order.RequestPrestigeAchivements)
- [order.RequestRatingAchivements](function.order.RequestRatingAchivements)