# guildBossLib.GetSelectedSpells

Возвращает список выбранных заклинаний босса гильдии.

## Описание

```lua
guildBossLib.GetSelectedSpells(): table|nil
```

Функция возвращает список выбранных заклинаний босса гильдии, индексация с 1.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` | `nil` - список выбранных заклинаний босса гильдии, индексация с 1.

## Примеры

### Получение списка выбранных заклинаний

```lua
local currentSpells = guildBossLib.IsExist() and guildBossLib.GetSelectedSpells()
```

::: info Описание примера
В примере сначала проверяется наличие босса гильдии с помощью функции `guildBossLib.IsExist()`. При успешной проверке извлекается список выбранных заклинаний.
:::

## Смотрите также

- [guildBossLib.IsExist](function.guildBossLib.IsExist)
- [guildBossLib.SelectAbilities](function.guildBossLib.SelectAbilities)