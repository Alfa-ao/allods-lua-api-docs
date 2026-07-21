# guildHallLib.Create

Инициирует создание оплота гильдии.

## Описание

```lua
guildHallLib.Create( hallName: WString, bossName: WString, bossIndex: number )
```

В случае успеха передается событие EVENT_GUILD_HALL_STATE_CHANGED.

## Список параметров

- **`hallName`** (`WString`) - название оплота гильдии.

- **`bossName`** (`WString`) - название босса гильдии.

- **`bossIndex`** (`number`) - индекс выбранного босса.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Создание оплота гильдии

```lua
if not guildHallLib.IsExist() and guildHallLib.CanCreate().result == true then
    guildHallLib.Create( guildHallName, bossName, bossIndex )
end
```

::: info Описание примера
Проверяется наличие оплота и возможность его создания. При успешной проверке инициируется создание оплота с указанными параметрами.
:::

## Смотрите также

- [guildHallLib.IsExist](function.guildHallLib.IsExist)
- [guildHallLib.CanCreate](function.guildHallLib.CanCreate)