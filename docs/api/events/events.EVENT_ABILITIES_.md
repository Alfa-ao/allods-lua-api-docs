---
outline: deep
---
# EVENT_ABILITIES_ELEMENT_ADDED

Событие посылается, когда в книге умений появляется новое пассивное умение.

::: warning Замечание
На этапе загрузки персонажа событие не посылается.
:::

## Поля события

- **`id`** (`AbilityId`) - идентификатор ресурса пассивного умения.

- **`silent`** (`boolean`) - `true`, если не нужно выводить уведомление (нотификацию) о получении умения.

## Примеры

### Обработка получения нового умения

```lua
common.RegisterEventHandler( function( eventData )
    local abilityId = eventData.id
    local isSilent = eventData.silent
    
    if not isSilent then
        -- Логика вывода уведомления
        LogInfo( "Получено новое пассивное умение: ", abilityId )
    end
end, "EVENT_ABILITIES_ELEMENT_ADDED" )
```
::: info Описание примера
В примере регистрируется обработчик события `EVENT_ABILITIES_ELEMENT_ADDED`. Проверяется поле `silent`, и если оно равно `false`, в лог выводится информация о полученном пассивном умении.
:::

## Смотрите также
- [avatar.GetAbilities](/api/category/avatar/function.avatar.GetAbilities.md)
- [avatar.GetAbilityInfo](/api/category/avatar/function.avatar.GetAbilityInfo.md)