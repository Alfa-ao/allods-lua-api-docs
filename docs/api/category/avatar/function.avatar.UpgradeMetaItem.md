# avatar.UpgradeMetaItem
Отправляет запрос на улучшение мета-предмета.
## Описание
```lua
avatar.UpgradeMetaItem( sourceId: ObjectId, enhancerId: ObjectId, agentId: ObjectId, agentCount: number )
```
Функция инициирует процесс улучшения мета-предмета, используя заданный предмет-улучшитель и указанное количество предметов-агентов. Запрос отправляется в ответ на приход события `EVENT_META_DIALOG`.

::: warning Замечание
Вызов функции производится в ответ на приход события `EVENT_META_DIALOG`.
:::

## Список параметров
- **`sourceId`** (`ObjectId`)
Уникальный идентификатор улучшаемого мета-предмета.
- **`enhancerId`** (`ObjectId`)
Уникальный идентификатор предмета-улучшителя.
- **`agentId`** (`ObjectId`)
Уникальный идентификатор предмета-агента, необходимого для проведения улучшения.
- **`agentCount`** (`number`)
Количество используемых предметов-агентов.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Проверка наличия предметов и запуск улучшения
```lua
local sourceMeta = avatar.GetItemMetaInfo( sourceId )
local enhancerMeta = avatar.GetItemMetaInfo( enhancerId )
if sourceMeta and enhancerMeta then
    avatar.UpgradeMetaItem( sourceId, enhancerId, agentId, 1 )
end
```
::: info Описание примера
В примере сначала извлекается мета-информация об улучшаемом предмете и предмете-улучшителе с помощью функции `avatar.GetItemMetaInfo`. Если оба предмета успешно найдены, инициируется процесс улучшения с использованием одного предмета-агента через вызов `avatar.UpgradeMetaItem`.
:::

## Смотрите также
- [EVENT_META_DIALOG](events.meta#event-meta-dialog)
- [avatar.GetItemMetaInfo](avatar.GetItemMetaInfo)