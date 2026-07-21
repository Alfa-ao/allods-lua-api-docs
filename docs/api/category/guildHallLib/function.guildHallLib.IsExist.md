# guildHallLib.IsExist
Проверяет существование оплота гильдии.

## Описание
```lua
guildHallLib.IsExist(): boolean
```
Функция возвращает результат проверки существования оплота гильдии.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `boolean` - `true`, если оплот гильдии существует, иначе `false`.

## Примеры
### Проверка и создание оплота гильдии
```lua
if not guildHallLib.IsExist() and guildHallLib.CanCreate().result == true then
    guildHallLib.Create( guildHallName )
end
```
::: info Описание примера
В примере выполняется проверка существования оплота гильдии и возможности его создания. Если оплот отсутствует и создание разрешено, инициируется процесс создания оплота с заданным именем.
:::

## Смотрите также
- [guildHallLib.CanCreate](function.guildHallLib.CanCreate)
- [guildHallLib.Create](function.guildHallLib.Create)