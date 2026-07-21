# guildHallLib.GetName

Возвращает название оплота гильдии, если он существует.

## Описание

```lua
guildHallLib.GetName(): WString
```

Функция возвращает название оплота гильдии при его наличии.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `WString` - название оплота гильдии.

## Примеры

### Получение названия оплота гильдии

```lua
local guildHallName = guildHallLib.IsExist() and guildHallLib.GetName()
```

::: info Описание примера
В примере сначала проверяется наличие оплота гильдии с помощью функции `guildHallLib.IsExist()`. Если оплот существует, вызывается функция `guildHallLib.GetName()` для получения его названия.
:::

## Смотрите также

- [guildHallLib.IsExist](function.guildHallLib.IsExist)