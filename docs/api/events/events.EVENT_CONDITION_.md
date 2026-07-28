---
outline: deep
---
## EVENT_CONDITION_EVENT

Событие посылается, если изменилось некоторое условие, заданное дизайнерами.

### Описание

```
EVENT_CONDITION_EVENT
```

Событие посылается, если изменилось некоторое условие, заданное дизайнерами. Информацию о проверке условия см. в функции `avatar.IsConditionValid`.

### Список параметров

- **`alias`** (`string`) - строковое обозначение условия.
- 
- **`isValid`** (`boolean`) - `true`, если условие выполняется, иначе `false`.

### Примеры

#### Обработка события

```lua
function OnConditionEvent( eventData )
    local alias = eventData.alias
    local isValid = eventData.isValid
    
    if isValid then
        LogInfo( "Условие теперь выполняется: ", alias )
    else
        LogInfo( "Условие больше не выполняется: ", alias )
    end
end
```