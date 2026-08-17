# spellLib.HasDurationBuff

Проверяет наличие `durationBuff` у спелла в ресурсе.

## Описание

::: danger Deprecated

VERSION: [<Badge type="warning" text="18.0.0" />](/index.md#18.0.0-spellLib._DurationBuff) <Badge type="tip" text="Pre-release" />

```lua
spellLib.HasDurationBuff( spellId: SpellId ): boolean
```
:::

Проверяет только ресурс, что является константой для заданного спелла. Не ищет какие-либо бафы на каких-либо объектах. `durationBuff` - специальный бафф, связанный со спеллом, оставшееся время действия которого надлежит показывать на иконке спелла в панели действий, например время жизни механизмов инженера.

## Список параметров

- **`spellId`** (`SpellId`) - Id умения.

## Возвращаемые значения

Возвращает `boolean` - наличие `durationBuff` у спелла в ресурсе.

## Примеры

### Базовый вызов

```lua
local hasDurationBuff = spellLib.HasDurationBuff( spellId )
```