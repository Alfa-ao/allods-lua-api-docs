# userMods.SetAvatarConfigSection

Сохраняет или удаляет таблицу с секцией avatar.

## Описание

```lua
userMods.SetAvatarConfigSection( sysName: string, section: table|nil )
```

Сохраняет/удаляет таблицу с секцией для текущего персонажа игрока в локальном пользовательском конфиге. Секции предназначены исключительно для сохранения настроек пользовательских дополнений.

::: warning Замечание
Функцию можно использовать только в пользовательских дополнениях (userMods).
:::

## Список параметров

- **`sysName`** (`string`) - Название секции.

- **`section`** (`table` | `nil`) - Таблица с данными секции. Передача `nil` приводит к удалению секции.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Сохранение параметров в конфиг

```lua
local section = {}
section["show"] = showTutorial
section["value01"] = showTutorial01
section["value02"] = showTutorial02

userMods.SetAvatarConfigSection( "tutorial", section )
```