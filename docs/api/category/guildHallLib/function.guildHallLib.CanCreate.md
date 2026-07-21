# guildHallLib.CanCreate

Проверяет доступность создания оплота гильдии.

## Описание

```lua
guildHallLib.CanCreate(): table
```

Функция выполняет проверку возможности создания оплота гильдии. Возвращает таблицу с результатом проверки и причинами недоступности строительства, если создание невозможно.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table`:

- **`result`** (`boolean`) - `true`, если создание оплота гильдии доступно, иначе `false`.

- **`reason`** (`RequirementsTable`) - причины недоступности строительства оплота гильдии.

## Примеры

### Проверка возможности создания оплота

```lua
if not guildHallLib.IsExist() and guildHallLib.CanCreate().result == true then
    guildHallLib.Create( guildHallName )
end
```

::: info Описание примера
Сначала проверяется отсутствие существующего оплота через `guildHallLib.IsExist()`. Если оплот не существует и результат проверки доступности создания положителен, запускается создание оплота через `guildHallLib.Create()`.
:::

## Смотрите также

- [guildHallLib.IsExist](guildHallLib.IsExist)
- [guildHallLib.Create](guildHallLib.Create)
- [RequirementsTable](RequirementsTable)