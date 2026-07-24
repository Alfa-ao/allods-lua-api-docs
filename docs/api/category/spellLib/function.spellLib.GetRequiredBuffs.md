# spellLib.GetRequiredBuffs

Возвращает список бафов, требующихся для применения умения.

## Описание

```lua
spellLib.GetRequiredBuffs( id: SpellId ): table
```

Функция формирует и возвращает таблицу с информацией о бафах, требующихся для применения указанного умения.

## Список параметров

- **`id`** (`SpellId`) - Идентификатор умения.

## Возвращаемые значения

Возвращает `table` - список таблиц, содержащих следующие поля:

- **`buffId`** (`BuffId`) - Идентификатор ресурса бафа.
- **`stackCount`** (`number`) - Требуемое число стаков бафа.

## Примеры

### Получение списка требуемых бафов для умения

```lua
local spellbook = avatar.GetSpellBook()
local spellRequiredBuffs = spellLib.GetRequiredBuffs( spellbook[1] )
```

::: info Описание примера
В примере сначала получается список умений из книги заклинаний с помощью функции `avatar.GetSpellBook`. Затем для первого умения из списка вызывается функция `spellLib.GetRequiredBuffs`, которая возвращает таблицу с информацией о необходимых бафах.
:::

## Смотрите также

- [avatar.GetSpellBook](../avatar/function.avatar.GetSpellBook)