# userMods.SetGlobalConfigSection

Сохраняет или удаляет таблицу с секцией global.

## Описание

```lua
userMods.SetGlobalConfigSection( sysName, section )
```

Сохраняет/удаляет таблицу с секцией в локальном пользовательском конфиге для приложения. Секции предназначены исключительно для сохранения настроек пользовательских дополнений. Они независимы с секциями для оригинальных интерфейсов игры.

## Список параметров

- **`sysName`** (`string`)  
  Название секции.

- **`section`** (`table` | `nil`)  
  Таблица с данными секции. Если передано `nil`, секция удаляется.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Пример #1 Пример использования `SetGlobalConfigSection`

```lua
local section = {}
section.posX = 100
section.posY = 100

userMods.SetGlobalConfigSection( "Dialog01", section )
```