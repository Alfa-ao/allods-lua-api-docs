# guild.CanRename

Определяет возможность переименования гильдии, в которую входит аватар игрока.

## Описание

```lua
guild.CanRename(): boolean
```

Функция возвращает логическое значение, указывающее на возможность переименования гильдии, в которую входит аватар игрока. При изменении этой информации приходит событие `EVENT_GUILD_NEED_RENAME_CHANGED`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `boolean` - `true`, если игрок в данный момент может переименовать гильдию своего аватара; иначе `false`.

## Примеры

### Проверка возможности переименования гильдии

```lua
if guild.CanRename() then
    ...
end
```

## Смотрите также

- [EVENT_GUILD_NEED_RENAME_CHANGED](events.guild#event-guild-need-rename-changed)
- [guild.Rename](function.guild.Rename)
- [guild.IsNeedRename](function.guild.IsNeedRename)