# guildHallLib.GetExperience

Возвращает текущее значение прогресса гильдии.

## Описание

```lua
guildHallLib.GetExperience(): number
```

Функция возвращает текущее значение прогресса гильдии.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `number` - текущее значение прогресса гильдии.

## Примеры

### Получение опыта гильдии

```lua
local guildHallExperience = guildHallLib.IsExist() and guildHallLib.GetExperience()
```

::: info Описание примера

В примере сначала проверяется наличие зала гильдии с помощью `guildHallLib.IsExist()`. Если зал существует, извлекается текущее значение прогресса гильдии через `guildHallLib.GetExperience()`.

:::

## Смотрите также

- [guildHallLib.GetExperienceDaily](function.guildHallLib.GetExperienceDaily)