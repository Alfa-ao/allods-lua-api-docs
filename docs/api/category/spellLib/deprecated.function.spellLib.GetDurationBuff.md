# spellLib.GetDurationBuff

Ищет на аватаре экземпляр бафа максимальной длительности с ресурсом, совпадающим с durationBuff спелла.

## Описание

::: danger Deprecated

VERSION: [<Badge type="warning" text="18.0.0" />](/index.md#18.0.0-spellLib._DurationBuff) <Badge type="tip" text="Pre-release" />

```lua
spellLib.GetDurationBuff( spellId: SpellId ): ObjectId | nil
```
:::

В случае успеха возвращает id экземпляра бафа. Если такого бафа на аватаре нет или спелл в принципе не имеет такого бафа, возвращает nil. durationBuff - специальный бафф, связанный со спеллом, оставшееся время действия которого надлежит показывать на иконке спелла в панели действий, например, время жизни механизмов инженера и т.п.

## Список параметров

- **`spellId`** (`SpellId`) - Id умения.

## Возвращаемые значения

Возвращает `ObjectId` | `nil` - идентификатор бафа, если такой баф есть у спелла и висит на аватаре в данный момент.

## Примеры

### Базовый вызов

```lua
local durationBuff = spellLib.GetDurationBuff( spellId )
```