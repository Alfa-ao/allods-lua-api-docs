# guildBossLib.GetSelectedAbilities

Возвращает список выбранных способностей босса гильдии.

## Описание

```lua
guildBossLib.GetSelectedAbilities(): table|nil
```

Функция возвращает таблицу с идентификаторами выбранных способностей босса гильдии или `nil`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` | `nil` - список выбранных способностей босса гильдии. Индексация элементов в таблице начинается с 1.

## Примеры

### Получение списка выбранных способностей

```lua
local currentAbilities = guildBossLib.IsExist() and guildBossLib.GetSelectedAbilities()
```

::: info Описание примера
В примере сначала проверяется существование босса гильдии с помощью `guildBossLib.IsExist()`. Если босс существует, извлекается список его выбранных способностей через `guildBossLib.GetSelectedAbilities()`.
:::

## Смотрите также

- [guildBossLib.IsExist](function.guildBossLib.IsExist)
- [guildBossLib.SelectAbilities](function.guildBossLib.SelectAbilities)