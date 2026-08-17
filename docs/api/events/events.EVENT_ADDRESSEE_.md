
## EVENT_ADDRESSEE_NOT_FOUND

Присылается, если сервер не смог осуществить какую-то операцию с другим игроком.

### Описание

```lua
EVENT_ADDRESSEE_NOT_FOUND
```

Присылается, если сервер не смог осуществить какую-то операцию с другим игроком.

::: warning Замечание
Типы запроса описаны в перечислении `ENUM_RequestAddressByNameType_...`.
Коды ошибок описаны в перечислении `ENUM_RequestAddressByNameFailCause_...`.
:::

### Список параметров

- **`name`** (`WString`) - Имя другого игрока.

- **`sysRequestType`** (`string`) - Тип запроса. Значения соответствуют перечислению `ENUM_RequestAddressByNameType_...`.

- **`sysCause`** (`string`) - Причина ошибки. Значения соответствуют перечислению `ENUM_RequestAddressByNameFailCause_...`.

### Возвращаемые значения

Обработка события производится в зарегистрированном обработчике.

### Примеры

#### Обработка события

```lua
function OnAddresseeNotFound( eventData )
    local name = userMods.FromWString( eventData.name )
    LogInfo( "Не удалось выполнить операцию для игрока: ", name, " Причина: ", eventData.sysCause )
end

common.RegisterEventHandler( OnAddresseeNotFound, "EVENT_ADDRESSEE_NOT_FOUND" )
```