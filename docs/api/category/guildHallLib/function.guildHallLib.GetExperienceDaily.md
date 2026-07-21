# guildHallLib.GetExperienceDaily

Возвращает оставшееся значение дневного прогресса гильдии.

## Описание

```lua
guildHallLib.GetExperienceDaily(): number
```

Функция возвращает оставшееся значение дневного прогресса гильдии.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `number` - оставшееся значение дневного прогресса гильдии.

## Примеры

### Получение дневного прогресса гильдии

```lua
local guildHallExperienceDaily = guildHallLib.IsExist() and guildHallLib.GetExperienceDaily()
```

::: info Описание примера
В примере запрашивается наличие зала гильдии с помощью `guildHallLib.IsExist()`. При положительном результате возвращается оставшееся значение дневного прогресса.
:::

## Смотрите также

- [guildHallLib.GetExperience](function.guildHallLib.GetExperience)