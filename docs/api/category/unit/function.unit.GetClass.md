# unit.GetClass
Возвращает информацию о классе персонажа.

## Описание

```lua
unit.GetClass( unitId: ObjectId ): table | nil
```

Функция извлекает и возвращает таблицу с параметрами класса указанного юнита. Если данные недоступны, функция возвращает `nil`.

::: info Перечисление
**Имена классов (`className`):**

- `BARD`

- `DRUID`

- `ENGINEER`

- `MAGE`

- `NECROMANCER`

- `PALADIN`

- `PRIEST`

- `PSIONIC`

- `STALKER`

- `WARRIOR`

**Типы маны (`manaType`):**

- `MANA_TYPE_MANA` (`0`)

- `MANA_TYPE_ENERGY` (`1`)

- `MANA_TYPE_NONE` (`2`)
:::

## Список параметров

- **`unitId`** (`ObjectId`) - Идентификатор юнита.

## Возвращаемые значения

Возвращает `table` | `nil` - таблица с параметрами класса или `nil`, если данные недоступны.

- **`className`** (`string`) - Имя класса.

- **`manaType`** (`number`(`MANA_TYPE_*`)) - Тип маны героя (мана/энергия).

- **`name`** (`WString`) - Имя класса (локализованное).

- **`greatName`** (`WString`) - Имя Великого класса (локализованное).

- **`raceClassName`** (`WString`) - Локализованное имя расы-класса.

## Примеры

### Получение класса юнита
```lua
local class = unit.GetClass( unitId )
```

## Смотрите также

- [MANA_TYPE_*](#manatype)