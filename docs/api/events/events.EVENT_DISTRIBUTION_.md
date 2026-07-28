---
outline: deep
---
## EVENT_DISTRIBUTION_FINISHED

### Описание

```
EVENT_DISTRIBUTION_FINISHED
```

Уведомление об окончании ролла.

### Список параметров

- **`rollId`** (`ObjectId`) - Уникальный идентификатор ролла.

### Примеры

#### Обработка окончания ролла

```lua
function OnDistributionFinished( eventData )
    LogInfo( "Ролл завершен, идентификатор: ", eventData.rollId )
end

common.RegisterEventHandler( OnDistributionFinished, "EVENT_DISTRIBUTION_FINISHED" )
```