# avatar.GetContextActionCooldown
Возвращает информацию о кулдауне контекстного действия.

## Описание
```lua
avatar.GetContextActionCooldown( id: ObjectId ): table | nil
```
Функция извлекает и возвращает данные о времени восстановления (кулдауне) указанного контекстного действия. Если действие не найдено или не имеет кулдауна, возвращается `nil`. Для получения более полной информации о контекстном действии используется функция `avatar.GetContextActionInfo`.

::: tip Совет
Для получения исчерпывающих данных о контекстном действии, включая его кулдаун, рекомендуется использовать функцию `avatar.GetContextActionInfo`.
:::

## Список параметров
- **`id`** (`ObjectId`)
Уникальный идентификатор контекстного действия, информацию о кулдауне которого необходимо получить.

## Возвращаемые значения
Возвращает таблицу (`table`) с информацией о кулдауне или `nil`, если действие не существует.

Поля возвращаемой таблицы:
- **`durationMs`** (`number`) — общая длительность кулдауна в миллисекундах.
- **`remainingMs`** (`number`) — оставшееся время действия кулдауна в миллисекундах.

## Примеры
### Получение информации о кулдауне действия
```lua
local actionId = 12345 -- Идентификатор контекстного действия
local actionCooldown = avatar.GetContextActionCooldown( actionId )

if actionCooldown then
    local remainingSec = actionCooldown.remainingMs / 1000
    LogInfo( "Осталось времени: ", remainingSec, " сек." )
else
    LogInfo( "Действие не найдено или кулдаун отсутствует." )
end
```

## Смотрите также

- [avatar.GetContextActionInfo](function.avatar.GetContextActionInfo)