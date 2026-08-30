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


```
table(3) {
    ["edges"] => table(622) {
        [0] => table(2) {
            ["firstNodeId"] => number(1)
            ["secondNodeId"] => number(23)
        }
        [1] => table(2) {
            ["firstNodeId"] => number(1)
            ["secondNodeId"] => number(145)
        }
        [2] => table(2) {
            ["firstNodeId"] => number(1)
            ["secondNodeId"] => number(479)
        }
        ...
    }
}
```

<!--
- **`nodes`** (`table`) - список узлов, каждая ячейка таблица с полями:

    - **`id`** (`number`) - идентификатор узла.

    - **`start`** (`boolean`) - `true`, если это стартовый узел.

    - **`x`** (`number`) - координата по горизонтали.

    - **`y`** (`number`) - координата по вертикали.

    - **`socket`** (`SocketId` | `nil`) - гнездо для гема.

    - **`quality`** (`number`(`ITEM_QUALITY_*`)) - качество.

- **`version`** (`number`) - версия дерева.
-->

## Примеры

### Получение дерева талантов

```lua
local talentGraph = soulProgressLib.GetTalentGraph()
```