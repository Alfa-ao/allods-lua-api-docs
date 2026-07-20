# family.IsExist

Проверяет наличие семьи у игрока.

## Описание

```lua
family.IsExist( unitId: ObjectId ): boolean
```

Функция возвращает `true`, если у игрока имеется семья.

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор игрока.

## Возвращаемые значения

Возвращает `boolean` - `true`, если семья имеется.

## Примеры

### Проверка наличия семьи

```lua
if family.IsExist( unitId ) then
    local familySpell = family.GetSpellInfo( spellId )
end
```

::: info Описание примера
В примере проверяется наличие семьи у игрока. При положительном результате извлекается информация о заклинании семьи.
:::

## Смотрите также

- [family.GetSpellInfo](function.family.GetSpellInfo)