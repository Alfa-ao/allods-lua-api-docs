# checkroomLib.IsHideSpellWhileNotLearned
Определяет необходимость скрытия заклинания в коллекции до его изучения.

## Описание

```lua
checkroomLib.IsHideSpellWhileNotLearned( spellId: SpellId ): boolean
```

Функция проверяет, нужно ли скрывать указанное заклинание в коллекции до момента его изучения игроком.

## Список параметров

- **`spellId`** (`SpellId`) - Идентификатор ресурса заклинания.

## Возвращаемые значения
Возвращает `boolean` - `true`, если заклинание необходимо скрывать в коллекции до изучения, и `false` в противном случае.

## Примеры

### Проверка необходимости скрытия заклинания

```lua
local isSpellLearned = avatar.HasSpell( spellId )
local isHideSpellInCollection = not isSpellLearned and checkroomLib.IsHideSpellWhileNotLearned( spellId )
```

::: info Описание примера
В примере сначала проверяется, изучено ли заклинание с помощью функции `avatar.HasSpell`. Затем вычисляется флаг скрытия: если заклинание не изучено и функция `checkroomLib.IsHideSpellWhileNotLearned` возвращает `true`, то заклинание должно быть скрыто в коллекции.
:::

## Смотрите также

- [avatar.HasSpell](../avatar/function.avatar.HasSpell)