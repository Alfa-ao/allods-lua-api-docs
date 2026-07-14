# avatar.FindCurrentSecretComponentQuest
Получает идентификатор текущего квеста для этапа тайны мира.

## Описание
```lua
avatar.FindCurrentSecretComponentQuest( secretId: QuestId, componentIndex: number ): QuestId | nil
```
Получает идентификатор текущего квеста для выбранного этапа тайны мира. Если задание отсутствует в квестбуке аватара, возвращает `nil`. Для поиска и получения потерянного задания необходимо использовать `avatar.FindNextSecretComponentQuest`.

## Список параметров
- **`secretId`** (`QuestId`)
Идентификатор основного квеста тайны мира.
- **`componentIndex`** (`number`)
Порядковый номер интересующей компоненты, получаемый через `avatar.GetSecretComponents`.

## Возвращаемые значения
Идентификатор текущего квеста для выбранного этапа тайны мира. Возвращает `nil`, если квест отсутствует у аватара.

## Примеры
### Получение идентификатора текущего квеста
```lua
local questId = avatar.FindCurrentSecretComponentQuest( secretId, componentIndex )
```