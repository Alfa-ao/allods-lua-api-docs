# lfgLib.Join

Начинает поиск группы в зависимости от выбранной цели и роли.

## Описание

```lua
lfgLib.Join( destinationId: LfgDestinationId, roles: table )
```

Функция инициирует поиск группы в зависимости от выбранной цели и ролей.

## Список параметров

- **`destinationId`** (`LfgDestinationId`) - Идентификатор цели.

- **`roles`** (`table`) - Индексированный список `number`(`ENUM_LFGRole`). Выбранные роли для участия в группе, значения должны быть выбраны из диапазона значений `ENUM_LFGRole`.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Инициация поиска с полученными ролями

```lua
local roles = lfgLib.GetRoles()
lfgLib.Join( destinationId, roles )
```

::: info Описание примера

В примере сначала получают текущие выбранные роли с помощью функции `lfgLib.GetRoles()`, после чего инициируют поиск группы для заданной цели `destinationId`.

:::

## Смотрите также

- [ENUM_LFGRole](ENUM_LFGRole)
- [lfgLib.GetRoles()](function.lfgLib.GetRoles)