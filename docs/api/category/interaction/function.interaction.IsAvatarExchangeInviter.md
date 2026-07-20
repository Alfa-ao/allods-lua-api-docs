# interaction.IsAvatarExchangeInviter
Определяет, является ли главный игрок инициатором торговли с другим игроком.

## Описание
```lua
interaction.IsAvatarExchangeInviter(): boolean
```
Функция возвращает `true`, если главный игрок является инициатором торговли с другим игроком.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `boolean` - `true`, если главный игрок является инициатором торговли с другим игроком.

## Примеры
### Проверка инициатора торговли
```lua
local avatarExchangeInfo = nil
if interaction.IsAvatarExchangeInviter() then
    avatarExchangeInfo = interaction.GetExchangeInviter()
else
    avatarExchangeInfo = interaction.GetExchangeInvited()
end
```
::: info Описание примера
В примере проверяется, является ли главный игрок инициатором торговли. В зависимости от результата, извлекается информация об инициаторе или о приглашенном игроке посредством вызова соответствующих функций.
:::

## Смотрите также
- [interaction.GetExchangeInviter](function.interaction.GetExchangeInviter)
- [interaction.GetExchangeInvited](function.interaction.GetExchangeInvited)