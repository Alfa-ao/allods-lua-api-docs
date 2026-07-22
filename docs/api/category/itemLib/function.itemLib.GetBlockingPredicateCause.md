# itemLib.GetBlockingPredicateCause
Возвращает причину невыполнения предиката для заданного предмета.

## Описание
```lua
itemLib.GetBlockingPredicateCause( itemId: ObjectId ): table|nil
```
Функция возвращает таблицу с информацией о причине невыполнения предиката, либо `nil`, если предикат выполнился успешно.

## Список параметров
- **`itemId`** (`ObjectId`)

Уникальный идентификатор предмета.

## Возвращаемые значения
Возвращает `table` | `nil`.

Если предикат не выполнился, возвращается таблица со следующими полями:

- **`isInNotPredicate`** (`boolean`) - Указывает, использовался ли предикат NOT.

- **`sysCause`** (`string`) - Причина невыполненного предиката (например, `ENUM_ActionFailCause_CreatureLevelTooSmall`).

## Примеры
### Получение и обработка причины невыполнения предиката
```lua
local cause = itemLib.GetBlockingPredicateCause( itemId )
if cause then
    DispatchWarning{
        value01 = GetTextFrom(
            cause.isInNotPredicate and "ActionFailCauseNot" or "ActionFailCause",
            cause.sysCause
        ),
        class = "WarningLogRed"
    }
end
```

## Смотрите также

- [ENUM_ActionFailCause_*](ссылка_1)