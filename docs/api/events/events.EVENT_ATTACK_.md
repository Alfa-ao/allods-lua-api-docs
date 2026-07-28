---
outline: deep
---
## EVENT_ATTACK_RESULT

Уведомление о неудачной немагической атаке.

### Описание

```
EVENT_ATTACK_RESULT
```

Событие уведомляет о неудачной попытке совершения немагической атаки. Более подробную информацию об ошибке можно получить с помощью функции `avatar.GetAttackResult`.

### Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор юнита. Значение не может быть `nil`.

- **`code`** (`number`(`ATTACK_FAILED_*`)) - Код ошибки атаки.

::: info Перечисление
- **`ATTACK_RESULT_UNKNOWN`** - Внутренняя ошибка.
- **`ATTACK_FAILED_DISTANCE`** - Слишком далеко.
- **`ATTACK_FAILED_IN_FRONT`** - Не в передней полусфере.
- **`ATTACK_FAILED_NO_LOS`** - Нет прямой видимости.
:::

### Примеры

#### Обработка ошибки атаки

```lua
local function OnEventAttackResult( unitId, code )
    local errorText = avatar.GetAttackResult( code )
    if errorText and not errorText:IsEmpty() then
        local displayText = userMods.FromWString( errorText )
        LogInfo( "Ошибка атаки: ", displayText )
    end
end

userMods.RegisterEventHandler( "EVENT_ATTACK_RESULT", OnEventAttackResult )
```

### Смотрите также

- [avatar.GetAttackResult](/api/category/avatar/function.avatar.GetAttackResult.md)