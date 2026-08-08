# unit.GetTrainerClass

Возвращает информацию о классе тренера.

## Описание

```lua
unit.GetTrainerClass( unitId: ObjectId ): table | nil
```

Функция возвращает информацию о классе тренера. Класс тренера может отличаться от класса самого персонажа. В случае ошибки возвращается `nil`.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор юнита.

## Возвращаемые значения

Возвращает `table` | `nil` - таблицу с параметрами класса или `nil`, если данные недоступны.

- **`className`** (`string`) - Имя класса.

- **`manaType`** (`number`(`MANA_TYPE_*`)) - Тип маны обучаемого класса (MANA/ENERGY).

- **`name`** (`WString`) - Локализованное имя класса.

## Примеры

### Получить класс юнита

```lua
local class = unit.GetTrainerClass( unitId )
```

## Смотрите также

- [unit.GetClass](/api/category/unit/function.unit.GetClass.md)
- [MANA_TYPE_*](/api/constants/constants.MANA.md)