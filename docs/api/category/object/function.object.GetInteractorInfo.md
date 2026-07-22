# object.GetInteractorInfo
Возвращает информацию о взаимодействиях с объектом, доступных главному игроку.

## Описание
```lua
object.GetInteractorInfo( objectId: ObjectId ): table | nil
```
Функция извлекает и возвращает структуру данных, содержащую сведения о доступных взаимодействиях с указанным объектом (НПС или устройством). Для получения детальной информации в процессе диалога используется функция `avatar.GetInteractorInfo`. Если объект является квестодателем, список предлагаемых заданий извлекается функцией `object.GetInteractorQuests`.

::: info Перечисление
**Тип торговца (`VENDOR_*`)**
Определяет тип торгового сервиса, предоставляемого объектом.

**Дополнительные признаки взаимодействия (`INTERACTION_*`)**
- `INTERACTION_NONE`
- `INTERACTION_BINDING_STONE`
- `INTERACTION_ZONE_TELEPORTER`
- `INTERACTION_HERALD`
- `INTERACTION_CLASS_RELATED`
- `INTERACTION_SECRET_KEEPER`
- `INTERACTION_GUILD_AUCTIONER`
- `INTERACTION_META_BLACKSMITH`
- `INTERACTION_BADGE`
- `INTERACTION_SHIP_MASTER`
- `INTERACTION_SOUL_MASTER`
:::

## Список параметров
- **`objectId`** (`ObjectId`) - Идентификатор объекта (НПС или устройство).

## Возвращаемые значения
Возвращает `table` | `nil` - таблицу с информацией о взаимодействиях или `nil`, если произошла ошибка.

- **`interactorId`** (`ObjectId`) - Идентификатор собеседника.

- **`isVendor`** (`boolean`) - Флаг, указывающий, является ли объект торговцем.

- **`isRawVendor`** (`boolean`) - Флаг, показывающий, что таблица торговца прописана в взаимодействиях, а не в репликах (требуется вывод отдельного пункта «Торговать»).

- **`vendorType`** (`number`(`VENDOR_*`)) - Тип торговца.

- **`isReputationVendor`** (`boolean`) - Флаг, указывающий, что торговец продает вещи, требующие определенную репутацию.

- **`isQuestGiver`** (`boolean`) - Флаг, указывающий, выдает ли объект задания.

- **`isSecretFinisher`** (`boolean`) - Флаг, указывающий, выдает ли объект награду за полностью завершенную тайну мира.

- **`isTrainer`** (`boolean`) - Флаг, указывающий, является ли объект тренером.

- **`isMailBox`** (`boolean`) - Флаг, указывающий, предоставляет ли объект сервис почтового ящика.

- **`isAuction`** (`boolean`) - Флаг, указывающий, предоставляет ли объект сервис аукционов.

- **`isTeleportMaster`** (`boolean`) - Флаг, указывающий, предоставляет ли объект сервис телепортов.

- **`isRemortMaster`** (`boolean`) - Флаг, указывающий, предоставляет ли объект сервис реморта.

- **`isDepositeBoxAccessor`** (`boolean`) - Флаг, указывающий, предоставляет ли объект сервис хранилища.

- **`isBestiary`** (`boolean`) - Флаг, указывающий, предоставляет ли объект сервис бестиария (мобы для личного инстанса).

- **`isCurrencyExchanger`** (`boolean`) - Флаг, указывающий, предоставляет ли объект сервис обмена валют.

- **`isChangeRoomMaster`** (`boolean`) - Флаг, указывающий, предоставляет ли объект сервис комнаты перемен.

- **`isBattlegroundControlpoint`** (`boolean`) - Флаг, указывающий, является ли объект контрольной точкой баттлграунда.

- **`isRewardsExchange`** (`boolean`) - Флаг, указывающий, предоставляет ли объект сервис обмена ценностей.

- **`canTakeRestedExp`** (`boolean`) - Флаг, указывающий, предоставляет ли объект сервис отдыха.

- **`hasCues`** (`boolean`) - Флаг, указывающий, есть ли реплика у объекта.

- **`extended`** (`table`) - Таблица дополнительных признаков, индексированная по значениям перечисления `INTERACTION_*`.

- **`hasInteraction`** (`boolean`) - Итоговый результат, указывающий, есть ли у объекта какое-либо взаимодействие из вышеперечисленных.

## Примеры
### Получение информации о взаимодействии с целью
```lua
local info = object.GetInteractorInfo( avatar.GetTarget() )
if info then
    local isMailBox = info.isMailBox

    if info.extended[ INTERACTION_HERALD ] then
        LogInfo( "глашатай" )
    end
end
```

::: info Описание примера
В примере запрашивается информация о взаимодействии с текущей целью игрока. Если информация успешно получена, проверяется наличие сервиса почтового ящика, а также анализируется таблица дополнительных признаков `extended` на наличие флага `INTERACTION_HERALD`.
:::

## Смотрите также
- [avatar.GetInteractorInfo](../avatar/function.avatar.GetInteractorInfo)
- [object.GetInteractorQuests](function.object.GetInteractorQuests)
- [VENDOR_*](../constants#vendor)
- [INTERACTION_*](../constants#interaction)