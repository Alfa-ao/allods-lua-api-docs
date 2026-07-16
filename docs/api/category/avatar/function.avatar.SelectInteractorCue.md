# avatar.SelectInteractorCue
Отправляет выбранный ответ на реплику NPC-собеседника.
## Описание
```lua
avatar.SelectInteractorCue( index: number )
```
Функция отправляет выбранный ответ на реплику NPC-собеседника. Индекс ответа берется из списка доступных вариантов, полученного через функцию `avatar.GetInteractorNextCues()`.

## Список параметров
- **`index`** (`number`)
Индекс ответа из списка доступных вариантов, возвращаемого функцией `avatar.GetInteractorNextCues()`.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Выбор первого доступного ответа
```lua
local nextCues = avatar.GetInteractorNextCues()
if nextCues[0] then
    avatar.SelectInteractorCue( 0 )
end
```
::: info Описание примера
В примере сначала запрашивается список доступных ответов на реплику NPC с помощью `avatar.GetInteractorNextCues()`. Затем проверяется наличие первого ответа (с индексом `0`). Если ответ существует, он отправляется через `avatar.SelectInteractorCue()`.
:::

## Смотрите также
- [avatar.GetInteractorCue](avatar.GetInteractorCue)
- [avatar.GetInteractorNextCues](avatar.GetInteractorNextCues)