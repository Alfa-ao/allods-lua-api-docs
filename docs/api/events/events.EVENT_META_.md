## EVENT_META_DIALOG

### Описание

```
EVENT_META_DIALOG
```

Событие приходит, если было начато улучшение мета-предметов. Необходимо показать диалог для получения параметров для `avatar.UpgradeMetaItem()`.

### Список параметров

Параметры отсутствуют.

---

## EVENT_META_UPGRADE_BREAK

### Описание

```
EVENT_META_UPGRADE_BREAK
```

Событие приходит, если необходимо закрыть диалог улучшения мета-предметов. Необходимо корректно вызывать `avatar.ShowMetaUpgradeDialog()`.

### Список параметров

Параметры отсутствуют.

---

## EVENT_META_UPGRADE_RESULT

### Описание

```
EVENT_META_UPGRADE_RESULT
```

Уведомление о результатах попытки улучшения мета-предмета.

### Список параметров

- **`sysCause`** (`string`(`ENUM_ActionFailCause_*`)) - результат попытки улучшения. Значения соответствуют перечислению `ENUM_ActionFailCause_*`.

- **`isLucky`** (`boolean`) - сработал ли шанс моментального или двойного улучшения.

- **`improvementIncrease`** (`number`) - степень улучшения (в промежутке [0, 99]).

- **`upgradeChanceBehavior`** (`string`(`ENUM_UpgradeChanceBehavior_*`)) - поведение при срабатывании шанса моментального или двойного улучшения. Значения соответствуют перечислению `ENUM_UpgradeChanceBehavior_*`.

- **`upgradeVector`** (`string`(`META_UPGRADE_*`)) - что улучшается: качество или уровень. Значения соответствуют перечислению `META_UPGRADE_*`.

- **`sourceId`** (`ObjectId`) - идентификатор улучшаемого предмета.

- **`enchancerId`** (`ObjectId`) - идентификатор предмета-улучшителя.

- **`agentId`** (`ObjectId`) - идентификатор предмета реагента.

- **`agentCount`** (`number`) - количество использованных предметов-реагентов.

- **`resultId`** (`ObjectId`) - идентификатор полученного предмета.

### Смотрите также

- [avatar.UpgradeMetaItem](/api/category/avatar/function.avatar.UpgradeMetaItem.md)
- [avatar.GetMetaUpgradeResults](/api/category/avatar/function.avatar.GetMetaUpgradeResults.md)
- [ENUM_ActionFailCause_*](/api/enums/enums.ENUM_ActionFailCause.md)
- [ENUM_UpgradeChanceBehavior_*](/api/enums/enums.ENUM_UpgradeChanceBehavior.md)
- [META_UPGRADE_*](/api/constants/constants.META_UPGRADE.md)