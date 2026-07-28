---
outline: deep
---
## EVENT_DISASSEMBLING_RESULT

### Описание

```
EVENT_DISASSEMBLING_RESULT
```

Событие приходит при попытке дизассемблинга.

::: warning Замечание
Поле `value` содержит дополнительную информацию по конкретной ошибке. В данный момент оно актуально для `sysResult == "ENUM_DisassemblingFailCause_ItemLevel"`, где передает необходимый уровень скилла.
:::

### Список параметров

- **`skillId`** (`SkillId` | `nil`) - Идентификатор умения, с помощью которого пытались дизассемблировать, если доступно.

- **`sysResult`** (`string`(`ENUM_DisassemblingResult`)) - Результат дизассемблинга. Значения соответствуют перечислению `ENUM_DisassemblingResult`.

- **`value`** (`number` | `nil`) - Дополнительное числовое значение, если есть.

::: info Перечисление
**`ENUM_DisassemblingResult`** - возможные значения результата дизассемблинга.
:::

### Примеры

#### Обработка результата дизассемблинга

```lua
function OnDisassemblingResult( eventData )
    if eventData.sysResult == "ENUM_DisassemblingResult_SUCCESS" then
        LogInfo( "Дизассемблинг прошел успешно." )
    else
        LogInfo( "Ошибка дизассемблинга: ", eventData.sysResult )
        if eventData.value then
            LogInfo( "Дополнительная информация: ", eventData.value )
        end
    end
end

common.RegisterEventHandler( OnDisassemblingResult, "EVENT_DISASSEMBLING_RESULT" )
```