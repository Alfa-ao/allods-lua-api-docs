# userMods.GetResourcePersistentId

Возвращает постоянный уникальный строковый идентификатор.

## Описание

```lua
userMods.GetResourcePersistentId( resourceId )
```

Возвращает постоянный уникальный строковый идентификатор произвольного ресурса. Представляет собой строку длинной 32 символа, состоящую из символов шестнадцатеричной системы исчисления, записанных в верхнем регистре.

::: info Пример идентификатора
`5C976713F32D4D60B51F5281E35CBA6B`
:::

::: warning Внимание
- Данная функция работает медленно и не предназначена для частого использования.
- Поддерживаются не все типы ресурсов, для неподдерживаемых функция вернет `nil`.
:::

## Список параметров

- **`resourceId`** (`userdata`)  
Произвольный ресурс.

## Возвращаемые значения

Возвращает `string` — уникальный постоянный строковый идентификатор ресурса (32 HEX-символа в верхнем регистре) или `nil`, если тип ресурса не поддерживается.

## Примеры

### Пример использования `GetResourcePersistentId`

```lua
local unlockInfo = avatar.GetUnlockInfo( id )
local unlockIconInfo = unlockInfo.image and common.GetTextureInfo( unlockInfo.image ) or NO_TEXTURE_INFO

LogInfo( string.format( "UnlockId %s, name: %s, desc: %s, texture [%dx%d] %s",
    userMods.GetResourcePersistentId( unlockInfo.unlockId ),
    userMods.FromWString( unlockInfo.name ),
    userMods.FromWString( unlockInfo.description ),
    unlockIconInfo.realWidth,
    unlockIconInfo.realHeight,
    unlockIconInfo.binaryFile 
) )
```