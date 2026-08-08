# spellLib.GetDescriptionParams

Возвращает таблицу подстановочных значений для описания умения.

## Описание

```lua
spellLib.GetDescriptionParams( id: SpellId ): table | nil
```

Функция извлекает и возвращает таблицу подстановочных значений, используемых для формирования текстового описания указанного умения.

## Список параметров

- **`id`** (`SpellId`) - Уникальный идентификатор умения.

## Возвращаемые значения

Возвращает `table` | `nil` - таблицу подстановочных значений для описания умения, если умение существует; `nil`, если умение не найдено.

Таблица представляет собой массив (индексация с 1) таблиц со следующими полями:

- **`key`** (`WString`) - Имя тега подстановки.
- **`value`** (`ValuedText` | `float`) - Значение для тега подстановки.

## Примеры

### Получение подстановочных значений описания умения

```lua
local spellbook = avatar.GetSpellBook()
local spellDescParams = spellLib.GetDescriptionParams( spellbook[1] )
LogInfo( spellDescParams )
```

## Смотрите также

- [avatar.GetSpellBook](/api/category/avatar/function.avatar.GetSpellBook.md)