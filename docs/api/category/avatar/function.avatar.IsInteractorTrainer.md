# avatar.IsInteractorTrainer
Возвращает признак того, что собеседник является учителем.

## Описание
```lua
avatar.IsInteractorTrainer(): boolean
```
Функция возвращает `true`, если собеседник является учителем, и `false` в противном случае. Вызов функции производится после прихода события `EVENT_INTERACTION_STARTED`. Во время разговора запрещается изменять цель взаимодействия.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `boolean` — `true`, если собеседник является учителем, и `false` в противном случае.

## Примеры
### Проверка собеседника на роль учителя
```lua
function OnInteractionStarted(eventData)
    local isTrainer = avatar.IsInteractorTrainer()
    if isTrainer then
        -- Обработка взаимодействия с учителем
    end
end

common.RegisterEventHandler(OnInteractionStarted, "EVENT_INTERACTION_STARTED")
```

## Смотрите также
- [EVENT_INTERACTION_STARTED](events#event-interaction-started)