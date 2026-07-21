# itemLib.GetBudgets

Возвращает основные бюджеты статов предмета, подверженных рефорджу.

## Описание

```lua
itemLib.GetBudgets( itemId: ObjectId ): table | nil
```

Функция возвращает таблицу с основными бюджетами статов предмета. Ключами таблицы выступают значения перечисления `ENUM_FloatingBudgetType`, а значениями - числовые бюджеты. Если информация отсутствует, возвращается `nil`.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

Возвращает `table` | `nil`.

- **`[ENUM_FloatingBudgetType]`** (`number`) - Бюджет стата предмета.

## Примеры

### Получение бюджетов предмета

```lua
local itemBudgets = itemLib.GetBudgets( itemId )
```

## Смотрите также

- [ENUM_FloatingBudgetType](ENUM_FloatingBudgetType)