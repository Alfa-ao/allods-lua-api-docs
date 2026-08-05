# soulProgressLib.GetTalentGraph

Возвращает дерево талантов души.

## Описание

```lua
soulProgressLib.GetTalentGraph(): table
```

Функция возвращает дерево талантов души.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` - таблица с полями:

- **`edges`** (`table`) - список ребер, каждая ячейка таблица с полями:

    - **`firstNodeId`** (`number`) - идентификатор первого узла ребра.

    - **`secondNodeId`** (`number`) - идентификатор второго узла ребра.

- **`nodes`** (`table`) - список узлов, каждая ячейка таблица с полями:

    - **`id`** (`number`) - идентификатор узла.

    - **`start`** (`boolean`) - `true`, если это стартовый узел.

    - **`x`** (`number`) - координата по горизонтали.

    - **`y`** (`number`) - координата по вертикали.

    - **`socket`** (`SocketId` | `nil`) - гнездо для гема.

    - **`quality`** (`number`(`ITEM_QUALITY_*`)) - качество.

- **`version`** (`number`) - версия дерева.

## Примеры

### Получение дерева талантов

```lua
local talentGraph = soulProgressLib.GetTalentGraph()
```

## Смотрите также

- [SocketId](/api/types/SocketId.md)
- [ITEM_QUALITY_*](/api/constants/constants.ITEM_QUALITY.md)