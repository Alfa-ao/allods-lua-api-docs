# avatar.ReturnToStartCue
Запрашивает начальную реплику NPC-собеседника.

## Описание
```lua
avatar.ReturnToStartCue()
```
Функция инициирует запрос начальной реплики NPC-собеседника. Результат выполнения передается через событие `EVENT_INTERACTION_STARTED`.

::: warning Замечание
Результат выполнения функции передается через событие `EVENT_INTERACTION_STARTED`.
:::

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Запрос начальной реплики NPC
```lua
avatar.ReturnToStartCue()
```

## Смотрите также
- [EVENT_INTERACTION_STARTED](events.interaction#event-interaction-started)