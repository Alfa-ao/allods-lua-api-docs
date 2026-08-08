# userMods.GetAccountUniqueId

Возвращает идентификатор аккаунта игрока.

## Описание

```lua
userMods.GetAccountUniqueId(): string
```

Возвращает уникальный приватный строковый идентификатор аккаунта игрока. Представляет собой строку длиной 32 символа, состоящую из символов шестнадцатеричной системы исчисления, записанных в верхнем регистре.

::: info Пример идентификатора
`5C976713F32D4D60B51F5281E35CBA6B`
:::

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `string` - уникальный приватный строковый идентификатор аккаунта.

## Примеры

### Пример использования `GetAccountUniqueId`

```lua
local accountUniqueId = userMods.GetAccountUniqueId()
if accountUniqueId == myAccountId then
    -- do something special
end
```