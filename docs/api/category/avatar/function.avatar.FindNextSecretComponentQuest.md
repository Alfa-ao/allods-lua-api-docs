# avatar.FindNextSecretComponentQuest
Отправляет запрос на получение задания, направляющего к NPC для выдачи следующего доступного квеста из цепочки этапа тайны мира.

## Описание
```lua
avatar.FindNextSecretComponentQuest( secretId: number, componentIndex: number )
```
Отправляет запрос на получение задания, направляющего к NPC для выдачи следующего доступного квеста из цепочки этапа тайны мира. Результатом выполнения запроса является передача события `EVENT_QUEST_FIND_NEXT_RESULT`.

::: warning Замечание
Если клиент находится в состоянии ожидания ответа от сервера на аналогичный запрос, дублирующий запрос игнорируется.
:::

## Список параметров
- **`secretId`** (`number`)
Идентификатор основного квеста тайны мира.
- **`componentIndex`** (`number`)
Порядковый номер запрашиваемой компоненты, получаемый через `avatar.GetSecretComponents`.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Запрос следующего квеста тайны мира
```lua
local secretId = 100500
local components = avatar.GetSecretComponents(secretId)

if components and #components > 0 then
    avatar.FindNextSecretComponentQuest(secretId, 1)
end
```
::: info Описание примера
В примере проверяется наличие компонент у тайны мира и отправляется запрос на получение следующего квеста для первой компоненты.
:::

## Смотрите также
- [EVENT_QUEST_FIND_NEXT_RESULT](events.quest#event-quest-find-next-result)
- [avatar.GetSecretComponents](avatar.get-secret-components)