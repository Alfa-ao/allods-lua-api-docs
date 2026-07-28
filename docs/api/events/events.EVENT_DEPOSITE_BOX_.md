---
outline: deep
---
## EVENT_DEPOSITE_BOX_CHANGED

### Описание

```
EVENT_DEPOSITE_BOX_CHANGED
```

Уведомление об изменении состояния хранилища.

### Список параметров

Параметры отсутствуют.

### Примеры

#### Обработка изменения состояния хранилища

```lua
function OnDepositeBoxChanged( eventData )
    LogInfo( "Состояние хранилища изменено." )
end

common.RegisterEventHandler( OnDepositeBoxChanged, "EVENT_DEPOSITE_BOX_CHANGED" )
```