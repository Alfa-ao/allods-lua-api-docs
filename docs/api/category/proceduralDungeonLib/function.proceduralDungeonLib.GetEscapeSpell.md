# proceduralDungeonLib.GetEscapeSpell

Извлекает идентификатор спелла для покидания процедурного данжа.

## Описание

```lua
proceduralDungeonLib.GetEscapeSpell(): SpellId | nil
```

Функция возвращает идентификатор ресурса спелла, предназначенного для покидания процедурного данжа.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `SpellId` | `nil` - идентификатор ресурса спелла, или `nil`, если спелл отсутствует.

## Примеры

### Получение и применение спелла побега

```lua
local spellId = proceduralDungeonLib.GetEscapeSpell()
if spellId then
    avatar.RunSpell( spellId )
end
```

::: info Описание примера
В примере извлекается идентификатор спелла для покидания данжа. Если идентификатор успешно получен, инициируется его применение через функцию `avatar.RunSpell`.
:::

## Смотрите также

- [avatar.RunSpell](../avatar/function.avatar.RunSpell)