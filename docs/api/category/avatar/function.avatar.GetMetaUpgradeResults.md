# avatar.GetMetaUpgradeResults
Возвращает предсказание по улучшению мета-предмета.

## Описание
```lua
avatar.GetMetaUpgradeResults( sourceId: ObjectId, enhancerId: ObjectId, agentId: ObjectId, agentCount: number ): table | nil
```
Функция возвращает таблицу с результатами предсказания улучшения мета-предмета для заданной комбинации предметов и агентов, или `nil` в случае возникновения ошибок. Значения используются для оценки шансов, поведения и итоговых характеристик до фактического выполнения улучшения.

::: warning Замечание
Возможные варианты поведения при срабатывании шанса улучшения описаны в перечислении `ENUM_UpgradeChanceBehavior_*`.
:::

## Список параметров
- **`sourceId`** (`ObjectId`)
Идентификатор улучшаемого предмета.
- **`enhancerId`** (`ObjectId`)
Идентификатор предмета-улучшителя.
- **`agentId`** (`ObjectId`)
Идентификатор предмета-агента, требуемого для улучшения.
- **`agentCount`** (`number`)
Количество используемых агентов.

## Возвращаемые значения
Возвращает `table` или `nil`. Если ошибок не возникает, возвращается таблица со следующими полями:
- **`canUpgrade`** (`boolean`)
`true`, если есть возможность улучшить при таком сочетании параметров; `false`, если возможности улучшить предмет нет.
- **`upgradeChance`** (`number` | `nil`)
Шанс моментального или двойного улучшения в промежутке `[0, 1]`. Если возможности улучшить нет, возвращается `nil`.
- **`upgradeChanceBehavior`** (`number` | `nil`)
Поведение при срабатывании шанса моментального или двойного улучшения. Значения соответствуют перечислению `ENUM_UpgradeChanceBehavior_*`. Если возможности улучшить нет, возвращается `nil`.
- **`sysUpgradeChanceBehavior`** (`string` | `nil`)
Строковый псевдоним поведения при срабатывании шанса моментального или двойного улучшения (например, `"ENUM_UpgradeChanceBehavior_..."`). Если возможности улучшить нет, возвращается `nil`.
- **`sysUpgradeVector`** (`number`)
Вектор улучшения, определяющий, что именно улучшается при срабатывании шанса моментального или двойного улучшения: качество или уровень. Значения соответствуют перечислению `META_UPGRADE_*`.
- **`improvement`** (`number` | `nil`)
Степень улучшения, которая будет у результата после операции, в промежутке `[0, 99]`. Если возможности улучшить нет, возвращается `nil`.
- **`maxImprovement`** (`number` | `nil`)
Наибольшая возможная степень улучшения (при бесконечном значении `agentCount`) в промежутке `[0, 100]`. Предполагается, что если `improvement` равен `maxImprovement`, то увеличивать `agentCount` бессмысленно. Если возможности улучшить нет, возвращается `nil`.
- **`resultId`** (`ObjectId`)
Идентификатор предмета, который получится, если мета-апгрейд предполагает замену предмета при склейке (`sysUpgradeVector == META_UPGRADE_ITEM`).

## Примеры
### Проверка возможности и шанса улучшения
```lua
local tryResult = avatar.GetMetaUpgradeResults( sourceId, enhancerId, agentId, 1 )
if tryResult and tryResult.canUpgrade then
  LogInfo( "Шанс улучшить: ", tryResult.upgradeChance * 100 )
end
```

## Смотрите также
- [avatar.UpgradeMetaItem](avatar.UpgradeMetaItem)
- [avatar.GetItemMetaInfo](avatar.GetItemMetaInfo)
- [EVENT_META_UPGRADE_RESULT](events.meta_upgrade#event-meta-upgrade-result)
- [ENUM_UpgradeChanceBehavior_*](enums.meta_upgrade#enum-upgradechancebehavior)
- [META_UPGRADE_*](enums.meta_upgrade#meta-upgrade)