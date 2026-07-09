# userMods.SetAvatarConfigSection

Сохраняет или удаляет таблицу с секцией avatar.

## Описание

```lua
userMods.SetAvatarConfigSection( sysName, section )
```

Сохраняет/удаляет таблицу с секцией для текущего персонажа игрока в локальном пользовательском конфиге. Секции предназначены исключительно для сохранения настроек пользовательских дополнений. Они независимы от секций для оригинальных интерфейсов игры.

::: warning Замечание
Функцию можно использовать только в пользовательских дополнениях (userMods).
:::

## Список параметров

- **`sysName`** (`string`)  
  Название секции.

- **`section`** (`table` | `nil`)  
  Таблица с данными секции. Передача `nil` приводит к удалению секции.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Пример #1 Пример использования `SetAvatarConfigSection`

```lua
local section = {}
section["show"] = showTutorial
section["value01"] = showTutorial01
section["value02"] = showTutorial02

userMods.SetAvatarConfigSection( "tutorial", section )
```