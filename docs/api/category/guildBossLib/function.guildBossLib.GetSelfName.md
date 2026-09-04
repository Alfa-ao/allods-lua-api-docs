# guildBossLib.GetSelfName

Возвращает собственное имя босс гильдии, данное ему при создании.

## Описание

```lua
guildBossLib.GetSelfName(): WString|nil
```

Функция возвращает собственное имя босс гильдии, данное ему при создании.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `WString` или `nil` - собственное имя босс гильдии.

## Примеры

### Получение имени босс гильдии

```lua
local bossSelfName = guildBossLib.IsExist() and guildBossLib.GetSelfName()
```

## Смотрите также

- [guildBossLib.IsExist](/api/category/guildBossLib/function.guildBossLib.IsExist.md)