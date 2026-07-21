# guildBossLib.IsExist

Проверяет существование босса гильдии.

## Описание

```lua
guildBossLib.IsExist(): boolean
```

Функция возвращает логическое значение, указывающее на наличие босса гильдии.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `boolean` - `true`, если босс гильдии существует, иначе `false`.

## Примеры

### Проверка существования и получение информации

```lua
if guildBossLib.IsExist() then
    local bossInfo = guildBossLib.GetInfo()
end
```

::: info Описание примера
Проверяется существование босса гильдии, и в случае успеха извлекается информация о нем с помощью функции `guildBossLib.GetInfo`.
:::

## Смотрите также

- [guildBossLib.GetInfo](function.guildBossLib.GetInfo)